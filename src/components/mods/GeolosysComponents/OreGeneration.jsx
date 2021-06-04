import React from 'react';

export default () => (
  <div className="pb-5">
    <div className="fluid container">
      <h2>Ore Generation - What&apos;s Changed?</h2>

      <p>
        The default configuration for Ore Generation has changed with Geolosys v3.0.0.
        Many deposit configs remain unchanged, but a few have changed:

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

        All of these changes are reflected in the Field Manual in versions for 1.15.2 and below.
      </p>
    </div>

    <div className="fluid container">
      <h3>Pluton Density</h3>

      <p>
        New to Version 3.0.0c and above, plutons can now have a density.
        This density describes how much of the pluton is/are the defined ore block/blocks.
        For example, a density of 1.0 means the pluton will generate exactly how it used to.
        A density of 0.75 means that the pluton will take on the same shape,
        but only 75% of the blocks within that shape will actually be the ore block(s) --
        the rest will remain whatever block they were initially. This change is reflected in
        the docs for CraftTweaker and the JSON config where applicable, and is also a part of
        the datapack API built into Minecraft.
      </p>
    </div>
  </div>
);
