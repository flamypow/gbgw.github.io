const ActiveWordTagMin = 5;
const MultiplierBuffFull = 0.1;
const MultiplierBuffHalf = 0.05;
const MultiplierBuffFor = 0.01;
const MultiplierBuffMap = 0.03;
const GeneralWordTags = ["Protag.", "Mass P.", "Ace Excl.", "Amphib.", "Commander", "Close Combat", "Mid-Range", "Long-Range", "High Mobility", "High Firepower", "Heavy Armor", "Transformer", "Gundam Type", "Mobile Fighter", "Support Type", "Federation", "Zeon", "Zaku Type", "GM Type", "For Space", "For Desert", "For Tundra", "For Forest", "For Urban Area", "For Base", "For Computers"];
const MapWordTags = ["For Space", "For Desert", "For Tundra", "For Forest", "For Urban Area", "For Base", "For Computers"];
const WordTagData = [{
  "name": "Protag.",
  "parameters": ["ma"],
  "multiplier": MultiplierBuffFull
}, {
  "name": "Mass P.",
  "parameters": ["a"],
  "multiplier": MultiplierBuffFull
}, {
  "name": "Ace Excl.",
  "parameters": ["sa"],
  "multiplier": MultiplierBuffFull
}, {
  "name": "Amphib.",
  "parameters": ["br"],
  "multiplier": MultiplierBuffFull
}, {
  "name": "Commander",
  "parameters": ["sa", "br"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "Close Combat",
  "parameters": ["a", "ma"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "Mid-Range",
  "parameters": ["sa", "pr"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "Long-Range",
  "parameters": ["sa", "sd"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "High Mobility",
  "parameters": ["sd", "br"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "High Firepower",
  "parameters": ["ma", "sa"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "Heavy Armor",
  "parameters": ["md", "sd"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "Transformer",
  "parameters": ["sd"],
  "multiplier": MultiplierBuffFull
}, {
  "name": "Gundam Type",
  "parameters": ["a", "pr"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "Mobile Fighter",
  "parameters": ["ma", "md"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "Support Type",
  "parameters": ["pr"],
  "multiplier": MultiplierBuffFull
}, {
  "name": "Federation",
  "parameters": ["ma", "sd"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "Zeon",
  "parameters": ["md"],
  "multiplier": MultiplierBuffFull
}, {
  "name": "Zaku Type",
  "parameters": ["ma", "pr"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "GM Type",
  "parameters": ["sa", "md"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "For Space",
  "parameters": ["a", "ma", "sa", "md", "sd", "br", "pr"],
  "multiplier": MultiplierBuffFor
}, {
  "name": "For Desert",
  "parameters": ["a", "ma", "sa", "md", "sd", "br", "pr"],
  "multiplier": MultiplierBuffFor
}, {
  "name": "For Tundra",
  "parameters": ["a", "ma", "sa", "md", "sd", "br", "pr"],
  "multiplier": MultiplierBuffFor
}, {
  "name": "For Forest",
  "parameters": ["a", "ma", "sa", "md", "sd", "br", "pr"],
  "multiplier": MultiplierBuffFor
}, {
  "name": "For Urban Area",
  "parameters": ["a", "ma", "sa", "md", "sd", "br", "pr"],
  "multiplier": MultiplierBuffFor
}, {
  "name": "For Base",
  "parameters": ["a", "ma", "sa", "md", "sd", "br", "pr"],
  "multiplier": MultiplierBuffFor
}, {
  "name": "For Computers",
  "parameters": ["a", "ma", "sa", "md", "sd", "br", "pr"],
  "multiplier": MultiplierBuffFor
}];
const Attributes = ["Power", "Speed", "Technique"];
const ExTraitType = ["EX Skill", "Part Traits"];
const Sorters = [{
  "name": "Armor",
  "slug": "a"
}, {
  "name": "Melee ATK",
  "slug": "ma"
}, {
  "name": "Shot ATK",
  "slug": "sa"
}, {
  "name": "Melee DEF",
  "slug": "md"
}, {
  "name": "Shot DEF",
  "slug": "sd"
}, {
  "name": "Beam RES",
  "slug": "br"
}, {
  "name": "Phys. RES",
  "slug": "pr"
}];
const MeleeType = ["Beam ", "Physical"];
const MainSlot = ["head", "torso", "arms", "legs", "backpack", "melee", "range", "shield", "pilot"];
const GearSlot = ["gear-s1ot1", "gear-s1ot2"];
const AllSlots = [...MainSlot, ...GearSlot];
const PilotType = [{
  "name": "All-Rounder"
}, {
  "name": "Defender",
  "parameters": ["a", "md", "sd"],
  "multiplier": MultiplierBuffHalf
}, {
  "name": "In-Fighter",
  "parameters": ["ma"],
  "multiplier": MultiplierBuffFull
}, {
  "name": "Out-Fighter",
  "parameters": ["ma"],
  "multiplier": MultiplierBuffFull
}, {
  "name": "Middle-Shooter",
  "parameters": ["sa"],
  "multiplier": MultiplierBuffFull
}, {
  "name": "Long-Shooter",
  "parameters": ["sa"],
  "multiplier": MultiplierBuffFull
}, {
  "name": "Supporter"
}];
const TraitDescriptions = [
  "All power boosted",
  "All power reduced",
  "Buff EX Skill effect",
  "Buff EX Skill time",
  "Chance of attacks penetrating super armor",
  "Chance to not recoil",
  "Chance to prevent vernier consumption when stepping",
  "Chance to survive a fatal blow",
  "CRIT rate boosted",
  "Debuff EX Skill effect",
  "Debuff EX Skill time",
  "DMG output boosted",
  "DMG taken reduced",
  "EX Skill CD reduced",
  "EX Skill piercing boosted",
  "EX Skill power boosted",
  "EX Skill recovery boosted",
  "Initial EX Skill charge boosted",
  "Job Gauge increase boosted",
  "Melee power boosted",
  "Melee power reduced",
  "Projectile speed boosted",
  "Ranged weapon magazine boosted",
  "Ranged weapon reload speed boosted",
  "Shooting power boosted",
  "Shooting power reduced",
  "Shot attack raised",
  "Shot guidance boosted",
  "Shot spread reduced",
  "Skill penetration reduced",
  "Sp. Shot power boosted",
  "Sp. Shot power reduced",
  "Vernier consumption reduced",
  "Vernier recovery rate boosted"
];
const MarkWeights = [0, 0.2, 0.25, 0.3, 0.35, 0.4];
const Collections = [{
  "name": "00 Qan[T] Full Saber",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1363,
    "ma": 972,
    "sa": 1363,
    "md": 555,
    "sd": 1363,
    "br": 680,
    "pr": 0,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Recovery Tool γ",
      "description": "Squad recovers 48% of maximum Armor.",
      "category": "Recovery"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1745,
    "ma": 555,
    "sa": 972,
    "md": 0,
    "sd": 2146,
    "br": 680,
    "pr": 0,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Defense Hack β",
      "description": "Reduce Melee and Shot Defense of all enemies by 24%.",
      "category": "Debuff"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 0,
    "ma": 2770,
    "sa": 555,
    "md": 555,
    "sd": 1363,
    "br": 471,
    "pr": 286,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Melee Power boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 972,
    "ma": 972,
    "sa": 555,
    "md": 972,
    "sd": 1363,
    "br": 680,
    "pr": 286,
    "wt": ["Protag.", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 972,
    "ma": 972,
    "sa": 555,
    "md": 972,
    "sd": 1363,
    "br": 680,
    "pr": 471,
    "wt": ["Protag.", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Full Saber Attack",
      "description": "Attack using quantum teleports and the Trans-Am System. Raise Melee Attack of your Squad by 29%. Raise Physical Resist of your Squad by 69%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1363,
    "ma": 3713,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 680,
    "pr": 286,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Enemy Shooting Power reduced 30%"
    },
    "name": "GN Gun Blade [Blade Mode]",
    "type": "Physical"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3582,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 611,
    "pr": 418,
    "wt": ["Protag.", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 80%, EX Skill Power boosted 30%"
    },
    "name": "GN Sword IV [Katar Mode]",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1363,
    "ma": 3713,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 680,
    "pr": 286,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Physical, Strong Melee CRIT Rate boosted 30%"
    },
    "name": "GN Sword IV [Saber Mode]",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 4004,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 420,
    "pr": 420,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Close Combat\", Initial EX Skill Charge boosted 20%"
    },
    "name": "GN Sword IV Full Saber",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 1,
    "a": 555,
    "ma": 154,
    "sa": 3331,
    "md": 0,
    "sd": 972,
    "br": 471,
    "pr": 286,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Wide Cutter Particle Beam",
      "description": "Change direction of the main blade unit to fire a blade beam.",
      "category": "Beam Shot"
    },
    "name": "GN Sword IV [Rifle Mode]",
    "type": "Beam"
  }]
}, {
  "name": "00 Raiser",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1363,
    "ma": 972,
    "sa": 1363,
    "md": 1363,
    "sd": 555,
    "br": 0,
    "pr": 680,
    "wt": ["Close Combat", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Enemy Shooting power reduced 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1745,
    "ma": 972,
    "sa": 972,
    "md": 2146,
    "sd": 0,
    "br": 0,
    "pr": 471,
    "wt": ["Close Combat", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, EX Skill power boosted 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 0,
    "ma": 2855,
    "sa": 555,
    "md": 1363,
    "sd": 555,
    "br": 286,
    "pr": 471,
    "wt": ["Close Combat", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Melee CRIT rate boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 972,
    "ma": 972,
    "sa": 555,
    "md": 1363,
    "sd": 972,
    "br": 286,
    "pr": 680,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Saber Boomerang",
      "description": "Slash with your saber, then hurl it point-first.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1363,
    "ma": 471,
    "sa": 555,
    "md": 1363,
    "sd": 972,
    "br": 471,
    "pr": 680,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Trans-Am Burst",
      "description": "Discharge a burst of condensed GN particles to engulf a wide area. Raise speed of your Squad by 20%. Squad recovers 48% of maximum Armor. Raise Melee and Shot Defense of your Squad by 19%. Raise Beam and Physical Resist of your Squad by 29%.",
      "category": "Awakening"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1363,
    "ma": 3713,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 286,
    "pr": 680,
    "wt": ["Close Combat", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Job Gauge increase boosted 17%"
    },
    "name": "GN Sword II",
    "type": "Physical"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1363,
    "ma": 3713,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 286,
    "pr": 680,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Raiser Sword",
      "description": "Use a large beam saber formed by outputting a massive amount of energy to cut enemies apart.",
      "category": "Beam Melee"
    },
    "name": "GN Sword III",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 1,
    "a": 555,
    "ma": 154,
    "sa": 3331,
    "md": 972,
    "sd": 0,
    "br": 286,
    "pr": 471,
    "wt": ["Close Combat", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"High Firepower\", Initial EX Skill charge boosted 20%"
    },
    "name": "GN Sword III Rifle Mode",
    "type": "Beam"
  }]
}, {
  "name": "Abyss Gundam",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 1999,
    "md": 559,
    "sd": 294,
    "br": 129,
    "pr": 0,
    "wt": ["Amphib.", "Transformer"],
    "ex": {
      "type": "Part Traits",
      "name": "With Lance category equipped, Mid Shot Attack raised 14%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 893,
    "ma": 294,
    "sa": 294,
    "md": 1146,
    "sd": 559,
    "br": 432,
    "pr": 0,
    "wt": ["Amphib.", "Transformer"],
    "ex": {
      "type": "EX Skill",
      "name": "Callidus Multi-Phase Beam Cannon",
      "description": "Fire away with the high-energy Callidus Multi-Phase Beam Cannon on your chest.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 559,
    "ma": 1438,
    "sa": 294,
    "md": 893,
    "sd": 559,
    "br": 0,
    "pr": 0,
    "wt": ["Amphib.", "Transformer"],
    "ex": {
      "type": "EX Skill",
      "name": "3-Barrel Beam Cannon",
      "description": "Fire at enemies using six beam cannons stowed in your shoulders.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 559,
    "md": 893,
    "sd": 294,
    "br": 432,
    "pr": 303,
    "wt": ["Amphib.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Projectile speed boosted 14%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 294,
    "md": 1146,
    "sd": 294,
    "br": 432,
    "pr": 303,
    "wt": ["Amphib.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Balaena Kai Dual Beam Cannons",
      "description": "Attack enemies ahead by firing highly compressed plasma energy from your plasma beam cannon.",
      "category": "Beam Shot"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 559,
    "ma": 1438,
    "sa": 0,
    "md": 559,
    "sd": 0,
    "br": 432,
    "pr": 129,
    "wt": ["Amphib.", "Transformer"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Transformer\", Initial EX Skill charge boosted 12%"
    },
    "name": "Beam Lance [Abyss]",
    "type": "Beam"
  }]
}, {
  "name": "Acguy",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 287,
    "ma": 138,
    "sa": 376,
    "md": 287,
    "sd": 287,
    "br": 138,
    "pr": 138,
    "wt": ["Amphib.", "Heavy Armor"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 376,
    "ma": 287,
    "sa": 287,
    "md": 641,
    "sd": 641,
    "br": 403,
    "pr": 403,
    "wt": ["Amphib.", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Protection α",
      "description": "Raise your Physical Resist by 69%",
      "category": "Buff"
    },
    "combo": "legs"
  }, {
    "part": "arms",
    "mark": 4,
    "a": 138,
    "ma": 376,
    "sa": 138,
    "md": 287,
    "sd": 287,
    "br": 194,
    "pr": 194,
    "wt": ["Amphib.", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Arm-Mounted Mega Particle Cannon",
      "description": "Launch rapid-fire beams from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 138,
    "ma": 138,
    "sa": 138,
    "md": 376,
    "sd": 376,
    "br": 194,
    "pr": 194,
    "wt": ["Amphib.", "Heavy Armor"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon magazine reload 10%"
    }
  }]
}, {
  "name": "Aegis Gundam",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 2380,
    "md": 384,
    "sd": 384,
    "br": 213,
    "pr": 417,
    "wt": ["Transformer", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Igelstellung",
      "description": "Fire the anti-air autocannons in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1977,
    "ma": 384,
    "sa": 796,
    "md": 796,
    "sd": 796,
    "br": 0,
    "pr": 611,
    "wt": ["Transformer", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Shooting DMG taken reduced 35"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1181,
    "ma": 796,
    "sa": 796,
    "md": 1181,
    "sd": 1181,
    "br": 0,
    "pr": 0,
    "wt": ["Transformer", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Assault Cyclone",
      "description": "Slice foes with the beam sabers in both arms. Squad recovers 48% of maximum Armor. Raise Shot Defense of your Squad by 29%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1181,
    "br": 417,
    "pr": 611,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Kick Combination",
      "description": "Use the saber on your leg in a series of combo attacks. Raise your Melee Attack by 19%",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1181,
    "br": 417,
    "pr": 611,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Enemy Sp. Shot Power reduced 17%"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 3177,
    "md": 0,
    "sd": 0,
    "br": 213,
    "pr": 611,
    "wt": ["Transformer", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Enemy Shooting Power reduced 30%"
    },
    "name": "60mm High-Energy Beam Rifle",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 0,
    "md": 796,
    "sd": 1602,
    "br": 213,
    "pr": 806,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Shield Throw",
      "description": "Throw your shield to attack.",
      "category": "Physical Melee"
    },
    "name": "Anti-Beam Shield [Aegis]"
  }]
}, {
  "name": "Aile Strike Gundam",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 2791,
    "md": 799,
    "sd": 384,
    "br": 213,
    "pr": 0,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Igelstellung",
      "description": "Fire the anti-air autocannons in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1184,
    "ma": 384,
    "sa": 384,
    "md": 1608,
    "sd": 799,
    "br": 614,
    "pr": 0,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Shooting CRIT rate boosted 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 799,
    "ma": 1982,
    "sa": 384,
    "md": 1184,
    "sd": 799,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Sp. Shot Power boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 799,
    "md": 1184,
    "sd": 384,
    "br": 614,
    "pr": 420,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Rapid Thrust",
      "description": "Unleash a blindingly fast flurry with sabers in each hand.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 1608,
    "sd": 384,
    "br": 614,
    "pr": 420,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Strike Punisher",
      "description": "Slash at high speed to unleash multiple shockwaves.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 799,
    "ma": 1982,
    "sa": 0,
    "md": 799,
    "sd": 0,
    "br": 614,
    "pr": 213,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Enemy Melee Power reduced 30%"
    },
    "name": "Beam Saber [Aile Strike]",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 799,
    "ma": 1982,
    "sa": 0,
    "md": 799,
    "sd": 0,
    "br": 614,
    "pr": 213,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Knight's Nail",
      "description": "Jump high to bring your blade down on the enemy's head.",
      "category": "Physical Melee"
    },
    "name": "Grand Slam",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 3590,
    "md": 799,
    "sd": 0,
    "br": 420,
    "pr": 213,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Initial EX Skill Charge boosted 20%"
    },
    "name": "57mm High-Energy Beam Rifle [Aile Strike]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 799,
    "ma": 0,
    "sa": 0,
    "md": 1982,
    "sd": 799,
    "br": 812,
    "pr": 213,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill DMG output boosted 35"
    },
    "name": "Anti-Beam Shield [Aile Strike]"
  }]
}, {
  "name": "Akatsuki [Oowashi Pack]",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 1181,
    "md": 796,
    "sd": 1181,
    "br": 417,
    "pr": 213,
    "wt": ["Gundam Type", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Close-In Weapons System",
      "description": "Fire the anti-air autocannons in your head at foes straight ahead. You can move freely while firing. Lowers hit enemy Gunpla's Melee Defense by 14%. Lower's hit enemy Gunpla's Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1977,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1602,
    "br": 213,
    "pr": 0,
    "wt": ["Gundam Type", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Yata-no-Kagami",
      "description": "Repel beams with nanoscale beam diffraction grating and hyperfine plasma criticality inhibitor layers. Raise your Beam Resist by 109%. Your Gunpla resists flinching for a set period of time.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 796,
    "ma": 1181,
    "sa": 384,
    "md": 1181,
    "sd": 1602,
    "br": 213,
    "pr": 0,
    "wt": ["Gundam Type", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "When Attacking with Beam, Sp. Shot Power boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 384,
    "sd": 1602,
    "br": 611,
    "pr": 213,
    "wt": ["Gundam Type", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Experimental Twin Beam Saber",
      "description": "Perform a combo with two detached sabers, then link them for a spinning attack.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1181,
    "br": 611,
    "pr": 213,
    "wt": ["Gundam Type", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "High-Energy Beam Cannon",
      "description": "Fire a powerful, high-energy beam at enemies.",
      "category": "Beam Shot"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1181,
    "ma": 2380,
    "sa": 0,
    "md": 0,
    "sd": 796,
    "br": 417,
    "pr": 213,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Job Gauge Increase boosted 17%"
    },
    "name": "Experimental Twin Beam Saber [Single]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 2380,
    "md": 0,
    "sd": 796,
    "br": 611,
    "pr": 213,
    "wt": ["Gundam Type", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "Initial EX Skill Charge boosted 20%"
    },
    "name": "Hyakurai",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 0,
    "md": 796,
    "sd": 1977,
    "br": 806,
    "pr": 213,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Enemy Shooting Power reduced 30%"
    },
    "name": "Type 71 Experimental Defensive Shield"
  }]
}, {
  "name": "Arche Gundam",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 1698,
    "md": 558,
    "sd": 558,
    "br": 302,
    "pr": 0,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor is < 50%, Recover 10 (flat) Armor gradually"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1140,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 0,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Enemy Skill Penetration reduced 22%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 1698,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Enemy Melee Power reduced 25%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Close Combat", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "GN Fang",
      "description": "Attack with GN Fangs and fire in all directions. You can move freely while this is active.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Close Combat", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Close Combat\", Melee Power boosted 25%"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 558,
    "ma": 2297,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 126,
    "wt": ["Close Combat", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "12% chance of attacks penetrating super armor"
    },
    "name": "GN Buster Sword [Arche]",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 2297,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 126,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Job Gauge Increase boosted 13%"
    },
    "name": "GN Buster Sword Rifle Mode [Arche]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 0,
    "md": 1140,
    "sd": 1140,
    "br": 588,
    "pr": 126,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "GN Field",
      "description": "Release GN particles to create a force field barrier. Raise your speed by 20%. Raise your Shot Defense by 49%.",
      "category": "Awakening"
    },
    "name": "GN Shield [Arche]"
  }]
}, {
  "name": "Astray Blue Frame",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 1179,
    "md": 1179,
    "sd": 1179,
    "br": 0,
    "pr": 416,
    "wt": ["Mid-Range", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Igelstellung",
      "description": "Fire the anti-air autocannons in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1601,
    "ma": 382,
    "sa": 0,
    "md": 1179,
    "sd": 1179,
    "br": 0,
    "pr": 609,
    "wt": ["Mid-Range", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Offense Hack β",
      "description": "Reduce Melee and Shot Attack of all enemies by 24%.",
      "category": "Debuff"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 795,
    "ma": 1179,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 211,
    "pr": 416,
    "wt": ["Mid-Range", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Defense Hack β",
      "description": "Reduce Melee and Shot Defense of all enemies by 24%.",
      "category": "Debuff"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 382,
    "md": 1601,
    "sd": 1601,
    "br": 416,
    "pr": 211,
    "wt": ["Mid-Range", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill Piercing boosted 28%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 382,
    "md": 1601,
    "sd": 1601,
    "br": 211,
    "pr": 416,
    "wt": ["Mid-Range", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Serpent Bite",
      "description": "Attack with dual sabers held in a backhand grip, striking enemies like a snake striking its prey.",
      "category": "Beam Melee"
    }
  }, {
    "part": "shield",
    "mark": 1,
    "a": 0,
    "ma": 0,
    "sa": 0,
    "md": 1974,
    "sd": 1974,
    "br": 211,
    "pr": 805,
    "wt": ["Mid-Range", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Enemy Shooting Power reduced 30%"
    },
    "name": "Anti-Beam Shield [Blue Frame]"
  }]
}, {
  "name": "Astray Gold Frame Amatsu",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 2377,
    "md": 795,
    "sd": 795,
    "br": 416,
    "pr": 0,
    "wt": ["High Mobility", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor is < 70%, Enemy Shooting Power reduced 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1601,
    "ma": 382,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 609,
    "pr": 0,
    "wt": ["High Mobility", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Mirage Colloid",
      "description": "Go Stealthy with colloidal particles on your armor. Raise your Melee and Shot Attack by 19%. You become harder to target for a set period of time.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 795,
    "ma": 2377,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 0,
    "pr": 0,
    "wt": ["High Mobility", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Trikeros Rush",
      "description": "A combo attack with the Trikeros Kai, a composite armament unit.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 609,
    "pr": 416,
    "wt": ["High Mobility", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 609,
    "pr": 416,
    "wt": ["High Mobility", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Maga no Ikutachi",
      "description": "Grab a foe with the unit on your back, then feed it colloidal particles. Recover 48% of your maximum Armor.",
      "category": "Physical Melee"
    }
  }]
}, {
  "name": "Astray Green Frame",
  "attribute": "Power",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 364,
    "md": 570,
    "sd": 187,
    "br": 201,
    "pr": 81,
    "wt": ["High Mobility", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Igelstellung",
      "description": "Fire the anti-air autocannons in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 754,
    "ma": 187,
    "sa": 187,
    "md": 754,
    "sd": 365,
    "br": 281,
    "pr": 0,
    "wt": ["High Mobility", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Debuff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 187,
    "ma": 1480,
    "sa": 187,
    "md": 754,
    "sd": 187,
    "br": 0,
    "pr": 0,
    "wt": ["High Mobility", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Strong Melee CRIT Rate boosted 14%"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 754,
    "sd": 364,
    "br": 201,
    "pr": 281,
    "wt": ["High Mobility", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Twin Sword Rifle",
      "description": "Unleash a combo attack with your Twin Sword Rifle.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 754,
    "sd": 364,
    "br": 281,
    "pr": 201,
    "wt": ["High Mobility", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Rush",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 3,
    "a": 187,
    "ma": 1864,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 201,
    "pr": 81,
    "wt": ["High Mobility", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Sky Jumper",
      "description": "Jump high to deal a blow with your lance from the air. Lowers hit enemy Gunpla's Beam Resist by 19%",
      "category": "Beam Melee"
    },
    "name": "Twin Sword Rifle",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 3,
    "a": 570,
    "ma": 0,
    "sa": 1089,
    "md": 0,
    "sd": 0,
    "br": 281,
    "pr": 201,
    "wt": ["High Mobility", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Sp. Shot Power boosted 18%"
    },
    "name": "Twin Sword Rifle",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 3,
    "a": 364,
    "ma": 0,
    "sa": 0,
    "md": 1089,
    "sd": 364,
    "br": 462,
    "pr": 0,
    "wt": ["High Mobility", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Strong Melee DMG taken reduced 15"
    },
    "name": "Anti-Beam Shield [Green Frame]"
  }]
}, {
  "name": "Astray Red Frame",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 796,
    "md": 1181,
    "sd": 796,
    "br": 289,
    "pr": 289,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Igelstellung",
      "description": "Fire the anti-air autocannons in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1977,
    "ma": 796,
    "sa": 384,
    "md": 796,
    "sd": 796,
    "br": 289,
    "pr": 289,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, EX Skill CD reduced 20%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 796,
    "ma": 2783,
    "sa": 0,
    "md": 1181,
    "sd": 1181,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Lightning Ball",
      "description": "Charge arms with beam energy, then attack with a rush tackle. Lowers hit enemy Gunpla's Physical Resist by 29%",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 1181,
    "sd": 796,
    "br": 476,
    "pr": 476,
    "wt": ["Protag.", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Bisect",
      "description": "Draw the Gerbera Straight to bisect foes with a mighty swing. Squad recovers 48% of maximum Armor. Raise Melee Attack of your Squad by 29%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 1181,
    "sd": 796,
    "br": 479,
    "pr": 479,
    "wt": ["Protag.", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Rush",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1181,
    "ma": 3581,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 289,
    "pr": 289,
    "wt": ["Protag.", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Gerbera Straight",
      "description": "Unleash a barrage of attacks with your blade.",
      "category": "Physical Melee"
    },
    "name": "Gerbera Straight",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 0,
    "md": 1603,
    "sd": 796,
    "br": 476,
    "pr": 476,
    "wt": ["Protag.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Enemy Shooting Power reduced 30%"
    },
    "name": "Anti-Beam Shield [Red Frame]"
  }]
}, {
  "name": "Astray Red Frame [Beginner Campaign]",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1040,
    "ma": 389,
    "sa": 651,
    "md": 1040,
    "sd": 651,
    "br": 218,
    "pr": 218,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Igelstellung",
      "description": "Fire the anti-air autocannons in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1848,
    "ma": 651,
    "sa": 389,
    "md": 651,
    "sd": 651,
    "br": 218,
    "pr": 218,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Enemy Strong Melee Power reduced 25%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 651,
    "ma": 2656,
    "sa": 0,
    "md": 1040,
    "sd": 1040,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Lightning Ball",
      "description": "Charge arms with beam energy, then attack with a rush tackle. Lowers hit enemy Gunpla's Physical Resist by 29%",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1040,
    "ma": 389,
    "sa": 389,
    "md": 1040,
    "sd": 651,
    "br": 430,
    "pr": 430,
    "wt": ["Protag.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Saber Category equipped, Enemy EX Skill Pentration reduced 22%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1040,
    "ma": 389,
    "sa": 389,
    "md": 1040,
    "sd": 651,
    "br": 430,
    "pr": 430,
    "wt": ["Protag.", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Rush",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }]
}, {
  "name": "Astray Red Frame Custom",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1182,
    "ma": 384,
    "sa": 799,
    "md": 1182,
    "sd": 384,
    "br": 290,
    "pr": 290,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Enemy Shooting power reduced 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1606,
    "ma": 384,
    "sa": 384,
    "md": 1606,
    "sd": 799,
    "br": 290,
    "pr": 290,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Strong Melee power boosted 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 384,
    "ma": 3181,
    "sa": 384,
    "md": 1606,
    "sd": 384,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor is 80% or less, Melee CRIT rate boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 1606,
    "sd": 799,
    "br": 420,
    "pr": 290,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Gerbera Straight/Tiger Pierce",
      "description": "Unleash a combo with the two swords on your waist.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1606,
    "ma": 384,
    "sa": 384,
    "md": 1606,
    "sd": 799,
    "br": 290,
    "pr": 290,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Tactical Arms II L",
      "description": "Transform your Tactical Arms into sword form and unleash a combo attack.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 4004,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 420,
    "pr": 420,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Protag.\", Initial EX Skill charge boosted 20%"
    },
    "name": "Gerbera Stright/Tiger Pierce",
    "type": "Physical"
  }]
}, {
  "name": "Banshee",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 966,
    "ma": 379,
    "sa": 3313,
    "md": 0,
    "sd": 553,
    "br": 284,
    "pr": 465,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1736,
    "ma": 789,
    "sa": 1098,
    "md": 966,
    "sd": 966,
    "br": 0,
    "pr": 674,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "NT-D",
      "description": "Enter Destroy Mode and Increase your reflexes with Psycho Frame. Raise speed by 20%. Raises your Melee Attack by 29%. Raises your Melee Defense by 19%.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1888,
    "ma": 3692,
    "sa": 2026,
    "md": 1508,
    "sd": 1508,
    "br": 0,
    "pr": 1083,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Armed Armor",
      "description": "Drag foes with your claw unit and crush them with a torrent of light from your dual beam deflector fins. Squad recovers 48% of maximum Armor. Raise Shot Attack of your Squad by 29%.",
      "category": "Beam Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 966,
    "ma": 789,
    "sa": 720,
    "md": 966,
    "sd": 966,
    "br": 674,
    "pr": 465,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 966,
    "ma": 789,
    "sa": 720,
    "md": 966,
    "sd": 966,
    "br": 465,
    "pr": 674,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Rush",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }]
}, {
  "name": "Beargguy",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 1144,
    "ma": 292,
    "sa": 891,
    "md": 558,
    "sd": 558,
    "br": 302,
    "pr": 0,
    "wt": ["Amphib.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Mega Particle Cannon",
      "description": "Fire the mega particle cannon on your head.",
      "category": "Beam Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 2593,
    "ma": 558,
    "sa": 558,
    "md": 1435,
    "sd": 1435,
    "br": 592,
    "pr": 430,
    "wt": ["Amphib.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Module Category equipped, Buff EX Skill Effect up 15%"
    },
    "combo": "legs"
  }, {
    "part": "arms",
    "mark": 2,
    "a": 891,
    "ma": 891,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 127,
    "pr": 0,
    "wt": ["Amphib.", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Arm-Mounted Mega Particle Cannon",
      "description": "Launch rapid-fire beams from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 430,
    "pr": 127,
    "wt": ["Amphib.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Recorder",
      "description": "Use the recorder taken from its satchel to bathe foes in beams.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Beargguy [ALT]",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 1144,
    "ma": 292,
    "sa": 891,
    "md": 558,
    "sd": 558,
    "br": 302,
    "pr": 0,
    "wt": ["Amphib.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Recovery Tool β",
      "description": "Ally recovers 38% of maximum Armor.",
      "category": "Recovery"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 2593,
    "ma": 558,
    "sa": 558,
    "md": 1435,
    "sd": 1435,
    "br": 592,
    "pr": 430,
    "wt": ["Amphib.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Module Category equipped, Buff EX Skill Effect up 15%"
    },
    "combo": "legs"
  }, {
    "part": "arms",
    "mark": 2,
    "a": 891,
    "ma": 891,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 127,
    "pr": 0,
    "wt": ["Amphib.", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Block Hack β",
      "description": "Ally recovers 38% of maximum Armor.",
      "category": "Debuff"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 430,
    "pr": 127,
    "wt": ["Amphib.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "6-Tube Missile with Built-in Satchel",
      "description": "Fire guided missiles from the satchel on your back.",
      "category": "Physical Shot"
    }
  }]
}, {
  "name": "Beginning 30 Gundam",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 1974,
    "md": 384,
    "sd": 1182,
    "br": 420,
    "pr": 213,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Vulcan",
      "description": "Fire the Beam Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee Defense by 14%. Lowers hit enemy Gunpla's Shot Defense by 14%.",
      "category": "Beam Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1182,
    "ma": 799,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 612,
    "pr": 0,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, EX Skill CD reduced 20%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1606,
    "ma": 2786,
    "sa": 384,
    "md": 1606,
    "sd": 3181,
    "br": 810,
    "pr": 213,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Melee Power boosted 30%"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 384,
    "sd": 1182,
    "br": 612,
    "pr": 420,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "IFS Unit Barrier",
      "description": "Create a force field barrier through the I-Field control system. Raise your Shot Defense by 19%. Raise your Beam Resist by 29%. Your Gunpla resists flinching for a set period of time.",
      "category": "Awakening"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 384,
    "sd": 1182,
    "br": 612,
    "pr": 420,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "IFS Unit Combo",
      "description": "Attack an enemy with an I-Field control system force field. Raise Shot attack of your Squad by 29%. Raise Beam Resist of your squad by 69%.",
      "category": "Beam Shot"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3586,
    "sa": 0,
    "md": 0,
    "sd": 799,
    "br": 420,
    "pr": 213,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "15% chance of attacks penetrating super armor"
    },
    "name": "Beam Saber [Beginning 30]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 799,
    "ma": 0,
    "sa": 1979,
    "md": 0,
    "sd": 799,
    "br": 612,
    "pr": 213,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Initial EX Skill Charge boosted 20%"
    },
    "name": "Beam Rifle [Beginning 30]",
    "type": "Beam"
  }]
}, {
  "name": "Beginning 30 Gundam [Beginner Campaign]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 650,
    "ma": 388,
    "sa": 1844,
    "md": 388,
    "sd": 1038,
    "br": 334,
    "pr": 217,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Shooting DMG taken reduced 35"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1038,
    "ma": 650,
    "sa": 388,
    "md": 650,
    "sd": 1456,
    "br": 516,
    "pr": 0,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "IFS Unit Barrier",
      "description": "Create a force field barrier through the I-Field control system. Raise your Shot Defense by 19%. Raise your Beam Resist by 29%. Your Gunpla resists flinching for a set period of time.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1456,
    "ma": 2651,
    "sa": 388,
    "md": 1456,
    "sd": 3038,
    "br": 732,
    "pr": 217,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "IFS Unit",
      "description": "Create a force field with the I-Field control system, swinging it like a staff to temporarily stun enemies. Lowers hit enemy Gunpla's Melee Defense by 19%.",
      "category": "Beam Melee"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 650,
    "ma": 388,
    "sa": 388,
    "md": 388,
    "sd": 1038,
    "br": 516,
    "pr": 334,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Mid Shot Attack raised 14%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 650,
    "ma": 388,
    "sa": 388,
    "md": 388,
    "sd": 1038,
    "br": 516,
    "pr": 334,
    "wt": ["Gundam Type", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Tri-Claw Slash",
      "description": "Grip three beam sabers with your fist in a spinning attack. Raise your Melee Attack by 19%.",
      "category": "Beam Melee"
    }
  }]
}, {
  "name": "Blitz Gundam",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 889,
    "md": 889,
    "sd": 889,
    "br": 302,
    "pr": 0,
    "wt": ["High Mobility", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Recovery Tool β",
      "description": "Ally recovers 38% of maximum Armor.",
      "category": "Recovery"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1140,
    "ma": 291,
    "sa": 0,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 0,
    "wt": ["High Mobility", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Mirage Colloid",
      "description": "Go stealthy with colloidal particles on your armor. Raise your Shot Attack by 19%. You become harder to target for a set period of time.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 889,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 302,
    "pr": 126,
    "wt": ["High Mobility", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Trikeros Rush",
      "description": "A combo attack with the Trikeros, a composite armament unit.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1140,
    "sd": 1140,
    "br": 126,
    "pr": 302,
    "wt": ["High Mobility", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Shooting CRIT Rate boosted 17%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1140,
    "sd": 1140,
    "br": 302,
    "pr": 126,
    "wt": ["High Mobility", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "15% chance to prevent vernier consumption when stepping"
    }
  }]
}, {
  "name": "Blue Destiny Unit-1",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 1698,
    "md": 558,
    "sd": 558,
    "br": 302,
    "pr": 0,
    "wt": ["Close Combat", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "EXAM System",
      "description": "Activate the anti-Newtype OS EXAM System. Raise your speed by 20%. Raise your Melee Attack by 39%.",
      "category": "Awakening"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1140,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 0,
    "wt": ["Close Combat", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "Abdominal Wired Missile",
      "description": "Fire wire-guided missiles.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 1698,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Close Combat", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 80%, Melee DMG taken reduced 20"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Close Combat", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    }
  }, {
    "part": "shield",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 0,
    "md": 1140,
    "sd": 1140,
    "br": 588,
    "pr": 126,
    "wt": ["Close Combat", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Buff EX Skill Time up 15%"
    },
    "name": "Shield [BD1]"
  }]
}, {
  "name": "Build Burning Gundam",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 796,
    "md": 1181,
    "sd": 384,
    "br": 417,
    "pr": 213,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Buff EX Skill Time up 22%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1602,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 611,
    "pr": 0,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Jigen Haoh Style Gokui",
      "description": "Draw out your Gunpla's latent power with Plavsky Particles to temporarily increase performance. Raise your speed by 20%. Raise your Melee Attack by 39%.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 384,
    "ma": 3177,
    "sa": 384,
    "md": 1602,
    "sd": 384,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Jigen Haoh Style Shippu-Zuki",
      "description": "Hit Enemies with Seiken-Zuki and Ryusei Rasen-Ken, and finish with a Shippu-Zuki stab. Raise your Melee Attack by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 417,
    "pr": 611,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Jigen Haoh Style Seiso-Geri",
      "description": "Use the Jigen Haoh style to make a tornado with Senpu Tatsumaki-Geri and unleash a Seiso-Geri. Raise your Melee Attack by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 611,
    "pr": 417,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Houou Haoh-Ken",
      "description": "Launch a single phoenix-shaped strike with flame-engulfed arms. Squad recovers 48% of maximum Armor. Raise Melee Attack of your Squad by 29%.",
      "category": "Physical Melee"
    }
  }]
}, {
  "name": "Build Gundam Mk-II",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 1701,
    "md": 291,
    "sd": 291,
    "br": 302,
    "pr": 126,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Barrier Stance γ",
      "description": "Raise Shot Defense of your Squad by 39%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1433,
    "ma": 291,
    "sa": 558,
    "md": 558,
    "sd": 558,
    "br": 428,
    "pr": 0,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Gundam Type\", Debuff EX Skill time up 16%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 889,
    "ma": 558,
    "sa": 558,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Offense Up α",
      "description": "Raise Melee and Shot Attack of your Squad by 39%",
      "category": "Buff"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Gundam Type", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Mid Shot Attack raised 14%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Gundam Type", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Cougar Rush",
      "description": "Execute a combo on target using a Beam Saber in both hands.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 889,
    "ma": 1701,
    "sa": 0,
    "md": 0,
    "sd": 291,
    "br": 302,
    "pr": 126,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"For Computers\", Initial EX Skill charge boosted 12%"
    },
    "name": "Beam Saber [Build Gundam Mk-II]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 2300,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 126,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Job Gauge increase boosted 13%"
    },
    "name": "Beam Rifle [Build Gundam Mk-II]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 2300,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 126,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, reload speed boosted 15%"
    },
    "name": "Hyper Bazooka [Build Gundam Mk-II]",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 2300,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 126,
    "wt": ["Gundam Type", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor is 60% or more, Sp. Shot power boosted 25%"
    },
    "name": "Beam Rifle Mk-II",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 0,
    "md": 558,
    "sd": 1142,
    "br": 590,
    "pr": 126,
    "wt": ["Gundam Type", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Shooting DMG taken reduced by 20"
    },
    "name": "Shield [Build Gundam Mk-II]"
  }]
}, {
  "name": "Build Strike Gundam [Full Package]",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 2378,
    "md": 796,
    "sd": 796,
    "br": 212,
    "pr": 212,
    "wt": ["Protag.", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1602,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 288,
    "pr": 288,
    "wt": ["Protag.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 80%, EX Skill DMG Output boosted 35"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 796,
    "ma": 2378,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Strong Melee CRIT Rate boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 475,
    "pr": 502,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Rush",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 502,
    "pr": 475,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Launch Build Booster",
      "description": "Detach your backpack to have it operate on its own, attacking enemies with a large beam cannon. Raise Melee Attack of your Squad by 24%. Raise Shot Attack of your Squad by 24%.",
      "category": "Beam Shot"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 796,
    "ma": 0,
    "sa": 3176,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Initial EX Skill Charge boosted 20%"
    },
    "name": "Beam Rifle [Build Strike]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 4004,
    "md": 0,
    "sd": 0,
    "br": 290,
    "pr": 290,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Job Gauge Increase boosted 17%"
    },
    "name": "Enhanced Beam Rifle [Build Strike]"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 796,
    "ma": 0,
    "sa": 0,
    "md": 1602,
    "sd": 1602,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Gun",
      "description": "Launch rapid-fire beam guns from your torso. You can move while firing.",
      "category": "Beam Shot"
    },
    "name": "Chobham Shield"
  }]
}, {
  "name": "Buster Gundam",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 291,
    "ma": 291,
    "sa": 2300,
    "md": 291,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Long-Range", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Shooting Power boosted 25%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1142,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 0,
    "pr": 428,
    "wt": ["Long-Range", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "Offense Up β",
      "description": "Raise Ally Melee and Shot Attack by 29%",
      "category": "Buff"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 889,
    "ma": 558,
    "sa": 291,
    "md": 291,
    "sd": 1142,
    "br": 126,
    "pr": 302,
    "wt": ["Long-Range", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "Archer Stance γ",
      "description": "Raise Shot Attack of your Squad by 39%",
      "category": "Buff"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 428,
    "pr": 302,
    "wt": ["Long-Range", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Anti-Armor Shotgun",
      "description": "Fire your Gunlauncher forward and Beam Rifle backward to spray the area with bullets.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 302,
    "pr": 428,
    "wt": ["Long-Range", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Shooting Power boosted 25%"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 291,
    "ma": 0,
    "sa": 2867,
    "md": 0,
    "sd": 0,
    "br": 126,
    "pr": 302,
    "wt": ["Long-Range", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Nix Snipe",
      "description": "Briefly bathe foes in powerful beams from your long rifle.",
      "category": "Beam Shot"
    },
    "name": "Hyper Impulse Long-Range Sniper Rifle",
    "type": "Beam"
  }]
}, {
  "name": "Byarlant Custom",
  "attribute": "Power",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 187,
    "ma": 187,
    "sa": 1480,
    "md": 187,
    "sd": 570,
    "br": 0,
    "pr": 0,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Energy Satellite",
      "description": "Generate an energy bit to provide automatic support fire. You can move freely while this is active.",
      "category": "Beam Shot"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 754,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 0,
    "pr": 281,
    "wt": ["Long-Range", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "With Module Category equipped, Buff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 570,
    "ma": 364,
    "sa": 187,
    "md": 187,
    "sd": 754,
    "br": 81,
    "pr": 201,
    "wt": ["Long-Range", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Arm-Mounted Mega Particle Cannon",
      "description": "Launch rapid-fire beams from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 281,
    "pr": 201,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Claw Kick",
      "description": "Unleash a series of kicking combo attacks. Raise your Melee Attack by 14%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 201,
    "pr": 281,
    "wt": ["Long-Range", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Vernier Up α",
      "description": "Raise your vernier capacity by 25%.",
      "category": "Buff"
    }
  }]
}, {
  "name": "Byarlant Custom [ALT]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 187,
    "ma": 187,
    "sa": 1480,
    "md": 187,
    "sd": 570,
    "br": 0,
    "pr": 0,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, reload speed boosted 15%"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 754,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 0,
    "pr": 281,
    "wt": ["Long-Range", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Combat Stance α",
      "description": "Raise your Melee Attack by 39%",
      "category": "Buff"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 570,
    "ma": 364,
    "sa": 187,
    "md": 187,
    "sd": 754,
    "br": 81,
    "pr": 201,
    "wt": ["Long-Range", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Shear",
      "description": "A furry of invisible blows from the saber on your forearm.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 281,
    "pr": 201,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Module Category equipped, Close Shot Attack raised 10%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 201,
    "pr": 281,
    "wt": ["Long-Range", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Vernier Up α",
      "description": "Raise your vernier capacity by 25%.",
      "category": "Buff"
    }
  }]
}, {
  "name": "Code ϕ",
  "attribute": "Technique",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 800,
    "ma": 385,
    "sa": 1985,
    "md": 385,
    "sd": 1185,
    "br": 292,
    "pr": 292,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1185,
    "ma": 800,
    "sa": 385,
    "md": 800,
    "sd": 1610,
    "br": 292,
    "pr": 292,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Assassination",
      "description": "Blast foes with two sabers, finishing with a grand strike. Raise Melee Attack of your Squad by 19%. Raise Beam Resist of your Squad by 29%. Raise Physical Resist of your Squad by 29%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 800,
    "ma": 2795,
    "sa": 385,
    "md": 800,
    "sd": 1185,
    "br": 0,
    "pr": 0,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "Melee Power Boosted 15%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 800,
    "ma": 385,
    "sa": 385,
    "md": 385,
    "sd": 1185,
    "br": 479,
    "pr": 479,
    "wt": ["Ace Excl.", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "Melee CRIT Rate boosted 14%"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 385,
    "ma": 3594,
    "sa": 0,
    "md": 0,
    "sd": 800,
    "br": 292,
    "pr": 292,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Grave Punisher",
      "description": "Send a shockwave along the ground from your beam scythe.",
      "category": "Beam Melee"
    },
    "name": "Beam Scythe [Code ϕ]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 800,
    "ma": 0,
    "sa": 1985,
    "md": 0,
    "sd": 800,
    "br": 292,
    "pr": 292,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "Job Gauge Increase boosted 11%"
    },
    "name": "Beam Rifle [Code ϕ]",
    "type": "Beam"
  }]
}, {
  "name": "Command Gundam",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 1999,
    "md": 559,
    "sd": 294,
    "br": 0,
    "pr": 129,
    "wt": ["Gundam Type", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Long-Range\", Long Shot Attack raised 14%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 893,
    "ma": 294,
    "sa": 294,
    "md": 1146,
    "sd": 559,
    "br": 0,
    "pr": 432,
    "wt": ["Gundam Type", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "SD Tackle",
      "description": "Execute a rush attack using your whole body. Lowers hit enemy Gunpla's Melee Attack by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 559,
    "ma": 1438,
    "sa": 294,
    "md": 893,
    "sd": 559,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Shot Guidance boosted 14%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 559,
    "md": 893,
    "sd": 294,
    "br": 303,
    "pr": 432,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Enemy Melee Power reduced 25%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 294,
    "md": 1146,
    "sd": 294,
    "br": 303,
    "pr": 432,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "SD Missile Launcher",
      "description": "Fire missiles from the launcher mounted on your back.",
      "category": "Physical Shot"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 559,
    "ma": 1438,
    "sa": 0,
    "md": 559,
    "sd": 0,
    "br": 129,
    "pr": 432,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "SD Attack",
      "description": "After a rush attack, unleash a barrage of attacks with your equipped weapons. Lowers hit enemy Gunpla's Shot Attack by 19%.",
      "category": "Physical Melee"
    },
    "name": "Command Knife",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 2,
    "a": 294,
    "ma": 0,
    "sa": 2598,
    "md": 559,
    "sd": 0,
    "br": 129,
    "pr": 303,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Dual Wave",
      "description": "Hold Grenade Launcher in both hands and fire high-power rounds.",
      "category": "Physical Shot"
    },
    "name": "Grenade Launcher w/ Laser Machine Gun",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 2,
    "a": 294,
    "ma": 0,
    "sa": 2598,
    "md": 559,
    "sd": 0,
    "br": 129,
    "pr": 303,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Against a large enemy, Shooting DMG Output boosted 20"
    },
    "name": "Heavy Autocannon",
    "type": "Physical"
  }]
}, {
  "name": "Crossbone Gundam X1",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 558,
    "md": 889,
    "sd": 558,
    "br": 302,
    "pr": 126,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1433,
    "ma": 558,
    "sa": 291,
    "md": 558,
    "sd": 558,
    "br": 428,
    "pr": 0,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Gun",
      "description": "Launch rapid-fire beam guns from your torso. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 1991,
    "sa": 0,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "12% chance of attacks penetrating super armor"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 558,
    "br": 428,
    "pr": 302,
    "wt": ["Protag.", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Heat Dagger",
      "description": "Unleash a barrage of attacks with the daggers in your soles. Raise your Melee Attack by 14%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 558,
    "br": 428,
    "pr": 302,
    "wt": ["Protag.", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "Vernier Consumption reduced 15%"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 889,
    "ma": 2589,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 302,
    "pr": 126,
    "wt": ["Protag.", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), EX Skill Power boosted 25%"
    },
    "name": "Beam Zanba",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 1699,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 126,
    "wt": ["Protag.", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon reload speed boosted 15%"
    },
    "name": "Zanbuster",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 0,
    "md": 1142,
    "sd": 558,
    "br": 590,
    "pr": 126,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Enemy Shooting Power reduced 25%"
    },
    "name": "ABC Cloak"
  }]
}, {
  "name": "Crossbone Gundam X2",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 384,
    "ma": 384,
    "sa": 3177,
    "md": 384,
    "sd": 1181,
    "br": 0,
    "pr": 0,
    "wt": ["High Firepower", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Long Shot Attack raised 20%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1602,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1602,
    "br": 611,
    "pr": 0,
    "wt": ["High Firepower", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Gun",
      "description": "Launch rapid-fire beam guns from your torso. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1181,
    "ma": 796,
    "sa": 384,
    "md": 384,
    "sd": 1602,
    "br": 417,
    "pr": 213,
    "wt": ["High Firepower", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon, reload speed boosted 20%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1602,
    "br": 417,
    "pr": 611,
    "wt": ["High Firepower", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Heat Dagger",
      "description": "Unleash a barrage of attacks with the daggers in your soles. Raise your Melee Attack by 14%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1602,
    "br": 611,
    "pr": 417,
    "wt": ["High Firepower", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), EX Skill piercing boosted 28%"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1181,
    "ma": 2380,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 611,
    "pr": 417,
    "wt": ["High Firepower", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Jovian Stinger",
      "description": "Unleash a frenzied barrage with your lance. Raise your Melee Defense by 19%.",
      "category": "Physical Melee"
    },
    "name": "Shot Lancer [X2]",
    "type": "Physical"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1181,
    "ma": 2380,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 611,
    "pr": 417,
    "wt": ["High Firepower", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"High Firepower\", Initial EX Skill charge boosted 20%"
    },
    "name": "Beam Zanba [X2]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 3997,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 213,
    "wt": ["High Firepower", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Sp. Shot CRIT rate boosted 30%"
    },
    "name": "Zanbuster [X2]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 3997,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 213,
    "wt": ["High Firepower", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, EX Skill DMG taken reduced by 35"
    },
    "name": "Buster Gun [X2]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 796,
    "ma": 0,
    "sa": 0,
    "md": 796,
    "sd": 2380,
    "br": 1028,
    "pr": 0,
    "wt": ["High Firepower", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Enemy Shooting power reduced 30%"
    },
    "name": "ABC Cloak [X2]"
  }]
}, {
  "name": "Delta Plus",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 558,
    "md": 889,
    "sd": 558,
    "br": 213,
    "pr": 213,
    "wt": ["Transformer", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1434,
    "ma": 558,
    "sa": 291,
    "md": 558,
    "sd": 558,
    "br": 213,
    "pr": 213,
    "wt": ["Transformer", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), EX Skill DMG Output boosted 20"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 1992,
    "sa": 0,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Transformer", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Sp. Shot DMG taken reduced 20"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 558,
    "br": 350,
    "pr": 350,
    "wt": ["Transformer", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, Sp. Shot Power boosted 25%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 558,
    "br": 350,
    "pr": 350,
    "wt": ["Transformer", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Buff EX Skill Effect up 15%"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 889,
    "ma": 2591,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 213,
    "pr": 213,
    "wt": ["Transformer", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, Strong Melee Power boosted 20%"
    },
    "name": "Beam Saber [Delta Plus]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 1702,
    "md": 0,
    "sd": 0,
    "br": 302,
    "pr": 302,
    "wt": ["Transformer", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Sp. Shot Power boosted 25%"
    },
    "name": "Beam Rifle [Delta Plus]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 0,
    "md": 1142,
    "sd": 558,
    "br": 350,
    "pr": 350,
    "wt": ["Transformer", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Grenade Launcher",
      "description": "Launch grenades from your shield. You can move while firing.",
      "category": "Physical Shot"
    },
    "name": "Shield [Delta Plus]"
  }]
}, {
  "name": "Den'an Zon",
  "attribute": "Technique",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 1089,
    "md": 187,
    "sd": 187,
    "br": 201,
    "pr": 81,
    "wt": ["Mass P.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 30%, Shooting DMG Output boosted 15"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 942,
    "ma": 187,
    "sa": 364,
    "md": 364,
    "sd": 364,
    "br": 281,
    "pr": 0,
    "wt": ["Mass P.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Armed Aura α",
      "description": "Your Gunpla resists flinching for a set period of time.",
      "category": "Buff"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 1089,
    "ma": 364,
    "sa": 364,
    "md": 942,
    "sd": 1275,
    "br": 371,
    "pr": 81,
    "wt": ["Mass P.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Dual Beam Guns",
      "description": "Launch rapid-fire beams from your forearm. You can move while firing.",
      "category": "Beam Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 570,
    "br": 281,
    "pr": 201,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Long Shot Attack Raised 10%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 570,
    "br": 281,
    "pr": 201,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Offense Hack α",
      "description": "Reduce target Melee and Shot Defense by 39%",
      "category": "Debuff"
    }
  }, {
    "part": "melee",
    "mark": 3,
    "a": 570,
    "ma": 1089,
    "sa": 0,
    "md": 0,
    "sd": 187,
    "br": 201,
    "pr": 81,
    "wt": ["Mass P.", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 30%, Shooting DMG Output boosted 15"
    },
    "name": "Shot Lancer",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 3,
    "a": 570,
    "ma": 0,
    "sa": 1480,
    "md": 0,
    "sd": 0,
    "br": 281,
    "pr": 81,
    "wt": ["Mass P.", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 30%, Shooting DMG Output boosted 15"
    },
    "name": "Shot Lancer [Heavy Machine Gun]",
    "type": "Physical"
  }]
}, {
  "name": "Destiny Gundam",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 965,
    "ma": 553,
    "sa": 2922,
    "md": 553,
    "sd": 553,
    "br": 284,
    "pr": 284,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Close Shot Attack raised 20%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1734,
    "ma": 965,
    "sa": 965,
    "md": 965,
    "sd": 965,
    "br": 284,
    "pr": 284,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Blade Category equipped, Melee Power boosted 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 965,
    "ma": 2922,
    "sa": 1356,
    "md": 553,
    "sd": 553,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Palma Fiocina",
      "description": "Charge forward, capture an enemy, and fire a beam from your palm at point-blank range. Lowers hit enemy Gunpla's Physical Resist by 29%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 965,
    "ma": 965,
    "sa": 553,
    "md": 965,
    "sd": 965,
    "br": 555,
    "pr": 555,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 965,
    "ma": 965,
    "sa": 553,
    "md": 965,
    "sd": 965,
    "br": 555,
    "pr": 555,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Arondight",
      "description": "Form wings of light with radiation pressure from Voiture Lumiere, then rush with Arondight. Raise speed of your Squad by 20%. Raise Melee Attack of your Squad by 29%. Raise Shot Defense of your Squad by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 553,
    "ma": 3690,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 464,
    "pr": 464,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 80%, Melee DMG Output boosted 35"
    },
    "name": "Arondight [Destiny]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 553,
    "ma": 154,
    "sa": 3690,
    "md": 0,
    "sd": 0,
    "br": 464,
    "pr": 464,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Job Gauge Increase boosted 17%"
    },
    "name": "High-Energy Beam Rifle [Destiny]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 965,
    "ma": 965,
    "sa": 553,
    "md": 965,
    "sd": 965,
    "br": 555,
    "pr": 555,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Buff EX Skill Effect up 22%%"
    },
    "name": "Anti-Beam Shield"
  }]
}, {
  "name": "Dom",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 373,
    "md": 373,
    "sd": 287,
    "br": 54,
    "pr": 138,
    "wt": ["Heavy Armor", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 50%, Shooting DMG taken reduced 10"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 640,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 287,
    "br": 0,
    "pr": 191,
    "wt": ["Heavy Armor", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Chest-Mounted Scattering Beam Cannon",
      "description": "Bathe foes in low-output beams from your chest beam cannon. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 373,
    "sa": 137,
    "md": 373,
    "sd": 373,
    "br": 0,
    "pr": 54,
    "wt": ["Heavy Armor", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Burning Fist",
      "description": "Charge through enemies in front of you with your fist. Lowers hit enemy Gunpla's Melee Defense by 14%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 137,
    "br": 54,
    "pr": 191,
    "wt": ["Heavy Armor", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 50%, Shot Spread reduced 10%"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 137,
    "md": 373,
    "sd": 287,
    "br": 54,
    "pr": 191,
    "wt": ["Heavy Armor", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Heat Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Physical Melee"
    }
  }]
}, {
  "name": "Dom Tropen",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 372,
    "md": 287,
    "sd": 372,
    "br": 138,
    "pr": 54,
    "wt": ["Heavy Armor", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon magazine boosted 10%"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 640,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 54,
    "pr": 0,
    "wt": ["Heavy Armor", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Recovery Tool α",
      "description": "Recover 48% of your maximum Armor.",
      "category": "Recovery"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 372,
    "sa": 137,
    "md": 372,
    "sd": 511,
    "br": 54,
    "pr": 0,
    "wt": ["Heavy Armor", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 50%, Melee DMG taken reduced 10"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 137,
    "md": 137,
    "sd": 511,
    "br": 190,
    "pr": 54,
    "wt": ["Heavy Armor", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 50%, Strong Melee DMG taken reduced 10"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 372,
    "br": 190,
    "pr": 54,
    "wt": ["Heavy Armor", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Heat Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Physical Melee"
    }
  }, {
    "part": "range",
    "mark": 4,
    "a": 372,
    "ma": 0,
    "sa": 797,
    "md": 0,
    "sd": 287,
    "br": 190,
    "pr": 54,
    "wt": ["Heavy Armor", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Bazooka Category equipped, Enemy Shooting Power reduced 10%"
    },
    "name": "Raketen Bazooka",
    "type": "Physical"
  }]
}, {
  "name": "Dom Tropen [Sand Brown]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 372,
    "md": 287,
    "sd": 372,
    "br": 54,
    "pr": 138,
    "wt": ["Heavy Armor", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, magazine boosted 10%"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 640,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 0,
    "pr": 54,
    "wt": ["Heavy Armor", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Strong Melee DMG Output boosted 10"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 372,
    "sa": 137,
    "md": 372,
    "sd": 511,
    "br": 0,
    "pr": 54,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 50%, Melee DMG taken reduced 10"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 137,
    "md": 137,
    "sd": 511,
    "br": 54,
    "pr": 190,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 50%, Melee DMG taken reduced 10"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 372,
    "br": 54,
    "pr": 190,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "Heat Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Physical Melee"
    }
  }]
}, {
  "name": "Döven Wolf",
  "attribute": "Power",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 1088,
    "md": 363,
    "sd": 363,
    "br": 0,
    "pr": 200,
    "wt": ["High Firepower", "Mass P."],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 754,
    "ma": 186,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 0,
    "pr": 280,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Mega Particle Cannon",
      "description": "Fire a generator-linked beam cannon in your abdomen at foes.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 363,
    "ma": 1088,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 0,
    "pr": 0,
    "wt": ["High Firepower", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Sp. Shot DMG Output boosted 15 "
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 200,
    "pr": 280,
    "wt": ["High Firepower", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Mid Shot Attack raised 10%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 200,
    "pr": 280,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Incom",
      "description": "Launch the incom to repeatedly strike foes in all directions. You can move freely while this skill is active.",
      "category": "Beam Shot"
    }
  }, {
    "part": "range",
    "mark": 3,
    "a": 363,
    "ma": 0,
    "sa": 1479,
    "md": 0,
    "sd": 0,
    "br": 80,
    "pr": 280,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Seventh Ray Shot",
      "description": "Bathe foes in high-output beams from your rifle.",
      "category": "Beam Shot"
    },
    "name": "Beam Rifle [Döven Wolf]",
    "type": "Beam"
  }]
}, {
  "name": "Döven Wolf [ALT]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 1088,
    "md": 363,
    "sd": 363,
    "br": 0,
    "pr": 200,
    "wt": ["High Firepower", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon reload speed boosted 15%"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 754,
    "ma": 186,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 0,
    "pr": 280,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Grenade Launcher",
      "description": "Launch grenades stowed in your body frame.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 363,
    "ma": 1088,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 0,
    "pr": 0,
    "wt": ["High Firepower", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Mid Shot Attack raised 10%"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 200,
    "pr": 280,
    "wt": ["High Firepower", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Mid Shot Attack raised 10%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 200,
    "pr": 280,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Shoulder-Mounted Beam Cannon",
      "description": "Bathe foes in beams from the cannon suspended on your back.",
      "category": "Beam Shot"
    }
  }, {
    "part": "range",
    "mark": 3,
    "a": 363,
    "ma": 0,
    "sa": 1479,
    "md": 0,
    "sd": 0,
    "br": 80,
    "pr": 280,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Shooting DMG taken reduced 15"
    },
    "name": "Beam Rifle [ALT] [Doven Wolf]",
    "type": "Beam"
  }]
}, {
  "name": "Dragon Gundam",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 1436,
    "md": 292,
    "sd": 891,
    "br": 127,
    "pr": 303,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Queue Blade",
      "description": "Attack with the queue blade on your head. Lowers hit enemy Gunpla's Melee Defense by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 891,
    "ma": 559,
    "sa": 292,
    "md": 559,
    "sd": 1144,
    "br": 0,
    "pr": 430,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Hyper Mode",
      "description": "Enter Hyper Mode for enhanced combat prowess. Raise speed by 20%. Raise your Melee Attack by 19%. Raise your Shot Attack by 19%.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 559,
    "ma": 1994,
    "sa": 292,
    "md": 559,
    "sd": 891,
    "br": 0,
    "pr": 0,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Dragon Claw",
      "description": "Strike with both extended arms, then unleash a burst of flame. Lowers hit enemy Gunpla's Shot Defense by 19%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 292,
    "md": 292,
    "sd": 891,
    "br": 303,
    "pr": 430,
    "wt": ["Mobile Fighter", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Close Shot Attack raised 14%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 292,
    "md": 292,
    "sd": 891,
    "br": 303,
    "pr": 430,
    "wt": ["Mobile Fighter", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Enemy Sp. Shot Power reduced 25%"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 292,
    "ma": 2594,
    "sa": 0,
    "md": 0,
    "sd": 559,
    "br": 127,
    "pr": 303,
    "wt": ["Mobile Fighter", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Hell Jumper",
      "description": "Jump high to deal a powerful blow with your lance from the air. Lower's hit enemy Gunpla's Beam Resist by 39%",
      "category": "Beam Melee"
    },
    "name": "Feilong Flag",
    "type": "Beam"
  }]
}, {
  "name": "Dreissen [Unicorn Ver.]",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 287,
    "md": 373,
    "sd": 137,
    "br": 110,
    "pr": 110,
    "wt": ["Heavy Armor", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, reload speed boosted 10%"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 511,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 287,
    "br": 110,
    "pr": 110,
    "wt": ["Heavy Armor", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "EX Skill Piercing boosted 15%"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 137,
    "ma": 1016,
    "sa": 137,
    "md": 511,
    "sd": 137,
    "br": 0,
    "pr": 0,
    "wt": ["Heavy Armor", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "3-Barrel Beam Cannon",
      "description": "Launch rapid-fire beam cannon shots from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 287,
    "br": 138,
    "pr": 110,
    "wt": ["Heavy Armor", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Sp. Shot DMG Output boosted 10"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 287,
    "br": 110,
    "pr": 138,
    "wt": ["Heavy Armor", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Tri-Blade",
      "description": "Fire a close-range weapon that has three tracking blades.",
      "category": "Physical Shot"
    }
  }, {
    "part": "melee",
    "mark": 4,
    "a": 137,
    "ma": 1310,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 138,
    "pr": 138,
    "wt": ["Heavy Armor", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Spinning Axle",
      "description": "Ready your axe, then spin to attack nearby foes. Lowers hit enemy Gunpla's Shot Attack by 19%.",
      "category": "Beam Melee"
    },
    "name": "Beam Tomahawk [Dreissen]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 4,
    "a": 373,
    "ma": 0,
    "sa": 798,
    "md": 0,
    "sd": 0,
    "br": 143,
    "pr": 143,
    "wt": ["Heavy Armor", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "With Bazooka Category equipped, Shooting DMG Output boosted 10%"
    },
    "name": "Giant Bazooka [Dreissen]",
    "type": "Physical"
  }]
}, {
  "name": "Duel Gundam",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 1701,
    "md": 291,
    "sd": 291,
    "br": 302,
    "pr": 126,
    "wt": ["Mid-Range", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Igelstellung",
      "description": "Fire the anti-air autocannons in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1433,
    "ma": 291,
    "sa": 558,
    "md": 558,
    "sd": 558,
    "br": 428,
    "pr": 0,
    "wt": ["Mid-Range", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Bazooka Category equipped, Sp. Shot Power boosted 25%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 889,
    "ma": 558,
    "sa": 558,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Mid-Range", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Barrier Hack β",
      "description": "Reduce Shot Defense of all enemies by 24%",
      "category": "Debuff"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Mid-Range", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 40%, 13% chance to not recoil"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Mid-Range", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Combat Hack β",
      "description": "Reduce Melee Attack of all enemies by 24%",
      "category": "Debuff"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 2300,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 126,
    "wt": ["Mid-Range", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill Power boosted 25%"
    },
    "name": "57mm High-Energy Beam Rifle [Duel]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 2300,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 126,
    "wt": ["Mid-Range", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 40%, Enemy Shooting Power reduced 25%"
    },
    "name": "Gae Bulg",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 0,
    "md": 558,
    "sd": 1142,
    "br": 590,
    "pr": 126,
    "wt": ["Mid-Range", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Combat Hack α",
      "description": "Reduce target Melee Attack by 39%",
      "category": "Debuff"
    },
    "name": "Anti-Beam Shield [Duel]"
  }]
}, {
  "name": "Duel Gundam (Assault Shroud)",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 384,
    "ma": 384,
    "sa": 3181,
    "md": 384,
    "sd": 1182,
    "br": 0,
    "pr": 0,
    "wt": ["High Firepower", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon reload speed boosted 20%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1606,
    "ma": 384,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 290,
    "pr": 290,
    "wt": ["High Firepower", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Armed Aura β",
      "description": "Allies resist flinching for a set period of time.",
      "category": "Buff"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1182,
    "ma": 799,
    "sa": 384,
    "md": 384,
    "sd": 1606,
    "br": 290,
    "pr": 290,
    "wt": ["High Firepower", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Shiva & 5-Tube Missile Pod",
      "description": "Fire a railgun and missiles from units on your shoulders. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 420,
    "pr": 420,
    "wt": ["High Firepower", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), EX Skill Piercing boosted 28%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 420,
    "pr": 420,
    "wt": ["High Firepower", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Melee DMG Output boosted 35"
    }
  }]
}, {
  "name": "Duel Gundam (Assault Shroud) [Beginner Campaign]",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 389,
    "ma": 389,
    "sa": 3043,
    "md": 389,
    "sd": 1040,
    "br": 0,
    "pr": 0,
    "wt": ["High Firepower", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, Shooting DMG Output boosted 20"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1459,
    "ma": 389,
    "sa": 389,
    "md": 651,
    "sd": 1459,
    "br": 218,
    "pr": 218,
    "wt": ["High Firepower", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Armed Aura β",
      "description": "Allies resist flinching for a set period of time.",
      "category": "Buff"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1040,
    "ma": 651,
    "sa": 389,
    "md": 389,
    "sd": 1625,
    "br": 218,
    "pr": 218,
    "wt": ["High Firepower", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Shiva & 5-Tube Missile Pod",
      "description": "Fire a railgun and missiles from units on your shoulders. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 651,
    "ma": 389,
    "sa": 389,
    "md": 651,
    "sd": 1459,
    "br": 335,
    "pr": 335,
    "wt": ["High Firepower", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "12% chance of attacks penetrating super armor"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 651,
    "ma": 389,
    "sa": 389,
    "md": 651,
    "sd": 1459,
    "br": 335,
    "pr": 335,
    "wt": ["High Firepower", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Vernier Recovery Rate boosted 16%"
    }
  }]
}, {
  "name": "EARTHREE GUNDAM",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 2377,
    "md": 795,
    "sd": 795,
    "br": 0,
    "pr": 416,
    "wt": ["Protag.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1601,
    "ma": 382,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 0,
    "pr": 609,
    "wt": ["Protag.", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Buff EX Skill Effect up 22%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 795,
    "ma": 2377,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "15% chance of attacks penetrating super armor"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 416,
    "pr": 609,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Long Shot Attack raised 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 416,
    "pr": 609,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Cougar Rush",
      "description": "Execute a combo on target using a Beam Saber in both hands.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 795,
    "ma": 3173,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 211,
    "pr": 609,
    "wt": ["Protag.", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Melee DMG taken reduced 35"
    },
    "name": "Beam Saber [EARTHREE]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 795,
    "ma": 0,
    "sa": 3173,
    "md": 0,
    "sd": 0,
    "br": 211,
    "pr": 609,
    "wt": ["Protag.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Charge Shot",
      "description": "Attach your shield to your rifle and blast foes with a high-energy beam.",
      "category": "Beam Shot"
    },
    "name": "Beam Rifle [EARTHREE]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 795,
    "ma": 0,
    "sa": 0,
    "md": 1601,
    "sd": 1601,
    "br": 211,
    "pr": 805,
    "wt": ["Protag.", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon magazine boosted 20%"
    },
    "name": "Shield [EARTHREE]"
  }]
}, {
  "name": "Efreet Custom",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 561,
    "ma": 294,
    "sa": 1440,
    "md": 294,
    "sd": 893,
    "br": 215,
    "pr": 215,
    "wt": ["Zeon", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "EXAM System",
      "description": "Activate the anti-Newtype OS EXAM System. Raise your speed by 20%. Raise your Melee Attack by 39%.",
      "category": "Awakening"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 893,
    "ma": 561,
    "sa": 294,
    "md": 561,
    "sd": 1147,
    "br": 215,
    "pr": 215,
    "wt": ["Zeon", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Buff EX Skill Effect up 15%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 561,
    "ma": 2000,
    "sa": 294,
    "md": 561,
    "sd": 893,
    "br": 0,
    "pr": 0,
    "wt": ["Zeon", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "Arm Grenade Launcher",
      "description": "Launch grenades from your forearm. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 561,
    "ma": 294,
    "sa": 294,
    "md": 294,
    "sd": 893,
    "br": 352,
    "pr": 352,
    "wt": ["Zeon", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Leg Missile Pod",
      "description": "Launch missiles from the pod mounted on your leg.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 561,
    "ma": 294,
    "sa": 294,
    "md": 294,
    "sd": 893,
    "br": 352,
    "pr": 352,
    "wt": ["Zeon", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Heat Rush",
      "description": "Ready a saber in each hand and execute a rush attack.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 294,
    "ma": 2601,
    "sa": 0,
    "md": 0,
    "sd": 561,
    "br": 215,
    "pr": 215,
    "wt": ["Zeon", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Zeon\", Strong Melee CRIT Rate boosted 17%"
    },
    "name": "Heat Saber [Efreet Custom]",
    "type": "Physical"
  }]
}, {
  "name": "Enhanced ZZ Gundam [Ver Ka.]",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 965,
    "ma": 0,
    "sa": 3306,
    "md": 551,
    "sd": 551,
    "br": 282,
    "pr": 464,
    "wt": ["Gundam Type", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "High Mega Cannon",
      "description": "Fire at enemies ahead with the Mega Particle Cannon in your head.",
      "category": "Beam Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1732,
    "ma": 551,
    "sa": 551,
    "md": 1732,
    "sd": 965,
    "br": 75,
    "pr": 670,
    "wt": ["Gundam Type", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Biosensor",
      "description": "Temporarily increase energy output using Biosensor. Raise your speed by 20%. Raise your Melee Defense by 29%. Raise your Beam Resist by 49%.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1884,
    "ma": 1506,
    "sa": 551,
    "md": 4255,
    "sd": 1506,
    "br": 381,
    "pr": 947,
    "wt": ["Gundam Type", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Strong Melee DMG Output boosted 35"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 965,
    "ma": 329,
    "sa": 551,
    "md": 1732,
    "sd": 965,
    "br": 464,
    "pr": 670,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Blade Category equipped, EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 965,
    "ma": 329,
    "sa": 551,
    "md": 1732,
    "sd": 965,
    "br": 464,
    "pr": 670,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Cannon & Missile Launcher",
      "description": "Fire Double Cannon and 18-shot missile from your backpack at target.",
      "category": "Physical Shot"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 551,
    "ma": 3138,
    "sa": 0,
    "md": 788,
    "sd": 153,
    "br": 282,
    "pr": 464,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Hyper Beam Saber",
      "description": "Execute a combo with your gigantic enhanced saber. Raise your Melee Attack by 24%",
      "category": "Beam Melee"
    },
    "name": "Hyper Beam Saber [Enhanced ZZ (Ver. Ka)] ",
    "type": "Beam"
  }]
}, {
  "name": "Force Impulse Gundam",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 2377,
    "md": 795,
    "sd": 795,
    "br": 0,
    "pr": 416,
    "wt": ["Gundam Type", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Shooting CRIT Rate boosted 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1601,
    "ma": 382,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 0,
    "pr": 609,
    "wt": ["Gundam Type", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "CIWS",
      "description": "Fire the close-range defense system in your head at foes straight ahead. You can move freely while shooting.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 795,
    "ma": 2377,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Strong Melee CRIT Rate boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 416,
    "pr": 609,
    "wt": ["Gundam Type", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Rapid Thrust",
      "description": "Unleash a blindingly fast flurry with sabers in each hand.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 416,
    "pr": 609,
    "wt": ["Gundam Type", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Excalibur",
      "description": "Charge forward with the Excalibur you received. Squad recovers 48% of maximum Armor. Raise Beam Resist of your Squad by 49%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 795,
    "ma": 3173,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 211,
    "pr": 609,
    "wt": ["Gundam Type", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Initial EX Skill Charge boosted 20%"
    },
    "name": "Vajra Beam Saber",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 795,
    "ma": 0,
    "sa": 3173,
    "md": 0,
    "sd": 0,
    "br": 211,
    "pr": 609,
    "wt": ["Gundam Type", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Enemy Shooting Power reduced 30%"
    },
    "name": "MA-BAR72 High-Energy Beam Rifle",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 795,
    "ma": 0,
    "sa": 0,
    "md": 1601,
    "sd": 1601,
    "br": 211,
    "pr": 805,
    "wt": ["Gundam Type", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Shield Throw",
      "description": "Throw your shield to attack.",
      "category": "Physical Melee"
    },
    "name": "Mobile Shield"
  }]
}, {
  "name": "Force Impulse Gundam [Beginner Campaign]",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 648,
    "ma": 388,
    "sa": 2268,
    "md": 648,
    "sd": 648,
    "br": 0,
    "pr": 332,
    "wt": ["Gundam Type", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Enemy Shooting Power reduced 25%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1454,
    "ma": 388,
    "sa": 388,
    "md": 1036,
    "sd": 1036,
    "br": 0,
    "pr": 514,
    "wt": ["Gundam Type", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "CIWS",
      "description": "Fire the close-range defense system in your head at foes straight ahead. You can move freely while shooting.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 648,
    "ma": 2268,
    "sa": 388,
    "md": 1036,
    "sd": 1036,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Strong Melee CRIT Rate boosted 17%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 648,
    "ma": 388,
    "sa": 388,
    "md": 1036,
    "sd": 1036,
    "br": 332,
    "pr": 514,
    "wt": ["Gundam Type", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Rapid Thrust",
      "description": "Unleash a blindingly fast flurry with sabers in each hand.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 648,
    "ma": 388,
    "sa": 388,
    "md": 1036,
    "sd": 1036,
    "br": 332,
    "pr": 514,
    "wt": ["Gundam Type", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Rush",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }]
}, {
  "name": "Freedom Gundam",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1356,
    "ma": 553,
    "sa": 2523,
    "md": 553,
    "sd": 553,
    "br": 383,
    "pr": 383,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Picus",
      "description": "Fire the anti-air autocannons in your head at foes straight ahead. You can move freely while shooting. Lower hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 2133,
    "ma": 553,
    "sa": 966,
    "md": 966,
    "sd": 966,
    "br": 383,
    "pr": 383,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When armor > 40%, Strong Melee DMG Output boosted 35"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1356,
    "ma": 966,
    "sa": 966,
    "md": 1356,
    "sd": 1356,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Sp. Shot Power boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1356,
    "ma": 553,
    "sa": 553,
    "md": 966,
    "sd": 1356,
    "br": 555,
    "pr": 555,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Xiphias Rail Cannon",
      "description": "Slash with your saber and fire high-speed rounds from both your railguns at mid-air enemy. Squad recovers 48% of maximum Armor. Raises your Shot Attack by 29%",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1356,
    "ma": 553,
    "sa": 553,
    "md": 966,
    "sd": 1356,
    "br": 555,
    "pr": 555,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Balaena Plasma Beam Cannon",
      "description": "Attack enemy ahead by firing highly compressed plasma energy from your Plasma Beam Cannon.",
      "category": "Beam Shot"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1356,
    "ma": 2523,
    "sa": 0,
    "md": 0,
    "sd": 553,
    "br": 383,
    "pr": 383,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Strong Melee DMG Output boosted 35"
    },
    "name": "Lacerta Beam Saber",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 1356,
    "ma": 0,
    "sa": 3312,
    "md": 0,
    "sd": 0,
    "br": 465,
    "pr": 465,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Job Gauge Increase boosted 17%"
    },
    "name": "Lupus Beam Rifle",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1356,
    "ma": 0,
    "sa": 0,
    "md": 966,
    "sd": 1734,
    "br": 555,
    "pr": 555,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Shield Bash",
      "description": "Unleash a combo with the shield on your right arm. Lowers hit enemy Gunpla's Shot Defense by 19%.",
      "category": "Beam Melee"
    },
    "name": "Laminated Anti-Beam Shield [Freedom]"
  }]
}, {
  "name": "Full Armor Gundam [Thunderbolt Ver.]",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 2378,
    "md": 796,
    "sd": 796,
    "br": 417,
    "pr": 0,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1601,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 610,
    "pr": 0,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "7-Barrel Missile Launcher",
      "description": "Attack enemies by launching missiles stowed in your shoulder's add-on armor.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1601,
    "ma": 2378,
    "sa": 383,
    "md": 2781,
    "sd": 2781,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Twin Beam Rifle & Rocket Launcher",
      "description": "Fire at foes straight ahead with dual large beam rifles and heavy ordnance.",
      "category": "Physical Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 610,
    "pr": 417,
    "wt": ["Protag.", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "6-Barrel Missile Launcher",
      "description": "Attack enemies by launching missiles stowed in your knee's add-on armor.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 610,
    "pr": 417,
    "wt": ["Protag.", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Free Improvisation",
      "description": "Crush the enemy with the heavy weaponry on your back, then unleash a thunderous finisher. Raise Shot Attack of your Squad by 39%.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Gafran",
  "attribute": "Power",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 757,
    "br": 139,
    "pr": 139,
    "wt": ["Mass P.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Module Category equipped, Close Shot Attack raised 10%"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 757,
    "ma": 187,
    "sa": 0,
    "md": 570,
    "sd": 570,
    "br": 139,
    "pr": 139,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Scattering Beam Cannon",
      "description": "Bathe foes in high-output beams from your chest beam cannon.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 364,
    "ma": 570,
    "sa": 187,
    "md": 570,
    "sd": 570,
    "br": 81,
    "pr": 81,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Rush",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 757,
    "br": 139,
    "pr": 139,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Module Category equipped, EX Skill Recovery boosted 18%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 757,
    "br": 139,
    "pr": 139,
    "wt": ["Mass P.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Tail Beam Rifle",
      "description": "Launch rapid-fire beam weapon shots from your tail. You can move while firing.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Gafran [ALT]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 757,
    "br": 139,
    "pr": 139,
    "wt": ["Mass P.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Block Stance β",
      "description": "Raise Ally Melee Defense by 29%.",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 757,
    "ma": 187,
    "sa": 0,
    "md": 570,
    "sd": 570,
    "br": 139,
    "pr": 139,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Module Category, Debuff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 364,
    "ma": 570,
    "sa": 187,
    "md": 570,
    "sd": 570,
    "br": 81,
    "pr": 81,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Vulcan",
      "description": "Launch rapid-fire Beam Vulcan shots from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 757,
    "br": 139,
    "pr": 139,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Module Category, EX Skill Recovery boosted 18%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 757,
    "br": 139,
    "pr": 139,
    "wt": ["Mass P.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Tail Beam Rifle",
      "description": "Launch rapid-fire beam weapon shots from your tail. You can move while firing.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Gaia Gundam",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 1698,
    "md": 558,
    "sd": 558,
    "br": 0,
    "pr": 302,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "CIWS",
      "description": "Fire the close-range defense system in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1140,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 428,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Enemy EX Skill Penetration reduced 22%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 1698,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Transformer\", Strong Melee CRIT Rate boosted 17%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 302,
    "pr": 428,
    "wt": ["Transformer", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), 13% chance to not recoil"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 302,
    "pr": 428,
    "wt": ["Transformer", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "MA-81R Beam Assault Cannon",
      "description": "Fire a beam straight at enemies from the beam assault cannon on your back.",
      "category": "Beam Shot"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 558,
    "ma": 2297,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 126,
    "pr": 428,
    "wt": ["Transformer", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Job Gauge Increase boosted 13%"
    },
    "name": "Vajra Beam Saber [Gaia]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 2297,
    "md": 0,
    "sd": 0,
    "br": 126,
    "pr": 428,
    "wt": ["Transformer", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill Power boosted 25%"
    },
    "name": "High-Energy Beam Rifle",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 0,
    "md": 1140,
    "sd": 1140,
    "br": 126,
    "pr": 558,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Shield Throw",
      "description": "Throw your shield to attack.",
      "category": "Physical Melee"
    },
    "name": "Mobile Shield [Gaia]"
  }]
}, {
  "name": "Geara Doga",
  "attribute": "Technique",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 364,
    "md": 570,
    "sd": 187,
    "br": 201,
    "pr": 81,
    "wt": ["Mass P.", "Zaku Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Shock Bringer β",
      "description": "Ally attacks stun large foes more easily for a set period.",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 754,
    "ma": 187,
    "sa": 187,
    "md": 754,
    "sd": 364,
    "br": 281,
    "pr": 0,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 30%, Buff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 187,
    "ma": 1480,
    "sa": 187,
    "md": 754,
    "sd": 187,
    "br": 0,
    "pr": 0,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, EX Skill Power Boosted 15"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 754,
    "sd": 364,
    "br": 201,
    "pr": 281,
    "wt": ["Mass P.", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Brave Axe Combo",
      "description": "Bring down a wild rush of blows with your equipped axe.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 754,
    "sd": 364,
    "br": 281,
    "pr": 201,
    "wt": ["Mass P.", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Defense Hack α",
      "description": "Reduce target Melee and Shot Defense by 39%",
      "category": "Debuff"
    }
  }, {
    "part": "melee",
    "mark": 3,
    "a": 187,
    "ma": 1864,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 201,
    "pr": 81,
    "wt": ["Mass P.", "Zaku Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Melee DMG Output boosted 15"
    },
    "name": "Beam Sword-Axe",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 3,
    "a": 570,
    "ma": 0,
    "sa": 1089,
    "md": 0,
    "sd": 0,
    "br": 281,
    "pr": 201,
    "wt": ["Mass P.", "Zaku Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Panic Maker",
      "description": "Fire special high-powered rounds from your machine gun.",
      "category": "Beam Shot"
    },
    "name": "Beam Machine Gun [Geara Doga]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 3,
    "a": 364,
    "ma": 0,
    "sa": 0,
    "md": 1089,
    "sd": 364,
    "br": 462,
    "pr": 0,
    "wt": ["Mass P.", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Sturm Faust",
      "description": "Fire the portable grenade launcher on your shield. You can move while firing.",
      "category": "Physical Shot"
    },
    "name": "Shield [Geara Doga]"
  }]
}, {
  "name": "Gelgoog [Mass Production Type]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 511,
    "ma": 137,
    "sa": 373,
    "md": 287,
    "sd": 287,
    "br": 0,
    "pr": 138,
    "wt": ["Mass P.", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Block Stance α",
      "description": "Raise your Melee Defense by 39%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 798,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 287,
    "br": 0,
    "pr": 191,
    "wt": ["Mass P.", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Strong Melee DMG taken reduced 10"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 373,
    "ma": 373,
    "sa": 137,
    "md": 373,
    "sd": 373,
    "br": 0,
    "pr": 54,
    "wt": ["Mass P.", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Melee DMG taken reduced 10"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 137,
    "md": 373,
    "sd": 373,
    "br": 191,
    "pr": 54,
    "wt": ["Mass P.", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Physical, Melee DMG Output boosted 10"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 137,
    "md": 373,
    "sd": 373,
    "br": 54,
    "pr": 191,
    "wt": ["Mass P.", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Mass P.\" enemy, Sp. Shot DMG taken reduced 10"
    }
  }, {
    "part": "range",
    "mark": 4,
    "a": 373,
    "ma": 0,
    "sa": 511,
    "md": 137,
    "sd": 137,
    "br": 138,
    "pr": 191,
    "wt": ["Mass P.", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Mass P.\" enemy, Sp. Shot CRIT Rate boosted 10%"
    },
    "name": "Beam Rifle [Gelgoog]",
    "type": "Beam"
  }]
}, {
  "name": "Gelgoog Cannon",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 137,
    "ma": 137,
    "sa": 1012,
    "md": 137,
    "sd": 372,
    "br": 0,
    "pr": 0,
    "wt": ["Long-Range", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "With Machine Gun Category equipped, Shot Spread reduced 10%"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 511,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 0,
    "pr": 190,
    "wt": ["Long-Range", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 50%, Sp. Shot DMG taken reduced 10"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 372,
    "ma": 287,
    "sa": 137,
    "md": 137,
    "sd": 511,
    "br": 54,
    "pr": 138,
    "wt": ["Long-Range", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Sp. Shot Power boosted 10%"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 190,
    "pr": 138,
    "wt": ["Long-Range", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), EX Skill Recovery boosted 10%"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 138,
    "pr": 190,
    "wt": ["Long-Range", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Cannon",
      "description": "Fire a beam in a straight line from the cannon on your back. You can move while firing.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Gelgoog Jäger",
  "attribute": "Speed",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 365,
    "ma": 187,
    "sa": 1278,
    "md": 365,
    "sd": 187,
    "br": 0,
    "pr": 81,
    "wt": ["Mid-Range", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 571,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 365,
    "br": 0,
    "pr": 282,
    "wt": ["Mid-Range", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "Supporter Job, Buff EX Skill Time up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 365,
    "ma": 943,
    "sa": 187,
    "md": 571,
    "sd": 365,
    "br": 0,
    "pr": 0,
    "wt": ["Mid-Range", "Commander"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Spot Gun",
      "description": "Launch rapid-fire beams from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 365,
    "ma": 187,
    "sa": 365,
    "md": 571,
    "sd": 187,
    "br": 202,
    "pr": 282,
    "wt": ["Mid-Range", "Commander"],
    "ex": {
      "type": "Part Traits",
      "name": "With Machine Gun Category equipped, Sp. Shot Power boosted 18%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 365,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 187,
    "br": 202,
    "pr": 282,
    "wt": ["Commander", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Vernier Recovery Rate boosted 12%"
    }
  }, {
    "part": "range",
    "mark": 3,
    "a": 187,
    "ma": 0,
    "sa": 1663,
    "md": 365,
    "sd": 0,
    "br": 81,
    "pr": 202,
    "wt": ["Mid-Range", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "With Machine Gun Category equipped, Sp. Shot Power boosted 18%"
    },
    "name": "Large Beam Machine Gun [Gelgoog Jäger]",
    "type": "Beam"
  }]
}, {
  "name": "Gerbera Tetra",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 1701,
    "md": 291,
    "sd": 291,
    "br": 302,
    "pr": 126,
    "wt": ["Ace Excl.", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Gundam Type\" enemy, Shooting Power boosted 25%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1433,
    "ma": 291,
    "sa": 558,
    "md": 558,
    "sd": 558,
    "br": 428,
    "pr": 0,
    "wt": ["Ace Excl.", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Gundam Type\" enemy, EX Skill DMG Output boosted 20"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 889,
    "ma": 558,
    "sa": 558,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Ace Excl.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "110mm Autocannon",
      "description": "Fire live ammunition from your forearm. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Ace Excl.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, Buff EX Skill Effect up 15%"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 2300,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 126,
    "wt": ["Ace Excl.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Panic Maker",
      "description": "Fire special high-powered rounds from your machine gun.",
      "category": "Beam Shot"
    },
    "name": "Beam Machine Gun [Gerbera Tetra]"
  }]
}, {
  "name": "GM",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 797,
    "md": 287,
    "sd": 287,
    "br": 138,
    "pr": 0,
    "wt": ["Mass P.", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 509,
    "ma": 137,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 190,
    "pr": 0,
    "wt": ["Mass P.", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, reload speed boosted 10%"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 797,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 0,
    "pr": 0,
    "wt": ["Mass P.", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Saber Category equipped, Melee DMG taken reduced 10"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 190,
    "pr": 138,
    "wt": ["Mass P.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Block Stance α",
      "description": "Raise your Melee Defense by 39%",
      "category": "Buff"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 190,
    "pr": 138,
    "wt": ["Mass P.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    }
  }, {
    "part": "range",
    "mark": 4,
    "a": 287,
    "ma": 0,
    "sa": 1011,
    "md": 0,
    "sd": 0,
    "br": 190,
    "pr": 54,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Shooting DMG taken reduced 10"
    },
    "name": "Beam Spray Gun",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 4,
    "a": 287,
    "ma": 0,
    "sa": 0,
    "md": 509,
    "sd": 509,
    "br": 263,
    "pr": 54,
    "wt": ["Mass P.", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Strong Melee DMG taken reduced 10"
    },
    "name": "Shield [GM]"
  }]
}, {
  "name": "GM Command [Space Type]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 137,
    "ma": 137,
    "sa": 1016,
    "md": 137,
    "sd": 373,
    "br": 0,
    "pr": 0,
    "wt": ["Commander", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 511,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 110,
    "pr": 110,
    "wt": ["Commander", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Strong Melee DMG taken reduced 10"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 373,
    "ma": 287,
    "sa": 137,
    "md": 137,
    "sd": 511,
    "br": 110,
    "pr": 110,
    "wt": ["Commander", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Sp. Shot DMG taken reduced 10"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 138,
    "pr": 138,
    "wt": ["Commander", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 138,
    "pr": 138,
    "wt": ["Commander", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Debuff EX Skill Effect up 10%"
    }
  }, {
    "part": "range",
    "mark": 4,
    "a": 137,
    "ma": 0,
    "sa": 1310,
    "md": 0,
    "sd": 0,
    "br": 110,
    "pr": 110,
    "wt": ["Commander", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "All-Rounder Job, Shooting DMG taken reduced 10"
    },
    "name": "Beam Gun [GM Command]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 4,
    "a": 137,
    "ma": 0,
    "sa": 1310,
    "md": 0,
    "sd": 0,
    "br": 110,
    "pr": 110,
    "wt": ["Commander", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Initial EX Skill Charge boosted 10%"
    },
    "name": "Bullpup Machine Gun",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 4,
    "a": 287,
    "ma": 0,
    "sa": 0,
    "md": 287,
    "sd": 798,
    "br": 143,
    "pr": 143,
    "wt": ["Commander", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Archer Hack α",
      "description": "Reduce target Shot Attack by 39%",
      "category": "Debuff"
    },
    "name": "Curved Shield [GM Command]"
  }]
}, {
  "name": "GM Custom",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 287,
    "ma": 138,
    "sa": 902,
    "md": 287,
    "sd": 138,
    "br": 0,
    "pr": 55,
    "wt": ["Commander", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 376,
    "ma": 138,
    "sa": 138,
    "md": 511,
    "sd": 287,
    "br": 0,
    "pr": 194,
    "wt": ["Commander", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Recovery Tool α",
      "description": "Recover 48% of your maximum Armor.",
      "category": "Recovery"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 641,
    "sa": 138,
    "md": 376,
    "sd": 287,
    "br": 0,
    "pr": 0,
    "wt": ["Commander", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, reload speed boosted 10%"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 138,
    "sa": 287,
    "md": 376,
    "sd": 138,
    "br": 138,
    "pr": 194,
    "wt": ["Commander", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill Piercing boosted 15%"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 138,
    "sa": 138,
    "md": 511,
    "sd": 138,
    "br": 138,
    "pr": 194,
    "wt": ["Commander", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    }
  }, {
    "part": "shield",
    "mark": 4,
    "a": 287,
    "ma": 0,
    "sa": 0,
    "md": 641,
    "sd": 287,
    "br": 55,
    "pr": 265,
    "wt": ["Commander", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Sp. Shot DMG taken reduced 10"
    },
    "name": "Curved Shield [GM Custom]"
  }]
}, {
  "name": "GM II",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 797,
    "md": 287,
    "sd": 287,
    "br": 138,
    "pr": 0,
    "wt": ["Mass P.", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 509,
    "ma": 137,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 190,
    "pr": 0,
    "wt": ["Mass P.", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Defender Job, Shooting DMG taken reduced 10"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 797,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 0,
    "pr": 0,
    "wt": ["Mass P.", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Zaku Type\" enemy, Sp. Shot DMG taken reduced 10"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 190,
    "pr": 138,
    "wt": ["Mass P.", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Combat Stance α",
      "description": "Raise your Melee Attack by 39%",
      "category": "Buff"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 190,
    "pr": 138,
    "wt": ["Mass P.", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    }
  }]
}, {
  "name": "GM III",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 287,
    "md": 372,
    "sd": 287,
    "br": 138,
    "pr": 54,
    "wt": ["Mass P.", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 640,
    "ma": 287,
    "sa": 137,
    "md": 287,
    "sd": 287,
    "br": 190,
    "pr": 0,
    "wt": ["Mass P.", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Strong Melee DMG Output boosted 10"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 899,
    "sa": 0,
    "md": 372,
    "sd": 372,
    "br": 0,
    "pr": 0,
    "wt": ["Mass P.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Missile Pod",
      "description": "Fire missiles from pods on your shoulders at multiple foes.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 137,
    "md": 372,
    "sd": 287,
    "br": 190,
    "pr": 138,
    "wt": ["Mass P.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Large Missile Launcher",
      "description": "Use the missile launcher on your leg against multiple enemies.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 137,
    "md": 372,
    "sd": 287,
    "br": 190,
    "pr": 138,
    "wt": ["Mass P.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    }
  }]
}, {
  "name": "GN Archer",
  "attribute": "Speed",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 365,
    "ma": 187,
    "sa": 1278,
    "md": 365,
    "sd": 187,
    "br": 81,
    "pr": 0,
    "wt": ["Transformer", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Recovery Tool α",
      "description": "Recover 48% of your maximum Armor.",
      "category": "Recovery"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 591,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 365,
    "br": 282,
    "pr": 0,
    "wt": ["Transformer", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Supporter Job, Debuff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 365,
    "ma": 943,
    "sa": 187,
    "md": 571,
    "sd": 365,
    "br": 0,
    "pr": 0,
    "wt": ["Transformer", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Barrier Stance β",
      "description": "Raise Ally Shot Defense by 29%",
      "category": "Buff"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 365,
    "ma": 187,
    "sa": 365,
    "md": 571,
    "sd": 187,
    "br": 282,
    "pr": 202,
    "wt": ["Transformer", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Saber Boomerang",
      "description": "Slash with your saber, then hurl it point-first.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 365,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 187,
    "br": 282,
    "pr": 202,
    "wt": ["Transformer", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "GN Missile",
      "description": "Fire guided missiles propelled by GN particles from your back.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "GN-X",
  "attribute": "Technique",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 569,
    "md": 569,
    "sd": 569,
    "br": 0,
    "pr": 200,
    "wt": ["Ace Excl.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "GN Vulcan",
      "description": "Fire the GN Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Beam Shot"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 754,
    "ma": 186,
    "sa": 0,
    "md": 569,
    "sd": 569,
    "br": 0,
    "pr": 280,
    "wt": ["Ace Excl.", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Buff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 363,
    "ma": 569,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 80,
    "pr": 200,
    "wt": ["Ace Excl.", "Mass P."],
    "ex": {
      "type": "EX Skill",
      "name": "GN Claw",
      "description": "Raise your Melee ATK 14%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 186,
    "md": 754,
    "sd": 754,
    "br": 200,
    "pr": 80,
    "wt": ["Ace Excl.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Saber Boomerang",
      "description": "Slash with your saber, then hurl it point-first.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 186,
    "md": 754,
    "sd": 754,
    "br": 80,
    "pr": 200,
    "wt": ["Ace Excl.", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon magazine boosted 14%"
    }
  }, {
    "part": "melee",
    "mark": 3,
    "a": 363,
    "ma": 754,
    "sa": 0,
    "md": 363,
    "sd": 363,
    "br": 200,
    "pr": 280,
    "wt": ["Ace Excl.", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "10% chance of attacks penetrating super armor"
    },
    "name": "GN Beam Saber [GN-X]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 3,
    "a": 363,
    "ma": 0,
    "sa": 754,
    "md": 363,
    "sd": 363,
    "br": 200,
    "pr": 280,
    "wt": ["Ace Excl.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Myriad Snipe",
      "description": "Ready your long rifle, then bathe foes in powerful beams.",
      "category": "Beam Shot"
    },
    "name": "GN Beam Rifle [GN-X / Long Barrel]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 3,
    "a": 363,
    "ma": 0,
    "sa": 754,
    "md": 363,
    "sd": 363,
    "br": 200,
    "pr": 280,
    "wt": ["Ace Excl.", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "Seventh Ray Shot",
      "description": "Bathe foes in high-output beams from your rifle.",
      "category": "Beam Shot"
    },
    "name": "GN Beam Rifle [GN-X]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 3,
    "a": 0,
    "ma": 0,
    "sa": 0,
    "md": 940,
    "sd": 940,
    "br": 80,
    "pr": 371,
    "wt": ["Ace Excl.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Barrier Hack α",
      "description": "Reduce target Shot Defense by 39%",
      "category": "Debuff"
    },
    "name": "GN Shield [GN-X]"
  }]
}, {
  "name": "GN-XIII",
  "attribute": "Speed",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 1089,
    "md": 187,
    "sd": 187,
    "br": 81,
    "pr": 201,
    "wt": ["Mass P.", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Gun Vulcan",
      "description": "Fire the GN Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Beam Shot"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 942,
    "ma": 187,
    "sa": 364,
    "md": 364,
    "sd": 364,
    "br": 0,
    "pr": 281,
    "wt": ["Mass P.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Buff EX Skill Time up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 570,
    "ma": 364,
    "sa": 364,
    "md": 570,
    "sd": 570,
    "br": 0,
    "pr": 0,
    "wt": ["Mass P.", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Screw Fang",
      "description": "Slice with claws on both hands, then unleash a kick. Raise your Melee Attack by 14%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 570,
    "br": 201,
    "pr": 281,
    "wt": ["Mass P.", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Saber Boomerang",
      "description": "Slash with your saber, then hurl it point-first.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 570,
    "br": 201,
    "pr": 281,
    "wt": ["Mass P.", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon magazine boosted 14%"
    }
  }, {
    "part": "melee",
    "mark": 3,
    "a": 570,
    "ma": 1089,
    "sa": 0,
    "md": 0,
    "sd": 187,
    "br": 81,
    "pr": 201,
    "wt": ["Mass P.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Valiant Heart",
      "description": "Thrust a charged sword to cleave through enemies. Lowers hit enemy Gunpla's Physical Resist by 29%.",
      "category": "Debuff"
    },
    "name": "GN Beam Saber [GN-XIII]",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 3,
    "a": 570,
    "ma": 1089,
    "sa": 0,
    "md": 0,
    "sd": 187,
    "br": 81,
    "pr": 201,
    "wt": ["Mass P.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Bright Stinger",
      "description": "Unleash a series of light-speed strikes from your lance. Raise your Melee Defense by 14%.",
      "category": "Physical Melee"
    },
    "name": "GN Lance",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 3,
    "a": 570,
    "ma": 0,
    "sa": 1480,
    "md": 0,
    "sd": 0,
    "br": 81,
    "pr": 281,
    "wt": ["Mass P.", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Sp. Shot DMG Output boosted 15 "
    },
    "name": "GN Bazooka [GN-XIII]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 3,
    "a": 570,
    "ma": 0,
    "sa": 1480,
    "md": 0,
    "sd": 0,
    "br": 81,
    "pr": 281,
    "wt": ["Mass P.", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Myriad Snipe",
      "description": "Ready your long rifle, then bathe foes in powerful beams.",
      "category": "Beam Shot"
    },
    "name": "GN Beam Rifle [GN-XII/Long Barrel]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 3,
    "a": 570,
    "ma": 0,
    "sa": 1480,
    "md": 0,
    "sd": 0,
    "br": 81,
    "pr": 281,
    "wt": ["Mass P.", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Shooting DMG taken reduced 15"
    },
    "name": "GN Beam Rifle [GN-XIII]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 3,
    "a": 570,
    "ma": 0,
    "sa": 1480,
    "md": 0,
    "sd": 0,
    "br": 81,
    "pr": 281,
    "wt": ["Mass P.", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Strong Melee DMG taken reduced 15"
    },
    "name": "GN Lance [Rifle Mode]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 3,
    "a": 570,
    "ma": 0,
    "sa": 0,
    "md": 364,
    "sd": 754,
    "br": 81,
    "pr": 371,
    "wt": ["Mass P.", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Offense Hack α",
      "description": "Reduce target Melee and Shot Defense by 39%",
      "category": "Debuff"
    },
    "name": "GN-Shield [GN-XIII]"
  }]
}, {
  "name": "Gouf",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 287,
    "md": 372,
    "sd": 137,
    "br": 138,
    "pr": 54,
    "wt": ["Close Combat", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "Shock Bringer α",
      "description": "Your attacks stun large foes more easily for a set period.",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 511,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 287,
    "br": 190,
    "pr": 0,
    "wt": ["Close Combat", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"GM Type\" enemy, Melee DMG taken reduced 10"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 137,
    "ma": 1012,
    "sa": 137,
    "md": 511,
    "sd": 137,
    "br": 0,
    "pr": 0,
    "wt": ["Close Combat", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "5-Barrel Finger Vulcan",
      "description": "Launch Vulcan shots from your forearm. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 287,
    "br": 138,
    "pr": 190,
    "wt": ["Close Combat", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "With \"GM Type\" enemy, Shooting DMG taken reduced 10"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 287,
    "br": 190,
    "pr": 138,
    "wt": ["Close Combat", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, magazine boosted 10%"
    }
  }, {
    "part": "melee",
    "mark": 4,
    "a": 137,
    "ma": 1309,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 138,
    "pr": 54,
    "wt": ["Close Combat", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"GM Type\" enemy, Strong Melee DMG Output boosted 10"
    },
    "name": "Heat Saber [Gouf]",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 4,
    "a": 287,
    "ma": 0,
    "sa": 0,
    "md": 797,
    "sd": 287,
    "br": 319,
    "pr": 0,
    "wt": ["Close Combat", "Mass P."],
    "ex": {
      "type": "EX Skill",
      "name": "Block Hack α",
      "description": "Reduce target Melee Defense by 39%",
      "category": "Debuff"
    },
    "name": "Shield [Gouf]"
  }]
}, {
  "name": "Gouf Custom",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 889,
    "md": 889,
    "sd": 889,
    "br": 302,
    "pr": 0,
    "wt": ["Zeon", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 60%, Recover 10 Armor gradually"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1140,
    "ma": 291,
    "sa": 0,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 0,
    "wt": ["Zeon", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, EX Skill CD reduced 15%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 889,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 302,
    "pr": 126,
    "wt": ["Zeon", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Heat Rod",
      "description": "Execute a combo with your whip.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1140,
    "sd": 1140,
    "br": 126,
    "pr": 302,
    "wt": ["Zeon", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Close Shot Attack raised 14%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1140,
    "sd": 1140,
    "br": 302,
    "pr": 126,
    "wt": ["Zeon", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Melee DMG Output boosted 20"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 558,
    "ma": 1140,
    "sa": 0,
    "md": 558,
    "sd": 558,
    "br": 428,
    "pr": 302,
    "wt": ["Zeon", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Job Gauge Increase boosted 13%"
    },
    "name": "Heat Rod [Gouf Custom]",
    "type": "Physical"
  }, {
    "part": "melee",
    "mark": 2,
    "a": 558,
    "ma": 1140,
    "sa": 0,
    "md": 558,
    "sd": 558,
    "br": 428,
    "pr": 302,
    "wt": ["Zeon", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Physical, Strong Melee Power boosted 20%"
    },
    "name": "Heat Sword [Gouf Custom]",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 1140,
    "md": 1990,
    "sd": 1990,
    "br": 1016,
    "pr": 428,
    "wt": ["Zeon", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, magazine boosted 20%"
    },
    "combo": "shield",
    "name": "Gatling Shield",
    "type": "Physical"
  }]
}, {
  "name": "Graze [Ground/Standard]",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 797,
    "md": 287,
    "sd": 287,
    "br": 0,
    "pr": 138,
    "wt": ["Mass P.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Shooting power boosted 18%"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 509,
    "ma": 137,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 0,
    "pr": 190,
    "wt": ["Mass P.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Axe category equipped, Strong Melee power boosted 18%"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 797,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 0,
    "pr": 0,
    "wt": ["Mass P.", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Physical, Melee power boosted 18%"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 138,
    "pr": 190,
    "wt": ["Mass P.", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Mass P.\", EX Skill piercing boosted 16%"
    }
  }, {
    "part": "melee",
    "mark": 4,
    "a": 287,
    "ma": 1011,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 54,
    "pr": 190,
    "wt": ["Mass P.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Brave Axe Combo",
      "description": "Bring down a wild rush of blows with your equipped axe.",
      "category": "Physical Melee"
    },
    "name": "Battle Axe [Graze]",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 4,
    "a": 287,
    "ma": 0,
    "sa": 1011,
    "md": 0,
    "sd": 0,
    "br": 54,
    "pr": 190,
    "wt": ["Mass P.", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "When CPWR is under 200000, EX Skill power boosted 25%"
    },
    "name": "Rifle [Long Barrel/Graze]",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 4,
    "a": 287,
    "ma": 0,
    "sa": 1011,
    "md": 0,
    "sd": 0,
    "br": 54,
    "pr": 190,
    "wt": ["Mass P.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When Phy. RES is under 4000, Enemy Shooting power reduced 25%"
    },
    "name": "Rifle [Short Barrel/Graze]",
    "type": "Physical"
  }]
}, {
  "name": "Guncannon",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 798,
    "md": 137,
    "sd": 137,
    "br": 110,
    "pr": 110,
    "wt": ["Mid-Range", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 640,
    "ma": 137,
    "sa": 287,
    "md": 287,
    "sd": 287,
    "br": 110,
    "pr": 110,
    "wt": ["Mid-Range", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "240mm Cannons",
      "description": "Fire explosive projectiles from the cannon on your shoulder.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 373,
    "ma": 287,
    "sa": 287,
    "md": 373,
    "sd": 373,
    "br": 0,
    "pr": 0,
    "wt": ["Mid-Range", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Zaku Type\" enemy, Sp. Shot DMG Output boosted 10"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 373,
    "br": 143,
    "pr": 143,
    "wt": ["Mid-Range", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Hand Grenade",
      "description": "Throw a hand grenade mounted on your side armor.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 373,
    "br": 142,
    "pr": 142,
    "wt": ["Mid-Range", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, magazine boosted 10%"
    }
  }, {
    "part": "range",
    "mark": 4,
    "a": 373,
    "ma": 0,
    "sa": 1014,
    "md": 0,
    "sd": 0,
    "br": 138,
    "pr": 138,
    "wt": ["Mid-Range", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Myriad Snipe",
      "description": "Ready your long rifle, then bathe foes in powerful beams.",
      "category": "Beam Shot"
    },
    "name": "Beam Rifle [Guncannon]",
    "type": "Beam"
  }]
}, {
  "name": "Gundam",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 2378,
    "md": 796,
    "sd": 796,
    "br": 212,
    "pr": 212,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1602,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 288,
    "pr": 288,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Saber Category equipped, Melee power boosted 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 796,
    "ma": 2378,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Melee Damage taken reduced 35"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 475,
    "pr": 502,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Mid Shot Attack raised 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 502,
    "pr": 475,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Rush",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 796,
    "ma": 3176,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Crimson Stinger",
      "description": "Unleash a storm of blows from your lance. Raise your Melee Defense by 19%.",
      "category": "Beam Melee"
    },
    "name": "Beam Javelin",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 796,
    "ma": 3176,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Melee CRIT rate boosted 30%"
    },
    "name": "Beam Saber [Gundam]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 796,
    "ma": 0,
    "sa": 3176,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Last Shooting",
      "description": "Stand firm and shoot down foes with your arm rifle. Squad recovers 48% of maximum Armor. Raise Shot Attack of your Squad by 29%.",
      "category": "Beam Shot"
    },
    "name": "Beam Rifle [Gundam]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 796,
    "ma": 0,
    "sa": 3176,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Shooting DMG output boosted 35"
    },
    "name": "Hyper Bazooka",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 796,
    "ma": 0,
    "sa": 0,
    "md": 1602,
    "sd": 1602,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Buff EX Skill effect up 22%"
    },
    "name": "Shield [Gundam]"
  }]
}, {
  "name": "Gundam [Pre-Registration Reward]",
  "attribute": "Power",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 570,
    "md": 570,
    "sd": 570,
    "br": 81,
    "pr": 81,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 757,
    "ma": 187,
    "sa": 0,
    "md": 570,
    "sd": 570,
    "br": 138,
    "pr": 138,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Buff EX Skill Effect up 15%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 364,
    "ma": 570,
    "sa": 187,
    "md": 570,
    "sd": 570,
    "br": 81,
    "pr": 81,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon reload speed boosted 15%"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 757,
    "br": 139,
    "pr": 139,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Mid Shot Attack raised 14%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 757,
    "br": 139,
    "pr": 139,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "All-Rounder Job, Vernier Recovery Rate boosted 15%"
    }
  }, {
    "part": "melee",
    "mark": 3,
    "a": 364,
    "ma": 757,
    "sa": 0,
    "md": 364,
    "sd": 364,
    "br": 201,
    "pr": 201,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Job Gauge Increase boosted 13%"
    },
    "name": "Beam Javelin [Pre-Registration Reward]",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 3,
    "a": 364,
    "ma": 757,
    "sa": 0,
    "md": 364,
    "sd": 364,
    "br": 201,
    "pr": 201,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Job Gauge Increase boosted 13%"
    },
    "name": "Beam Saber [Gundam / Pre-Registration Reward]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 3,
    "a": 364,
    "ma": 0,
    "sa": 757,
    "md": 364,
    "sd": 364,
    "br": 201,
    "pr": 201,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Enemy Shooting Power reduced 25%"
    },
    "name": "Beam Rifle [Gundam / Pre-Registration Reward]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 3,
    "a": 364,
    "ma": 0,
    "sa": 757,
    "md": 364,
    "sd": 364,
    "br": 201,
    "pr": 201,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Job Gauge Increase boosted 13%"
    },
    "name": "Hyper Bazooka [Gundam / Pre-Registration Reward]",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 3,
    "a": 0,
    "ma": 0,
    "sa": 0,
    "md": 942,
    "sd": 942,
    "br": 201,
    "pr": 201,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Debuff EX Skill Effect up 15%"
    },
    "name": "Shield [Gundam / Pre-Registration Reward]"
  }]
}, {
  "name": "Gundam AGE Normal",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 893,
    "md": 559,
    "sd": 559,
    "br": 303,
    "pr": 303,
    "wt": ["Mid-Range", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Combat Stance α",
      "description": "Raise your Melee Attack by 39%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 294,
    "md": 559,
    "sd": 559,
    "br": 432,
    "pr": 432,
    "wt": ["Mid-Range", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"For Computers\" enemy, Strong Melee Power boosted 25%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 294,
    "ma": 893,
    "sa": 294,
    "md": 559,
    "sd": 559,
    "br": 432,
    "pr": 432,
    "wt": ["Mid-Range", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 40%, Melee DMG Output boosted 20"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 294,
    "ma": 294,
    "sa": 294,
    "md": 893,
    "sd": 893,
    "br": 432,
    "pr": 432,
    "wt": ["Mid-Range", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Dagger Bites",
      "description": "Rush and grab a foe, then strike with a beam dagger combo. Lowers hit enemy Gunpla's Physical Resist by 29%",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 294,
    "ma": 294,
    "sa": 294,
    "md": 893,
    "sd": 893,
    "br": 432,
    "pr": 432,
    "wt": ["Mid-Range", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, Shooting DMG Output boosted 20"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 559,
    "ma": 0,
    "sa": 1146,
    "md": 0,
    "sd": 0,
    "br": 432,
    "pr": 432,
    "wt": ["Mid-Range", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Initial EX Skill Charge boosted 12%"
    },
    "name": "DODS Rifle",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 294,
    "ma": 0,
    "sa": 0,
    "md": 893,
    "sd": 893,
    "br": 594,
    "pr": 594,
    "wt": ["Mid-Range", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Buff EX Skill Effect up 15%"
    },
    "name": "Shield [AGE]"
  }]
}, {
  "name": "Gundam AGE-1 Titus",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 891,
    "md": 891,
    "sd": 891,
    "br": 127,
    "pr": 127,
    "wt": ["High Firepower", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Protection β",
      "description": "Raise Ally Physical Resist by 39%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1145,
    "ma": 292,
    "sa": 0,
    "md": 891,
    "sd": 891,
    "br": 214,
    "pr": 214,
    "wt": ["High Firepower", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When attack with Physical, Strong Melee Power boosted 25%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 559,
    "ma": 891,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 127,
    "pr": 127,
    "wt": ["High Firepower", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Lariat",
      "description": "Deploy armor on arms and strike with a rigged beam weapon.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 292,
    "md": 1145,
    "sd": 1145,
    "br": 214,
    "pr": 214,
    "wt": ["High Firepower", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Archer Hack β",
      "description": "Reduce Shot Attack of all enemies by 24%",
      "category": "Debuff"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 292,
    "md": 1145,
    "sd": 1145,
    "br": 214,
    "pr": 214,
    "wt": ["High Firepower", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Physical, Melee Power boosted 25%"
    }
  }]
}, {
  "name": "Gundam AGE-2 Normal",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 561,
    "ma": 294,
    "sa": 1440,
    "md": 294,
    "sd": 893,
    "br": 215,
    "pr": 215,
    "wt": ["Transformer", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Shooting DMG taken reduced 20"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 893,
    "ma": 561,
    "sa": 294,
    "md": 561,
    "sd": 1147,
    "br": 215,
    "pr": 215,
    "wt": ["Transformer", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Transformer\", EX Skill CD reduced 15%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 561,
    "ma": 2000,
    "sa": 294,
    "md": 561,
    "sd": 893,
    "br": 0,
    "pr": 0,
    "wt": ["Transformer", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon reload speed boosted 15%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 561,
    "ma": 294,
    "sa": 294,
    "md": 294,
    "sd": 893,
    "br": 352,
    "pr": 352,
    "wt": ["Transformer", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Stream Slash",
      "description": "Unleash a blindingly fast flurry with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 561,
    "ma": 294,
    "sa": 294,
    "md": 294,
    "sd": 893,
    "br": 352,
    "pr": 352,
    "wt": ["Transformer", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 80%, Close Shot Attack raised 14%"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 561,
    "ma": 0,
    "sa": 1440,
    "md": 0,
    "sd": 561,
    "br": 215,
    "pr": 215,
    "wt": ["Transformer", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Transformer\", Initial EX Skill Charge boosted 12%"
    },
    "name": "Hyper DODS Rifle",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 561,
    "ma": 0,
    "sa": 0,
    "md": 561,
    "sd": 1440,
    "br": 352,
    "pr": 352,
    "wt": ["Transformer", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Sp. Shot CRIT Rate boosted 21%"
    },
    "name": "Shield [AGE-2]"
  }]
}, {
  "name": "Gundam Artemis",
  "attribute": "Power",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 2378,
    "md": 796,
    "sd": 796,
    "br": 417,
    "pr": 0,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "CIWS",
      "description": "Fire the close-range defense system in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1601,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 610,
    "pr": 0,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Breast Beam Vulcan",
      "description": "Fire forward with the Beam Vulcan in your chest.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1601,
    "ma": 2378,
    "sa": 383,
    "md": 2781,
    "sd": 2781,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Palma Fiocina Beam Cannon",
      "description": "Turn both palms forward to bathe foes in high-output beams.",
      "category": "Beam Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 610,
    "pr": 417,
    "wt": ["Protag.", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "11% chance to not recoil"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 610,
    "pr": 417,
    "wt": ["Protag.", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Buff EX Skill Effect up 12%"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 796,
    "ma": 3175,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 610,
    "pr": 212,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Melee DMG Output boosted 15"
    },
    "name": "Arondight [Artemis]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 796,
    "ma": 0,
    "sa": 3175,
    "md": 0,
    "sd": 0,
    "br": 610,
    "pr": 212,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Shooting DMG Output boosted 15"
    },
    "name": "Beam Rifle [Artemis]",
    "type": "Beam"
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 796,
    "md": 796,
    "sd": 1181,
    "br": 611,
    "pr": 417,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Satellite Cannon",
      "description": "Receive microwaves from the moon and fire the converged energy.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Gundam Astaroth",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 800,
    "ma": 385,
    "sa": 1985,
    "md": 385,
    "sd": 1185,
    "br": 292,
    "pr": 292,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, reload speed boosted 20%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1185,
    "ma": 800,
    "sa": 385,
    "md": 800,
    "sd": 1610,
    "br": 292,
    "pr": 292,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Blade Category equipped, EX Skill DMG Output boosted 35"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1610,
    "ma": 2795,
    "sa": 385,
    "md": 1610,
    "sd": 3190,
    "br": 479,
    "pr": 479,
    "wt": ["Protag.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Sub-Knuckle",
      "description": "Catch enemies and crush them with the sub-knuckle on your arm. Lowers hit enemy Gunpla's Physical Resist by 29%.",
      "category": "Physical Melee"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 800,
    "ma": 385,
    "sa": 385,
    "md": 385,
    "sd": 1185,
    "br": 479,
    "pr": 479,
    "wt": ["Protag.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Knife Attack",
      "description": "Unleash a flurry of attacks with the knife in your right hand.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 800,
    "ma": 385,
    "sa": 385,
    "md": 385,
    "sd": 1185,
    "br": 479,
    "pr": 479,
    "wt": ["Protag.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Demolition Knife",
      "description": "Attack the enemy with a large, folded close-quarters weapon longer than a mobile suit.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 385,
    "ma": 3594,
    "sa": 0,
    "md": 0,
    "sd": 800,
    "br": 292,
    "pr": 292,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Strong Melee CRIT Rate boosted 30%"
    },
    "name": "Demolition Knife",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 1,
    "a": 800,
    "ma": 0,
    "sa": 1985,
    "md": 0,
    "sd": 800,
    "br": 292,
    "pr": 292,
    "wt": ["For Computers", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "When Attacking with Physical, Sp. Shot CRIT Rate boosted 30%"
    },
    "name": "Anti-Material Rifle",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 1,
    "a": 800,
    "ma": 0,
    "sa": 1985,
    "md": 0,
    "sd": 800,
    "br": 292,
    "pr": 292,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Blade Category equipped, Shooting DMG taken reduced 35"
    },
    "name": "Rifle [Astaroth]",
    "type": "Physical"
  }]
}, {
  "name": "Gundam Bael",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 796,
    "md": 1181,
    "sd": 384,
    "br": 417,
    "pr": 213,
    "wt": ["Close Combat", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Alaya-Vijnana System",
      "description": "Break the Alaya-Vijnana System to temporarily increase your unit's performance. Raise your speed by 20%. Raise your Melee Attack by 39%. Your attacks stun large foes more easily for a set period.",
      "category": "Awakening"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1602,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 611,
    "pr": 0,
    "wt": ["Close Combat", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Buff EX Skill effect up 22%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 384,
    "ma": 3177,
    "sa": 384,
    "md": 1602,
    "sd": 384,
    "br": 0,
    "pr": 0,
    "wt": ["Close Combat", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Dual Sabers category equipped, Melee power boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 417,
    "pr": 611,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Spirit of Agnika",
      "description": "Attack using the two blades said to symbolize Agnika's strength.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 611,
    "pr": 417,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Electromagnetic Cannon",
      "description": "Attack enemies ahead with the electromagnetic cannons in your wing-shaped thrusters.",
      "category": "Physical Shot"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3997,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 213,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), EX Skill power boosted 30%"
    },
    "name": "Bael Sword",
    "type": "Physical"
  }]
}, {
  "name": "Gundam Barbatos [4th Form]",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 1979,
    "md": 384,
    "sd": 1182,
    "br": 420,
    "pr": 213,
    "wt": ["Protag.", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Close Shot Attack raised 20%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1182,
    "ma": 799,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 612,
    "pr": 0,
    "wt": ["Protag.", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Fearless Hurl",
      "description": "Charge mercilessly toward the enemy. Lowers hit enemy Gunpla's Beam Resist by 19%. Lowers hit enemy Gunpla's Physical Resist by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 799,
    "ma": 2786,
    "sa": 384,
    "md": 799,
    "sd": 1182,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Melee Power boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 384,
    "sd": 1182,
    "br": 612,
    "pr": 420,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Menace Shot",
      "description": "Lowers hit Gunpla's Shot Attack & Melee Defense 14%",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 779,
    "ma": 384,
    "sa": 384,
    "md": 384,
    "sd": 1182,
    "br": 612,
    "pr": 420,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Melee DMG Output boosted by 35"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3586,
    "sa": 0,
    "md": 0,
    "sd": 799,
    "br": 420,
    "pr": 213,
    "wt": ["Protag.", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Melee CRIT Rate boosted 30%"
    },
    "name": "Long Sword [Barbatos]",
    "type": "Physical"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3586,
    "sa": 0,
    "md": 0,
    "sd": 799,
    "br": 420,
    "pr": 213,
    "wt": ["For Desert", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Iron Impact",
      "description": "Knock back a foe with a mighty blow from your mace. Raise Shot Defense of your Squad by 39%.",
      "category": "Physical Melee"
    },
    "name": "Mace",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 1,
    "a": 799,
    "ma": 0,
    "sa": 1979,
    "md": 0,
    "sd": 799,
    "br": 612,
    "pr": 213,
    "wt": ["Protag.", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Close Shot Attack raised 20%"
    },
    "name": "Smoothbore Cannon",
    "type": "Physical"
  }]
}, {
  "name": "Gundam Barbatos [6th Form]",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1182,
    "ma": 384,
    "sa": 799,
    "md": 1182,
    "sd": 384,
    "br": 290,
    "pr": 290,
    "wt": ["For Urban Area", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "With Blade Category equipped, EX Skill DMG Output boosted 35"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1606,
    "ma": 384,
    "sa": 384,
    "md": 1606,
    "sd": 799,
    "br": 290,
    "pr": 290,
    "wt": ["For Urban Area", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "Defender Job, Shooting DMG taken reduced 35"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 384,
    "ma": 3181,
    "sa": 384,
    "md": 1606,
    "sd": 384,
    "br": 0,
    "pr": 0,
    "wt": ["For Urban Area", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "170mm Autocannon",
      "description": "Attack enemies ahead with the autocannon on your arm.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 1606,
    "sd": 799,
    "br": 420,
    "pr": 290,
    "wt": ["For Urban Area", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Defender Job, EX Skill Piercing boosted 28%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 1606,
    "sd": 799,
    "br": 290,
    "pr": 420,
    "wt": ["For Urban Area", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Bloody Wrench",
      "description": "Bulldoze attacking enemies with your Wrench Mace, then pulverize them into the ground. Squad recovers 48% of maximum Armor. Raises Melee Attack of your Squad by 29%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 4004,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 420,
    "pr": 420,
    "wt": ["For Urban Area", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Mace Rush",
      "description": "Blow away the enemy with your Wrench Mace, then leap into the air, pulverizing them on the way down. Raises your Melee Defense by 24%.",
      "category": "Physical Melee"
    },
    "name": "Wrench Mace",
    "type": "Physical"
  }]
}, {
  "name": "Gundam Barbatos Lupus",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1356,
    "ma": 553,
    "sa": 966,
    "md": 1356,
    "sd": 553,
    "br": 465,
    "pr": 284,
    "wt": ["Close Combat", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Alaya-Vijnana Limit Breaker",
      "description": "Break the Alaya-Vijnana System's limits to temporarily increase your unit's performance. Raise your speed by 20%. Raise your Melee Attack by 39%. Your Gunpla resists flinching for a set period of time.",
      "category": "Awakening"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1734,
    "ma": 553,
    "sa": 553,
    "md": 1734,
    "sd": 966,
    "br": 673,
    "pr": 0,
    "wt": ["Close Combat", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Protag.\", EX Skill CD reduced 20%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 553,
    "ma": 3312,
    "sa": 553,
    "md": 1734,
    "sd": 553,
    "br": 0,
    "pr": 0,
    "wt": ["Close Combat", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "200mm Arm Rifle",
      "description": "Attack enemies with 200mm rifles equipped to your arms.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 966,
    "ma": 553,
    "sa": 553,
    "md": 1734,
    "sd": 966,
    "br": 465,
    "pr": 673,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Melee CRIT rate boosted 30%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 966,
    "ma": 553,
    "sa": 553,
    "md": 1734,
    "sd": 966,
    "br": 673,
    "pr": 465,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Wolf's Howl",
      "description": "Grind enemies to dust with your twin maces. Raise speed of your Squad by 20%. Raise Melee Attack of your Squad by 29%. Raise Melee Defense of your Squad by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 553,
    "ma": 4110,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 465,
    "pr": 284,
    "wt": ["Close Combat", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Mace Rush",
      "description": "Blow away the enemy with your Sword Mace, then leap into the air, pulverizing them on the way down. Raises your Melee Defense by 24%.",
      "category": "Physical Melee"
    },
    "name": "Sword Mace",
    "type": "Physical"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 553,
    "ma": 4110,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 465,
    "pr": 284,
    "wt": ["Close Combat", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "15% chance of attacks penetrating super armor"
    },
    "name": "Twin Maces",
    "type": "Physical"
  }]
}, {
  "name": "Gundam Deathscythe",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 1179,
    "md": 1179,
    "sd": 1179,
    "br": 0,
    "pr": 416,
    "wt": ["High Mobility", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1601,
    "ma": 382,
    "sa": 0,
    "md": 1179,
    "sd": 1179,
    "br": 0,
    "pr": 609,
    "wt": ["High Mobility", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Machine Cannon",
      "description": "Fire the machine cannon in your chest at foes straight ahead. You can move freely while shooting.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 795,
    "ma": 1179,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 211,
    "pr": 416,
    "wt": ["High Mobility", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "With Axe Category equipped, Mid Shot Attack raised 20%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 382,
    "md": 1601,
    "sd": 1601,
    "br": 416,
    "pr": 211,
    "wt": ["High Mobility", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "With Axe Category equipped, EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 382,
    "md": 1601,
    "sd": 1601,
    "br": 211,
    "pr": 416,
    "wt": ["High Mobility", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Hyper Jammer",
      "description": "Activate a powerful radio wave jammer to hide your position. Raise your Shot Attack by 19%. You become harder to target for a set period of time.",
      "category": "Awakening"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 795,
    "ma": 1601,
    "sa": 0,
    "md": 795,
    "sd": 795,
    "br": 416,
    "pr": 609,
    "wt": ["High Mobility", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Deadly Circle",
      "description": "Brutally swipe at nearby foes with your beam scythe. Lowers hit enemy Gunpla's Beam Resist by 39%",
      "category": "Beam Melee"
    },
    "name": "Beam Scythe",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 0,
    "ma": 0,
    "sa": 0,
    "md": 1974,
    "sd": 1974,
    "br": 211,
    "pr": 805,
    "wt": ["High Mobility", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Buster Shield",
      "description": "Fire your shield toward the enemy.",
      "category": "Beam Melee"
    },
    "name": "Buster Shield"
  }]
}, {
  "name": "Gundam Deathscythe Hell [Endless Waltz Ver.]",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 796,
    "md": 1180,
    "sd": 796,
    "br": 417,
    "pr": 212,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1976,
    "ma": 796,
    "sa": 383,
    "md": 796,
    "sd": 796,
    "br": 610,
    "pr": 0,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Self-Destruct",
      "description": "Self-destruct in an explosion that envelops foes around you. Take 90% damage to max Armor.",
      "category": "Physical Melee"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 796,
    "ma": 2781,
    "sa": 0,
    "md": 1180,
    "sd": 1180,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Hyper Jammer",
      "description": "Activate a powerful radio wave jammer to hide your position. Raise your Shot Attack by 19%. You become harder to target for a set period of time.",
      "category": "Awakening"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 796,
    "br": 610,
    "pr": 417,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Axe Category equipped, Melee CRIT Rate boosted 30%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 796,
    "br": 610,
    "pr": 417,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, EX Skill Piercing boosted 28%"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1180,
    "ma": 3577,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 212,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Deadly Circle",
      "description": "Brutally swipe at nearby foes with your beam scythe. Lowers hit enemy Gunpla's Beam Resist by 39%",
      "category": "Beam Melee"
    },
    "name": "Beam Scissors",
    "type": "Beam"
  }]
}, {
  "name": "Gundam Double X",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1237,
    "ma": 379,
    "sa": 3312,
    "md": 0,
    "sd": 379,
    "br": 464,
    "pr": 208,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"High Firepower\", EX Skill power boosted 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1734,
    "ma": 789,
    "sa": 1098,
    "md": 965,
    "sd": 965,
    "br": 673,
    "pr": 0,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Chest Launcher",
      "description": "Fire the Vulcan in your chest at foes straight ahead. You can move freely while shooting.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 965,
    "ma": 2837,
    "sa": 1423,
    "md": 553,
    "sd": 553,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Melee power boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 965,
    "ma": 789,
    "sa": 720,
    "md": 965,
    "sd": 965,
    "br": 464,
    "pr": 673,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Twist Buster",
      "description": "Lift foes with your saber, then knock them back to earth.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 965,
    "ma": 789,
    "sa": 720,
    "md": 965,
    "sd": 965,
    "br": 673,
    "pr": 464,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Twin Satellite Cannon",
      "description": "Receive microwaves from the moon and converge the energy into dual beam blasts.",
      "category": "Beam Shot"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 553,
    "ma": 3690,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 673,
    "pr": 464,
    "wt": ["Protag.", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Job Gauge increase boosted 17%"
    },
    "name": "Hyper Beam Sword",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 553,
    "ma": 3690,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 673,
    "pr": 464,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Gundam Type\", Initial EX Skill charge boosted 20%"
    },
    "name": "Beam Javelin [DX]",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 553,
    "ma": 3690,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 673,
    "pr": 464,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor is 60% or more, Strong Melee CRIT rate boosted 30%"
    },
    "name": "G-Hammer [DX]",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 1,
    "a": 720,
    "ma": 0,
    "sa": 3690,
    "md": 0,
    "sd": 0,
    "br": 464,
    "pr": 284,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Shooting DMG output boosted by 35"
    },
    "name": "DX Buster Rifle",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 965,
    "ma": 965,
    "sa": 553,
    "md": 965,
    "sd": 965,
    "br": 1082,
    "pr": 0,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Enemy Shooting power reduced 30%"
    },
    "name": "Defense Plate"
  }]
}, {
  "name": "Gundam Dynames",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 384,
    "ma": 384,
    "sa": 3181,
    "md": 384,
    "sd": 1182,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Archer Stance γ",
      "description": "Raise Shot Attack of your Squad by 39%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1606,
    "ma": 384,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 290,
    "pr": 290,
    "wt": ["Long-Range", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Shooting Power boosted 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1182,
    "ma": 799,
    "sa": 384,
    "md": 384,
    "sd": 1606,
    "br": 290,
    "pr": 290,
    "wt": ["Long-Range", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Shot Guidance boosted 17%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 420,
    "pr": 420,
    "wt": ["Long-Range", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "GN Missile",
      "description": "Fire guided missiles propelled by GN Particles at multiple foes.",
      "category": "Beam Shot"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 420,
    "pr": 420,
    "wt": ["Long-Range", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "Trans-Am",
      "description": "Fully release all highly-compressed particles in your GN Drive. Raise your speed by 20%. Raise your Shot Attack by 29%. Raise your Beam Resist by 49%.",
      "category": "Awakening"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 4004,
    "md": 0,
    "sd": 0,
    "br": 290,
    "pr": 290,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon reload speed boosted 20%"
    },
    "name": "GN Sniper Rifle",
    "type": "Beam"
  }]
}, {
  "name": "Gundam Exia",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 796,
    "md": 1181,
    "sd": 384,
    "br": 213,
    "pr": 417,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Recovery Tool α",
      "description": "Recover 48% of your maximum Armor.",
      "category": "Recovery"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1602,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 0,
    "pr": 611,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, EX Skill CD reduced 20%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 384,
    "ma": 3177,
    "sa": 384,
    "md": 1602,
    "sd": 384,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Shear",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 611,
    "pr": 417,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Edge Fling",
      "description": "Throw the twin blades on your legs.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 417,
    "pr": 611,
    "wt": ["Gundam Type", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Trans-Am Raid",
      "description": "Release particles in your GN Drive for a high-speed attack. Raise Melee Attack of your Squad by 39%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1181,
    "ma": 2380,
    "sa": 0,
    "md": 0,
    "sd": 384,
    "br": 417,
    "pr": 213,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Initial EX Skill Charge boosted 20%"
    },
    "name": "GN Sword",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 3177,
    "md": 0,
    "sd": 0,
    "br": 611,
    "pr": 213,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Enemy Strong Melee Power Reduced 30%"
    },
    "name": "GN Sword Rifle Mode",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 796,
    "ma": 0,
    "sa": 0,
    "md": 2380,
    "sd": 796,
    "br": 0,
    "pr": 1028,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, EX Skill DMG output boosted by 35"
    },
    "name": "GN Shield [Exia]"
  }]
}, {
  "name": "Gundam Exia [Beginner Campaign]",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1036,
    "ma": 388,
    "sa": 649,
    "md": 1036,
    "sd": 388,
    "br": 217,
    "pr": 333,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, EX Skill Piercing boosted 22%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1455,
    "ma": 388,
    "sa": 388,
    "md": 1455,
    "sd": 649,
    "br": 0,
    "pr": 514,
    "wt": ["Gundam Type", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Buff EX Skill Time up 15%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 388,
    "ma": 3034,
    "sa": 388,
    "md": 1455,
    "sd": 388,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Arm-Mounted GN Vulcan",
      "description": "Launch rapid-fire GN Vulcan shots from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 649,
    "ma": 388,
    "sa": 388,
    "md": 1455,
    "sd": 649,
    "br": 514,
    "pr": 333,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Melee CRIT Rate boosted 25%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 649,
    "ma": 388,
    "sa": 388,
    "md": 1455,
    "sd": 649,
    "br": 333,
    "pr": 514,
    "wt": ["Gundam Type", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Trans-Am",
      "description": "Fully release all highly-compressed particles in your GN Drive. Raise your speed by 20%. Raise your Shot Attack by 29%. Raise your Beam Resist by 49%.",
      "category": "Awakening"
    }
  }]
}, {
  "name": "Gundam F91",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 2378,
    "md": 796,
    "sd": 796,
    "br": 212,
    "pr": 212,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "MEPE Mode",
      "description": "Release your limiters to unleash your Gunpla's full potential. Raise speed by 20%. Raise your Melee Attack by 19%. Raise your Shot Attack by 29%.",
      "category": "Awakening"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1602,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 288,
    "pr": 288,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Saber Category equipped, EX Skill DMG Output boosted 35"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1602,
    "ma": 2378,
    "sa": 383,
    "md": 2781,
    "sd": 2781,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Bazooka Category equipped, Sp. Shot Power boosted 30%"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 475,
    "pr": 502,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Spinning Saber",
      "description": "Spin both hands to mow down nearby foes with your saber. Lowers hit enemy Gunpla's Melee Defense by 19%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 1180,
    "br": 502,
    "pr": 475,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "V.S.B.R.",
      "description": "Wedge the cannon on your back under your arm to fire projectiles. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 796,
    "ma": 3176,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Melee DMG Output boosted 35"
    },
    "name": "Beam Saber [F91]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 796,
    "ma": 0,
    "sa": 3176,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Saber Category equipped, EX Skill Power boosted 30%"
    },
    "name": "Beam Launcher [F91]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 796,
    "ma": 0,
    "sa": 3176,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 417,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Saber Category equipped, Initial EX Skill Charge boosted 20%"
    },
    "name": "Beam Rifle [F91]",
    "type": "Beam"
  }]
}, {
  "name": "Gundam GP01 [Zephyranthes]",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1605,
    "ma": 384,
    "sa": 1181,
    "md": 797,
    "sd": 797,
    "br": 418,
    "pr": 0,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 2382,
    "ma": 384,
    "sa": 384,
    "md": 797,
    "sd": 797,
    "br": 611,
    "pr": 0,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Combat Hack β",
      "description": "Reduce Melee Attack of all enemies by 24%",
      "category": "Debuff"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1181,
    "ma": 1181,
    "sa": 384,
    "md": 1181,
    "sd": 1181,
    "br": 213,
    "pr": 0,
    "wt": ["Protag.", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon reload speed boosted 20%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 1181,
    "sd": 1181,
    "br": 213,
    "pr": 611,
    "wt": ["Protag.", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "Defender Job, EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 1181,
    "sd": 1181,
    "br": 611,
    "pr": 213,
    "wt": ["Protag.", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "Battlecry",
      "description": "Charge into the fray solo, attacking with your saber. Squad recovers 48% of maximum Armor. Raise Melee Defense of your Squad by 29%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 1605,
    "md": 384,
    "sd": 384,
    "br": 611,
    "pr": 418,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Enemy Shooting Power reduced 30%"
    },
    "name": "Beam Rifle [GP01]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 0,
    "md": 1181,
    "sd": 1181,
    "br": 1029,
    "pr": 0,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Offense Up β",
      "description": "Raise Ally Melee and Shot Attack by 29%",
      "category": "Buff"
    },
    "name": "Shield [GP01]"
  }]
}, {
  "name": "Gundam GP01Fb [Zephyranthes Fb / Beginner Campaign]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 648,
    "ma": 388,
    "sa": 2268,
    "md": 648,
    "sd": 648,
    "br": 332,
    "pr": 0,
    "wt": ["High Firepower", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1454,
    "ma": 388,
    "sa": 388,
    "md": 1036,
    "sd": 1036,
    "br": 514,
    "pr": 0,
    "wt": ["High Firepower", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Combat Stance γ",
      "description": "Raise Melee Attack of your Squad by 39%",
      "category": "Buff"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 648,
    "ma": 2268,
    "sa": 388,
    "md": 1036,
    "sd": 1036,
    "br": 0,
    "pr": 0,
    "wt": ["High Firepower", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Enemy Melee Power reduced 25%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 648,
    "ma": 388,
    "sa": 388,
    "md": 1036,
    "sd": 1036,
    "br": 514,
    "pr": 332,
    "wt": ["High Firepower", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"High Firepower\", Sp. Shot Power boosted 25%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 648,
    "ma": 388,
    "sa": 388,
    "md": 1036,
    "sd": 1036,
    "br": 514,
    "pr": 332,
    "wt": ["High Firepower", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Universal Boost Pod",
      "description": "Transform your propeller-tank-integrated vernier unit at will to boost mobility. Raise speed by 20%. Raise your speed by 20%. Raise your Melee Attack by 19%.",
      "category": "Awakening"
    }
  }]
}, {
  "name": "Gundam GP01Fb [Zephyranthes Fb]",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 2377,
    "md": 795,
    "sd": 795,
    "br": 416,
    "pr": 0,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1601,
    "ma": 382,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 609,
    "pr": 0,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Combat Stance γ",
      "description": "Raise Melee Attack of your Squad by 39%",
      "category": "Buff"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 795,
    "ma": 2377,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Enemy Melee Power reduced 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 609,
    "pr": 416,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 795,
    "ma": 382,
    "sa": 382,
    "md": 1179,
    "sd": 1179,
    "br": 609,
    "pr": 416,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Universal Boost Pod",
      "description": "Transform your propeller-tank-integrated vernier unit at will to boost mobility. Raise speed by 20%. Raise your speed by 20%. Raise your Melee Attack by 19%.",
      "category": "Awakening"
    }
  }]
}, {
  "name": "Gundam GP02A [Physalis]",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1605,
    "ma": 384,
    "sa": 1181,
    "md": 797,
    "sd": 797,
    "br": 418,
    "pr": 0,
    "wt": ["Zeon", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 2382,
    "ma": 384,
    "sa": 384,
    "md": 797,
    "sd": 797,
    "br": 611,
    "pr": 0,
    "wt": ["Zeon", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "11% chance to survive a fatal blow"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1181,
    "ma": 1181,
    "sa": 384,
    "md": 1181,
    "sd": 1181,
    "br": 213,
    "pr": 0,
    "wt": ["Zeon", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, reload speed boosted 20%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 1181,
    "sd": 1181,
    "br": 213,
    "pr": 611,
    "wt": ["Zeon", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Twist Buster",
      "description": "Lift foes with your saber, then knock them back to earth.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 1181,
    "sd": 1181,
    "br": 611,
    "pr": 213,
    "wt": ["Zeon", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "With Bazooka Category equipped, Debuff EX Skill Effect up 22%"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 3997,
    "md": 0,
    "sd": 0,
    "br": 213,
    "pr": 417,
    "wt": ["Zeon", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Atomic Bazooka",
      "description": "Fire a nuclear warhead from your bazooka.",
      "category": "Physical Shot"
    },
    "name": "Atomic Bazooka",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 0,
    "md": 1181,
    "sd": 1181,
    "br": 1029,
    "pr": 0,
    "wt": ["Zeon", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, magazine boosted 20%"
    },
    "name": "Radiator Shield"
  }]
}, {
  "name": "Gundam GP03 [Stamen]",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 796,
    "md": 1180,
    "sd": 796,
    "br": 212,
    "pr": 417,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), EX Skill Piercing boosted 28%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1976,
    "ma": 796,
    "sa": 383,
    "md": 796,
    "sd": 796,
    "br": 0,
    "pr": 610,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Mega-Beam Cannon (Dendrobium)",
      "description": "Summon the armed base Orchis, which fires a beam from its 90m-long turret.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 796,
    "ma": 2781,
    "sa": 0,
    "md": 1180,
    "sd": 1180,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Strong Melee CRIT Rate boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 796,
    "br": 417,
    "pr": 610,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Shooting CRIT Rate boosted 30%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 796,
    "br": 417,
    "pr": 610,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Rapid Thrust",
      "description": "Unleash a blindingly fast flurry with sabers in each hand.",
      "category": "Physical Melee"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 1180,
    "ma": 0,
    "sa": 2378,
    "md": 0,
    "sd": 0,
    "br": 212,
    "pr": 610,
    "wt": ["Protag.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Dual Cascade",
      "description": "Hold bazookas in both hands and fire high-power rounds.",
      "category": "Physical Shot"
    },
    "name": "Folding Bazooka",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1180,
    "ma": 0,
    "sa": 0,
    "md": 1601,
    "sd": 796,
    "br": 212,
    "pr": 805,
    "wt": ["Protag.", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Shooting DMG taken reduced 35"
    },
    "name": "Folding Shield"
  }]
}, {
  "name": "Gundam Gusion",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 1144,
    "ma": 292,
    "sa": 891,
    "md": 558,
    "sd": 558,
    "br": 0,
    "pr": 302,
    "wt": ["Heavy Armor", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1702,
    "ma": 292,
    "sa": 292,
    "md": 558,
    "sd": 558,
    "br": 0,
    "pr": 430,
    "wt": ["Heavy Armor", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Buster Anchor",
      "description": "Demolish foes from point-blank range with a quad 400mm cannon.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 891,
    "ma": 891,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 0,
    "pr": 127,
    "wt": ["Heavy Armor", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Gemini Satellite",
      "description": "Generate an energy bit to provide automatic support fire. You can move freely while this is active.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 430,
    "pr": 127,
    "wt": ["Heavy Armor", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Hand Grenade",
      "description": "Throw a hand grenade mounted on your side armor.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 127,
    "pr": 430,
    "wt": ["Heavy Armor", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Gusion Hammer",
      "description": "Brandish the hammer on your back in a flurry attack.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 891,
    "ma": 1144,
    "sa": 0,
    "md": 292,
    "sd": 292,
    "br": 302,
    "pr": 430,
    "wt": ["Heavy Armor", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Spinning Rave",
      "description": "Ready your axe, then spin to attack nearby foes. Lowers hit enemy Gunpla's Shot Attack by 19%.",
      "category": "Physical Melee"
    },
    "name": "Gusion Hammer",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 2,
    "a": 891,
    "ma": 0,
    "sa": 1144,
    "md": 292,
    "sd": 292,
    "br": 302,
    "pr": 430,
    "wt": ["Heavy Armor", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Defender Job, Enemy Shooting Power reduced 25%"
    },
    "name": "Submachine Gun",
    "type": "Physical"
  }]
}, {
  "name": "Gundam Gusion Rebake",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 795,
    "ma": 384,
    "sa": 1179,
    "md": 1179,
    "sd": 1179,
    "br": 416,
    "pr": 0,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, magazine boosted 20%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1601,
    "ma": 384,
    "sa": 0,
    "md": 1179,
    "sd": 1179,
    "br": 609,
    "pr": 0,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "With Axe Category equipped, Shooting DMG taken reduced 35"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 795,
    "ma": 1179,
    "sa": 384,
    "md": 1179,
    "sd": 1179,
    "br": 416,
    "pr": 211,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "Defender Job, Melee DMG taken reduced 35"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 795,
    "ma": 384,
    "sa": 384,
    "md": 1601,
    "sd": 1601,
    "br": 211,
    "pr": 416,
    "wt": ["Heavy Armor", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Halberd",
      "description": "Unleash a barrage of attacks with the halberd in your right hand. Raises your Melee Attack by 24%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 795,
    "ma": 384,
    "sa": 384,
    "md": 1601,
    "sd": 1601,
    "br": 416,
    "pr": 211,
    "wt": ["Heavy Armor", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Four-Arm Combat",
      "description": "Engage in close-quarters combat using your sub-arms and halberd. Squad recovers 48% of maximum Armor. Raises Melee Defense of your Squad by 29%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 795,
    "ma": 1601,
    "sa": 0,
    "md": 795,
    "sd": 795,
    "br": 609,
    "pr": 416,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "Defender Job, Job Gauge Increase boosted 17%"
    },
    "name": "Halberd",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 1,
    "a": 795,
    "ma": 0,
    "sa": 1601,
    "md": 795,
    "sd": 795,
    "br": 609,
    "pr": 416,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Shooting DMG taken reduced 35"
    },
    "name": "120mm Long-Range Rifle",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 0,
    "ma": 0,
    "sa": 0,
    "md": 1974,
    "sd": 1974,
    "br": 805,
    "pr": 211,
    "wt": ["Heavy Armor", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Halberd Throw",
      "description": "Throw the halberd suspended from your shield at an enemy directly ahead.",
      "category": "Physical Melee"
    },
    "name": "Shield [Gusion Rebake]"
  }]
}, {
  "name": "Gundam Heavyarms",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 1702,
    "md": 292,
    "sd": 292,
    "br": 213,
    "pr": 213,
    "wt": ["High Firepower", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon magazine boosted 20%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1435,
    "ma": 292,
    "sa": 558,
    "md": 558,
    "sd": 558,
    "br": 213,
    "pr": 213,
    "wt": ["High Firepower", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Chest-Mounted Gatling & Machine Cannons",
      "description": "Fire the Gatling and machine cannons in your chest.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 891,
    "ma": 558,
    "sa": 558,
    "md": 891,
    "sd": 891,
    "br": 0,
    "pr": 0,
    "wt": ["High Firepower", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Aerial Spin",
      "description": "Launch an acrobatic blow with the knife on your forearm. Lowers hit enemy Gunpla's Melee Attack by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 558,
    "sd": 891,
    "br": 351,
    "pr": 351,
    "wt": ["High Firepower", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Long Shot Attack raised 14%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 558,
    "sd": 891,
    "br": 351,
    "pr": 351,
    "wt": ["High Firepower", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Gatling Gun",
      "description": "Fire the Gatling gun suspended on your back. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 1702,
    "ma": 0,
    "sa": 2302,
    "md": 558,
    "sd": 1144,
    "br": 624,
    "pr": 624,
    "wt": ["High Firepower", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon magazine boosted 20%"
    },
    "combo": "shield",
    "name": "Beam Gatling Gun [with Shield]",
    "type": "Beam"
  }]
}, {
  "name": "Gundam Kyrios",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 561,
    "ma": 294,
    "sa": 1440,
    "md": 294,
    "sd": 893,
    "br": 215,
    "pr": 215,
    "wt": ["Transformer", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Machine Gun Category equipped, Enemy Shooting Power reduced 25%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 893,
    "ma": 561,
    "sa": 294,
    "md": 561,
    "sd": 1147,
    "br": 215,
    "pr": 215,
    "wt": ["Transformer", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 80%, 14% chance to survive a fatal blow"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 561,
    "ma": 2000,
    "sa": 294,
    "md": 561,
    "sd": 893,
    "br": 0,
    "pr": 0,
    "wt": ["Transformer", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), EX Skill DMG Output boosted 20"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 561,
    "ma": 294,
    "sa": 294,
    "md": 294,
    "sd": 893,
    "br": 352,
    "pr": 352,
    "wt": ["Transformer", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Saber Boomerang",
      "description": "Slash with your saber, then hurl it point-first.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 561,
    "ma": 294,
    "sa": 294,
    "md": 294,
    "sd": 893,
    "br": 352,
    "pr": 352,
    "wt": ["Transformer", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Trans-Am",
      "description": "Fully release all highly-compressed particles in your GN Drive. Raise your speed by 20%. Raise your Shot Attack by 29%. Raise your Beam Resist by 49%.",
      "category": "Awakening"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 561,
    "ma": 0,
    "sa": 1440,
    "md": 0,
    "sd": 561,
    "br": 215,
    "pr": 215,
    "wt": ["Transformer", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon reload speed boosted 15%"
    },
    "name": "GN Beam Submachine Gun",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 561,
    "ma": 0,
    "sa": 0,
    "md": 561,
    "sd": 1440,
    "br": 352,
    "pr": 352,
    "wt": ["Transformer", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Claw Mode",
      "description": "Change the tip of your shield into a claw shape, and catch and crush enemies. Lowers hit enemy Gunpla's Physical Resist by 29%.",
      "category": "Physical Melee"
    },
    "name": "GN Shield [Kyrios]"
  }]
}, {
  "name": "Gundam Legilis",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 2380,
    "md": 384,
    "sd": 384,
    "br": 213,
    "pr": 417,
    "wt": ["For Space", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Projectile Speed boosted 15%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1977,
    "ma": 384,
    "sa": 796,
    "md": 796,
    "sd": 796,
    "br": 0,
    "pr": 611,
    "wt": ["For Space", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Buster Beam",
      "description": "Bathe foes in high-output beams from your chest Beam Cannon.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1181,
    "ma": 796,
    "sa": 796,
    "md": 1181,
    "sd": 1181,
    "br": 0,
    "pr": 0,
    "wt": ["For Space", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Vulcan",
      "description": "Launch rapid-fire Beam Vulcan shots from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1181,
    "br": 417,
    "pr": 611,
    "wt": ["For Space", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Saber Category equipped, EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1181,
    "br": 417,
    "pr": 611,
    "wt": ["For Space", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Legilis Cannon",
      "description": "Launch beam weapon shots from your tail.",
      "category": "Beam Shot"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 3177,
    "md": 0,
    "sd": 0,
    "br": 213,
    "pr": 611,
    "wt": ["For Space", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Initial EX Skill Charge boosted 20%"
    },
    "name": "Legilis Rifle",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 0,
    "md": 796,
    "sd": 1602,
    "br": 213,
    "pr": 806,
    "wt": ["For Space", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Legilis Bits",
      "description": "Launch Legilis Bits from your shield, hitting an enemy directly ahead with clusters of energy.",
      "category": "Beam Shot"
    },
    "name": "Shield [Legilis]"
  }]
}, {
  "name": "Gundam Maxter",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 558,
    "md": 889,
    "sd": 291,
    "br": 126,
    "pr": 302,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Out Fighter Job, EX Skill piercing boosted 22%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1142,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 0,
    "pr": 428,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Hyper Mode",
      "description": "Enter Hyper Mode for enhanced combat prowess. Raise speed by 20%. Raise your Melee Attack by 19%. Raise your Shot Attack by 19%.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 291,
    "ma": 2300,
    "sa": 291,
    "md": 1142,
    "sd": 291,
    "br": 0,
    "pr": 0,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Cyclone/Burning Machine Gun Punch",
      "description": "Unleash a tornado with your left fist and do up to ten rapid-fire punches with your right.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 428,
    "pr": 302,
    "wt": ["Mobile Fighter", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Gigantic Magnum",
      "description": "Fire the twin pistols on your waist.",
      "category": "Beam Shot"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 302,
    "pr": 428,
    "wt": ["Mobile Fighter", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), 13% chance to not recoil"
    }
  }]
}, {
  "name": "Gundam Mk-II [A.E.U.G. Design]",
  "attribute": "Power",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 365,
    "ma": 188,
    "sa": 944,
    "md": 188,
    "sd": 573,
    "br": 139,
    "pr": 139,
    "wt": ["Gundam Type", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Hack α",
      "description": "Reduce target Beam Resist by 69%",
      "category": "Debuff"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 573,
    "ma": 365,
    "sa": 188,
    "md": 365,
    "sd": 758,
    "br": 139,
    "pr": 139,
    "wt": ["Gundam Type", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Debuff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 365,
    "ma": 1280,
    "sa": 188,
    "md": 365,
    "sd": 573,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Strong Melee CRIT Rate boosted 14%"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 365,
    "ma": 188,
    "sa": 188,
    "md": 188,
    "sd": 573,
    "br": 210,
    "pr": 210,
    "wt": ["Gundam Type", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Hate Up",
      "description": "You become easier to target for a set period of time.",
      "category": "Buff"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 365,
    "ma": 188,
    "sa": 188,
    "md": 188,
    "sd": 573,
    "br": 210,
    "pr": 210,
    "wt": ["Gundam Type", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Rush",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 3,
    "a": 188,
    "ma": 1665,
    "sa": 0,
    "md": 0,
    "sd": 365,
    "br": 139,
    "pr": 139,
    "wt": ["Gundam Type", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Cross Wave",
      "description": "Slash to create shockwaves that cleave through enemies.",
      "category": "Beam Melee"
    },
    "name": "Beam Saber [Mk-II]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 3,
    "a": 365,
    "ma": 0,
    "sa": 944,
    "md": 0,
    "sd": 365,
    "br": 139,
    "pr": 139,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Sp. Shot CRIT Rate boosted 14%"
    },
    "name": "Beam Rifle [Mk-II]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 3,
    "a": 365,
    "ma": 0,
    "sa": 944,
    "md": 0,
    "sd": 365,
    "br": 139,
    "pr": 139,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Dual Wave",
      "description": "Hold bazookas in both hands and fire high-power rounds.",
      "category": "Physical Shot"
    },
    "name": "Hyper Bazooka [Mk-II]",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 3,
    "a": 365,
    "ma": 0,
    "sa": 0,
    "md": 365,
    "sd": 944,
    "br": 210,
    "pr": 210,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Missile Launcher",
      "description": "Shoot firearms stored in your shield. You can move while firing.",
      "category": "Physical Shot"
    },
    "name": "Shield [Mk-II / A.E.U.G. Design]"
  }]
}, {
  "name": "Gundam Mk-II [Titans Design]",
  "attribute": "Speed",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 942,
    "md": 187,
    "sd": 570,
    "br": 201,
    "pr": 81,
    "wt": ["Gundam Type", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Protection Hack α",
      "description": "Reduce target Physical Resist by 69%",
      "category": "Debuff"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 570,
    "ma": 365,
    "sa": 187,
    "md": 364,
    "sd": 757,
    "br": 281,
    "pr": 0,
    "wt": ["Gundam Type", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Buff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 364,
    "ma": 1277,
    "sa": 187,
    "md": 364,
    "sd": 570,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Strong Melee CRIT Rate boosted 14%"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 187,
    "sd": 570,
    "br": 281,
    "pr": 201,
    "wt": ["Gundam Type", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Hate Down",
      "description": "You become harder to target for a set period of time.",
      "category": "Buff"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 187,
    "sd": 570,
    "br": 281,
    "pr": 201,
    "wt": ["Gundam Type", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Rush",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "shield",
    "mark": 3,
    "a": 364,
    "ma": 0,
    "sa": 0,
    "md": 364,
    "sd": 942,
    "br": 374,
    "pr": 81,
    "wt": ["Gundam Type", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Missile Launcher",
      "description": "Shoot firearms stored in your shield. You can move while firing.",
      "category": "Physical Shot"
    },
    "name": "Shield [Mk-II / Titans Design]"
  }]
}, {
  "name": "Gundam Nadleeh",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 1698,
    "md": 558,
    "sd": 558,
    "br": 0,
    "pr": 302,
    "wt": ["For Space", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Shooting CRIT Rate boosted 17%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1140,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 428,
    "wt": ["For Space", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Trial System",
      "description": "Activate Trial System and stop all Gunpla movement within vicinity for a fixed period of time.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 1698,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["For Space", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Melee Power boosted 25%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 302,
    "pr": 428,
    "wt": ["For Space", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Shot Spread reduced 15%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 302,
    "pr": 428,
    "wt": ["For Space", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Shooting Power boosted 25%"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 558,
    "ma": 2297,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 126,
    "pr": 428,
    "wt": ["For Space", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Enemy Melee Power reduced 25%"
    },
    "name": "GN Beam Saber [Nadleeh]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 2297,
    "md": 0,
    "sd": 0,
    "br": 126,
    "pr": 426,
    "wt": ["For Space", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Shooting DMG Output boosted 20"
    },
    "name": "GN Beam Rifle [Nadleeh]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 0,
    "md": 1140,
    "sd": 1140,
    "br": 126,
    "pr": 588,
    "wt": ["For Space", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Debuff EX Skill Time up 16%"
    },
    "name": "GN Shield [Nadleeh]"
  }]
}, {
  "name": "Gundam NT-1",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 796,
    "md": 1180,
    "sd": 796,
    "br": 417,
    "pr": 212,
    "wt": ["Close Combat", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1976,
    "ma": 796,
    "sa": 383,
    "md": 796,
    "sd": 796,
    "br": 610,
    "pr": 0,
    "wt": ["Close Combat", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Defense Up β",
      "description": "Raise Ally Melee and Shot Defense by 29%.",
      "category": "Buff"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 796,
    "ma": 2781,
    "sa": 0,
    "md": 1180,
    "sd": 1180,
    "br": 0,
    "pr": 0,
    "wt": ["Close Combat", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "90mm Gatling Cannon",
      "description": "Rapidly fire rounds from your forearm Gatling Cannon. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 796,
    "br": 610,
    "pr": 417,
    "wt": ["Close Combat", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Melee DMG taken reduced 35"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 796,
    "br": 610,
    "pr": 417,
    "wt": ["Close Combat", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Rapid Thrust",
      "description": "Unleash a blindingly fast flurry with sabers in each hand.",
      "category": "Physical Melee"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 1180,
    "ma": 0,
    "sa": 2378,
    "md": 0,
    "sd": 0,
    "br": 610,
    "pr": 212,
    "wt": ["Close Combat", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Seventh Tri-Shot",
      "description": "Bathe foes in triple beams from your rifle.",
      "category": "Beam Shot"
    },
    "name": "Beam Rifle [NT-1]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1180,
    "ma": 0,
    "sa": 0,
    "md": 1601,
    "sd": 796,
    "br": 805,
    "pr": 212,
    "wt": ["Close Combat", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Defense Up α",
      "description": "Raise your Melee and Shot Defense by 39%.",
      "category": "Buff"
    },
    "name": "Shield [NT-1]"
  }]
}, {
  "name": "Gundam NT-1 [Chobham Armor]",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 891,
    "md": 891,
    "sd": 558,
    "br": 127,
    "pr": 302,
    "wt": ["For Base", "Heavy Armor"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1435,
    "ma": 292,
    "sa": 292,
    "md": 558,
    "sd": 558,
    "br": 0,
    "pr": 430,
    "wt": ["Heavy Armor", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Recovery Tool β",
      "description": "Ally recovers 38% of maximum Armor.",
      "category": "Recovery"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 891,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 0,
    "pr": 127,
    "wt": ["Heavy Armor", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Enemy Sp. Shot Power reduced 25%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 1144,
    "sd": 292,
    "br": 127,
    "pr": 430,
    "wt": ["Heavy Armor", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Enemy Melee Power reduced 25%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 891,
    "sd": 558,
    "br": 127,
    "pr": 430,
    "wt": ["Heavy Armor", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, 13% chance to not recoil"
    }
  }]
}, {
  "name": "Gundam Rose",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 1436,
    "md": 292,
    "sd": 891,
    "br": 303,
    "pr": 127,
    "wt": ["Mobile Fighter", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Long Shot Attack raised 14%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 891,
    "ma": 559,
    "sa": 292,
    "md": 559,
    "sd": 1144,
    "br": 430,
    "pr": 0,
    "wt": ["Mobile Fighter", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Hyper Mode",
      "description": "Enter Hyper Mode for enhanced combat prowess. Raise speed by 20%. Raise your Melee Attack by 19%. Raise your Shot Attack by 19%.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 1144,
    "ma": 1994,
    "sa": 292,
    "md": 1144,
    "sd": 2304,
    "br": 592,
    "pr": 127,
    "wt": ["Mobile Fighter", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Rose Bits",
      "description": "Launch the Rose Bits to strike foes in all directions. You can move freely while this is active.",
      "category": "Beam Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 292,
    "md": 292,
    "sd": 891,
    "br": 430,
    "pr": 303,
    "wt": ["Mobile Fighter", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Chevalier Saber",
      "description": "Unleash a thrusting attack with the saber at your waist.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 292,
    "md": 292,
    "sd": 891,
    "br": 430,
    "pr": 303,
    "wt": ["Mobile Fighter", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Saber Category equipped, Buff EX Skill Time up 15%"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 292,
    "ma": 2594,
    "sa": 0,
    "md": 0,
    "sd": 559,
    "br": 303,
    "pr": 127,
    "wt": ["Mobile Fighter", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Job Gauge Increase boosted 13%"
    },
    "name": "Chevalier Saber",
    "type": "Physical"
  }]
}, {
  "name": "Gundam Rose [ALT]",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 1436,
    "md": 292,
    "sd": 891,
    "br": 303,
    "pr": 127,
    "wt": ["Mobile Fighter", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 891,
    "ma": 559,
    "sa": 292,
    "md": 559,
    "sd": 1144,
    "br": 430,
    "pr": 0,
    "wt": ["Mobile Fighter", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), EX Skill CD reduced 15%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 1144,
    "ma": 1994,
    "sa": 292,
    "md": 1144,
    "sd": 2304,
    "br": 592,
    "pr": 127,
    "wt": ["Mobile Fighter", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Rose Screamer",
      "description": "Deploy the Rose Bits to enclose foes in an electrified space. Stuns enemies for a set period of time.",
      "category": "Beam Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 292,
    "md": 292,
    "sd": 891,
    "br": 430,
    "pr": 303,
    "wt": ["Mobile Fighter", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Chevalier Saber",
      "description": "Unleash a thrusting attack with the saber at your waist.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 292,
    "md": 292,
    "sd": 891,
    "br": 430,
    "pr": 303,
    "wt": ["Mobile Fighter", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Saber Category equipped, Buff EX Skill Time up 15%"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 292,
    "ma": 2594,
    "sa": 0,
    "md": 0,
    "sd": 559,
    "br": 303,
    "pr": 127,
    "wt": ["Mobile Fighter", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Job Gauge Increase boosted 13%"
    },
    "name": "Chevalier Saber [ALT]",
    "type": "Physical"
  }]
}, {
  "name": "Gundam Sandrock [Promotional Code]",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 570,
    "ma": 187,
    "sa": 570,
    "md": 570,
    "sd": 364,
    "br": 139,
    "pr": 139,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Defender\", EX Skill Piercing Boosted 6%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 942,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 364,
    "br": 139,
    "pr": 139,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "Homing Missile",
      "description": "Launch homing missiles mounted on both your shoulders.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 364,
    "ma": 570,
    "sa": 187,
    "md": 570,
    "sd": 570,
    "br": 29,
    "pr": 29,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 70%, Enemy Sp. Shot Power reduced 2%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 187,
    "br": 201,
    "pr": 201,
    "wt": ["Heavy Armor", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Machine Gun Category equipped, Enemy Strong Melee Power Reduced 2%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 570,
    "sd": 364,
    "br": 201,
    "pr": 201,
    "wt": ["Heavy Armor", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Cross Crusher",
      "description": "With shield, backpack, and shotels equipped onto arms, any enemy grabbed is crushed. Lowers hit enemy Gunpla's Physical Resist by 20%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 570,
    "ma": 0,
    "sa": 1090,
    "md": 364,
    "sd": 0,
    "br": 201,
    "pr": 201,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Sp. Shot DMG taken reduced 3"
    },
    "name": "Beam Machine Gun [Promotional Code]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 570,
    "ma": 0,
    "sa": 0,
    "md": 942,
    "sd": 364,
    "br": 209,
    "pr": 209,
    "wt": ["Heavy Armor", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill Recovery boosted 5%"
    },
    "name": "Shield [Gundam Sandrock / Promotional Code]"
  }]
}, {
  "name": "Gundam Throne Drei",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 1701,
    "md": 291,
    "sd": 291,
    "br": 302,
    "pr": 126,
    "wt": ["Support Type", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Mid Shot Attack raised 14%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1433,
    "ma": 291,
    "sa": 558,
    "md": 558,
    "sd": 558,
    "br": 428,
    "pr": 0,
    "wt": ["Support Type", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Support Type\", EX Skill DMG taken reduced 25"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 1701,
    "ma": 558,
    "sa": 558,
    "md": 1433,
    "sd": 1992,
    "br": 590,
    "pr": 126,
    "wt": ["Support Type", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "GN Shield Pod",
      "description": "Launch GN Missiles from your shield. You can move while firing.",
      "category": "Beam Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Support Type", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "Supporter Job, EX Skill CD reduced 15%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Support Type", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "GN Stealth Field",
      "description": "Release a massive wave of GN particles from your two back units. Support allies over a wide area. Raise Ally Melee and Shot Defense by 19%. Raise Ally Beam and Physical Resist by 29%.",
      "category": "Buff"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 889,
    "ma": 1701,
    "sa": 0,
    "md": 0,
    "sd": 291,
    "br": 302,
    "pr": 126,
    "wt": ["Support Type", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Supporter Job, Melee DMG Output boosted 20"
    },
    "name": "GN Beam Saber [Throne Drei]",
    "type": "Beam"
  }]
}, {
  "name": "Gundam TR-1 [Advanced Hazel w/ Optical Sensor Unit]",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 1144,
    "ma": 292,
    "sa": 891,
    "md": 558,
    "sd": 558,
    "br": 302,
    "pr": 0,
    "wt": ["Long-Range", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Shot Spread reduced 15%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1702,
    "ma": 292,
    "sa": 292,
    "md": 558,
    "sd": 558,
    "br": 430,
    "pr": 0,
    "wt": ["Long-Range", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Shoulder Grenade Launcher",
      "description": "Attack enemy with the double-barrel break-action grenade launcher stowed in your shoulder frame.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 891,
    "ma": 891,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 127,
    "pr": 0,
    "wt": ["Long-Range", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Melee CRIT Rate boosted 17%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 127,
    "pr": 430,
    "wt": ["Long-Range", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Sub-Arm Unit",
      "description": "Fire two Beam Rifles using the sub-arms attached to your waist.",
      "category": "Beam Shot"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 430,
    "pr": 127,
    "wt": ["Long-Range", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Shield Booster",
      "description": "Use Shield Booster to temporarily increase performance. Raises speed by 20%. Raises your Melee Attack by 19%. Raises your Physical Resist by 49%.",
      "category": "Awakening"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 891,
    "ma": 0,
    "sa": 1144,
    "md": 292,
    "sd": 292,
    "br": 430,
    "pr": 302,
    "wt": ["Long-Range", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Sp. Shot DMG Output boosted 20"
    },
    "name": "Beam Rifle [Gundam TR-1 Advanced Hazel]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 891,
    "ma": 0,
    "sa": 0,
    "md": 891,
    "sd": 891,
    "br": 718,
    "pr": 0,
    "wt": ["Long-Range", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Scattering Beam Cannon",
      "description": "Fire the Scattering Beam Cannon stowed in your shield.",
      "category": "Beam Shot"
    },
    "name": "Enhanced Shield Booster"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 891,
    "ma": 0,
    "sa": 0,
    "md": 891,
    "sd": 891,
    "br": 718,
    "pr": 0,
    "wt": ["Long-Range", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Buff EX Skill Effect 15%"
    },
    "name": "Shield Booster"
  }]
}, {
  "name": "Gundam Tryon 3",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 797,
    "ma": 384,
    "sa": 2785,
    "md": 384,
    "sd": 384,
    "br": 213,
    "pr": 418,
    "wt": ["Transformer", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "High Mega Cannon",
      "description": "Fire at enemies ahead with the Mega Particle Cannon in your head.",
      "category": "Beam Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1605,
    "ma": 797,
    "sa": 797,
    "md": 797,
    "sd": 797,
    "br": 0,
    "pr": 611,
    "wt": ["Transformer", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Hyper Minovsky Chohouken Tryzan",
      "description": "Restrain enemies with pressure from the liger on your chest, then brandish the Hyper Minovsky Chohouken to deliver an almighty death blow. Raise Melee Attack of your squad by 39%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 797,
    "ma": 2785,
    "sa": 1181,
    "md": 384,
    "sd": 384,
    "br": 0,
    "pr": 0,
    "wt": ["Transformer", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Armed Booster",
      "description": "Detach your forearm and unleash a rocket punch.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 797,
    "ma": 797,
    "sa": 384,
    "md": 797,
    "sd": 797,
    "br": 611,
    "pr": 418,
    "wt": ["Transformer", "Heavy Armor"],
    "ex": {
      "type": "EX Skill",
      "name": "Raptor Breaker",
      "description": "Unleash a pulverizing kick with your shin and crush your enemy when your claws latch on. Lowers hit enemy Gunpla's Melee Attack by 29%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 797,
    "ma": 797,
    "sa": 384,
    "md": 797,
    "sd": 797,
    "br": 418,
    "pr": 611,
    "wt": ["Transformer", "Heavy Armor"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Cannonade",
      "description": "Fire powerful long-range beams from the cannon on your back.",
      "category": "Beam Shot"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3582,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 418,
    "pr": 611,
    "wt": ["Transformer", "Heavy Armor"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Transformer\", Initial EX Skill charge boosted 20%"
    },
    "name": "Hyper Minovsky Chohouken",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3582,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 418,
    "pr": 611,
    "wt": ["Transformer", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Strong Melee CRIT rate boosted 30%"
    },
    "name": "Hyper Beam Saber [Tryon 3]",
    "type": "Beam"
  }]
}, {
  "name": "Gundam Vidar",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 965,
    "ma": 553,
    "sa": 2922,
    "md": 553,
    "sd": 553,
    "br": 464,
    "pr": 284,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Alaya-Vijnana System [Type E]",
      "description": "Break the Alaya-Vijnana System to temporarily increase your unit's performance. Raise your speed by 20%. Raise your Melee Attack by 39%. Raise your vernier capacity by 25%.",
      "category": "Awakening"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1734,
    "ma": 965,
    "sa": 965,
    "md": 965,
    "sd": 965,
    "br": 673,
    "pr": 0,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"High Mobility\", EX Skill DMG taken reduced 35"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 965,
    "ma": 2922,
    "sa": 1356,
    "md": 553,
    "sd": 553,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Melee CRIT rate boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 965,
    "ma": 965,
    "sa": 553,
    "md": 965,
    "sd": 965,
    "br": 464,
    "pr": 673,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Demon's Hunt",
      "description": "Crush enemies with a combination attack using Hunter's Edge, Handgun, and Burst Saber. Raise speed of your Squad by 20%. Raise Melee Attack of your Squad by 29%. Raise Shot Attack of your Squad by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 965,
    "ma": 965,
    "sa": 553,
    "md": 965,
    "sd": 965,
    "br": 673,
    "pr": 464,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Melee power boosted 30%"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 553,
    "ma": 3690,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 673,
    "pr": 464,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Job Gauge increase boosted 17%"
    },
    "name": "Burst Saber",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 1,
    "a": 553,
    "ma": 154,
    "sa": 3690,
    "md": 0,
    "sd": 0,
    "br": 464,
    "pr": 284,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor is 80% or less, Enemy Strong Melee power reduced 30%"
    },
    "name": "110mm Rifle",
    "type": "Physical"
  }]
}, {
  "name": "Gundam Virsago",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 2380,
    "md": 384,
    "sd": 384,
    "br": 213,
    "pr": 417,
    "wt": ["Federation", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 40%, Shooting CRIT Rate boosted 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1977,
    "ma": 384,
    "sa": 796,
    "md": 796,
    "sd": 796,
    "br": 0,
    "pr": 611,
    "wt": ["Federation", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Mega Sonic Cannon",
      "description": "Unleash high-caliber mega particle beams from your waist.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1181,
    "ma": 796,
    "sa": 796,
    "md": 1181,
    "sd": 1181,
    "br": 0,
    "pr": 0,
    "wt": ["Federation", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Strike Claw",
      "description": "Extend arm to strike, then shoot your beam cannon.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1181,
    "br": 417,
    "pr": 611,
    "wt": ["Federation", "Transformer"],
    "ex": {
      "type": "EX Skill",
      "name": "Twist Buster",
      "description": "Lift foes with your saber, then knock them back to earth.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1181,
    "br": 417,
    "pr": 611,
    "wt": ["Federation", "Transformer"],
    "ex": {
      "type": "Part Traits",
      "name": "20% chance to prevent vernier consumption when stepping"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1181,
    "ma": 2380,
    "sa": 0,
    "md": 0,
    "sd": 384,
    "br": 213,
    "pr": 417,
    "wt": ["Federation", "Transformer"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Melee DMG Output boosted 35"
    },
    "name": "Beam Saber [Virsago]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 3177,
    "md": 0,
    "sd": 0,
    "br": 213,
    "pr": 611,
    "wt": ["Federation", "Transformer"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Initial EX Skill Charge boosted 20%"
    },
    "name": "Strike Shooter",
    "type": "Beam"
  }]
}, {
  "name": "Gundam Virsago [Beginner Campaign]",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1036,
    "ma": 388,
    "sa": 2268,
    "md": 388,
    "sd": 388,
    "br": 217,
    "pr": 333,
    "wt": ["Federation", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 80%, EX Skill Power boosted 25%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1841,
    "ma": 388,
    "sa": 649,
    "md": 649,
    "sd": 649,
    "br": 0,
    "pr": 514,
    "wt": ["Federation", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Mega Sonic Cannon",
      "description": "Unleash high-caliber mega particle beams from your waist.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1122,
    "ma": 735,
    "sa": 735,
    "md": 1122,
    "sd": 1122,
    "br": 0,
    "pr": 0,
    "wt": ["Federation", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Strike Claw",
      "description": "Extend arm to strike, then shoot your beam cannon.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1036,
    "ma": 388,
    "sa": 388,
    "md": 649,
    "sd": 1036,
    "br": 333,
    "pr": 514,
    "wt": ["Federation", "Transformer"],
    "ex": {
      "type": "EX Skill",
      "name": "Twist Buster",
      "description": "Lift foes with your saber, then knock them back to earth.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1036,
    "ma": 388,
    "sa": 388,
    "md": 649,
    "sd": 1036,
    "br": 333,
    "pr": 514,
    "wt": ["Federation", "Transformer"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Federation\", Long Shot Attack raised 14%"
    }
  }]
}, {
  "name": "Gundam Virtue",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 292,
    "ma": 292,
    "sa": 2304,
    "md": 292,
    "sd": 891,
    "br": 0,
    "pr": 0,
    "wt": ["Heavy Armor", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Shooting DMG taken reduced 20"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1144,
    "ma": 292,
    "sa": 292,
    "md": 559,
    "sd": 1144,
    "br": 213,
    "pr": 213,
    "wt": ["Heavy Armor", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Buff EX Skill Time up 15%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 891,
    "ma": 559,
    "sa": 292,
    "md": 292,
    "sd": 1144,
    "br": 213,
    "pr": 213,
    "wt": ["Heavy Armor", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Bazooka Category equipped, Sp. Shot Power boosted 25%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 292,
    "md": 559,
    "sd": 1144,
    "br": 303,
    "pr": 303,
    "wt": ["Heavy Armor", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Saber Boomerang",
      "description": "Slash with your saber, then hurl it point-first.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 559,
    "ma": 292,
    "sa": 292,
    "md": 559,
    "sd": 1144,
    "br": 303,
    "pr": 303,
    "wt": ["Heavy Armor", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "GN Cannon & GN Field",
      "description": "Fire at enemies ahead with dual movable beam turrets on your back. Raise your Beam Resist by 59%.",
      "category": "Beam Shot"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 292,
    "ma": 0,
    "sa": 2871,
    "md": 0,
    "sd": 0,
    "br": 213,
    "pr": 213,
    "wt": ["Heavy Armor", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "GN Bazooka (w/ Particles Unlocked)",
      "description": "Widen the barrel of your GN Bazooka and bombard enemies with compressed particles.",
      "category": "Beam Shot"
    },
    "name": "GN Bazooka [Virtue]",
    "type": "Beam"
  }]
}, {
  "name": "Gundam Wing Fenice",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 2791,
    "md": 799,
    "sd": 384,
    "br": 213,
    "pr": 0,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1184,
    "ma": 384,
    "sa": 384,
    "md": 1608,
    "sd": 799,
    "br": 614,
    "pr": 0,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Machine Cannon",
      "description": "Fire the machine cannon in your chest at foes straight ahead. You can move freely while shooting.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1608,
    "ma": 1982,
    "sa": 384,
    "md": 3186,
    "sd": 1608,
    "br": 812,
    "pr": 213,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Verde Fenice",
      "description": "After readying a rapier and charging an enemy, send it flying with your cloaked fist.",
      "category": "Beam Melee"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 799,
    "md": 1184,
    "sd": 384,
    "br": 614,
    "pr": 420,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Meteor Hopper",
      "description": "Fire the Buster Rifle mounted on your Meteor Hopper, a one-wheeled motorcycle, as you ride it. Raise Shot Attack of your Squad by 39%.",
      "category": "Beam Shot"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 1608,
    "sd": 384,
    "br": 614,
    "pr": 420,
    "wt": ["Gundam Type", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, EX Skill piercing boosted 28%"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 799,
    "ma": 1982,
    "sa": 0,
    "md": 799,
    "sd": 0,
    "br": 614,
    "pr": 213,
    "wt": ["Gundam Type", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor is 70% or less, Strong Melee CRIT rate boosted 30%"
    },
    "name": "Beam Rapier",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 3590,
    "md": 799,
    "sd": 0,
    "br": 420,
    "pr": 213,
    "wt": ["Gundam Type", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Sp. Shot CRIT rate boosted 30%"
    },
    "name": "Buster Rifle Cannon",
    "type": "Beam"
  }]
}, {
  "name": "Gundam X",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 384,
    "ma": 384,
    "sa": 3181,
    "md": 384,
    "sd": 1182,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Defense Up γ",
      "description": "Raise Melee and Shot Defense of your squad by 39%.",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1606,
    "ma": 384,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 290,
    "pr": 290,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Shooting Power boosted 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1182,
    "ma": 799,
    "sa": 384,
    "md": 384,
    "sd": 1606,
    "br": 290,
    "pr": 290,
    "wt": ["Protag.", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "15% chance of attacks penetrating super armor"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 420,
    "pr": 420,
    "wt": ["Protag.", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "20% chance to not recoil"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 420,
    "pr": 420,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Satellite Cannon",
      "description": "Receive microwaves from the moon and fire the converged energy.",
      "category": "Beam Shot"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1182,
    "ma": 2384,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 477,
    "pr": 477,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Melee DMG taken reduced 35"
    },
    "name": "Large Beam Sword",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 4004,
    "md": 0,
    "sd": 0,
    "br": 290,
    "pr": 290,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Initial EX Skill Charge boosted 20%"
    },
    "name": "Shield Buster Rifle",
    "type": "Beam"
  }]
}, {
  "name": "Gundam X Divider",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 1181,
    "md": 1181,
    "sd": 797,
    "br": 418,
    "pr": 213,
    "wt": ["Mid-Range", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Offense Up γ",
      "description": "Raise Melee and Shot Attack of your Squad by 39%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1978,
    "ma": 384,
    "sa": 384,
    "md": 797,
    "sd": 797,
    "br": 611,
    "pr": 0,
    "wt": ["Mid-Range", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Blade Category equipped, Strong Melee Power boosted 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 797,
    "ma": 1181,
    "sa": 384,
    "md": 1181,
    "sd": 1181,
    "br": 213,
    "pr": 0,
    "wt": ["Mid-Range", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Enemy Shooting Power reduced 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 1605,
    "sd": 384,
    "br": 611,
    "pr": 213,
    "wt": ["Mid-Range", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 1181,
    "sd": 797,
    "br": 611,
    "pr": 213,
    "wt": ["Mid-Range", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "Twist Buster",
      "description": "Lift foes with your saber, then knock them back to earth.",
      "category": "Beam Melee"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 2382,
    "md": 797,
    "sd": 0,
    "br": 611,
    "pr": 213,
    "wt": ["Mid-Range", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Initial EX Skill Charge boosted 20%"
    },
    "name": "Beam Machine Gun [X Divider]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 0,
    "md": 1978,
    "sd": 797,
    "br": 809,
    "pr": 213,
    "wt": ["Mid-Range", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Harmonica Cannon",
      "description": "Bathe foes in beams from the shield's multi-barreled beam cannon.",
      "category": "Beam Shot"
    },
    "name": "Divider"
  }]
}, {
  "name": "Guntank",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 372,
    "md": 372,
    "sd": 372,
    "br": 0,
    "pr": 138,
    "wt": ["Long-Range", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Archer Stance α",
      "description": "Raise your Shot Attack by 39%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 509,
    "ma": 137,
    "sa": 0,
    "md": 372,
    "sd": 372,
    "br": 0,
    "pr": 190,
    "wt": ["Long-Range", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "120mm Low-Recoil Cannon",
      "description": "Fire explosive projectiles from the cannon on your shoulder.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 372,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 54,
    "pr": 138,
    "wt": ["Long-Range", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Quadruple Bop Missile Launcher",
      "description": "Launch missiles stored in your forearm. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 509,
    "sd": 509,
    "br": 138,
    "pr": 54,
    "wt": ["Long-Range", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "EX Skill Recovery boosted 10%"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 509,
    "sd": 509,
    "br": 54,
    "pr": 138,
    "wt": ["Long-Range", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, magazine boosted 10%"
    }
  }]
}, {
  "name": "Gyan",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 287,
    "md": 372,
    "sd": 287,
    "br": 54,
    "pr": 138,
    "wt": ["Close Combat", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "Combat Stance α",
      "description": "Raise your Melee Attack by 39%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 640,
    "ma": 287,
    "sa": 137,
    "md": 287,
    "sd": 287,
    "br": 0,
    "pr": 190,
    "wt": ["Close Combat", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 90%, Sp. Shot DMG taken reduced 10"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 899,
    "sa": 0,
    "md": 372,
    "sd": 372,
    "br": 0,
    "pr": 0,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Saber Category equipped, Sp. Shot DMG Output boosted 10"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 137,
    "md": 372,
    "sd": 287,
    "br": 138,
    "pr": 190,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Volcanic Shot",
      "description": "Jump up high and hit foes with a flying kick. Lowers hit enemy Gunpla's Melee Defense by 14%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 137,
    "md": 372,
    "sd": 287,
    "br": 138,
    "pr": 190,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, magazine boosted 10%"
    }
  }, {
    "part": "melee",
    "mark": 4,
    "a": 372,
    "ma": 1149,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 54,
    "pr": 138,
    "wt": ["Close Combat", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Melee DMG taken Reduced 10"
    },
    "name": "Beam Saber",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 4,
    "a": 372,
    "ma": 0,
    "sa": 0,
    "md": 510,
    "sd": 287,
    "br": 54,
    "pr": 264,
    "wt": ["Close Combat", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "Needle Missile",
      "description": "Launch missiles stowed on your shield.",
      "category": "Physical Shot"
    },
    "name": "Missile Shield"
  }]
}, {
  "name": "Hi-ν Gundam HWS [Ver. Ka]",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 895,
    "ma": 0,
    "sa": 3309,
    "md": 551,
    "sd": 551,
    "br": 464,
    "pr": 282,
    "wt": ["Ace Excl.", "Heavy Armor"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1732,
    "ma": 551,
    "sa": 551,
    "md": 965,
    "sd": 1732,
    "br": 672,
    "pr": 75,
    "wt": ["Ace Excl.", "Heavy Armor"],
    "ex": {
      "type": "EX Skill",
      "name": "Chest Missile Launcher",
      "description": "Fire all eight rocket-propelled grenades from your chest's add-on armor at target.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 965,
    "ma": 1355,
    "sa": 551,
    "md": 551,
    "sd": 1732,
    "br": 75,
    "pr": 75,
    "wt": ["Ace Excl.", "Heavy Armor"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Sp. Shot Power boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 965,
    "ma": 551,
    "sa": 551,
    "md": 965,
    "sd": 1732,
    "br": 672,
    "pr": 464,
    "wt": ["Ace Excl.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Hidden Arms",
      "description": "Unleash a combo with dual Beam Sabers hidden in your waist's add-on armor. Lower's hit enemy Gunpla's Melee Defense by 19%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 965,
    "ma": 551,
    "sa": 551,
    "md": 965,
    "sd": 1732,
    "br": 672,
    "pr": 464,
    "wt": ["Ace Excl.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Fin Funnels",
      "description": "Launch fin funnels to strike foes in all directions. You can move freely while this is active.",
      "category": "Beam Shot"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 551,
    "ma": 153,
    "sa": 4105,
    "md": 153,
    "sd": 0,
    "br": 672,
    "pr": 282,
    "wt": ["Ace Excl.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), EX Skill Power boosted 30%"
    },
    "name": "Hyper Mega Rifle [Hi-nu HWS (Ver. Ka)]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 965,
    "ma": 153,
    "sa": 0,
    "md": 965,
    "sd": 2521,
    "br": 872,
    "pr": 282,
    "wt": ["Ace Excl.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "High-Caliber Mega Particle Cannon",
      "description": "Fire an ultra-wide beam from the two High-Caliber Mega Particle Cannons in your Hi-Mega Shield.",
      "category": "Beam Shot"
    },
    "name": "Hi-Mega Shield [Hi-nu HWS (Ver. Ka)]"
  }]
}, {
  "name": "High Mobility Gelgoog [Johnny Ridden]",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 558,
    "md": 889,
    "sd": 291,
    "br": 302,
    "pr": 126,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Bazooka Category equipped, EX Skill Power boosted 25%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1142,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 428,
    "pr": 0,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Shooting DMG taken reduced 20"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 291,
    "ma": 2300,
    "sa": 291,
    "md": 1142,
    "sd": 291,
    "br": 0,
    "pr": 0,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Melee Power boosted 25%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 302,
    "pr": 428,
    "wt": ["Ace Excl.", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "Twin Blade Slash",
      "description": "Unleash a barrage of attacks with your twin blades.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 428,
    "pr": 302,
    "wt": ["Ace Excl.", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 80%, Vernier Recovery Rate boosted 16%"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 1701,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 302,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Job Gauge Increase boosted 13%"
    },
    "name": "Rocket Launcher",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 0,
    "md": 1701,
    "sd": 558,
    "br": 716,
    "pr": 0,
    "wt": ["Ace Excl.", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 50%, Enemy Shooting Power reduced 25%"
    },
    "name": "Shield [High Mobility Gelgoog (Johnny Ridden)]"
  }]
}, {
  "name": "Hy-Gogg",
  "attribute": "Speed",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "torso",
    "mark": 3,
    "a": 1088,
    "ma": 363,
    "sa": 569,
    "md": 1088,
    "sd": 1088,
    "br": 460,
    "pr": 0,
    "wt": ["Amphib.", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "Torpedo",
      "description": "Fire guided torpedoes from the launcher inside the head.",
      "category": "Physical Shot"
    },
    "combo": "head"
  }, {
    "part": "arms",
    "mark": 3,
    "a": 363,
    "ma": 569,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 200,
    "pr": 80,
    "wt": ["Amphib.", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Cannon",
      "description": "Launch rapid-fire beams from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 186,
    "md": 754,
    "sd": 754,
    "br": 80,
    "pr": 200,
    "wt": ["Amphib.", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Mass P.\" enemy, Close Shot Attack raised 10%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 186,
    "md": 754,
    "sd": 754,
    "br": 200,
    "pr": 80,
    "wt": ["Amphib.", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Ace Excl.\" enemy, Enemy Sp. Shot Power reduced 18%"
    }
  }]
}, {
  "name": "Hy-Gogg [ALT]",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "torso",
    "mark": 3,
    "a": 1088,
    "ma": 363,
    "sa": 569,
    "md": 1088,
    "sd": 1088,
    "br": 460,
    "pr": 0,
    "wt": ["Amphib.", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "120mm Machine Cannon",
      "description": "Fire the machine cannon in your chest at foes straight ahead. You can move freely while shooting.",
      "category": "Physical Shot"
    },
    "combo": "head"
  }, {
    "part": "arms",
    "mark": 3,
    "a": 363,
    "ma": 569,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 200,
    "pr": 80,
    "wt": ["Amphib.", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Cannon",
      "description": "Launch rapid-fire beams from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 186,
    "md": 754,
    "sd": 754,
    "br": 80,
    "pr": 200,
    "wt": ["Amphib.", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Barrier Hack α",
      "description": "Reduce target Shot Defense by 39%",
      "category": "Debuff"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 363,
    "ma": 186,
    "sa": 186,
    "md": 754,
    "sd": 754,
    "br": 200,
    "pr": 80,
    "wt": ["Amphib.", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Ace Excl.\" enemy, Enemy Sp. Shot Power reduced 18%"
    }
  }]
}, {
  "name": "Hyaku Shiki",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 1999,
    "md": 559,
    "sd": 294,
    "br": 0,
    "pr": 129,
    "wt": ["Commander", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 893,
    "ma": 294,
    "sa": 294,
    "md": 1146,
    "sd": 559,
    "br": 0,
    "pr": 432,
    "wt": ["Commander", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Ace Excl.\" enemy, Melee DMG taken reduced 20"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 559,
    "ma": 1438,
    "sa": 294,
    "md": 893,
    "sd": 559,
    "br": 0,
    "pr": 0,
    "wt": ["Commander", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 559,
    "md": 893,
    "sd": 294,
    "br": 303,
    "pr": 432,
    "wt": ["Commander", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "With Bazooka Category equipped, Shot Spread reduced 15%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 294,
    "md": 1146,
    "sd": 294,
    "br": 303,
    "pr": 432,
    "wt": ["Commander", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Ace Excl.\" enemy, Shooting Power boosted 25%"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 559,
    "ma": 1438,
    "sa": 0,
    "md": 559,
    "sd": 0,
    "br": 129,
    "pr": 432,
    "wt": ["Commander", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Royal Heart",
      "description": "Thrust your charged sword to cleave cleanly through foes. Lowers hit enemy Gunpla's Beam Resist by 29%",
      "category": "Beam Melee"
    },
    "name": "Beam Saber [Hyaku Shiki]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 2,
    "a": 294,
    "ma": 0,
    "sa": 2598,
    "md": 559,
    "sd": 0,
    "br": 129,
    "pr": 303,
    "wt": ["Commander", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, EX Skill Power boosted 25%"
    },
    "name": "Beam Rifle [Hyaku Shiki]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 2,
    "a": 294,
    "ma": 0,
    "sa": 2598,
    "md": 559,
    "sd": 0,
    "br": 129,
    "pr": 303,
    "wt": ["Commander", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Dual Wave",
      "description": "Hold bazookas in both hands and fire high-power rounds.",
      "category": "Physical Shot"
    },
    "name": "Clay Bazooka",
    "type": "Physical"
  }]
}, {
  "name": "Jagd Doga [Quess Custom]",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 2000,
    "md": 559,
    "sd": 294,
    "br": 53,
    "pr": 53,
    "wt": ["For Space", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, Mid Shot Attack raised 14%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 893,
    "ma": 294,
    "sa": 294,
    "md": 1147,
    "sd": 559,
    "br": 215,
    "pr": 215,
    "wt": ["For Space", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Strong Melee Power boosted 20%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 559,
    "ma": 1440,
    "sa": 294,
    "md": 893,
    "sd": 559,
    "br": 0,
    "pr": 0,
    "wt": ["For Space", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "Funnels",
      "description": "Launch funnels to repeatedly strike foes in all directions. You can move freely while this is active.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 559,
    "md": 893,
    "sd": 294,
    "br": 352,
    "pr": 352,
    "wt": ["For Space", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 559,
    "ma": 294,
    "sa": 294,
    "md": 1147,
    "sd": 294,
    "br": 352,
    "pr": 352,
    "wt": ["For Space", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Gatling Gun Category equipped, Mid Shot Attacked raised 14%"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 559,
    "ma": 1440,
    "sa": 0,
    "md": 559,
    "sd": 0,
    "br": 303,
    "pr": 303,
    "wt": ["For Space", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "When Attacking with Beam, Melee DMG Output boosted 20"
    },
    "name": "Beam Saber with Heat Knife",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 2,
    "a": 294,
    "ma": 0,
    "sa": 2600,
    "md": 559,
    "sd": 0,
    "br": 215,
    "pr": 215,
    "wt": ["For Space", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "Dual Beam Shredder",
      "description": "Execute suppressive fire with special rounds from your Gatling Gun.",
      "category": "Beam Shot"
    },
    "name": "Mega Gatling Gun",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 559,
    "ma": 0,
    "sa": 0,
    "md": 1440,
    "sd": 559,
    "br": 352,
    "pr": 352,
    "wt": ["For Space", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "Quadruple-Barrel Mega Particle Cannon",
      "description": "Fire beams from the Quadruple-Barrel High-Caliber Mega Particle Cannon mounted on your shield.",
      "category": "Beam Shot"
    },
    "name": "Shield [Jagd Doga (Quess Custom)]"
  }]
}, {
  "name": "Jegan",
  "attribute": "Technique",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 755,
    "ma": 187,
    "sa": 570,
    "md": 364,
    "sd": 364,
    "br": 201,
    "pr": 0,
    "wt": ["Mid-Range", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Vulcan Pod",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 1090,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 364,
    "br": 281,
    "pr": 0,
    "wt": ["Mid-Range", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "Supporter Job, EX Skill Piercing boosted 16%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 570,
    "ma": 570,
    "sa": 187,
    "md": 570,
    "sd": 570,
    "br": 81,
    "pr": 0,
    "wt": ["Mid-Range", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "With Bazooka Category equipped, Sp. Shot DMG Output boosted 15"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 570,
    "sd": 570,
    "br": 81,
    "pr": 281,
    "wt": ["Mid-Range", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Hand Grenade",
      "description": "Throw a hand grenade mounted on your side armor.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 570,
    "sd": 570,
    "br": 281,
    "pr": 81,
    "wt": ["Mid-Range", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon magazine boosted 14%"
    }
  }, {
    "part": "shield",
    "mark": 3,
    "a": 570,
    "ma": 0,
    "sa": 0,
    "md": 570,
    "sd": 570,
    "br": 462,
    "pr": 0,
    "wt": ["Mid-Range", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Missile Launcher",
      "description": "Shoot firearms stored in your shield. You can move while firing.",
      "category": "Physical Shot"
    },
    "name": "Shield [Jegan]"
  }]
}, {
  "name": "Jesta",
  "attribute": "Technique",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 364,
    "ma": 186,
    "sa": 1089,
    "md": 364,
    "sd": 364,
    "br": 80,
    "pr": 80,
    "wt": ["Mass P.", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Vulcan Pod",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 754,
    "ma": 186,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 138,
    "pr": 138,
    "wt": ["Mass P.", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), EX Skill Piercing boosted 16%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 364,
    "ma": 1089,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 0,
    "pr": 0,
    "wt": ["Mass P.", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 70%, Melee DMG taken reduced 15"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 186,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 208,
    "pr": 252,
    "wt": ["Mass P.", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Hand Grenade",
      "description": "Throw a hand grenade mounted on your side armor.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 186,
    "sa": 186,
    "md": 569,
    "sd": 569,
    "br": 282,
    "pr": 208,
    "wt": ["Mass P.", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "2-Tube Missile Launcher",
      "description": "Fire the missile launcher on your back. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "range",
    "mark": 3,
    "a": 364,
    "ma": 0,
    "sa": 1480,
    "md": 0,
    "sd": 0,
    "br": 201,
    "pr": 201,
    "wt": ["Mass P.", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Sp. Shot CRIT Rate boosted 14%"
    },
    "name": "Beam Rifle [Jesta]",
    "type": "Beam"
  }]
}, {
  "name": "Jesta Cannon",
  "attribute": "Power",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 187,
    "ma": 187,
    "sa": 1480,
    "md": 187,
    "sd": 570,
    "br": 0,
    "pr": 0,
    "wt": ["Long-Range", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 70%, Close Shot Attacked raised 10%"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 754,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 281,
    "pr": 0,
    "wt": ["Long-Range", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Enemy Strong Melee Power Reduced 18%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 570,
    "ma": 364,
    "sa": 187,
    "md": 187,
    "sd": 754,
    "br": 201,
    "pr": 81,
    "wt": ["Long-Range", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Sp. Shot Power boosted 18%"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 201,
    "pr": 281,
    "wt": ["Long-Range", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Hand Grenade",
      "description": "Throw a hand grenade mounted on your side armor.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 281,
    "pr": 201,
    "wt": ["Long-Range", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "4-Tube Multi-Launcher",
      "description": "Strafe ahead with the quadruple multi-launcher on your back.",
      "category": "Physical Shot"
    }
  }, {
    "part": "range",
    "mark": 3,
    "a": 187,
    "ma": 0,
    "sa": 1864,
    "md": 0,
    "sd": 0,
    "br": 201,
    "pr": 81,
    "wt": ["Long-Range", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Machine Gun Category equipped, Sp. Shot DMG Output boosted 15"
    },
    "name": "Beam Rifle [Jesta Cannon]",
    "type": "Beam"
  }]
}, {
  "name": "Jesta Cannon [ALT]",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 187,
    "ma": 187,
    "sa": 1480,
    "md": 187,
    "sd": 570,
    "br": 0,
    "pr": 0,
    "wt": ["Long-Range", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 70%, Close Shot Attack raised 10%"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 754,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 281,
    "pr": 0,
    "wt": ["Long-Range", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Enemy Strong Melee Power Reduced 18%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 570,
    "ma": 364,
    "sa": 187,
    "md": 187,
    "sd": 754,
    "br": 201,
    "pr": 81,
    "wt": ["Long-Range", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 70%, Close Shot Attack raised 10%"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 201,
    "pr": 281,
    "wt": ["Long-Range", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Hand Grenade",
      "description": "Throw a hand grenade mounted on your side armor.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 281,
    "pr": 201,
    "wt": ["Long-Range", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Cannon",
      "description": "Launch rapid-fire beams from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "range",
    "mark": 3,
    "a": 187,
    "ma": 0,
    "sa": 1864,
    "md": 0,
    "sd": 0,
    "br": 201,
    "pr": 81,
    "wt": ["Long-Range", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Machine Gun Category equipped, Sp. Shot DMG Output boosted 15"
    },
    "name": "Beam Rifle [ALT] [Jesta Cannon]",
    "type": "Beam"
  }]
}, {
  "name": "Juaggu [Unicorn Ver.]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 797,
    "md": 137,
    "sd": 137,
    "br": 138,
    "pr": 54,
    "wt": ["Amphib.", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 90%, Projectile Speed boosted 10%"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 640,
    "ma": 137,
    "sa": 287,
    "md": 287,
    "sd": 287,
    "br": 190,
    "pr": 0,
    "wt": ["Amphib.", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Chest-Mounted Beam Cannon",
      "description": "Bathe foes in converging beams from a generator-linked cannon.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 372,
    "ma": 287,
    "sa": 287,
    "md": 372,
    "sd": 372,
    "br": 0,
    "pr": 0,
    "wt": ["Amphib.", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "3-Tube Rocket Launcher",
      "description": "Fire the rocket launcher stored in your forearm. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 372,
    "br": 190,
    "pr": 138,
    "wt": ["Amphib.", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Leg-Mounted Beam Cannon",
      "description": "Bathe foes in converging beams from a generator-linked cannon.",
      "category": "Beam Shot"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 372,
    "br": 190,
    "pr": 138,
    "wt": ["Amphib.", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 90%, Vernier Consumption reduced 10%"
    }
  }]
}, {
  "name": "Justice Gundam",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1356,
    "ma": 553,
    "sa": 966,
    "md": 1356,
    "sd": 553,
    "br": 465,
    "pr": 284,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Sagittus",
      "description": "Fire the anti-air autocannons in your head at foes straight ahead. You can move freely while shooting. Lower hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1734,
    "ma": 553,
    "sa": 553,
    "md": 1734,
    "sd": 966,
    "br": 673,
    "pr": 0,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 40%, Strong Melee Power boosted 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 553,
    "ma": 3312,
    "sa": 553,
    "md": 1734,
    "sd": 553,
    "br": 0,
    "pr": 0,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Bassel Beam Boomerang",
      "description": "Attack locked-on target with boomerang on your shoulder.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 966,
    "ma": 553,
    "sa": 553,
    "md": 1734,
    "sd": 966,
    "br": 465,
    "pr": 673,
    "wt": ["Ace Excl.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Shear",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 996,
    "ma": 553,
    "sa": 553,
    "md": 1734,
    "sd": 966,
    "br": 673,
    "pr": 465,
    "wt": ["Ace Excl.", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Fatum-00",
      "description": "Board lifter attached to back and execute a rush attack. Squad recovers 48% of maximum Armor. Raises Melee Attack of your Squad by 29%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "shield",
    "mark": 1,
    "a": 966,
    "ma": 0,
    "sa": 0,
    "md": 2523,
    "sd": 966,
    "br": 1082,
    "pr": 0,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Buff EX Skill Time up 22%"
    },
    "name": "Laminated Anti-Beam Shield [Justice]"
  }]
}, {
  "name": "Kabakali",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 1698,
    "md": 558,
    "sd": 558,
    "br": 302,
    "pr": 0,
    "wt": ["Mid-Range", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Enemy Shooting Power reduced 25%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1140,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 0,
    "wt": ["Mid-Range", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Photon Laser Cannon",
      "description": "Fire highly compressed photon energy from the photon laser cannon on your chest.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 1698,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Mid-Range", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber",
      "description": "Execute a combo with the saber on the back of your hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Mid-Range", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Whip Category equipped, Mid Shot Attack raised 14%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Mid-Range", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Ring",
      "description": "Throw a disk formed from a beam saber forward.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 558,
    "ma": 2297,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 126,
    "wt": ["Mid-Range", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Strong Melee CRIT Rate boosted 17%"
    },
    "name": "Beam Ring",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 2297,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 126,
    "wt": ["Mid-Range", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Shotgun",
      "description": "Fire a scattering beam using specialized ammunition.",
      "category": "Beam Shot"
    },
    "name": "Beam Shotgun",
    "type": "Beam"
  }]
}, {
  "name": "Kämpfer",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 291,
    "ma": 291,
    "sa": 2300,
    "md": 291,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["High Firepower", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1142,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 428,
    "pr": 0,
    "wt": ["High Firepower", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Buff EX Skill time up 15%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 889,
    "ma": 558,
    "sa": 291,
    "md": 291,
    "sd": 1142,
    "br": 302,
    "pr": 126,
    "wt": ["High Firepower", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Physical, Strong Melee CRIT Rate boosted 17%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 302,
    "pr": 428,
    "wt": ["High Firepower", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Leg-Mounted Sturm Faust",
      "description": "Fire the Sturm Faust on your leg.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 428,
    "pr": 302,
    "wt": ["High Firepower", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Giant Bazooka",
      "description": "Fire the giant bazooka on your back. You can move while firing.",
      "category": "Physical Shot"
    }
  }]
}, {
  "name": "Kämpfer [ALT]",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 291,
    "ma": 291,
    "sa": 2300,
    "md": 291,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["High Firepower", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Shooting CRIT Rate boosted 17%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1142,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 428,
    "pr": 0,
    "wt": ["High Firepower", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Buff EX Skill Time up 15%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 889,
    "ma": 558,
    "sa": 291,
    "md": 291,
    "sd": 1142,
    "br": 302,
    "pr": 126,
    "wt": ["High Firepower", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Shooting CRIT Rate boosted 17%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 302,
    "pr": 428,
    "wt": ["High Firepower", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Rapid Thrust",
      "description": "Unleash a blindingly fast furry with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 428,
    "pr": 302,
    "wt": ["High Firepower", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Combat Stance α",
      "description": "Raise your Melee Attack by 39%",
      "category": "Buff"
    }
  }]
}, {
  "name": "Knight Gundam",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1352,
    "ma": 551,
    "sa": 964,
    "md": 1352,
    "sd": 964,
    "br": 282,
    "pr": 463,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), EX Skill Power boosted 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 2128,
    "ma": 964,
    "sa": 551,
    "md": 964,
    "sd": 964,
    "br": 0,
    "pr": 669,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "SD Tackle",
      "description": "Execute a rush attack using your whole body. Lowers hit enemy Gunpla's Melee Attack by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 964,
    "ma": 2913,
    "sa": 0,
    "md": 1352,
    "sd": 1352,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Melee CRIT Rate boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1352,
    "ma": 551,
    "sa": 551,
    "md": 1352,
    "sd": 964,
    "br": 463,
    "pr": 669,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Gundam Type\", EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1352,
    "ma": 964,
    "sa": 551,
    "md": 964,
    "sd": 964,
    "br": 463,
    "pr": 669,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Super Electrospear",
      "description": "Unleash a barrage of attacks with your Electrospear and follow with a lightning attack.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1352,
    "ma": 3681,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 282,
    "pr": 463,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Comet Sword",
      "description": "Unleashes a blinding flash of light with comet-speed swordsmanship that leaves no evil unscathed.",
      "category": "Beam Melee"
    },
    "name": "Knight Sword",
    "type": "Physical"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1352,
    "ma": 3681,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 282,
    "pr": 463,
    "wt": ["Gundam Type", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "SD Attack",
      "description": "After a rush attack, unleash a barrage of attacks with your equipped weapons. Lowers hit enemy Gunpla's Shot Attack by 19%.",
      "category": "Physical Melee"
    },
    "name": "Electrospear",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1352,
    "ma": 0,
    "sa": 0,
    "md": 1730,
    "sd": 964,
    "br": 282,
    "pr": 890,
    "wt": ["Gundam Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Shooting DMG taken reduced 35"
    },
    "name": "Knight Shield"
  }]
}, {
  "name": "Kshatriya",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 0,
    "ma": 551,
    "sa": 3307,
    "md": 551,
    "sd": 965,
    "br": 670,
    "pr": 0,
    "wt": ["Zeon", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Long Shot Attack raised 20%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1732,
    "ma": 965,
    "sa": 965,
    "md": 0,
    "sd": 1732,
    "br": 670,
    "pr": 0,
    "wt": ["Zeon", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Chest Mega Particle Cannon & I-Field",
      "description": "Fire compressed Mirnovsky particles from Mega Particle Cannons on four of your turrets. Raises your Beam Resist by 59%.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 2302,
    "ma": 965,
    "sa": 965,
    "md": 1506,
    "sd": 4255,
    "br": 1543,
    "pr": 282,
    "wt": ["Zeon", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Funnels",
      "description": "Launch funnels to repeatedly strike foes in all directions. You can move freely while this is active.",
      "category": "Beam Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 965,
    "ma": 551,
    "sa": 965,
    "md": 965,
    "sd": 1353,
    "br": 670,
    "pr": 282,
    "wt": ["Zeon", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Enemy Melee Power reduced 30%"
    }
  }]
}, {
  "name": "Launcher Strike Gundam",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 291,
    "ma": 291,
    "sa": 2300,
    "md": 291,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Long-Range", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Hack β",
      "description": "Reduce Beam Resist of all enemies by 39%",
      "category": "Debuff"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1142,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 0,
    "pr": 428,
    "wt": ["Long-Range", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Against a large enemy, Debuff EX Skill Effect up 15%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 889,
    "ma": 558,
    "sa": 291,
    "md": 291,
    "sd": 1142,
    "br": 126,
    "pr": 302,
    "wt": ["Long-Range", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Combo Weapon Pod",
      "description": "Fire missiles and a Vulcan from the unit on your shoulder. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 428,
    "pr": 302,
    "wt": ["Long-Range", "For Desert"],
    "ex": {
      "type": "Part Traits",
      "name": "Against a large enemy, EX Skill CD reduced 15%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 302,
    "pr": 428,
    "wt": ["Long-Range", "For Desert"],
    "ex": {
      "type": "EX Skill",
      "name": "Agni",
      "description": "Wedge the Agni cannon on your back under your arm to fire.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Leo",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 797,
    "md": 137,
    "sd": 137,
    "br": 138,
    "pr": 54,
    "wt": ["Mass P.", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "With Machine Gun Category equipped, Sp. Shot Power Boosted 10"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 640,
    "ma": 137,
    "sa": 287,
    "md": 287,
    "sd": 287,
    "br": 190,
    "pr": 0,
    "wt": ["Mass P.", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, 10% chance to survive a fatal blow"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 797,
    "ma": 287,
    "sa": 287,
    "md": 640,
    "sd": 900,
    "br": 265,
    "pr": 54,
    "wt": ["Mass P.", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 372,
    "br": 190,
    "pr": 138,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Gundam Type\" enemy, EX Skill DMG taken reduced 10"
    }
  }, {
    "part": "range",
    "mark": 4,
    "a": 372,
    "ma": 0,
    "sa": 1012,
    "md": 0,
    "sd": 0,
    "br": 190,
    "pr": 54,
    "wt": ["Mass P.", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Sp. Shot CRIT Rate boosted 10%"
    },
    "name": "105mm Rifle",
    "type": "Physical"
  }]
}, {
  "name": "Lightning Gundam",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 384,
    "ma": 384,
    "sa": 3177,
    "md": 384,
    "sd": 1181,
    "br": 0,
    "pr": 0,
    "wt": ["Long-Range", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Long Shot Attack raised 20%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1602,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1602,
    "br": 611,
    "pr": 0,
    "wt": ["Long-Range", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill piercing boosted 28%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1181,
    "ma": 796,
    "sa": 384,
    "md": 384,
    "sd": 1602,
    "br": 417,
    "pr": 213,
    "wt": ["Long-Range", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Vulcan",
      "description": "Launch rapid-fire Beam Vulcan shots from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1602,
    "br": 417,
    "pr": 611,
    "wt": ["Long-Range", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Rapid Thrust",
      "description": "Unleash a blindingly fast flurry with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1602,
    "br": 611,
    "pr": 417,
    "wt": ["Long-Range", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Missile Pod",
      "description": "Fire micro missiles from your backpack into the air to bombard enemies.",
      "category": "Physical Shot"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 3997,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 213,
    "wt": ["Long-Range", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Lightning Snipe",
      "description": "Snipe a target with a precise shot of converging beams.",
      "category": "Beam Shot"
    },
    "name": "Beam Rifle [Long Barrel]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 3997,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 213,
    "wt": ["Long-Range", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Long-Range\" enemy, EX Skill power boosted 30%"
    },
    "name": "Beam Rifle [Lightning]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 796,
    "ma": 0,
    "sa": 0,
    "md": 796,
    "sd": 2380,
    "br": 1028,
    "pr": 0,
    "wt": ["Long-Range", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Debuff EX Skill effect up 22%"
    },
    "name": "Shield [Lightning]"
  }]
}, {
  "name": "Mack Knife [Mask]",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 1144,
    "ma": 292,
    "sa": 891,
    "md": 558,
    "sd": 558,
    "br": 0,
    "pr": 302,
    "wt": ["Transformer", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Shot spread reduced 15%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1702,
    "ma": 292,
    "sa": 292,
    "md": 558,
    "sd": 558,
    "br": 0,
    "pr": 430,
    "wt": ["Transformer", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), 14% chance to survive a fatal blow"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 891,
    "ma": 891,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 0,
    "pr": 127,
    "wt": ["Transformer", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Plasma Claw",
      "description": "Fire thermal plasma beams from your fingertips.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 430,
    "pr": 127,
    "wt": ["Transformer", "Commander"],
    "ex": {
      "type": "EX Skill",
      "name": "Photon Bomb",
      "description": "Launch photon bombs stowed in the lower half of your body.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 127,
    "pr": 430,
    "wt": ["Transformer", "Commander"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Transformer\", Shooting DMG output boosted by 20%"
    }
  }]
}, {
  "name": "MARSFOUR GUNDAM",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 796,
    "md": 1181,
    "sd": 384,
    "br": 417,
    "pr": 213,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1602,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 611,
    "pr": 0,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), EX Skill CD reduced 20%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 384,
    "ma": 3177,
    "sa": 384,
    "md": 1602,
    "sd": 384,
    "br": 0,
    "pr": 0,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Enemy Melee Power reduced 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 417,
    "pr": 611,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, EX Skill Piercing boosted 28%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 611,
    "pr": 417,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "HEAT REV SWORD",
      "description": "Unleash a two-bladed barrage of attacks.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3997,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 213,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Initial EX Skill Charge boosted 20%"
    },
    "name": "HEAT REV SWORD",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3997,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 213,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Quick Slash",
      "description": "Unleash a two-hit attack with your blade, knocking enemies away.",
      "category": "Physical Melee"
    },
    "name": "SLASH BLADE",
    "type": "Physical"
  }]
}, {
  "name": "Master Gundam",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 796,
    "md": 1181,
    "sd": 384,
    "br": 213,
    "pr": 417,
    "wt": ["Mobile Fighter", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Choukyuu Haou Den'eidan",
      "description": "Wrapped in a spiraling aura, launch yourself at the enemy in a straight line, like a cannonball.",
      "category": "Physical Melee"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1602,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 0,
    "pr": 611,
    "wt": ["Mobile Fighter", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Hyper Mode",
      "description": "Enter Hyper Mode for enhanced combat prowess. Raise speed by 20%. Raise your Melee Attack by 19%. Raise your Shot Attack by 19%.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 384,
    "ma": 3177,
    "sa": 384,
    "md": 1602,
    "sd": 384,
    "br": 0,
    "pr": 0,
    "wt": ["Mobile Fighter", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Sekiha Tenkyouken",
      "description": "Use Master Asia's final art to fire a huge chi bullet made of power borrowed from nature. Raise Melee Defense of your Squad by 29%. Raise Beam Resist of your Squad by 69%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 611,
    "pr": 417,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), EX Skill Piercing boosted 28%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 417,
    "pr": 611,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Juuni Ouhoupai Daishahei",
      "description": "Use chi to create multiple small clones, and unleash them upon enemies.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3997,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 213,
    "pr": 417,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Strong Melee CRIT Rate boosted 30%"
    },
    "name": "Master Cloth",
    "type": "Beam"
  }]
}, {
  "name": "Mobile Kapool",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "torso",
    "mark": 4,
    "a": 797,
    "ma": 287,
    "sa": 372,
    "md": 797,
    "sd": 797,
    "br": 0,
    "pr": 319,
    "wt": ["Amphib.", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Missile Launcher",
      "description": "Open your chest armor to unleash a missile barrage. You can move while firing.",
      "category": "Physical Shot"
    },
    "combo": "head"
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 372,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 54,
    "pr": 138,
    "wt": ["Amphib.", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Handgun",
      "description": "Launch rapid-fire Vulcan shots from your forearm. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 509,
    "sd": 509,
    "br": 138,
    "pr": 54,
    "wt": ["Amphib.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Sonic Blast",
      "description": "Bathe foes in beams from the beam cannon in your abdomen.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Mobile SUMO [Gold Type]",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 292,
    "sa": 1993,
    "md": 292,
    "sd": 292,
    "br": 302,
    "pr": 127,
    "wt": ["Ace Excl.", "Heavy Armor"],
    "ex": {
      "type": "EX Skill",
      "name": "Combat Stance α",
      "description": "Raise your Melee Attack by 39%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1144,
    "ma": 558,
    "sa": 558,
    "md": 558,
    "sd": 558,
    "br": 430,
    "pr": 0,
    "wt": ["Ace Excl.", "Heavy Armor"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 40%, 10% chance to survive a fatal blow"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 1993,
    "sa": 891,
    "md": 292,
    "sd": 292,
    "br": 0,
    "pr": 0,
    "wt": ["Ace Excl.", "Heavy Armor"],
    "ex": {
      "type": "EX Skill",
      "name": "IF Bunker",
      "description": "Stab a foe frozen by your IF Booster with an I-Field saber.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 558,
    "sa": 292,
    "md": 558,
    "sd": 558,
    "br": 302,
    "pr": 430,
    "wt": ["Ace Excl.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Flight Unit",
      "description": "Accelerate with your flight unit, then detach and launch.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 558,
    "sa": 292,
    "md": 558,
    "sd": 558,
    "br": 430,
    "pr": 302,
    "wt": ["Ace Excl.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, EX Skill Piercing boosted 22%"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 292,
    "ma": 2593,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 430,
    "pr": 302,
    "wt": ["Ace Excl.", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Storm Edge",
      "description": "Create a whirlwind with your axe to mow down surrounding foes. Raise your Shot Defense by 19%.",
      "category": "Beam Melee"
    },
    "name": "Heat Fan",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 2,
    "a": 292,
    "ma": 0,
    "sa": 2593,
    "md": 0,
    "sd": 0,
    "br": 302,
    "pr": 127,
    "wt": ["Ace Excl.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, Shooting DMG Output boosted 20"
    },
    "name": "Hand Beam Gun",
    "type": "Beam"
  }]
}, {
  "name": "Mobile Worker",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 511,
    "ma": 138,
    "sa": 374,
    "md": 287,
    "sd": 287,
    "br": 55,
    "pr": 55,
    "wt": ["Close Combat", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "With Axe Category equipped, EX Skill DMG Output boosted 10"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 798,
    "ma": 138,
    "sa": 138,
    "md": 287,
    "sd": 287,
    "br": 110,
    "pr": 110,
    "wt": ["Close Combat", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "Light Up",
      "description": "Activate the light equipped to your chest. You become easier to target for a set period of time.",
      "category": "Buff"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 374,
    "ma": 374,
    "sa": 138,
    "md": 374,
    "sd": 374,
    "br": 55,
    "pr": 55,
    "wt": ["Close Combat", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Claw",
      "description": "Grab a foe with a huge engineering claw and cut through them. Lowers hit enemy Gunpla's Physical Resist by 29%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 374,
    "ma": 138,
    "sa": 138,
    "md": 374,
    "sd": 374,
    "br": 138,
    "pr": 138,
    "wt": ["Close Combat", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, EX Skill Piercing boosted 15%"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 374,
    "ma": 138,
    "sa": 138,
    "md": 374,
    "sd": 374,
    "br": 138,
    "pr": 138,
    "wt": ["Close Combat", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Axe Category equipped, Debuff EX Skill Effect up 10%"
    }
  }, {
    "part": "shield",
    "mark": 4,
    "a": 374,
    "ma": 0,
    "sa": 0,
    "md": 374,
    "sd": 374,
    "br": 143,
    "pr": 143,
    "wt": ["Close Combat", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Strong Melee DMG taken reduced 10"
    },
    "name": "Shield [Mobile Worker]"
  }]
}, {
  "name": "Moon Gundam",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 797,
    "ma": 384,
    "sa": 2785,
    "md": 384,
    "sd": 384,
    "br": 418,
    "pr": 213,
    "wt": ["Gundam Type", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Enemy Shooting Power reduced 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1605,
    "ma": 797,
    "sa": 797,
    "md": 797,
    "sd": 797,
    "br": 611,
    "pr": 0,
    "wt": ["Gundam Type", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Buff EX Skill Time up 22%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 797,
    "ma": 2785,
    "sa": 1181,
    "md": 384,
    "sd": 384,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Butterfly Edge",
      "description": "Emit a beam saber from the melee weapon on your arm and throw it at enemies.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 797,
    "ma": 797,
    "sa": 384,
    "md": 797,
    "sd": 797,
    "br": 418,
    "pr": 611,
    "wt": ["Gundam Type", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 70%, EX SKill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 797,
    "ma": 797,
    "sa": 384,
    "md": 797,
    "sd": 797,
    "br": 611,
    "pr": 418,
    "wt": ["Gundam Type", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Psycho Plate",
      "description": "Use psycommu to hit foes in all directions. You can move freely while this skill is active.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3582,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 611,
    "pr": 418,
    "wt": ["Gundam Type", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Enemy Melee Power reduced 30%"
    },
    "name": "Beam Tomahawk [Moon]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 3582,
    "md": 0,
    "sd": 0,
    "br": 418,
    "pr": 213,
    "wt": ["Gundam Type", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 70%, EX Skill Power boosted 30%"
    },
    "name": "Beam Rifle [Moon]",
    "type": "Beam"
  }]
}, {
  "name": "Noble Gundam",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1182,
    "ma": 384,
    "sa": 799,
    "md": 1182,
    "sd": 384,
    "br": 290,
    "pr": 290,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1606,
    "ma": 384,
    "sa": 384,
    "md": 1606,
    "sd": 799,
    "br": 290,
    "pr": 290,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Berserker System",
      "description": "Activate the Berserker System, temporarily enhancing combat prowess. Raise your speed by 20%. Raise your Melee Attack by 39%. Raise your Melee Defense by 19%.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 384,
    "ma": 3181,
    "sa": 384,
    "md": 1606,
    "sd": 384,
    "br": 0,
    "pr": 0,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Burning Finger",
      "description": "Gather energy in the palm of your hand and obliterate enemies in your grasp. Lowers hit enemy Gunpla's Physical Resist by 29%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 1606,
    "sd": 799,
    "br": 420,
    "pr": 290,
    "wt": ["Mobile Fighter", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Hoop",
      "description": "Throw a hoop made from beams like a boomerang.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 4004,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 420,
    "pr": 420,
    "wt": ["Mobile Fighter", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Ribbon",
      "description": "Deftly manipulate your beam ribbon to perform an elegant sequence of attacks.",
      "category": "Beam Melee"
    },
    "name": "Beam Ribbon",
    "type": "Beam"
  }]
}, {
  "name": "Nu Gundam [Ver. Ka]",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 553,
    "ma": 553,
    "sa": 3312,
    "md": 553,
    "sd": 1356,
    "br": 0,
    "pr": 0,
    "wt": ["For Space", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, EX Skill Power boosted 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1734,
    "ma": 553,
    "sa": 553,
    "md": 966,
    "sd": 1734,
    "br": 0,
    "pr": 673,
    "wt": ["For Space", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Shooting Power boosted 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1356,
    "ma": 966,
    "sa": 553,
    "md": 553,
    "sd": 1734,
    "br": 284,
    "pr": 465,
    "wt": ["For Space", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 966,
    "ma": 553,
    "sa": 553,
    "md": 966,
    "sd": 1734,
    "br": 673,
    "pr": 465,
    "wt": ["For Space", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 966,
    "ma": 553,
    "sa": 553,
    "md": 966,
    "sd": 1734,
    "br": 465,
    "pr": 673,
    "wt": ["For Space", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Fin Funnels",
      "description": "Launch fin funnels to strike foes in all directions. You can move freely while this is active.",
      "category": "Beam Shot"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1356,
    "ma": 2523,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 465,
    "pr": 673,
    "wt": ["For Space", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Strong Melee Power boosted 30%"
    },
    "name": "Beam Saber [Nu Ver.Ka]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 553,
    "ma": 0,
    "sa": 4110,
    "md": 0,
    "sd": 0,
    "br": 284,
    "pr": 465,
    "wt": ["For Space", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Enemy Strong Melee Power Reduced 30%"
    },
    "name": "Beam Rifle [Nu Ver.Ka]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 553,
    "ma": 0,
    "sa": 4110,
    "md": 0,
    "sd": 0,
    "br": 284,
    "pr": 465,
    "wt": ["For Space", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Dual Cascade",
      "description": "Hold bazookas in both hands and fire high-power rounds.",
      "category": "Physical Shot"
    },
    "name": "New Hyper Bazooka [Nu Ver.Ka]",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 966,
    "ma": 0,
    "sa": 0,
    "md": 966,
    "sd": 2523,
    "br": 0,
    "pr": 1082,
    "wt": ["For Space", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Enemy Shooting Power reduced 30%"
    },
    "name": "Shield [Nu Ver.Ka]"
  }]
}, {
  "name": "Palace Athene",
  "attribute": "Power",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 570,
    "md": 570,
    "sd": 364,
    "br": 139,
    "pr": 139,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Coat β",
      "description": "Raise Ally Beam Resist by 49%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 942,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 364,
    "br": 139,
    "pr": 139,
    "wt": ["High Firepower", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Debuff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 364,
    "ma": 570,
    "sa": 187,
    "md": 570,
    "sd": 570,
    "br": 29,
    "pr": 29,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Twin Beam Gun & Grenade Launcher",
      "description": "Fire the beam rifle and grenade launcher in your arms. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 187,
    "br": 201,
    "pr": 201,
    "wt": ["High Firepower", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Claw Kick",
      "description": "Unleash a series of kicking combo attacks. Raise your Melee Attack by 14%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 570,
    "sd": 364,
    "br": 201,
    "pr": 201,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Anti-Ship Large Missile",
      "description": "Launch eight missiles mounted on your back.",
      "category": "Physical Shot"
    }
  }, {
    "part": "shield",
    "mark": 3,
    "a": 270,
    "ma": 0,
    "sa": 0,
    "md": 942,
    "sd": 364,
    "br": 209,
    "pr": 209,
    "wt": ["High Firepower", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Small Missile",
      "description": "Launch missiles stowed on your shield.",
      "category": "Physical Shot"
    },
    "name": "Shield [Palace Athene]"
  }]
}, {
  "name": "Palace Athene [ALT]",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 570,
    "md": 570,
    "sd": 364,
    "br": 139,
    "pr": 139,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Coat β",
      "description": "Raise Ally Beam Resist by 49%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 942,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 364,
    "br": 139,
    "pr": 139,
    "wt": ["High Firepower", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Debuff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 364,
    "ma": 570,
    "sa": 187,
    "md": 570,
    "sd": 570,
    "br": 29,
    "pr": 29,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Arm-Mounted Scattering Beam Cannon",
      "description": "Fire the beam cannons in your shoulder armor over a wide area. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 187,
    "br": 201,
    "pr": 201,
    "wt": ["High Firepower", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Shooting CRIT Rate boosted 14%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 570,
    "sd": 364,
    "br": 201,
    "pr": 201,
    "wt": ["High Firepower", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Debuff EX Skill Effect up 12%"
    }
  }, {
    "part": "shield",
    "mark": 3,
    "a": 270,
    "ma": 0,
    "sa": 0,
    "md": 942,
    "sd": 364,
    "br": 209,
    "pr": 209,
    "wt": ["High Firepower", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Sp. Shot DMG taken reduced 15"
    },
    "name": "Shield [ALT] [Palace Athene]"
  }]
}, {
  "name": "Pale Rider",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 800,
    "ma": 385,
    "sa": 1985,
    "md": 385,
    "sd": 1185,
    "br": 292,
    "pr": 292,
    "wt": ["For Urban Area", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "HADES System",
      "description": "Activate HADES, a system developed from the EXAM system. Raise speed by 20%. Raise your Melee Attack by 19%. Raise your Shot Attack by 29%.",
      "category": "Awakening"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1185,
    "ma": 800,
    "sa": 385,
    "md": 800,
    "sd": 1610,
    "br": 292,
    "pr": 292,
    "wt": ["For Urban Area", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill CD reduced 20%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 800,
    "ma": 2795,
    "sa": 385,
    "md": 800,
    "sd": 1185,
    "br": 0,
    "pr": 0,
    "wt": ["For Urban Area", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "When Attacking with Physical, Shooting Power boosted 25%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 800,
    "ma": 385,
    "sa": 385,
    "md": 385,
    "sd": 1185,
    "br": 479,
    "pr": 479,
    "wt": ["For Urban Area", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Leg-Mounted Rocket Launcher",
      "description": "Fire the rocket launcher mounted on your leg.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 800,
    "ma": 385,
    "sa": 385,
    "md": 385,
    "sd": 1185,
    "br": 479,
    "pr": 479,
    "wt": ["For Urban Area", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "180mm Cannon",
      "description": "Hold the cannon on your back under your arm and fire.",
      "category": "Physical Shot"
    }
  }, {
    "part": "shield",
    "mark": 1,
    "a": 800,
    "ma": 0,
    "sa": 0,
    "md": 800,
    "sd": 1985,
    "br": 479,
    "pr": 479,
    "wt": ["For Urban Area", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Shock Bringer γ",
      "description": "Squad attacks stun large foes more easily for a set period.",
      "category": "Buff"
    },
    "name": "Shield [Pale Rider]"
  }]
}, {
  "name": "Pale Rider [Beginner Campaign]",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 653,
    "ma": 390,
    "sa": 1855,
    "md": 390,
    "sd": 1043,
    "br": 219,
    "pr": 219,
    "wt": ["For Urban Area", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "HADES System",
      "description": "Activate HADES, a system developed from the EXAM system. Raise speed by 20%. Raise your Melee Attack by 19%. Raise your Shot Attack by 29%.",
      "category": "Awakening"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1043,
    "ma": 653,
    "sa": 390,
    "md": 653,
    "sd": 1464,
    "br": 219,
    "pr": 219,
    "wt": ["For Urban Area", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Enemy Strong Melee Power reduced 25%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 653,
    "ma": 2666,
    "sa": 390,
    "md": 653,
    "sd": 1043,
    "br": 0,
    "pr": 0,
    "wt": ["For Urban Area", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Shot Guidance boosted 14%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 741,
    "ma": 390,
    "sa": 390,
    "md": 390,
    "sd": 1130,
    "br": 433,
    "pr": 433,
    "wt": ["For Urban Area", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Leg-Mounted Rocket Launcher",
      "description": "Fire the rocket launcher mounted on your leg.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 741,
    "ma": 390,
    "sa": 390,
    "md": 390,
    "sd": 1130,
    "br": 433,
    "pr": 433,
    "wt": ["For Urban Area", "GM Type"],
    "ex": {
      "type": "EX Skill",
      "name": "180mm Cannon",
      "description": "Hold the cannon on your back under your arm and fire.",
      "category": "Physical Shot"
    }
  }]
}, {
  "name": "Penelope",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 965,
    "ma": 0,
    "sa": 3309,
    "md": 551,
    "sd": 551,
    "br": 282,
    "pr": 464,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Enemy Shooting Power reduced 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1732,
    "ma": 551,
    "sa": 551,
    "md": 1732,
    "sd": 965,
    "br": 75,
    "pr": 672,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Ace Excl.\", Shooting Power boosted 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 965,
    "ma": 1355,
    "sa": 551,
    "md": 1732,
    "sd": 551,
    "br": 75,
    "pr": 75,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Flight Unit Combo",
      "description": "Hammer enemies into the ground with the twin beam sabers, and launch shoulder Funnel Missiles. Raise Melee Attack of your Squad by 29%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 965,
    "ma": 551,
    "sa": 551,
    "md": 1732,
    "sd": 965,
    "br": 464,
    "pr": 672,
    "wt": ["Ace Excl.", "Federation"],
    "ex": {
      "type": "EX Skill",
      "name": "Funnel Missiles",
      "description": "Fire Funnel Missiles to hit foes in all directions. You can move freely while this is active.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 965,
    "ma": 551,
    "sa": 551,
    "md": 1732,
    "sd": 965,
    "br": 464,
    "pr": 672,
    "wt": ["Ace Excl.", "Federation"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill Piercing boosted 28%"
    }
  }]
}, {
  "name": "Providence Gundam",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 2380,
    "md": 384,
    "sd": 384,
    "br": 417,
    "pr": 213,
    "wt": ["Ace Excl.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Picus",
      "description": "Fire the anti-air autocannons in your head at foes straight ahead. You can move freely while shooting. Lower hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1977,
    "ma": 384,
    "sa": 796,
    "md": 796,
    "sd": 796,
    "br": 611,
    "pr": 0,
    "wt": ["Ace Excl.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Enemy Strong Melee Power reduced 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 2380,
    "ma": 796,
    "sa": 796,
    "md": 1977,
    "sd": 2783,
    "br": 806,
    "pr": 213,
    "wt": ["Ace Excl.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Composite Armed Shield System",
      "description": "Attack enemies with the beam weaponry integrated into your left arm. You can move while firing.",
      "category": "Beam Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1181,
    "br": 611,
    "pr": 417,
    "wt": ["Ace Excl.", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Long Shot Attack raised 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 796,
    "sd": 1181,
    "br": 611,
    "pr": 417,
    "wt": ["Ace Excl.", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "DRAGOON System",
      "description": "Use the DRAGOON System to hit foes in all directions. You can move freely while this skill is active.",
      "category": "Beam Shot"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 3177,
    "md": 0,
    "sd": 0,
    "br": 611,
    "pr": 213,
    "wt": ["Ace Excl.", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Sp. Shot Power boosted 30%"
    },
    "name": "Judicium Beam Rifle",
    "type": "Beam"
  }]
}, {
  "name": "Qubeley",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 968,
    "ma": 553,
    "sa": 2927,
    "md": 968,
    "sd": 553,
    "br": 0,
    "pr": 284,
    "wt": ["Commander", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Recovery Tool γ",
      "description": "Squad recovers 48% of maximum Armor.",
      "category": "Recovery"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1358,
    "ma": 553,
    "sa": 553,
    "md": 1737,
    "sd": 968,
    "br": 0,
    "pr": 675,
    "wt": ["Commander", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Buff EX Skill Effect up 22%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 968,
    "ma": 2138,
    "sa": 553,
    "md": 1358,
    "sd": 968,
    "br": 0,
    "pr": 0,
    "wt": ["Commander", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Gun",
      "description": "Launch rapid-fire beams from your forearm. You can move while firing.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 968,
    "ma": 553,
    "sa": 968,
    "md": 1358,
    "sd": 553,
    "br": 467,
    "pr": 675,
    "wt": ["Commander", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Mid Shot Attack raised 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 968,
    "ma": 553,
    "sa": 553,
    "md": 1737,
    "sd": 553,
    "br": 467,
    "pr": 675,
    "wt": ["Commander", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Funnels",
      "description": "Launch funnels to repeatedly strike foes in all directions. You can move freely while this is active.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Rebawoo",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 558,
    "md": 889,
    "sd": 291,
    "br": 126,
    "pr": 302,
    "wt": ["Zeon", "Commander"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Projectile Speed boosted 14%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1142,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 0,
    "pr": 428,
    "wt": ["Zeon", "Commander"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Vulcan",
      "description": "Fire the Beam Vulcans in your chest at foes straight ahead. You can move while shooting.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 291,
    "ma": 2300,
    "sa": 291,
    "md": 1142,
    "sd": 291,
    "br": 0,
    "pr": 0,
    "wt": ["Zeon", "Commander"],
    "ex": {
      "type": "EX Skill",
      "name": "Arm-Mounted Grenade Launcher",
      "description": "Launch grenades from your forearm. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 428,
    "pr": 302,
    "wt": ["Zeon", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Flexible Beam Gun",
      "description": "Fire the beam gun attached to your flexible thrusters.",
      "category": "Beam Shot"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 302,
    "pr": 428,
    "wt": ["Zeon", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Zeon\", Melee Power boosted 25%"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 1701,
    "md": 0,
    "sd": 0,
    "br": 302,
    "pr": 428,
    "wt": ["Zeon", "Commander"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"Commander\", Initial EX Skill Charge boosted 12%"
    },
    "name": "Beam Rifle [Rebawoo]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 0,
    "md": 1701,
    "sd": 558,
    "br": 0,
    "pr": 716,
    "wt": ["Zeon", "Commander"],
    "ex": {
      "type": "EX Skill",
      "name": "Grenade Launcher",
      "description": "Launch grenades from your shield.",
      "category": "Physical Shot"
    },
    "name": "Shield [Reabwoo]"
  }]
}, {
  "name": "Rick Dias [ALT] [Quattro Bajeena Colors]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 365,
    "ma": 187,
    "sa": 571,
    "md": 365,
    "sd": 365,
    "br": 202,
    "pr": 202,
    "wt": ["High Mobility", "Mass P."],
    "ex": {
      "type": "EX Skill",
      "name": "Protection β",
      "description": "Raise Ally Physical Resist by 39%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 365,
    "ma": 187,
    "sa": 187,
    "md": 365,
    "sd": 365,
    "br": 282,
    "pr": 282,
    "wt": ["High Mobility", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 70%, Debuff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 187,
    "ma": 571,
    "sa": 187,
    "md": 365,
    "sd": 365,
    "br": 282,
    "pr": 282,
    "wt": ["High Mobility", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 70%, Enemy Sp. Shot Power reduced 18%"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 187,
    "ma": 187,
    "sa": 187,
    "md": 571,
    "sd": 571,
    "br": 282,
    "pr": 282,
    "wt": ["High Mobility", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 70%, Melee CRIT Rate boosted 14%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 187,
    "ma": 187,
    "sa": 187,
    "md": 571,
    "sd": 571,
    "br": 282,
    "pr": 282,
    "wt": ["High Mobility", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Pistol",
      "description": "Fire the twin pistols mounted on your back.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Rick Dias [Quattro Bajeena Colors]",
  "attribute": "Technique",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 365,
    "ma": 187,
    "sa": 571,
    "md": 365,
    "sd": 365,
    "br": 202,
    "pr": 202,
    "wt": ["High Mobility", "Mass P."],
    "ex": {
      "type": "EX Skill",
      "name": "Protection β",
      "description": "Raise Ally Physical Resist by 39%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 365,
    "ma": 187,
    "sa": 187,
    "md": 365,
    "sd": 365,
    "br": 282,
    "pr": 282,
    "wt": ["High Mobility", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 70%, Debuff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 187,
    "ma": 571,
    "sa": 187,
    "md": 365,
    "sd": 365,
    "br": 282,
    "pr": 282,
    "wt": ["High Mobility", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Prominence Fist",
      "description": "Charge powerfully through enemies with your fist. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 187,
    "ma": 187,
    "sa": 187,
    "md": 571,
    "sd": 571,
    "br": 282,
    "pr": 282,
    "wt": ["High Mobility", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 70%, Melee CRIT Rate boosted 14%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 187,
    "ma": 187,
    "sa": 187,
    "md": 571,
    "sd": 571,
    "br": 282,
    "pr": 282,
    "wt": ["High Mobility", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    }
  }]
}, {
  "name": "Rising Gundam",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 558,
    "md": 889,
    "sd": 291,
    "br": 126,
    "pr": 302,
    "wt": ["Mobile Fighter", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1142,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 0,
    "pr": 428,
    "wt": ["Mobile Fighter", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Strong Melee Power boosted 20%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 291,
    "ma": 2300,
    "sa": 291,
    "md": 1142,
    "sd": 291,
    "br": 0,
    "pr": 0,
    "wt": ["Mobile Fighter", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Rising Arrow",
      "description": "Fire a high-speed beam arrow from the bow on your left arm.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 428,
    "pr": 302,
    "wt": ["Mobile Fighter", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Shooting CRIT Rate boosted 17%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 302,
    "pr": 428,
    "wt": ["Mobile Fighter", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Defense Hack α",
      "description": "Reduce target Melee and Shot Defense by 39%",
      "category": "Debuff"
    }
  }]
}, {
  "name": "Rozen Zulu",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 558,
    "md": 889,
    "sd": 558,
    "br": 302,
    "pr": 126,
    "wt": ["Zeon", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Mid Shot Attack raised 14%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1433,
    "ma": 558,
    "sa": 291,
    "md": 558,
    "sd": 558,
    "br": 428,
    "pr": 0,
    "wt": ["Zeon", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Sp. Shot DMG taken reduced 20"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 1991,
    "sa": 0,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Zeon", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Mega Particle Cannon (Incom)",
      "description": "Detach and launch your forearm to shoot at a locked-on target.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 558,
    "br": 428,
    "pr": 302,
    "wt": ["Zeon", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 40%, Shooting CRIT Rate boosted 17%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 558,
    "br": 428,
    "pr": 302,
    "wt": ["Zeon", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Psycho Jammer",
      "description": "Launch Psycho Jammer, erecting a force field around locked-on target and suppressing movement within.",
      "category": "Beam Shot"
    }
  }, {
    "part": "shield",
    "mark": 2,
    "a": 889,
    "ma": 0,
    "sa": 0,
    "md": 1142,
    "sd": 558,
    "br": 590,
    "pr": 123,
    "wt": ["Zeon", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Triple-Barrel Mega Particle Cannon",
      "description": "Fire beams from the Triple-Barrel High-Caliber Mega Particle Cannon in your shield.",
      "category": "Beam Shot"
    },
    "name": "Shield [Rozen Zulu]"
  }]
}, {
  "name": "Ryusei-Go [Graze Custom II]",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 1700,
    "md": 558,
    "sd": 558,
    "br": 126,
    "pr": 126,
    "wt": ["Ace Excl.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Alaya-Vijnana System",
      "description": "Enter the Alaya-Vijnana System to temporarily increase your unit's performance. Raise your speed by 20%. Raise your Melee Attack by 29%.",
      "category": "Awakening"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1142,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 213,
    "pr": 213,
    "wt": ["Ace Excl.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Shooting Power boosted 25%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 1700,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Ace Excl.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "12% chance of attacks penetrating super armor"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 349,
    "pr": 375,
    "wt": ["Ace Excl.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor is 70% or less, EX Skill CD reduced 15%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 375,
    "pr": 349,
    "wt": ["Ace Excl.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Physical, Mid Shot Attack raised 14%"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 558,
    "ma": 2298,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 302,
    "pr": 302,
    "wt": ["Ace Excl.", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Wind Edge",
      "description": "Mow down nearby foes with your axe.",
      "category": "Physical Melee"
    },
    "name": "Battle Axe [Ryusei-Go]",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 2298,
    "md": 0,
    "sd": 0,
    "br": 302,
    "pr": 302,
    "wt": ["Ace Excl.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, reload speed boosted 15%"
    },
    "name": "120mm Rifle [Ryusei-Go]",
    "type": "Physical"
  }]
}, {
  "name": "Sanakapool",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "torso",
    "mark": 1,
    "a": 2778,
    "ma": 795,
    "sa": 1179,
    "md": 2778,
    "sd": 1974,
    "br": 211,
    "pr": 1025,
    "wt": ["Amphib.", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), EX Skill Piercing boosted 28%"
    },
    "combo": "head"
  }, {
    "part": "arms",
    "mark": 1,
    "a": 384,
    "ma": 3173,
    "sa": 384,
    "md": 1601,
    "sd": 384,
    "br": 0,
    "pr": 0,
    "wt": ["Amphib.", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Sana's Signature Rabbit Spike",
      "description": "Hop around like a rabbit and strike using the force of a volleyball spike. Squad recovers 38% of maximum Armor. Raises Shot Defense of Squad by 39%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 795,
    "ma": 384,
    "sa": 384,
    "md": 1601,
    "sd": 795,
    "br": 609,
    "pr": 416,
    "wt": ["Amphib.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Belly Beam!",
      "description": "Fire a sonic blast with a more straightforward name at target.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Sazabi",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1356,
    "ma": 553,
    "sa": 966,
    "md": 1356,
    "sd": 553,
    "br": 284,
    "pr": 465,
    "wt": ["High Firepower", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Enemy Shooting Power reduced 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1734,
    "ma": 553,
    "sa": 553,
    "md": 1734,
    "sd": 966,
    "br": 0,
    "pr": 673,
    "wt": ["High Firepower", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Mega Particle Scatter Cannon",
      "description": "Fire the mega particle cannon in your abdomen.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 553,
    "ma": 3312,
    "sa": 553,
    "md": 1734,
    "sd": 553,
    "br": 0,
    "pr": 0,
    "wt": ["High Firepower", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 70%, Melee Power boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 966,
    "ma": 553,
    "sa": 553,
    "md": 1734,
    "sd": 966,
    "br": 673,
    "pr": 465,
    "wt": ["High Firepower", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), EX Skill CD reduced 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 966,
    "ma": 553,
    "sa": 553,
    "md": 1734,
    "sd": 966,
    "br": 465,
    "pr": 673,
    "wt": ["High Firepower", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Funnel Combination",
      "description": "Launch six funnels to fire at the enemy, and throw a beam tomahawk.",
      "category": "Beam Shot"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 553,
    "ma": 4110,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 284,
    "pr": 465,
    "wt": ["High Firepower", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Piercing Axe",
      "description": "Unleash a flurry of thrusting attacks with the weapon in your right hand.",
      "category": "Beam Melee"
    },
    "name": "Beam Tomahawk [Sazabi]",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 553,
    "ma": 4110,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 284,
    "pr": 465,
    "wt": ["High Firepower", "Zeon"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), EX Skill Power boosted 30%"
    },
    "name": "Beam Saber [Sazabi]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 1356,
    "ma": 0,
    "sa": 3312,
    "md": 0,
    "sd": 0,
    "br": 465,
    "pr": 673,
    "wt": ["High Firepower", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Sp. Shot CRIT Rate boosted 30%"
    },
    "name": "Beam Shot Rifle",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 966,
    "ma": 0,
    "sa": 0,
    "md": 2523,
    "sd": 966,
    "br": 0,
    "pr": 1082,
    "wt": ["High Firepower", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Small Missiles",
      "description": "Launch small missiles stowed in your shoulder. You can move while firing.",
      "category": "Physical Shot"
    },
    "name": "Shield [Sazabi]"
  }]
}, {
  "name": "Sengoku Astray Gundam",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 796,
    "md": 1180,
    "sd": 796,
    "br": 417,
    "pr": 212,
    "wt": ["Heavy Armor", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, EX Skill Piercing boosted 28%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1976,
    "ma": 796,
    "sa": 383,
    "md": 796,
    "sd": 796,
    "br": 610,
    "pr": 0,
    "wt": ["Heavy Armor", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, EX Skill CD reduced 20%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 796,
    "ma": 2781,
    "sa": 0,
    "md": 1180,
    "sd": 1180,
    "br": 0,
    "pr": 0,
    "wt": ["Heavy Armor", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Hidden Arm & Samurai Sword",
      "description": "Mow down foes with dual blades hidden in your shoulders. Lowers hit enemy Gunpla's Melee Defense by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 796,
    "br": 610,
    "pr": 417,
    "wt": ["Heavy Armor", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "With Module Category equipped, EX Skill Piercing boosted 28%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 796,
    "br": 610,
    "pr": 417,
    "wt": ["Heavy Armor", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Particle Fa Jin",
      "description": "Inject particles into your foe, destroying them from within. Raise Shot Attack of your Squad by 39%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1180,
    "ma": 0,
    "sa": 0,
    "md": 1601,
    "sd": 796,
    "br": 805,
    "pr": 212,
    "wt": ["Heavy Armor", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Enemy Strong Melee Power reduced 30%"
    },
    "name": "Oni No Tate"
  }]
}, {
  "name": "Serpent Custom",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 137,
    "ma": 137,
    "sa": 1012,
    "md": 137,
    "sd": 372,
    "br": 0,
    "pr": 0,
    "wt": ["Mass P.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 90%, Projectile Speed boosted 10%"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 511,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 190,
    "pr": 0,
    "wt": ["Mass P.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Protection Hack α",
      "description": "Reduce target Physical Resist by 69%",
      "category": "Debuff"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 372,
    "ma": 287,
    "sa": 137,
    "md": 137,
    "sd": 511,
    "br": 138,
    "pr": 54,
    "wt": ["Mass P.", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Archer Stance α",
      "description": "Raise your Shot Attack by 39%",
      "category": "Buff"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 138,
    "pr": 190,
    "wt": ["Mass P.", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Sp. Shot power boosted 10%"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 190,
    "pr": 138,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Bazooka",
      "description": "Fire a bazooka suspended on your back. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "range",
    "mark": 4,
    "a": 137,
    "ma": 0,
    "sa": 1309,
    "md": 0,
    "sd": 0,
    "br": 138,
    "pr": 54,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Gundam Type\" enemy, Sp. Shot DMG taken reduced 10"
    },
    "name": "Bazooka [Serpent]",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 4,
    "a": 137,
    "ma": 0,
    "sa": 1309,
    "md": 0,
    "sd": 0,
    "br": 138,
    "pr": 54,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Shooting DMG Output boosted 10"
    },
    "name": "Beam Cannon [Serpent]",
    "type": "Beam"
  }]
}, {
  "name": "Serpent Custom [ALT]",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 137,
    "ma": 137,
    "sa": 1012,
    "md": 137,
    "sd": 372,
    "br": 0,
    "pr": 0,
    "wt": ["Mass P.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, magazine boosted 10%"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 511,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 190,
    "pr": 0,
    "wt": ["Mass P.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Protection Hack α",
      "description": "Reduce target Physical Resist by 69%",
      "category": "Debuff"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 372,
    "ma": 287,
    "sa": 137,
    "md": 137,
    "sd": 511,
    "br": 138,
    "pr": 54,
    "wt": ["Mass P.", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Archer Stance α",
      "description": "Raise your Shot Attack by 39%",
      "category": "Buff"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 138,
    "pr": 190,
    "wt": ["Mass P.", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Sp. Shot power boosted 10%"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 190,
    "pr": 138,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Cannon",
      "description": "Wedge the beam cannon on your back under your arm to fire beams.",
      "category": "Beam Shot"
    }
  }, {
    "part": "range",
    "mark": 4,
    "a": 137,
    "ma": 0,
    "sa": 1309,
    "md": 0,
    "sd": 0,
    "br": 138,
    "pr": 54,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Gundam Type\" enemy, Sp. Shot DMG taken reduced 10"
    },
    "name": "Bazooka [ALT] [Serpent]",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 4,
    "a": 137,
    "ma": 0,
    "sa": 1309,
    "md": 0,
    "sd": 0,
    "br": 138,
    "pr": 54,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Shooting DMG Output boosted 10"
    },
    "name": "Beam Cannon [ALT] [Serpent]",
    "type": "Beam"
  }]
}, {
  "name": "Serpent Custom [Double Gatling Gun]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 137,
    "ma": 137,
    "sa": 1016,
    "md": 137,
    "sd": 373,
    "br": 0,
    "pr": 0,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon magazine boosted 10%"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 511,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 110,
    "pr": 110,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 90%, Melee DMG taken reduced 10"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 373,
    "ma": 287,
    "sa": 137,
    "md": 137,
    "sd": 511,
    "br": 110,
    "pr": 110,
    "wt": ["Mass P.", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Gatling Guns",
      "description": "Fire beam Gatling guns on both arms toward the enemy.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 138,
    "pr": 138,
    "wt": ["Mass P.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Sp. Shot Power boosted 10%"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 138,
    "pr": 138,
    "wt": ["Mass P.", "For Urban Area"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Sp. Shot DMG taken reduced 10"
    }
  }]
}, {
  "name": "Shenlong Gundam",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1605,
    "ma": 384,
    "sa": 1181,
    "md": 797,
    "sd": 797,
    "br": 418,
    "pr": 0,
    "wt": ["Close Combat", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 2382,
    "ma": 384,
    "sa": 384,
    "md": 797,
    "sd": 797,
    "br": 611,
    "pr": 0,
    "wt": ["Close Combat", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Strong Melee Power boosted 30%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1181,
    "ma": 1181,
    "sa": 384,
    "md": 1181,
    "sd": 1181,
    "br": 213,
    "pr": 0,
    "wt": ["Close Combat", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Dragon Fang",
      "description": "Strike with extended arm, then unleash a burst of flame. Lowers hit enemy Gunpla's Shot Defense by 24%",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 1181,
    "sd": 1181,
    "br": 213,
    "pr": 611,
    "wt": ["Close Combat", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), 20% chance to not recoil"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 384,
    "md": 1181,
    "sd": 1181,
    "br": 611,
    "pr": 213,
    "wt": ["Close Combat", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Armed Aura γ",
      "description": "Your squad resists flinching for a set period of time.",
      "category": "Buff"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 1181,
    "ma": 1605,
    "sa": 0,
    "md": 384,
    "sd": 384,
    "br": 611,
    "pr": 418,
    "wt": ["Close Combat", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Hell Jumper",
      "description": "Jump high to deal a powerful blow with your lance from the air. Lower's hit enemy Gunpla's Beam Resist by 39%",
      "category": "Beam Melee"
    },
    "name": "Beam Glaive",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 0,
    "md": 1181,
    "sd": 1181,
    "br": 1029,
    "pr": 0,
    "wt": ["Close Combat", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Shield Throw",
      "description": "Throw your shield to attack.",
      "category": "Physical Melee"
    },
    "name": "Shenlong Shield"
  }]
}, {
  "name": "Shining Gundam",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 796,
    "md": 1180,
    "sd": 796,
    "br": 212,
    "pr": 417,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Projectile Speed boosted 15%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1976,
    "ma": 796,
    "sa": 383,
    "md": 796,
    "sd": 796,
    "br": 0,
    "pr": 610,
    "wt": ["Mobile Fighter", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Super Mode",
      "description": "Enter Super Mode for enhanced combat prowess. Raises speed by 20%. Raise your Melee Attack by 29%. Raise your Melee Defense by 19%.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 796,
    "ma": 2781,
    "sa": 0,
    "md": 1180,
    "sd": 1180,
    "br": 0,
    "pr": 0,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Shining Finger Sword",
      "description": "Crush foes with your love, your anger, and all of your sorrow. Raise Melee Attack of your Squad by 19%. Raise Melee Defense of your Squad by 24%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 796,
    "br": 417,
    "pr": 610,
    "wt": ["Mobile Fighter", "For Urban Area"],
    "ex": {
      "type": "EX Skill",
      "name": "Rapid Thrust",
      "description": "Unleash a blindingly fast flurry with sabers in each hand.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1180,
    "ma": 383,
    "sa": 383,
    "md": 1180,
    "sd": 796,
    "br": 417,
    "pr": 610,
    "wt": ["Mobile Fighter", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, 20% chance to not recoil"
    }
  }]
}, {
  "name": "Stargazer Gundam",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 889,
    "md": 889,
    "sd": 889,
    "br": 302,
    "pr": 0,
    "wt": ["For Space", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Shot Guidance boosted 14%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1140,
    "ma": 291,
    "sa": 0,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 0,
    "wt": ["For Space", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Enemy Strong Melee Power reduced 30%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 889,
    "sa": 291,
    "md": 2297,
    "sd": 2297,
    "br": 874,
    "pr": 302,
    "wt": ["For Space", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon reload speed boosted 15%"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1140,
    "sd": 1140,
    "br": 126,
    "pr": 302,
    "wt": ["For Space", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill DMG taken reduced 25"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1140,
    "sd": 1140,
    "br": 302,
    "pr": 126,
    "wt": ["For Space", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Voiture Lumiere",
      "description": "Catch solar wind using a ring-shaped quantum field, converting it into propulsive force. Raise speed by 20%. Raises your Shot Attack by 19%. Raises your Shot Defense by 29%.",
      "category": "Awakening"
    }
  }]
}, {
  "name": "Stark Jegan",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 287,
    "ma": 138,
    "sa": 902,
    "md": 287,
    "sd": 138,
    "br": 55,
    "pr": 0,
    "wt": ["Commander", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Vulcan Pod",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 376,
    "ma": 138,
    "sa": 138,
    "md": 511,
    "sd": 287,
    "br": 194,
    "pr": 0,
    "wt": ["Commander", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Strong Melee DMG Output boosted 10"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 641,
    "sa": 138,
    "md": 376,
    "sd": 287,
    "br": 0,
    "pr": 0,
    "wt": ["Commander", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Triple Missile Pod",
      "description": "Fire missiles from pods on your shoulders at multiple foes.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 138,
    "sa": 287,
    "md": 376,
    "sd": 138,
    "br": 194,
    "pr": 138,
    "wt": ["Commander", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Barrier Stance α",
      "description": "Raise your Shot Defense by 39%",
      "category": "Buff"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 138,
    "sa": 138,
    "md": 511,
    "sd": 138,
    "br": 194,
    "pr": 138,
    "wt": ["Commander", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Sp. Shot DMG taken reduced 10"
    }
  }, {
    "part": "range",
    "mark": 4,
    "a": 138,
    "ma": 0,
    "sa": 1154,
    "md": 287,
    "sd": 0,
    "br": 138,
    "pr": 55,
    "wt": ["Commander", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Shooting DMG Output boosted 10"
    },
    "name": "Beam Rifle [Stark Jegan]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 4,
    "a": 138,
    "ma": 0,
    "sa": 1154,
    "md": 287,
    "sd": 0,
    "br": 138,
    "pr": 55,
    "wt": ["Commander", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Shooting DMG Output boosted 10"
    },
    "name": "Hyper Bazooka [Stark Jegan]",
    "type": "Physical"
  }]
}, {
  "name": "Stark Jegan [ALT]",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 287,
    "ma": 138,
    "sa": 902,
    "md": 287,
    "sd": 138,
    "br": 55,
    "pr": 0,
    "wt": ["Commander", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Vulcan Pod",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 376,
    "ma": 138,
    "sa": 138,
    "md": 511,
    "sd": 287,
    "br": 194,
    "pr": 0,
    "wt": ["Commander", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Strong Melee DMG Output boosted 10"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 641,
    "sa": 138,
    "md": 376,
    "sd": 287,
    "br": 0,
    "pr": 0,
    "wt": ["Commander", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Arm-Mounted Grenade Launcher",
      "description": "Launch grenades from your forearm. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 138,
    "sa": 287,
    "md": 376,
    "sd": 138,
    "br": 194,
    "pr": 138,
    "wt": ["Commander", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Barrier Stance α",
      "description": "Raise your Shot Defense by 39%",
      "category": "Buff"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 138,
    "sa": 138,
    "md": 511,
    "sd": 138,
    "br": 194,
    "pr": 138,
    "wt": ["Commander", "GM Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Sp. Shot DMG taken reduced 10"
    }
  }, {
    "part": "range",
    "mark": 4,
    "a": 138,
    "ma": 0,
    "sa": 1154,
    "md": 287,
    "sd": 0,
    "br": 138,
    "pr": 55,
    "wt": ["Commander", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, CRIT Rate boosted 10%"
    },
    "name": "Beam Rifle [ALT] [Stark Jegan]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 4,
    "a": 138,
    "ma": 0,
    "sa": 1154,
    "md": 287,
    "sd": 0,
    "br": 138,
    "pr": 55,
    "wt": ["Commander", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Shooting DMG Output boosted 10"
    },
    "name": "Hyper Bazooka [ALT] [Stark Jegan]",
    "type": "Physical"
  }]
}, {
  "name": "Strike Noir",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 291,
    "ma": 291,
    "sa": 2300,
    "md": 291,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Gundam Type", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1142,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 428,
    "pr": 0,
    "wt": ["Gundam Type", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Dual Sabers Category equipped, EX Skill DMG Output boosted 20"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 889,
    "ma": 558,
    "sa": 291,
    "md": 291,
    "sd": 1142,
    "br": 302,
    "pr": 126,
    "wt": ["Gundam Type", "For Tundra"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Melee CRIT Rate boosted 17%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 302,
    "pr": 428,
    "wt": ["Gundam Type", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Rifle Shorty",
      "description": "Fire the twin pistols on your legs.",
      "category": "Beam Shot"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 558,
    "sd": 1142,
    "br": 428,
    "pr": 302,
    "wt": ["Gundam Type", "For Tundra"],
    "ex": {
      "type": "EX Skill",
      "name": "Dual Linear Guns",
      "description": "Bombard enemies with dual railguns. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 889,
    "ma": 1701,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 302,
    "wt": ["Gundam Type", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "12% chance of attacks penetrating super armor"
    },
    "name": "Fragarach 3-Beam Blade",
    "type": "Beam"
  }]
}, {
  "name": "Strike Rouge [IWSP]",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 1698,
    "md": 558,
    "sd": 558,
    "br": 302,
    "pr": 0,
    "wt": ["Commander", "For Base"],
    "ex": {
      "type": "EX Skill",
      "name": "Igelstellung",
      "description": "Fire the anti-air autocannons in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1140,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 0,
    "wt": ["Commander", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Enemy EX Skill Penetration reduced 22%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 1698,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Commander", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, Melee CRIT Rate boosted 17%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 248,
    "pr": 302,
    "wt": ["Commander", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Rapid Thrust",
      "description": "Unleash a blindingly fast flurry with knives in each hand.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 428,
    "pr": 302,
    "wt": ["Commander", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Railgun & Single-Mounted Cannon",
      "description": "Fire 115mm Railgun and 105mm Single-Mounted Cannon from your integrated Weapons Striker Pack (IWSP)",
      "category": "Physical Shot"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 558,
    "ma": 2297,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 428,
    "pr": 126,
    "wt": ["Commander", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Melee DMG Output boosted 20"
    },
    "name": "9.1m Experimental Anti-Ship Sword",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 2,
    "a": 1140,
    "ma": 0,
    "sa": 2297,
    "md": 1140,
    "sd": 1140,
    "br": 1016,
    "pr": 302,
    "wt": ["Commander", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Dual Shredder",
      "description": "Execute suppressive fire with special rounds from your Gatling Gun.",
      "category": "Physical Shot"
    },
    "combo": "shield",
    "name": "Combine Shield",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 2,
    "a": 558,
    "ma": 0,
    "sa": 0,
    "md": 1140,
    "sd": 1140,
    "br": 588,
    "pr": 126,
    "wt": ["Commander", "For Base"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Shooting DMG taken reduced 20"
    },
    "name": "Anti-Beam Shield [Strike Rouge]"
  }]
}, {
  "name": "Susanowo",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 889,
    "ma": 291,
    "sa": 558,
    "md": 889,
    "sd": 291,
    "br": 126,
    "pr": 302,
    "wt": ["Close Combat", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Chakram",
      "description": "Launch a ring-shaped beam from your clavicle antenna. You can move freely while firing. Lowers hit enemy Gunpla's Melee Defense by 19%. Lowers hit enemy Gunpla's Shot Defense by 19%.",
      "category": "Beam Shot"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1142,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 0,
    "pr": 428,
    "wt": ["Close Combat", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "GN Vulcan",
      "description": "Attack enemies ahead with small, rapid-fire particle beams from your torso.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 291,
    "ma": 2300,
    "sa": 291,
    "md": 1142,
    "sd": 291,
    "br": 0,
    "pr": 0,
    "wt": ["Close Combat", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Dual Sabers Category equipped, Melee Power boosted 25%"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 428,
    "pr": 302,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Trans-Am Raid",
      "description": "Release particles in your GN Drive for a high-speed attack. Raise Melee Attack of your Squad by 39%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 1142,
    "sd": 558,
    "br": 302,
    "pr": 428,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "15% chance to prevent vernier consumption when stepping"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 291,
    "ma": 2867,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 126,
    "pr": 302,
    "wt": ["Close Combat", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, Initial EX Skill Charge boosted 12%"
    },
    "name": "Shiranui/Unryu",
    "type": "Physical"
  }]
}, {
  "name": "Sword Strike Gundam",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 292,
    "sa": 1993,
    "md": 292,
    "sd": 292,
    "br": 302,
    "pr": 127,
    "wt": ["High Firepower", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Protection Hack β",
      "description": "Reduce Physical Resist of all enemies by 39%.",
      "category": "Debuff"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1144,
    "ma": 558,
    "sa": 558,
    "md": 558,
    "sd": 558,
    "br": 430,
    "pr": 0,
    "wt": ["High Firepower", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Against a large enemy, Enemy Strong Melee Power reduced 25%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 1144,
    "ma": 2593,
    "sa": 1144,
    "md": 891,
    "sd": 891,
    "br": 718,
    "pr": 0,
    "wt": ["High Firepower", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Block Stance γ",
      "description": "Raise your Melee Defense of your squad by 39%",
      "category": "Buff"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 558,
    "sa": 292,
    "md": 558,
    "sd": 558,
    "br": 302,
    "pr": 430,
    "wt": ["High Firepower", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Against a large enemy, Melee CRIT Rate boosted 17%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 558,
    "sa": 292,
    "md": 558,
    "sd": 558,
    "br": 430,
    "pr": 302,
    "wt": ["High Firepower", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Schwert Gewehr",
      "description": "Jump and bring a charged blade down on the foe's head. Raise your Melee Defense by 19%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 2,
    "a": 292,
    "ma": 2593,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 430,
    "pr": 302,
    "wt": ["High Firepower", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Maelstrom",
      "description": "Blow through foes, spinning to strike them with your blade.",
      "category": "Beam Melee"
    },
    "name": "Schwert Gewehr",
    "type": "Beam"
  }]
}, {
  "name": "Tallgeese [Endless Waltz Ver. / Beginner Campaign]",
  "attribute": "Power",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 650,
    "ma": 389,
    "sa": 2652,
    "md": 389,
    "sd": 389,
    "br": 218,
    "pr": 218,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Shooting CRIT Rate boosted 17%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1457,
    "ma": 650,
    "sa": 650,
    "md": 650,
    "sd": 650,
    "br": 297,
    "pr": 297,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"High Mobility\", Shooting Power boosted 25%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1457,
    "ma": 3469,
    "sa": 1457,
    "md": 1039,
    "sd": 1039,
    "br": 428,
    "pr": 428,
    "wt": ["High Mobility", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Dober Gun",
      "description": "Bathe foes in beams from the Dober gun on your shoulder.",
      "category": "Beam Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 650,
    "ma": 807,
    "sa": 389,
    "md": 807,
    "sd": 650,
    "br": 428,
    "pr": 428,
    "wt": ["High Mobility", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Saber Category equipped, 13% chance to not recoil"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 650,
    "ma": 807,
    "sa": 389,
    "md": 807,
    "sd": 650,
    "br": 428,
    "pr": 428,
    "wt": ["High Mobility", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Vernier Consumption reduced 15%"
    }
  }]
}, {
  "name": "Tallgeese [Endless Waltz Ver.]",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 2789,
    "md": 384,
    "sd": 384,
    "br": 213,
    "pr": 213,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, EX Skill DMG Output boosted 35"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1606,
    "ma": 799,
    "sa": 799,
    "md": 799,
    "sd": 799,
    "br": 290,
    "pr": 290,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, EX Skill DMG taken reduced 35"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1606,
    "ma": 3587,
    "sa": 1606,
    "md": 1182,
    "sd": 1182,
    "br": 477,
    "pr": 477,
    "wt": ["High Mobility", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Dober Gun",
      "description": "Bathe foes in beams from the Dober gun on your shoulder.",
      "category": "Beam Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 799,
    "sa": 384,
    "md": 799,
    "sd": 799,
    "br": 477,
    "pr": 477,
    "wt": ["High Mobility", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "In-Fighter Job, EX Skill DMG taken reduced 35"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 799,
    "ma": 799,
    "sa": 384,
    "md": 799,
    "sd": 799,
    "br": 477,
    "pr": 477,
    "wt": ["High Mobility", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Buff EX Skill Time up 22%"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 3587,
    "md": 0,
    "sd": 0,
    "br": 420,
    "pr": 420,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon magazine boosted 20%"
    },
    "name": "Dober Gun",
    "type": "Beam"
  }]
}, {
  "name": "Tallgeese II",
  "attribute": "Technique",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 1700,
    "md": 558,
    "sd": 558,
    "br": 126,
    "pr": 126,
    "wt": ["Commander", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Offense Up α",
      "description": "Raise Melee and Shot Attack of your Squad by 39%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1142,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 213,
    "pr": 213,
    "wt": ["Commander", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"For Space\" enemy, EX Skill Piercing boosted 22%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 1142,
    "ma": 1700,
    "sa": 291,
    "md": 1991,
    "sd": 1991,
    "br": 302,
    "pr": 302,
    "wt": ["Commander", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Dober Gun",
      "description": "Bathe foes in beams from the Dober gun on your shoulder.",
      "category": "Beam Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 349,
    "pr": 375,
    "wt": ["Commander", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"For Space\" enemy, Mid Shot Attack raised 14%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 375,
    "pr": 349,
    "wt": ["Commander", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"For Space\" enemy, Shooting Power boosted 25%"
    }
  }]
}, {
  "name": "The O",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1352,
    "ma": 551,
    "sa": 964,
    "md": 1352,
    "sd": 964,
    "br": 463,
    "pr": 282,
    "wt": ["High Mobility", "Commander"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Close Shot Attack raised 20%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 2128,
    "ma": 964,
    "sa": 551,
    "md": 964,
    "sd": 964,
    "br": 669,
    "pr": 0,
    "wt": ["High Mobility", "Commander"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, EX Skill Piercing boosted 28%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 964,
    "ma": 2913,
    "sa": 0,
    "md": 1352,
    "sd": 1352,
    "br": 0,
    "pr": 0,
    "wt": ["High Mobility", "Commander"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"High Mobility\", Melee Power boosted 30%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 1352,
    "ma": 551,
    "sa": 551,
    "md": 1352,
    "sd": 964,
    "br": 669,
    "pr": 463,
    "wt": ["High Mobility", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Heaven's Judgement",
      "description": "Hack away at enemies with the beam sword held in the hidden arms equipped to your waist. Squad recovers 48% of maximum Armor. Raise Melee Attack of your Squad by 29%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 1352,
    "ma": 964,
    "sa": 551,
    "md": 964,
    "sd": 964,
    "br": 669,
    "pr": 463,
    "wt": ["High Mobility", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Saber Combo",
      "description": "Unleash a combo with the saber in your right hard.",
      "category": "Beam Melee"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 1352,
    "ma": 0,
    "sa": 3135,
    "md": 0,
    "sd": 0,
    "br": 669,
    "pr": 282,
    "wt": ["High Mobility", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon reload speed boosted 20%"
    },
    "name": "Large Beam Rifle",
    "type": "Beam"
  }]
}, {
  "name": "Tieren Taozi",
  "attribute": "Power",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 1144,
    "ma": 292,
    "sa": 891,
    "md": 558,
    "sd": 558,
    "br": 302,
    "pr": 0,
    "wt": ["For Space", "Heavy Armor"],
    "ex": {
      "type": "Part Traits",
      "name": "While \"For Space\", Mid Shot Attack raised 14%"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1702,
    "ma": 292,
    "sa": 292,
    "md": 558,
    "sd": 558,
    "br": 430,
    "pr": 0,
    "wt": ["For Space", "Heavy Armor"],
    "ex": {
      "type": "EX Skill",
      "name": "30mm Machine Gun",
      "description": "Attack enemies ahead with the 30mm machine guns in your torso.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 891,
    "ma": 891,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 127,
    "pr": 0,
    "wt": ["For Space", "Heavy Armor"],
    "ex": {
      "type": "EX Skill",
      "name": "200mm x 25 Smoothbore Gun",
      "description": "Attack enemies with the gun on your arm. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 127,
    "pr": 430,
    "wt": ["For Space", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "Middle-Shooter Job, Shot spread reduced 15%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 891,
    "ma": 292,
    "sa": 292,
    "md": 891,
    "sd": 891,
    "br": 430,
    "pr": 127,
    "wt": ["For Space", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Vernier recovery rate boosted 16%"
    }
  }, {
    "part": "range",
    "mark": 2,
    "a": 891,
    "ma": 0,
    "sa": 1144,
    "md": 292,
    "sd": 292,
    "br": 430,
    "pr": 302,
    "wt": ["For Space", "Ace Excl."],
    "ex": {
      "type": "Part Traits",
      "name": "Physical ranged weapon, reload speed boosted 15%"
    },
    "name": "200mm x 25 Smoothbore Gun"
  }]
}, {
  "name": "Turn A Gundam",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 969,
    "ma": 553,
    "sa": 2138,
    "md": 553,
    "sd": 1359,
    "br": 384,
    "pr": 384,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Close Shot Attack raised 20%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1359,
    "ma": 969,
    "sa": 553,
    "md": 969,
    "sd": 1738,
    "br": 384,
    "pr": 384,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Moonbeam Butterfly",
      "description": "Discharge nanomachines from your rear vanes to fly in and annihilate the enemy. Squad recovers 68% of maximum Armor. Raise Shot Attack of your Squad by 39%.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 969,
    "ma": 2929,
    "sa": 553,
    "md": 969,
    "sd": 1359,
    "br": 0,
    "pr": 0,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Flip Jump Saber",
      "description": "Brandish sabers in both hands and leap-attack the enemy.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 969,
    "ma": 553,
    "sa": 553,
    "md": 553,
    "sd": 1359,
    "br": 558,
    "pr": 558,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Enemy Melee Power reduced 30%"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 553,
    "ma": 3698,
    "sa": 0,
    "md": 0,
    "sd": 969,
    "br": 384,
    "pr": 384,
    "wt": ["Protag.", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Strong Melee CRIT Rate boosted 30%"
    },
    "name": "Beam Saber [Turn A]",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 553,
    "ma": 3698,
    "sa": 0,
    "md": 0,
    "sd": 969,
    "br": 384,
    "pr": 384,
    "wt": ["Protag.", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Flexible Smash",
      "description": "Pulverize the enemy with your hammer.",
      "category": "Physical Melee"
    },
    "name": "Gundam Hammer",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 1,
    "a": 969,
    "ma": 0,
    "sa": 2138,
    "md": 0,
    "sd": 969,
    "br": 384,
    "pr": 384,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, EX Skill Power boosted 30%"
    },
    "name": "Beam Rifle [Turn A]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 969,
    "ma": 0,
    "sa": 0,
    "md": 969,
    "sd": 2138,
    "br": 558,
    "pr": 558,
    "wt": ["Protag.", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Buff EX Skill Effect 22%"
    },
    "name": "Shield [Turn A]"
  }]
}, {
  "name": "Turn X",
  "attribute": "Power",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 965,
    "ma": 553,
    "sa": 2922,
    "md": 553,
    "sd": 553,
    "br": 284,
    "pr": 464,
    "wt": ["Close Combat", "Transformer"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), EX Skill Power boosted 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1734,
    "ma": 965,
    "sa": 965,
    "md": 965,
    "sd": 965,
    "br": 0,
    "pr": 673,
    "wt": ["Close Combat", "Transformer"],
    "ex": {
      "type": "EX Skill",
      "name": "Moonbeam Butterfly",
      "description": "Fire a straight line of nanomachines upward with your back to the enemy.",
      "category": "Beam Shot"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 965,
    "ma": 2922,
    "sa": 1356,
    "md": 553,
    "sd": 553,
    "br": 0,
    "pr": 0,
    "wt": ["Close Combat", "Transformer"],
    "ex": {
      "type": "EX Skill",
      "name": "Fusion Destruction Manipulator",
      "description": "Fire beams from your open palm and blast caught enemies with a Shining Finger. Raise Melee Attack of your Squad by 39%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 965,
    "ma": 965,
    "sa": 553,
    "md": 965,
    "sd": 965,
    "br": 673,
    "pr": 464,
    "wt": ["Close Combat", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%. Melee CRIT Rate boosted 30%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 965,
    "ma": 965,
    "sa": 553,
    "md": 965,
    "sd": 965,
    "br": 464,
    "pr": 673,
    "wt": ["Close Combat", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Carapace",
      "description": "Attack enemies with the rifle and bazooka equipped to your weapon platform.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Unicorn Gundam",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 965,
    "ma": 553,
    "sa": 2922,
    "md": 553,
    "sd": 553,
    "br": 284,
    "pr": 464,
    "wt": ["For Space", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1734,
    "ma": 965,
    "sa": 965,
    "md": 965,
    "sd": 965,
    "br": 0,
    "pr": 673,
    "wt": ["For Space", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "NT-D",
      "description": "Enter Destroy Mode and Increase your reflexes with Psycho Frame. Raise speed by 20%. Raises your Melee Attack by 29%. Raises your Melee Defense by 19%.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 965,
    "ma": 2922,
    "sa": 1356,
    "md": 553,
    "sd": 553,
    "br": 0,
    "pr": 0,
    "wt": ["For Space", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Tonfa",
      "description": "Execute a combo using Beam Tonfa attached to forearm. Squad recovers 48% of maximum Armor. Raises Shot Attack of your Squad by 19%. Raises Beam Resist of your Squad by 49%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 965,
    "ma": 965,
    "sa": 553,
    "md": 965,
    "sd": 965,
    "br": 673,
    "pr": 464,
    "wt": ["For Space", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Sp. Shot Power boosted 30%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 965,
    "ma": 965,
    "sa": 553,
    "md": 965,
    "sd": 965,
    "br": 464,
    "pr": 673,
    "wt": ["For Space", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Double Saber Rush",
      "description": "Cleave through enemies with sabers in each hand.",
      "category": "Beam Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 553,
    "ma": 3690,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 464,
    "pr": 673,
    "wt": ["For Space", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Initial EX Skill Charge boosted 20%"
    },
    "name": "Beam Saber [Unicorn]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 553,
    "ma": 154,
    "sa": 3690,
    "md": 0,
    "sd": 0,
    "br": 284,
    "pr": 464,
    "wt": ["For Space", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, Sp. Shot Power boosted 30%"
    },
    "name": "Beam Magnum",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 553,
    "ma": 154,
    "sa": 3690,
    "md": 0,
    "sd": 0,
    "br": 284,
    "pr": 464,
    "wt": ["For Space", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Enemy Shooting Power reduced 30%"
    },
    "name": "Hyper Bazooka [Unicorn]",
    "type": "Physical"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 965,
    "ma": 965,
    "sa": 553,
    "md": 965,
    "sd": 965,
    "br": 0,
    "pr": 1082,
    "wt": ["For Space", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 40%, EX Skill DMG Output Boosted 35"
    },
    "name": "Shield [Unicorn]"
  }]
}, {
  "name": "VEETWO GUNDAM",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 2791,
    "md": 799,
    "sd": 384,
    "br": 213,
    "pr": 0,
    "wt": ["Ace Excl.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Shooting Power boosted 30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1184,
    "ma": 384,
    "sa": 384,
    "md": 1608,
    "sd": 799,
    "br": 614,
    "pr": 0,
    "wt": ["Ace Excl.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, EX Skill CD reduced 20%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 799,
    "ma": 1982,
    "sa": 384,
    "md": 1184,
    "sd": 799,
    "br": 0,
    "pr": 0,
    "wt": ["Ace Excl.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Hand Missile Pod",
      "description": "Launch missiles stored in your forearm. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 799,
    "md": 1184,
    "sd": 384,
    "br": 614,
    "pr": 420,
    "wt": ["Ace Excl.", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Bazooka Category equipped, Projectile Speed boosted 15%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 779,
    "ma": 384,
    "sa": 384,
    "md": 1608,
    "sd": 384,
    "br": 614,
    "pr": 420,
    "wt": ["Ace Excl.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Missile Pod & Beam Cannon",
      "description": "Attack enemies ahead with the missile and beam cannon on your back.",
      "category": "Beam Shot"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 3590,
    "md": 799,
    "sd": 0,
    "br": 420,
    "pr": 213,
    "wt": ["Ace Excl.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Big Beam Bazooka",
      "description": "Fire a high-energy beam at enemies from your bazooka.",
      "category": "Beam Shot"
    },
    "name": "BIG BEAM BAZOOKA",
    "type": "Beam"
  }]
}, {
  "name": "Victory Gundam",
  "attribute": "Technique",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1181,
    "ma": 384,
    "sa": 796,
    "md": 1181,
    "sd": 384,
    "br": 213,
    "pr": 417,
    "wt": ["For Forest", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1602,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 0,
    "pr": 611,
    "wt": ["For Forest", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, EX Skill Piercing boosted 28%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1181,
    "ma": 3177,
    "sa": 384,
    "md": 3997,
    "sd": 1181,
    "br": 0,
    "pr": 1028,
    "wt": ["For Forest", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Vertical Saber Spin",
      "description": "Spin your right wrist, attacking enemies with an oscillating Beam Saber. Lower hit enemy Gunpla's Beam Resist by 39%.",
      "category": "Beam Melee"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 611,
    "pr": 417,
    "wt": ["For Forest", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "With Rifle Category equipped, Close Shot Attack raised 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 796,
    "ma": 384,
    "sa": 384,
    "md": 1602,
    "sd": 796,
    "br": 417,
    "pr": 611,
    "wt": ["For Forest", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Debuff EX Skill Time up 22%"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3997,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 213,
    "pr": 417,
    "wt": ["For Forest", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Strong Melee CRIT Rate boosted 30%"
    },
    "name": "Beam Saber [Victory]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 1181,
    "ma": 0,
    "sa": 2380,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 611,
    "wt": ["For Forest", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon reload speed boosted 20%"
    },
    "name": "Beam Rifle [Victory]",
    "type": "Beam"
  }]
}, {
  "name": "Victory Gundam [Beginner Campaign]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 1192,
    "ma": 388,
    "sa": 805,
    "md": 1035,
    "sd": 388,
    "br": 217,
    "pr": 332,
    "wt": ["For Forest", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1452,
    "ma": 388,
    "sa": 388,
    "md": 1452,
    "sd": 648,
    "br": 0,
    "pr": 513,
    "wt": ["For Forest", "Protag."],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, EX Skill Piercing boosted 22%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1035,
    "ma": 3032,
    "sa": 388,
    "md": 3835,
    "sd": 1035,
    "br": 0,
    "pr": 938,
    "wt": ["For Forest", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Vertical Saber Spin",
      "description": "Spin your right wrist, attacking enemies with an oscillating Beam Saber. Lower hit enemy Gunpla's Beam Resist by 39%.",
      "category": "Beam Melee"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 1,
    "a": 648,
    "ma": 388,
    "sa": 388,
    "md": 1452,
    "sd": 648,
    "br": 513,
    "pr": 332,
    "wt": ["For Forest", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Melee CRIT Rate boosted 17%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 648,
    "ma": 388,
    "sa": 388,
    "md": 1452,
    "sd": 648,
    "br": 332,
    "pr": 513,
    "wt": ["For Forest", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Melee Power boosted 25%"
    }
  }]
}, {
  "name": "Wing Gundam",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 797,
    "ma": 384,
    "sa": 2785,
    "md": 384,
    "sd": 384,
    "br": 418,
    "pr": 213,
    "wt": ["Transformer", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1605,
    "ma": 797,
    "sa": 797,
    "md": 797,
    "sd": 797,
    "br": 611,
    "pr": 0,
    "wt": ["Transformer", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Self-Destruct",
      "description": "Self-destruct in an explosion that envelops foes around you. Take 90% damage to max Armor.",
      "category": "Physical Melee"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 797,
    "ma": 2785,
    "sa": 1181,
    "md": 384,
    "sd": 384,
    "br": 0,
    "pr": 0,
    "wt": ["Transformer", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 70%, Enemy Melee Power reduced 30% "
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 797,
    "ma": 797,
    "sa": 384,
    "md": 797,
    "sd": 797,
    "br": 418,
    "pr": 611,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 70%, Long Shot Attack raised 20%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 797,
    "ma": 797,
    "sa": 384,
    "md": 797,
    "sd": 797,
    "br": 611,
    "pr": 418,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 70%, Long Shot Attack raised 20%"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 384,
    "ma": 3582,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 611,
    "pr": 418,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Long-Shooter Job, Job Gauge Increase boosted 17%"
    },
    "name": "Beam Saber [Wing]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 384,
    "ma": 0,
    "sa": 3582,
    "md": 0,
    "sd": 0,
    "br": 417,
    "pr": 213,
    "wt": ["Transformer", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Max Output Buster Rifle",
      "description": "Fire a rifle rivaling a warship's main battery at full output.",
      "category": "Beam Shot"
    },
    "name": "Buster Rifle",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 797,
    "ma": 797,
    "sa": 384,
    "md": 797,
    "sd": 797,
    "br": 1029,
    "pr": 0,
    "wt": ["Transformer", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Shield Bash",
      "description": "Unleash a combo with the shield on your right arm. Lowers hit enemy Gunpla's Shot Defense by 19%.",
      "category": "Beam Melee"
    },
    "name": "Shield [Wing]"
  }]
}, {
  "name": "Wing Gundam [Pre-Registration Reward]",
  "attribute": "Technique",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 187,
    "ma": 187,
    "sa": 1480,
    "md": 187,
    "sd": 570,
    "br": 0,
    "pr": 0,
    "wt": ["Transformer", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 754,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 0,
    "pr": 281,
    "wt": ["Transformer", "Protag."],
    "ex": {
      "type": "EX Skill",
      "name": "Machine Cannon",
      "description": "Fire the machine cannon in your chest at foes straight ahead. You can move freely while shooting.",
      "category": "Physical Shot"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 570,
    "ma": 364,
    "sa": 187,
    "md": 187,
    "sd": 754,
    "br": 81,
    "pr": 201,
    "wt": ["Transformer", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Melee DMG Output boosted 25"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 281,
    "pr": 201,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Power attribute (self), Long Shot Attack raised 14%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 754,
    "br": 201,
    "pr": 281,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "All-Rounder Job, EX Skill Piercing boosted 22%"
    }
  }, {
    "part": "melee",
    "mark": 3,
    "a": 570,
    "ma": 1089,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 201,
    "pr": 281,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Defender Job, Job Gauge Increase boosted 11%"
    },
    "name": "Beam Saber [Wing / Pre-Registration Reward]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 3,
    "a": 187,
    "ma": 0,
    "sa": 1864,
    "md": 0,
    "sd": 0,
    "br": 81,
    "pr": 201,
    "wt": ["Transformer", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "All-Rounder Job, EX Skill Power boosted 25%"
    },
    "name": "Buster Rifle [Pre-Registration Reward]",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 3,
    "a": 364,
    "ma": 0,
    "sa": 0,
    "md": 364,
    "sd": 1089,
    "br": 0,
    "pr": 462,
    "wt": ["Transformer", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Sp. Shot DMG taken reduced 15"
    },
    "name": "Shield [Wing / Pre-Registration Reward]"
  }]
}, {
  "name": "Wing Gundam 0 [Endless Waltz Ver.]",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 0,
    "ma": 378,
    "sa": 3538,
    "md": 551,
    "sd": 965,
    "br": 409,
    "pr": 0,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, EX Skill Power Boosted E30%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1732,
    "ma": 719,
    "sa": 1422,
    "md": 0,
    "sd": 1354,
    "br": 671,
    "pr": 0,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Zero System",
      "description": "Activate the Zero System to predict battle conditions. Raise your speed by 20%. Raise your Melee Attack by 19%. Raise your Shot Attack by 29%. You become easier to target for a set period of time.",
      "category": "Awakening"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1884,
    "ma": 719,
    "sa": 1165,
    "md": 551,
    "sd": 965,
    "br": 409,
    "pr": 282,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Projectile Speed boosted 15%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 965,
    "ma": 551,
    "sa": 965,
    "md": 965,
    "sd": 1354,
    "br": 282,
    "pr": 671,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 70%, Melee CRIT Rate boosted 30%"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 378,
    "ma": 551,
    "sa": 1422,
    "md": 965,
    "sd": 1354,
    "br": 671,
    "pr": 464,
    "wt": ["Protag.", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Feather Dive",
      "description": "Attack foes with the beam sabers on your wing binders. Raise Melee Attack of your Squad by 39%.",
      "category": "Beam Melee"
    }
  }, {
    "part": "range",
    "mark": 1,
    "a": 551,
    "ma": 0,
    "sa": 3951,
    "md": 0,
    "sd": 965,
    "br": 464,
    "pr": 282,
    "wt": ["Protag.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Rolling Buster Rifle",
      "description": "Hold a detached twin buster rifle in each hand and spin, firing in all directions.",
      "category": "Beam Shot"
    },
    "name": "Twin Buster Rifle [Coupled]",
    "type": "Beam"
  }]
}, {
  "name": "Yami Syougun",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 972,
    "ma": 556,
    "sa": 2541,
    "md": 972,
    "sd": 972,
    "br": 0,
    "pr": 471,
    "wt": ["Zaku Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Out-Fighter Job, Close Shot Attack raised 20%"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1747,
    "ma": 556,
    "sa": 556,
    "md": 1365,
    "sd": 1365,
    "br": 0,
    "pr": 682,
    "wt": ["Zaku Type", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "SD Tackle",
      "description": "Execute a rush attack using your whole body. Lowers hit enemy Gunpla's Melee Attack by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 972,
    "ma": 2541,
    "sa": 556,
    "md": 1365,
    "sd": 1365,
    "br": 0,
    "pr": 76,
    "wt": ["Zaku Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "Beam ranged weapon reload speed boosted 20%"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 972,
    "ma": 556,
    "sa": 556,
    "md": 1365,
    "sd": 1365,
    "br": 471,
    "pr": 682,
    "wt": ["Zaku Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill DMG taken reduced 35"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 972,
    "ma": 556,
    "sa": 556,
    "md": 1365,
    "sd": 1365,
    "br": 471,
    "pr": 682,
    "wt": ["Zaku Type", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Darkness Sword",
      "description": "Crystalize the wicked power of darkness into a sword and slice enemies to shreds. Recover 38% of your maximum Armor.",
      "category": "Physical Melee"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 972,
    "ma": 3334,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 287,
    "pr": 682,
    "wt": ["Zaku Type", "For Computers"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Melee DMG Output boosted 35"
    },
    "name": "Darkness Sword",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 1,
    "a": 972,
    "ma": 0,
    "sa": 3334,
    "md": 0,
    "sd": 0,
    "br": 287,
    "pr": 682,
    "wt": ["Zaku Type", "Close Combat"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Job Gauge Increase boosted 17%"
    },
    "name": "Darkness Cannon",
    "type": "Beam"
  }]
}, {
  "name": "Z'Gok",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "torso",
    "mark": 4,
    "a": 797,
    "ma": 287,
    "sa": 372,
    "md": 797,
    "sd": 797,
    "br": 319,
    "pr": 0,
    "wt": ["Amphib.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "240mm 6-Barrel Rocket Launcher",
      "description": "Fire the tracking rocket cannon stowed on your head.",
      "category": "Physical Shot"
    },
    "combo": "legs"
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 372,
    "sa": 137,
    "md": 372,
    "sd": 372,
    "br": 138,
    "pr": 54,
    "wt": ["Amphib.", "For Computers"],
    "ex": {
      "type": "EX Skill",
      "name": "Planet Breaker",
      "description": "Bring an energized fist down to pulverize the enemy. Lowers hit enemy Gunpla's Melee Attack by 14%. Lowers hit enemy Gunpla's Melee Defense by 14%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 509,
    "sd": 509,
    "br": 54,
    "pr": 138,
    "wt": ["Amphib.", "Mass P."],
    "ex": {
      "type": "EX Skill",
      "name": "Shock Bringer α",
      "description": "Your attacks stun large foes more easily for a set period.",
      "category": "Buff"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 509,
    "sd": 509,
    "br": 138,
    "pr": 54,
    "wt": ["Amphib.", "Mass P."],
    "ex": {
      "type": "Part Traits",
      "name": "With \"For Base\" enemy, Sp. Shot DMG taken reduced 10"
    }
  }]
}, {
  "name": "Zaku II",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 373,
    "md": 373,
    "sd": 287,
    "br": 138,
    "pr": 54,
    "wt": ["Mass P.", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "Protection α",
      "description": "Raise your Physical Resist by 69%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 640,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 287,
    "br": 191,
    "pr": 0,
    "wt": ["Mass P.", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "Recovery Tool α",
      "description": "Recover 48% of your maximum Armor.",
      "category": "Recovery"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 373,
    "sa": 137,
    "md": 373,
    "sd": 373,
    "br": 54,
    "pr": 0,
    "wt": ["Mass P.", "Zaku Type"],
    "ex": {
      "type": "Part Traits",
      "name": "All-Rounder Job, Enemy SP. Shot Power reduced 10%"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 137,
    "br": 191,
    "pr": 54,
    "wt": ["Mass P.", "Zaku Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Axe Category equipped, Shooting DMG taken reduced 10"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 137,
    "md": 373,
    "sd": 287,
    "br": 191,
    "pr": 54,
    "wt": ["Mass P.", "Zaku Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Machine Gun Category equipped, Sp. Shot Power boosted 18%"
    }
  }, {
    "part": "melee",
    "mark": 4,
    "a": 373,
    "ma": 798,
    "sa": 0,
    "md": 287,
    "sd": 0,
    "br": 138,
    "pr": 54,
    "wt": ["Mass P.", "Zeon"],
    "ex": {
      "type": "EX Skill",
      "name": "Wind Edge",
      "description": "Mow down foes nearby with your axe.",
      "category": "Physical Melee"
    },
    "name": "Heat Hawk",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 4,
    "a": 373,
    "ma": 0,
    "sa": 798,
    "md": 287,
    "sd": 0,
    "br": 191,
    "pr": 54,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Enemy Strong Melee Power Reduced 10%"
    },
    "name": "Zaku Bazooka",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 4,
    "a": 373,
    "ma": 0,
    "sa": 798,
    "md": 287,
    "sd": 0,
    "br": 191,
    "pr": 54,
    "wt": ["Mass P.", "Mid-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Initial EX Skill Charge boosted 10%"
    },
    "name": "Zaku Machine Gun [Zaku II]",
    "type": "Physical"
  }]
}, {
  "name": "Zaku II [Char Aznable]",
  "attribute": "Speed",
  "rarity": 3,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 1698,
    "md": 558,
    "sd": 558,
    "br": 0,
    "pr": 302,
    "wt": ["Ace Excl.", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Beam Coat β",
      "description": "Raise Ally Beam Resist by 49%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 2,
    "a": 1140,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 428,
    "wt": ["Ace Excl.", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, Debuff EX Skill Effect up 15%"
    }
  }, {
    "part": "arms",
    "mark": 2,
    "a": 558,
    "ma": 1698,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 0,
    "pr": 0,
    "wt": ["Ace Excl.", "Zaku Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Fearless Charge",
      "description": "Charge ferociously toward the enemy.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 302,
    "pr": 428,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Sp. Shot Power boosted 25%"
    }
  }, {
    "part": "backpack",
    "mark": 2,
    "a": 558,
    "ma": 291,
    "sa": 291,
    "md": 889,
    "sd": 889,
    "br": 302,
    "pr": 428,
    "wt": ["Ace Excl.", "High Mobility"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill Piercing Boosted 22%"
    }
  }]
}, {
  "name": "Zaku II Kai",
  "attribute": "Technique",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 570,
    "md": 570,
    "sd": 364,
    "br": 139,
    "pr": 139,
    "wt": ["High Mobility", "For Forest"],
    "ex": {
      "type": "Part Traits",
      "name": "With Machine Gun Category equipped, Close Shot Attack raised 10%"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 942,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 364,
    "br": 139,
    "pr": 139,
    "wt": ["High Mobility", "Zaku Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor > 60%, Debuff EX Skill Effect up 12%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 364,
    "ma": 570,
    "sa": 187,
    "md": 570,
    "sd": 570,
    "br": 29,
    "pr": 29,
    "wt": ["High Mobility", "Zaku Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Machine Gun Category equipped Melee Damage Output boosted 15%"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 757,
    "sd": 187,
    "br": 201,
    "pr": 201,
    "wt": ["High Mobility", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Hand Grenade",
      "description": "Throw a hand grenade mounted on your side armor.",
      "category": "Physical Shot"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 187,
    "md": 570,
    "sd": 364,
    "br": 201,
    "pr": 201,
    "wt": ["High Mobility", "Zaku Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Gundam Type\" enemy, Debuff EX Skill Effect up 12%"
    }
  }, {
    "part": "range",
    "mark": 3,
    "a": 570,
    "ma": 0,
    "sa": 1090,
    "md": 364,
    "sd": 0,
    "br": 201,
    "pr": 201,
    "wt": ["High Mobility", "For Forest"],
    "ex": {
      "type": "EX Skill",
      "name": "Crater Maker",
      "description": "Fire stunning rounds from your machine gun.",
      "category": "Physical Shot"
    },
    "name": "Zaku Machine Gun [Zaku II Kai]",
    "type": "Physical"
  }]
}, {
  "name": "Zaku II Type FS [Garma Zabi]",
  "attribute": "Speed",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 187,
    "ma": 187,
    "sa": 1483,
    "md": 187,
    "sd": 570,
    "br": 0,
    "pr": 0,
    "wt": ["Ace Excl.", "Zaku Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 757,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 757,
    "br": 139,
    "pr": 139,
    "wt": ["Ace Excl.", "Zaku Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Buff EX Skill Time up 15%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 570,
    "ma": 364,
    "sa": 187,
    "md": 187,
    "sd": 757,
    "br": 139,
    "pr": 139,
    "wt": ["Ace Excl.", "Zaku Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Fearless Hurl",
      "description": "Charge mercilessly toward the enemy. Lowers hit enemy Gunpla's Beam Resist by 19%. Lowers hit enemy Gunpla's Physical Resist by 19%.",
      "category": "Physical Melee"
    }
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 757,
    "br": 201,
    "pr": 201,
    "wt": ["Ace Excl.", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Physical, Melee Power boosted 15%"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 364,
    "sd": 757,
    "br": 201,
    "pr": 201,
    "wt": ["Ace Excl.", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Vernier Consumption reduced 10%"
    }
  }, {
    "part": "melee",
    "mark": 3,
    "a": 570,
    "ma": 1090,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 209,
    "pr": 209,
    "wt": ["Ace Excl.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Charge Axe",
      "description": "Jump and bring a charged axe down on the enemy's head. Raise your Melee Attack by 14%.",
      "category": "Physical Melee"
    },
    "name": "Dead End G",
    "type": "Physical"
  }, {
    "part": "melee",
    "mark": 3,
    "a": 570,
    "ma": 1090,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 209,
    "pr": 209,
    "wt": ["Ace Excl.", "High Firepower"],
    "ex": {
      "type": "EX Skill",
      "name": "Charge Axe",
      "description": "Jump and bring a charged axe down on the enemy's head. Raise your Melee Attack by 14%.",
      "category": "Physical Melee"
    },
    "name": "Large Heat Hawk",
    "type": "Physical"
  }, {
    "part": "range",
    "mark": 3,
    "a": 187,
    "ma": 0,
    "sa": 1867,
    "md": 0,
    "sd": 0,
    "br": 139,
    "pr": 139,
    "wt": ["Ace Excl.", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Physical, Shooting DMG Output boosted 15"
    },
    "name": "Magella-Top Cannon",
    "type": "Physical"
  }]
}, {
  "name": "Zaku Minelayer",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 373,
    "md": 287,
    "sd": 373,
    "br": 110,
    "pr": 110,
    "wt": ["Mass P.", "Support Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Protection α",
      "description": "Raise your Physical Resist by 69%",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 640,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 511,
    "br": 25,
    "pr": 25,
    "wt": ["Mass P.", "Support Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Sp. Shot DMG taken reduced 10"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 287,
    "ma": 373,
    "sa": 137,
    "md": 373,
    "sd": 511,
    "br": 25,
    "pr": 25,
    "wt": ["Mass P.", "Zaku Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Close Combat\" enemy, Sp. Shot DMG Output boost 10"
    }
  }, {
    "part": "legs",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 137,
    "md": 137,
    "sd": 511,
    "br": 138,
    "pr": 138,
    "wt": ["Mass P.", "Zaku Type"],
    "ex": {
      "type": "Part Traits",
      "name": "With \"Close Combat\" enemy, Sp. Shot DMG Output boost 10"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 373,
    "ma": 137,
    "sa": 137,
    "md": 287,
    "sd": 373,
    "br": 138,
    "pr": 138,
    "wt": ["Mass P.", "Zaku Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Defense Hack α",
      "description": "Reduce target Melee and Shot Defense by 39%",
      "category": "Debuff"
    }
  }]
}, {
  "name": "Zeong",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 384,
    "ma": 384,
    "sa": 3181,
    "md": 384,
    "sd": 1182,
    "br": 0,
    "pr": 0,
    "wt": ["Zeon", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Point-Blank Shot",
      "description": "Detach your head unit, and unleash a decisive, destiny-changing attack on the enemy from above. Raise Shot Attack of your Squad by 29%. Raise Shot Defense of your Squad by 19%.",
      "category": "Beam Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1606,
    "ma": 384,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 290,
    "pr": 290,
    "wt": ["Zeon", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), EX Skill CD reduced 20%"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 1182,
    "ma": 799,
    "sa": 284,
    "md": 284,
    "sd": 1606,
    "br": 290,
    "pr": 290,
    "wt": ["Zeon", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "5-Barrel Mega Particle Cannon",
      "description": "Detach your forearm and fire mega particle cannon beams at the enemy.",
      "category": "Beam Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 799,
    "ma": 384,
    "sa": 384,
    "md": 799,
    "sd": 1606,
    "br": 420,
    "pr": 420,
    "wt": ["Zeon", "Long-Range"],
    "ex": {
      "type": "EX Skill",
      "name": "Torso Mega Particle Cannon",
      "description": "Fire at enemies ahead with the mega particle Cannon equipped to your waist.",
      "category": "Beam Shot"
    }
  }]
}, {
  "name": "Zeta Gundam",
  "attribute": "Speed",
  "rarity": 4,
  "sokai": 1,
  "parts": [{
    "part": "head",
    "mark": 1,
    "a": 969,
    "ma": 379,
    "sa": 2361,
    "md": 791,
    "sd": 791,
    "br": 468,
    "pr": 0,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Head-Mounted Vulcan",
      "description": "Fire the Vulcan in your head at foes straight ahead. You can move freely while shooting. Lowers hit enemy Gunpla's Melee and Shot Defense by 14%.",
      "category": "Physical Shot"
    }
  }, {
    "part": "torso",
    "mark": 1,
    "a": 1738,
    "ma": 379,
    "sa": 379,
    "md": 1358,
    "sd": 1358,
    "br": 675,
    "pr": 0,
    "wt": ["Transformer", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Hyper Beam Saber",
      "description": "Slay your foes with a single strike powered by your Biosensor. Raise Melee Attack of your Squad by 24%",
      "category": "Beam Melee"
    }
  }, {
    "part": "arms",
    "mark": 1,
    "a": 969,
    "ma": 2528,
    "sa": 379,
    "md": 1358,
    "sd": 1358,
    "br": 0,
    "pr": 0,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "EX Skill",
      "name": "Arm-Mounted Grenade Launcher",
      "description": "Launch grenades from your forearm. You can move while firing.",
      "category": "Physical Shot"
    }
  }, {
    "part": "legs",
    "mark": 1,
    "a": 969,
    "ma": 379,
    "sa": 379,
    "md": 1358,
    "sd": 1358,
    "br": 675,
    "pr": 468,
    "wt": ["Transformer", "Ace Excl."],
    "ex": {
      "type": "EX Skill",
      "name": "Saber Boomerang",
      "description": "Slash with your saber, then hurl it point-first.",
      "category": "Beam Melee"
    }
  }, {
    "part": "backpack",
    "mark": 1,
    "a": 969,
    "ma": 379,
    "sa": 379,
    "md": 1358,
    "sd": 1358,
    "br": 675,
    "pr": 468,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "When attacking with Beam, Shooting Power boosted 30%"
    }
  }, {
    "part": "melee",
    "mark": 1,
    "a": 969,
    "ma": 3318,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 675,
    "pr": 208,
    "wt": ["Transformer", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Cross Wave",
      "description": "Slash to create shockwaves that cleave through enemies.",
      "category": "Beam Melee"
    },
    "name": "Beam Saber [Zeta]",
    "type": "Beam"
  }, {
    "part": "melee",
    "mark": 1,
    "a": 969,
    "ma": 3318,
    "sa": 0,
    "md": 0,
    "sd": 0,
    "br": 675,
    "pr": 208,
    "wt": ["Transformer", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Melee DMG Output boosted 35"
    },
    "name": "Long Beam Saber",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 969,
    "ma": 0,
    "sa": 3318,
    "md": 0,
    "sd": 0,
    "br": 675,
    "pr": 208,
    "wt": ["Transformer", "Gundam Type"],
    "ex": {
      "type": "Part Traits",
      "name": "Sp. Shot DMG Output boosted 35"
    },
    "name": "Beam Rifle [Zeta]",
    "type": "Beam"
  }, {
    "part": "range",
    "mark": 1,
    "a": 969,
    "ma": 0,
    "sa": 3318,
    "md": 0,
    "sd": 0,
    "br": 675,
    "pr": 208,
    "wt": ["Transformer", "High Firepower"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Enemy Shooting Power reduced 30%"
    },
    "name": "Hyper Mega Launcher",
    "type": "Beam"
  }, {
    "part": "shield",
    "mark": 1,
    "a": 969,
    "ma": 0,
    "sa": 0,
    "md": 1738,
    "sd": 1738,
    "br": 878,
    "pr": 208,
    "wt": ["Transformer", "Close Combat"],
    "ex": {
      "type": "EX Skill",
      "name": "Missile Launcher",
      "description": "Shoot firearms stored in your shield. You can move while firing.",
      "category": "Physical Shot"
    },
    "name": "Zeta Shield"
  }]
}, {
  "name": "Zudah",
  "attribute": "Technique",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 4,
    "a": 372,
    "ma": 137,
    "sa": 287,
    "md": 372,
    "sd": 137,
    "br": 138,
    "pr": 54,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "Long Rifle"
    }
  }, {
    "part": "torso",
    "mark": 4,
    "a": 511,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 287,
    "br": 190,
    "pr": 0,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 50%, Debuff EX Skill Effect up 10%"
    }
  }, {
    "part": "arms",
    "mark": 4,
    "a": 372,
    "ma": 1012,
    "sa": 137,
    "md": 1309,
    "sd": 372,
    "br": 319,
    "pr": 0,
    "wt": ["High Mobility", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Melee Pick",
      "description": "Thrust with your shield pick and follow it up with a kick. Raise your Melee Attack by 14%.",
      "category": "Physical Melee"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 287,
    "br": 138,
    "pr": 190,
    "wt": ["High Mobility", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Brave Axe Combo",
      "description": "Bring down a wild rush of blows with your equipped axe.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 4,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 287,
    "br": 190,
    "pr": 138,
    "wt": ["High Mobility", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Saturn Engine",
      "description": "Dramatically boost acceleration with a heavier propellant. Raises speed by 20%. Reduces Melee and Shot Defense by 30%. Raise your vernier capacity by 25%.",
      "category": "Awakening"
    }
  }, {
    "part": "range",
    "mark": 4,
    "a": 372,
    "ma": 0,
    "sa": 797,
    "md": 0,
    "sd": 0,
    "br": 190,
    "pr": 138,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Technique attribute (self), Enemy Shooting Power reduced 10%"
    },
    "name": "Anti-Ship Rifle",
    "type": "Physical"
  }]
}, {
  "name": "Zudah [ALT]",
  "attribute": "Speed",
  "rarity": 1,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 372,
    "ma": 137,
    "sa": 287,
    "md": 372,
    "sd": 137,
    "br": 138,
    "pr": 54,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 50%, Shooting CRIT Rate boosted 14%"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 511,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 287,
    "br": 190,
    "pr": 0,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 50%, Debuff EX Skill Effect up 10%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 372,
    "ma": 1012,
    "sa": 137,
    "md": 1309,
    "sd": 372,
    "br": 319,
    "pr": 0,
    "wt": ["High Mobility", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Sturm Faust",
      "description": "Launch the Sturm Faust stored in your forearm shield. You can move while firing.",
      "category": "Physical Shot"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 3,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 287,
    "br": 138,
    "pr": 190,
    "wt": ["High Mobility", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Brave Axe Combo",
      "description": "Bring down a wild rush of blows with your equipped axe.",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 287,
    "ma": 137,
    "sa": 137,
    "md": 511,
    "sd": 287,
    "br": 190,
    "pr": 138,
    "wt": ["High Mobility", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Saturn Engine",
      "description": "Dramatically boost acceleration with a heavier propellant. Raises speed by 20%. Reduces Melee and Shot Defense by 30%. Raise your vernier capacity by 25%.",
      "category": "Awakening"
    }
  }, {
    "part": "range",
    "mark": 3,
    "a": 372,
    "ma": 0,
    "sa": 797,
    "md": 0,
    "sd": 0,
    "br": 190,
    "pr": 138,
    "wt": ["High Mobility", "Long-Range"],
    "ex": {
      "type": "Part Traits",
      "name": "With Speed attribute (self), Enemy Shooting Power reduced 10%"
    },
    "name": "Anti-Ship Rifle [ALT]",
    "type": "Physical"
  }]
}, {
  "name": "Zudah [Commander Type]",
  "attribute": "Speed",
  "rarity": 2,
  "sokai": 0,
  "parts": [{
    "part": "head",
    "mark": 3,
    "a": 570,
    "ma": 187,
    "sa": 364,
    "md": 570,
    "sd": 187,
    "br": 201,
    "pr": 81,
    "wt": ["Commander", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Signal Flare",
      "description": "Fire a signal flare into the air to send word to your allies. Raise Ally Melee Attack by 19%. Raise Ally Beam Resist by 29%. Raise Ally Physical Resist by 29%.",
      "category": "Buff"
    }
  }, {
    "part": "torso",
    "mark": 3,
    "a": 754,
    "ma": 187,
    "sa": 187,
    "md": 754,
    "sd": 364,
    "br": 281,
    "pr": 0,
    "wt": ["Commander", "For Space"],
    "ex": {
      "type": "Part Traits",
      "name": "When Armor < 50%, EX Skill Piercing boosted 15%"
    }
  }, {
    "part": "arms",
    "mark": 3,
    "a": 570,
    "ma": 1480,
    "sa": 187,
    "md": 1864,
    "sd": 570,
    "br": 462,
    "pr": 0,
    "wt": ["Commander", "For Space"],
    "ex": {
      "type": "EX Skill",
      "name": "Melee Pick",
      "description": "Thrust with your shield pick and follow it up with a kick. Raise your Melee Attack by 14%.",
      "category": "Physical Melee"
    },
    "combo": "shield"
  }, {
    "part": "legs",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 754,
    "sd": 364,
    "br": 201,
    "pr": 281,
    "wt": ["High Mobility", "Commander"],
    "ex": {
      "type": "EX Skill",
      "name": "Menace Shot",
      "description": "Lowers hit Gunpla's Shot Attack & Melee Defense 14%",
      "category": "Physical Melee"
    }
  }, {
    "part": "backpack",
    "mark": 3,
    "a": 364,
    "ma": 187,
    "sa": 187,
    "md": 754,
    "sd": 364,
    "br": 281,
    "pr": 201,
    "wt": ["Commander", "High Mobility"],
    "ex": {
      "type": "EX Skill",
      "name": "Saturn Engine",
      "description": "Dramatically boost acceleration with a heavier propellant. Raises speed by 20%. Reduces Melee and Shot Defense by 30%. Raise your vernier capacity by 25%.",
      "category": "Awakening"
    }
  }]
}];
const Pilots = [{
  "name": "Aina Sahalin",
  "jl": "Long-Shooter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 559,
  "ma": 292,
  "sa": 1144,
  "md": 559,
  "sd": 559,
  "br": 303,
  "pr": 303,
  "wt": ["Long-Range", "Zaku Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Buff EX Skill Effect up 15%"
  }
}, {
  "name": "Akahana",
  "jl": "Supporter",
  "attribute": "Technique",
  "rarity": 2,
  "a": 755,
  "ma": 187,
  "sa": 187,
  "md": 364,
  "sd": 364,
  "br": 281,
  "pr": 81,
  "wt": ["Amphib.", "Zeon"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), EX Skill Recovery boosted 18%"
  }
}, {
  "name": "Amuro Ray",
  "jl": "Long-Shooter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 796,
  "ma": 384,
  "sa": 1602,
  "md": 796,
  "sd": 796,
  "br": 213,
  "pr": 417,
  "wt": ["Gundam Type", "Federation"],
  "ex": {
    "type": "Part Traits",
    "name": "Beam Ranged Reload up 20%"
  }
}, {
  "name": "Amuro Ray (Pre-Registration Reward)",
  "jl": "Out-Fighter",
  "attribute": "Power",
  "rarity": 2,
  "a": 363,
  "ma": 363,
  "sa": 363,
  "md": 363,
  "sd": 363,
  "br": 80,
  "pr": 280,
  "wt": ["Gundam Type", "Federation"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), EX Skill CD reduced 11%"
  }
}, {
  "name": "Anavel Gato",
  "jl": "Defender",
  "attribute": "Power",
  "rarity": 4,
  "a": 1180,
  "ma": 1180,
  "sa": 383,
  "md": 796,
  "sd": 796,
  "br": 212,
  "pr": 610,
  "wt": ["Ace Excl.", "Zeon"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), All DMG Output boosted 35 (flat)"
  }
}, {
  "name": "Andrew Waltfeld",
  "jl": "Middle-Shooter",
  "attribute": "Power",
  "rarity": 3,
  "a": 558,
  "ma": 291,
  "sa": 291,
  "md": 889,
  "sd": 889,
  "br": 428,
  "pr": 126,
  "wt": ["For Desert", "Ace Excl."],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Enemy EX Skill penetration reduced 22%"
  }
}, {
  "name": "Angelo Sauper",
  "jl": "Out-Fighter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 558,
  "ma": 558,
  "sa": 558,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 302,
  "wt": ["Zeon", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "12% chance of attacks penetrating super armor"
  }
}, {
  "name": "Apolly Bay",
  "jl": "Out-Fighter",
  "attribute": "Technique",
  "rarity": 2,
  "a": 363,
  "ma": 363,
  "sa": 363,
  "md": 363,
  "sd": 363,
  "br": 280,
  "pr": 80,
  "wt": ["High Mobility", "Support Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Strong Melee DMG Output Boosted 15%"
  }
}, {
  "name": "Asagi Caldwell",
  "jl": "Supporter",
  "attribute": "Speed",
  "rarity": 2,
  "a": 364,
  "ma": 187,
  "sa": 757,
  "md": 364,
  "sd": 364,
  "br": 201,
  "pr": 201,
  "wt": ["Mass P.", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Shot Spread reduced 12%"
  }
}, {
  "name": "Athrun Zala",
  "jl": "In-Fighter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 799,
  "ma": 1182,
  "sa": 384,
  "md": 799,
  "sd": 1182,
  "br": 612,
  "pr": 213,
  "wt": ["Transformer", "Mid-Range"],
  "ex": {
    "type": "Part Traits",
    "name": "20% chance to prevent vernier consumption when stepping"
  }
}, {
  "name": "Auel Neider",
  "jl": "Defender",
  "attribute": "Technique",
  "rarity": 3,
  "a": 889,
  "ma": 291,
  "sa": 889,
  "md": 558,
  "sd": 558,
  "br": 126,
  "pr": 428,
  "wt": ["Amphib.", "Mid-Range"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Debuff EX Skill Effect up 15%"
  }
}, {
  "name": "Bernard Wiseman",
  "jl": "In-Fighter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 795,
  "ma": 795,
  "sa": 795,
  "md": 795,
  "sd": 795,
  "br": 211,
  "pr": 609,
  "wt": ["High Mobility", "Zaku Type"],
  "ex": {
    "type": "Part Traits",
    "name": "When Armor < 60%, Recover 10 Armor gradually"
  }
}, {
  "name": "Cagalli Yula Athha",
  "jl": "Middle-Shooter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 559,
  "ma": 294,
  "sa": 893,
  "md": 893,
  "sd": 559,
  "br": 432,
  "pr": 129,
  "wt": ["For Base", "Mid-Range"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Projectile Speed boosted 14%"
  }
}, {
  "name": "Carozzo Ronah",
  "jl": "Defender",
  "attribute": "Power",
  "rarity": 4,
  "a": 799,
  "ma": 384,
  "sa": 384,
  "md": 799,
  "sd": 799,
  "br": 614,
  "pr": 614,
  "wt": ["High Firepower", "For Computers"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Debuff EX Skill Effect up 15%"
  }
}, {
  "name": "Cecily Fairchild",
  "jl": "Supporter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 889,
  "ma": 291,
  "sa": 889,
  "md": 558,
  "sd": 558,
  "br": 126,
  "pr": 428,
  "wt": ["Ace Excl.", "For Urban Area"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), All DMG taken reduced 20"
  }
}, {
  "name": "Chang Wufei",
  "jl": "In-Fighter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 1181,
  "ma": 1181,
  "sa": 384,
  "md": 796,
  "sd": 796,
  "br": 417,
  "pr": 417,
  "wt": ["Close Combat", "Ace Excl."],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Strong Melee DMG Output boosted 35 (flat)"
  }
}, {
  "name": "Char Aznable",
  "jl": "Out-Fighter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 795,
  "ma": 795,
  "sa": 795,
  "md": 795,
  "sd": 795,
  "br": 609,
  "pr": 211,
  "wt": ["Ace Excl.", "Commander"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), All DMG taken reduced 20"
  }
}, {
  "name": "Chara Soon",
  "jl": "Out-Fighter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 559,
  "ma": 1144,
  "sa": 292,
  "md": 559,
  "sd": 559,
  "br": 303,
  "pr": 303,
  "wt": ["Zeon", "High Mobility"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), EX Skill piercing boosted 22%"
  }
}, {
  "name": "Chloe Croce",
  "jl": "Out-Fighter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 559,
  "ma": 1144,
  "sa": 292,
  "md": 559,
  "sd": 559,
  "br": 303,
  "pr": 303,
  "wt": ["High Mobility", "For Forest"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Vernier Consumption reduced 15%"
  }
}, {
  "name": "Christina Mackenzie",
  "jl": "Middle-Shooter",
  "attribute": "Power",
  "rarity": 4,
  "a": 795,
  "ma": 382,
  "sa": 382,
  "md": 1179,
  "sd": 1179,
  "br": 609,
  "pr": 211,
  "wt": ["Close Combat", "For Urban Area"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), EX Skill Piercing boosted 28%"
  }
}, {
  "name": "Cima Garahau",
  "jl": "Defender",
  "attribute": "Speed",
  "rarity": 3,
  "a": 891,
  "ma": 292,
  "sa": 891,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 302,
  "wt": ["Ace Excl.", "Zeon"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Debuff EX Skill Effect up 15%"
  }
}, {
  "name": "Dearka Elsman",
  "jl": "Long-Shooter",
  "attribute": "Power",
  "rarity": 3,
  "a": 558,
  "ma": 291,
  "sa": 1142,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 126,
  "wt": ["Long-Range", "Support Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Shot Guidance boosted 14%"
  }
}, {
  "name": "Domon Kasshu",
  "jl": "In-Fighter",
  "attribute": "Power",
  "rarity": 4,
  "a": 796,
  "ma": 1753,
  "sa": 155,
  "md": 977,
  "sd": 643,
  "br": 417,
  "pr": 213,
  "wt": ["Mobile Fighter", "For Urban Area"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), All CRIT Rate boosted 14%"
  }
}, {
  "name": "Dozle Zabi",
  "jl": "Defender",
  "attribute": "Power",
  "rarity": 3,
  "a": 558,
  "ma": 891,
  "sa": 891,
  "md": 558,
  "sd": 558,
  "br": 127,
  "pr": 302,
  "wt": ["High Firepower", "Zaku Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), EX Skill Piercing boosted 22%"
  }
}, {
  "name": "Duo Maxwell",
  "jl": "In-Fighter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 796,
  "ma": 1602,
  "sa": 384,
  "md": 796,
  "sd": 796,
  "br": 213,
  "pr": 417,
  "wt": ["Close Combat", "For Forest"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), 20% chance to not recoil"
  }
}, {
  "name": "Eledore Massis",
  "jl": "Supporter",
  "attribute": "Speed",
  "rarity": 2,
  "a": 755,
  "ma": 187,
  "sa": 187,
  "md": 364,
  "sd": 364,
  "br": 81,
  "pr": 281,
  "wt": ["Long-Range", "Support Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Initial EX Skill Charge boosted 11%"
  }
}, {
  "name": "Elle Vianno",
  "jl": "Out-Fighter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 561,
  "ma": 893,
  "sa": 294,
  "md": 561,
  "sd": 893,
  "br": 215,
  "pr": 215,
  "wt": ["For Urban Area", "Support Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), EX Skill Recovery boosted 16%"
  }
}, {
  "name": "Elpeo Ple",
  "jl": "Long-Shooter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 559,
  "ma": 294,
  "sa": 893,
  "md": 893,
  "sd": 559,
  "br": 432,
  "pr": 129,
  "wt": ["For Space", "Long-Range"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Vernier Recovery Rate boosted 16%"
  }
}, {
  "name": "Emma Sheen",
  "jl": "Middle-Shooter",
  "attribute": "Power",
  "rarity": 3,
  "a": 559,
  "ma": 294,
  "sa": 893,
  "md": 893,
  "sd": 559,
  "br": 129,
  "pr": 432,
  "wt": ["Mid-Range", "Gundam Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Debuff EX Skill Effect up 15%"
  }
}, {
  "name": "Fa Yuiry",
  "jl": "Supporter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 891,
  "ma": 292,
  "sa": 891,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 302,
  "wt": ["Transformer", "Support Type"],
  "ex": {
    "type": "Part Traits",
    "name": "Support Job, EX Skill Recovery boosted 16%"
  }
}, {
  "name": "Flit Asuno",
  "jl": "In-Fighter",
  "attribute": "Power",
  "rarity": 3,
  "a": 558,
  "ma": 558,
  "sa": 558,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 302,
  "wt": ["Mid-Range", "Close Combat"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Buff EX Skill time up 15%"
  }
}, {
  "name": "Full Frontal",
  "jl": "Out-Fighter",
  "attribute": "Power",
  "rarity": 4,
  "a": 384,
  "ma": 1182,
  "sa": 1182,
  "md": 799,
  "sd": 799,
  "br": 420,
  "pr": 420,
  "wt": ["Commander", "Zeon"],
  "ex": {
    "type": "Part Traits",
    "name": "While \"Zeon\", Initial EX Skill Charge boosted 20%"
  }
}, {
  "name": "Gaelio Bauduin",
  "jl": "Defender",
  "attribute": "Technique",
  "rarity": 4,
  "a": 796,
  "ma": 1602,
  "sa": 384,
  "md": 796,
  "sd": 796,
  "br": 417,
  "pr": 213,
  "wt": ["Heavy Armor", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "When Armor > 60%, All Power boosted 30%"
  }
}, {
  "name": "Gai Murakumo",
  "jl": "Middle-Shooter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 796,
  "ma": 384,
  "sa": 1602,
  "md": 796,
  "sd": 796,
  "br": 417,
  "pr": 213,
  "wt": ["For Forest", "Gundam Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), EX Skill Recovery boosted 28%"
  }
}, {
  "name": "Gaia",
  "jl": "Defender",
  "attribute": "Power",
  "rarity": 2,
  "a": 364,
  "ma": 187,
  "sa": 187,
  "md": 570,
  "sd": 570,
  "br": 201,
  "pr": 201,
  "wt": ["Long-Range", "For Forest"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), EX Skill Recovery boosted 85"
  }
}, {
  "name": "Garma Zabi",
  "jl": "Middle-Shooter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 559,
  "ma": 294,
  "sa": 294,
  "md": 559,
  "sd": 559,
  "br": 432,
  "pr": 432,
  "wt": ["Commander", "For Forest"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Buff EX Skill Time up 15%"
  }
}, {
  "name": "Garrod Ran",
  "jl": "Out-Fighter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 797,
  "ma": 1181,
  "sa": 1181,
  "md": 797,
  "sd": 797,
  "br": 213,
  "pr": 418,
  "wt": ["Protag.", "Close Combat"],
  "ex": {
    "type": "Part Traits",
    "name": "When Armor < 80%, All Power boosted 30%"
  }
}, {
  "name": "George de Sand",
  "jl": "Out-Fighter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 795,
  "ma": 382,
  "sa": 382,
  "md": 1179,
  "sd": 1179,
  "br": 609,
  "pr": 211,
  "wt": ["Mobile Fighter", "Long-Range"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), EX Skill CD reduced 20%"
  }
}, {
  "name": "Ginias Sahalin",
  "jl": "Defender",
  "attribute": "Power",
  "rarity": 3,
  "a": 558,
  "ma": 291,
  "sa": 291,
  "md": 889,
  "sd": 889,
  "br": 428,
  "pr": 126,
  "wt": ["Long-Range", "Zeon"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Vernier Recovery Rate boosted 16%"
  }
}, {
  "name": "Haman Karn",
  "jl": "Long-Shooter",
  "attribute": "Power",
  "rarity": 4,
  "a": 796,
  "ma": 384,
  "sa": 1602,
  "md": 796,
  "sd": 796,
  "br": 417,
  "pr": 213,
  "wt": ["Commander", "Zeon"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Job Gauge Increase boosted 17%"
  }
}, {
  "name": "Haro",
  "jl": "All-Rounder",
  "attribute": "Technique",
  "rarity": 1,
  "a": 287,
  "ma": 138,
  "sa": 138,
  "md": 287,
  "sd": 287,
  "br": 194,
  "pr": 194,
  "wt": ["Transformer", "For Computers"],
  "ex": {
    "type": "Part Traits",
    "name": "EX Skill Recovery boosted 110"
  }
}, {
  "name": "Harry Ord",
  "jl": "Defender",
  "attribute": "Speed",
  "rarity": 3,
  "a": 558,
  "ma": 1142,
  "sa": 291,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 126,
  "wt": ["Ace Excl.", "Close Combat"],
  "ex": {
    "type": "Part Traits",
    "name": "Beam ranged weapon magazine boosted 20%"
  }
}, {
  "name": "Hayato Kobayashi",
  "jl": "Long-Shooter",
  "attribute": "Technique",
  "rarity": 2,
  "a": 570,
  "ma": 364,
  "sa": 187,
  "md": 364,
  "sd": 570,
  "br": 201,
  "pr": 201,
  "wt": ["Long-Range", "Federation"],
  "ex": {
    "type": "Part Traits",
    "name": "10% chance to prevent vernier consumption when stepping"
  }
}, {
  "name": "Heero Yuy",
  "jl": "Long-Shooter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 796,
  "ma": 384,
  "sa": 1602,
  "md": 796,
  "sd": 796,
  "br": 417,
  "pr": 213,
  "wt": ["High Firepower", "Transformer"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), All DMG output boosted by 35"
  }
}, {
  "name": "Heero Yuy (Pre-Registration Reward)",
  "jl": "Defender",
  "attribute": "Technique",
  "rarity": 2,
  "a": 570,
  "ma": 187,
  "sa": 570,
  "md": 364,
  "sd": 364,
  "br": 281,
  "pr": 81,
  "wt": ["Transformer", "Gundam Type"],
  "ex": {
    "type": "Part Traits",
    "name": "10% chance to prevent vernier consumption when stepping"
  }
}, {
  "name": "Heine Westenfluss",
  "jl": "Defender",
  "attribute": "Speed",
  "rarity": 3,
  "a": 561,
  "ma": 893,
  "sa": 294,
  "md": 561,
  "sd": 893,
  "br": 215,
  "pr": 215,
  "wt": ["Close Combat", "Commander"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Debuff EX Skill effect up 15%"
  }
}, {
  "name": "Jamil Neate",
  "jl": "Defender",
  "attribute": "Power",
  "rarity": 3,
  "a": 558,
  "ma": 558,
  "sa": 558,
  "md": 558,
  "sd": 558,
  "br": 126,
  "pr": 428,
  "wt": ["Commander", "Gundam Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Enemy Shooting Power reduced 25%"
  }
}, {
  "name": "Jean-Luc Duval",
  "jl": "Defender",
  "attribute": "Speed",
  "rarity": 3,
  "a": 891,
  "ma": 558,
  "sa": 292,
  "md": 891,
  "sd": 558,
  "br": 430,
  "pr": 127,
  "wt": ["Zeon", "High Mobility"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self),. Vernier Consumption reduced 15%"
  }
}, {
  "name": "Jerid Messa",
  "jl": "Out-Fighter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 558,
  "ma": 891,
  "sa": 891,
  "md": 558,
  "sd": 558,
  "br": 127,
  "pr": 302,
  "wt": ["Transformer", "Mid-Range"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Vernier Recovery Rate boosted 16%"
  }
}, {
  "name": "Johnny Ridden",
  "jl": "In-Fighter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 558,
  "ma": 1142,
  "sa": 291,
  "md": 558,
  "sd": 558,
  "br": 126,
  "pr": 302,
  "wt": ["Zeon", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Buff EX Skill Effect up 15%"
  }
}, {
  "name": "Judau Ashta",
  "jl": "Middle-Shooter",
  "attribute": "Power",
  "rarity": 4,
  "a": 796,
  "ma": 384,
  "sa": 1602,
  "md": 796,
  "sd": 796,
  "br": 417,
  "pr": 213,
  "wt": ["Protag.", "Transformer"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Buff EX Skill Time up 22%"
  }
}, {
  "name": "Juri Wu Nien",
  "jl": "Middle-Shooter",
  "attribute": "Power",
  "rarity": 2,
  "a": 364,
  "ma": 187,
  "sa": 187,
  "md": 570,
  "sd": 570,
  "br": 201,
  "pr": 201,
  "wt": ["Mass P.", "For Base"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), EX Skill CD reduced 11%"
  }
}, {
  "name": "Kai Shiden",
  "jl": "Long-Shooter",
  "attribute": "Power",
  "rarity": 2,
  "a": 755,
  "ma": 187,
  "sa": 187,
  "md": 364,
  "sd": 364,
  "br": 81,
  "pr": 281,
  "wt": ["Mid-Range", "Federation"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), EX Skill Recovery boosted 18%"
  }
}, {
  "name": "Kamille Bidan",
  "jl": "Middle-Shooter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 796,
  "ma": 796,
  "sa": 796,
  "md": 796,
  "sd": 796,
  "br": 417,
  "pr": 417,
  "wt": ["Protag.", "Close Combat"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), EX Skill Piercing boosted 28%"
  }
}, {
  "name": "Kayra Su",
  "jl": "Defender",
  "attribute": "Technique",
  "rarity": 3,
  "a": 889,
  "ma": 558,
  "sa": 291,
  "md": 558,
  "sd": 889,
  "br": 126,
  "pr": 428,
  "wt": ["Mid-Range", "Federation"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Shot Guidance boosted 14%"
  }
}, {
  "name": "Kira Yamato",
  "jl": "Middle-Shooter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 799,
  "ma": 384,
  "sa": 1184,
  "md": 1184,
  "sd": 799,
  "br": 614,
  "pr": 213,
  "wt": ["Protag.", "For Base"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), EX Skill Recovery boosted 140"
  }
}, {
  "name": "Kou Uraki",
  "jl": "Defender",
  "attribute": "Power",
  "rarity": 4,
  "a": 1606,
  "ma": 384,
  "sa": 384,
  "md": 799,
  "sd": 799,
  "br": 612,
  "pr": 612,
  "wt": ["Protag.", "Federation"],
  "ex": {
    "type": "Part Traits",
    "name": "14% chance to survive fatal blow"
  }
}, {
  "name": "Lacus Clyne",
  "jl": "Supporter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 795,
  "ma": 795,
  "sa": 795,
  "md": 795,
  "sd": 795,
  "br": 211,
  "pr": 609,
  "wt": ["Commander", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), EX Skill recovery boosted 140"
  }
}, {
  "name": "Lalah Sune",
  "jl": "Supporter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 799,
  "ma": 384,
  "sa": 1184,
  "md": 1184,
  "sd": 799,
  "br": 614,
  "pr": 213,
  "wt": ["Long-Range", "Ace Excl."],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Debuff EX Skill Effect up 22%"
  }
}, {
  "name": "Lila Milla Rira",
  "jl": "Middle-Shooter",
  "attribute": "Power",
  "rarity": 3,
  "a": 292,
  "ma": 891,
  "sa": 891,
  "md": 559,
  "sd": 559,
  "br": 303,
  "pr": 303,
  "wt": ["Federation", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Projectile Speed boosted 14%"
  }
}, {
  "name": "Lockon Stratos",
  "jl": "Long-Shooter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 799,
  "ma": 384,
  "sa": 1606,
  "md": 799,
  "sd": 799,
  "br": 420,
  "pr": 420,
  "wt": ["High Firepower", "Long-Range"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Long Shot Attack raised 20%"
  }
}, {
  "name": "Loran Cehack",
  "jl": "Out-Fighter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 797,
  "ma": 1181,
  "sa": 1181,
  "md": 797,
  "sd": 797,
  "br": 418,
  "pr": 213,
  "wt": ["Protag.", "High Firepower"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Enemy All Power reduced 18%"
  }
}, {
  "name": "Louise Halevy",
  "jl": "Defender",
  "attribute": "Power",
  "rarity": 3,
  "a": 1144,
  "ma": 292,
  "sa": 292,
  "md": 558,
  "sd": 558,
  "br": 430,
  "pr": 127,
  "wt": ["Support Type", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Enemy All power reduced 13%"
  }
}, {
  "name": "Lowe Guele",
  "jl": "In-Fighter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 1180,
  "ma": 1180,
  "sa": 383,
  "md": 796,
  "sd": 796,
  "br": 212,
  "pr": 610,
  "wt": ["Protag.", "High Firepower"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), All CRIT Rate boosted 14%"
  }
}, {
  "name": "Lucrezia Noin",
  "jl": "Defender",
  "attribute": "Technique",
  "rarity": 3,
  "a": 559,
  "ma": 294,
  "sa": 893,
  "md": 893,
  "sd": 559,
  "br": 303,
  "pr": 303,
  "wt": ["Transformer", "Mass P."],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Debuff EX Skill Time up 22%"
  }
}, {
  "name": "Lunamaria Hawke",
  "jl": "Long-Shooter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 558,
  "ma": 291,
  "sa": 1142,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 126,
  "wt": ["For Base", "Zaku Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Long Shot Attack raised 14%"
  }
}, {
  "name": "M'Quve",
  "jl": "In-Fighter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 558,
  "ma": 291,
  "sa": 291,
  "md": 889,
  "sd": 889,
  "br": 428,
  "pr": 126,
  "wt": ["Close Combat", "For Desert"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Debuff EX Skill Effect up 15%"
  }
}, {
  "name": "Marida Cruz",
  "jl": "Long-Shooter",
  "attribute": "Power",
  "rarity": 3,
  "a": 561,
  "ma": 893,
  "sa": 294,
  "md": 561,
  "sd": 893,
  "br": 215,
  "pr": 215,
  "wt": ["Zeon", "For Computers"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Long Shot Attack raised 14%"
  }
}, {
  "name": "Mash",
  "jl": "Out-Fighter",
  "attribute": "Technique",
  "rarity": 2,
  "a": 570,
  "ma": 364,
  "sa": 187,
  "md": 364,
  "sd": 570,
  "br": 281,
  "pr": 81,
  "wt": ["Heavy Armor", "For Forest"],
  "ex": {
    "type": "Part Traits",
    "name": "EX Skill Piercing boosted 16%"
  }
}, {
  "name": "Mashymre Cello",
  "jl": "Defender",
  "attribute": "Power",
  "rarity": 3,
  "a": 889,
  "ma": 889,
  "sa": 291,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 302,
  "wt": ["Zeon", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Debuff EX Skill time up 16%"
  }
}, {
  "name": "Master Asia",
  "jl": "In-Fighter",
  "attribute": "Power",
  "rarity": 4,
  "a": 799,
  "ma": 1756,
  "sa": 156,
  "md": 799,
  "sd": 799,
  "br": 290,
  "pr": 290,
  "wt": ["Mobile Fighter", "Close Combat"],
  "ex": {
    "type": "Part Traits",
    "name": "While \"Mobile Fighter\", All DMG output boosted by 35"
  }
}, {
  "name": "Mayura Labatt",
  "jl": "Out-Fighter",
  "attribute": "Speed",
  "rarity": 2,
  "a": 364,
  "ma": 364,
  "sa": 364,
  "md": 364,
  "sd": 364,
  "br": 201,
  "pr": 201,
  "wt": ["Mass P.", "For Urban Area"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Buff EX Skill Effect up 12%"
  }
}, {
  "name": "Mikazuki Augus",
  "jl": "Defender",
  "attribute": "Power",
  "rarity": 4,
  "a": 384,
  "ma": 1182,
  "sa": 1182,
  "md": 799,
  "sd": 799,
  "br": 420,
  "pr": 420,
  "wt": ["Protag.", "For Desert"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Initial EX Skill Charge boosted 20%"
  }
}, {
  "name": "Milliardo Peacecraft",
  "jl": "Out-Fighter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 796,
  "ma": 1602,
  "sa": 384,
  "md": 796,
  "sd": 796,
  "br": 213,
  "pr": 417,
  "wt": ["Close Combat", "High Mobility"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Vernier consumption reduced 20%"
  }
}, {
  "name": "Mr. Bushido",
  "jl": "In-Fighter",
  "attribute": "Power",
  "rarity": 3,
  "a": 558,
  "ma": 1142,
  "sa": 291,
  "md": 558,
  "sd": 558,
  "br": 126,
  "pr": 302,
  "wt": ["Close Combat", "High Mobility"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), EX Skill CD reduced 15%"
  }
}, {
  "name": "Mu La Flaga",
  "jl": "Long-Shooter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 558,
  "ma": 558,
  "sa": 558,
  "md": 558,
  "sd": 558,
  "br": 428,
  "pr": 126,
  "wt": ["Support Type", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), EX Skill Piercing boosted 22%"
  }
}, {
  "name": "Nena Trinity",
  "jl": "Supporter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 891,
  "ma": 558,
  "sa": 292,
  "md": 891,
  "sd": 558,
  "br": 127,
  "pr": 430,
  "wt": ["Support Type", "Gundam Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), EX Skill Recovery boosted 16%"
  }
}, {
  "name": "Neo Roanoke",
  "jl": "Middle-Shooter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 797,
  "ma": 1181,
  "sa": 1181,
  "md": 797,
  "sd": 797,
  "br": 418,
  "pr": 213,
  "wt": ["Commander", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), 14% chance to survive a fatal blow"
  }
}, {
  "name": "Nicol Amalfi",
  "jl": "Supporter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 889,
  "ma": 889,
  "sa": 291,
  "md": 558,
  "sd": 558,
  "br": 126,
  "pr": 428,
  "wt": ["High Mobility", "Support Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), EX Skill Piercing boosted 22%"
  }
}, {
  "name": "Ortega",
  "jl": "Middle-Shooter",
  "attribute": "Speed",
  "rarity": 2,
  "a": 365,
  "ma": 187,
  "sa": 571,
  "md": 571,
  "sd": 365,
  "br": 81,
  "pr": 282,
  "wt": ["For Forest", "Zeon"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Job Gauge Charge Rate up 11%"
  }
}, {
  "name": "Paptimus Scirocco",
  "jl": "Out-Fighter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 1180,
  "ma": 1180,
  "sa": 383,
  "md": 796,
  "sd": 796,
  "br": 212,
  "pr": 610,
  "wt": ["Transformer", "Commander"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Shot Guidance boosted 14%"
  }
}, {
  "name": "Patrick Colasour",
  "jl": "Middle-Shooter",
  "attribute": "Power",
  "rarity": 3,
  "a": 1144,
  "ma": 292,
  "sa": 292,
  "md": 558,
  "sd": 558,
  "br": 127,
  "pr": 430,
  "wt": ["Mass P.", "For Urban Area"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Buff EX Skill Effect up 15%"
  }
}, {
  "name": "Poe Aijee",
  "jl": "Long-Shooter",
  "attribute": "Power",
  "rarity": 2,
  "a": 755,
  "ma": 187,
  "sa": 187,
  "md": 364,
  "sd": 364,
  "br": 281,
  "pr": 81,
  "wt": ["Long-Range", "Support Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Shot guidance boosted 14%"
  }
}, {
  "name": "Quatre Raberba Winner",
  "jl": "Supporter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 558,
  "ma": 291,
  "sa": 291,
  "md": 889,
  "sd": 889,
  "br": 126,
  "pr": 428,
  "wt": ["For Base", "For Desert"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Enemy All Power reduced 13%"
  }
}, {
  "name": "Quattro Bajeena",
  "jl": "Middle-Shooter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 797,
  "ma": 1181,
  "sa": 1181,
  "md": 797,
  "sd": 797,
  "br": 213,
  "pr": 418,
  "wt": ["Commander", "Ace Excl."],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), All DMG Output boosted 35 (flat)"
  }
}, {
  "name": "Quess Paraya",
  "jl": "Long-Shooter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 558,
  "ma": 291,
  "sa": 291,
  "md": 889,
  "sd": 889,
  "br": 428,
  "pr": 126,
  "wt": ["High Firepower", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), 14% change to survive a fatal blow"
  }
}, {
  "name": "Ramba Ral",
  "jl": "Defender",
  "attribute": "Technique",
  "rarity": 3,
  "a": 558,
  "ma": 1142,
  "sa": 291,
  "md": 558,
  "sd": 558,
  "br": 126,
  "pr": 302,
  "wt": ["Close Combat", "For Desert"],
  "ex": {
    "type": "Part Traits",
    "name": "All-Rounder Job, Vernier Recovery Rate boosted 16%"
  }
}, {
  "name": "Rau Le Creuset",
  "jl": "Long-Shooter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 1181,
  "ma": 384,
  "sa": 1181,
  "md": 796,
  "sd": 796,
  "br": 611,
  "pr": 213,
  "wt": ["Commander", "Ace Excl."],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Buff EX Skill Time up 22%"
  }
}, {
  "name": "Reccoa Londe",
  "jl": "Long-Shooter",
  "attribute": "Power",
  "rarity": 2,
  "a": 570,
  "ma": 187,
  "sa": 570,
  "md": 364,
  "sd": 364,
  "br": 201,
  "pr": 201,
  "wt": ["High Firepower", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Debuff EX Skill Effect up 12%"
  }
}, {
  "name": "Rey Za Burrel",
  "jl": "Middle-Shooter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 559,
  "ma": 294,
  "sa": 893,
  "md": 893,
  "sd": 559,
  "br": 303,
  "pr": 303,
  "wt": ["Ace Excl.", "Mid-Range"],
  "ex": {
    "type": "Part Traits",
    "name": "All ranged weapon magazine boosted 14%"
  }
}, {
  "name": "Ribbons Almark",
  "jl": "Long-Shooter",
  "attribute": "Power",
  "rarity": 4,
  "a": 797,
  "ma": 1181,
  "sa": 1181,
  "md": 797,
  "sd": 797,
  "br": 418,
  "pr": 213,
  "wt": ["Gundam Type", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "All ranged weapon reload speed boosted 18%"
  }
}, {
  "name": "Roberto",
  "jl": "In-Fighter",
  "attribute": "Technique",
  "rarity": 2,
  "a": 363,
  "ma": 363,
  "sa": 363,
  "md": 363,
  "sd": 363,
  "br": 80,
  "pr": 280,
  "wt": ["High Mobility", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Debuff EX Skill Effect up 12%"
  }
}, {
  "name": "Rosamia Badam",
  "jl": "Supporter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 889,
  "ma": 558,
  "sa": 291,
  "md": 558,
  "sd": 889,
  "br": 428,
  "pr": 126,
  "wt": ["For Space", "Transformer"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Enemy EX Skill Penetration reduced 22%"
  }
}, {
  "name": "Roux Louka",
  "jl": "Middle-Shooter",
  "attribute": "Power",
  "rarity": 3,
  "a": 559,
  "ma": 292,
  "sa": 1144,
  "md": 559,
  "sd": 559,
  "br": 303,
  "pr": 303,
  "wt": ["Transformer", "Mid-Range"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Job Gauge Increase boosted 13%"
  }
}, {
  "name": "Ryu Jose",
  "jl": "Defender",
  "attribute": "Technique",
  "rarity": 2,
  "a": 570,
  "ma": 187,
  "sa": 570,
  "md": 364,
  "sd": 364,
  "br": 201,
  "pr": 201,
  "wt": ["Long-Range", "Federation"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Buff EX Skill Time up 15%"
  }
}, {
  "name": "Sai Saici",
  "jl": "Out-Fighter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 796,
  "ma": 1602,
  "sa": 384,
  "md": 796,
  "sd": 796,
  "br": 417,
  "pr": 213,
  "wt": ["Mobile Fighter", "High Mobility"],
  "ex": {
    "type": "Part Traits",
    "name": "EX Skill CD reduced 20%"
  }
}, {
  "name": "Sarah Zabiarov",
  "jl": "Supporter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 558,
  "ma": 291,
  "sa": 291,
  "md": 889,
  "sd": 889,
  "br": 428,
  "pr": 126,
  "wt": ["Mid-Range", "Support Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Debuff EX Skill Effect up 15%"
  }
}, {
  "name": "Sayla Mass",
  "jl": "Supporter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 1144,
  "ma": 292,
  "sa": 292,
  "md": 558,
  "sd": 558,
  "br": 430,
  "pr": 127,
  "wt": ["Support Type", "For Computers"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Vernier Consumption reduced 15%"
  }
}, {
  "name": "Seabook Arno",
  "jl": "Middle-Shooter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 796,
  "ma": 384,
  "sa": 1602,
  "md": 796,
  "sd": 796,
  "br": 417,
  "pr": 213,
  "wt": ["Protag.", "For Urban Area"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Enemy All Power reduced 18%"
  }
}, {
  "name": "Selene McGriff",
  "jl": "Supporter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 558,
  "ma": 291,
  "sa": 1142,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 126,
  "wt": ["Protag.", "Support Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Enemy EX Skill Penetration reduced 22%"
  }
}, {
  "name": "Sergei Smirnov",
  "jl": "Out-Fighter",
  "attribute": "Technique",
  "rarity": 2,
  "a": 757,
  "ma": 187,
  "sa": 187,
  "md": 364,
  "sd": 364,
  "br": 281,
  "pr": 281,
  "wt": ["Ace Excl.", "Commander"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), 11% chance to not recoil"
  }
}, {
  "name": "Setsuna F. Seiei",
  "jl": "In-Fighter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 796,
  "ma": 1602,
  "sa": 384,
  "md": 796,
  "sd": 796,
  "br": 417,
  "pr": 213,
  "wt": ["Protag.", "Gundam Type"],
  "ex": {
    "type": "Part Traits",
    "name": "While \"Gundam Type\", Buff EX Skill Effect up 22%"
  }
}, {
  "name": "Shiho Hahnenfuss",
  "jl": "Long-Shooter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 558,
  "ma": 291,
  "sa": 1142,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 126,
  "wt": ["Long-Range", "Ace Excl."],
  "ex": {
    "type": "Part Traits",
    "name": "All ranged weapon magazine boosted 14%"
  }
}, {
  "name": "Shinn Asuka",
  "jl": "Out-Fighter",
  "attribute": "Power",
  "rarity": 4,
  "a": 797,
  "ma": 1181,
  "sa": 1181,
  "md": 797,
  "sd": 797,
  "br": 418,
  "pr": 213,
  "wt": ["High Mobility", "Protag."],
  "ex": {
    "type": "Part Traits",
    "name": "Initial EX Skill Charge boosted 15%"
  }
}, {
  "name": "Shiro Amada",
  "jl": "Out-Fighter",
  "attribute": "Power",
  "rarity": 4,
  "a": 1180,
  "ma": 1180,
  "sa": 383,
  "md": 796,
  "sd": 796,
  "br": 610,
  "pr": 212,
  "wt": ["For Forest", "For Desert"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Enemy Shooting Power reduced 30%"
  }
}, {
  "name": "Sigh Argyle",
  "jl": "Supporter",
  "attribute": "Power",
  "rarity": 2,
  "a": 570,
  "ma": 364,
  "sa": 187,
  "md": 570,
  "sd": 364,
  "br": 281,
  "pr": 81,
  "wt": ["Long-Range", "Gundam Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Projectile Speed boosted 12%"
  }
}, {
  "name": "Sleggar Law",
  "jl": "In-Fighter",
  "attribute": "Power",
  "rarity": 2,
  "a": 364,
  "ma": 187,
  "sa": 754,
  "md": 364,
  "sd": 364,
  "br": 201,
  "pr": 81,
  "wt": ["Support Type", "Federation"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), EX Skill Piercing boosted 15%"
  }
}, {
  "name": "Sochie Heim",
  "jl": "Supporter",
  "attribute": "Power",
  "rarity": 2,
  "a": 363,
  "ma": 186,
  "sa": 186,
  "md": 569,
  "sd": 569,
  "br": 80,
  "pr": 280,
  "wt": ["Amphib.", "Support Type"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), 10% chance to survive a fatal blow"
  }
}, {
  "name": "Soma Peries",
  "jl": "Middle-Shooter",
  "attribute": "Power",
  "rarity": 3,
  "a": 558,
  "ma": 291,
  "sa": 291,
  "md": 889,
  "sd": 889,
  "br": 428,
  "pr": 126,
  "wt": ["Mid-Range", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Enemy Shooting power reduced 25%"
  }
}, {
  "name": "Stella Loussier",
  "jl": "Out-Fighter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 558,
  "ma": 891,
  "sa": 891,
  "md": 558,
  "sd": 558,
  "br": 127,
  "pr": 302,
  "wt": ["Transformer", "Close Combat"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Job Gauge Increase boosted 13%"
  }
}, {
  "name": "Sven Cal Bayang",
  "jl": "Out-Fighter",
  "attribute": "Speed",
  "rarity": 3,
  "a": 889,
  "ma": 889,
  "sa": 291,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 302,
  "wt": ["High Mobility", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Initial EX Skill Charge boosted 12%"
  }
}, {
  "name": "Tieria Erde",
  "jl": "Long-Shooter",
  "attribute": "Power",
  "rarity": 3,
  "a": 559,
  "ma": 292,
  "sa": 1144,
  "md": 559,
  "sd": 559,
  "br": 303,
  "pr": 303,
  "wt": ["Gundam Type", "High Firepower"],
  "ex": {
    "type": "Part Traits",
    "name": "All ranged weapon magazine boosted 14%"
  }
}, {
  "name": "Tobia Arronax",
  "jl": "In-Fighter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 796,
  "ma": 1602,
  "sa": 384,
  "md": 796,
  "sd": 796,
  "br": 417,
  "pr": 213,
  "wt": ["Protag.", "Close Combat"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Buff EX Skill effect up 22%"
  }
}, {
  "name": "Treize Khushrenada",
  "jl": "In-Fighter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 558,
  "ma": 558,
  "sa": 558,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 302,
  "wt": ["Commander", "For Space"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), 14% chance to survive a fatal blow"
  }
}, {
  "name": "Trowa Barton",
  "jl": "Middle-Shooter",
  "attribute": "Technique",
  "rarity": 3,
  "a": 891,
  "ma": 292,
  "sa": 891,
  "md": 558,
  "sd": 558,
  "br": 302,
  "pr": 302,
  "wt": ["For Base", "High Firepower"],
  "ex": {
    "type": "Part Traits",
    "name": "All ranged weapon magazine boosted 14%"
  }
}, {
  "name": "Üso Ewin",
  "jl": "Out-Fighter",
  "attribute": "Technique",
  "rarity": 4,
  "a": 795,
  "ma": 795,
  "sa": 795,
  "md": 795,
  "sd": 795,
  "br": 609,
  "pr": 211,
  "wt": ["Protag.", "For Forest"],
  "ex": {
    "type": "Part Traits",
    "name": "With Technique attribute (self), Buff EX Skill Time up 22%"
  }
}, {
  "name": "Yazan Gable",
  "jl": "In-Fighter",
  "attribute": "Power",
  "rarity": 3,
  "a": 891,
  "ma": 558,
  "sa": 292,
  "md": 891,
  "sd": 558,
  "br": 430,
  "pr": 127,
  "wt": ["Federation", "Transformer"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), 20% chance to not recoil"
  }
}, {
  "name": "Yzak Joule",
  "jl": "Middle-Shooter",
  "attribute": "Power",
  "rarity": 3,
  "a": 1145,
  "ma": 292,
  "sa": 292,
  "md": 559,
  "sd": 559,
  "br": 430,
  "pr": 430,
  "wt": ["Heavy Armor", "High Firepower"],
  "ex": {
    "type": "Part Traits",
    "name": "With Power attribute (self), Buff EX Skill Effect up 15%"
  }
}, {
  "name": "Zechs Marquise",
  "jl": "In-Fighter",
  "attribute": "Speed",
  "rarity": 4,
  "a": 795,
  "ma": 795,
  "sa": 795,
  "md": 795,
  "sd": 795,
  "br": 211,
  "pr": 609,
  "wt": ["High Mobility", "Commander"],
  "ex": {
    "type": "Part Traits",
    "name": "With Speed attribute (self), Vernier Recovery Rate boosted 20%"
  }
}];

const GearSlotText = [
  'Torso',
  'R. Arm',
  'L. Arm',
  'R. Leg',
  'L. Leg'
];

const GearTypes = {
  "torso": [{
    "name": "Armor[+500]",
    "a": 500,
    "rarity": 1
  }, {
    "name": "Armor[+1000]",
    "a": 1000,
    "rarity": 2
  }, {
    "name": "Armor[+1500]",
    "a": 1500,
    "rarity": 3
  }, {
    "name": "MeleeAtk[+500]",
    "ma": 500,
    "rarity": 1
  }, {
    "name": "MeleeAtk[+1000]",
    "ma": 1000,
    "rarity": 2
  }, {
    "name": "MeleeAtk[+1500]",
    "ma": 1500,
    "rarity": 3
  }, {
    "name": "ShotAtk[+500]",
    "sa": 500,
    "rarity": 1
  }, {
    "name": "ShotAtk[+1000]",
    "sa": 1000,
    "rarity": 2
  }, {
    "name": "ShotAtk[+1500]",
    "sa": 1500,
    "rarity": 3
  }, {
    "name": "MeleeDef[+500]",
    "md": 500,
    "rarity": 1
  }, {
    "name": "MeleeDef[+1000]",
    "md": 1000,
    "rarity": 2
  }, {
    "name": "MeleeDef[+1500]",
    "md": 1500,
    "rarity": 3
  }, {
    "name": "ShotDef[+500]",
    "sd": 500,
    "rarity": 1
  }, {
    "name": "ShotDef[+1000]",
    "sd": 1000,
    "rarity": 2
  }, {
    "name": "ShotDef[+1500]",
    "sd": 1500,
    "rarity": 3
  }, {
    "name": "BeamRes[+500]",
    "br": 500,
    "rarity": 1
  }, {
    "name": "BeamRes[+1000]",
    "br": 1000,
    "rarity": 2
  }, {
    "name": "BeamRes[+1500]",
    "br": 1500,
    "rarity": 3
  }, {
    "name": "PhysRes[+500]",
    "pr": 500,
    "rarity": 1
  }, {
    "name": "PhysRes[+1000]",
    "pr": 1000,
    "rarity": 2
  }, {
    "name": "PhysRes[+1500]",
    "pr": 1500,
    "rarity": 3
  }, {
    "name": "DualAtk[+300]",
    "ma": 300,
    "sa": 300,
    "rarity": 1
  }, {
    "name": "DualAtk[+650]",
    "ma": 650,
    "sa": 650,
    "rarity": 2
  }, {
    "name": "DualAtk[+1000]",
    "ma": 1000,
    "sa": 1000,
    "rarity": 3
  }],
  "arm-right" : [{
    "name": "Chg.Mel.[+10%]",
    "ma": { "attrs" : ["md"], "multiplier" : 0.1 },
    "rarity": 1
  }, {
    "name": "Chg.Mel.[+20%]",
    "ma": { "attrs" : ["md"], "multiplier" : 0.2 },
    "rarity": 2
  }, {
    "name": "Chg.Mel.[+30%]",
    "ma": { "attrs" : ["md"], "multiplier" : 0.3 },
    "rarity": 3
  }, {
    "name": "Chg.Shot[+10%]",
    "ma": { "attrs" : ["sd"], "multiplier" : 0.1 },
    "rarity": 1
  }, {
    "name": "Chg.Shot[+20%]",
    "ma": { "attrs" : ["sd"], "multiplier" : 0.2 },
    "rarity": 2
  }, {
    "name": "Chg.Shot[+30%]",
    "ma": { "attrs" : ["sd"], "multiplier" : 0.3 },
    "rarity": 3
  }, {
    "name": "Chg.Res.[+5%]",
    "ma": { "attrs" : ["pr", "br"], "multiplier" : 0.05 },
    "sa": { "attrs" : ["pr", "br"], "multiplier" : 0.05 },
    "rarity": 1
  }, {
    "name": "Chg.Res.[+15%]",
    "ma": { "attrs" : ["pr", "br"], "multiplier" : 0.15 },
    "sa": { "attrs" : ["pr", "br"], "multiplier" : 0.15 },
    "rarity": 2
  }, {
    "name": "Chg.Res.[+25%]",
    "ma": { "attrs" : ["pr", "br"], "multiplier" : 0.25 },
    "sa": { "attrs" : ["pr", "br"], "multiplier" : 0.25 },
    "rarity": 3
  }]
};