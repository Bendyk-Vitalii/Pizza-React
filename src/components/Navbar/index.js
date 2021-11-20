import React from "react";
import { Nav, NavIcon, FixedWrapper } from "./Navbar";
import LogInModal from "../LogInModal";
import CartModal from "../CartModal"
import { useSelector } from "react-redux"

const Navbar = ({ toogle }) => {
  const { status, error } = useSelector((state) => state.cart)
  
  { error && <h2>An error occured: {error}</h2>}
  return (
    <FixedWrapper>
      <Nav>
        <LogInModal />
        { status === "loading" ? <h2>Loading...</h2> : <CartModal /> }
        <NavIcon onClick={toogle} /> 
      </Nav>
    </FixedWrapper>
  );
};

export default Navbar;
