import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import semver from 'semver';
import Components from '../../vt-components.json';

const searchFeatureByName = (query) => {
    const q = query.toLowerCase();
    for (const component of Components.all) {
        for (const feature of component.features) {
            if (feature.name.toLowerCase().includes(q)) {
                return feature;
            }
        }
    }
    return null;
};

const getAllUniqueVersions = () => {
    const versions = new Set();

    for (const component of Components.all) {
        for (const feature of component.features) {
            for (const version of feature.versions) {
                versions.add(version);
            }
        }
    }
    return semver.sort(Array.from(versions));
    // return SemverSort();
};

export default class VTweaks extends Component {

    constructor() {
        super();
        this.onSearch = this.onSearch.bind(this);
        this.onVersionSet = this.onVersionSet.bind(this);
        this.state = {
            searching: false,
            searchFeature: null,
            versionFilter: null
        };
    }

    componentDidMount() {
        const id = `${Components.all[0].name.toLowerCase().replace(/ /g, '-')}-tab`;
        document.getElementById(id).click();
    }

    onSearch(evt) {
        const val = evt.target.value;

        if (val) {
            const feature = searchFeatureByName(val);
            this.setState({
                searching: true,
                searchFeature: feature
            });
        } else {
            this.setState({
                searching: false,
                searchFeature: null
            });
        }
    }

    onVersionSet(evt) {
        this.setState({
            searching: this.state.searching,
            searchFeature: this.state.searchFeature,
            versionFilter: this.state.versionFilter === evt.target.value ? null : evt.target.value
        });
    }

    render() {
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
                            onChange={this.onSearch}
                        />
                    </div>

                    <div className="text-center my-3">
                        <div className="btn-group flex-wrap mx-2" role="group" aria-label="Basic example">
                            {
                                getAllUniqueVersions().map((version) => (
                                    <button
                                        type="button"
                                        className={`btn ${this.state.versionFilter === version ? 'btn-primary' : 'btn-secondary'}`}
                                        value={version}
                                        onClick={this.onVersionSet}
                                    >
                                        {version}
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                    <div id="searchResults" className={`container w-100 h-100 justify-content-center align-items-center ${this.state.searching ? 'd-flex' : 'd-none'}`}>
                        <div className="card h-100 pb-4">
                            <img src={this.state.searchFeature?.img} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="text-center card-title">
                                    {this.state.searchFeature?.name}
                                </h5>
                                <p className="card-text mb-1">
                                    {this.state.searchFeature?.desc}
                                </p>
                                <pre className="text-center game-version">
                                    {this.state.searchFeature?.versions.join(", ")}
                                </pre>
                            </div>
                        </div>
                    </div>

                    <ul className={`nav nav-tabs nav-fill ${this.state.searching ? 'd-none' : ''}`} role="tablist" style={{ cursor: "pointer" }} id="nav-tab">
                        {
                            Components.all.map((comp) => (
                                <li className="nav-item" role="presentation">
                                    <div className="nav-link"
                                        href={`#${comp.name.toLowerCase().replace(/ /g, '-')}`}
                                        id={`${comp.name.toLowerCase().replace(/ /g, '-')}-tab`}
                                        aria-controls={`${comp.name.toLowerCase().replace(/ /g, '-')}`}
                                        data-toggle="tab"
                                    >
                                        {comp.name}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    <div className={`tab-content ${this.state.searching ? 'd-none' : ''}`} role="presentation">
                        {
                            Components.all.map((comp) => (
                                <div className="tab-pane fade"
                                    id={`${comp.name.toLowerCase().replace(/ /g, '-')}`}
                                    aria-labelledby={`${comp.name.toLowerCase().replace(/ /g, '-')}-tab`}
                                    role="tabpanel"
                                >
                                    <div className="container-fluid my-3">
                                        <h2 className="text-center">
                                            {comp.name}
                                        </h2>

                                        <div className="row row-cols-1 row-cols-xl-3 g-4">
                                            {comp.features.map((feature) => (
                                                <div className={
                                                    `col ${(this.state.versionFilter == null || feature.versions.includes(this.state.versionFilter)) ? '' : 'd-none'}`
                                                }>
                                                    <div className="card h-100">
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
                                                                {feature.versions.join(", ")}
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
    }
}
