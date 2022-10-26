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
      {/* left section sidebar create */}
      <div className="leftSidebar">
        {/* added search section */}
        <div className="search-parent">
          <SearchSection />
        </div>
        <hr />

        {/* scrolling information */}
        <div className="rest-info">
          {arr.map((item, id) => (
            // create FAQ section
            <Accordion className="faq-name " key={id}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className="title">{item.name}</Typography>
              </AccordionSummary>
              {/* loop infom */}
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

  /* font connection */
  * {
    font-family: "Kumbh Sans", sans-serif;
  }
  display: flex;
  width: 100%;
  .leftSidebar {
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

  /* remove border and box shadov in accordion */
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

  /* item styles */
  .item {
    transition: all 0.3s linear;
    color: #1c1c1c;

    font-size: 14px;
  }

  .MuiAccordionDetails-root {
    height: 5px solid red !important;
  }

  /* title styles */
  .title {
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

  /* create media querys */
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
    .search-parent {
      border-bottom: 0.3px solid #dedede;
    }
  }
`;

export default LeftSidebar;
