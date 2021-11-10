import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./Sidebar";

const Sidebar = ({ isOpen, toogle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toogle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink
          to="pizza"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
        >
          Pizzas
        </SidebarLink>
        <SidebarLink to="desserts">Desserts</SidebarLink>
        <SidebarLink to="pizza">Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
