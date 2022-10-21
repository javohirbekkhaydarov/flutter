import React from "react";
import Info from "./Info";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import styled from "styled-components";
import Footer from "./Footer";
const Menu = ({ status, setStatus }) => {
  return (
    <MenuStyle>
      <div className="menu">
        <div className={`left-side-main ${status ? "left-side-show " : null}`}>
          <LeftSidebar />
        </div>

        <div
          onClick={() => {
            setStatus(false);
          }}
          className={`left-slide ${status ? "left-slide-back-show" : null}`}
        ></div>

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
    /* width: 100%; */
  }
  @media screen and (max-width: 768px) {
    .left-slide {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 550;
      display: none;
      transition: all 0.3s linear;
    }

    .left-slide-back-show {
      display: block !important;
      cursor: pointer;
    }

    .left-side-main {
      position: fixed;
      top: 0;
      left: -100%;
      bottom: 0;
      width: 500px;
      transition: all 0.3s linear;
      background-color: #fff;
      z-index: 555;
      height: 100vh;
      
    }

    .left-side-show {
      left: 0;
    }

    .menu {
      display: flex;
      justify-content: space-between;
      flex-direction: column-reverse;
      width: 100%;
    }
  }
`;
export default Menu;
