import React, { Component } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as ROUTES from '../components/Constants/routes'
import LandingPage from '../components/Landing';
import SignUpPage from '../components/SignUp';
import SignInPage from '../components/SignIn';
import PredictionPage from '../components/Prediction'
import HomePage from '../components/Home';
import InfoPage from '../components/Info';
import SchedulePage from '../components/Schedule';

import Navigation from '../components/Navigation';
import { withFirebase } from '../components/Firebase';

class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <React.StrictMode>
          <BrowserRouter>
              <Navigation authUser={this.state.authUser}/>
            
              <Routes>
                <Route exact path={ROUTES.LANDING} element={<LandingPage />} />
                <Route path={ROUTES.SIGN_UP} element={<SignUpPage/>} />
                <Route path={ROUTES.SIGN_IN} element={<SignInPage/>} />
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.INFO} element={<InfoPage/>} />
                <Route path={ROUTES.PREDICTION} element={<PredictionPage/>} />
                <Route path={ROUTES.SCHEDULE} element={<SchedulePage/>} />
              </Routes>
          </BrowserRouter>  
      </React.StrictMode>
    );
  }
}

const App = withFirebase(AppComponent);

export default App;






