import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faBook } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CSSTransition } from 'react-transition-group';


export default () => {
    return (
        <CSSTransition classNames="react-router" appear in timeout={300}>
            <div className="mb-3">
                <div className="d-flex text-center text-white geolosys masthead mb-5" style={{ height: `${50}vh` }}>
                    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center justify-content-center">
                        <h1 style={{ fontSize: `${4}rem` }} className="mc-font">Geolosys</h1>
                    </div>
                </div>

                <div className="fluid container">
                    <h2>
                        About
                    </h2>

                    <h5>Geolosys is a TerraFirmaCraft-inspired, dynamic ores and stones mod.</h5>

                    <p>
                        This means that ores come in HUGE plutons, but they're spread out all over the world.
                        I know a lot of people are discouraged by this concept, but Geolosys offers a handful
                        of in-game documentation and tools that will aid in your discovery of new plutons throughout the world.
                    </p>

                    <p>
                        Geolosys has been written to be as intermod-compatible as possible. You can configure nearly every aspect
                        of it to make the best ore excavating experience for your pack!
                    </p>
                    <hr />
                </div>


                <div className="fluid container">
                    <h2>
                        Getting Started
                    </h2>

                    <h5>As you begin your quest into Geolosys deposit hunting, this guide might be of help.</h5>
                    <p>
                        The first thing you'll want to do is see how the mod pack author has configured Geolosys's ores.
                        They are all configurable (and custom ones can even be added!) so I <i>strongly</i> suggest you
                        consult the Field Manual, crafted like so:
                    </p>
                    <img className="rounded d-block m-auto mw-100 mb-3" src="/img/geolosys/field_manual.png" alt="Field Manual Recipe" />
                    <p>
                        Once you've obtained one, you'll want to read up about Geolosys from within that manual. It'll tell
                        you all about the types of deposits in the game and where to find them. In order to do so, it'll be
                        easiest if you craft yourself a prospectors pick using the iron you get from <b>
                            Hematite Samples</b> on the surface of your world. This pick will allow you to
                        right-click it and see info about the deposits in your vacinity. If you are above sea level (indicated
                        by the overlay while holding the pro-pick in your main or off-hand), right-clicking will display deposits
                        that are in the chunk you are standing in. If you are below sea level, right-clicking will display
                        deposits in the vacinity of the direction you are facing (the radius for which is also configurable).
                    </p>
                    <h6>
                        At this point, with some tunneling and exploring you should hopefully find your first pluton!
                    </h6>
                    <hr />
                </div>


                <div className="fluid container">
                    <h2>
                        Geolosys JSON Config
                    </h2>
                    <p>
                        Geolosys has a very robust config for creating, modifying and deleting the ores that it generates. You can
                        find the file in your game directory at <code>config/geolosys.json</code>, and once opened you can make any
                        tweaks or changes you see fit.
                    </p>
                    <p className="text-center">
                        <FontAwesomeIcon icon={faBook} />&nbsp;
                        <b>
                            Visit the <a href="https://docs.geolosys.com" rel="noopener noreferrer" target="_blank">ReadTheDocs page</a> for
                            full documentation on the config file
                        </b>
                    </p>
                    <p>
                        Once you open the config file, you may be overwhelmed (reasonably so) by the syntax of JSON
                        or the overall sheer amount of configs available in the default JSON. Don't worry, because I've recently developed
                        a tool just for that:
                    </p>

                    <h5>
                        <a rel="noopener noreferrer" href="https://config.geolosys.com" target="_blank">
                            <FontAwesomeIcon icon={faLink} />&nbsp;JSON Config Generator
                        </a>
                    </h5>

                    <p>
                        In lieu of the overwhelming size and amount of configuration that can be done to Geolosys, I have developed a web tool
                        which adds a graphical interface to the configuration process. You can register for an account to save your configurations
                        for later download, and it supports 1.12 and 1.14/1.15+ JSON versions.
                    </p>
                </div>


                <div className="fluid container">
                    <h3>
                        <a rel="noopener noreferrer" href="https://www.curseforge.com/minecraft/mc-mods/geolosys" target="_blank">
                            <FontAwesomeIcon icon={faLink} />&nbsp;Download from CurseForge
                        </a>
                    </h3>
                </div>
            </div>
        </CSSTransition >
    );
};
