import { useState } from "react";
import styled from "styled-components";
import data from "../json/data";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LeftSidebar = () => {
  const [arr, SetArr] = useState(data);
  //   dropdown

  return (
    <Wrapper>
      <div className="leftSidebar">
        {arr.map((item, id) => (
          <Accordion className="faq-name ">
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              expandIcon={<ExpandMoreIcon />}
              key={id}
            >
              <Typography className="title" >
                {item.name}
              </Typography>
            </AccordionSummary>
            {item.children.map((element, id) => {
              return (
                <AccordionDetails typeof="number">
                  <Typography className="item" key={id}>
                    <span> {element.id}. </span>
                    {element.name}
                  </Typography>
                </AccordionDetails>
              );
            })}
          </Accordion>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400&display=swap");

  * {
    font-family: "Kumbh Sans", sans-serif;
  }

  width: 20%;
  .leftSidebar {
    position: sticky;
    top: 80px;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 20px;
    height: 70vh;
    overflow-y: scroll;
    width: 100%;
    font-family: "Kumbh Sans", sans-serif;
  }

  .title {
    color: #757575;
    font-size: 18px;
    transition: all 0.3s linear;
    /* margin: 15px; */
  }

  .item {
    transition: all 0.3s linear;
    color: #1c1c1c;

    font-size: 14px;
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
`;

export default LeftSidebar;
