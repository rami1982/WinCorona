import React, { useState, useEffect } from "react";
import Zero1 from "./assets/images/zeroOne.png";
import Zero2 from "./assets/images/zeroTwo.png";
import Zero3 from "./assets/images/03.png";
import ZeroOne from "./assets/images/01.jpg";

import "./homePage.css";

const Statistics = props => {
  const { recovered, active, deaths } = props;
  return (
    <section class="corona-count-section bg-corona padding-tb pt-0">
      <div class="container">
        <div class="corona-wrap">
          <div class="corona-count-top">
            <div class="row justify-content-center align-items-center">
              <div class="col-xl-3 col-md-6 col-12">
                <h5>Total Corona Statistics :</h5>
              </div>
              <div class="col-xl-3 col-md-6 col-12">
                <div class="corona-item">
                  <div class="corona-inner">
                    <div class="corona-thumb">
                      <img src={Zero1} alt="corona" />
                    </div>
                    <div class="corona-content">
                      <h3 class="count-number">{active}</h3>
                      <p>Active Cases</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 col-12">
                <div class="corona-item">
                  <div class="corona-inner">
                    <div class="corona-thumb">
                      <img src={Zero2} alt="corona" />
                    </div>
                    <div class="corona-content">
                      <h3 class="count-number">{recovered}</h3>
                      <p>Recovered Cases</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 col-12">
                <div class="corona-item">
                  <div class="corona-inner">
                    <div class="corona-thumb">
                      <img src={Zero3} />
                    </div>
                    <div class="corona-content">
                      <h3 class="count-number">{deaths}</h3>
                      <p>Deaths</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="corona-count-bottom">
            <div class="row justify-content-center align-items-center     flex-row-reverse">
              <div class="col-lg-6 col-12">
                <div class="ccb-thumb">
                  <a
                    href="https://www.youtube.com/embed/Z9fQTS_kEqw"
                    data-rel="lightcase"
                    class="ccb-video"
                  >
                    <i class="icofont-ui-play"></i>
                    <span class="pluse_1"></span>
                    <span class="pluse_2"></span>
                  </a>
                  <img src={ZeroOne} alt="corona" />>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="ccb-content">
                  <h2>What Is Coronavirus?</h2>
                  <h6>
                    Coronavirus COVID-19 Global Cases map developed by the Johns
                    Hopkins Center for Systems Science and Engineering.
                  </h6>
                  <p>
                    Coronaviruses are type of virus. There are many different
                    kinds, & some cause disease newly identified type has caused
                    recent outbreak of respiratory ilnessnow called COVID-19
                    that started in China.
                  </p>
                  <ul class="lab-ul">
                    <li>
                      <i class="icofont-tick-mark"></i>COVID-19 is the disease
                      caused by the new coronavirus that emerged in China in
                      December 2020.
                    </li>
                    <li>
                      <i class="icofont-tick-mark"></i>COVID-19 symptoms include
                      cough, fever and shortness of breath. COVID-19 can be
                      severe, and some cases have caused death.
                    </li>
                    <li>
                      <i class="icofont-tick-mark"></i>The new coronavirus can
                      be spread from person to person. It is diagnosed with a
                      laboratory test.
                    </li>
                  </ul>
                  <a href="#" class="lab-btn style-2">
                    <span>get started Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
