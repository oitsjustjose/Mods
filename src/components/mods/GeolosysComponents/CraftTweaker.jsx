import React from 'react';

export default () => (
  <div className="pb-5">
    <div className="fluid container">

      <h2>
        CraftTweaker API
      </h2>

      <h5 className="text-danger">
        The CraftTweaker API Is Only for 1.12.x
      </h5>
    </div>

    <div className="fluid container">
      <p>
        The CraftTweaker add-on has been created to make adding new deposits to Geolosys
        in an even more robust way. You can follow along the following pages to see how this works.
      </p>
      <p>
        Ores and stones both require a special import in your
        {' '}
        <code>.zs</code>
        {' '}
        script. For ores, use
        {' '}
        <code>import mods.geolosys.ores;</code>
        , and for stones use
        {' '}
        <code>import mods.geolosys.stones;</code>
      </p>

      <p>
        There are multiple types of deposits which are able to be made with the CraftTweaker API,
        listed below.
      </p>
    </div>

    <div className="fluid container">
      <h3>Plain Deposit</h3>

      <p>
        A plain / standard ore deposit is one which generates in any biome with only a single block.
        This is the method that has been used by Geolosys up until Version 3.0.0, so if you&apos;d
        like that standard distribution of ores, you&apos;d probably want to use this. The arguments
        are listed below and must be in this order - the format is
        {' '}
        <code>[ObjectType] name</code>
      </p>

      <ul>
        <li><code>[BlockState] oreBlock</code></li>
        <li><code>[BlockState] sampleBlock</code></li>
        <li><code>[int] yMin</code></li>
        <li><code>[int] yMax</code></li>
        <li><code>[int] size</code></li>
        <li>
          <code>[int] chance</code>
          : Higher chance means it&apos;s more likely to generate. The chance is relative
          to the sum of all chances of all deposits. For example, having only a total of
          chance=20 (for all ores), then a chance of 4 here would result in a 4 out of 20 chance.
        </li>
        <li>
          <code>[float] density</code>
          : Ranges from 0.0 to 1.0, where a density of 1.0 represents a pluton whose spheroid
          generation is completely solid with the block(s) defined in blocks. A density of 0.5
          would represent a pluton of the same shape and size as 1.0, but consisting of half as
          many ore blocks, which would still remain the original blocks.
        </li>
        <li>
          <code>[List&lt;int&gt;] dimBlacklist</code>
          : Array of dimension IDs the ore is NOT allowed in
        </li>
        <li>
          <code>[List&lt;BlockState&gt;] blocksValidForReplacement</code>
          : (
          <b>Optional</b>
          ) Blocks this deposit can replace while generating
        </li>
      </ul>

      <p>
        So, for example - to generate Spruce Logs from Y-levels 0-70, with a chance and size of 20,
        blacklisted from the nether and the end, and with a sample block of Oak wood, you would do
        the following:
      </p>

      <pre>
        <code>
          mods.geolosys.ores.addOre(
          {/* eslint-disable-next-line max-len */}
          &lt;blockstate:minecraft:log:variant=spruce&gt;, &lt;blockstate:minecraft:log:variant=oak&gt;, 0, 70, 20, 20, 1.0 as float, [-1, 1]
          );
        </code>
      </pre>

      <p>
        Optionally, if you want to specify what blocks this deposit can replace, you can do so by
        specifying it as a list as the last argument:
      </p>

      <pre>
        <code>
          mods.geolosys.ores.addOre(
          {/* eslint-disable-next-line max-len */}
          &lt;blockstate:minecraft:log:variant=spruce&gt;, &lt;blockstate:minecraft:log:variant=oak&gt;, 0, 70, 20, 20, 1.0 as float, [-1, 1], [&lt;blockstate:minecraft:stone&gt;]
          );
        </code>
      </pre>
    </div>

    <hr />

    <div className="fluid container">
      <h3>Biome-Restricted Deposit</h3>

      <p>
        A biome restricted deposit is new to Geolosys v3.0.0.This kind of deposit can only
        generate in prescribed biomes. The CraftTweaker API, as of writing, does not yet
        have much by means of biome functionality, but fortunatly it does have an in-game
        command to help your search:
        {' '}
        <code>/ct biomes</code>
        {' '}
        This command will output a list of biome ResourceLocations (that&apos;s the
        &lt;modid&gt;:&lt;internalBiomeName&gt; part of the output) which can be used in
        blacklisting or whitelisting a deposit from that biome. The order of the arguments are:
      </p>

      <ul>
        <li><code>[BlockState] oreBlock</code></li>
        <li><code>[BlockState] sampleBlock</code></li>
        <li><code>[int] yMin</code></li>
        <li><code>[int] yMax</code></li>
        <li><code>[int] size</code></li>
        <li>
          <code>[int] chance</code>
          : Higher chance means it&apos; s more likely to generate.The chance is relative
          to the sum of all chances of all deposits.For example, having only a total of
          chance=20 (for all ores), then a chance of 4 here would result in a 4 out of 20 chance.
        </li>
        <li>
          <code>[float] density</code>
          : Ranges from 0.0 to 1.0, where a density of 1.0 represents a pluton whose spheroid
          generation is completely solid with the block(s) defined in blocks.A density of 0.5
          would represent a pluton of the same shape and size as 1.0, but consisting of half as
          many ore blocks, which would still remain the original blocks.
        </li>
        <li>
          <code>[List&lt;int&gt;] dimBlacklist</code>
          : Array of dimension IDs the ore is NOT allowed in
        </li>
        <li>
          <code>[List&lt;String&gt;] biomes</code>
          : The array of biomes to be selected
        </li>
        <li>
          <code>[bool] isWhitelist</code>
          : Determines if the biomes listed in
          {' '}
          <code>biomes</code>
          {' '}
          are blacklisted or whitelisted
        </li>
        <li>
          <code>[List&lt;BlockState&gt;] blocksValidForReplacement</code>
          : (
          <b>Optional</b>
          ) Blocks this deposit can replace while generating
        </li>
      </ul>

      <p>
        So, expanding on the above example, if we want to restrict that to only Plains
        and Deserts we can use the following:
      </p>

      <pre>
        <code>
          mods.geolosys.ores.addOre(
          {/* eslint-disable-next-line max-len */}
          &lt;blockstate:minecraft:log:variant=spruce&gt;, &lt;blockstate:minecraft:log:variant=oak&gt;, 0, 70, 20, 20, 1.0 as float, [-1, 1], [&quot;minecraft:plains&quot;, &quot;minecraft:desert&quot;], true
          );
        </code>
      </pre>

      <p>
        Again, this can include a specific list of blocks that this deposit can replace.
        Here is an example; as always, it&apos;s just tacked onto the end:
      </p>

      <pre>
        <code>
          mods.geolosys.ores.addOre(
          {/* eslint-disable-next-line max-len */}
          &lt;blockstate:minecraft:log:variant=spruce&gt;, &lt;blockstate:minecraft:log:variant=oak&gt;, 0, 70, 20, 20, 1.0 as float, [-1, 1], [&quot;minecraft:plains&quot;, &quot;minecraft:desert&quot;], true, [&lt;blockstate:minecraft:stone&gt;]
          );
        </code>
      </pre>
    </div>

    <hr />

    <div className="fluid container">
      <h3>Multi-Ore Deposit</h3>

      <p>
        A multi-ore deposit is one which consists of multiple different types of ores.
        The frequency of each ore within the deposit must be defined, so be sure that
        you follow these closely! The argument order is as follows:
      </p>

      <ul>
        <li><code>[List&lt;BlockState&gt;] oreBlocks</code></li>
        <li><code>[List&lt;int&gt;] oreBlocksChances</code></li>
        <li><code>[List&lt;BlockState&gt;] sampleBlocks</code></li>
        <li><code>[List&lt;int&gt;] sampleBlocksChances</code></li>
        <li><code>[int] yMin</code></li>
        <li><code>[int] yMax</code></li>
        <li><code>[int] size</code></li>
        <li>
          <code>[int] chance</code>
          : Higher chance means it&apos; s more likely to generate.The chance is relative
          to the sum of all chances of all deposits.For example, having only a total of
          chance=20 (for all ores), then a chance of 4 here would result in a 4 out of 20 chance.
        </li>
        <li>
          <code>[float] density</code>
          : Ranges from 0.0 to 1.0, where a density of 1.0 represents a pluton whose spheroid
          generation is completely solid with the block(s) defined in blocks.A density of 0.5
          would represent a pluton of the same shape and size as 1.0, but consisting of half as
          many ore blocks, which would still remain the original blocks.
        </li>
        <li>
          <code>[List&lt;int&gt;] dimBlacklist</code>
          : Array of dimension IDs the ore is NOT allowed in
        </li>
        <li>
          <code>[List&lt;BlockState&gt;] blocksValidForReplacement</code>
          : (
          <b>Optional</b>
          ) Blocks this deposit can replace while generating
        </li>
      </ul>

      <p>
        For example:
      </p>

      <pre>
        <code>
          mods.geolosys.ores.addOre(
          [&lt;blockstate:minecraft:log:variant=spruce&gt;,
          &lt;blockstate:minecraft:log:variant=birch&gt;],
          [50, 50],
          [&lt;blockstate:minecraft:log:variant=oak&gt;,
          &lt;blockstate:minecraft:log2:variant=acacia&gt;],
          [20, 80],
          0, 70, 20, 20, 1.0 as float, [-1, 1]
          );
        </code>
      </pre>

      <p>
        Of course, you can once again add a custom set of blocks the deposit can replace if
        you&apos;d like to override the ones in the config:
      </p>

      <pre>
        <code>
          mods.geolosys.ores.addOre(
          [&lt;blockstate:minecraft:log:variant=spruce&gt;,
          &lt;blockstate:minecraft:log:variant=birch&gt;],
          [50, 50],
          [&lt;blockstate:minecraft:log:variant=oak&gt;,
          &lt;blockstate:minecraft:log2:variant=acacia&gt;],
          [20, 80],
          0, 70, 20, 20, 1.0 as float, [-1, 1],
          [&lt;blockstate:minecraft:stone&gt;]
          );
        </code>
      </pre>
    </div>

    <hr />

    <div className="fluid container">
      <h3>Biome-Restricted Multi-Ore Deposit</h3>

      <p>
        Last in the ore deposits is a biome-restricted, multi-ore deposit. This one should
        speak for itself, but if it doesn&apos;t it is a deposit which whose generation biome
        can be black/whitelisted and can consist of multiple blocks. As you might imagine,
        the arguments look like an an amalgamation of the two:
      </p>

      <ul>
        <li><code>[List&lt;BlockState&gt;] oreBlocks</code></li>
        <li><code>[List&lt;int&gt;] oreBlocksChances</code></li>
        <li><code>[List&lt;BlockState&gt;] sampleBlocks</code></li>
        <li><code>[List&lt;int&gt;] sampleBlocksChances</code></li>
        <li><code>[int] yMin</code></li>
        <li><code>[int] yMax</code></li>
        <li><code>[int] size</code></li>
        <li>
          <code>[int] chance</code>
          : Higher chance means it&apos; s more likely to generate.The chance is relative
          to the sum of all chances of all deposits.For example, having only a total of
          chance=20 (for all ores), then a chance of 4 here would result in a 4 out of 20 chance.
        </li>
        <li>
          <code>[float] density</code>
          : Ranges from 0.0 to 1.0, where a density of 1.0 represents a pluton whose spheroid
          generation is completely solid with the block(s) defined in blocks.A density of 0.5
          would represent a pluton of the same shape and size as 1.0, but consisting of half as
          many ore blocks, which would still remain the original blocks.
        </li>
        <li>
          <code>[List&lt;int&gt;] dimBlacklist</code>
          : Array of dimension IDs the ore is NOT allowed in
        </li>
        <li>
          <code>[List&lt;String&gt;] biomes</code>
          : The array of biomes to be selected
        </li>
        <li>
          <code>[bool] isWhitelist</code>
          : Determines if the biomes listed in
          {' '}
          <code>biomes</code>
          {' '}
          are blacklisted or whitelisted
        </li>
        <li>
          <code>[List&lt;BlockState&gt;] blocksValidForReplacement</code>
          : (
          <b>Optional</b>
          ) Blocks this deposit can replace while generating
        </li>
      </ul>

      <p>
        So for example, to get our previous multi-ore deposit to spawn in only the biomes
        specified, you can do the following:
      </p>

      <pre>
        <code>
          mods.geolosys.ores.addOre(
          [&lt;blockstate:minecraft:log:variant=spruce&gt;, &lt;blockstate:minecraft:log:variant=birch&gt;],
          [50, 50],
          [&lt;blockstate:minecraft:log:variant=oak&gt;, &lt;blockstate:minecraft:log2:variant=acacia&gt;],
          [20, 80],
          0, 70, 20, 20, 1.0 as float, [-1, 1],
          [&quot;minecraft:plains&quot;, &quot;minecraft:desert&quot;],
          true
          );
        </code>
      </pre>

      <p>
        And lastly an example of how this would look with a specified list of replacement materials:
      </p>

      <pre>
        <code>
          mods.geolosys.ores.addOre(
          [&lt;blockstate:minecraft:log:variant=spruce&gt;, &lt;blockstate:minecraft:log:variant=birch&gt;],
          [50, 50],
          [&lt;blockstate:minecraft:log:variant=oak&gt;, &lt;blockstate:minecraft:log2:variant=acacia&gt;],
          [20, 80],
          0, 70, 20, 20, 1.0 as float, [-1, 1],
          [&quot;minecraft:plains&quot;, &quot;minecraft:desert&quot;],
          true,
          [&lt;blockstate:minecraft:stone&gt;]
          );
        </code>
      </pre>
    </div>

  </div>
);
