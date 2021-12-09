import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <div className="pb-5">
    <div className="fluid container pb-5">
      <h2>
        About
      </h2>

      <h5>Geolosys is a TerraFirmaCraft-inspired, dynamic ores and stones mod.</h5>
      <p>
        This means that ores come in HUGE plutons, but they&apos;re spread out all over the world.
        I know a lot of people are discouraged by this concept, but Geolosys offers a handful of
        in-game documentation and tools that will aid in your discovery of new plutons throughout
        the world.
      </p>
      <p>
        Geolosys has been written to be as intermod-compatible as possible. You can configure
        nearly every aspect of it to make the best ore excavating experience for your pack!
      </p>
    </div>

    <div className="fluid container pb-5">
      <h2>
        Getting Started
      </h2>

      <h5>As you begin your quest into Geolosys deposit hunting, this guide might be of help.</h5>
      <p>
        The first thing you&apos;ll want to do is see how the mod pack author has configured
        Geolosys&apos;s ores. They are all configurable (and custom ones can even be added!) so I
        {' '}
        <i>strongly</i>
        {' '}
        suggest you consult the Field Manual, crafted like so:
      </p>
      <img className="rounded d-block m-auto mw-100 mb-3" src="/img/geolosys/field_manual.png" alt="Field Manual Recipe" />
      <p>
        Once you&apos;ve obtained one, you&apos;ll want to read up about Geolosys from within that
        manual. It&apos;ll tell you all about the types of deposits in the game and where to find
        them. In order to do so, it&apos;ll be easiest if you craft yourself a prospectors pick
        using the iron you get from
        {' '}
        <b>
          Hematite Samples
        </b>
        {' '}
        on the surface of your world. This pick will allow you to right-click it and see info
        about the deposits in your vacinity. If you are above sea level (indicated by the overlay
        while holding the pro-pick in your main or off-hand), right-clicking will display deposits
        that are in the chunk you are standing in. If you are below sea level, right-clicking will
        display deposits in the vacinity of the direction you are facing (the radius for which is
        also configurable).
      </p>
      <h6>
        At this point, with some tunneling and exploring you should hopefully find your first
        pluton!
      </h6>
    </div>

    <div className="fluid container pb-5">
      <h3>Ore Generation Changed by Geolosys</h3>

      <p>
        The default configuration for Ore Generation has changed with Geolosys v3.0.0.
        Many deposit configs remain unchanged, but a few have changed:
      </p>

      <ul>
        <li>Lapis is now found in Deserts of all types (hills and mutated)</li>
        <li>Beryl is now found in Extreme Hills of all types, and Ice Mountains</li>
        <li>Limonite is now found on Mushroom Islands and in Swamplands</li>
        <li>
          Azurite and Malachite now generate together, as in real life. Azurite generates at a
          60% chance, where Malachite generates at a 40% chance.
        </li>
        <li>Cassiterite is now found in ocean biomes (may be changed)</li>
        <li>
          Teallite is now found in ocean biomes (may be changed) and has a small chance to
          generate with Beryl, as in real life.
        </li>
        <li>Galena is now found in flat biomes, such as Plains and Ice Plains</li>
        <li>Bauxite is now found in Jungle biomes and Savannah biomes</li>
        <li>Autunite is now found in Extreme Hills of all types, and Ice Mountains</li>
      </ul>

      <p>
        All of these changes are reflected in the Field Manual in versions for 1.15.2 and below.
      </p>
    </div>

    <div className="fluid container pb-5">
      <h3>Archived Info</h3>

      <p>
        Over time, needless to say Geolosys has changed. As such, I&apos;m keeping old information
        on Geolosys in the Docs (Archive) dropdown - this may be a bit jumbled as far as
        organization goes, but nothing a little
        {' '}
        <kbd>CTRL</kbd>
        {' '}
        +
        {' '}
        <kbd>F</kbd>
        {' '}
        can&apos;t find for you 😄
      </p>
    </div>

    <div className="fluid container">
      <h3>
        <a rel="noopener noreferrer" href="https://www.curseforge.com/minecraft/mc-mods/geolosys" target="_blank">
          <FontAwesomeIcon icon={faLink} />
          &nbsp;Download from CurseForge
        </a>
      </h3>
    </div>

  </div>
);
