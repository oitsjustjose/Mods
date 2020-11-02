import { } from 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';

export default () => (
  <nav className="navbar navbar-expand-xl fixed-top navbar-dark bg-dark">
    <div className="container-fluid mw-100">
      <a href="/" className="navbar-brand">
        <img src="/me.png" width="30" height="30" alt="" loading="lazy" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <NavItem to="/" name="Home" icon={faHome} />
          <NavItem to="/Geolosys/" name="Geolosys" icon={null} />
          <NavItem to="/V-Tweaks/" name="V-Tweaks" icon={null} />
          <NavItem to="/PersistentBits/" name="Persistent Bits" icon={null} />
          <NavItem to="/NaturalProgressions/" name="Natural Progressions" icon={null} />
          <NavItem to="/TinkersAddons/" name="Tinkers' Addons" icon={null} />
          <NavItem to="/Pulver/" name="Pulver" icon={null} />
        </ul>
      </div>
    </div>
  </nav>
);
