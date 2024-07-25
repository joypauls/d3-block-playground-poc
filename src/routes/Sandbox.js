import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import BasicBlockStack from "../d3/BasicBlockStack";

function Root() {
  return <BasicBlockStack />;
}

export default Root;
