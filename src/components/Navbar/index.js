import React from "react";
import { Nav, NavIcon, FixedWrapper } from "./Navbar";
import LogInModal from "../LogInModal";
import CartModal from "../CartModal"


const Navbar = ({ toogle }) => {
  return (
    <FixedWrapper>
      <Nav>
        <LogInModal />
        <CartModal />
        <NavIcon onClick={toogle} /> 
      </Nav>
    </FixedWrapper>
  );
};

export default Navbar;
