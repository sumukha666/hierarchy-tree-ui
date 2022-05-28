import Employees from "./components/employees/Employees";
import Home from "./components/home/Home";
import Teams from "./components/teams/Teams";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
];
