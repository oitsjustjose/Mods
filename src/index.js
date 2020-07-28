import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import Geolosys from './components/mods/Geolosys';
import VTweaks from './components/mods/V-Tweaks';
import PersistentBits from './components/mods/Persistent Bits';
import NaturalProgressions from './components/mods/Natural Progressions';
import TinkersAddons from './components/mods/Tinkers Addons';
import Pulver from './components/mods/Pulver';
import NavBar from './components/nav/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const routing = (
    <Router>
        <NavBar />
        <div style={{ paddingTop: `${3.5}em` }}></div>
        <Route exact path="/" component={Home} />
        <Route path="/Geolosys" component={Geolosys} />
        <Route path="/VTweaks" component={VTweaks} />
        <Route path="/PersistentBits" component={PersistentBits} />
        <Route path="/NaturalProgressions" component={NaturalProgressions} />
        <Route path="/TinkersAddons" component={TinkersAddons} />
        <Route path="/Pulver" component={Pulver} />
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
