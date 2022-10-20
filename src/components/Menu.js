import React from "react";
import Info from "./Info";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import styled from "styled-components";
import Footer from "./Footer";
const Menu = () => {
  return (
    <MenuStyle>
      <div className="menu">
        <LeftSidebar />
        <Info />
        <RightSidebar />
      </div>
      <Footer />
    </MenuStyle>
  );
};

const MenuStyle = styled.div`
  .menu {
    display: flex;
    justify-content: space-between;
  }
`;
export default Menu;
