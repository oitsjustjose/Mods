import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export default () => (
  <CSSTransition classNames="react-router" appear in timeout={300}>
    <div className="mb-3">
      <div className="d-flex text-center text-white pb masthead mb-5" style={{ height: `${50}vh` }}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center justify-content-center">
          <h1 style={{ fontSize: `${2}rem` }} className="mc-font">Persistent Bits</h1>
        </div>
      </div>

      <div className="fluid container">
        <h2>About</h2>
        <h5>Persistent Bits is a simple, vanilla-like chunk loading mod.</h5>
        <p>
          This mod&apos;s loaders do not require any fuels, and work using two different
          mechanics depending on the game version:
        </p>
        <hr />
      </div>

      <div className="fluid container">
        <h2>Chunk-Loading Mechanics</h2>
        <h3>1.14+</h3>
        <p>
          {' '}
          In 1.14 and newer, Persistent Bits uses the vanilla
          <code>/forceload</code>
          {' '}
          mechanic to chunk load. This mechanic doesn&apos;t tick blocks such as crops,
          but still keeps things loaded for functionality&apos;s sake. Keep this in mind when
          you use it for automation -- in the future, block ticking may be implemented.
        </p>
        <h3>1.12 and Below</h3>
        <p>
          In 1.12 and older, Persistent Bits uses Forge&apos;s Ticket-based Chunk Loading system,
          which keeps the entire chunk and all blocks within loaded and ticking.
        </p>
        <hr />
      </div>

      <div className="fluid container">
        <h2>
          <FontAwesomeIcon icon={faYoutube} />
          &nbsp;Reviews
        </h2>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tqnH56iCigg" title="YouTube video" allowFullScreen />
        </div>
      </div>
    </div>
  </CSSTransition>
);
