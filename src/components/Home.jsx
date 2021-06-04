import React from 'react';
import '../css/home.css';
import { CSSTransition } from 'react-transition-group';

export default () => (
  <CSSTransition classNames="react-router" appear in timeout={300}>
    <div className="d-flex h-100 text-center text-white" id="masthead">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center justify-content-center">
        <main>
          <h1 className="up arrow">
            ^
          </h1>
          <h1>
            oitsjustjose's Mod Wiki
          </h1>
          <h5>
            Brief guides for each and every mod to get you started!
          </h5>
        </main>
      </div>
    </div>
  </CSSTransition>
);
