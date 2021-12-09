import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import OreDeposit from './Templates/OreDeposit';
import OreDepositMulti from './Templates/OreDepositMulti';
import StoneDeposit from './Templates/StoneDeposit';

export default () => (
  <div className="pb-5">
    <div className="fluid container pb-5">
      <h2>Geolosys Datapacks (1.16 and Up)</h2>

      <p>
        Starting as of Geolosys&apos;s port to Minecraft 1.16, all plutons in
        Geolosys are now registered using Datapacks! Datapacks are a fantastic,
        flexible way of adding or modifying content in Geolosys your heart&apos;s
        desires!
      </p>

      <p>
        On this page you will find documentation and tutorials on how to create
        your own datapack in Geolosys for both modifying/removing default plutons,
        as well as adding your very own! This tutorial will
        {' '}
        <i>not</i>
        {' '}
        teach you datapack fundamentals, nor will it teach you JSON -- you should be
        able to learn that using resources such as
        {' '}
        <a
          href="https://minecraft.fandom.com/wiki/Data_Pack"
          target="_blank"
          rel="noopener noreferrer"
        >
          this one
        </a>

        . It will, however, teach you how to expand upon vanilla datapack knowledge
        to manipulate Plutons 😊
      </p>

      <p>
        For pack creators looking to have datapacks apply to any world that is created,
        I suggest taking a look at
        {' '}
        <a
          href="https://www.curseforge.com/minecraft/mc-mods/drp-global-datapack"
          target="_blank"
          rel="noopener noreferrer"
        >
          this mod!
        </a>
      </p>
    </div>

    <div className="fluid container pb-5">
      <h2>Geolosys Built-In Pluton Locations</h2>
      <p>
        In order to override or disable a pre-existing, built-in pluton that
        comes with Geolosys by default, you&apos;ll need to know the exact
        path of that
        {' '}
        <code>.json</code>
        {' '}
        file in order to successfully overwrite it. To help with this, a list
        of all of Geoloys&apos;s built-in plutons can be found below:
      </p>

      <div>
        <b>Ores: </b>

        <ul>
          <li><code>/data/geolosys/deposits/ore/ancient_debris_nether.json</code></li>
          <li><code>/data/geolosys/deposits/ore/bituminous_coal.json</code></li>
          <li><code>/data/geolosys/deposits/ore/gold_nether.json</code></li>
          <li><code>/data/geolosys/deposits/ore/malachite_and_azurite.json</code></li>
          <li><code>/data/geolosys/deposits/ore/anthracitic_coal.json</code></li>
          <li><code>/data/geolosys/deposits/ore/cassiterite.json</code></li>
          <li><code>/data/geolosys/deposits/ore/hematite.json</code></li>
          <li><code>/data/geolosys/deposits/ore/platinum.json</code></li>
          <li><code>/data/geolosys/deposits/ore/assorted_quartz.json</code></li>
          <li><code>/data/geolosys/deposits/ore/cinnabar.json</code></li>
          <li><code>/data/geolosys/deposits/ore/kimberlite.json</code></li>
          <li><code>/data/geolosys/deposits/ore/sphalerite.json</code></li>
          <li><code>/data/geolosys/deposits/ore/autunite.json</code></li>
          <li><code>/data/geolosys/deposits/ore/coal.json</code></li>
          <li><code>/data/geolosys/deposits/ore/lapis.json</code></li>
          <li><code>/data/geolosys/deposits/ore/teallite_and_emerald.json</code></li>
          <li><code>/data/geolosys/deposits/ore/bauxite.json</code></li>
          <li><code>/data/geolosys/deposits/ore/galena.json</code></li>
          <li><code>/data/geolosys/deposits/ore/lignite.json</code></li>
          <li><code>/data/geolosys/deposits/ore/beryl.json</code></li>
          <li><code>/data/geolosys/deposits/ore/gold.json</code></li>
          <li><code>/data/geolosys/deposits/ore/limonite.json</code></li>
        </ul>

        <b>Stones: </b>
        <ul>
          <li><code>/data/geolosys/deposits/stone/andesite.json</code></li>
          <li><code>/data/geolosys/deposits/stone/diorite.json</code></li>
          <li><code>/data/geolosys/deposits/stone/granite.json</code></li>
        </ul>

        <b>Other: </b>
        <ul>
          <li><code>/data/geolosys/deposits/other/peat.json</code></li>
        </ul>
      </div>
    </div>

    <div className="fluid container pb-5">
      <h2>Disabling Default Plutons</h2>

      <p>
        First thing&apos;s first, most people will want to learn how to disable a
        pluton added by Geolosys. This is easy enough to do, but it is important to
        understand that in order to override a preexisting pluton you must replace the
        file at the
        {' '}
        <i>exact</i>
        {' '}
        path that the original file is in, but in
        {' '}
        <i>your</i>
        {' '}
        datapack. For example, to override/disable a Sphalerite pluton you must place your new
        {' '}
        <code>.json</code>
        {' '}
        file in your datapack located in
        {' '}
        <code>data/geolosys/deposits/ore/</code>
        {' '}
        and named
        {' '}
        <code>sphalerite.json</code>
        . Afterwards, all you must do is put an empty JSON object inside!
      </p>
    </div>

    <div className="fluid container pb-5">
      <h2>Modifying Default Plutons</h2>

      <p>
        Similar to the instructions for removing them, follow every step but after
        creating your empty JSON object, you will need to populate that JSON object.
        I suggest starting with the original JSON object
        {' '}
        <a
          href="https://github.com/oitsjustjose/Geolosys/tree/1.16/src/main/resources/data/geolosys/deposits"
          target="_blank"
          rel="noopener noreferrer"
        >
          (which you can find here)
        </a>
        {' '}
        and then modifying it from there. If you wish to start from scratch, follow the
        next section&apos;s tutorial on creating your own custom pluton!
      </p>
    </div>

    <div className="fluid container pb-5">
      <h2>Creating Custom Plutons</h2>

      <p>
        Creating a custom pluton is a bit easier, but also harder, than locating
        and disabling/overriding an existing pluton. There are a few different
        types of pluton you can make, so the below
        {' '}
        <code>JSON5</code>
        {' '}
        object should well explain how to accomplish the creation of a new pluton entirely.
      </p>

      <h3><code>geolosys:ore_deposit</code></h3>

      <p>
        This would be used for an ore-deposit-like pluton (with a sample block, matchers, etc.).
      </p>

      <SyntaxHighlighter language="json5" style={nord}>
        {OreDeposit}
      </SyntaxHighlighter>

      <p>
        <b>NOTE:</b>
        {' '}
        It is possible to have more than one Ore Block, Sample Block, or both!
        If you decide to have multiple sample blocks or multiple ore blocks,
        you must use the syntax below for both samples and blocks, not just one.
        That is, if you decide you want 2+ ore blocks but only one sample (or vice-versa),
        you must use the below syntax and just put your one sample/ore (just as is shown in
        the JSON sample below) alone in the array with a chance of 100.
      </p>
      <SyntaxHighlighter language="json5" style={nord}>
        {OreDepositMulti}
      </SyntaxHighlighter>

      <h3><code>geolosys:stone_deposit</code></h3>

      <p>
        This would be used for an stone-like pluton. No sample block,
        no choice in matchers, just another stone type.
      </p>

      <SyntaxHighlighter language="json5" style={nord}>
        {StoneDeposit}
      </SyntaxHighlighter>

    </div>
  </div>
);
