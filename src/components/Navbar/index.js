import React from "react";
import { Nav, NavIcon, Bars, Cart } from "./Navbar";
import ModalElement from "../Modal";

const Navbar = ({ toogle }) => {
  return (
    <React.Fragment>
      <ModalElement />
      <Nav>
        <Cart/>
        <NavIcon onClick={toogle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
