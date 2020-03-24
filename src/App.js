import React from 'react';
import './App.css';
import MainPage from './Pages/WelcomePage/MainPage';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Switch} from 'react-router-dom';
<<<<<<< HEAD
import SignInForm from './SignInForm';

=======
import SignInForm from './Pages/LoginPage/SignInForm';
import FormPage from './Pages/FormPage/ReminderPage';
import GoogleLoginButton from './Pages/LoginPage/GoogleLoginButton/googleLoginButton';
>>>>>>> master
function App() {

  return (
    <div className="App">
      <Navbar/>
   
    <Switch>
				<Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/formpage" render={() => <FormPage />} />
        <Route exact path="/signin" render={() => <SignInForm    header="Sign In"/>} />
        <Route exact path="/Login" render={() => <SignInForm    header="Login"/>   } />
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
