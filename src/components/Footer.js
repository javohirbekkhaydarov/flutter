import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        {/* footer logo */}
        <div className="footer-logo">
          {/* footer img */}
          <img
            src="https://docs.flutter.dev/assets/images/shared/brand/flutter/logo/flutter-mono-81x100.png"
            alt=""
          />
        </div>
        {/* footer information */}
        <div className="footer-infom">
      {/* footer links */}
          <ul>
            <li>
              <a href="#">flutter-dev@</a>{" "}
            </li>
            <li>
              <a href="#"> terms</a>
            </li>
            <li>
              <a href="#"> brand</a>
            </li>
            <li>
              <a href="#"> usage </a>
            </li>
            <li>
              <a href="#"> security </a>
            </li>
            <li>
              <a href="#"> privacy </a>
            </li>
          </ul>
          <p>
            Except as otherwise noted, this work is licensed under a Creative
            Commons Attribution 4.0 International License, and code samples are
            licensed under the BSD License.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .footer {
    background: #303c42;
    display: flex;
    justify-content: start;
    padding: 10px;
  }
  .footer-infom {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
    text-align: left;
    margin-left: 0;
    width: 100%;
  }
  .footer-logo img {
    width: 100%;
  }

  ul {
    display: flex;
    margin-left: 0;

    color: #909090;
  }
  li {
    margin: 0px 30px;
  }
  ul li a {
    color: #fff;
    text-decoration: none;
  }
  p {
    font-size: 12px;
    color: #fff;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    .footer {
      width: 100%;
      display: flex;
      /* flex-direction: column; */
    }
    ul {
      display: flex;
      width: 100%;
    }
    li {
      margin: 0;
      list-style: none;
      margin-left: 3px;
    }

    .footer-logo img {
      width: 100px;
    }
  }
`;

export default Footer;
