/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import About from './GeolosysComponents/About';
import ConfigArchive from './GeolosysComponents/Docs/Archive/Config';
import CraftTweakerArchive from './GeolosysComponents/Docs/Archive/CraftTweaker';
import DatapacksArchive from './GeolosysComponents/Docs/Archive/Datapacks';
import Datapacks from './GeolosysComponents/Docs/Datapacks';
import Plutons from './GeolosysComponents/Docs/Plutons';

export default () => {
  const [component, setComponent] = useState(window.location.hash.replace(/#/g, '') || 'about');

  return (
    <CSSTransition classNames="react-router" appear in timeout={300}>
      <div className="mb-3">
        <div className="d-flex text-center text-white geolosys masthead" style={{ height: `${50}vh` }}>
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center justify-content-center">
            <h1 style={{ fontSize: `${4}rem` }} className="mc-font">Geolosys</h1>
          </div>
        </div>

        <div className="fluid container">

          <nav className="navbar navbar-expand navbar-light bg-light geolosys-navbar mt-2 mb-5">
            <div className="container-fluid mw-100">
              <div className="navbar-brand">
                Submenu
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  <a
                    className={`nav-link ${component === 'about' ? 'active' : ''}`}
                    onClick={() => setComponent('about')}
                    href="#about"
                  >
                    About
                  </a>

                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle ${component !== 'about' && !component.endsWith('-archive') ? 'active' : ''}`}
                      href="/"
                      id="geolosysDocsDD"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Docs
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="geolosysDocsDD">
                      <li>
                        <a
                          className={`dropdown-item ${component === 'plutons' ? 'active' : ''}`}
                          onClick={() => setComponent('plutons')}
                          href="#plutons"
                        >
                          Plutons
                        </a>
                      </li>
                      <li>
                        <a
                          className={`dropdown-item ${component === 'datapacks' ? 'active' : ''}`}
                          onClick={() => setComponent('datapacks')}
                          href="#datapacks"
                        >
                          Datapacks
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle ${component.endsWith('-archive') ? 'active' : ''}`}
                      href="#"
                      id="geolosysDocsDD"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Docs (Archive)
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="geolosysDocsDDArchive">
                      <li>
                        <a
                          className={`dropdown-item ${component === 'datapacks-archive' ? 'active' : ''}`}
                          onClick={() => setComponent('datapacks-archive')}
                          href="#datapacks-archive"
                        >
                          Datapacks
                        </a>
                      </li>
                      <li>
                        <a
                          className={`dropdown-item ${component === 'config-archive' ? 'active' : ''}`}
                          onClick={() => setComponent('config-archive')}
                          href="#config-archive"
                        >
                          JSON Config
                        </a>
                      </li>
                      <li>
                        <a
                          className={`dropdown-item ${component === 'crafttweaker-archive' ? 'active' : ''}`}
                          onClick={() => setComponent('crafttweaker-archive')}
                          href="#crafttweaker-archive"
                        >
                          CraftTweaker API
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {component === 'about' && (<About />)}

        {component === 'datapacks' && (<Datapacks />)}

        {component === 'plutons' && (<Plutons />)}
        {component === 'datapacks-archive' && (<DatapacksArchive />)}
        {component === 'config-archive' && (<ConfigArchive />)}
        {component === 'crafttweaker-archive' && (<CraftTweakerArchive />)}

      </div>
    </CSSTransition>
  );
};
