export default `{                                     /* Notes / Comments    ↓                                    */
  "type": "geolosys:stone_deposit",   /* This is always the same for all stone plutons            */
  "config": {
    "block": "minecraft:ice",         /* The stone block to generate                              */
    "size": 24,                       /* The size of pluton, in this case max-radius              */
    "chance": 1,                      /* Out of all chances, cumulatively that the deposits gens  */
    "yMin": 1,                        /* The Minimum Y-level the deposit can gen                  */
    "yMax": 255,                      /* The Maximum Y-level the deposit can gen                  */
    "dimensions": {                   /* Control over which dimensions the pluton can gen         */
      "isBlacklist": true,            /* Is the filter a blacklist or whitelist?                  */
      "filter": [                     /* The dimensions you wish to filter                        */
        "the_nether", 
        "the_end"
      ]
    }
  }
}`;
