import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import styled from "styled-components";
import "../styles/Main.css";

const Navbar = ({ setStatus, status }) => {
  const [value, setValue] = useState({
    all: false,
    development: false,
    ecosystem: false,
    docs: false,
    search: false,
  });
  const [search, SetSearch] = useState(false);

  return (
    <Wrapper>
      <div className="navbar">
        <div id="nav">
          <a href="#" className="logo">
            <div className="sidebar-icon">
              <FaBars onClick={() => setStatus(true)} className="FaBars" />
            </div>
            <img src="https://docs.flutter.dev/assets/images/shared/brand/flutter/logo/flutter-lockup.png" />
          </a>

          <div className="links">
            <ul className="links-ul">
              <li onClick={() => setValue({ all: true })} className="li-rel">
                <span className="links-title">
                  Multi-Platform
                  <span className="links-icon">
                    <AiOutlineCaretDown />
                  </span>
                </span>
                <div className={`li-absolute ${value.all ? "li-show" : null}`}>
                  <a href="#">temp data</a>
                  <a href="#">temp data</a>
                  <a href="#">temp data</a>
                </div>
              </li>

              <div
                onClick={() => setValue({ all: false })}
                className={`modal-back ${value.all ? "modal-back-show" : null}`}
              ></div>
            </ul>

            <ul className="links-ul">
              <li
                onClick={() => setValue({ development: true })}
                className="li-rel"
              >
                <span className="links-title">
                  Development
                  <span className="links-icon">
                    <AiOutlineCaretDown />
                  </span>
                </span>
                <div
                  className={`li-absolute ${
                    value.development ? "li-show" : null
                  }`}
                >
                  <a href="#">temp data</a>
                  <a href="#">temp data</a>
                  <a href="#">temp data</a>
                </div>
              </li>
              <div
                onClick={() => setValue({ development: false })}
                className={`modal-back ${
                  value.development ? "modal-back-show" : null
                }`}
              ></div>
            </ul>

            <ul className="links-ul">
              <li
                onClick={() => setValue({ ecosystem: true })}
                className="li-rel"
              >
                <span className="links-title">
                  Ecosystem
                  <span className="links-icon">
                    <AiOutlineCaretDown />
                  </span>
                </span>
                <div
                  className={`li-absolute ${
                    value.ecosystem ? "li-show" : null
                  }`}
                >
                  <a href="#">temp data</a>
                  <a href="#">temp data</a>
                  <a href="#">temp data</a>
                </div>
              </li>
              <div
                onClick={() => setValue({ ecosystem: false })}
                className={`modal-back ${
                  value.ecosystem ? "modal-back-show" : null
                }`}
              ></div>
            </ul>

            <ul className="links-ul">
              <li className="li-rel">
                <span className="links-title">Showcase</span>
              </li>
            </ul>
            <ul className="links-ul">
              <li onClick={() => setValue({ docs: true })} className="li-rel">
                <span className="links-title">
                  Docs
                  <span className="links-icon">
                    <AiOutlineCaretDown />
                  </span>
                </span>
                <div className={`li-absolute ${value.docs ? "li-show" : null}`}>
                  <a href="#">temp data</a>
                  <a href="#">temp data</a>
                  <a href="#">temp data</a>
                </div>
              </li>
              <div
                onClick={() => setValue({ docs: false })}
                className={`modal-back ${
                  value.docs ? "modal-back-show" : null
                }`}
              ></div>
            </ul>
            <div className="search-box search-icon ">
              <li onClick={() => setValue({ search: true })} className="li-rel">
                <span className="links-title">
                  <span className="links-icon">
                    <BsSearch className="fa-search" />
                  </span>
                </span>
                <div
                  className={`search-width ${
                    value.search ? "search-width-show" : null
                  }`}
                >
                  <input
                    className="search-input"
                    type="text"
                    name=""
                    placeholder="Search"
                  />
                </div>
              </li>
              <div
                onClick={() => setValue({ search: false })}
                className={`modal-back ${
                  value.search ? "modal-back-show" : null
                }`}
              ></div>
            </div>

            <div className="navbar-icons">
              <div className="github-icon">
                <BsGithub />
              </div>
              <div className="youtube-icon">
                <BsYoutube />
              </div>
              <div className="twit-icon">
                <BsTwitter />
              </div>
              <button className="btn">get started</button>
            </div>
          </div>
        </div>
        <div className="navbar-bottom">
          <p className="navbar-bottom-text">
            See <a href="#"> What's new in Flutter 3.3 </a> and{" "}
            <a href="#">what's new in the docs</a> The Flutter and Dart teams
            are hiring. <a href="#">Learn more</a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .modal-back {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    z-index: 44;
    display: none;
  }

  .modal-back-show {
    display: block;
  }
  .navbar {
    position: relative;
  }
  #nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    box-shadow: 1px 1px 10px #d1cfcf;
    margin: 0;
    padding: 10px;
    height: 60px;
    background-color: #fff;
    z-index: 22;
  }
  .navbar-icons {
    color: #898c8e;
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    font-size: 22px;
  }
  .sidebar-icon .FaBars {
    color: #454545;
    font-size: 24px;
    margin: 0px 3px;
    display: none;
  }
  #nav .logo {
    margin: 0;
    padding: 3px 3px;
    display: flex;
    justify-content: center;
  }
  #nav .logo img {
    width: 120px;
  }
  .links {
    display: flex;
    justify-content: space-between;
  }

  /* *******************************     displeay none */
  .links-ul {
    z-index: 446;
    margin: 0;
  }
  .li-rel {
    position: relative;
    display: flex;
    justify-content: space-around;
    border: none;
    margin-left: 20px;
    padding: 5px 5px;
    transition: all 0.3s ease;
  }
  .li-rel .link-down {
    margin-left: 0px;
  }
  .li-absolute {
    position: absolute;
    top: 30px;
    padding: 10px 0px;
    background-color: #fff;
    display: none;
    z-index: 446;
    border-radius: 4px;
    box-shadow: 0.5px 0.5px 5px #d1cfcf;
    margin-top: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 2px auto;
    text-align: left;
    width: 100%;
  }

  .li-show {
    display: block;
  }
  .li-rel .li-absolute a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }

  ul li a {
    /* display: none; */
    color: #898c8e;
    cursor: pointer;
    margin: 2px 20px;
    text-decoration: none;
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .li-rel .li-absolute a:hover {
    color: #757070;
    background-color: #eff1f3;
    border-radius: 4px;
  }
  .links-title {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    color: #757070;
    margin: 0;
  }
  .links-icon {
    margin-left: 20px;
  }
  .navbar-icons {
    width: 100%;
  }
  .navbar-icons div:hover {
    cursor: pointer;
    color: #111;
  }

  .btn {
    color: #ffffff;
    background-color: #0176e8;
    border: 0;
    padding: 10px 20px;
    font-size: 16px;
  }
  .btn:hover {
    background-color: #085baf;
    cursor: pointer;
  }

  .search-width {
    padding: 10px 0px;
    background-color: #fff;
    display: none;
    z-index: 446;
    border-radius: 4px;
   
    transition: all 0.3s ease;

    text-align: center;
    align-items: center;
    justify-content: center;

   
    text-align: right;
    width: 100%;
  }
  .search-width-show {
    transition: all 0.3s ease;
    display: block;
  }
  /*  search btn */
  .search-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
  }
  input:focus {
    outline: 2px solid #cedefd;
  }
  .search-btn {
    color: white;
    float: right;
    transition: all 0.3s ease;

    /* border-radius: 50%; */

    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 2s;
    padding-bottom: 8px;
  }

  .fa-search {
    color: #757070;
    cursor: pointer;
    font-size: 20px;
    margin: 1rem 2rem;
  }

  .search-input {
    border: 0px solid #4286f4;
    background: none;
    outline: none;
    float: right;
    padding: 2px;
    color: #757070;
    font-size: 20px;
    transition: 0.4s;
    border-radius: 2px;
    transition: all 0.3s ease;
    width: 200px;
  }

  /* Navbar bottom text */
  .navbar-bottom {
    background: #373b44; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #4286f4,
      #373b44
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #065b9a,
      #065b9a
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: #fff;
    display: flex;

    text-align: center;
    margin-top: 60px;
  }
  .navbar-bottom-text {
    padding: 4rem auto;
    font-size: 20px;
    width: 40%;
    margin: 1.5rem auto;
  }
  .navbar-bottom-text a {
    color: #5ec0ea;
    text-decoration: none;
  }
  .navbar-bottom-text a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .sidebar-icon .FaBars {
      color: #454545;
      font-size: 24px;
      margin: 0px 3px;
      display: block;
    }
    .links-ul {
      display: none;
      flex-direction: column;
    }
    .navbar-icons {
      width: 100%;
    }
    .navbar-icons div {
      margin: 0px 10px;
    }
    .search-box,
    .fa-search {
      display: none;
    }
    .navbar-icons .btn {
      display: none;
    }
  }
`;

export default Navbar;
