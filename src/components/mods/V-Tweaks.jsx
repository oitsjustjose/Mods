import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle';
import FeatureList from './VTweaksComponents/FeatureList';
import ArchivedComponents from '../../vt-components.old.json';
import Components from '../../vt-components.json';
import ChallengerDatapacks from './VTweaksComponents/Datapack/ChallengerMobs';
import CullingDatapacks from './VTweaksComponents/Datapack/EntityCulling';
import AnvilRecipes from './VTweaksComponents/Datapack/AnvilRecipes';
import FluidTrans from './VTweaksComponents/Datapack/FluidTrans';

export default () => {
  const [component, setComponent] = useState(window.location.hash.replace(/#/g, '') || 'features');

  useEffect(() => {
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      .forEach((tooltipEl) => {
        /* eslint-disable-next-line */
        new Tooltip(tooltipEl, {
          customClass: tooltipEl.className.includes('experimental') ? 'experimental-tooltip' : '',
        });
      });

    return () => { };
  }, []);

  return (
    <CSSTransition classNames="react-router" appear in timeout={300}>
      <div>
        <div className="d-flex text-center text-white vtweaks masthead mb-1" style={{ height: `${50}vh` }}>
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center justify-content-center">
            <p style={{ fontSize: `${3}rem` }} className="mc-font">V-Tweaks</p>
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
                    className={`nav-link ${component === 'features' ? 'active' : ''}`}
                    onClick={() => setComponent('features')}
                    href="#features"
                  >
                    Features
                  </a>

                  <a
                    className={`nav-link ${component === 'features-archived' ? 'active' : ''}`}
                    onClick={() => setComponent('features-archived')}
                    href="#archived-features"
                  >
                    Old/Unsupported Versions
                  </a>

                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle ${component !== 'features' && !component.endsWith('-archived') ? 'active' : ''}`}
                      href="/"
                      id="docs"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Datapacks
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="datapacksDD">
                      <li>
                        <a
                          className={`dropdown-item ${component === 'challengers' ? 'active' : ''}`}
                          onClick={() => setComponent('challengers')}
                          href="#challengers"
                        >
                          Challenger Mobs
                        </a>
                      </li>
                      <li>
                        <a
                          className={`dropdown-item ${component === 'entity-culling' ? 'active' : ''}`}
                          onClick={() => setComponent('entity-culling')}
                          href="#entity-culling"
                        >
                          Entity Culling
                        </a>
                      </li>
                      <li>
                        <a
                          className={`dropdown-item ${component === 'anvil-recipes' ? 'active' : ''}`}
                          onClick={() => setComponent('anvil-recipes')}
                          href="#anvil-recipes"
                        >
                          Anvil Recipes
                        </a>
                      </li>
                      <li>
                        <a
                          className={`dropdown-item ${component === 'fluid-recipes' ? 'active' : ''}`}
                          onClick={() => setComponent('fluid-recipes')}
                          href="#fluid-recipes"
                        >
                          Fluid Transformation Recipes
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="fluid container">
          <div className="container-fluid">

            {component === 'features' && (<FeatureList components={Components} />)}
            {component === 'features-archived' && (<FeatureList components={ArchivedComponents} />)}
            {/* Data packs */}
            {component === 'challengers' && (<ChallengerDatapacks />)}
            {component === 'entity-culling' && (<CullingDatapacks />)}
            {component === 'anvil-recipes' && (<AnvilRecipes />)}
            {component === 'fluid-recipes' && (<FluidTrans />)}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
