export default `{                                     /* Notes / Comments    ↓                                    */
  "type": "geolosys:ore_deposit",     /* This is always the same for ore plutons                  */
  "config": {
    "block": "minecraft:ice",         /* The ore block to generate                                */
    "sample": "minecraft:ice",        /* The surface sample to generate with the pluton           */
    "type": "sparse",                 /* Can be SPARSE, DENSE, DIKE, LAYER or TOP_LAYER           */
    "yMin": 1,                        /* The Minimum Y-level the deposit can gen                  */
    "yMax": 255,                      /* The Maximum Y-level the deposit can gen                  */
    "chance": 1,                      /* Out of all chances, cumulatively that the deposits gens  */
    "size": 24,                       /* The size of pluton - # blocks dependent on type of dep   */
    "dimensions": {                   /* Control over which dimensions the pluton can gen         */
      "isBlacklist": true,            /* Is the filter a blacklist or whitelist?                  */
      "filter": [                     /* The dimensions you wish to filter                        */
        "the_nether", 
        "the_end"
      ]
    },
    "biomes" :[                       /* OPTIONAL: which biomes this can/can't gen in             */
      "minecraft:plains"
    ],
    "isWhitelist": true,              /* OPTIONAL (Req'd if biomes key is present)                */
    "density": 0.75                   /* Float w/ Range 0.0 - 1.0. Density of ores in pluton      */
  }
}`;
