import React, { Component } from 'react';
import './App.css';
import Events from './components/Events';
import NaviBar from './components/NaviBar';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import CurrentEvent from './components/CurrentEvent';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

//import { Route, Switch } from 'react-router-dom';
// <Switch>
//   <Route exact path="/" component={JoinEvents} />
//   <Route exact path="/create" component={CreateEvent} />
//   <Route exact path="/settings" component={Settings} />
//   <Route exact path="/about" component={About} />
//   <Route exact path="/profile" component={Profile} />
/*
<NaviBar user_name = {user.displayName} signOut = {signOut}/>
                  <div className = "my_info_banner"><div id = "location_icon"></div><p style = {{"display": "inline-block","vertical-align": "top;"}}><i>695 Park Ave, New York, NY 10065</i></p></div>
                  <div className = "view-wrap">
                    <div className = "filter_wrap"><div className = "filter_content"></div></div>
                    <div className = "events_wrap">
                      <Events user = {user}/>
                    </div>
                  </div>*/
// </Switch>




class App extends Component {


  
  render() {
            const {
      user,
      signOut,
      signInWithGoogle,
} = this.props;
    return (
      <div>
      {
            user
              ? <div>
                  <CurrentEvent user = {user}/>
                  <NaviBar user_name = {user.displayName} signOut = {signOut}/>
                  <div className = "my_info_banner"><div id = "location_icon"></div><p style = {{"display": "inline-block","vertical-align": "top;"}}><i>695 Park Ave, New York, NY 10065</i></p></div>
                  <div className = "view-wrap">
                    <div className = "filter_wrap"><div className = "filter_content"></div></div>
                    <div className = "events_wrap">
                      <Events user = {user}/>
                    </div>
                  </div>
                </div>
              : <p>Please sign in.</p>
          }

          {
            user
              ?<div></div>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
    }
    </div>

    );
  }
}
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
