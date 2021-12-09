/* eslint-disable camelcase */
const deposit_dense = `
{                                                      /* Notes / Comments    ↓                                    */
  "type": "geolosys:deposit_dense",                    /* This tells Geolosys how to generate this pluton          */
  "config": {
    "yMin": 5,                                         /* The Minimum Y-level the deposit can gen                  */
    "yMax": 30,                                        /* The Maximum Y-level the deposit can gen                  */
    "size": 40,                                        /* The Maximum dx/dy/dz from the center of the pluton       */
    "dimensions": {                                    /* A method to filter which dimension to gen in             */
      "isBlacklist": false,                            /* Is the filter a blacklist or whitelist?                  */
      "filter": [ "overworld" ]                        /* The dimensions you wish to filter                        */
    },
    "biomes": {                                        /* OPTIONAL: A method to filter which biomes to gen in      */
      "isBlacklist": true,                             /* Is the filter a blacklist or whitelist?                  */
      "filter": [ "minecraft:the_void" ]               /* The biomes you wish to filter                            */
    }
    "blockStateMatchers": [ "minecraft:stone" ]        /* The blocks you want this deposit to be able to replace   */
    "blocks": {                                        /* List of blocks to use within this pluton. null = skip    */
      "default": [{                                    /* Blocks now MUST have a "default"                         */
        "block": "geolosys:gold_ore",
        "chance": 1.0
      }],
      "minecraft:deepslate": [{                        /* This says "if you replace deepslate use this ore instead */
        "block": "geolosys:deepslate_gold_ore",
        "chance": 1.0
      }]
    }
    "samples": [{                                      /* List of samples to use within this pluton. null = skip   */
      "block": "geolosys:ancient_debris_ore_sample",   /* Samples format are unchanged from Geolosys 6             */
      "chance": 1.0
    }],
    "generationWeight": 1                              /* The weight for this specific pluton to generate          */
  }
}`;

const deposit_dike = `
{                                                      /* Notes / Comments    ↓                                    */
  "type": "geolosys:deposit_dike",                     /* This tells Geolosys how to generate this pluton          */
  "config": {
    "yMin": 8,                                         /* The Minimum Y-level the deposit can gen                  */
    "yMax": 22,                                        /* The Maximum Y-level the deposit can gen                  */
    "baseRadius": 3,                                   /* The Base radius of the deposit when the dike is formed   */
    "dimensions": {                                    /* A method to filter which dimension to gen in             */
      "isBlacklist": false,                            /* Is the filter a blacklist or whitelist?                  */
      "filter": [ "the_nether" ]                       /* The dimensions you wish to filter                        */
    },
    "biomes": {                                        /* OPTIONAL: A method to filter which biomes to gen in      */
      "isBlacklist": false,                            /* Is the filter a blacklist or whitelist?                  */
      "filter": [ "minecraft:nether_wastes" ]          /* The biomes you wish to filter                            */
    }
    "blockStateMatchers": [ "minecraft:netherrack" ]   /* The blocks you want this deposit to be able to replace   */
    "blocks": {                                        /* List of blocks to use within this pluton. null = skip    */
      "default": [{                                    /* Blocks now MUST have a "default"                         */
        "block": "geolosys:gold_ore",
        "chance": 0.9
      }, {
        "block": null,
        "chance": 0.1
      }],
      "minecraft:netherrack": [{                       /* This says "if you replace lava use this ore instead */
        "block": "geolosys:nether_gold_ore",
        "chance": 1.0
      }]
    },
    "samples": [{                                      /* List of samples to use within this pluton. null = skip   */
      "block": "geolosys:gold_ore_sample",             /* Samples format are unchanged from Geolosys 6             */
      "chance": 1.0
    }],
    "generationWeight": 1                              /* The weight for this specific pluton to generate          */
  }
}`;

const deposit_sparse = `
{                                                      /* Notes / Comments    ↓                                    */
  "type": "geolosys:deposit_sparse",                   /* This tells Geolosys how to generate this pluton          */
  "config": {
    "yMin": 16,                                        /* The Minimum Y-level the deposit can gen                  */
    "yMax": 50,                                        /* The Maximum Y-level the deposit can gen                  */
    "size": 32,                                        /* Tweaks size similar to a Dense deposit                   */
    "spread": 32,                                       /* Gens a dense deposit then adds rnad(spread) to each block*/
    "dimensions": {                                    /* A method to filter which dimension to gen in             */
      "isBlacklist": false,                            /* Is the filter a blacklist or whitelist?                  */
      "filter": [ "overworld" ]                        /* The dimensions you wish to filter                        */
    },
    "biomes": {                                        /* OPTIONAL: A method to filter which biomes to gen in      */
      "isBlacklist": true,                             /* Is the filter a blacklist or whitelist?                  */
      "filter": [ "minecraft:the_void" ]               /* The biomes you wish to filter                            */
    }
    "blockStateMatchers": [ "minecraft:stone" ]        /* The blocks you want this deposit to be able to replace   */
    "blocks": {                                        /* List of blocks to use within this pluton. null = skip    */
      "default": [{                                    /* Blocks now MUST have a "default"                         */
        "block": "geolosys:galena_ore",
        "chance": 1.0
      }],
      "minecraft:deepslate": [{                        /* This says "if you replace deepslate use this ore instead */
        "block": "geolosys:deepslate_galena_ore",
        "chance": 1.0
      }]
    },
    "samples": [{                                      /* List of samples to use within this pluton. null = skip   */
      "block": "geolosys:galena_ore_sample",           /* Samples format are unchanged from Geolosys 6             */
      "chance": 1.0
    }],
    "generationWeight": 1                              /* The weight for this specific pluton to generate          */
  }
}`;

const deposit_layer = `
{                                                      /* Notes / Comments    ↓                                    */
  "type": "geolosys:deposit_layer",                    /* This tells Geolosys how to generate this pluton          */
  "config": {
    "yMin": 40,                                        /* The Minimum Y-level the deposit can gen                  */
    "yMax": 70,                                        /* The Maximum Y-level the deposit can gen                  */
    "radius": 3,                                       /* The radius of the layer (noise is added)                 */
    "depth": 4,                                        /* The height of the layer deposit                          */
    "dimensions": {                                    /* A method to filter which dimension to gen in             */
      "isBlacklist": false,                            /* Is the filter a blacklist or whitelist?                  */
      "filter": [ "overworld" ]                        /* The dimensions you wish to filter                        */
    },
    "biomes": {                                        /* OPTIONAL: A method to filter which biomes to gen in      */
      "isBlacklist": true,                             /* Is the filter a blacklist or whitelist?                  */
      "filter": [ "minecraft:the_void" ]               /* The biomes you wish to filter                            */
    }
    "blockStateMatchers": [ "minecraft:stone" ]        /* The blocks you want this deposit to be able to replace   */
    "blocks": {                                        /* List of blocks to use within this pluton. null = skip    */
      "default": [{                                    /* Blocks now MUST have a "default"                         */
        "block": "geolosys:lignite_coal_ore",
        "chance": 1.0
      }],
      "minecraft:deepslate": [{                        /* This says "if you replace deepslate use this ore instead */
        "block": "geolosys:deepslate_lignite_coal_ore",
        "chance": 1.0
      }]
    },
    "samples": [{                                      /* List of samples to use within this pluton. null = skip   */
      "block": "geolosys:lignite_coal_ore_sample",     /* Samples format are unchanged from Geolosys 6             */
      "chance": 1.0
    }],
    "generationWeight": 1                              /* The weight for this specific pluton to generate          */
  }
}`;

const deposit_top_layer = `
{                                                      /* Notes / Comments    ↓                                    */
  "type": "geolosys:top_deposit_layer",                /* This tells Geolosys how to generate this pluton          */
  "config": {                                          /* YMIN/MAX IS NOT PERMITTED BC. USE LAYER IF YOU NEED IT   */
    "radius": 4,                                       /* The radius of the layer (noise is added)                 */
    "depth": 4,                                        /* The height of the layer deposit                          */
    "chanceForSample": 0.25,                           /* The chance for a sample block to be generated            */
    "dimensions": {                                    /* A method to filter which dimension to gen in             */
      "isBlacklist": false,                            /* Is the filter a blacklist or whitelist?                  */
      "filter": [ "overworld" ]                        /* The dimensions you wish to filter                        */
    },
    "biomes": {                                        /* OPTIONAL: A method to filter which biomes to gen in      */
      "isBlacklist": true,                             /* Is the filter a blacklist or whitelist?                  */
      "filter": [ "minecraft:the_void" ]               /* The biomes you wish to filter                            */
    }
    "blockStateMatchers": [ "minecraft:dirt" ]         /* The blocks you want this deposit to be able to replace   */
    "blocks": {                                        /* List of blocks to use within this pluton. null = skip    */
      "default": [{                                    /* Blocks now MUST have a "default"                         */
        "block": "geolosys:peat",
        "chance": 1.0
      }],
      "minecraft:dirt": [{                             /* This says "if you replace dirt use this ore instead      */
        "block": "geolosys:peat",
        "chance": 1.0
      }]
    },
    "samples": [{                                      /* List of samples to use within this pluton. null = skip   */
      "block": "geolosys:rhododendron",                /* Samples format are unchanged from Geolosys 6             */
      "chance": 1.0
    }],
    "generationWeight": 1                              /* The weight for this specific pluton to generate          */
  }
}
`;

export default {
  deposit_dense,
  deposit_dike,
  deposit_sparse,
  deposit_layer,
  deposit_top_layer,
};
