import React from "react";
import {Nav, NavLink, NavIcon, Bars } from './Navbar'
import ModalElement from '../Modal'

const Navbar = ({toogle}) => {
    return (
        <React.Fragment>
            <ModalElement />
            <Nav> 
            <NavLink to='/'>Pizza</NavLink>
            <NavIcon onClick={toogle}>
                <p>Menu</p>
                <Bars />
            </NavIcon>
            </Nav>
        </React.Fragment>
    );
};

export default Navbar;