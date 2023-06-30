import "../styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import components */
import Main from "./pages/Main";
import { Categories } from "./objects/questionSet";
import { Success } from "./pages/success";
import { Main2 } from "./pages/Main2";
import { Breakdown } from "./pages/breakdown";
import ProfilePage from "../Admin/components/Profilepage";
import {GoToAdmin }from "./AdminLink/adminlink";
//import Dashboard from "../Admin/index"
/** react routes */
const router = createBrowserRouter([
  {
    path: "/prep",
    element: <Main></Main>,
  },
  {
    path: "/",
    element: <Main2 />,
  },
  {
    path: "/quiz",
    element: <Categories />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/summary",
    element: <Breakdown />,
  },
  {
    path: "/erp_myAdmin",
    element: <GoToAdmin />,
  },
  {
    path: "/admin/profile",
    element: <ProfilePage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
