import React from "react";
import distance from "../../img/distance.png";
import sneeze from "../../img/sneeze.png";
import wash from "../../img/wash.png";
import wash2 from "../../img/wash2.png";

import "./tips.css";

const Tips = props => {
  return (
    <div className="tips-container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner bg-dark">
          <div className="carousel-item active">
            <img src={wash2} />
          </div>
          <div className="carousel-item">
            <img src={distance} />
          </div>
          <div className="carousel-item">
            <img src={wash} />
          </div>
          <div className="carousel-item">
            <img src={sneeze} />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="faq-container">
        <h4 id="faq-title">FAQS</h4>

        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingZero">
              <h2 class="mb-0">
                <button
                  class="btn btn-outline-dark btn-drop"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseZero"
                  aria-expanded="true"
                  aria-controls="collapseZero"
                >
                  Are masks effective against the coronavirus disease?
                </button>
              </h2>
            </div>
            <div
              id="collapseZero"
              class="collapse"
              aria-labelledby="headingZero"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <p>
                  If you are healthy, you only need to wear a mask if you are
                  taking care of a person with suspected 2019-nCoV infection.
                  Wear a mask if you are coughing or sneezing. Masks are
                  effective only when used in combination with frequent
                  hand-cleaning with alcohol-based hand rub or soap and water.
                  If you wear a mask, then you must know how to use it and
                  dispose of it properly.
                </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/6Ooz1GZsQ70"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-outline-dark btn-drop"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is the incubation period of the coronavirus disease?
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              class="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <p>
                  The “incubation period” means the time between catching the
                  virus and beginning to have symptoms of the disease. Most
                  estimates of the incubation period for COVID-19 range from
                  1-14 days, most commonly around five days. These estimates
                  will be updated as more data become available.
                </p>{" "}
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/bPITHEiFWLc"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-outline-dark btn-drop"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  What are the symptoms of the coronavirus disease?
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                The most common symptoms are fever, cough, shortness of breath,
                and breathing difficulties. In more severe cases infection can
                cause pneumonia, severe acute respiratory syndrome, and even
                death. The period within which the symptoms would appear is 2-14
                days.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-outline-dark btn-drop"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  Can babies get the coronavirus disease?
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                We know it is possible for people of any age to be infected with
                the virus, but so far there are relatively few cases of COVID-19
                reported among children.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingFour">
              <h2 class="mb-0">
                <button
                  class="btn btn-outline-dark btn-drop"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  How long does the coronavirus last on surfaces?
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <p>
                  It is not certain how long the virus that causes COVID-19
                  survives on surfaces, but it seems to behave like other
                  coronaviruses. Studies suggest that coronaviruses (including
                  preliminary information on the COVID-19 virus) may persist on
                  surfaces for a few hours or up to several days.
                </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/bPITHEiFWLc"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h6 className="who-link">
        For furthermore informations go check out the{" "}
        <a href="https://www.who.int/">WHO</a> website
      </h6>
    </div>
  );
};

export default Tips;
