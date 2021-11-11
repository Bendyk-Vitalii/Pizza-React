import React from "react";
import { Nav, NavIcon, FixedWrapper } from "./Navbar";
import LogInModal from "../LogInModal";
import CartModal from "../CartModal"


const Navbar = ({ toogle, cart }) => {
  return (
    <FixedWrapper>
      <Nav>
        <LogInModal />
        <CartModal cart={cart} />
        <NavIcon onClick={toogle} /> 
      </Nav>
    </FixedWrapper>
  );
};

export default Navbar;
