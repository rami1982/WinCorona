import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/WelcomePage/MainPage";
import Navbar from "./Pages/Navbar/Navbar";
import SignInForm from "./Pages/LoginPage/SignInForm";
import FormPage from "./Pages/FormPage/FormDaily";
import OneTimeForm from "./Pages/OneTimeForm/oneTimeForm";
import GoogleLoginButton from "./Pages/LoginPage/GoogleLoginButton/googleLoginButton";
import Info from "./Pages/Info/Info";
import Tips from "./Pages/Tips/tips";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/formpage" component={FormPage} />
        <Route exact path="/onetimeform" component={OneTimeForm} />
        <Route exact path="/signup" component={SignInForm} />
        <Route exact path="/signin" component={SignInForm} />
        <Route exact path="/GoogleLogin">
          <GoogleLoginButton header="GoogleLogin" />
        </Route>
        <Route exact path="/info" component={Info} />
        <Route exact path="/tips" component={Tips} />
        {/* <Route
					exact
					path="/user/:id"
					render={(routeProps) => <Palette palette={findPalette(routeProps.match.params.id)} />}
				/> */}
      </Switch>
    </div>
  );
}

export default App;
