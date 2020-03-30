import React, { useEffect } from "react";
import "./googleLoginBtn.css";

const GoogleLoginButton = props => {
  useEffect(() => {
    googleSDK();
    console.log("sfsfd");
  });

  const prepareLoginButton = () => {
    console.log(this.refs.googleLoginBtn);

    this.auth2.attachClickHandler(
      this.refs.googleLoginBtn,
      {},
      googleUser => {
        let profile = googleUser.getBasicProfile();
        console.log("Token || " + googleUser.getAuthResponse().id_token);
        console.log("ID: " + profile.getId());
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        //YOUR CODE HERE
      },
      error => {
        alert(JSON.stringify(error, undefined, 2));
      }
    );
  };

  const googleSDK = () => {
    window["googleSDKLoaded"] = () => {
      window["gapi"].load("auth2", () => {
        this.auth2 = window["gapi"].auth2.init({
          client_id:
            "62390390007-a4gftclg2bto9lnctfr0ngns36h20dm2.apps.googleusercontent.com",
          cookiepolicy: "single_host_origin",
          scope: "profile email"
        });
        this.prepareLoginButton();
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");
  };

  return (
    <div class="google-login">
      <button className="loginBtn loginBtn--google" ref="googleLoginBtn">
        Login with Google
      </button>{" "}
    </div>
  );
};

export default GoogleLoginButton;
