import React, { useEffect, useState } from "react";
import { Card, Icon, useMediaQuery } from "@mui/material";
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";
import DataTable from "../../../../components/Tables/DataTable";
import { useSnackbar } from "notistack";
import MDButton from "../../../../components/MDButton";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "./components/ConfirmModal";
import { getAllExpenses, deleteExpense } from "./scripts/expenses-scripts";

function ListContent() {
  const isMobile = useMediaQuery("(max-width: 599px)");
  const [expenses, setExpenses] = useState([]);
  const [expensesUpdated, setExpensesUpdated] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const notification = { add: enqueueSnackbar, close: closeSnackbar };
  const navigate = useNavigate();
  const rows = expenses.map((expense) => {
    return {
      name: (
        <MDBox>
          <MDTypography fontSize="13pt" fontWeight="bold">
            {expense.name}
          </MDTypography>
        </MDBox>
      ),
      date: (
        <MDTypography>{expense.isMonthly ? "Spese mensile" :expense.date.slice(0, 10)}</MDTypography>
      ),
      amount: (
        <MDTypography>{`${expense.quantity.$numberDecimal} Lek`}</MDTypography>
      ),
      actions: (
        <MDBox style={{ display: "flex" }}>
          <MDButton
            color="success"
            style={{ marginRight: "5px" }}
            onClick={() => {
              navigate("/app/spese/edit/" + expense._id);
            }}
          >
            <Icon>edit</Icon>
          </MDButton>
          <ConfirmModal
            confirmAction={() => {
              deleteExpense(notification, navigate, expense._id, setExpensesUpdated)
            }}
          />
        </MDBox>
      ),
    };
  });
  const columns = [
    { Header: "Nome della spesa", accessor: "name", align: "left" },
    { Header: "Data", accessor: "date", align: "center" },
    { Header: 'Quantita', accessor: 'amount', align: 'center'},
    { Header: "Azioni", accessor: "actions", align: "center" },
  ];

  useEffect(() => {
    getAllExpenses(notification, navigate).then(data=>{
      if(data)
        setExpenses(data)
    })
    setExpensesUpdated(false);
  }, [expensesUpdated]);

  return (
    <Card>
      <MDBox
        mx={2}
        mt={-3}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        display="flex"
        justifyContent="space-between"
      >
        <MDTypography variant="h6" color="white">
          Spese
        </MDTypography>
        <MDButton
          onClick={() => {
              navigate("/app/spese/create");
          }}
        >
          <Icon style={{ marginRight: "5px" }}>paid</Icon>
          {isMobile ? "" : "Crea nuovo"}
        </MDButton>
      </MDBox>
      <MDBox pt={3}>
        <DataTable
          table={{ columns, rows }}
          isSorted={false}
          entriesPerPage={false}
          showTotalEntries={false}
          noEndBorder
        />
      </MDBox>
    </Card>
  );
}

export default ListContent;