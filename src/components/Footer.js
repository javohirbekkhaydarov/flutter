import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="footer-logo">
          <img
            src="https://docs.flutter.dev/assets/images/shared/brand/flutter/logo/flutter-mono-81x100.png"
            alt=""
          />
        </div>
        <div className="footer-infom">
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
    justify-content: center;
    align-items: center;
    text-align: center;
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
    margin-left: 0;
  }
`;

export default Footer;
