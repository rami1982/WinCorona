import React from "react";

import { connect } from "react-redux";
import * as actionType from "../../Store/actions";
import GoogleLoginButton from "./GoogleLoginButton/googleLoginButton";
import api from "../../Store/api";

// const SignInForm = props => {
//   return (
//     <div className="container vh-100">
//       <div
//         className="d-flex justify-content-center align-items-center h-100"
//         style={{ backgroundColor: "#ebf5f2" }}
//       >
//         <div className="d-flex flex-column justify-content-center h-100">
//           <h1 className=" mb-5">{props.header}</h1>
//           <form className="mt-5">
//             <div className="form-group">
//               <label for="exampleInputEmail1">Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 placeholder="Enter email"
//               />
//               <small id="emailHelp" className="form-text text-muted">
//                 We'll never share your email with anyone else.
//               </small>
//             </div>
//             <div className="form-group">
//               <label for="exampleInputPassword1">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 placeholder="Password"
//               />
//             </div>

class SignInForm extends React.Component {
  signup = this.props.location.pathname.split("/")[1] === "signup";

  handleSubmit = async event => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    const path = `/auth/${this.signup ? "signup" : "signin"}`;
    api
      .post(path, {
        email: event.target.email.value,
        password: event.target.password.value
      })
      .then(() => {
        console.log("success");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props);

    return (
      <div className="container vh-100">
        <div
          className="d-flex justify-content-center align-items-center h-100"
          style={{ backgroundColor: "#ebf5f2" }}
        >
          <div className="d-flex flex-column justify-content-center h-100">
            <h1 className=" mb-5">{this.props.header}</h1>
            <form className="mt-5" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {this.signup ? "Sign Up" : "Sign In"}
              </button>
              <GoogleLoginButton />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
