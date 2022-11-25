import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default () => (
  <div>
    <div className="container">
      <h1>Challenger Mob Data Packs</h1>

      <p>
        Challenger Mobs can be removed / modified / overridden just like any other Vanilla
        Datapack entry. As such, it&apos;s really easy to go through and create your own. Here
        is the structure of a generic Challenger Mob&apos; JSON Datapack entry:
      </p>

      <SyntaxHighlighter language="json5" style={nord}>
        {`
{
  /* The weight, relative to all other challengers for this entity type                          */
  /* See my explanation of how cumulative weights work down in the loot property in this JSON :) */
  "weight": 30, 
  /* The equipment the entity will be wearing. None of mainHand, offHand, helmet, chestplate,    */
  /*     leggings or boots are required                                                          */
  /* If you want no gear at all, just set "gear" to an empty object like so: "gear": {}          */
  "gear": {
    "mainHand": {
      "item": "diamond_sword",
      "nbt": {
        "Enchantments": [{ "id": "sharpness", "lvl": 2 }]
      }
    },
    "offHand": {
      "item": "minecraft:shield",
      "nbt": { "Enchantments": [{ "id": "unbreaking", "lvl": 3 }] },
      "count": 1,
    },
    "helmet": {
      "item": "minecraft:iron_helmet",
      "nbt": { "Enchantments": [{ "id": "unbreaking", "lvl": 2 }] }
    },
    "chestplate": {
      "item": "minecraft:iron_chestplate",
      "nbt": { "Enchantments": [{ "id": "unbreaking", "lvl": 2 }] }
    },
    "leggings": {
      "item": "minecraft:iron_leggings",
      "nbt": { "Enchantments": [{ "id": "unbreaking", "lvl": 2 }] }
    },
    "boots": {
      "item": "minecraft:iron_boots",
      "nbt": { "Enchantments": [{ "id": "unbreaking", "lvl": 2 }] }
    }
  },
  /* These are the particle colors, in RGB format                                                */
  "color": { 
    "red": 130,
    "green": 189,
    "blue": 191
  },
  /* This is the name you'll need to plug into your own lang file. The key for the lang entry is */
  /* vtweaks.{unlocalizedName}.challenger.mob, and the value is "<ADJECTIVE> %s" where %s        */
  /* is the original mob name (Zombie, Skeleton, etc.) in this case it's this in en_us.json:     */
  /*     "vtweaks.mighty.challenger.mob": "Mighty %s"                                            */
  "unlocalizedName": "mighty",
  /* The amount to multiply the base health by                                                   */
  "healthMultiplier": 1.0,
  /* The amount to multiply the base speed by                                                    */
  "speedMultiplier": 1.0,
  /* Choose which mobs this challenger modifier should go on. In this case, I *only* want the 5  */
  /*     listed down below.                                                                      */
  "entityFilter": {
    "isBlacklist": false,
    "entities": [
      "minecraft:zombie",
      "minecraft:husk",
      "minecraft:drowned",
      "minecraft:skeleton",
      "minecraft:wither_skeleton"
    ]
  },
  /* When a mob with this challenger modifier attacks, it'll inflict these potion effects. You   */
  /*     find all effects by using the command '/effect give @p' and hitting TAB to autolist     */
  /* Duration is in ticks. Amplifier starts at 0 and increases (i.e. slowness 0 <=> Slowness 1)  */
  "effectsOnAttack": [
    {
      "name": "minecraft:mining_fatigue",
      "duration": 600,
      "amplifier": 1
    }
  ],
  /* A list of things this mob may drop. It'll only drop *1* of of these entries in the pool on  */
  /*     death. The "weight" of a drop is cumulative. Since the weights here are 10 and 12, then */
  /*     the chance of stone sword dropping is 10 ÷ (10 + 12), and gold nugget is 12 ÷ (10 + 12) */
  "loot": [
    {
      "weight": 10,
      "item": { "item": "minecraft:stone_sword"},
      "nbt": { "Enchantments": [{ "id": "unbreaking", "lvl": 3 }] }
    },
    {
      "weight": 12,
      "item": { "item": "minecraft:gold_nugget", "count": 15 }
    }
  ]
}`}
      </SyntaxHighlighter>
    </div>

  </div>
);
