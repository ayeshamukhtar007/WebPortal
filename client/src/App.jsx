import React, {lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Redirect, Link } from "react-router-dom";
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Recording from './pages/recording/Recording';
import Notifications from './pages/notifications/Notifications';
import Alert from './pages/alert/Alert';
import Modes from './pages/modes/Modes';
import Profile from './pages/profile/Profile';
import LiveView from './pages/liveView/LiveView';
import {useDispatch, useSelector } from "react-redux";
import Logout from './pages/logout/Logout';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Services from './pages/services/Services';
import View from './pages/view/View';

import VideoPlaying from './pages/videoPlaying/VideoPlaying';
import Setting from './pages/setting/Setting';
import Employee from './pages/employee/Employee';
import TrackStream from './pages/trackStream/TrackStream';
function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    
    <div>
  <Router>
      

        {user ? <Topbar/> : <Redirect to="/login"/> }
        <div className="maincontainer">
          {user ?<Sidebar/> : <Redirect to="/login"/> }

            <Switch>
            <Route exact path="/signup">
            
            {user ? <Redirect to="/" /> : <Signup/>}

        </Route>
        
              <Route exact path='/'>
              {user ?  <Home /> : <Redirect to="/login" /> }
               
            </Route>
          
            <Route exact path='/setting'>
              {user ?  <Setting/> : <Redirect to="/login" /> }
               
            </Route>
            <Route exact path='/liveView' >
            {user ?  <LiveView/> : <Redirect to="/login" /> }
               
            </Route>
            <Route exact path='/trackstream' >
            {user ?  <TrackStream/> : <Redirect to="/login" /> }
               
            </Route>
            <Route exact path='/recording'>
            {user ?  <Recording/> : <Redirect to="/login" /> }
               
            </Route>
         
               <Route exact path='/videoPlaying'>
            {user ?  <VideoPlaying/> : <Redirect to="/login" /> }
               
            </Route>
           
            <Route exact path='/notifications'>
            {user ?  <Notifications/> : <Redirect to="/login" /> }
            </Route>
            <Route exact path='/alert'>
            {user ?  <Alert/> : <Redirect to="/login" /> }
            </Route>
            <Route exact path='/modes'>
            {user ?  <Modes/> : <Redirect to="/login" /> }
            </Route>
            <Route exact path='/profile'>
            {user ?  <Profile/> : <Redirect to="/login" /> }
            </Route>
            <Route exact path='/employee'>
            {user ?  <Employee/> : <Redirect to="/login" /> }
            </Route>
          
            <Route exact path='/services'>
            {user ?  <Services/> : <Redirect to="/login" /> }
            </Route>
            <Route path="/login">
           
              {user ? <Redirect to="/" /> : <Login/>}</Route>
        
          <Route exact path="/logout">
     
           <Logout/>

          </Route>
         
          </Switch>
        </div>

    </Router>
    </div>
  );
}
export default App;