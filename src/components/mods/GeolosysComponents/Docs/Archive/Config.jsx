import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <div className="pb-5">
    <div className="fluid container">
      <h2 style={{ textDecoration: 'line-through' }}>
        Geolosys JSON Config
      </h2>
      <h5 className="text-danger">
        The JSON Config Is ONLY Supported for 1.15.x and Below
      </h5>

      <h6>
        If you&apos;re on a newer version, please use the Datapacks docs to guide your way through!
      </h6>

    </div>

    <div className="fluid container">
      <p>
        Geolosys has a very robust config for creating, modifying and deleting the ores that it
        generates. You can find the file in your game directory at
        {' '}
        <code>config/geolosys.json</code>
        {' '}
        , and once opened you can make any tweaks or changes you see fit.
        Once you open the config file, you may be overwhelmed (reasonably so) by the syntax of
        JSON or the overall sheer amount of configs available in the default JSON. Don&apos;t
        worry, because I&apos;ve there&apos;s an online tool for creating configurations:
      </p>
    </div>

    <div className="fluid container">
      <h5>
        <a rel="noopener noreferrer" href="https://config.geolosys.com" target="_blank">
          <FontAwesomeIcon icon={faLink} />
          &nbsp;JSON Config Generator
        </a>
      </h5>
    </div>
  </div>
);
