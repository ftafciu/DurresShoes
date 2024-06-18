import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Icon } from "@mui/material";
import TextField from "@mui/material/TextField";
import MDBox from "../../../../components/MDBox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import MDButton from "../../../../components/MDButton";

function ProductCreateContent() {

  const navigator = useNavigate();
  const [cost, setCost] = useState(0);
  const [code, setCode] = useState('');

  const updateCost = (event)=>{
    if(!event.target.value)
        setCost(0);
    const newCost = parseFloat(event.target.value);
    if (isNaN(newCost) || newCost < 0){
        
    } else {
        setCost(newCost)
    }
  }

  return (
    <MDBox
      style={{
        margin: "0 auto",
        width: "70%",
        height: "90%",
        backgroundColor: "#F4F4F4",
        borderRadius: "15px",
        boxShadow:
          "0px 10px 15px rgba(0, 0, 0, 0.3), 0px 15px 30px rgba(0, 0, 0, 0.22)",
      }}
      py={3}
    >
      <div
        style={{
          width: "90%",
          borderBottom: "2px solid gainsboro",
          margin: "5px auto 15px auto",
        }}
      >
        <h3>Create a new product</h3>
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <TextField
          id="outlined-basic"
          label="Product code"
          variant="outlined"
          fullWidth
          style={{ margin: "10px 0" }}
          value={code}
          onChange={(event)=>setCode(event.target.value)}
        />
        <FormControl fullWidth style={{ margin: "10px 0" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Cost</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">L</InputAdornment>}
            label="Amount"
            value={cost}
            onChange={updateCost}
          />
        </FormControl>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        width: "90%",
        margin: "300px auto 0 auto",
        borderTop: "2px solid gainsboro",
        height: "70px"
      }}>
        <MDButton style={{ marginRight: "8px" }} color="info">
            <Icon style={{ marginRight: "5px" }}>check</Icon>
            Confirm
        </MDButton>
        <MDButton color="primary" onClick={()=>{
            navigator("/app/products")
        }}>
            <Icon style={{ marginRight: "5px" }}>close</Icon>
            Cancel
        </MDButton>
      </div>
    </MDBox>
  );
}

export default ProductCreateContent;