import Icon from "@mui/material/Icon";
import Test from "../components/test";
import EmployeesContent from "../pages/admin/content/employees/index.js"
import DashboardContent from "../pages/admin/content/dashboard/index.js";
import ProductContent from "../pages/admin/content/products/index.js";
import FinancialContent from "../pages/admin/content/financial/index.js";
import UserContent from "../pages/admin/content/users/index.js";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <DashboardContent />,
  },
  {
    type: "collapse",
    name: "Employees",
    key: "employees",
    icon: <Icon fontSize="small">worker</Icon>,
    route: "/employees*",
    component: <EmployeesContent />,
  },
  {
    type: "collapse",
    name: "Products",
    key: "products",
    icon: <Icon fontSize="small">inventory_2</Icon>,
    route: "/products*",
    component: <ProductContent />,
  },
  {
    type: "collapse",
    name: "Financial reports",
    key: "financial",
    icon: <Icon fontSize="small">analytics</Icon>,
    route: "/financial*",
    component: <FinancialContent />,
  },
  {
    type: "collapse",
    name: "User management",
    key: "user",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/user*",
    component: <UserContent />,
  },
];

export default routes;