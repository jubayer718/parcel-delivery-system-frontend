import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "about",
        Component:About ,
      }, {
        path: "contact",
        Component:Contact
      }
    ]
  }
])