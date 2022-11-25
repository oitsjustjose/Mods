import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default () => (
  <div>
    <div className="container">
      <h1>Anvil Recipes</h1>

      <p>
        The Anvil Recipe recipe type has been created especially for the purpose of advanced item
        combinations and upgrades.
      </p>
      <p><b>You cannot set the cost of the anvil recipe to 0 XP due to a bug in Forge.</b></p>

      <SyntaxHighlighter language="json5" style={nord}>
        {`
{
  /* This is required for the recipe to register correctly.                                      */
  "type": "vtweaks:anvil",
  /* The item on the left of the recipe. NBT matching is WEAK, meaning ONLY unbreaking 3 is      */
  /*     required in this recipe. If the enchanted book has more enchantments, it will still     */
  /*     work in this recipe but will not affect the output unless cpFromLeft is enabled         */
  "left": {
    "item": "minecraft:enchanted_book",
    "nbt": {
      "StoredEnchantments": [{ "id": "minecraft:unbreaking", "lvl": 3 }]
    }
  },
  /* The item on the right of the recipe. NBT matching is WEAK, meaning ONLY unbreaking 3 is     */
  /*     required in this recipe. If the enchanted book has more enchantments, it will still     */
  /*     work in this recipe but will not affect the output unless cpFromRight is enabled        */
  "right": {
    "item": "minecraft:enchanted_book",
    "nbt": {
      "StoredEnchantments": [{ "id": "minecraft:unbreaking", "lvl": 3 }]
    }
  },
  
  /* OPTIONAL (Defaults to FALSE): Copy all NBT from the left item EXCEPT for those defined in   */
  /*     the result. If both cpFromLeft and cpFromRight are set to TRUE, any overlap in NBT will */
  /*     be **overwritten** by the right input.                                                  */
  "cpFromLeft": false,
  "cpFromRight": false,

  /* The resulting item from this craft - see cpFromLeft and cpFromRight's description for       */
  /*    possible complexities regarding copying NBT from the inputs                              */
  "result": {
    "item": "minecraft:enchanted_book",
    "nbt": {
      "StoredEnchantments": [{ "id": "minecraft:unbreaking", "lvl": 4 }]
    }
  },
  /* The XP cost (in LEVELS) for this recipe                                                     */
  "cost": 24
}
`}
      </SyntaxHighlighter>
    </div>

  </div>
);
