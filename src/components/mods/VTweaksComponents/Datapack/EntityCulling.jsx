import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default () => (
  <div>
    <div className="container">
      <h1>Entity Culling Data Packs</h1>

      <p>
        Entity Culling can be pretty easily done using Datapacks. Below is an actually valid and
        used datapack that removes all non-oxygen-breathing entities from Space from the Beyond
        Earth mod:
      </p>

      <SyntaxHighlighter language="json5" style={nord}>
        {`
{
  /* A list of Entities (modid:entity) or Entity Tags (#modid:entity_type) to cull               */
  "entities": ["#beyond_earth:entities/oxygen"],
  /* A list of Dimensions (modid:dimension) or Dimension types (modid:dimension_type) to prevent */
  /*      the listed entities from spawning. Can be empty or entirely omitted of biomes is       */
  /*      provided                                                                               */
  "dimensions": [
    "beyond_earth:earth_orbit",
    "beyond_earth:glacio",
    "beyond_earth:glacio_orbit",
    "beyond_earth:mars",
    "beyond_earth:mars_orbit",
    "beyond_earth:mercury",
    "beyond_earth:mercury_orbit",
    "beyond_earth:moon",
    "beyond_earth:moon_orbit",
    "beyond_earth:venus",
    "beyond_earth:venus_orbit"
  ],
  /* A list of Biomes (modid:biome) or Biome types (modid:biome_type) to prevent the listed      */
  /*     entities from spawning. Can be empty or entirely omitted if dimensions is provided      */
  "biomes": []
}`}
      </SyntaxHighlighter>
    </div>

  </div>
);
