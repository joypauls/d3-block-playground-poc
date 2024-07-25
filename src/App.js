import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import Sandbox from "./routes/Sandbox";
import BasicBlockStack from "./d3/BasicBlockStack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "Sandbox",
        element: <Sandbox />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
