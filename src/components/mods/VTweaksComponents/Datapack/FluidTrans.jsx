import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default () => (
  <div>
    <div className="container">
      <h1>Fluid Transformation Recipes</h1>

      <p>
        This recipe type allows you to convert one item to another by throwing it into water. JEI
        support is automatically implemented, so if present you&apos;ll see your custom recipes
        show up in JEI right away after running
        {' '}
        <code>/reload</code>
        .
      </p>

      <SyntaxHighlighter language="json5" style={nord}>
        {`
{
  /* Required for this recipe to work at all. This won't need to be changed ever.                */
  "type": "vtweaks:fluid_conversion",
  /* The input item. NBT and Count are ignored here.                                             */
  "input": { "item": "minecraft:cyan_concrete_powder" },
  /* The resulting item. NBT and Count are NOT ignored here.                                     */
  "output": { "item": "minecraft:cyan_concrete" },
  /* The fluid that the input must be thrown into. If the output is lava resistant like          */
  /*     netherite gear, setting this to minecraft:lava actually does work!!!                    */
  "fluid": "minecraft:water"
}
        
`}
      </SyntaxHighlighter>
    </div>

  </div>
);
