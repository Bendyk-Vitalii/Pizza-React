import React from "react";
import { Nav, NavIcon } from "./Navbar";
import LogInModal from "./LogInModal";
import CartModal from "./CartModal"


const Navbar = ({ toogle, cart }) => {
  return (
      <Nav>
        <LogInModal />
        <CartModal cart={cart} />
        <NavIcon onClick={toogle} /> 
      </Nav>
  );
};

export default Navbar;
