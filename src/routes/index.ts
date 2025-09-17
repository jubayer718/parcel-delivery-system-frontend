import App from "@/App";
import AdminLayout from "@/components/Layout/AdminLayout/AdminLayout";
import AllUser from "@/components/Layout/AdminLayout/AllUser";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component:Home ,
      }, 
      {
        path: "about",
        Component:About ,
      }, {
        path: "contact",
        Component:Contact
      }
    ]
  }, {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        path: 'all-users',
        Component:AllUser
      }
    ]
  }
])