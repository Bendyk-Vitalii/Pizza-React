import React from "react";
import { Nav, NavIcon, FixedWrapper, Spinner } from "./Navbar";
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
        { status === "loading" ? <Spinner color="white"/> : <CartModal /> }
        <NavIcon onClick={toogle} /> 
      </Nav>
    </FixedWrapper>
  );
};

export default Navbar;
