import App from "@/App";
import About from "@/pages/About";
import login from "@/pages/Login";
 

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",

    children: [
      {
        Component: About,
        path: "about",
      },
      
    ],

  },
  {
        Component: login ,
        path: "login"
      }
]);

export default router;
