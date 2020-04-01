import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import img4 from "../../img/img4.jpg";
import mainIMG from "../../img/main.jpg";
import "./main.css";

const MainPage = () => {
  return (
    <div>
      <section className="hero">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${mainIMG})` }}
        />
        <div className="hero-content-area">
          <h1> Win corona Virus </h1>
          <h3>Help us Fight COVID-19</h3>
          <a href="/formpage" className="btn">
            Fill in the form
          </a>
        </div>
      </section>

      <section className="destenation">
        <h3 className="title"> About Us </h3>
        <p>
          WinCorona is comprise of passionate programmers that joined together
          in this unfortunate crisis, <strong>Corona Virus</strong> or{" "}
          <strong>COVID19</strong> a worldwide pandemic that affected billions
          of people around the globe. We all joined forces to help us get
          through this difficult situation by collecting data from all around
          the world and with our expertise on Machine Learning/AI will find
          correlations within the data and share our findings to medical experts
          worldwide to help find a cure.
        </p>
        <hr />
        <ul className="grid">
          <li className="small" style={{ backgroundImage: `url(${img1}) ` }} />
          <li className="large" style={{ backgroundImage: `url(${img2})` }} />
          <li
            className="large"
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: "100% 100%"
            }}
          />
          <li className="small" style={{ backgroundImage: `url(${img4})` }} />
        </ul>
      </section>

      <section className="packges">
        <h3 className="title"> Why Us </h3>
        <p>
          Every individual within WinCorona are experts on their different
          fields.
        </p>
        <hr />

        <ul className="grid">
          <li>
            <i className="fa fa-camera-retro fa-4x" />

            <h4>What are the symptoms of COVID-19 infection</h4>
            <p>
              The virus can cause mild flu-like symptoms such as{" "}
              <strong>
                fever, cough, difficult breathing, muscle pain and tiredness
              </strong>
              . <br /> More serious cases develop severe pneumonia, acute
              respiratory distress syndrome, sepsis and septic shock that can
              lead to death.
            </p>
          </li>

          <li>
            <i className="fa fa-camera-retro fa-4x" />
            <h4>The PANDEMIC</h4>
            <p>
              On March 11, 2020 the director general, Dr Tedros Adhanom
              Ghebreyesus, finally addressed the term to describe the outbreak,
              <br />{" "}
              <q>
                WHO has been assessing this outbreak around the clock and we are
                deeply concerned both by the alarming levels of spread and
                severity, and by the alarming levels of inaction,
              </q>{" "}
              Dr Tedros said.
              <br />{" "}
              <q>
                We have therefore made the assessment that Covid-19 can be
                characterized as a <strong>pandemic</strong>. Pandemic is not a
                word to use lightly or carelessly,
              </q>{" "}
              he added.
            </p>
          </li>

          <li>
            <i className="fa fa-bicycle fa-4x" />
            <h4>Protect Yourself</h4>
            <p>
              The virus enters your body via your eyes, nose and/or mouth, so it
              is important to avoid touching your face with unwashed hands.
              Washing of hands with soap and water for at least 20 seconds, or
              cleaning hands with alcohol-based solutions, gels or tissues is
              recommended in all settings. It is also recommended to stay 1
              metre or more away from people infected with COVID-19 who are
              showing symptoms, to reduce the risk of infection through
              respiratory droplets.
            </p>
          </li>

          <li>
            <i className="fa fa-flag-checkered fa-4x" />

            {/* maybe: crawler for updated numbers */}
            <h4>The Numbers</h4>
            <p>
              <strong>467,890</strong> - total cases
              <br />
              <strong>21,177</strong> - deaths
              <br />
              <strong>113,783</strong> - recovered
              <br />
              <strong>198</strong> - countries and territories confirmed cases
              <br />
              <strong>332,904</strong> - active cases
              <br />
              <strong>134,986</strong> - closed cases
              <br />
              <strong>45,316</strong> - new cases
              <br />
              <strong>2,283</strong> - new deaths
            </p>
          </li>
        </ul>
      </section>

      {/* <section className="testemonials">
					<h3 className="title"> testemonial </h3>
					<hr />
					<p className="quote">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</p>
					<p className="author">-Asaf</p>
					<p className="quote">
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					</p>
					<p className="author">-Tamara</p>
					<p className="quote">
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					</p>
					<p className="author">-Adam</p>
				</section> */}
      <section className="contact">
        <h3 className="title">Learn More</h3>
        <p>Visit the WHO website for more information</p>
        <a href="https://www.who.int/">https://www.who.int/</a>
        <hr />

        <form>
          <input type="email" placeholder="yourmail@gmail.com" />
          <a className="btn">subscribe now</a>
        </form>
      </section>

      <footer>
        <p>ullamco laboris nisi ut aliquip ex ea commodo</p>
        <p>All rights reserved </p>
        <p> reprehenderit in voluptate </p>
        <ul>
          <li>
            <a href="#">
              <i className=" fab fa-twitter-square fa-2x" />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <i className="fab fa-facebook-square fa-2x" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className=" fab fa-snapchat-square fa-2x" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default MainPage;
