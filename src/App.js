import React, { Component } from 'react';
import './App.css';
import Events from './components/Events';
import NaviBar from './components/NaviBar';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import CreateEventContainer from './components/CreateEventContainer';
import CurrentEvent from './components/CurrentEvent';
import firebaseConfig from './firebaseConfig';

import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

const firebaseApp = firebase.initializeApp(firebaseConfig);

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
/*
                  <div className = "view-wrap">
                    <div className = "filter_wrap"><div className = "filter_content">
                    <Filter submit_filter = {this.submit_filter}/>
                    </div></div>
                    <div className = "restaurants_div">
                      <ul>{restaurants_retrieved_rendered}</ul>
                    </div>
                    <div className = "events_wrap">
                      <CreateEvent restaurant = {this.state.restaurant} location = {this.state.location} user = {user} />
                    </div>
                  </div>
*/



class App extends Component {

  render() {
            const {
      user,
      signOut,
      signInWithGoogle,
} = this.props;

    return (
      <div>
      <Router>
                          {
                        user
                          ? <div>
                              <CurrentEvent user = {user}/>


                              <NaviBar user_name = {user.displayName} signOut = {signOut}/>


                              <div className = "my_info_banner"><div id = "location_icon"></div><p style = {{"display": "inline-block","vertical-align": "top;"}}><i>695 Park Ave, New York, NY 10065</i></p></div>
                             


                                      <Switch>
                                              <div>
                                                 <Route exact path="/create" render={(props)=><CreateEventContainer {...props} user = {user}/>} />
                                                 <Route exact path="/events" render={(props)=><Events {...props} user = {user}/>} />

                                              </div>
                                       </Switch>

                            </div>
                          : <p>Please sign in.</p>
                      }

                      {
                        user
                          ?<div></div>
                          : <button onClick={signInWithGoogle}>Sign in with Google</button>
                      }
   
      </Router>
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
