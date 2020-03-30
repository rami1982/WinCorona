import React from 'react';
import './App.css';
import MainPage from './Pages/WelcomePage/MainPage';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Switch} from 'react-router-dom';
import SignInForm from './Pages/LoginPage/SignInForm';
import FormPage from './Pages/FormPage/FormDaily';
import OneTimeForm from './Pages/OneTimeForm/oneTimeForm';


import GoogleLoginButton from './Pages/LoginPage/GoogleLoginButton/googleLoginButton';
function App() {
  return (
    <div className="App">
      <Navbar/>
   
    <Switch>
				<Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/formpage" render={() => <FormPage />} />
        <Route exact path="/onetimeform" render={() => <OneTimeForm />} />

        <Route exact path="/signup"  component={SignInForm} />
        <Route exact path="/signin" component={SignInForm} />
        <Route exact path="/GoogleLogin" render={() => <GoogleLoginButton    header="GoogleLogin"/>   } />

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
