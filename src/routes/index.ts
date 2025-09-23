import App from "@/App";
import AdminDashboard from "@/components/Layout/AdminLayout/AdminDashboard";
import AdminLayout from "@/components/Layout/AdminLayout/AdminLayout";
import AllUser from "@/components/Layout/AdminLayout/AllUser";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import SenderLayout from "@/components/Layout/SenderLayout/SenderLayout";
import { createBrowserRouter } from "react-router";
import CreateParcel from "@/pages/sender/CreateParcel";
import ReceiverLayout from "@/components/Layout/ReceiverLayout/ReceiverLayout";

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
        Component:About  ,
      }, {
        path: "contact",
        Component:Contact
      }, {
        path: "/login",
        Component:Login
      }, {
        path: "/register",
        Component:Register
      }
    ]
  },
   {
        Component: SenderLayout,
        path: "/sender",
        children: [
            {
                path: "create-parcel",
                Component: CreateParcel,
            },
            // {
            //     path: "dashboard",
            //     Component: SenderDashboardHome,
            // },
        ],
    }, 
   {
        Component: ReceiverLayout,
        path: "/receiver",
        children: [
            {
                path: "create-parcel",
                Component: CreateParcel,
            },
            // {
            //     path: "dashboard",
            //     Component: SenderDashboardHome,
            // },
        ],
    }, {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        path: "/admin/dashboard",
        Component:AdminDashboard
      },{
        path: '/admin/all-users',
        Component:AllUser
      }
    ]
  }
])