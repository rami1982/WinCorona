import React from 'react';
import './App.css';
import MainPage from './MainPage';
import Navbar from './Navbar';
import { Route, Switch} from 'react-router-dom';
import SignInForm from './SignInForm';
import ReminderPage from './Pages/ReminderPopUp/ReminderPage';
function App() {
  return (
    <div className="App">
      <Navbar/>
   
    <Switch>
				<Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/reminder" render={() => <ReminderPage />} />
        <Route exact path="/signin" render={() => <SignInForm    header="Sign In"/>} />
        <Route exact path="/Login" render={() => <SignInForm    header="Login"/>   } />

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
