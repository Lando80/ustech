import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
//import Logon from './pages/Logon';
//import Register from './pages/Register';
//import Profile from './pages/Profile';
//import Newincident from './pages/NewIncident';
//import Home from './pages/Home';
import Site from './site.js';
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Site}/>
            {/* <Route path="/logon" exact component={Logon}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/incidents/new" exact component={Newincident}/> */}
            </Switch>
        </BrowserRouter>
    );
}