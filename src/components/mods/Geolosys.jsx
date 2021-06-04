import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import About from './GeolosysComponents/About';
import Config from './GeolosysComponents/Config';
import CT from './GeolosysComponents/CraftTweaker';
import OreGen from './GeolosysComponents/OreGeneration';

export default () => {
  const [component, setComponent] = useState('about');

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
              <a href="/" className="navbar-brand">
                Geolosys
              </a>
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
                  <button
                    className={`nav-link nav-btn ${component === 'about' ? 'active' : ''}`}
                    type="button"
                    onClick={() => setComponent('about')}
                  >
                    About
                  </button>
                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle ${component !== 'about' ? 'active' : ''}`}
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
                        <button
                          className={`dropdown-item ${component === 'oreGen' ? 'active' : ''}`}
                          type="button"
                          onClick={() => setComponent('oreGen')}
                        >
                          Ore Generation
                        </button>
                      </li>
                      <li>
                        <button
                          className={`dropdown-item ${component === 'config' ? 'active' : ''}`}
                          type="button"
                          onClick={() => setComponent('config')}
                        >
                          JSON Config
                        </button>

                      </li>
                      <li>
                        <button
                          className={`dropdown-item ${component === 'ct' ? 'active' : ''}`}
                          type="button"
                          onClick={() => setComponent('ct')}
                        >
                          CraftTweaker API
                        </button>

                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {component === 'about' && (<About />)}
        {component === 'oreGen' && (<OreGen />)}
        {component === 'config' && (<Config />)}
        {component === 'ct' && (<CT />)}

      </div>
    </CSSTransition>
  );
};
