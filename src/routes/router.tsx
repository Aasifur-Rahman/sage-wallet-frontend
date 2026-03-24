import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/login";
 

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
        Component: Login ,
        path: "login"
      }
]);

export default router;
