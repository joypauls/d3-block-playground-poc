import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import Sandbox from "./routes/Sandbox";
import Animation from "./routes/Animation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "sandbox",
        element: <Sandbox />,
      },
      {
        path: "animation",
        element: <Animation />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
