import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export default () => (
  <CSSTransition classNames="react-router" appear in timeout={300}>
    <div className="mb-3">
      <div className="d-flex text-center text-white np masthead mb-5" style={{ height: `${50}vh` }}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center justify-content-center">
          <h1 style={{ fontSize: `${2}rem` }} className="mc-font">Natural Progression</h1>
        </div>
      </div>

      <div className="fluid container">
        <h2>About</h2>
        <h5>
          Natural Progression is a mod which enhances early game mechanics of Minecraft
          with more realistic mechanics.
        </h5>
        <p>
          It does so through a few mechanics which become self-evident as you play with the mod,
          but just a few of these are:
        </p>
        <ul>
          <li>No punching wood</li>
          <li>No wooden / stone tools (configurable)</li>
          <li>Realistic plank crafting</li>
          <li>Bone and Flint materials for only specific tools</li>
        </ul>
        <img className="d-block m-auto" src="/img/natpro/Advancements.png" width="66%" alt="" />
        <hr />
      </div>

      <div className="fluid container">
        <h2>Things to Know..</h2>
        <ol>
          <li>
            Pebbles aren&apos;t placed randomly! A pebble on the surface reflects what you&apos;ll
            find below; a diorite pebble indicates diorite below, sandstone pebble → sandstone, etc.
          </li>
          <li>Twigs will now randomly spawn as well, providing an easier source of sticks.</li>
          <li>Twigs and pebbles can be found under water!</li>
          <li>You can right-click any of the pebbles or twigs to break them.</li>
          <li>
            Bones can be obtained by killing mobs other than skeletons, if enabled in the config.
          </li>
          <li>
            All sawing recipes are Datapack-based! If you want to add support for more recipes,
            just use the vanilla Datapack method!
          </li>
        </ol>
        <hr />
      </div>

      <div className="fluid container">
        <h2>
          <FontAwesomeIcon icon={faYoutube} />
          &nbsp;Reviews
        </h2>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/-X1y9IJnXCk?start=134&end=144" title="YouTube video" allowFullScreen />
        </div>
      </div>
    </div>
  </CSSTransition>
);
