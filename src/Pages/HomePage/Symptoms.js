import React, { Component } from "react";

import shape_1 from "./assets/images/symptoms/shape_1.png";
import service_1 from "./assets/images/symptoms/service_1.jpg";
import service_2 from "./assets/images/symptoms/service_2.jpg";
import service_3 from "./assets/images/symptoms/service_3.jpg";
import service_4 from "./assets/images/symptoms/service_4.jpg";
import service_5 from "./assets/images/symptoms/service_5.jpg";
import service_6 from "./assets/images/symptoms/service_6.jpg";

const Symptoms = () => {
  return (
    <section class="service-section bg-service padding-tb">
      <div class="service-shape">
        <div class="shape shape-1">
          <img src={shape_1} alt="service-shape" />
        </div>
        <div class="shape shape-2">
          <img src={shape_1} alt="service-shape" />
        </div>
      </div>
      <div class="container">
        <div class="section-header">
          <h2>Corona Virus Symptoms</h2>
          <p>
            {" "}
            Dynamically formulate fully tested catalysts for change via focused
            methods of empowerment Assertively extend alternative synergy and
            extensive web services.
          </p>
        </div>
        <div class="section-wrapper">
          <div class="row justify-content-center">
            <div class="col-xl-4 col-md-6 col-12">
              <div class="service-item text-center">
                <div class="service-inner">
                  <div class="service-thumb">
                    <img src={service_1} alt="service" />
                  </div>
                  <div class="service-content">
                    <h4>Coughing And Sneezing</h4>
                    <p>
                      Our comprehensive Online Marketing strategy will boost
                      your website trafic hence monthly sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="service-item text-center">
                <div class="service-inner">
                  <div class="service-thumb">
                    <img src={service_2} alt="service" />
                  </div>
                  <div class="service-content">
                    <h4>Hot Fever</h4>
                    <p>
                      Our comprehensive Online Marketing strategy will boost
                      your website trafic hence monthly sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="service-item text-center">
                <div class="service-inner">
                  <div class="service-thumb">
                    <img src={service_3} alt="service" />
                  </div>
                  <div class="service-content">
                    <h4>Strong Headacke</h4>
                    <p>
                      Our comprehensive Online Marketing strategy will boost
                      your website trafic hence monthly sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="service-item text-center">
                <div class="service-inner">
                  <div class="service-thumb">
                    <img src={service_4} alt="service" />
                  </div>
                  <div class="service-content">
                    <h4>Shortness Of Breath</h4>
                    <p>
                      Our comprehensive Online Marketing strategy will boost
                      your website trafic hence monthly sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="service-item text-center">
                <div class="service-inner">
                  <div class="service-thumb">
                    <img src={service_5} alt="service" />
                  </div>
                  <div class="service-content">
                    <h4>Confusion</h4>
                    <p>
                      Our comprehensive Online Marketing strategy will boost
                      your website trafic hence monthly sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-12">
              <div class="service-item text-center">
                <div class="service-inner">
                  <div class="service-thumb">
                    <img src={service_6} alt="service" />
                  </div>
                  <div class="service-content">
                    <h4>Sore Throat</h4>
                    <p>
                      Our comprehensive Online Marketing strategy will boost
                      your website trafic hence monthly sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Symptoms;
