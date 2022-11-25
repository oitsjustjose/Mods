import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import semver from 'semver';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle';

export default ({ components }) => {
  const searchFeaturesByName = (query) => {
    const results = components.all.map(
      (component) => component.features.filter(
        (feature) => feature.name.toLowerCase().includes(query.toLowerCase()),
      ),
    ).flat();

    return results.length ? results : [];
  };

  const getAllUniqueVersions = () => {
    const versions = new Set();

    components.all.forEach((component) => {
      component.features.forEach((feature) => {
        feature.versions.map((x) => versions.add(x));
      });
    });

    return semver.sort(Array.from(versions));
  };

  /* Tries to restore the last active tab from user storage */
  const getDefaultTabNm = () => {
    const idx = Number.parseInt(window.localStorage.getItem('last-tab-idx'), 10) || 0;
    return components.all[idx]?.name || components.all[0].name;
  };

  const [activeTab, setActiveTabInternal] = useState(getDefaultTabNm());
  const [state, setState] = useState({
    searching: false,
    searchFeatures: null,
    versionFilter: null,
  });

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
        /* eslint-disable-next-line */
        new Tooltip(tooltipEl, {
          customClass: tooltipEl.className.includes('experimental') ? 'experimental-tooltip' : '',
        });
      });
  };

  const onVersionSet = (evt) => {
    setState({
      ...state,
      versionFilter: evt.target.value || null,
    });
  };

  const setActiveTab = (tab) => {
    setActiveTabInternal(tab);
    window.localStorage.setItem('last-tab-idx', components.all.findIndex((x) => x.name === tab));
  };

  return (
    <div>
      {/* Main Search Controls */}
      <div className="container-fluid my-3" style={{ maxWidth: `${767}px`, width: `${100}vw` }}>
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          aria-label="Search for Features"
          onChange={onSearch}
        />
      </div>

      {/* Version Filtering */}
      {getAllUniqueVersions().length > 1 && (
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
      )}

      {/* Search Results */}
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
                  data-bs-toggle={feature.experimental && 'tooltip'}
                  data-bs-placement={feature.experimental && 'top'}
                  title={feature.experimental && 'This Feature is Experimental!'}
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

      {/* Standard list when not searching */}
      <nav>
        <div
          className={`nav nav-tabs ${state.searching ? 'd-none' : ''}`}
          id="nav-tab"
          role="tablist"
          style={{ cursor: 'pointer' }}
        >
          {
            components.all.map((comp) => (
              <button
                className={`nav-link ${comp.name === activeTab ? 'active text-primary' : 'text-black'}`}
                id={`${comp.name.toLowerCase().replace(/ /g, '-')}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${comp.name.toLowerCase().replace(/ /g, '-')}`}
                type="button"
                role="tab"
                aria-controls={`${comp.name.toLowerCase().replace(/ /g, '-')}`}
                aria-selected={comp.name === activeTab ? 'true' : 'false'}
                key={comp.name}
                onClick={() => setActiveTab(comp.name)}
              >
                {comp.name}
              </button>
            ))
          }
        </div>
      </nav>

      <div className="border border-top-0 rounded">
        <div
          className={`tab-content ${state.searching ? 'd-none' : ''}`}
          id="nav-tabContent"
        >
          {
            components.all.map((comp) => (
              <div
                className={`tab-pane fade ${comp.name === activeTab ? 'show active' : ''}`}
                id={`${comp.name.toLowerCase().replace(/ /g, '-')}`}
                role="tabpanel"
                aria-labelledby={`${comp.name.toLowerCase().replace(/ /g, '-')}-tab`}

              >
                <div className="container-fluid my-3">
                  <div className="row row-cols-1 row-cols-xl-3 g-4">
                    {comp.features.map((feature) => (
                      <div className={`col ${(state.versionFilter == null || feature.versions.includes(state.versionFilter)) ? '' : 'd-none'}`}>
                        <div
                          className={`card h-100 ${feature.experimental ? 'experimental' : ''}`}
                          data-bs-toggle={feature.experimental && 'tooltip'}
                          data-bs-placement={feature.experimental && 'top'}
                          title={feature.experimental && 'This Feature is Experimental!'}
                        >
                          <img
                            src={comp.name === activeTab ? feature.img : '/img/vtweaks/tmp.png'}
                            alt=""
                            className="card-img-top"
                          />
                          <div className="card-body">
                            <h5 className="text-center card-title">
                              {feature.name}
                            </h5>
                            <p className="card-text mb-1">
                              <ReactMarkdown>{feature.desc}</ReactMarkdown>
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

      <div className="pb-5" />
    </div>
  );
};
