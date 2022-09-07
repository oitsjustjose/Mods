import React from 'react';

import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from './components/Home';
import Geolosys from './components/mods/Geolosys';
import NaturalProgressions from './components/mods/Natural Progressions';
import PersistentBits from './components/mods/Persistent Bits';
import Pulver from './components/mods/Pulver';
import TinkersAddons from './components/mods/Tinkers Addons';
import VTweaks from './components/mods/V-Tweaks';
import NavBar from './components/nav/Navbar';

export default () => (
  <BrowserRouter>
    <>
      <NavBar />
      <div style={{ paddingTop: `${3.5}em` }} />
    </>
    <RouterRoutes>
      <Route exact path="/" element={(<Home />)} />
      <Route path="/Geolosys" element={(<Geolosys />)} />
      <Route path="/V-Tweaks" element={(<VTweaks />)} />
      <Route path="/PersistentBits" element={(<PersistentBits />)} />
      <Route path="/NaturalProgressions" element={(<NaturalProgressions />)} />
      <Route path="/TinkersAddons" element={(<TinkersAddons />)} />
      <Route path="/Pulver" element={(<Pulver />)} />
    </RouterRoutes>
  </BrowserRouter>
);
