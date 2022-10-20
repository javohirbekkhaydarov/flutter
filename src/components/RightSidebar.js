import React, { useState } from "react";
import styled from "styled-components";
import { InfoData } from "../json/InfoData";

const RightSidebar = () => {
  const [value, setValue] = useState(InfoData);
  return (
    <Wrapper>
      <div className="rightSidebar">
        <p className="right-title">Contents</p>

        {value.map((item, index) => {
          return (
            <ul>
              <li>
                <a href="#">{item.title}</a>
              </li>
            </ul>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: 20%;

  .rightSidebar {
    position: sticky;
    top: 80px;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 20px;
    height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    font-family: "Kumbh Sans", sans-serif;
  }
  .right-title {
    font-size: 20px;
    color: #454545;
  }
  ul li a {
    font-size: 16px;
    color: #1b86e1;
    font-weight: 400;
    font-style: normal;
    display: flex;
    text-align: left;
    margin-left: 0px;
    text-decoration: none;
    width: 100%;
  }

  ul li a:hover {
    text-decoration: underline;
    color: #5b86e1;
  }
`;

export default RightSidebar;
