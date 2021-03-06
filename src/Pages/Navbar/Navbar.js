import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionType from "../../Store/actions";

import il_icon from "../../img/il_icon.png";
import us_icon from "../../img/us_icon.png";
import api from "../../Store/api";
import win_logo from "../../img/wincoronalogo.png";

const Navbar = () => {
  const token = localStorage.getItem("X-Parse-Session-Token");
  if (token) {
    api.defaults.headers.common["X-Parse-Session-Token"] = token;
  } else {
    api
      .post(
        "/users",
        {
          username: "123456",
          password: "123456",
        },
        {
          headers: { "X-Parse-Revocable-Session": 1 },
        }
      )
      .then((response) => {
        localStorage.setItem(
          "X-Parse-Session-Token",
          response.data.sessionToken
        );
        api.defaults.headers.common["X-Parse-Session-Token"] =
          response.data.sessionToken;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [lang, setLang] = useState("HE");

  const language = (lang) => {
    setLang(lang);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        {/* <span class="navbar-text" style={{ margin: 5 + "px" }}>
          {lang === "HE" ? (
            <div
              onClick={() => {
                language("EN");
              }}
            >
              <img src={il_icon}></img>
            </div>
          ) : (
            <div
              onClick={() => {
                language("HE");
              }}
            >
              <img src={us_icon}></img>
            </div>
          )}
        </span> */}

        <NavLink className="navbar-brand" to="/">
          <img src={win_logo} style={{ height: 30 + "px" }}></img>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link " to="/formpage">
                Form
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link " to="/onetimeform">
                One Time Form
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link " to="/info">
                COVID-19
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link " to="/tips">
                TIPS
              </NavLink>
            </li>
          </ul>
          <span class="navbar-text">
            <NavLink className="nav-link " to="/signin">
              Sign-in/Login
            </NavLink>
          </span>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
    pageTitle: state.pageTitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchPageStatus: (page) =>
      dispatch({ type: actionType.CURRENT_PAGE, pageName: page }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
