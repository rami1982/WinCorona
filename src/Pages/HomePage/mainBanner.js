import React, { Component } from "react";
import logo from "./assets/images/01.png";
import "./homePage.css";

const MainBanner = props => {
  const { confirmed } = props;
  return (
    <section class="banner-section pb-0">
      <div class="banner-area">
        <div class="container">
          <div class="row no-gutters align-items-center justify-content-center">
            <div class="col-12">
              <div class="content-part text-center">
                <div class="section-header">
                  <h2>COVID-19 Tracker</h2>
                  <h3>Total Confirmed Corona Cases</h3>
                  <h2 class="count-people">{confirmed}</h2>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="section-wrapper">
                <div class="banner-thumb">
                  <img src={logo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
