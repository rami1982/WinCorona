// import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";
// import "./main.css";


// export class MainPage extends Component {
// 	render() {
// 		return (
// 			<div>
		
// 				<section className="hero">
// 					<div className="background-image" style={{backgroundImage:`url(${mainIMG})`}} />
// 					<div className="hero-content-area">
// 						<h1> Win corona Virus </h1>
// 						<h3>We will win the virus some lorem ipsum  </h3>
// 						<a href="/formpage" className="btn">Fill in the form</a>
// 					</div>
// 				</section>

// 				<section className="destenation">
// 					<h3 className="title"> about Us </h3>
// 					<p>
// 						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
// 						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
// 						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
// 						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
// 						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// 					</p>
// 					<hr />
// 					<ul className="grid">
                    
// 						<li className="small" style={{backgroundImage: `url(${img1}) `}} />
// 						<li className="large" style={{backgroundImage: `url(${img2})`}} />
// 						<li className="large" style={{backgroundImage: `url(${img3})` ,backgroundSize:"100% 100%"}}/>
// 						<li className="small" style={{backgroundImage: `url(${img4})`}} />
// 					</ul>
// 				</section>

// 				<section className="packges">
// 					<h3 className="title"> why us </h3>
// 					<p>
// 						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
// 						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
// 						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
// 						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
// 						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// 					</p>
// 					<hr />

// 					<ul className="grid">
// 						<li>
// 							<i className="fa fa-camera-retro fa-4x" />

// 							<h4> some info </h4>
// 							<p>
// 								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
// 								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// 								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// 								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// 								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// 								mollit anim id est laborum.
// 							</p>
// 						</li>

// 						<li>
// 							<i className="fa fa-camera-retro fa-4x" />
// 							<h4> some info </h4>
// 							<p>
// 								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
// 								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// 								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// 								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// 								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// 								mollit anim id est laborum.
// 							</p>
// 						</li>

// 						<li>
// 							<i className="fa fa-bicycle fa-4x" />
// 							<h4>some info with nice icon </h4>
// 							<p>
// 								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
// 								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// 								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// 								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// 								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// 								mollit anim id est laborum.
// 							</p>
// 						</li>

// 						<li>
// 							<i className="fa fa-flag-checkered fa-4x" />
// 							<h4> some more info</h4>
// 							<p>
// 								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
// 								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// 								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// 								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// 								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// 								mollit anim id est laborum.
// 							</p>
// 						</li>
// 					</ul>
// 				</section>

// 				<section className="testemonials">
// 					<h3 className="title"> testemonial </h3>
// 					<hr />
// 					<p className="quote">
// 						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
// 						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
// 						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
// 						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
// 						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
// 					</p>
// 					<p className="author">-Asaf</p>
// 					<p className="quote">
// 						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
// 						fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// 					</p>
// 					<p className="author">-Tamara</p>
// 					<p className="quote">
// 						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
// 						fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// 					</p>
// 					<p className="author">-Adam</p>
// 				</section>

// 				<section className="contact">
// 					<h3 className="title">learn more</h3>
// 					<p>
// 						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
// 						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
// 						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
// 						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
// 						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// 					</p>
// 					<hr />

// 					<form>
// 						<input type="email" placeholder="yourmail@gmail.com" />
// 						<a className="btn">subscribe now</a>
// 					</form>
// 				</section>

// 				<footer>
// 					<p>ullamco laboris nisi ut aliquip ex ea commodo</p>
// 					<p>All rights reserved </p>
// 					<p> reprehenderit in voluptate </p>
// 					<ul>
// 						<li>
// 							<a href="#">
// 								<i className=" fab fa-twitter-square fa-2x" />
// 							</a>
// 						</li>
// 						<li>
// 							<a href="#">
// 								{' '}
// 								<i className="fab fa-facebook-square fa-2x" />
// 							</a>
// 						</li>
// 						<li>
// 							<a href="#">
// 								<i className=" fab fa-snapchat-square fa-2x" />
// 							</a>
// 						</li>
// 					</ul>
// 				</footer>
// 			</div>
// 		);
// 	}
// }

// export default MainPage;
