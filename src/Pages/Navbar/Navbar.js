import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import * as actionType from "../../Store/actions";

const Navbar = () => {
  return (
    <div>
      <nav className="  navbar navbar-expand-lg navbar-light bg-light ">
        <NavLink className="navbar-brand" to="/">
          Win Corona
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
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link " to="/formpage">
                Form
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link " to="/Onetimeform">
                One Time Form
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
          </ul>
          {/* <span class="navbar-text">
            <NavLink className="nav-link " to="/signin">
              Sign-in/Login
            </NavLink>
          </span> */}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    page: state.page,
    pageTitle: state.pageTitle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    switchPageStatus: page =>
      dispatch({ type: actionType.CURRENT_PAGE, pageName: page })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
