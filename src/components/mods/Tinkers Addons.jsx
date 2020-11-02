import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default () => (
  <CSSTransition classNames="react-router" appear in timeout={300}>
    <div className="mb-3">
      <div className="d-flex text-center text-white generic masthead mb-5" style={{ height: `${50}vh` }}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center justify-content-center">
          <h1
            style={{ fontSize: `${2}rem` }}
            className="mc-font mb-3"
          >
            Tinkers Addons
          </h1>
        </div>
      </div>

      <div className="fluid container">
        <h2>About</h2>
        <h5>
          Tinkers Addons brings back the old Tinkers Constructs upgrade and repair mechanisms that
          were dropped after Minecraft 1.7.10.
        </h5>
        <p>
          These features have the same effects but are implemented in a different way from the
          original!
        </p>
        <hr />
      </div>

      <div className="fluid container">
        <h2 className="d-flex align-items-center">
          Ameloriation Books&nbsp;
          <img src="/img/tinkersaddons/amelioration_book_item.png" height="32px" alt="" />
        </h2>
        <p>
          The amelioration book offers a means to bring back the old &quot;auto-repair&quot;
          mechanic to modern Tinkers&apos;. It works just like the old Auto Repair did, repairing
          faster in the nether, rain, etc.. Amelioration is levelable up to Level V, just like the
          original.
        </p>
        <hr />
      </div>

      <div className="fluid container">
        <h2 className="d-flex align-items-center">
          Upgrade Toolkits&nbsp;
          <img src="/img/tinkersaddons/fake_tier.png" height="32px" alt="" />
        </h2>
        <p>
          Offers (and exceeds) the original &quot;get an extra modifier&quot; mechanic from older
          Tinkers&apos; Construct, allowing you to add up to 4 extra modifiers to a tool. There
          are no tiers and they can be applied in any order, but they can only be applied once
          and progressively increase in difficulty.
        </p>
        <img className="d-block m-auto" src="/img/tinkersaddons/all_tiers.gif" width="40%" alt="" />
      </div>
    </div>
  </CSSTransition>
);
