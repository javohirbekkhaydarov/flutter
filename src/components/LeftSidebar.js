import { useState } from "react";
import styled from "styled-components";
import data from "../json/data";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchSection from "./SearchSection";
const LeftSidebar = () => {
  const [arr, SetArr] = useState(data);
  //   dropdown

  return (
    <Wrapper>
      <div className="leftSidebar">
        <div className="search-parent">
          <SearchSection />
        </div>
        <hr />

        <div className="rest-info">
          {arr.map((item, id) => (
            <Accordion className="faq-name " key={id}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className="title">{item.name}</Typography>
              </AccordionSummary>
              {item.children.map((element, id) => {
                return (
                  <AccordionDetails typeof="number" id="typeBorder" key={id}>
                    <Typography
                      className="item"
                      id="typeBorder"
                      style={{ boxshadow: "none" }}
                    >
                      <span> {element.id}. </span>
                      {element.name}
                    </Typography>
                  </AccordionDetails>
                );
              })}
            </Accordion>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400&display=swap");

  * {
    font-family: "Kumbh Sans", sans-serif;
  }
  display: flex;
  width: 100%;
  .leftSidebar {
    position: sticky;
    top: 80px;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 20px;
    height: 80vh;
    overflow-y: scroll;
    width: 100%;
    font-family: "Kumbh Sans", sans-serif;
  }
  .logo {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .logo img {
    width: 80px;
  }

  .title {
    color: #757575;
    font-size: 18px;
    transition: all 0.3s linear;
    /* margin: 15px; */
  }

  .MuiAccordionSummary-content {
    border: none !important;
    box-shadow: none !important;
  }
  .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
    border: none !important;
    box-shadow: none !important;
  }

  .css-1elwnq4-MuiPaper-root-MuiAccordion-root:before {
    position: absolute !important;
    top: -1px !important;
    border: none !important;
    box-shadow: none !important;
    visibility: hidden;
  }

  .item {
    transition: all 0.3s linear;
    color: #1c1c1c;

    font-size: 14px;
  }

  .MuiAccordionDetails-root {
    height: 5px solid red !important;
  }

  .title,
  item {
    color: #909090;
    cursor: pointer;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    font-weight: 300;
    text-align: left;
  }
  .title:hover {
    color: #1c1c1c;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: start;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    text-align: left;
    /* z-index: 300; */
    background: #fff;
    .leftSidebar {
      position: relative;
      top: 10px;
      left: 0px;
      width: 90%;
      overflow-y: hidden;
    }

    .rest-info {
      height: 100vh;
      width: 100%;
      overflow-y: scroll;
      z-index: 600;
    }
    .search-parent {
      border-bottom: 0.3px solid #dedede;
    }
  }
`;

export default LeftSidebar;
