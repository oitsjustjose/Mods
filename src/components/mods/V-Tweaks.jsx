import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import semver from 'semver';
import Components from '../../vt-components.json';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.js';


const searchFeaturesByName = (query) => {
  const results = Components.all.map(
    (component) => component.features.filter(
      (feature) => feature.name.toLowerCase().includes(query.toLowerCase()),
    ),
  ).flat();

  return results.length ? results : [];
};

const getAllUniqueVersions = () => {
  const versions = new Set();

  Components.all.forEach((component) => {
    component.features.forEach((feature) => {
      feature.versions.map((x) => versions.add(x));
    });
  });

  return semver.sort(Array.from(versions));
};

export default () => {
  const [state, setState] = useState({
    searching: false,
    searchFeatures: null,
    versionFilter: null,
  });

  useEffect(() => {
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      .forEach((tooltipEl) => {
        new Tooltip(tooltipEl, {
          customClass: tooltipEl.className.includes('experimental') ? "experimental-tooltip" : ""
        });
      })

    return () => { };
  }, []);

  const onSearch = (evt) => {
    const val = evt.target.value;
    if (!val) {
      setState({
        ...state,
        searching: false,
        searchFeatures: null,
      });
      return;
    }

    const features = searchFeaturesByName(val);
    setState({
      ...state,
      searching: true,
      searchFeatures: features,
    });

    /* Create a new tooltip if there is one */
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    .forEach((tooltipEl) => {
      new Tooltip(tooltipEl, {
        customClass: tooltipEl.className.includes('experimental') ? "experimental-tooltip" : ""
      });
    })
  };

  const onVersionSet = (evt) => {
    setState({
      ...state,
      versionFilter: evt.target.value || null,
    });
  };


  return (
    <CSSTransition classNames="react-router" appear in timeout={300}>
      <div>
        <div className="d-flex text-center text-white vtweaks masthead mb-1" style={{ height: `${50}vh` }}>
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center justify-content-center">
            <p style={{ fontSize: `${3}rem` }} className="mc-font">V-Tweaks</p>
          </div>
        </div>

        <div className="container-fluid my-3" style={{ maxWidth: `${767}px`, width: `${100}vw` }}>
          <input
            className="form-control"
            type="text"
            placeholder="Search..."
            aria-label="Search for Features"
            onChange={onSearch}
          />
        </div>

        <div className="text-center my-3">
          <div className="btn-group flex-wrap mx-2" role="group" aria-label="Basic example">
            {
              getAllUniqueVersions().map((version) => (
                <button
                  type="button"
                  className={`btn ${state.versionFilter === version ? 'btn-primary' : 'btn-secondary'}`}
                  value={version}
                  onClick={onVersionSet}
                  key={`version_${version}`}
                >
                  {version}
                </button>
              ))
            }
          </div>
        </div>

        {state.searching && (
          <div className="container-fluid my-3">
            <h2 className="text-center">
              Search Results
            </h2>
            <div className="row row-cols-1 row-cols-xl-3 g-4">
              {state.searchFeatures.map((feature) => (
                <div className={`col ${(state.versionFilter == null || feature.versions.includes(state.versionFilter)) ? '' : 'd-none'}`}>
                  <div
                    className={`card h-100 ${feature.experimental ? 'experimental' : ''}`}
                    data-bs-toggle={feature.experimental && "tooltip"}
                    data-bs-placement={feature.experimental && "top"}
                    title={feature.experimental && "This Feature is Experimental!"}
                  >
                    <img src={feature.img} alt="" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="text-center card-title">
                        {feature.name}
                      </h5>
                      <p className="card-text mb-1">
                        {feature.desc}
                      </p>
                    </div>
                    <div className="card-footer">
                      <code className="text-center">
                        {feature.versions.join(', ')}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <nav>
          <div
            className={`nav nav-tabs nav-fill ${state.searching ? 'd-none' : ''}`}
            id="nav-tab"
            role="tablist"
            style={{ cursor: 'pointer' }}
          >
            {
              Components.all.map((comp, idx) => (
                <button
                  className={`nav-link ${idx === 0 ? 'active' : ''}`}
                  id={`${comp.name.toLowerCase().replace(/ /g, '-')}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${comp.name.toLowerCase().replace(/ /g, '-')}`}
                  type="button"
                  role="tab"
                  aria-controls={`${comp.name.toLowerCase().replace(/ /g, '-')}`}
                  aria-selected={idx === 0 ? "true" : "false"}
                  key={`${idx}_${comp.name}`}
                >
                  {comp.name}
                </button>
              ))
            }
          </div>
        </nav>

        <div
          className={`tab-content ${state.searching ? 'd-none' : ''}`}
          id="nav-tabContent"
        >
          {
            Components.all.map((comp, idx) => (
              <div
                className={`tab-pane fade ${idx === 0 ? 'show active' : ''}`}
                id={`${comp.name.toLowerCase().replace(/ /g, '-')}`}
                role="tabpanel"
                aria-labelledby={`${comp.name.toLowerCase().replace(/ /g, '-')}-tab`}
              >
                <div className="container-fluid my-3">
                  <h2 className="text-center">
                    {comp.name}
                  </h2>
                  <div className="row row-cols-1 row-cols-xl-3 g-4">
                    {comp.features.map((feature) => (
                      <div className={`col ${(state.versionFilter == null || feature.versions.includes(state.versionFilter)) ? '' : 'd-none'}`}>
                        <div
                          className={`card h-100 ${feature.experimental ? 'experimental' : ''}`}
                          data-bs-toggle={feature.experimental && "tooltip"}
                          data-bs-placement={feature.experimental && "top"}
                          title={feature.experimental && "This Feature is Experimental!"}
                        >
                          <img src={feature.img} alt="" className="card-img-top" />
                          <div className="card-body">
                            <h5 className="text-center card-title">
                              {feature.name}
                            </h5>
                            <p className="card-text mb-1">
                              {feature.desc}
                            </p>
                          </div>
                          <div className="card-footer">
                            <code className="text-center">
                              {feature.versions.join(', ')}
                            </code>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </CSSTransition>
  );
};
