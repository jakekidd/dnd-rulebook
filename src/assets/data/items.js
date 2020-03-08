// console.log(items.generateRandomLoot(2));
// Money map:
// moneymap = {};
// ([1,2,3,4,5,6,7,8]).forEach(v => {
//   var moneys = [];
//   for (let i = 0; i < 100000; i++) {
//     moneys.push(items.generateRandomMoney(v).amount)
//   }
//   const sum = moneys.reduce((a,b) => a+b || 0);
//   moneymap[v] = sum/moneys.length;
// });
// console.log(moneymap);

// Helper func used in random loot generator.
function getRandomInt(min, max, weighted=false) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive.
  var random = Math.random();
  // Weighted 1-20: avg 5.3
  // Non-weighted 1-20: avg 10.0
  random = weighted ? random * Math.log(1 + random) : random;
  return Math.floor(random * (max - min)) + min;
}

// Need to rearrange the items in a way that's most ideal for all use cases.
// Use cases:
// - grabbing a category of items for equipment section.
// - grabbing a specific item by name
// - grabbing a random item (possibly within a category)
// Data structures:
// 1 entirely table: each item is indexed by a constant name
// - O(1)
// - O(1)
// - O(1)
// 2 entirely array:
// - O(n)
// - O(n)
// - O(1)

const ITEMS = {
  LOCATION_WEIGHT: {
    BODY: 12.0,
    CHEST: 50.0,
    CRATE: 40.0,
    BARREL: 30.0,
    ROOM: 100.0
  },
  generateRandomLoot: (ncr, multiplier=1.0, maxNetWeight=ITEMS.LOCATION_WEIGHT.BODY) => {
    var pts = getRandomInt(Math.ceil(ncr) * 2, Math.ceil(ncr) * 3) * multiplier
    const numItems = getRandomInt(Math.ceil(pts / 6), pts + 1, (pts >= 8));
    // We start our items array filled with 1s - subtract that from points.
    pts -= numItems;
    var items = new Array(numItems).fill(1).map(v => {
      const value = getRandomInt(1,Math.min(6, pts + 1))
      pts -= value;
      return v + value;
    });
    var weightLeft = maxNetWeight;
    return items.map(v => {
      const options = ITEMS.ALL.filter(i => {
        // Filter to show items only of this value.
        if (i.rarity !== v) {
          return false;
        // If we have a max net weight specified, make sure the item weighs less than that.
        } else if (maxNetWeight && (i.weight > weightLeft && i.weight !== null)) {
          return false;
        }
        return true;
      });
      var item = options[Math.floor(Math.random() * options.length)];
      weightLeft -= item.weight;
      item.rarity = ITEMS.RARITY[item.rarity];
      return item;
    });
  },
  generateRandomMoney: (ncr, multiplier=1.0, weighted=true) => {
    var amount = getRandomInt(0, Math.pow(2, Math.max(2, ncr * 2)), weighted) * multiplier;
    amount /= 100;
    const gp = Math.round(amount);
    var sp = Math.round(amount % 1 * 100);
    var cp = sp % 10;
    sp -= sp % 10;
    return {
      amount,
      string:
        (gp ? `${gp} gp${(sp || cp) && ', '}` : '')
        + (sp ? `${sp} sp${cp && ', '}` : '')
        + (cp ? `${cp} cp` : '')
    };
  },
  RARITY: {
    1: 'Mundane',
    2: 'Common',
    3: 'Uncommon',
    4: 'Very Rare',
    5: 'Rare',
    6: 'Legendary'
  },
  CATEGORIES: {
    TRAP: 'Trap',
    POTION: 'Potion',
    ARCANE_FOCUS: 'Arcane Focus',
    ARCANE_SUPPLIES: 'Arcane Supplies',
    MUNDANE: 'Mundane',
    ROD: 'Rod',
    ADVENTURING_GEAR: 'Adventuring Gear',
    AMMUNITION: 'Ammunition',
    MISC: 'Misc',
    MUSICAL_INSTRUMENT: 'Musical Instrument',
    DRUIDIC_FOCUS: 'Druidic Focus',
    QUEST_HOOK: 'Quest Hook',
    BOOK: 'Book',
    TOOLS: 'Tools',
    TREASURE: 'Treasure',
    CONTAINER: 'Container',
    WONDROUS_ITEM: 'Wondrous Item',
    WEAPON: 'Weapon',
    ARMOR: 'Armor',
    HOLY_SYMBOL: 'Holy Symbol',
    STARTER_PACKS: 'Starter Pack',
    RING: 'Ring'
  },
  ARCANE_SUPPLIES: {
    SPELLBOOK: {
      "name": "Spellbook",
      "desc": "Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells.",
      "value": 50,
      "rarity": 2,
      "weight": 3,
      "category": "Arcane Supplies",
      "properties": null,
      "requirements": null
    },
    COMPONENT_POUCH: {
      "name": "Component pouch",
      "desc": "A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description).",
      "value": 25,
      "rarity": 2,
      "weight": 2,
      "category": "Arcane Supplies",
      "properties": null,
      "requirements": null
    }
  },
  ARCANE_FOCUS: {
    text: "Arcane Focus",
    CRYSTAL: {
      "name": "Crystal",
      "desc": "",
      "value": 10,
      "rarity": 1,
      "weight": 1,
      "category": "Arcane Focus",
      "properties": null,
      "requirements": null
    },
    ORB: {
      "name": "Orb",
      "desc": "",
      "value": 20,
      "rarity": 2,
      "weight": 3,
      "category": "Arcane Focus",
      "properties": null,
      "requirements": null
    },
    ROD: {
      "name": "Rod",
      "desc": "",
      "value": 10,
      "rarity": 1,
      "weight": 2,
      "category": "Arcane Focus",
      "properties": null,
      "requirements": null
    },
    STAFF: {
      "name": "Staff",
      "desc": "",
      "value": 5,
      "rarity": 1,
      "weight": 4,
      "category": "Arcane Focus",
      "properties": null,
      "requirements": null
    },
    WAND: {
      "name": "Wand",
      "desc": "",
      "value": 10,
      "rarity": 1,
      "weight": 1,
      "category": "Arcane Focus",
      "properties": null,
      "requirements": null
    },
  },
  DRUIDIC_FOCUS: {
    text: "Druidic Focus",
    MISTLETOE: {
      "name": "Sprig of mistletoe",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": null,
      "category": "Druidic Focus",
      "properties": null,
      "requirements": null
    },
    TOTEM: {
      "name": "Totem",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": null,
      "category": "Druidic Focus",
      "properties": null,
      "requirements": null
    },
    WOODEN_STAFF: {
      "name": "Wooden staff",
      "desc": "",
      "value": 5,
      "rarity": 1,
      "weight": 4,
      "category": "Druidic Focus",
      "properties": null,
      "requirements": null
    },
    YEW_WAND: {
      "name": "Yew wand",
      "desc": "",
      "value": 10,
      "rarity": 1,
      "weight": 1,
      "category": "Druidic Focus",
      "properties": null,
      "requirements": null
    },
  },
  HOLY_SYMBOL: {
    text: "Holy Symbol",
    AMULET: {
      "name": "Amulet",
      "desc": "",
      "value": 5,
      "rarity": 1,
      "weight": 1,
      "category": "Holy Symbol",
      "properties": null,
      "requirements": null
    },
    EMBLEM: {
      "name": "Emblem",
      "desc": "",
      "value": 5,
      "rarity": 1,
      "weight": null,
      "category": "Holy Symbol",
      "properties": null,
      "requirements": null
    },
    RELIQUARY: {
      "name": "Reliquary",
      "desc": "",
      "value": 5,
      "rarity": 1,
      "weight": 2,
      "category": "Holy Symbol",
      "properties": null,
      "requirements": null
    },
    HOLY_WATER: {
      "name": "Holy water (flask)",
      "desc": "As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. A cleric or paladin may create holy water by performing a special ritual. The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot.  In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage.",
      "value": 25,
      "rarity": 2,
      "weight": 1,
      "category": "Holy Symbol",
      "properties": null,
      "requirements": null
    },
  },
  AMMUNITION: {
    text: "Ammunition",
    ARROW: {
      "name": "Arrow",
      "desc": "",
      "value": 0.05,
      "rarity": 1,
      "weight": 0.05,
      "category": "Ammunition",
      "properties": null,
      "requirements": null
    },
    BLOWGUN_DART: {
      "name": "Blowgun dart",
      "desc": "",
      "value": 0.01,
      "rarity": 1,
      "weight": 0.02,
      "category": "Ammunition",
      "properties": null,
      "requirements": null
    },
    CROSSBOW_BOLT: {
      "name": "Crossbow bolt",
      "desc": "",
      "value": 0.05,
      "rarity": 1,
      "weight": 0.075,
      "category": "Ammunition",
      "properties": null,
      "requirements": null
    },
    SLING_BULLET: {
      "name": "Sling bullet",
      "desc": "",
      "value": 0.04,
      "rarity": 1,
      "weight": 0.075,
      "category": "Ammunition",
      "properties": null,
      "requirements": null
    },
  },
  STARTER_PACK: {
    text: "Starter Pack",
    BURGLAR: {
      "name": "Burglar\u2019s Pack",
      "desc": "Includes a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.",
      "value": 16,
      "rarity": 1,
      "weight": 465,
      "category": "Starter Pack",
      "properties": null,
      "requirements": null
    },
    DIPLOMAT: {
      "name": "Diplomat\u2019s Pack",
      "desc": "Includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle o f ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap.",
      "value": 39,
      "rarity": 2,
      "weight": 46,
      "category": "Starter Pack",
      "properties": null,
      "requirements": null
    },
    DUNGEONEER: {
      "name": "Dungeoneer\u2019s Pack",
      "desc": "Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.",
      "value": 12,
      "rarity": 1,
      "weight": 615,
      "category": "Starter Pack",
      "properties": null,
      "requirements": null
    },
    ENTERTAINER: {
      "name": "Entertainer\u2019s Pack",
      "desc": "Includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days o f rations, a waterskin, and a disguise kit.",
      "value": 40,
      "rarity": 2,
      "weight": 38,
      "category": "Starter Pack",
      "properties": null,
      "requirements": null
    },
    EXPLORER: {
      "name": "Explorer\u2019s Pack",
      "desc": "Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.",
      "value": 10,
      "rarity": 1,
      "weight": 59,
      "category": "Starter Pack",
      "properties": null,
      "requirements": null
    },
    PRIEST: {
      "name": "Priest\u2019s Pack",
      "desc": "Includes a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin.",
      "value": 19,
      "rarity": 1,
      "weight": 25,
      "category": "Starter Pack",
      "properties": null,
      "requirements": null
    },
    SCHOLAR: {
      "name": "Scholar\u2019s Pack",
      "desc": "Includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife.",
      "value": 40,
      "rarity": 2,
      "weight": 11,
      "category": "Starter Pack",
      "properties": null,
      "requirements": null
    }
  },
  TOOLS: {
    text: "Tools",
    ARTISAN: {
      "name": "Artisan\u2019s tools",
      "desc": "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set o f artisan\u2019s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan\u2019s tools requires a separate proficiency.",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    ALCHEMIST: {
      "name": "Alchemist\u2019s supplies",
      "desc": "",
      "value": 50,
      "rarity": 2,
      "weight": 8,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    BREWER: {
      "name": "Brewer\u2019s supplies",
      "desc": "",
      "value": 20,
      "rarity": 2,
      "weight": 9,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    CALLIGRAPHER: {
      "name": "Calligrapher's supplies",
      "desc": "",
      "value": 10,
      "rarity": 1,
      "weight": 5,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    CARPENTER: {
      "name": "Carpenter\u2019s tools",
      "desc": "",
      "value": 8,
      "rarity": 1,
      "weight": 6,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    CARTOGRAPHER: {
      "name": "Cartographer\u2019s tools",
      "desc": "",
      "value": 15,
      "rarity": 1,
      "weight": 6,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    COBBLER: {
      "name": "Cobbler\u2019s tools",
      "desc": "",
      "value": 5,
      "rarity": 1,
      "weight": 5,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    COOK: {
      "name": "Cook\u2019s utensils",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": 8,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    GLASSBLOWER: {
      "name": "Glassblower\u2019s tools",
      "desc": "",
      "value": 30,
      "rarity": 2,
      "weight": 5,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    JEWELER: {
      "name": "Jeweler\u2019s tools",
      "desc": "",
      "value": 25,
      "rarity": 2,
      "weight": 2,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    LEATHERWORKER: {
      "name": "Leatherworker\u2019s tools",
      "desc": "",
      "value": 5,
      "rarity": 1,
      "weight": 5,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    MASON: {
      "name": "Mason\u2019s tools",
      "desc": "",
      "value": 10,
      "rarity": 1,
      "weight": 8,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    PAINTER: {
      "name": "Painter\u2019s supplies",
      "desc": "",
      "value": 10,
      "rarity": 1,
      "weight": 5,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    POTTER: {
      "name": "Potter\u2019s tools",
      "desc": "",
      "value": 10,
      "rarity": 1,
      "weight": 3,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    SMITH: {
      "name": "Smith\u2019s tools",
      "desc": "",
      "value": 20,
      "rarity": 2,
      "weight": 8,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    TINKER: {
      "name": "Tinkerer\u2019s tools",
      "desc": "",
      "value": 50,
      "rarity": 2,
      "weight": 10,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    WEAVER: {
      "name": "Weaver\u2019s tools",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": 5,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    WOODCARVER: {
      "name": "Woodcarver's tools",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": 5,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    CLIMBER: {
      "name": "Climber's kit",
      "desc": "A climber\u2019s kit includes special pitons, boot tips, gloves, and a harness. You can use the climber\u2019s kit as an action to anchor yourself; when you do, you can\u2019t fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor.",
      "value": 25,
      "rarity": 2,
      "weight": 12,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    FISHING: {
      "name": "Fishing tackle",
      "desc": "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.",
      "value": 1,
      "rarity": 1,
      "weight": 4,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    HEALER: {
      "name": "Healer\u2019s kit",
      "desc": "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check.",
      "value": 5,
      "rarity": 1,
      "weight": 3,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    DISGUISE: {
      "name": "Disguise kit",
      "desc": "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.",
      "value": 25,
      "rarity": 2,
      "weight": 3,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    FORGERY: {
      "name": "Forgery kit",
      "desc": "This small b ox contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document.",
      "value": 15,
      "rarity": 1,
      "weight": 5,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    GAMING: {
      "name": "Gaming sets",
      "desc": "This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    DICE: {
      "name": "Dice set",
      "desc": "",
      "value": 0.1,
      "rarity": 1,
      "weight": null,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    DRAGONCHESS: {
      "name": "Dragonchess set",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": 0.5,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    PLAYING_CARDS: {
      "name": "Playing card set",
      "desc": "",
      "value": 0.5,
      "rarity": 1,
      "weight": null,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    THREE_DRAGON_ANTE: {
      "name": "Three-Dragon Ante set",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": null,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    HERBALISM: {
      "name": "Herbalism kit",
      "desc": "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing.",
      "value": 5,
      "rarity": 1,
      "weight": 3,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    NAVIGATOR: {
      "name": "Navigator\u2019s tools",
      "desc": "This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea.",
      "value": 25,
      "rarity": 2,
      "weight": 2,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    POISONER: {
      "name": "Poisoner\u2019s kit",
      "desc": "A poisoner\u2019s kit includes the vials, chemicals, and other equipment necessary for the creation o f poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons.",
      "value": 50,
      "rarity": 2,
      "weight": 2,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
    THIEVES: {
      "name": "Thieves\u2019 tools",
      "desc": "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.",
      "value": 25,
      "rarity": 2,
      "weight": 1,
      "category": "Tools",
      "properties": null,
      "requirements": null
    },
  },
  MUSICAL_INSTRUMENT: {
    text: "Musical Instrument",
    BAGPIPES: {
      "name": "Bagpipes",
      "desc": "",
      "value": 30,
      "rarity": 2,
      "weight": 6,
      "category": "Musical Instrument",
      "properties": null,
      "requirements": null
    },
    DRUM: {
      "name": "Drum",
      "desc": "",
      "value": 6,
      "rarity": 1,
      "weight": 3,
      "category": "Musical Instrument",
      "properties": null,
      "requirements": null
    },
    DULCIMER: {
      "name": "Dulcimer",
      "desc": "",
      "value": 25,
      "rarity": 2,
      "weight": 10,
      "category": "Musical Instruments",
      "properties": null,
      "requirements": null
    },
    FLUTE: {
      "name": "Flute",
      "desc": "",
      "value": 2,
      "rarity": 1,
      "weight": 1,
      "category": "Musical Instrument",
      "properties": null,
      "requirements": null
    },
    LUTE: {
      "name": "Lute",
      "desc": "",
      "value": 35,
      "rarity": 2,
      "weight": 2,
      "category": "Musical Instrument",
      "properties": null,
      "requirements": null
    },
    LYRE: {
      "name": "Lyre",
      "desc": "",
      "value": 30,
      "rarity": 2,
      "weight": 2,
      "category": "Musical Instrument",
      "properties": null,
      "requirements": null
    },
    HORN: {
      "name": "Horn",
      "desc": "",
      "value": 3,
      "rarity": 1,
      "weight": 2,
      "category": "Musical Instrument",
      "properties": null,
      "requirements": null
    },
    PAN_FLUTE: {
      "name": "Pan flute",
      "desc": "",
      "value": 12,
      "rarity": 1,
      "weight": 2,
      "category": "Musical Instrument",
      "properties": null,
      "requirements": null
    },
    SHAWM: {
      "name": "Shawm",
      "desc": "",
      "value": 2,
      "rarity": 1,
      "weight": 1,
      "category": "Musical Instrument",
      "properties": null,
      "requirements": null
    },
    VIOLA: {
      "name": "Viola",
      "desc": "",
      "value": 30,
      "rarity": 2,
      "weight": 1,
      "category": "Musical Instrument",
      "properties": null,
      "requirements": null
    }
  },
  ALL: [
    {
      "name": "Antitoxin (vial)",
      "desc": "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs.",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Potion",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Oily Rags",
      "desc": "Three oily rags in an old wicker basket.",
      "value": 0.2,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pickle",
      "desc": "On the floor, you find a single pickle wrapped in an oily paper bag. It has a strong distinct smell, but otherwise seems like a normal pickle.",
      "value": 0.05,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ancient Sword",
      "desc": "A used, slightly rusted double-bladed sword.",
      "value": 2,
      "rarity": 1,
      "weight": 3,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse, Light",
      "requirements": null
    },
    {
      "name": "Andar Gem",
      "desc": "Andar is hard and durable, yielding translucent gems that flash green-red or brown-red when properly faceted.",
      "value": 15,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Banded Agate Gem",
      "desc": "A round translucent white gemstone with a ring of striped brown through its center.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Barrel o' Eels",
      "desc": "A large barrel of pickled eels. The barrel can be re-used, but it's unlikely the smell of pickled eel will ever truly be washed out.",
      "value": 5,
      "rarity": 1,
      "weight": 35,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Barrel o' Nails",
      "desc": "A newly crafted barrel filled with iron nails. Might be difficult for the players to get this around if they don't have a cart.",
      "value": 5,
      "rarity": 1,
      "weight": 40,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Beaver Pelts",
      "desc": "A string of eight beaver pelts.",
      "value": 1,
      "rarity": 1,
      "weight": 20,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Belt",
      "desc": "An old leather belt.",
      "value": 0.15,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Black Velvet Mask",
      "desc": "An ornate black velvet mask sitched with silver thread.",
      "value": 25,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blank Scroll",
      "desc": "A blank scroll. It could have any spell in the world on it, eventually. The possibilities are endless.",
      "value": 0.5,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blanket",
      "desc": "A thick woolen blanket. Something like this is perfect for wrapping up during those long cold nights spent staring at a cave wall.",
      "value": 0.35,
      "rarity": 1,
      "weight": 3,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blood Stained Dress",
      "desc": "A blood-stained dress which, despite being found in ruins which have lain undisturbed for centuries, is still a vibrant, stunning blue.",
      "value": 2,
      "rarity": 1,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blood-Soaked Book",
      "desc": "A blood-soaked book; a partially written history about a long-lost keep on the borderlands. The last written page is done in a different hand, and is scrawled with \u201cThe rules have changed!\u201d in large, bold letters. Roughly a third of the book (of 100 pages) has been used. ",
      "value": 5,
      "rarity": 1,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Blue Quartz Gem",
      "desc": "A small quartz gemstone shaped in a bevelled square. It is transparent pale blue in color.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blue Scarf",
      "desc": "A finely woven blue wool scarf.",
      "value": 1,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bone Butter Churn",
      "desc": "A butter churn made of bone slats, bound with hoops of silver. A scrimshaw scene depicting a crowd of human villagers beating a Halfling with shovels and hoes wraps around it.",
      "value": 0.5,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bone Dice",
      "desc": "A pair of engraved bone dice.",
      "value": 25,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bone Fragments",
      "desc": "Bits of bone from an unknown creature.",
      "value": 0,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bone Needle",
      "desc": "A long needle carved out of bone.",
      "value": 0.25,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Broken Sword",
      "desc": "This is simply a regular sword that has been partially broken, in combat or however. Most people would just get rid of it, but maybe this sword has a nice hilt or sentimental value. ",
      "value": 0.5,
      "rarity": 1,
      "weight": 3,
      "category": "Weapon",
      "properties": "1d4 Piercing, Finesse, Light",
      "requirements": null
    },
    {
      "name": "Candle",
      "desc": "Six red wax candles. ",
      "value": 0.01,
      "rarity": 1,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet. ",
      "requirements": null
    },
    {
      "name": "Carved Bone Statuette",
      "desc": "A carved ox bone female figure statue on a wooden base. The statue is 16\" in height.",
      "value": 25,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Chalk",
      "desc": "A small piece of chalk used to draw on any hard surface.",
      "value": 0.05,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Cloth Scrap",
      "desc": "An old scrap of cloth from a shirt or sheet of some kind. ",
      "value": 0,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Cloth-of-gold Vestments",
      "desc": "These holy garments are made of silk interwoven with gold threads.",
      "value": 25,
      "rarity": 1,
      "weight": 3,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Comb",
      "desc": "A small wooden comb.",
      "value": 0.2,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Cooking Pot",
      "desc": "A cast iron cooking pot. It smells like it was last used for soup.",
      "value": 0.2,
      "rarity": 1,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Copper Acorns",
      "desc": "Heavy, solid copper acorns with perfect natural detail.",
      "value": 1,
      "rarity": 1,
      "weight": 2,
      "category": "Treasure",
      "properties": "These acorns drop from the oak-like trees that sprout on the graves of Copper Dragons. They can be lethal when falling, often embedding themselves in the ground.",
      "requirements": null
    },
    {
      "name": "Copper Chalice",
      "desc": "A small copper chalice with a silver filigree.",
      "value": 25,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Crowbar",
      "desc": "Using a crowbar grants advantage to Strength checks where the crowbar\u2019s leverage can be applied.",
      "value": 2,
      "rarity": 1,
      "weight": 5,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Crude Box",
      "desc": "A wooden box. Carved by someone who has had no formal training in woodworking, and it shows.",
      "value": 0.15,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Crude Holy Symbol",
      "desc": "A crudely carved wooden holy symbol.",
      "value": 0.5,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Crude Pipe",
      "desc": "A crudely carved wooden pipe.",
      "value": 0.15,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Curious Powder Box",
      "desc": "Metal box of unidentifiable powder.",
      "value": 0.5,
      "rarity": 1,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dead Fey",
      "desc": "A long-dead fey, dried and petrified as a trophy and hanging from ceiling.",
      "value": 5,
      "rarity": 1,
      "weight": 120,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Deer Bust",
      "desc": "The mounted head of a deer, it's impossibly massive horns have broken in places.",
      "value": 5,
      "rarity": 1,
      "weight": 7,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Demon's Vale Wine",
      "desc": "A one-gallon cask of Demon\u2019s Vale Wine; a fiery red wine known to be made from hot peppers.",
      "value": 10,
      "rarity": 1,
      "weight": 10,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dice (6 Sided)",
      "desc": "A six sided dice. Probably used in some silly tabletop game.",
      "value": 0.15,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dinosaur Bacon",
      "desc": "18 dried rashers of meat, possibly the largest rashers you have ever seen. They are wrapped in a sheep bladder cloth which has been labelled \"THUNDERER MEAT\" in large, rough handwriting.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dire Bat Wings",
      "desc": "Hanging from a drying rack are two large Dire Bat wings. It is unclear how long they have been seperated from the rest of the bat, but they are in good condition and could potentially be used as a crafting material.",
      "value": 2,
      "rarity": 1,
      "weight": 4,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Disk of Balance",
      "desc": "A disk of finely polished stone. On one side, the Elvish rune for death is inscribed in blackest obsidian. Upon the other, the Dwarven rune for life is inscribed in the palest ivory.",
      "value": 4,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Weight Training Equipment",
      "desc": "The party finds a complete set of bronze and carved stone weight training equipment issued to the 4th army of some Ancient Empire. There is an inscription in one of the weights that reads \"Dost thou even lift, brother?\"",
      "value": 20,
      "rarity": 1,
      "weight": 200,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dried Flower",
      "desc": "A flower that has been dried out to preserve it.",
      "value": 0,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dust Ruby",
      "desc": "A ruby the size of a man\u2019s fist which sparkles and gleams with the promise of untold wealth in the faintest of lights, but which crumbles to dust upon the lightest touch.",
      "value": 0,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Electrum Bracer",
      "desc": "An archer\u2019s bracer of leather and electrum.",
      "value": 2.5,
      "rarity": 1,
      "weight": 1,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Leather Ball",
      "desc": "A leather ball stuffed with chicken feathers. On a DC 15 peception check the player can find an electrum ring amongst the feathers.",
      "value": 3.5,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Empty Vial",
      "desc": "An empty vial, just waiting to be filled with something more valuable than itself.",
      "value": 0.35,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Eye Agate Gem",
      "desc": "This simple agate gem has translucent circles of white dotted around its surface which bring to mind the image of an eye.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fat Cat Statue",
      "desc": "A life sized copper statue of a fat cat with amber eyes that purrs when stroked. Curiously, it does not detect as magic.",
      "value": 5,
      "rarity": 1,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fine Cheese",
      "desc": "A 5\u2019 diameter wheel of fine, aged cheese",
      "value": 0.5,
      "rarity": 1,
      "weight": 4,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fishing Tackle",
      "desc": "Useful for catching fish.",
      "value": 1,
      "rarity": 1,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Flesh Shield",
      "desc": "A small wooden shield bound in human skin bearing a tattoo that appears to be some sort of map. The skin is held in place with a rim of beaten copper.",
      "value": 7,
      "rarity": 1,
      "weight": 6,
      "category": "Armor",
      "properties": "Provides +2 AC",
      "requirements": null
    },
    {
      "name": "Flint & Steel",
      "desc": "A carved steel striker and a piece of shaped flint that allows the user to start a fire.",
      "value": 0.3,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fool's Gold",
      "desc": "A handheld water pan with a number of chunks of pyrite in it, otherwise known as \"Fool's Gold\". You might be able to convince someone that these nuggets are real gold, but not for very long.",
      "value": 0.5,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fragrant Torches",
      "desc": "A bag containing 1d8 torches infused with pleasant fragrances. This may have been owned by a tanner, to cover the overwhelming stench of tannin that is used in the leathermaking process.",
      "value": 4,
      "rarity": 1,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Frolee's Guide to Follicle Perfection",
      "desc": "A wizard called Frolee appears to have mass produced a five page guide to mustaches and beards. It has a unique, hairy cover made out of bearskin.",
      "value": 2,
      "rarity": 1,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Garlic",
      "desc": "A wreath of eight garlic buds.",
      "value": 0.2,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gem",
      "desc": "A teal gem.",
      "value": 1,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gem of Azurite",
      "desc": "A small Azurite gem. It is opaque and a deep mottled blue in colour.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Glass Sphere",
      "desc": "A 14 inch diameter sealed glass sphere containing water and an ornamental fish.",
      "value": 3,
      "rarity": 1,
      "weight": 8,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Glittering Glass",
      "desc": "A sparkling handful of raw gems.",
      "value": 0.01,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": "These convincing rocks are actually made of a river-tumbled glassy stone that is said to form from the aftermath of elemental turmoil.",
      "requirements": null
    },
    {
      "name": "Glitternight Dust",
      "desc": "This is a tiny jar of glitternight dust. (a narcotic)",
      "value": 3,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Glow Stone",
      "desc": "A small green stone that gives off a feint light that's practically imperceptable in anything other than pitch black darkness. It could be used as a marker or a light source in a pinch.",
      "value": 2,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": "Provides dim-light for a 5 foot radius.",
      "requirements": null
    },
    {
      "name": "Goat Jerky",
      "desc": "A pound of goat jerky.",
      "value": 0.2,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gold Bracelet",
      "desc": "A small gold bracelet. It's design is plain so as to be appropriate for anyone.",
      "value": 25,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gold Locket",
      "desc": "A charming golden locket with a painted portrait inside.",
      "value": 25,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hammer",
      "desc": "A crosspeen hammer forged from steel. It has a gently crowned flat face that has been hardened and tempered for toughness. The handle is hand carved ash, flame treated and oiled.",
      "value": 1,
      "rarity": 1,
      "weight": 3,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hand Mirror",
      "desc": "",
      "value": 2,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hematite",
      "desc": "A rather dull gray-black hematite gem with the remains of a necklace fasten on its back.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Holy Bones",
      "desc": "A reliquary containing the bones of an ancient holy man",
      "value": 0,
      "rarity": 1,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Holy Book",
      "desc": "An old tome, written for the clergy of Pelor. It has a stiff leather dust jacket which has been worn down on the spine and a broken clasp once used to attach a chain",
      "value": 4,
      "rarity": 1,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Holy Ice Symbol",
      "desc": "An ornate block of ice carved into an ancient holy symbol. The carving has a subtle taint of magic to it, but it's not exactly clear what prevents it from melting.",
      "value": 400,
      "rarity": 3,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Holy Symbol",
      "desc": "A wooden holy symbol. ",
      "value": 0.25,
      "rarity": 1,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Honey",
      "desc": "A quart of honey.",
      "value": 1,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Honeysuckle Potion",
      "desc": "A small, crystal vial of a clear, viscous liquid that smells strongly of honeysuckle.",
      "value": 4,
      "rarity": 1,
      "weight": null,
      "category": "Potion",
      "properties": "Drinking this potion will heal a character 1d4 - 1 health.",
      "requirements": null
    },
    {
      "name": "Hope Chest",
      "desc": "A delicately carved hope chest of polished cherry wood. The box contains nothing but a remarkably fine, gray sand drawn from some unknown locale. Beneath the new moon, this sand glows a faint blue.",
      "value": 10,
      "rarity": 1,
      "weight": 30,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Inhalation Herbs & Essences",
      "desc": "Inhalation herbs & essences provide natural healing remedies for all manner of symptoms such as headaches, colds and flu.",
      "value": 0.2,
      "rarity": 1,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ink",
      "desc": "A vial of black ink, for use with a quill.",
      "value": 0.6,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": "When unstoppered underwater, this item causes an inky cloud to fill a 10\u2032 cubic area which lasts for the duration of the room. It effectively renders all characters and monsters in the area obscured from ranged attacks.",
      "requirements": null
    },
    {
      "name": "Iron Buckle",
      "desc": "An iron belt buckle that's beginning to rust.",
      "value": 0.03,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Iron Earring",
      "desc": "An iron earring. Missing it's twin.",
      "value": 0.1,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Iron Nail",
      "desc": "A large iron nail, useful for fixing things together.",
      "value": 0.03,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Iron Spike",
      "desc": "A large iron spike, useful for fixing heavy items together.",
      "value": 0.35,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Iron Torc",
      "desc": "An iron torc with six small silver figurines: A hare, a horse, a spear, a wolf\u2019s head, a simple circle, and an oak tree.",
      "value": 9,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ivory Peg Leg",
      "desc": "Whale ivory leg prosthetic",
      "value": 5,
      "rarity": 1,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jar o' Eyeballs",
      "desc": "A jar containing six eyeballs (2 human, 1 goblin, 1 ogre, 1 worg, and 1 hawk) in a clear liquid.",
      "value": 2,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jerked Meats",
      "desc": "\u00bd of jerked meat",
      "value": 0.1,
      "rarity": 1,
      "weight": 0.5,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Keg o' Nails",
      "desc": "A 35 lb keg of iron nails",
      "value": 2,
      "rarity": 1,
      "weight": 35,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Knee Breeches",
      "desc": "A pair of bear fur knee breeches, slightly worn from having been used when horse riding.",
      "value": 1,
      "rarity": 1,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Lantern",
      "desc": "",
      "value": null,
      "rarity": 1,
      "weight": 1,
      "category": "Adventuring Gear",
      "properties": "A Lantern provides bright light within a radius of 10 squares.  The light lasts 8 hours per pint of oil.",
      "requirements": null
    },
    {
      "name": "Lapis Lazuli Gem",
      "desc": "A gem of lapis lazuli, dark blue in colour with light yellow flecks.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Large Pile of Coal",
      "desc": "A large pile of coal. Two small, rough diamonds are hidden near the bottom. (20gp, 25 gp)",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Lead Coins",
      "desc": "Satchel of gold painted lead coins.",
      "value": 0.1,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Leather Quiver",
      "desc": "",
      "value": null,
      "rarity": 1,
      "weight": 4,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Leather Satchel",
      "desc": "",
      "value": null,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Little Riding Hood",
      "desc": "A bright red hooded cape sized for a child, spattered with dried blood.",
      "value": 1,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Lynx Eye Gem",
      "desc": "Lynx eye is a specific type of labradorite (a feldspar gemstone). Labradorite as a class of stones is pale to dark gray and has patches of colored reflections. This \"flash\" is most commonly blue but can be of all shades. \"Green Flash\" labradorite is called lynx eye in the Realms.\t",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Lynx Eye Gem",
      "desc": "Lynx eye is a special type of labradorite. It is pale to dark grey and has patches of coloured reflections. This \"flash\" is most commonly blue but can be of all shades. \"Green Flash\" labradorite is called Lynx Eye in the local regions.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Magical Ring of Engagement",
      "desc": "Someone used this to get married",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Ring",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Magnifying Glass",
      "desc": "",
      "value": 2,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Malachite Gem",
      "desc": "A large malachite gem. It is striated light and dark green across its polished surface.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Man Mask",
      "desc": "A mask carved to look like the face of a man, but which has been fitted for something wholly other.",
      "value": 1,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Mechanical Mice",
      "desc": "Mechanical mice which run through the walls of an ancient keep. They have done so for longer than written record can attest. They seem to be a benign presence \u2013 lacking even the slightest pestilent qualities of their flesh-and-blood counterparts \u2013 and have become an accepted presence here. Who their creator was, how they are fueled, and what purpose they serve (if any) are mysteries which may never be solved.",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Moss Agate Gem",
      "desc": "A beautiful moss agate gem. It is a translucent pink with a mossy gray texture.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Net",
      "desc": "An unused fishing net made out of spun mammoth hairs.",
      "value": 0.5,
      "rarity": 1,
      "weight": 3,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Obsidian Gem",
      "desc": "A small opaque black gem.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Oil",
      "desc": "A flask of oil suitable for use in a lantern. ",
      "value": 0.5,
      "rarity": 1,
      "weight": 1,
      "category": "Adventuring Gear",
      "properties": "Enough to last for 48 hours. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn.",
      "requirements": null
    },
    {
      "name": "Old Hat",
      "desc": "A ragged old hat with a moth eaten brim.",
      "value": 0.03,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Old Pouch",
      "desc": "An old pouch. Works as any pouch might, but it has a hole in it.",
      "value": 0.15,
      "rarity": 1,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": "Every day, player loses 1d4 of any small object stored in the pouch.",
      "requirements": null
    },
    {
      "name": "Old Round Shield",
      "desc": "Father\u2019s old round shield, beneath the boss is the sigil of ______, valiant conduct by the bearer may draw the eye of the God.",
      "value": 1,
      "rarity": 1,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Old Saddlebag",
      "desc": "A rotten saddlebag with a few coins spilling out. The copper coins have some verdigris and the silver coins are badly tarnished.",
      "value": 2,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Old Wheelbarrow",
      "desc": "A rotting wheelbarrow holding 167 torches.",
      "value": 1.6,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Parchment",
      "desc": "A spare bit of parchment.",
      "value": 0.35,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pick Axe",
      "desc": "A straight wooden handle with a curved iron pick useful for breaking up rocky surfaces or hard earth. It would not make for an effecitve weapon, but without the head the handle would make for a rudimentary club.",
      "value": 2,
      "rarity": 1,
      "weight": 10,
      "category": "Treasure",
      "properties": "1d4 Bludgeoning - Simple - Light",
      "requirements": null
    },
    {
      "name": "Playing Cards",
      "desc": "A classic 52 card set of playing cards.",
      "value": 0.5,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Potpourri",
      "desc": "A fragrant bowl of potpourri.",
      "value": 0.05,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Rhodochrosite Gem",
      "desc": "This rhodochrosite gem is a light pink colour and shaped to resemble a small heart.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "River Stone",
      "desc": "A stone that has been worn down to a smooth finish. Probably from a river bed.",
      "value": 0,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Rope",
      "desc": "100\u2019 of rope",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Saw",
      "desc": "",
      "value": 0.3,
      "rarity": 1,
      "weight": 4,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Scroll Case",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silk Handkerchief",
      "desc": "This silk handkerchief is embroidered with a pale pink pattern.",
      "value": 25,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silver Ewer",
      "desc": "A large jug with a wide mouth coated in silver.",
      "value": 25,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Small Mirror",
      "desc": "A slightly dirty mirror set in a painted wooden frame.",
      "value": 25,
      "rarity": 1,
      "weight": 4,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Soap",
      "desc": "Some fresh, waxy soap. It smells faintly of lavender.",
      "value": 0.15,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Spork of Positive Reinforcement",
      "desc": "that says encouraging things like \"Everything's GREAT!\" and \"Your body temperature is squarely within normal human range!\"",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Steel Chain",
      "desc": "A steel chain measuring 1 foot long.",
      "value": 0.75,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Steel Lockbox",
      "desc": "",
      "value": 10,
      "rarity": 1,
      "weight": 10,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Threatening Probe",
      "desc": "Has no function, but glows and vibrates in a way that suggests it could be used for distributing extreme pain. ",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tiger Eye Gem",
      "desc": "Translucent brown with a bright golden center.",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tin Cup",
      "desc": "A tin drinking cup.",
      "value": 0.1,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tinderbox",
      "desc": "A full tinderbox.",
      "value": 0.15,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tobacco",
      "desc": "A small amount of tobacco wrapped in a large soft leaf.",
      "value": 0.15,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Torch",
      "desc": "A short stick with oil-soaked cloth wrapped around one end so it can burn as a torch.",
      "value": 0.2,
      "rarity": 1,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Turquoise Gem",
      "desc": "Turquoise is an opaque aqua stone with darker mottling, and is found in the more arid reaches of the Realms. Horsemen will often place a sliver of this stone in a horse's harness as a sign of good luck.\t",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Unreadable Note",
      "desc": "A paper note that's been left on a damp floor. It's completely illegible.",
      "value": 0,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Used Whetstone",
      "desc": "An old whetstone and a half-used vial of oil. The stone itself is ever-so-slightly worn into a curve from years of use, but it will be decades before it's wear renders it useless.",
      "value": 0.15,
      "rarity": 1,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Vanishing Ring",
      "desc": "",
      "value": 0,
      "rarity": 1,
      "weight": null,
      "category": "Ring",
      "properties": "After half a day of wearing this ring, it disappears completely and is not found again.",
      "requirements": null
    },
    {
      "name": "Walking Stick",
      "desc": "A wooden walking stick.",
      "value": 0.15,
      "rarity": 1,
      "weight": 0.5,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Wasplight Lantern",
      "desc": "A dozen glow wasps in a round wire cage with handle. Equal to a torch light at night. Require food and water daily.",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Waterskin",
      "desc": "A waterskin made from a sheep's bladder.",
      "value": 0.2,
      "rarity": 1,
      "weight": 1,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Weighted Die (6 Sided)",
      "desc": "A weighted dice.",
      "value": 0.5,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Whistle",
      "desc": "A small wooden whistle.",
      "value": 0.5,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Wolf Pelt",
      "desc": "A grey and white wolf pelt.",
      "value": 0.5,
      "rarity": 1,
      "weight": 3,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Wooden Board",
      "desc": "A weather worn wooden board, inscribed with patterns which make it clear that it was once used for a game whose rules have long since been lost to time.",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Wooden Spike",
      "desc": "A long wooden spike, used to fix soft items together or kill vampires while they sleep.",
      "value": 0.15,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Wormrose Incense",
      "desc": "",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Wormscrape",
      "desc": "A narcotic made from the petal of a wormrose flower.",
      "value": 5,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Raisins",
      "desc": "\u00bd tin of raisins.",
      "value": 0.1,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Club",
      "desc": "A crude club made to clobber animals and people alike, carved roughly from a thick cedar branch.",
      "value": 0.1,
      "rarity": 1,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d4 Bludgeoning - Simple - Light",
      "requirements": null
    },
    {
      "name": "Quarterstaff",
      "desc": "A length of stoud wood ranging six to nine feet in length and shod with metal at both ends.",
      "value": 0.2,
      "rarity": 1,
      "weight": 4,
      "category": "Weapon",
      "properties": "1d6 Bludgeoning - Simple - Versatile (1d8)",
      "requirements": null
    },
    {
      "name": "Sickle",
      "desc": "A farming tool that can be used as a weapon if needed. It has a long curved blade attached to a short wooden handle.",
      "value": 1,
      "rarity": 1,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d4 Slashing - Simple - Light",
      "requirements": null
    },
    {
      "name": "Thunderstone Amulet",
      "desc": "A small chain with flint stone in the shape of a triangle hanging from it. Popular tradition states that this is a \"Thunderstone\", a rock that has fallen from the sky during a storm. The fact that is resembles a primitive axe head, however, may fall upon deaf ears. ",
      "value": 0.2,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Soup Ladel",
      "desc": "A kitchen implement often used for serving delicious soups. It was carved from the wood of a sturdy tree, so it actually packs quite the wallop.",
      "value": 0.2,
      "rarity": 1,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Bludgeoning - Light",
      "requirements": null
    },
    {
      "name": "Farming Hoe",
      "desc": "A farming tool primarily used for tilling fields. Its fine craftsmanship is sturdy enough to withstand backbreaking fieldwork, but its battle applications are untested.",
      "value": 0.2,
      "rarity": 1,
      "weight": 4,
      "category": "Weapon",
      "properties": "1d4 Bludgeoning - Two-Handed",
      "requirements": null
    },
    {
      "name": "Boat Oar",
      "desc": "Made for paddling boats, but it was made sturdy enough to fight strong currents. Maybe it's useful for self-defense in a pinch.\n",
      "value": 0.2,
      "rarity": 1,
      "weight": 6,
      "category": "Weapon",
      "properties": "1d4 Bludgeoning - Two-Handed",
      "requirements": null
    },
    {
      "name": "Wooden Mop",
      "desc": "Just a mop to the untrained eye, it excels at tidying up the place. But it owes its sturdy construction to a true craftsman, so it actually has some combat merit.",
      "value": 0.2,
      "rarity": 1,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d4 Bludgeoning - Two-Handed",
      "requirements": null
    },
    {
      "name": "Farming Pitchfork",
      "desc": "A farming tool used to collect hay efficiently. It's light enough to be used by anyone. The four prongs are very sharp.",
      "value": 0.2,
      "rarity": 1,
      "weight": 6,
      "category": "Weapon",
      "properties": "1d4 Piercing - Two-Handed",
      "requirements": null
    },
    {
      "name": "Fishing Harpoon",
      "desc": "A fisherman's tool that excels at catching large fish. Its particularly sharp spearhead makes it valuable as a weapon as well.",
      "value": 0.4,
      "rarity": 1,
      "weight": 4,
      "category": "Weapon",
      "properties": "1d6 Piercing - Versatile (1d8) - Thrown (Range: 20/60)",
      "requirements": null
    },
    {
      "name": "Silver Chalice",
      "desc": "A finely made silver chalice etched in arcane symbols. An arcane check will find no trace of magic, however, and it may be that these are simply aesthetic.",
      "value": 7,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silver-tipped Quill",
      "desc": "A silver-tipped quill with an elaborate white feather.",
      "value": 7,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Smuggler's Dagger",
      "desc": "A broad dagger with a hilt that can be unscrewed. The space revealed is sufficient to hold up to 25 coins, and currently holds 10 gold coins and 15 silver coins.",
      "value": 15,
      "rarity": 1,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse, Light - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Marbles",
      "desc": "",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Trap",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dead Rat",
      "desc": "An old dead rat. It has begun to decay, and eminates an unpleasant smell.",
      "value": 0,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hourglass",
      "desc": "",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Garotte Wire",
      "desc": "The Garrote Wire can only be used on a medium or small creature while the user has advantage on the attack roll. On hit, the target takes 1d4 slashing damage and is grappled. Until the grapple ends, the target cannot breath and begins to choke, and the user has advantage on attack rolls against it.",
      "value": 2,
      "rarity": 1,
      "weight": null,
      "category": "Weapon",
      "properties": "1d4 Slashing - Finesse - Light - Two-Handed",
      "requirements": null
    },
    {
      "name": "Two-Sided Die",
      "desc": "This perculiar dice is made out of copper and has two sides. Engraved on one side is the portrait of a long forgotten ruler, on the other is an ornate two headed chimera. Useful for making decisions. Doesn't roll well.",
      "value": 1,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Mudbrick Chocolate",
      "desc": "Well, it's brown, but that doesn't necessarily make it chocolate. Still, at least its sweet. In an unusual and repugnant way.",
      "value": 1,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "\"Eau D'Ogre\" Perfume",
      "desc": "Someone has managed to cram all the stench of an Ogre into one reeking bottle. Why? The world may never know. No human should ever willingly apply this to their body or attire.        ",
      "value": 0.5,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pie Bombs",
      "desc": "Three jet black spheres, about the size of an apple, that smell distinctly of cooked pastry. ",
      "value": 20,
      "rarity": 2,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": "If thrown (or dropped) with force, each sphere will magically transform into a large pie. The subsequent effect is similar to having thrown a pie at someone, only a lot more unexpected.",
      "requirements": null
    },
    {
      "name": "Bale of Furs",
      "desc": "A large bale of rare furs.",
      "value": 40,
      "rarity": 2,
      "weight": 20,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dehydrated Homunculi",
      "desc": "A dried out and preserved homunculus. This one is a winged humanoid creature, similar to a small gargoyles or tiny demon. It's eye have been replaced with beads and it is stiff and unmoving.",
      "value": 20,
      "rarity": 2,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Draining Dagger",
      "desc": "A simple silver dagger with a blood line that runs down the center of the blade to drain its victim\u2019s blood.",
      "value": 5,
      "rarity": 2,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse, Light - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Malachite Bracelet",
      "desc": "A thin malachite bracelet with a silver clasp.",
      "value": 6,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bookstand",
      "desc": "A 5 ft. tall book stand in maple-wood, the front of which is carved into the likeness of three intertwined foxes. ",
      "value": 6,
      "rarity": 2,
      "weight": 30,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bountiful Spade",
      "desc": "",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "1d4 Bludgeoning - Simple",
      "requirements": null
    },
    {
      "name": "Dire Barnacle",
      "desc": "Three vicious little mollusks (1hp, Armour 1) that explode in a 2m blast (d8) when killed. ",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Firestone Gem",
      "desc": "This gem normally looks like quartz, but if allowed to absorb heat will change in color to resemble a bright orange garnet. When smashed against something, it is drained of color and will light that thing on fire",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Mysterious Ivory Figurine",
      "desc": "An age-worn ivory figurine, which, nonetheless, bears an uncanny resemblance to a young woman the characters have just met.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Nymph Statuette",
      "desc": "A foot-high bronze statuette of a pair of entwined nymphs, dancing.",
      "value": 8,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Old Boot",
      "desc": "An old boot filled with chunks/flakes of silver-bearing quartz ore.",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ornate Axe Head",
      "desc": "An unhafted axe head of exceptional craftsmanship. It\u2019s faces are inlaid with a faience scene showing a crowd of human villagers throwing a Halfling down a well.",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": "1d6 Slashing - Simple - Light, Thrown - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Ornate Smoking Pipe",
      "desc": "An ivory and copper smoking pipe with stale tobacco inside.",
      "value": 4,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ornate Wooden Leg",
      "desc": "A wooden leg, carved to appear as a standing leopard with green agate eyes. (Agates: 4gp each; the whole leg, with eyes: 10gp)",
      "value": 10,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Phoenix Egg",
      "desc": "\"Phoenix Egg\" from a peddler in the City of Brass. After consulting with a few scholars, he later found that (at least in my world lore) Phoenixes are born of primal energy and not hatched, and that he had in fact purchased a very large jar of Alchemist's Fire.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Piglet",
      "desc": "A piglet.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Poison Dagger",
      "desc": "Refillable curved poison dagger",
      "value": null,
      "rarity": 2,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse, Light - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Poisoned Throwing Needles",
      "desc": "Pouch of poisoned throwing needles (see dagger damage & dart range)",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse, Light - Range: 20/60",
      "requirements": null
    },
    {
      "name": "\"The Art of Potionmaking\" by Zygmunt Brigge",
      "desc": "A large, leather-bound tome has a large illustrated potion vial stitched into the front cover. Above the illustration, written in Dwarven is the title; \"The Art of Potionmaking\". Further examination reveals this to be a comprehensive guide to potionmaking written by a Dwarf called Zygmunt Brigge.",
      "value": 20,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Dwarven"
    },
    {
      "name": "Agni Mani Necklace",
      "desc": "A necklace patterened with Agni Mani. These ornamental stones were usually found in desert regions. In the Realms, the name applies specifically only to black tektite material. ",
      "value": 20,
      "rarity": 2,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Among the Kobolds",
      "desc": "A detailed account of an adventurer who lived in an Kobold tribe for a number of years. You get a sense that there may have been some embellishment at some points, but it is otherwise an interesting examination of their general nature.",
      "value": 10,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Ancient Tome",
      "desc": "A tome whose pages have been yellowed with age and used to press metallic leaves of gold, silver, platinum, brass, copper, and bronze.",
      "value": 20,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Aquamarine Necklace",
      "desc": "A thick copper necklace set with a small aquamarine. ",
      "value": 7,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bedroll",
      "desc": "A sheepskin bedroll.",
      "value": 1,
      "rarity": 2,
      "weight": 7,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bloodstone",
      "desc": "This dark red-brown heliotrope can sometimes be mistaken for a Stone of Invisibility but this one bears no overt magical powers.",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bonesaw",
      "desc": "The bonesaw was used to amputate body parts after the skin had already been cut through with the amputation knife.",
      "value": 15,
      "rarity": 2,
      "weight": 8,
      "category": "Weapon",
      "properties": "1d8 Slashing | Finesse",
      "requirements": null
    },
    {
      "name": "Brandistock",
      "desc": "This peculiar spear-like weapon is popular among travelers and law enforcement. The brandistock's three-pronged head is retractable, which renders it indistinguishable from a quarterstaff (unless closely inspected). Extending the blades is instantaneous, but pulling them back requires you to spend an action.\n",
      "value": 10,
      "rarity": 2,
      "weight": 4,
      "category": "Weapon",
      "properties": "1d8 Piercing, Special, Two-Handed",
      "requirements": null
    },
    {
      "name": "Brass Chamber Pot",
      "desc": "A brass chamber pot in which has been hidden 3 pieces of rosy quartz.",
      "value": 12,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Brass Knuckles",
      "desc": "A set of brass knuckles. Used, but in good condition.",
      "value": 0.5,
      "rarity": 2,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Bludgeoning, Light, Hidden",
      "requirements": null
    },
    {
      "name": "Bronze Tower Shield",
      "desc": "A tower shield of bronze, cast into the likeness of a chimera\u2019s heads and enameled to provide the appropriate colors. +3 AC, Strength 17, Stealth Disadvantage.",
      "value": 85,
      "rarity": 2,
      "weight": 18,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Carnelian Gemstone",
      "desc": "This is an opaque orange gemstone set in a small brooch.",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Carthus Tome of Pyromancy",
      "desc": "An old pyromancy tome from Carthus containing pyromancies crafted for battle. It gives the impression it might have fallen through from a different plane of existence.",
      "value": 25,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Carved Wooden Mantle",
      "desc": "A carved wooden mantle, meant to be mounted above a fireplace, crafted of ash-wood and stained a medium brown. The left side is carved in images of demons and flames, the right in images of angels and air. The top is carved into an idyllic forest theme and has a moon above the left corner and a sun above the right.",
      "value": 65,
      "rarity": 2,
      "weight": 100,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Cat Pendant",
      "desc": "An electrum pendant shaped like a curled-up cat.",
      "value": 6,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Cestus",
      "desc": "A reinforced gauntlet which protects the knuckles and transforms mere punches into lethal blows. This weapon cannot be disarmed. It takes an action to don or doff a cestus.\n",
      "value": 0.5,
      "rarity": 2,
      "weight": 0.5,
      "category": "Weapon",
      "properties": "1d4 Bludgeoning - Light, Special, Hidden",
      "requirements": null
    },
    {
      "name": "Chalcedony Gemstone",
      "desc": "This pale white gemstone has a waxy luster and is slightly translucent. \n\n",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Chicken Eggs",
      "desc": "A dozen chicken eggs; hollowed out and filled with white flour.",
      "value": 0.6,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Child's Mittens and Hat",
      "desc": "Rabbit-fur mittens and hat sized for a child.",
      "value": 1,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Chrysoprase Gemstone",
      "desc": "An apple-green gemstone consisting of a variety of chalcedony that contains nickel.",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Citrine Gemstone",
      "desc": "This golden gem has been expertly worked into an oval but has long since fallen out of whatever ring or brooch it was carved for.",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Classy Shirt",
      "desc": "A leather bag containing an embroidered black silk shirt with eight silver buttons.",
      "value": 8,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Climbing Harness",
      "desc": "A leather vest with climbing gear: 12 iron pitons, a hammer, 50\u2019 of silk rope, a grappling hook, a set of bronze crampons, thick leather gloves, and a leather harness seat..",
      "value": 32,
      "rarity": 2,
      "weight": 10,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Cloak of Griffon Feathers",
      "desc": "A cloak of griffon feathers set on black velvet.",
      "value": 60,
      "rarity": 2,
      "weight": 5,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Cloth Doll",
      "desc": "A child\u2019s cloth doll with a small silver brooch pinned to it in the shape of a butterfly.",
      "value": 4,
      "rarity": 2,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Clothier's Dye",
      "desc": "A small cask of yellow clothiers\u2019 dye.",
      "value": 8,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Cockatrice Statue",
      "desc": "A life-sized copper and silver statuette of a cockatrice.",
      "value": 17,
      "rarity": 2,
      "weight": 10,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Colloquial Black Speech for Orcs, Trolls and Men",
      "desc": "This book appears to be a phrasebook for those looking to learn the basics of the Orcish language. It has an entire section of swear words, which is most amusing. The book seems to have an effect on anyone using the phrase book to speak in Black Speech. They become prone to shouting louder and louder the less they are understood. Nobody knows why this is; the book is not magical in the slightest.",
      "value": 10,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": "Enables the reader to speak basic Orcish phrases.",
      "requirements": "Language: Common"
    },
    {
      "name": "Copper Bars",
      "desc": "Four bars of copper.",
      "value": 8,
      "rarity": 2,
      "weight": 4,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Copper Necklace",
      "desc": "A copper necklace set with a small amulet shaped into a symbol representing the sun.",
      "value": 2,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Copper Tongue Scraper",
      "desc": "A copper tongue scraper",
      "value": 4,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Cow",
      "desc": "A cow. It's a real hoofer.",
      "value": 10,
      "rarity": 2,
      "weight": 1500,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Crystal Vase",
      "desc": "A large crystal vase, silver trimmed, with a dozen dead roses and some stagnant water within.",
      "value": 15,
      "rarity": 2,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dart",
      "desc": "1d20 normal bone darts. They resemble fletched knitting needles, about 1 foot in length. Not used often by themselves, but rather as ammunition in a blowgun. Can be dipped in poison and used as an effective delivery device.",
      "value": 0.8,
      "rarity": 2,
      "weight": 0.25,
      "category": "Weapon",
      "properties": "Finesse, Undersized, Thrown (30/60)",
      "requirements": null
    },
    {
      "name": "Dead Warrior",
      "desc": "The skeletal remains of a long-dead warrior, wearing a suit of plate armor which still glistens as if it had been polished yesterday. The name of every warrior to ever don the armor has been inscribed upon the front and back of the chest plate, covering nearly every inch of its surface with precisely written, black runes. A careful inspection of the armor will reveal that there remains room for one last name.",
      "value": null,
      "rarity": 2,
      "weight": 80,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Door Rubble",
      "desc": "The remnants of a massive door of stone which has been smashed into rubble. A magic mouth which had once adorned the door remains intact. As the PCs draw near it will issue its warning: \u201cDisturb not this chamber, lest the world suffer.\u201d Whatever the mouth was set to guard is gone \u2013 the chamber beyond the broken door is empty.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Double Spear",
      "desc": "The double spear is a polearm comprising of a wooden haft with a short thrusting blade at either end. It can be used in one or two hands like a spear, but in the hands of a master both heads can be used effectively. If you use the Double Weapon Master feat to make an additional attack with a double spear, it deals 1d6 piercing damage.\n",
      "value": 5,
      "rarity": 2,
      "weight": 5,
      "category": "Weapon",
      "properties": "1d6 Piercing - Thrown (20/60), Versatile (1d8)",
      "requirements": null
    },
    {
      "name": "Dragon Banner",
      "desc": "A battle pennant, triangular in shape, of a black dragon on red silk. The staff is a silver-tipped lance. (Pennant: 30gp, Lance: 25gp)",
      "value": 55,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dragon Head Shield",
      "desc": "A large copper shield, embossed with a copper dragon\u2019s head. \u201cElvalynte\u201d is inscribed on the interior in a flowing script. (34gp)",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Drow Medallion",
      "desc": "An electrum drow house-medallion bearing the image of a crimson scorpion with the house name inscribed on the back in the drow tongue (House Ulrather).",
      "value": 20,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dwarven Compass",
      "desc": "A finely crafted compass of gold and silver, decorated and labelled with ornate, dwarven and draconic runes. Once every 1d4 hours it randomly changes the cardinal direction to which its arrow points.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dwarven Holy Symbol",
      "desc": "A dwarven holy symbol in silver; shaped into a flaming war-hammer set against an anvil-shaped backdrop. ",
      "value": 55,
      "rarity": 2,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Echo Crystal",
      "desc": "A prismatic crystal which echoes back \u2013 in a deep, melodious voice \u2013 every word which is said around it two seconds after it has been said.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Electrum Rose",
      "desc": "A detailed rose, with petals and thorns, constructed of silver and electrum.",
      "value": 40,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Electrum Sheet",
      "desc": "A large (18\u201dx28\u201d), rectangular electrum sheet with ancient writing on it. The writing, if deciphered, is a brief history of a powerful magical item known as the House of Winds, with several clues as to where the item may have been lost fourteen hundred years ago. The House of Winds is described as an ornate mithril helm of legendary power.",
      "value": 75,
      "rarity": 2,
      "weight": 115,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Elephant Tusks",
      "desc": "A collection of six elephant tusks.",
      "value": 64,
      "rarity": 2,
      "weight": 14,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fairy Wing Cage",
      "desc": "A small wooden case holding four pairs of fairy wings.",
      "value": 20,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Field Tent",
      "desc": "A large, ornate field tent such as a lord would have, room for 12 persons",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fire Agate Gem",
      "desc": "Fire Agate is the name given to chalcedony which contains thin lines of iridescent goethite. When properly cut, the iridescence displays red, brown, gold, and green hues, and the finest specimens are partly translucent.\t",
      "value": 30,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Flask Bandolier",
      "desc": "A bandolier holding 8 silver flasks (empty (x3), brandy (x2), acid (x1), ogre blood (x1), gold dust (x1, value of gold: 12gp). (Flasks: 3gp each, bandolier: 5gp, ogre blood (to alchemist): 12gp, acid: 10gp, brandy: ",
      "value": 12,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Flask Belt",
      "desc": "Utility belt of flasks",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fluted Short Spear",
      "desc": "A ceremonial short spear; ash wood with an iron point. Seven red and three blue dyed vulture feathers are attached to the head of the spear. The iron is fluted to whistle through the air, if thrown.",
      "value": 3,
      "rarity": 2,
      "weight": 4,
      "category": "Weapon",
      "properties": "1d6 Piercing - Simple - Thrown, Versatile (1d8) - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Foul Ivory Statue",
      "desc": "A life sized ivory carving of a chicken.",
      "value": 20,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Frost Giant's Necklace",
      "desc": "A frost giant necklace of silver upon which are pierced 17 human-sized hands. All of them appear to be the right hand of their former owner.",
      "value": 55,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Frying Pan",
      "desc": "A heavy cast iron frying pan. This can be used for frying, searing, browning and whacking people over the head! It has the remnants of this morning's breakfast smeared around it's rim. Damage is doubled when wielder has proficiency with cooking.",
      "value": 0.1,
      "rarity": 2,
      "weight": 4,
      "category": "Weapon",
      "properties": "1d6 Bludgeoning - Versatile ",
      "requirements": null
    },
    {
      "name": "Fur Basket",
      "desc": "A wicker basket with a pair of mink furs within.",
      "value": 20,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Glass Window",
      "desc": "A small colored-glass window pane depicting the crowning of the first king.",
      "value": 10,
      "rarity": 2,
      "weight": 5,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Glowing Crystal",
      "desc": "A miniature crystal \u2013 small enough to lie upon the outstretched finger of a halfling child \u2013 glows softly, and pulses whenever an object colored red is brought near.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Golden Horn",
      "desc": "An eight inch golden horn, likely more of a ceremonial object than of any real value as an instrument.",
      "value": 70,
      "rarity": 2,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Golden Orb",
      "desc": "A roughly beaten golden orb, roughly 10 inches in diameter. The orb is etched with the likeness of an orcish skull with an axe embedded in it. This was used by an orcish chieftain as his \u201croyal orb\u201d.",
      "value": 72,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Golden Signet Ring",
      "desc": "A golden signet ring, origin unknown.",
      "value": 60,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Grandfather's Broadsword",
      "desc": "A grandfather\u2019s broadsword, plain but quality. An unknown script runs along the inner side of the scabbard.",
      "value": 20,
      "rarity": 2,
      "weight": 3,
      "category": "Weapon",
      "properties": "2d4 Piercing",
      "requirements": null
    },
    {
      "name": "Great Spear",
      "desc": "This mighty spear is favoured by centaurs.",
      "value": 75,
      "rarity": 2,
      "weight": 8,
      "category": "Weapon",
      "properties": "1d8 Piercing - Oversized (1d10), Thrown (20/60), Two-Handed",
      "requirements": null
    },
    {
      "name": "Dwarven Hand Axe",
      "desc": "A simple hand axe and belt sheath. The axehead is inlaid with dwarvish runes which reference the high quality of items made by Tomu Aethmalk, the blacksmith who crafted the axe.",
      "value": 5,
      "rarity": 2,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d6 Slashing - Simple - Light, Thrown - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Hand Harp",
      "desc": "Silver hand sized harp",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Harpy Feather Fan",
      "desc": "A hand-fan of clipped, black-dyed harpy feathers bound with copper wiring.",
      "value": 15,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hell Scented Potpourri",
      "desc": "Potpourri with demon blood \u2013 invigorating & entrancing",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hemp Rope",
      "desc": "Seven lengths of extremely thick, 30\u2019 long, hemp rope, such as that used for catapults.",
      "value": 35,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hidden Blade Bracer",
      "desc": "Concealed punching dagger-bracer",
      "value": 200,
      "rarity": 2,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse, Light - Range: 20/60 \nWhen you attack and hit a creature that is surprised with this dagger, it must make a Constitution saving throw DC 18. On a failed save, the target takes an extra 2d4 damage from your attack.",
      "requirements": null
    },
    {
      "name": "Hidden Daggers",
      "desc": "A dozen quality daggers in a rolled up rug.",
      "value": 24,
      "rarity": 2,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse, Light - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Holy Sword of Pentorus",
      "desc": "A broken holy sword, inscribed with the name of a legendary Paladin.",
      "value": 20,
      "rarity": 2,
      "weight": 3,
      "category": "Weapon",
      "properties": "1d8 Slashing - Versatile (1d10)",
      "requirements": "Martial Weapon Expertise"
    },
    {
      "name": "Holy Symbol",
      "desc": "The holy symbol of a god long thought dead and gone.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Holy Water",
      "desc": "Three vials of holy water.",
      "value": 25,
      "rarity": 2,
      "weight": null,
      "category": "Potion",
      "properties": "See PHB page ",
      "requirements": null
    },
    {
      "name": "How to Win Friends and Influence People",
      "desc": "This book peddles a philosophy of personal ascendancy and manipulation by charisma alone. The authors and advocates of such tomes claim that, by drawing on the most recent theories in sociology and interpersonal psychology, it is possible to raise an individual's charisma by a single point. They're wrong, that can only be done by magic, but what you read is your own.",
      "value": 10,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Iol Gem",
      "desc": "Iol is actually short for Iolite (cordierite), although a common nickname is \"violet stone\" even though its overall hue is usually blue. Iols are usually cut into faceted gems to best display the stone's color change as it is viewed from different directions. Small, cut iols can be clear, but larger specimens usually contain silky inclusions of another substance such as hemitite crystals, which give the same rich golden flash of color as in sunstones. ",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Iron Flask",
      "desc": "An iron flask holding a viscous liquid of intense, emerald-green that smells faintly of citrus fruit. The liquid is a concentrated, magical dye for clothing and the like, equal to four full barrels of normal dye. If consumed, it turns the drinker green for a full month.",
      "value": 65,
      "rarity": 2,
      "weight": null,
      "category": "Potion",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ivory Dress",
      "desc": "A lovely ivory-colored dress of silk with flowing sleeves. The dress has tiny pearls sewn at the neckline.",
      "value": 70,
      "rarity": 2,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ivory Mice",
      "desc": "A small sack containing 32 carved ivory mice",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jade Fountain",
      "desc": "A decorative fountain, crafted elegantly from a single block of jade and decorated with gold leaf, in which the water flows in the wrong direction.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jade Pendant",
      "desc": "A small, white jade pendant without necklace. The pendant depicts a unicorn rampant with a cracked back leg.",
      "value": 10,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jallak's Shield",
      "desc": "A small steel shield, triangular, emblazoned with a griffon device in red on a field of gray. This battered shield is inscribed on the interior with the words: \u201cMay this shield be your protection in battle, Jallak. Honor the Galbrand name.\u201d",
      "value": 7,
      "rarity": 2,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jasper Gem",
      "desc": "Jasper is an opaque quartz found in reds, browns, and blacks. Very rare specimens are blue or have bands of blue against the other colours. Jasper can be crushed and used in making potions and magical devices which protect against poison.\t",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jewel Wood",
      "desc": "A 6\u2019 stack of 1\u201d x 8\u201d x 12\u2019 planks of rare, scented jewel wood",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Kilan Wester's Royal Recipes",
      "desc": "A large tome filled with over one hundred recipes for wild boar, goose, and venison; written by Kilan Wester, a former royal chef (retired).",
      "value": 95,
      "rarity": 2,
      "weight": null,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Knife Vest",
      "desc": "Knife vest \u2013 holds 1d12 knives!",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Large Bronze Bell",
      "desc": "A large (36\u201d diameter) bronze bell.",
      "value": 10,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Leather Bag of Dragon Scales",
      "desc": "A leather bag containing 6 green dragon scales (young adult).",
      "value": 30,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Leviathan Organ",
      "desc": "Pulsating organ of leviathan (is sack/cloth)",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Libatius Borage's Advanced Potion Making",
      "desc": "A large tome which details advanced techniques in the field of potion making. It's dust cover is a little tatty but the pages inside have kept well and it still has plenty of life left in it.",
      "value": 30,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": "Grants advantage to Alchemy checks.",
      "requirements": "Language: Common"
    },
    {
      "name": "Lich Skull",
      "desc": "Fossilized skull of lich-arcane power source",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Malivar's Wardrobe",
      "desc": "A large bronze wardrobe, banded in steel, which contains Violet Fungi (hp 15) and a human body with rotting noble\u2019s clothing, a rusty dagger, and a thin platinum bracelet set with a moonstone. ",
      "value": 75,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Mallius Metallius, A Layman's Guide to Metallurgy",
      "desc": "This tome has been bound in iron plates, giving the sense that it could take a real beating if needed. It's been well kept, however, and inscribed in the front is the title, \"Mallius Metallius\" with the subtitle, \"A Layman's Guide to Metallurgy\".",
      "value": 30,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Mammoth Sword",
      "desc": "A sword of truly mammoth proportions. Resting within a chamber more than thirty meters long, the sword stretches from one end to the other. Whatever creature was meant to wield this mighty weapon would truly stagger the imagination of a dragon.",
      "value": 0,
      "rarity": 2,
      "weight": 20000,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Manticora Branding Iron",
      "desc": "A mithril-headed branding-iron bearing the sigil of the Manticora Trading House.",
      "value": 100,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Manual of Bodily Health",
      "desc": "A typical manual of bodily health provides the reader with valuable information regarding preventative medicine, basic first aid, and proper muscle toning.",
      "value": 10,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Manual of Gainful Exercise",
      "desc": "A typical Manual of Gainful Exercise provides the reader with a strictly regimented routine of daily stretches and tests designed to increase muscle bulk. ",
      "value": 10,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Manual of Quickness of Action",
      "desc": "A typical manual of quickness of action provides the reader with a wide variety of tips and pointers regarding the motion and coordination of one's hands and feet. This small tome is much in demand by people from many walks of life, including rogues wishing to improve their slight-of-hand and paladins wanting to perfect their thrust and parry. ",
      "value": 10,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Masquerade Mask",
      "desc": "A masquerade mask crafted of leather and peacock feathers.",
      "value": 12,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Masterwork Gaming Darts",
      "desc": "With an elegant hinged case of black onyx, the characters find a set of masterwork gaming darts. Although useless for combat, the darts will give a +2 skill check bonus to anyone using them to play a game of darts (due to their superb balance and construction).",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Matroshka Seeds",
      "desc": "Within a wooden box carved with pastoral scenes lies a leather purse, and within the purse are a handful of seeds. If these seeds are planted, they will take root and grow into plants of unnatural shape, hue, and life unlike anything seen upon this world, and operating by utterly alien principles.",
      "value": 100,
      "rarity": 2,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Medicinal Herbs",
      "desc": "A cabinet containing 24 glass jars of various medicinal herbs",
      "value": 60,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Mineral Oil",
      "desc": "2 oz bottle of mineral oil",
      "value": 4,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Moonstone",
      "desc": "Moonstone is an opaque, white feldspar gem polished to a bluish sheen. Old legends say that the sight of a moonstone would cause a lycanthrope to revert to his animal form. Whether or not this is true is unknown as anyone close enough to find out apparently hasn't lived to tell the tale. However moonstones have been used in spells that effect this particular curse.\t",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Moonstone Sheath",
      "desc": "A dagger sheath of bronze, set with a small moonstone.",
      "value": 10,
      "rarity": 2,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Moradin's Magical Bestiary",
      "desc": "A bestiary!",
      "value": 2,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Dwarven"
    },
    {
      "name": "Onyx Gemstone",
      "desc": "This gemstone has opaque bands of black and white across it's surface.",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Orb Of Venom",
      "desc": "Orb of venom-Applies to all of user attacks. Target takes an additional 1d4 poison damage on their next turn.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Orcish Cookbook",
      "desc": "This appears to be a cookbook written by an unnamed Orc. It has some insightful notes on how best to cook Owlbear and a rather unpleasant section on what spices go well with human flesh.\n",
      "value": 5,
      "rarity": 2,
      "weight": 2,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Orc"
    },
    {
      "name": "Potion of Healing",
      "desc": "A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action. ",
      "value": 50,
      "rarity": 2,
      "weight": 0.5,
      "category": "Potion",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pouch",
      "desc": "A cloth or leather pouch that can hold up to 20 sling bullets or 50 blowgun needles, among other things. ",
      "value": 0.5,
      "rarity": 2,
      "weight": 1,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pouch of Healing Potions",
      "desc": "A large carry pouch made from the skin of a monkey. Inside are 1d6 Potions of Healing. ",
      "value": 50,
      "rarity": 2,
      "weight": 0.5,
      "category": "Potion",
      "properties": "You regain 2d4 + 2 hit points when you drink these potions. The potion's red liquid glimmers when agitated.",
      "requirements": null
    },
    {
      "name": "Sardonyx Gemstone",
      "desc": "Bands of white-yellow sard cross the surface of this dark onyx gemstone.",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Scythe",
      "desc": "This weapon is inspired by the common farming implement used to cut swaths of grown hay, but it has a straight handle and a heavier blade. Despite its humble origins, the scythe is recognized as a symbol of death in many cultures because of its use in reaping.\n",
      "value": 0.5,
      "rarity": 2,
      "weight": 5,
      "category": "Weapon",
      "properties": "2d4 Slashing - Heavy, Two-Handed",
      "requirements": null
    },
    {
      "name": "Seimai's Guide to Healing Tonics",
      "desc": "A relatively small compendium of information about healing tonics.",
      "value": 20,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": "Grants advantage to Medicine checks.",
      "requirements": "Language: Common"
    },
    {
      "name": "Shandon Gem",
      "desc": "Shandon is another name for natrolite; its slender, colorless crystals yield tiny faceted gems used often in veils and robes in order to capture the beading effect of water glistening upon the material.\t",
      "value": 90,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Skydrop Gem",
      "desc": "Skydrop is the common name given to clear or lightly colored tektite material; fragments of glass of celestial (meteoric) origin, found in the vast shifting sands of Anauroch and other deserts.\t",
      "value": 40,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Spade",
      "desc": "A spade is a simple tool designed for digging soil, the head can be made of any material that can hold its shape, but is most frequently made of metal to facilitate cutting into soil.\n",
      "value": 2,
      "rarity": 2,
      "weight": 4,
      "category": "Weapon",
      "properties": "1d4 Bludgeoning - Simple",
      "requirements": null
    },
    {
      "name": "Star Diopside Gem",
      "desc": "Star Diopside is the most prized form of a hard, durable gemstone that is rarely found in attractive colours. It is usually too dark for beauty, however mountain and streambed-pebble crystals of a pale green hue make attractive stones such as diopside. When a gem is found that is darker green it can be cut in such a fashion so to produce four- or six-rayed stars.\t",
      "value": 95,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Star Rose Quartz",
      "desc": "This gemstone is a polished pink sphere. When viewed at a specific angle with a source of light an asterism (star-effect) is visible across it's surface. ",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sunstone Gem",
      "desc": "Sunstone is a feldspar jem, closely related to moonstone, and more properly known as oligoclase. Sunstone can be colorless or faintly greenish and of facet grade, but most common by far is its softer (cabochon) variety. This yields gemstones that have bright red or orange spangles (minute crystals) suspended in a nearly colorless background in a parallel fashion, giving the whole a rich golden or redish brown color.\t",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tchazar Gem",
      "desc": "Tchazar is the common name given to aragonite, a straw-yellow gemstone found in elongated, prism-shaped crystal form. It is soft and fragile, and requires skilled cutting to yield faceted gems..\t",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Recipes and Ruminations of One Dradeel of Tethir",
      "desc": "The Recipes and Ruminations of One Dradeel of Tethir is a book with food recipes from Dradeel. Even a casual look will inform the reader that he was a wizard with an addled mind.",
      "value": 10,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "The Three Rules to Poisoncraft",
      "desc": "This tatty old tome is missing a number of pages, leaving whatever the third rule of Poisoncraft was completely unknown. Hopefully you'll manage with the first two, unlike whomever owned this book before you.",
      "value": 40,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": "Grants advantage to Alchemy checks.",
      "requirements": "Language: Common"
    },
    {
      "name": "Tobacco Cask",
      "desc": "A small cedar cask of dwarven pipe tobacco.",
      "value": 25,
      "rarity": 2,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tome of Clear Thought",
      "desc": "A typical Tome of Clear Thought contains a collection of esoteric and scholarly literature, often involving obscure mathematical or algebraic formulae or the occasional reference to inter-planar biology..",
      "value": 40,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Tome of Understanding",
      "desc": "A typical Tome of Understanding contains a sober, if dry analysis of legal battles, historic events, government policies, philosophical treatises and theories of magic and metaphysics.",
      "value": 10,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": "Grants advantage to History checks.",
      "requirements": "Language: Common"
    },
    {
      "name": "Tourmaline Chain",
      "desc": "A delicate silver chain set with a tourmaline.",
      "value": 28,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Unfinished Zircon Gem",
      "desc": "This gemstone has not yet been finished, but even in its unpolished state it's bright cyan gleam is arresting to the eye.",
      "value": 35,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Unusable Scroll",
      "desc": "A tattered, and sadly unusable, scroll fragment, inscribed with a spell unknown to any living mage.",
      "value": 5,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Usk Brandy",
      "desc": "A five gallon cask of usk brandy.",
      "value": 80,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Vial of Antitoxin",
      "desc": "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs. ",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Waterstar Gem",
      "desc": "Waterstar is also called achroite or colourless tourmaline and is rare in the Realms. This stone is riddled with flaws and inclusions and hence only a small portion is fit for cutting.\t",
      "value": 80,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Wooden Wind Chimes",
      "desc": "A set of wooden wind chimes which plays a different tune depending upon the direction of the wind which disturbs it.",
      "value": 0.5,
      "rarity": 2,
      "weight": 1,
      "category": "Mundane",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ziose Gemstone",
      "desc": "Ziose is the name given by sages to a particular facet-grade variety of ziosite; a rare mineral that yields cut stones that flash three vivid hues depending on how the light catches them; purple, blue, and red, or purple, green, and red. Very large (fist- or foot-sized) gems are found and are prized for use in pendants and brooches.\t",
      "value": 60,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Zircon Gemstone",
      "desc": "Zircon is a brownish crystal found in igneous (volcanic) rocks. Zircon attains its pale blue shade with heating and cutting (usually facet-cut).\t",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ram's Head Mace",
      "desc": "A silver-headed heavy mace, the head of which is shaped into the likeness of a ram\u2019s head.",
      "value": 90,
      "rarity": 2,
      "weight": 6,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Random Monster Taxidermy",
      "desc": "Random monster taxidermy",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Raven Statue",
      "desc": "A life-size basalt statue of a raven.",
      "value": 25,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Replica Castle",
      "desc": "A 3\u2019 square replica of a castle, in wood, complete with ramparts and miniature ballistae and toy soldiers. Scribbled in some spots are notes written in draconic that suggest a plan to assault the castle (\u201cKill guard here first\u201d, \u201cMurder holes overhead\u201d, Fireball this area\u201d, etc\u2026)",
      "value": 65,
      "rarity": 2,
      "weight": 120,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Reversible Robes",
      "desc": "Reversible, finely crafted robes",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sledge Hammer",
      "desc": "This large sledge hammer has been cast entirely out of steel. There is a small symbol of a rat moulded into the hammer head, above Dwarvish lettering that indicates the weight.",
      "value": 2,
      "rarity": 2,
      "weight": 10,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dagger",
      "desc": "A simple steel dagger with an oak handle and matching leather sheath.",
      "value": 2,
      "rarity": 2,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Piercing - Simple - Finesse, Light, Thrown - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Greatclub",
      "desc": "A huge wooden greatclub, made from an old oak branch that has been carved and sanded into the shape of a large nail, with the narrower end wrapped in leather as a crude handle.",
      "value": 0.2,
      "rarity": 2,
      "weight": 10,
      "category": "Weapon",
      "properties": "1d8 Bludgeoning - Simple - Two-Handed",
      "requirements": null
    },
    {
      "name": "Handaxe",
      "desc": "A straight wooden handle with a basic steel axe head on one end. It has been balanced well enough to use as a throwing axe.",
      "value": 5,
      "rarity": 2,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d6 Slashing - Simple - Light, Thrown - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Javelin",
      "desc": "A long thin shaft armed with a leaf-shaped head. It has a tassled based, to allow the javelineer to retrieve it after it has been thrown.",
      "value": 0.5,
      "rarity": 2,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d6 Piercing - Simple - Thrown - Range: 30/120",
      "requirements": null
    },
    {
      "name": "Light Hammer",
      "desc": "A small sledge hammer with a haft made of wood about one and a half feet long.",
      "value": 2,
      "rarity": 2,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d4 Bludgeoning - Simple - Light, Thrown - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Mace",
      "desc": "This mace is essentially just a wooden shaft with a flanged iron head mounted on the end.",
      "value": 5,
      "rarity": 2,
      "weight": 4,
      "category": "Weapon",
      "properties": "1d6 Bludgeoning - Simple",
      "requirements": null
    },
    {
      "name": "Spear",
      "desc": "One of man's earliest weapons, dating back to the most primitive of times. A simple wooden pole with a steel spearhead on the end.",
      "value": 1,
      "rarity": 2,
      "weight": 3,
      "category": "Weapon",
      "properties": "1d6 Piercing - Simple - Thrown, Versatile (1d8) - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Primitive Hand Axe",
      "desc": "A simple handaxe made from a smooth tree branch and a sharp piece of knapped flint. ",
      "value": 0.8,
      "rarity": 2,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d4 Slashing - Simple - Light, Thrown - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Woodcutter's Axe",
      "desc": "A woodcutter's tool of choice for felling trees. Its formidable weight and uneven balancing make it a slow, inefficient weapon.",
      "value": 1,
      "rarity": 2,
      "weight": 7,
      "category": "Weapon",
      "properties": "1d10 Slashing - Simple - Heavy, Two-Handed",
      "requirements": null
    },
    {
      "name": "Acid (Vial)",
      "desc": "A round glass container filled with a clear liquid. It has a paper label indicating in common that it contains acid, and to warning not to accidentally break the glass.",
      "value": 25,
      "rarity": 2,
      "weight": 1,
      "category": "Adventuring Gear",
      "properties": "See PHB page 148.",
      "requirements": null
    },
    {
      "name": "Abacus",
      "desc": "A basic wooden abacus, designed for merchants and treasurers. It comes with a simple latched case to protect the counting beads from damage. ",
      "value": 2,
      "rarity": 2,
      "weight": 2,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Light Crossbow",
      "desc": "An ash crossbow with a wooden shaft. This crossbow has been designed for smaller, foot long bolts, and is a comfortable ranged weapon for any sized creature.",
      "value": 25,
      "rarity": 2,
      "weight": 5,
      "category": "Weapon",
      "properties": "1d8 Piercing - Loading, Two-Handed - Ammunition (Range: 80/320)",
      "requirements": null
    },
    {
      "name": "Dart",
      "desc": "A small, easy to conceal missile weapon. They might not do a lot of damage on their own but when your opponent has three of these embedded in their face before they can get within 10 feet of you they might reconsider the fight.",
      "value": 0.05,
      "rarity": 2,
      "weight": 0.25,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse - Thrown (Range: 20/60)",
      "requirements": null
    },
    {
      "name": "Shortbow",
      "desc": "A small bow used by travelers and adventurers alike for protection. It doesn't do a lot of damage, but it can be used to attack foes from a distance.",
      "value": 25,
      "rarity": 2,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d6 Piercing - Two-Handed, Ammunition (Range: 80/320)",
      "requirements": null
    },
    {
      "name": "Sling",
      "desc": "A basic a leather strap with a pouch for holding the missile. The weapon is held by both ends of the strap and twirled around the wielder's head. Note: Always be careful not to knock yourself out.",
      "value": 0.1,
      "rarity": 2,
      "weight": null,
      "category": "Weapon",
      "properties": "1d4 Bludgeoning - Ammunition (Range: 30/120)",
      "requirements": null
    },
    {
      "name": "The Plaster Sword",
      "desc": "The legendary sword once owned by the Goblin hero \"Stink\", who was also known as the \"Hero of Thyme\" after he slew a greedy Human merchant and stole a wagon of expensive cooking spices. The sword itself appears to be ornate and magical in nature from afar, but when handled it is clear that it is simply a clever replica made out of gypsum and mud that has been painted.",
      "value": 100,
      "rarity": 2,
      "weight": 2,
      "category": "Weapon",
      "properties": "Due to it's storied history, the sword provides a +2 on any charisma based check when dealing with Goblins. If any attempt to use the sword as a weapon is made, it will break and can not be repaired.",
      "requirements": null
    },
    {
      "name": "Boomerang",
      "desc": "This throwing weapon was originally used by forest-dwelling Orcs to hunt game. Its unique shape allows it to return after being thrown.",
      "value": 1,
      "rarity": 2,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Bludgeoning - Thrown (Range: 30/90)\nSpecial: Does not require direct line of sight, due to a curved trajectory. \nIf the attack misses, the weapon returns to the thrower's position and can be caught with a free action.",
      "requirements": null
    },
    {
      "name": "Combat Boomerang",
      "desc": "This combat boomering does not resembe the conventional \"V\" shape of a normal boomerang and instead has more of a \"tick mark\" shape. One end has a smaller wing which is both thicker and carefully reinforced with metal studs. It can be used as both a ranged weapon as expected, but can also be used in close quarters as a club.",
      "value": 2,
      "rarity": 2,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d6 Bludgeoning  - Thrown (Range: 30/90)\nSpecial: Does not require direct line of sight, due to a curved trajectory.",
      "requirements": "Martial Weapon Expertise"
    },
    {
      "name": "Boomerang Sword",
      "desc": "A curved sword favored by lizardmen. It can be used to attack directly or can be thrown like a boomerang.",
      "value": 5,
      "rarity": 2,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d6 Slashing - Thrown (Range: 30/90)\nSpecial: Does not require direct line of sight, due to a curved trajectory.",
      "requirements": "Martial Weapon Expertise"
    },
    {
      "name": "Glaive",
      "desc": "A three bladed disk which can either be used in melee or as a thrown weapon. The circular handle is made from dark wood and has the design of an owl's head in the middle.",
      "value": 25,
      "rarity": 2,
      "weight": 3,
      "category": "Weapon",
      "properties": "1d4 Slashing - Finesse - Light - Thrown (Range: 30/60)\nSpecial: The weapon returns to the thrower's position after an attack and can be caught with a free action.",
      "requirements": "Martial Weapon Expertise"
    },
    {
      "name": "Elven Sword",
      "desc": "The ornamentation that adorns this blade is a traditional elven design. It's forged from a very durable and rust-proof metal.",
      "value": 20,
      "rarity": 2,
      "weight": 3,
      "category": "Weapon",
      "properties": "1d8 Slashing - Versatile (1d10)",
      "requirements": "Martial Weapon Expertise"
    },
    {
      "name": "Priest Skeleton",
      "desc": "A human skeleton in rotted priest\u2019s robes wearing a ring and necklace. (Electrum ring: 4gp Silver necklace: 3gp)",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Prism's Copper Goblin",
      "desc": "A goblin skull that has been dipped in molten copper. (1gp)",
      "value": 1,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ring of the Adventurous Limb",
      "desc": " If worn on a hand, the entire arm will vanish.  It will return after 24 hours have elapsed.  Roll a d10: 1 - tattoo on arm, 2 - arm injured, 3 - gained a ring, probably a wedding ring, 4 - ring missing, 5-10 - nothing special.  It will have a similar effect on legs.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Ring",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Royal Documents",
      "desc": "Collection of documents with traces of royal bloodlines",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silver Hand Mirror",
      "desc": "A silver hand mirror with mother-of-pearl backing.",
      "value": 28,
      "rarity": 2,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fungus Spores",
      "desc": "",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Trap",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Stabby String",
      "desc": "A popular Goblin trap; a 50 ft length of neatly coiled wire that has nails welded onto it at regular intervals. The resulting product can be used either by running it across the floor or by intertwining it along a fence or wall.",
      "value": 20,
      "rarity": 2,
      "weight": 5,
      "category": "Trap",
      "properties": "Stabby String can be left semi-coiled on the floor, at half it's length, to create difficult terrain. Any creature that attempts to pass over the Stabby String is subject to 1d4 piercing damage.",
      "requirements": null
    },
    {
      "name": "Burning Oil",
      "desc": "",
      "value": null,
      "rarity": 2,
      "weight": 1,
      "category": "Trap",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pendulum",
      "desc": "",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "A Dungeon of One's Own ",
      "desc": "A dusty scroll which contains a political essay written by a witch called Virginia Woolfsblood. The essay delves into the systemic oppression of witches and advocates for the magical education and liberation of women in general.",
      "value": 30,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Amethyst",
      "desc": "A common, bright purple gemstone.",
      "value": 50,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bagpipe of Invisibility",
      "desc": "A wind instrument consisting of a reed melody pipe and from one to five drones with air supplied continuously either by a bag with valve-stopped mouth tube or by bellows. The bag itself is patterned in red and blue.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Renders the user invisible whilst the bagpipes are being played.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Blank Contract",
      "desc": "A contract with blank parts. Can be modified into any sort of deal you wish. The first party to break the contract is blasted with a beam from above (d12, ignore armour) and the contract dissolves into shredded parchment. ",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Devil Salts",
      "desc": "Awakens any creature from sleep or unconsciousness, but they flail and scream in terror for a few seconds first. They have no memory of this afterwards. ",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Neverfull Waterskin",
      "desc": "Neverfull Waterskin (It's always half empty.)",
      "value": 200,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Obsidian Dolphin",
      "desc": "An obsidian figurine of a dolphin which is always wet to the touch.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Old Guard's Note",
      "desc": "Within a rotten pouch found upon the body of a long dead soldier is a parchment with an unbroken seal. If the seal is broken and the message read, it warns its would-be recipient to guard against an eminent betrayal.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ornate Abacus",
      "desc": "An abacus with counting beads made of ivory, silver, gold, and vitrified eye balls.",
      "value": 120,
      "rarity": 3,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ornate Rapier",
      "desc": "A rapier in an ornate, electrum-trimmed steel scabbard worked in swirl-patterns. ",
      "value": 65,
      "rarity": 3,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d8 Piercing - Martial - Finesse",
      "requirements": null
    },
    {
      "name": "Porcelain Discs",
      "desc": "One hundred and sixteen 3\u201d white porcelain discs, each has a 1 ounce knob of electrum embedded in its center",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "1d20 Ammunition +1",
      "desc": "You have a bonus to attack and damage rolls made with this piece of magic ammunition. The bonus is determined by the rarity of the ammunition. Once it hit a target, the ammunition is no longer magical. Value listed is for individual units.",
      "value": 25,
      "rarity": 3,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Adamantine Armor",
      "desc": "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit. ",
      "value": 500,
      "rarity": 3,
      "weight": 70,
      "category": "Armor",
      "properties": "Medium, Heavy (Not Hide)",
      "requirements": null
    },
    {
      "name": "Alchemy Jug",
      "desc": "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty. You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named. Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn. ",
      "value": 6000,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Allmagic Scrolls",
      "desc": "These pieces of unweatherd, thick parchment are lined by a thin string of gold woven into the paper. To anyone who cannot read magic, they are always blank and featureless. However, someone who can read magic realizes that these scrolls can contain spell charges\u2014of ANY type of spell, rather than just Arcane. Paladins, Clerics, and Druids, rejoice! Two charges of the spell must be spent to write one to the scroll, and some scrolls might be found with magic already written to them. These scrolls, once written to, can be cast free of charge\u2014but the scroll is consumed in the process. Store those odd utility spells on Allmagic Scrolls, and never waste an unused daily charge again!",
      "value": 150,
      "rarity": 3,
      "weight": null,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Amber Gemstone",
      "desc": "An amber gemstone of watery gold colouring. It has been polished so that you can see a small petrified leaf suspended inside.",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Amethyst Drinking Cup",
      "desc": "An ornate cup fashioned out of a deep purple Amethyst. This material was probably chosen as many believe it to prevent intoxication.",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Amulet of Proof Against Detection and Location",
      "desc": "While wearing this amulet, you are hidden from divination magic. You can't be targeted by such magic or perceived through magical scrying sensors. ",
      "value": 20000,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Ancient Coins",
      "desc": "A cache of ancient coins left from the elder days of the world and made by a civilization utterly alien to the values of today: They are carved from bloodstone, moonstone, and jacinth \u2013 with unknown faces and unreadable runes decorating their surface.",
      "value": 50,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ancient Gold Cube",
      "desc": "Ancient gold cube \u2013 quite encumbering.",
      "value": 200,
      "rarity": 3,
      "weight": 40,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ancient Mummy",
      "desc": "An ancient mummy which was given full burial rites and laid within a stately sarcophagus. Arranged on five pedestals around the sarcophagus are the canopic jars in which the mummy\u2019s vital organs were placed. Although the mummy is not of the undead, opening these jars will reveal that its organs continue to function: The heart beats, the lungs fill with air and empty again, and so forth.",
      "value": 0,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ancient Wand Box",
      "desc": "A collection case holding fifty spent wands \u2013 crafted by the finest craftsman and enchanted by the mightiest wizards of a bygone age, but now reduced to mere wood, bone, and glass.",
      "value": 40,
      "rarity": 3,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Animal Figurines",
      "desc": "A small box of turquoise animal figurines.",
      "value": 250,
      "rarity": 3,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Anthracite Chair",
      "desc": "In this room of the dungeon, there is an elaborate arm chair carved entirely of a single piece of coal. It has been inlaid with silver runes that age has rendered unreadable.",
      "value": 80,
      "rarity": 3,
      "weight": 60,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Armageddon Diorama",
      "desc": "A tiny diorama made of oak and silver, depicting a prophecy of the last days of the world in vivid detail.",
      "value": 80,
      "rarity": 3,
      "weight": 20,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Armentarious' Scroll Tube",
      "desc": "A very large scroll tube containing the plans for many of the ancient war engines of Armentarious.",
      "value": 100,
      "rarity": 3,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Astrologer's Chart",
      "desc": "An astrologer\u2019s chart, inscribed with the finest instruments and the greatest precision upon a vellum which is both supple and expensive. Close inspection by those with the proper knowledge, however, reveals that these charts were constructed around an entirely different night sky \u2013 and, possibly, a calendrical system and length of year unlike anything known upon this world.",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Aumurille's Chest",
      "desc": "A miniature golden chest with tiny emeralds lining the top that trace out a mage\u2019s sigil. The chest is crafted in exquisite detail. (This is the material component of a \u201cSecret Chest\u201d (from the spell of the same name) for the ruthless lady-mage Aumurille, who will likely want it back....)",
      "value": 75,
      "rarity": 3,
      "weight": 5,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bag of Holding",
      "desc": "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action. If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate. Placing a bag of holding inside an extradimensional space created by a Heward's handy haversack, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened. ",
      "value": 4000,
      "rarity": 3,
      "weight": 15,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bag of Saffron",
      "desc": "A small bag of saffron. It can be used to flavor the parties travel rations, but is probably more valuable as a trade good.",
      "value": 22,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bag of Tricks, Grey",
      "desc": "This ordinary gray cloth bag appears to be empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table that corresponds to the bag\u2019s color. The creature vanishes at the next dawn or when it is reduced to 0 hit points. The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature. Once three fuzzy objects have been pulled from the bag, the bag cannot be used again until the next dawn.\n\n\n\n",
      "value": 900,
      "rarity": 3,
      "weight": 0.5,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bat Sack",
      "desc": "Witch\u2019s Mad Sack of Bats \u2013 releases swarm of bats",
      "value": 300,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Battle Banner",
      "desc": "A famous battle banner, long lost, smells badly",
      "value": 200,
      "rarity": 3,
      "weight": 10,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bear Claw Boots",
      "desc": "A pair of dark leather boots upon which a curious gnomish mechanism has been fastened around. There is a small lever on the side of the ankle that, when toggled, extends on each boot a set of sharp mountaineering claws. The boots are sized for medium humanoid but the mechanism itself would be easy enough for a blacksmith to scale up or down.",
      "value": 300,
      "rarity": 3,
      "weight": 4,
      "category": "Wondrous Item",
      "properties": "The mountaineering claws provide a +2 circumstance bonus to climb checks. This bonus can be used in addition to a Climber's Kit.",
      "requirements": null
    },
    {
      "name": "Behir Horn",
      "desc": "A stoppered behir horn containing 300 gp worth of powdered electrum",
      "value": 300,
      "rarity": 3,
      "weight": 4,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Belt of the Shippey",
      "desc": "A dark, water-worn leather belt embossed with an intricate seascape all around its girth. It has a polished golden buckle, as well as the name \u201cJadmek\u201d carved into the front. It confers a +2 bonus to all Use Rope checks, as well as a +2 bonus to knowledge of anything maritime. Any encounter with pirates or seafaring merchants might prove interesting if the NPCs spot this belt.",
      "value": 220,
      "rarity": 3,
      "weight": 1,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bird Cage",
      "desc": "An antique golden bird cage with an electrum filigree.",
      "value": 250,
      "rarity": 3,
      "weight": 10,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Black Lotus Pollen",
      "desc": "Four half-pound bricks of compressed Black Lotus pollen",
      "value": 400,
      "rarity": 3,
      "weight": 2,
      "category": "Treasure",
      "properties": "Potent poison. Very valuable to...the right people.",
      "requirements": null
    },
    {
      "name": "Black Mountain Stout Recipe",
      "desc": "A 1\u2019 x 3\u2019 bronze plate bearing the ancient, and secret recipe for Black Mountain Stout",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blood Waterskin",
      "desc": "Waterskin of lamb\u2019s blood",
      "value": 0.2,
      "rarity": 3,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blue Dragon Figurine",
      "desc": "A finely crafted figurine of a blue dragon, rampant, done in wood and painted. ",
      "value": 0.6,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Boots of Elvenkind",
      "desc": "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently. ",
      "value": 2500,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Boots of Striding and Springing",
      "desc": "A pair of tan boots which are fastened around the foot with three adjustable belts. The inner sole of these boots feels springy to the touch and seems to mould itself around the user's foot for a fit so comfortable it's like walking on the clouds.",
      "value": 5000,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": "While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn't reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can't jump farther than your remaining movement would allow.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Boots of the Winterlands",
      "desc": "A pair of hide boots lined with dense, warm white fur. The eyelet for each bootlace is patterned with small gemstones and the sole of the boot is spiked so as to benefit the user over icy and unstable terrain. These furred boots are snug and feel quite warm. ",
      "value": 2500,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": "See DMG page 156.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Box o' Diseases",
      "desc": "An ornate box containing corked vials of different diseases",
      "value": null,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Box of Evil Miniatures",
      "desc": "A collection of humanoid figurines, each poised in an unspeakable act of evil. They are packed in box which has been wrapped in lamb\u2019s wool.",
      "value": 30,
      "rarity": 3,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bracers of Archery",
      "desc": "While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
      "value": 1500,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Bracers of Binding",
      "desc": "The bracers appear to be Bracers of Specialization, but when donned, bind the wearer wrists together, making it quite difficult to wield a weapon or cast a spell. These bracers are sometimes offered as rewards for services rendered by the Drow. The recipient, believing them to be very powerful, will often don them before examinating them. At this point, the drow find it amusing to conjure a hook horror.\t",
      "value": 300,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "lower damage by 5 points, increase spell failure to 75% and give the wearer a +5 penalty to THACO. Since they are cursed, they can't be unequiped without a Remove Curse spell or the services of a priest",
      "requirements": null
    },
    {
      "name": "Brass Dragon Egg",
      "desc": "A delicate brass dragon egg; hollowed out and painted into a seascape, resting on a wooden stand.",
      "value": 35,
      "rarity": 3,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Brass Mug",
      "desc": "A plain brass mug with a surprisingly ornate jade inlay.",
      "value": 250,
      "rarity": 3,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bronze Caltrops",
      "desc": "A cask full of bronze caltrops.",
      "value": 3,
      "rarity": 3,
      "weight": 6,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bronze Crown",
      "desc": "An old bronze crown, once inlaid with gemstones. They have since been picked out, but the crown itself is wonderfully cast.",
      "value": 250,
      "rarity": 3,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Brooch of Shielding",
      "desc": "While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the magic missile spell.\n",
      "value": 7500,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Broom of Flying",
      "desc": "This wooden broom functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. The broom stops hovering when you land. You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you. ",
      "value": 8000,
      "rarity": 3,
      "weight": 3,
      "category": "Wondrous Item",
      "properties": "It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. ",
      "requirements": null
    },
    {
      "name": "Bull's Head Ring",
      "desc": "A silver ring shaped into the likeness of a bull\u2019s head.",
      "value": 10,
      "rarity": 3,
      "weight": null,
      "category": "Ring",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bullette Horn Barding",
      "desc": "A complete barding for a war horse made of Bullette horn plates.",
      "value": null,
      "rarity": 3,
      "weight": 40,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Cap of Water Breathing",
      "desc": "The word \u201cSTYX\u201d is sewn into the inner headband of this cap.",
      "value": 1000,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": "While wearing this cap underwater you can speak its command word as an action to create a bubble of air arround your head. It allows you to breathing normally underwater. This bubble stays with you until you speak the command word again, the cap is removed or you are no longer underwater.",
      "requirements": null
    },
    {
      "name": "Ceramic Jars",
      "desc": "4 ceramic canopic jars, holding the stomach, intestines, lungs, and liver of a long-ago monarch. Each has a golden lid with a likeness of a paunchy, hook-nosed man with pale skin and a squint.",
      "value": 80,
      "rarity": 3,
      "weight": 20,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Chess Set",
      "desc": "A large, boxed chess set. All the pieces are small, dead pixies somehow sealed within glass.",
      "value": 150,
      "rarity": 3,
      "weight": 3,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Chrysoberyl Gem",
      "desc": "Chrysoberyl is a hard, transparent, green gem which is usually facet-cut. It is said that Chrysoberyl has ties to the outer planes and hence its use with battling demonic possession and the undead.        ",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Cl\u00e0rsach Harp",
      "desc": "A cl\u00e0rsach harp in the style of the northern barbarians, but crafted with an elegance which suggests the decadence of a great civilization. Its strings are almost too fine to be perceived with the naked eye, and when they are played they resonate with the force of a full orchestra.",
      "value": 375,
      "rarity": 3,
      "weight": 80,
      "category": "Treasure",
      "properties": "Add your proficiency bonus to all Performance (Charisma) checks made when playing the harp.",
      "requirements": null
    },
    {
      "name": "Cloak of Partial Shadow",
      "desc": "A normal looking black cloak with a high collar. When activated it gives off small puffs of black smoke that help obscure the wearer.",
      "value": 250,
      "rarity": 3,
      "weight": 5,
      "category": "Armor",
      "properties": "Speak the command word to activate the cloak and receive advantage on your next stealth roll. The wearer can only benefit from the effect once. It lasts for up to 6 seconds.",
      "requirements": null
    },
    {
      "name": "Companion Cube",
      "desc": "A Companion Cube: It was created by a wizard who had stuck himself in a tower to show complete dedication to his studies. However, after several decades he became so lonely that he chose to make a friend... literally. Using what little non-component materials he had laying around his tower, he created a small cube and gave it sentience. It was able to communicate telepathically with anyone who made a link with the cube. Unfortunately, the wizard eventually died and the cube became lonely. Unable to travel and find a new friend, the cube simply sat there and waited for anyone to come along. Anyone seeing the cube would be compelled to be with the cube and have it in their possession. Upon holding the cube, they would feel the need to keep it with them at all times, and protect it as if it were their own child. Little by little, the connection between the cube and it's possessor would grow, until the two would be inseparable.",
      "value": null,
      "rarity": 3,
      "weight": 30,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Coral Circlet",
      "desc": "A dark crimson Coral gemstone fitted into a golden circlet.",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Crayon Torches",
      "desc": "This set of 12 torches burn different colors. There are two sets of Red, Yellow, Blue, Green, Orange and Purple torches.",
      "value": 50,
      "rarity": 3,
      "weight": 12,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Crystal Sword",
      "desc": "When used this sword will deliver 1 instant hit for max damage, including bonuses. Once used, the sword shatters into crystal shards. Anyone within one square must roll reflex or take 1d4 damage from shard pieces.",
      "value": 40,
      "rarity": 3,
      "weight": 3,
      "category": "Weapon",
      "properties": "1d8 Slashing - Versatile (1d10)",
      "requirements": "Martial Weapon Expertise"
    },
    {
      "name": "Dagger of Slicing",
      "desc": "Dagger of slicing \u2013 ignores armor bonus",
      "value": null,
      "rarity": 3,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Piercing; Finesse, Light, Range, Thrown",
      "requirements": null
    },
    {
      "name": "Death Talker Charm",
      "desc": "Charm that tells 1 truth about a creature killed in the area",
      "value": null,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Debt of a Soul",
      "desc": "Debt of a Soul \u2013 contract of soul ownership",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Deck of Cards",
      "desc": "An ancient deck of cards with five suits \u2013 clovers, swords, clubs, hearts, and dragons.",
      "value": 50,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Decrepit Skeleton in Armor",
      "desc": "The skeletal remains of a long-dead warrior, wearing a suit of plate armor which has long since tarnished. The name of every warrior to ever die by the last wearer\u2019s hand has been inscribed upon the front and back of the chest plate, covering nearly every inch of its surface with chaotically written, black runes.",
      "value": null,
      "rarity": 3,
      "weight": 60,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dragon Balm",
      "desc": "Dragon balm \u2013 reduced heat damage",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Potion",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dragon Statuette",
      "desc": "A statuette of a dragon, forged from the finest mithril, which responds to yes or no questions which are posed to it in draconic. The answers given may appear prophetic or oracular, but are actually random.",
      "value": 400,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Druid's Magnet",
      "desc": "A wood chip which acts as a magnet, despite its non-metallic nature.",
      "value": null,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Drums of Endurance",
      "desc": "Once per day, give +10ft to movement, and +1 to attack and damage rolls to all allies.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Duergar Compass",
      "desc": "This compass is carved out of heavy, hard Petrebony (a wood that grows in caves). A brass needle sits in the center. However, this compass' needle points East, not North. There are no markings on its surface.",
      "value": 135,
      "rarity": 3,
      "weight": null,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dust of Appearance",
      "desc": "Stack of 4, user covers 20ft radius in magic dust that shows anything that is hidden or dispellable.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dust of Coughing and Sneezing",
      "desc": "Magical dust that makes anyone cough and sneeze (combat)",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dust of Dispelling",
      "desc": "stack of 4, user covers 20ft radius in magic dust that shows anything that is hidden or dispellable.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Edible Greatsword",
      "desc": "Works like a normal greatsword. Great tasting and low in calories! Regenerates 6 inches per day.",
      "value": 400,
      "rarity": 3,
      "weight": 6,
      "category": "Weapon",
      "properties": "2d6 Slashing - Heavy - Two-Handed",
      "requirements": "Martial Weapon Expertise"
    },
    {
      "name": "Eldritch Flint & Steel",
      "desc": "Eldritch flint & steel \u2013 10\u2019 reach \u2013 blinding/minor burns",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Elven Engraved Combs",
      "desc": "An elegant carved comb of oak, engraved with the name Aethelren and decorated with twin dragons. Elsewhere, a similar comb of ash, engraved with the name Ilthorien and decorated with twin unicorns, can be found.",
      "value": 60,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Empty Mason Jar",
      "desc": "This magical mason jar is made of uneven, lumpy, blue-green glass with a copper lid. No matter what is placed in this transparent jar, it will always appear to be empty from the outside--so long as the lid is on. On the lid is pressed \u201ccalasse,\u201d Elven for \u201cclean.\u201d It cannot hold more than its actual volume.",
      "value": 800,
      "rarity": 3,
      "weight": 1,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Enchanted Apple",
      "desc": "A purple-colored apple. (This enchanted apple has all the properties of a potion of Cure Light Wounds. 50gp)",
      "value": 50,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Exploding Gold Coins",
      "desc": "Exploding gold coins (Looks legit. Should avoid contact with real gold coins for safety...)",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Trap",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Exploding Rations",
      "desc": "Exploding rations \u2013 breathe weapon 1d6 hours for 1 use of color theme type",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "F**k You Fireworks",
      "desc": "These appear to be normal Gnomish fireworks (although even those might seem unique and valuable to anyone unfamiliar with Gnomish ingenuity) but when they are eventually set off they spell out giant obscenities across the night's sky. It seems, in retrospect, that they may have been created by a rather angry Gnome. Sadly, whomever created the fireworks and who they were originally intended for will forever remain a mystery.",
      "value": 30,
      "rarity": 3,
      "weight": 10,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Finely Woven Rug",
      "desc": "A finely made 10\u2019 x 12\u2019 wool floor rug. The center of the rug depicts a scene of siege warfare. A Halfling is being flung over a city wall by a trebuchet.",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Flask of Nightmare Ale",
      "desc": "Half-full flask of nightmare ale \u2013 1 sip = 1d4 hours fear check per hour; full measure = 1d4 hours horrifying hallucinations vs DC save for early retirement",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Flask of St. Cuthbert",
      "desc": "A pair of steel flasks, sealed with wax bearing the symbol of St. Cuthbert. (Holy water, 25 gp each)",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fundial",
      "desc": "A sundial which runs backwards.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Garnet Gemstone",
      "desc": "Garnet is a general class of crystals ranging from deep red to violet in colour. a typical cut for this rare isometric gem is 12 to 24 sides, with the very rare 36 sides being known from time to time. it is rumored a 48-sided garnet exists although none have ever been able to track down its location.\t",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Giant-King's Necklace",
      "desc": "Giant-King\u2019s platinum necklace with crimson diamond worn by dragon",
      "value": null,
      "rarity": 3,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Giant's Arrow",
      "desc": "A huge arrow, with a steel tip and copper wire inlaid spirally down the shaft. To a medium or large creature, it behaves just like a javelin. However, when thrown, it whistles loudly.",
      "value": 80,
      "rarity": 3,
      "weight": 2,
      "category": null,
      "properties": "1d6 Piercing - Simple - Thrown - Range: 30/120",
      "requirements": null
    },
    {
      "name": "Glaive",
      "desc": "This is a short pole-arm resembling a Fauchard or Guan do, with an additional spike for thrusting. It deals slashing damage when wielded in one hand and piercing damage when wielded in two hands.",
      "value": 5,
      "rarity": 3,
      "weight": 4,
      "category": "Weapon",
      "properties": "1d6 Slashing - Versatile (1d8 Piercing)",
      "requirements": null
    },
    {
      "name": "Globe of Invulnerability",
      "desc": "Globe of Invulnerability (It's a snowglobe. Not even the gods themselves can destroy it.)",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gloves of Slapping",
      "desc": "Gloves that improve a skill but will randomly force the user to slap an ally/NPC during conversations at the DM's discretion.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gnome Camo Paint",
      "desc": "This paint provides no protection, but grants 10 to disguise. The only way it works, however, is if the wearer is wearing no clothes, and covered head to toe in the stuff. It's hilarious when a disguise check fails, and they realize they are staring at a naked Gnome.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "God Ring",
      "desc": "Ring of a god",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Ring",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gold Bracelet",
      "desc": "A golden bracelet.",
      "value": 250,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gold Ring",
      "desc": "A small gold ring set with bloodstones.",
      "value": 250,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Golden Arrows",
      "desc": "A quiver of golden arrows, They are devoid of supernatural properties, but despite their unusual composition will perform as normal arrows would.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Golden Tablet",
      "desc": "A tablet of pure gold, inscribed with the core rites and beliefs of a venerable religion. Careful study of this tablet, however, will reveal subtle \u2013 but important \u2013 differences between these ancient practices and the current practices of the religion in question.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Greataxe of Blindness",
      "desc": "This is a large greataxe, with a steel shaft and silver floating blade much like the Telescoping Glaive. ",
      "value": 0,
      "rarity": 3,
      "weight": 7,
      "category": "Weapon",
      "properties": "1d14 Slashing - Martial - Heavy, Two-Handed\nWhen raising this axe to swing the wielder suffers 1 minute of total blindness.",
      "requirements": null
    },
    {
      "name": "Heart Shaped Token",
      "desc": "A small, heart-shaped token carved out of rose-colored sandstone, holding the mad soul of a princess who was trapped there by a sorcerer many centuries ago. Her body remains in the hidden royal sepulchers of her homeland, perfectly preserved by ancient magic.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hero Dolls",
      "desc": "These start getting made after the party does something particularly heroic. Little cloth dolls that look like party members, when squeezed, the caster spouts illusionary flames, the cleric spouts prayers \"Praise Avandra!\", the fighter has kung-fu action where he swings his sword.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Horn Coral Gem",
      "desc": "Horn Coral, which is also called night coral, is a deep black coral, similar to angel's skin save for its solid color. It is incredibly difficult to work with, and is used in jewelry as a polished twig or branch of material, or is cut cabochon.\t",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Immovable Rod",
      "desc": "This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Rod",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ivory Statuette",
      "desc": "A carved sculpture of jungle animals on an ivory tusk.",
      "value": 250,
      "rarity": 3,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jade Buttons",
      "desc": "A small collection of antique Jade buttons.",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jade Statue",
      "desc": "A Weather-worn jade statue depicting a desert beast known only to the people of the far south.",
      "value": 300,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jade Telescope",
      "desc": "A telescope of jade and banded with bloodstone. A character looking through the telescope sees not the world around them, but a strange, alien panorama which \u2013 nonetheless \u2013 follows the motions of the telescope.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jet Brooch",
      "desc": "A deep black brooch set with a Jet gemstone. Rumor suggests a brooch of this nature helps prevent the evil eye.",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jewel Encrusted Sarcophagus",
      "desc": " Jewel encrusted sarcophagus \u2013 mummy inside",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Kazoo of Intimidation",
      "desc": "When this Kazoo is played, it grants +2 to Intimidation checks. A +3 if the player has a kazoo in the room.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Large Snow Globe",
      "desc": "A large snow globe, with a study base of polished oak, depicting a small farmhouse in the midst of a forest clearing. Shaking the globe causes the snow to gently fall, and as it does miniature figures exit the house and begin performing chores about the farmyard. The figures return to the house as the last flake falls.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Lava Rocks",
      "desc": "Rocks stuffed with lava",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Leomund's Loot Rack",
      "desc": "This is a rack of weapons, armor, books, wands, whatever you desire. It holds anywhere from 3-6 items, each usually magical in nature. Each can be examined visually and by a Detect Magic spell. However, as soon as one is touched, the others disappear\u2014never to be found again. Multiple items cannot be removed at once. Optionally a password could dispel the magic, allowing all items to be removed.",
      "value": 0,
      "rarity": 3,
      "weight": 300,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Longsword of Balanced Sums",
      "desc": "The Longsword of Balanced Sums. Functions exactly like a generic +2 Longsword... except when you crit miss. Then it heals the target for half its max hit points.",
      "value": null,
      "rarity": 3,
      "weight": 5,
      "category": "Weapon",
      "properties": "1d8+2 Slashing, Versatile (1d10+2)",
      "requirements": "Martial Weapon Expertise"
    },
    {
      "name": "Lucky Coin",
      "desc": "You must have this item with you for 24 hours for it to become attuned to you. Once attuned, you may choose the result any time it is flipped, regardless of who actually flips it. Possible commands include heads, tails, and edge.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Lucky Dodge Belt",
      "desc": "Once an encounter, the player can choose to roll a d20 and use that as their base AC instead of 10. Player must take the value of the roll.",
      "value": null,
      "rarity": 3,
      "weight": 3,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Magic Litmus Paper",
      "desc": "Litmus magic paper: This paper can be used as a standard action by rubbing it on an object. It either detects no magic and can be used again, or changed color and brightness to reflect the school(s) and strengths of magic on the object.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Meal Table",
      "desc": "A stone table in the midst of the wilderness which is, nevertheless, always filled with a fresh meal whenever travelers come across it.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Medallion of Courage",
      "desc": "Once per day, swift. remove AC of target granted by armor, last one turn. user takes penalty to AC equal to target for same duration.\n",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Menesta's Book of Stored Skill",
      "desc": "This magical book has no discernable writings on the outside, or on any page. As soon as it is opened up, ask the player for the first three skills that come to mind. As soon as they tell you, the first page of the book becomes a table of contents with three chapters. The names of the chapters are the three skills they mentioned. Turning to the page of a skill chapter causes the book to disappear in a colored burst of light\u2014and leaves the user with a permanent +1 rank to said skill. If their ranks are maxed out, the book is wasted.",
      "value": 950,
      "rarity": 3,
      "weight": 2,
      "category": "Book",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Merchant's Dagger Box",
      "desc": "A merchant\u2019s leather case containing a selection of twenty well-made daggers of varying designs.",
      "value": 80,
      "rarity": 3,
      "weight": 22,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse, Light - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Minting Tools",
      "desc": "A set of dies and hammers for minting the king's coinage.",
      "value": 400,
      "rarity": 3,
      "weight": 5,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Mithral Armor",
      "desc": "Mithril is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
      "value": 800,
      "rarity": 3,
      "weight": 70,
      "category": "Armor",
      "properties": "Medium, Heavy (Not Hide)",
      "requirements": null
    },
    {
      "name": "Moonbar Gemstone",
      "desc": "Moonbar is a pearly white, opaque gemstone, usually pale blue with green and gold mottling. Related in type to fire and black opals, but is only slightly more common.\t",
      "value": 375,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Moss Earplugs",
      "desc": "Two peanut-sized balls of moss sit atop gnarled wooden knobs. Placing one of them in each ear causes total deafness\u2014or total hearing protection, whichever your preference. The player cannot hear anything, and must succeed on a DC 16 Will save to speak a single sentence comprehensibly. However, they are totally immune to all sonic attacks and songs and can fall asleep extremely well. The earplugs can be removed at will.",
      "value": 45,
      "rarity": 3,
      "weight": null,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pearl",
      "desc": "Pearls consist of layers of aragonite agonizingly formed around a bit of grit or other irritant inside oysters and other mollusks. The resulting pearl has a rich, deep luster. Most of the pearls in the realms are white, however there are varieties that are much more rare such as rainbow and black.\t",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pouch of Healing Potions",
      "desc": "A large carry pouch made from the skin of a monkey. Inside are 1d6 Potions of Greater Healing. ",
      "value": 300,
      "rarity": 3,
      "weight": 0.5,
      "category": "Potion",
      "properties": "You regain 4d4 + 4 hit points when you drink this potion. \nThe potion's red liquid glimmers when agitated.",
      "requirements": null
    },
    {
      "name": "Pouch of Mushrooms",
      "desc": "A small brown pouch that smells faintly musty. Inside it are 1d4 colourful mushrooms that are unrecognizable, even to a particularly knowledgeable alchemist or naturist. If determined, a painstaking delve through a herbalists library might identify the mushrooms as \"sub-space mushrooms\" in a madly written diary of a man claiming to be a deposed king called Cooper.",
      "value": 0,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": "If eaten, each mushroom will increase the consumer's size to one greater than it currently is for an hour.",
      "requirements": null
    },
    {
      "name": "Ring of Dubious Might",
      "desc": "A silver ring, encrusted with a small topaz. Upon wearing it on their finger, the wearer feels incredibly strong and confident. However, entering combat, their confidence immediately dissipates, leaving them terrified.",
      "value": 20,
      "rarity": 3,
      "weight": null,
      "category": "Ring",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sentient Dagger of Sneaking",
      "desc": "This sentient dagger attempts to help anytime it's owner tries to sneak by whistling inconspicuously.  For some reason it seems to have been discarded.",
      "value": 300,
      "rarity": 3,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse, Light - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Silk Robe",
      "desc": "A long silk robe with golden embroidery.",
      "value": 250,
      "rarity": 3,
      "weight": 4,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silver Necklace",
      "desc": "This silver necklace has a gemstone pendant.",
      "value": 250,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sphene Gem",
      "desc": "Sphene is a soft, brittle gemstone (and, like scapra, easily worked by unskilled cutters) of various yellow to green shades, the most prized of these being a fine emerald green.\t",
      "value": 225,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Spinel Necklace",
      "desc": "A spun leather necklace of deep green Spinel beads.",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tapestry",
      "desc": "A large, well-made tapestry depicting a local duke.",
      "value": 250,
      "rarity": 3,
      "weight": 20,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Rhinoclean Helm",
      "desc": "The Rhinoclean helm is a large iron cap with visor shaped like the head of a certain kind of beetle. The helm's wearer has advantage on bull rushes and can stand up from being prone once on each of its turns without expending movement. ",
      "value": null,
      "rarity": 3,
      "weight": 1,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Rhinocles Helm",
      "desc": "The Rhinocles helm is a large iron cap with visor shaped like the head of a certain kind of beetle. The helm's wearer has advantage on bull rushes and can stand up from being prone once on each of its turns without expending movement.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tourmaline Gemstone",
      "desc": "A multi colored rectangular Tourmaline gemstone.",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Townshend's Cudgel",
      "desc": "Townshend's Crudgels was invented by its namesake, Peter \"Unknown\" Townshend, a traveling bard who wished his lute to both give beauty and take it away (preferably with a good old fashioned thrashing). His lute design, later copied by some of his admirers, was a simple oak lute, reinforced with an iron shell, to maintain the soft vibration of the sound against the wooden interior, and to give the lute the strength to crack open an orc's skull with a well placed blow.\nThis weapon functions both as a lute and a weapon. When used as a lute, it is considered to be a lute and does not require a separate proficiency bonus to play. However, if the user rolls a critical miss with the weapon (a 1 on an attack roll) the lute may become slightly damaged and will require the user to spend an hour to retune it. If the instrument is not returned, whenever the instrument is played, the user is disadvantaged on the Perform check. This weapon can also be used as a bard's spellcasting focus.\n",
      "value": 38,
      "rarity": 3,
      "weight": 4,
      "category": "Weapon",
      "properties": "1d6 Bludgeoning - Versatile (1d8)",
      "requirements": null
    },
    {
      "name": "Water Opal",
      "desc": "Water Opal is a colourless, clear opal with a play of colour. It is rare and valuable in the Realms, where it is used in scrying devices.\t",
      "value": 350,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Potion of False Bluff",
      "desc": "A potion vial containing a sweet. honey-smelling golden syrup. There is a label on the vial written in common, which reads \"Potion of Deception\".",
      "value": 1000,
      "rarity": 3,
      "weight": null,
      "category": "Potion",
      "properties": "The drinker of the potion perceives that they are an amazing liar. They believe that every bluff, diplomacy, and intimidation check they make for the next 1d4 hours succeeds, whether it does or not.",
      "requirements": null
    },
    {
      "name": "Potion of Harmless Flaying",
      "desc": "A pearlescent green potion in a glass vial that seems to swirl playfully when started at.",
      "value": 400,
      "rarity": 3,
      "weight": null,
      "category": "Potion",
      "properties": "1d4 rounds after drinking this potion target produces the illusions of his/her innards becoming outards for 1d6 minutes. The illusion is entirely intangible, but nonetheless real looking.",
      "requirements": null
    },
    {
      "name": "Raven Feather Fans",
      "desc": "A pair of pole mounted fans made of giant raven feathers",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Raven Pen",
      "desc": "A pen made from a raven\u2019s feather. Through some magical means it writes continuously from an inexhaustible supply of golden ink upon whatever piece of parchment may be near by.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ricochet Sling",
      "desc": " Ricochet-sling \u2013 up to 4 targets (d4 for targets, attack roll each; first attack fail causes ricochet to end [unless a tie, in the case of a tie to AC the ricochet continues])",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ring of Bad Luck",
      "desc": "",
      "value": 20,
      "rarity": 3,
      "weight": null,
      "category": "Ring",
      "properties": "This ring will appear to be a Ring of Good Luck without an appraise check of 25. It actually imbues the wearer -1 on all saves and is not removable for a full day without removing the enchantment.",
      "requirements": null
    },
    {
      "name": "Ring of Fake Invisibility",
      "desc": "A silver ring inlaid with a trasluscent pearl. There is an inscription in Elvish which reads, \"To Elabella, perhaps now you will find your mirror less engrossing.\"",
      "value": 80,
      "rarity": 3,
      "weight": null,
      "category": "Ring",
      "properties": "The wearer of this ring is unable to see themselves or anything they are carrying.",
      "requirements": null
    },
    {
      "name": "Troglodyte Egg",
      "desc": "A brown and red flecked egg, about the size of a loaf of bread, that gives off a rancid scent.",
      "value": 50,
      "rarity": 3,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Giant Boomerang",
      "desc": "This massive boomerang requires two hands by medium sized humanoids. This may have been specially designed for an ogre, or giant. It has sharp metal blades that run down the side of each wing. The blades on the inner curves make it a bit tricky to wield.",
      "value": 50,
      "rarity": 3,
      "weight": 4,
      "category": "Weapon",
      "properties": "1d8 Bludgeoning - Thrown (Range: 30/90) - Two-Handed\nSpecial: Does not require direct line of sight, due to a curved trajectory.",
      "requirements": "Martial Weapon Expertise"
    },
    {
      "name": "Boomerang of Retrieval",
      "desc": "This otherwise normal looking boomerang has a sense of arcana deep within it's dark oak core. Researching it's history will reveal that this is, in fact, one of many created by a local wizard who was frustrated at being unable to throw a normal boomerang in such a way that it returned naturally.",
      "value": 180,
      "rarity": 3,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d6 Bludgeoning (+1 force damage) - Thrown (Range: 30/90)\nSpecial: Does not require direct line of sight, due to a curved trajectory. \nUnlike a normal boomerang, the boomerang of retrieval will always return to you after you make a ranged attack with it, even if you hit.",
      "requirements": null
    },
    {
      "name": "Puppet Theater",
      "desc": "An elegant puppet theater. Although its wood is brightly polished and the red of its satin curtains is bright and fresh, the hand-painted sign upon its front (reading \u201cThe Wondrous Show of Punch and Judy\u201d in carnival lettering) is chipped and faded. If the curtains are opened (using a set of finely woven pulley ropes which lie inside the theater), the puppets \u2013 stored in a concealed compartment \u201cbackstage\u201d \u2013 will come to life and perform elaborate shows of their own volition.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Quicksilver Surprise",
      "desc": "In a worn and decaying wall of mud bricks, a single black brick \u2013 polished and perfectly preserved \u2013 stands out in stark contrast. If the brick is pried out and broken open, it will reveal a quicksilver core.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Rabbit's Foot",
      "desc": "A lucky rabbit\u2019s foot which hangs from a golden chain. Although separated from the rest of the rabbit, the foot magically lives on: It will respond to touch, bleed if injured, and so forth.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ring of Good Luck",
      "desc": "This ring imbues the wearer +1 on all saves.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Ring",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Shell Paste Lotion",
      "desc": "A small metal tin which has been carefully labelled. Instructions are included on the inside of the lid, \"Smear on bare skin to grow a natural defence.\" The paste inside is white and gritty. It smells like coconut.",
      "value": 200,
      "rarity": 3,
      "weight": null,
      "category": "Potion",
      "properties": "Smearing Shell Paste lotion on your bare skin will cause an exoskeleton to grow for 1d4 hours. This exoskeleton increases your AC by 1.",
      "requirements": null
    },
    {
      "name": "Griffon Bomb",
      "desc": "A metallic egg-shaped weapon which, when thrown, sprouts magical wings and hovers above it's intended target.",
      "value": null,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gnome Bomb",
      "desc": "An ornate, egg-shaped device made with cast bronze. There is a pin in the top of the device with an etched note indicating the following: PULL THYS PINNE AND WAITE TENNE COUNTS BEFORRE BOOME. When the pin is pulled, an urgent ticking sound begins to eminate from the device.",
      "value": null,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Elven Bomb",
      "desc": "An orange-yellow shell with small claw-like protrusions. This appears more to have been grown rather than constructed.",
      "value": null,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dwarven Bomb",
      "desc": "",
      "value": null,
      "rarity": 3,
      "weight": 2,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dryad Bomb",
      "desc": "A so-called \"Dryad Bomb\", called such because when thrown it creates a mess of magically grown tangles and vines. Appears to be a glowing orange orb surrounded by a series of vines and roots.",
      "value": null,
      "rarity": 3,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gnome Timepiece",
      "desc": "A magical time-keeping device produced by a Gnomish artisan. Opening this circular locket allows you to check the current time based on where a delicate hand is pointing. On one half of the circular face is an ornate night's sky with a crescent moon indicating midnight. On the other half is a blue sky, with a bright sun indicating mid-day. It's unclear how the magic has been infused with the device, as no arcane presence is detectable, but pulling the silver panel off the back of the locket simply exposes a number of delicate, ticking gears. Gnome magic is compicated.",
      "value": 150,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Learning Languages by Chompsky",
      "desc": "A book detailing the general process of learning a language, from both a practical and theoretical angle. Written by a talented linguist called Chompsky the Gnome.",
      "value": 200,
      "rarity": 3,
      "weight": 1,
      "category": "Book",
      "properties": "Allows any natural speaker of a language to be considered an \"instructor\" of that language. ",
      "requirements": "Language: Common"
    },
    {
      "name": "Romeot and Julio",
      "desc": "One of the most famous plays in the works of the famous Orcish bard; Villam Spearshaker. It tells the story of two starcrossed lovers whose familes are locked in a bitter rivalry. They attempt to run away together, only to end up eaten by an ogre. The ogre then proceeds to eat most of the two feuding families, all of the side characters and in a number of early renditions of the play a few members of the audience as well. A note to budding directors: Try not to cast an actual ogre as the ogre.",
      "value": 180,
      "rarity": 3,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Romeot and Julio II",
      "desc": "A sequel to the original play by the famous Orcish bard; Villam Speakshaker. Romeot and Julio (or at least, what's left of them) are ressurected as shambling zombies in service to a wealthy merchant. The play ends with the merchant attempting to extract a pound of flesh from Romeot to pay for a debt before getting eaten alive by the two zombies. Their final moments of the play are spent lovingly feeding each other his bloody entrails.",
      "value": 175,
      "rarity": 3,
      "weight": 1,
      "category": "Book",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Arrow Magnet Amulet",
      "desc": "Whenever an arrow is fired in the vicinity of this amulet\u2019s wearer, it will strike the amulet wearer",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bloka Tao's Spoon of Cooking",
      "desc": "A plain wooden spoon that appears to have been used in many, many meals. The spoon comes in a stained walnut box with two brass hinges and a brass hook on the front. No other markings are present. [Any markings made on the box or spoon will disappear in 24 hours. The box itself is magical in nature and will alter any spoon made to the same size of the Spoon of Cooking to become a duplicate of the Spoon of Cooking.]",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Any creature that touches the spoon must make a DC 12 Charisma save or be dominated by the spoon for 1d2 hours. The spoon then urges the creature to make the most delicious meal they can from the immediately available ingredients. ",
      "requirements": null
    },
    {
      "name": "Crab Crown",
      "desc": "Provides +2 AC when worn, but attracts the attention of crabs, who will come from nearby and cling to the wearer",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Curse Doll",
      "desc": "Anything significant that happens to the doll happens to you, beneficial or harmful.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Mr. Hammer's Crazy Staff",
      "desc": "A staff that could change into a hammer and give him extra strength while it was in that mode.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Navigational Calculator",
      "desc": "A gear-driven ships navigational calculator enclosed in a jewelwood box.",
      "value": 5000,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "New Year's Sword",
      "desc": "The silver hilt of a sword with a grip of black leather. The blade is missing, or never existed to begin with. One night per year, however, on the eve of the new year, the hilt is possessed of a ghostly blade \u2013 allowing it to perform its duties as a sword once more.",
      "value": 1000,
      "rarity": 4,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d8+4 Slashing - Versatile (1d10+4)",
      "requirements": "Martial Weapon Expertise\nRequires Attunement"
    },
    {
      "name": "Obsidian Charm",
      "desc": "A charm of twisted black obsidian. Touching the charm unleashes strange, ghostly visions from a strange and alien world \u2013 utterly different in every particular, but eerily similar to our own world in its broad scope and form.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Owlbear Costume",
      "desc": "An owlbear costume. Gives the wearer a +10 to disguise when attempting to disguise as an Owlbear.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Phoenix Choker",
      "desc": "Ash of phoenix in necklace choker \u2013 instant revive to wearer (takes 10 rounds/1 minute)",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Phoenix Restorative Potion",
      "desc": "Potion 3: Phoenix Restorative. The next time the drinker is reduced to 0 hit points, they deal area fire damage, and return to full health, only happens once. The player has no special knowledge this is true, but the flavor of the draught burns their throat but leaves them feeling oddly optimistic. Fire damage dealt should be based on circumstance, but if you can get away with lots, it'd be the most fun.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Potion",
      "properties": null,
      "requirements": null
    },
    {
      "name": "1d20 Ammunition +2",
      "desc": "You have a bonus to attack and damage rolls made with this piece of magic ammunition. The bonus is determined by the rarity of the ammunition. Once it hit a target, the ammunition is no longer magical. Value listed is for individual units.",
      "value": 100,
      "rarity": 4,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "1d4 + 4 Beads of Force",
      "desc": "This small black sphere measures 3/4 of an inch in diameter and weighs an ounce. You can use an action to throw the bead up to 60 feet. The bead explodes on impact and is destroyed. Each creature within a 10-foot radius of where the bead landed must succeed on a DC 15 Dexterity saving throw or take 5d4 force damage. A sphere of transparent force then encloses the area for 1 minute. Any creature that failed the save and is completely within the area is trapped inside this sphere. Creatures that succeeded on the save, or are partially within the area, are pushed away from the center of the sphere until they are no longer inside it. Only breathable air can pass through the sphere's wall. No attack or other effect can. An enclosed creature can use its action to push against the sphere's wall, moving the sphere up to half the creature's walking speed. The sphere can be picked up, and it's magic causes it to weigh only 1 pound, regardless of the weight of creatures inside. ",
      "value": 960,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "A Study of Orcs, by Darius Woodherd",
      "desc": "A large tome bound in thick bison-hide that is a common-orcish language primer, as well as a primer on orcish culture. The author of the primer, Darius Woodherd, seems to have added a lot of information on orcish heraldry and politics, as well. Darius spent almost twenty years amongst the orcs of the north, and eventually married an orc before being killed a score of years ago in a rival tribe\u2019s ambush. ",
      "value": 90,
      "rarity": 4,
      "weight": 1,
      "category": "Book",
      "properties": "Grants a +2 circumstance check on speaking orcish, knowledge of orcish history and heraldry, and on diplomacy checks with orcs.",
      "requirements": "Language: Common"
    },
    {
      "name": "Adamant Leaf",
      "desc": "A large, nearly unbreakable leaf from Tree of Adamant.",
      "value": 200,
      "rarity": 4,
      "weight": 5,
      "category": "Wondrous Item",
      "properties": "The leaf is extremely durable; no amount of force applied to the leaf is able to break it and it can only be damaged by Piercing or Slashing with a weapon. ",
      "requirements": null
    },
    {
      "name": "Alexandrite Emerald",
      "desc": "A transparent dark green Alexandrite emerald.",
      "value": 500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Amulet of Health",
      "desc": "This amulet is a golden disk on a chain. It usually bears the image of a lion or other powerful animal. ",
      "value": 8000,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher. ",
      "requirements": "Requires Attunement."
    },
    {
      "name": "Ancient Temple Replica",
      "desc": "Miniature golden replica of ancient mythical temple \u2013 location map inside",
      "value": 30,
      "rarity": 4,
      "weight": 3,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Animated Pet Rock",
      "desc": "Animated pet rock \u2013 capable of killing people!",
      "value": 250,
      "rarity": 4,
      "weight": 5,
      "category": "Wondrous Item",
      "properties": "Spend a bonus action to have the rock attack anything within 25 feet of the pet owner, can only be used every other turn (the rock needs to return to its owner!). Deals 1d4+1 bludgeoning damage.",
      "requirements": null
    },
    {
      "name": "Animated Toy Soldier",
      "desc": "A tiny toy soldier which marches ceaselessly back and forth \u2013 eternally vigilant and pissed off if anyone disturbs.",
      "value": 300,
      "rarity": 4,
      "weight": 3,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Aphrodisiac Root",
      "desc": "A dirty canvas bag containing twenty pounds of an aphrodisiac root.",
      "value": 400,
      "rarity": 4,
      "weight": 20,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Aquamarine",
      "desc": "Aquamarine is a hard, transparent form of beryl, blue-green in colour. These sought after gems are found primarily among the tribes that roam the tundra.",
      "value": 500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Arbalest",
      "desc": "A large arbalest/bolt thrower. It is disassembled and crated for shipping. It requires four strong men to lift. When reassembled, it hurls a 5\u2019 bolt for 2d12 damage. ",
      "value": 3000,
      "rarity": 4,
      "weight": 2000,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Architect's Underwear of Confidence",
      "desc": "This loincloth causes the wearer to have extremely elevated self confidence. As a result, they get +2 on Bluff Diplomacy and Intimidate checks, and -2 on Listen Search Spot and Appraise checks, they also tend to make reckless decisions more often.",
      "value": 500,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Armor +1",
      "desc": "You have a +1 bonus to AC while wearing this armor.",
      "value": 1500,
      "rarity": 4,
      "weight": 64,
      "category": "Armor",
      "properties": "Light, Medium or Heavy",
      "requirements": null
    },
    {
      "name": "Armor of Barbarian Rage",
      "desc": "This is a set of Studded Leather Armour that has been enchanted with the spirit of a long dead barbarian warrior. Once per day it allows the user to channel it's rageful spirit.",
      "value": 300,
      "rarity": 4,
      "weight": 13,
      "category": "Armor",
      "properties": "Light Armor (AC is 14+DEX mod) - Once per day the user can use Barbarian Rage during this rage:\nYou have advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels, counting your own level as the levels you would have in barbarian, as shown in the Rage Damage column of the Barbarian table. You have resistance to bludgeoning, piercing, and slashing damage. You cannot cast any spells while in the rage and any concentration spells being maintained when you enter rage instantly fade. This effect lasts for 1 minute, or dissipates if you do not deal physical or take any type of damage in a turn.\n",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Armor of Resistance",
      "desc": "You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly from the options below. ",
      "value": 6000,
      "rarity": 4,
      "weight": 64,
      "category": "Armor",
      "properties": "Light, Medium or Heavy",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Armor of Vulnerability",
      "desc": "While wearing this armor, you have resistance to one of the following damage types: bludgeoning, piercing, or slashing. The DM chooses the type or determines it randomly. Curse. This armor is cursed, a fact that is revealed only when an identify spell is cast on the armor or you attune to it. Attuning to the armor curses you until you are targeted by the remove curse spell or similar magic: removing the armor fails to end the curse. While cursed you have vulnerability to two of the three damage type associated with the armor (not the one to which it grants resistance). ",
      "value": null,
      "rarity": 4,
      "weight": 65,
      "category": "Armor",
      "properties": "Plate Armor",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Arrow-catching Shield",
      "desc": "You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield's normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead.",
      "value": 6000,
      "rarity": 4,
      "weight": 6,
      "category": "Armor",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Arval's Soundpiece",
      "desc": "Created by the very old and very crotchety wizard Arval long ago, this hollow silver box the size of a deck of playing cards has a rotating dial on top, as well as a button. When the button is pressed, a single target of the wielder's choice is linked with the device magically. By then rotating the dial, the user can alter his target's voice by up to 100%. That is to say the target can be either muted or doubled in volume, and anywhere in between. A will save DC 30 is required to resist the effect.",
      "value": 1800,
      "rarity": 4,
      "weight": null,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Backpack of Effortlessness",
      "desc": "Halves the weight of anything placed inside of it. Nothing larger than the backpack can fit inside the backpack.",
      "value": 1000,
      "rarity": 4,
      "weight": 2,
      "category": "Container",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bad Coin",
      "desc": "A coin that always comes up tails. Placing it anywhere tails side down causes it to flip itself over after 1 round. It takes 50 pounds of pressure to prevent this flip.",
      "value": 600,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bag of Angel Feathers",
      "desc": "1d6 angel feathers aura of good; razor sharp; stronger than steel (can be used as weapon like dagger)",
      "value": null,
      "rarity": 4,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse, Light, Range, Thrown - 20/60",
      "requirements": null
    },
    {
      "name": "Bag of Ash",
      "desc": "The Bag of Ash acts like a jar of infinite water, except it just makes a grey, sooty ash.",
      "value": 600,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bag of Beans",
      "desc": "Inside this heavy cloth bag are 3d4 dry beans. The bag weights 1/2 pound plus 1/4 pound for each bean it contains.",
      "value": null,
      "rarity": 4,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": "See DMG page 152.",
      "requirements": null
    },
    {
      "name": "Bag of Tricks, Rust",
      "desc": "This ordinary rust coloured cloth bag appears to be empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table that corresponds to the bag\u2019s color. The creature vanishes at the next dawn or when it is reduced to 0 hit points. The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature. Once three fuzzy objects have been pulled from the bag, the bag cannot be used again until the next dawn.",
      "value": 3000,
      "rarity": 4,
      "weight": 0.5,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bag of Tricks, Tan",
      "desc": "This ordinary tan cloth bag appears to be empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table that corresponds to the bag\u2019s color. The creature vanishes at the next dawn or when it is reduced to 0 hit points. The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature. Once three fuzzy objects have been pulled from the bag, the bag cannot be used again until the next dawn.\n\n\n\n",
      "value": 6480,
      "rarity": 4,
      "weight": 0.5,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ballistic Fist Hammer",
      "desc": "Ballistic Fist Hammer (Hammer with each side acting as ballistic fists from Fallout series)",
      "value": null,
      "rarity": 4,
      "weight": 7,
      "category": "Weapon",
      "properties": "Damage? Will determine cost.",
      "requirements": null
    },
    {
      "name": "Banshee Spirit Dagger",
      "desc": "Despite appearing to be a normal dagger, even those not able to recognise the presence of magic can tell that there is something imbued in the unassuming metal hilt and blade.\n\nWhen appraised it transpires that this blade was buried with a banshee and it's spirit has somehow been absorbed. Now whomever uses the dagger carries the risk that its spirit will be unleashed.",
      "value": 2000,
      "rarity": 4,
      "weight": 2,
      "category": "Weapon",
      "properties": "On a critical hit, it'll scream like her. It hasn't happened yet, but I imagine it'll either force the target to make a will save or be feared, or possibly drop to zero hit points.",
      "requirements": null
    },
    {
      "name": "Belt of Baby Fire Giant Strength",
      "desc": "To all intents and purposes this resembles a Belt of Fire Giant Stength, and it certainly does have a giant's strength enchantment on it; unfortunately, the it was accidentally made with the strength of a baby fire giant. Fire giant babies have roughly the same strength as an average human man.\n",
      "value": 1000,
      "rarity": 4,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": "While wearing this belt, your Strength score changes to 10. If your Strength is already equal to or greater than 10, the item has no effect on you.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Belt of Dwarvenkind",
      "desc": "While wearing this belt, you gain the following benefits: Your Constitution score increases by 2, to a maximum of 20. You have advantage on Charisma (Persuasion) checks made to interact with dwarves.\nIn addition, while attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you're capable of growing one, or a visibly thicker beard if you already have one.\nIf you aren't a dwarf, you gain the following additional benefits while wearing the belt: You have advantage on saving throws against poison, and you have resistance against poison damage. You have darkvision out to a range of 60 feet. You can speak, read, and write Dwarvish. ",
      "value": 6000,
      "rarity": 4,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Belt of Hill Giant Strength",
      "desc": "While wearing this belt, your Strength score changes to 21. If your Strength is already\nequal to or greater than 21, the item has no effect on you.",
      "value": 13000,
      "rarity": 4,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Berserker Axe",
      "desc": "You gain +1 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon your hit point maximum increased by 1 for each level you have attained.",
      "value": null,
      "rarity": 4,
      "weight": 5,
      "category": "Weapon",
      "properties": "Cursed. \nSee DMG page 155.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Bioluminescent Fluid Lantern",
      "desc": "Shake this lantern well and you get 2d4 hours of light. It takes a standard action to shake the lantern and requires 8 hours to 'recharge'.",
      "value": 100,
      "rarity": 4,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Black Opal",
      "desc": "Black Opal has a greenish hue with black mottling and gold flecks. Usually found in ancient hot springs, the gem is tumbled smooth and cut cabochon. The phrase in the north \"Black as an opal\" is used as a subtle form of praise for kind-hearted rogues and the like.\t",
      "value": 1000,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Black Pearl",
      "desc": "A dark blue-black Pearl.",
      "value": 500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blacksalt\u2019s Luckmaker",
      "desc": "A worn coin with notched edges.",
      "value": 200,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "This coin will always come up heads. It takes on the appearance of any other coinage it is mixed in with, but retains its notched edges.",
      "requirements": null
    },
    {
      "name": "Bleeding Rock",
      "desc": "A hard, roughly cut piece of basalt rock which bleeds when pressure is applies to it.",
      "value": 300,
      "rarity": 4,
      "weight": 3,
      "category": "Wondrous Item",
      "properties": "The rock has a soft limit of 800ml blood a day.",
      "requirements": null
    },
    {
      "name": "Blindfold of Reading",
      "desc": "Allows comprehension of all written languages. Unfortunately, said comprehension is only granted when the blindfold is worn over the eyes - meaning you cannot see to read anything. Perhaps your group can find a work around?",
      "value": 100,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blindfold of Trap Awareness",
      "desc": "Semi-reliable Blindfold of Trap Awareness, sends shivers down the wearer\u2019s spine when traps are near \u2013 or at random times.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blood Scabbard",
      "desc": "A scabbard stained the dark color of rust. Any blade which is placed within the scabbard will emerge covered in a sheen of blood.",
      "value": 3000,
      "rarity": 4,
      "weight": 2,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blue Sapphire Ring",
      "desc": "A silver ring with a transparent blue-white sapphire.",
      "value": 1000,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blue Spinel Ring",
      "desc": "A silver ring with a Blue Spinel gemstone embedded on it.",
      "value": 500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bolt of Chaos",
      "desc": "Crossbow bolt of chaos \u2013 1 random effect on hit",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bone Crushing Mace",
      "desc": "Bone crushing mace \u2013 critical renders limb useless; two handed by any smaller than large",
      "value": null,
      "rarity": 4,
      "weight": 4,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bone Stylus",
      "desc": "Write the name of your antagonist in your flesh and he will leave you be. Causes one hit point of damage for every letter inscribed in the bearer's flesh. Lasts until the damage is healed.",
      "value": null,
      "rarity": 4,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Piercing | Finesse, Light",
      "requirements": null
    },
    {
      "name": "Booming Scepter",
      "desc": "An elegant, decorative hand held scepter made of bronze and small jewels. You can hear a mild humming resonance when held to your ear.",
      "value": 500,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Speaking directly into the scepter causes your voice to amplify so that it can be heard for 300 ft around for one minute. It requires 8 hours to build up its potency again.",
      "requirements": null
    },
    {
      "name": "Boots of Feral Leaping",
      "desc": "Plain leather boots, tattered and worn, but glistening with a soft white light similar to the sunlight reflecting off freshly fallen snow.",
      "value": 1500,
      "rarity": 4,
      "weight": 2,
      "category": "Armor",
      "properties": "When you wear these boots you can instill your leaps with incredible bursts of power. As a bonus action, you can attempt to leap. Make a DC16 Strength check: if you are successful, you can leap either 15 feet vertically or 20 feet horizontally. On a failure, you are knocked prone where you stand.",
      "requirements": null
    },
    {
      "name": "Boots of Levitation",
      "desc": "While you wear these boots, you can use an action to cast the levitate spell on yourself at will. ",
      "value": 4000,
      "rarity": 4,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Boots of Speed",
      "desc": "While you wear these boots, you can use a bonus action and click the boots' heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect. When the boots' property has been used for a total of 10 minutes, the magic ceases to function until you finish a long rest. ",
      "value": 4000,
      "rarity": 4,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Bottle of Giant's Urine",
      "desc": "This bottle stinks before it's even been opened. The stench of it's contents will protect whomever can stomach to wear it from almost any wandering predators. It's very difficult to get said stench out of adventuring gear, however. Potency may vary on weather, but it should ward of predators for at least a day or two.",
      "value": 200,
      "rarity": 4,
      "weight": 1,
      "category": "Potion",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bottle Stopper",
      "desc": "A reusable bottle cork embossed with gold leaf and set with amethysts.",
      "value": 750,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bowl of Commanding Water Elementals",
      "desc": "While this bowl is filled with water, you can use an action to speak the bowl's command word and summon a water elemental, as if you had cast the conjure elemental spell. The bowl can't be used this way again\nuntil the next dawn. The bowl is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons.",
      "value": 8000,
      "rarity": 4,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bracers of Defense",
      "desc": "While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.\n",
      "value": 6000,
      "rarity": 4,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Brazier of Commanding Fire Elementals",
      "desc": "While a fire burns in this brass brazier, you can use an action to speak the brazier's command word and summon a fire elemental, as if you had cast the conjure elemental spell. The brazier can't be used this way again until the next dawn. ",
      "value": 8000,
      "rarity": 4,
      "weight": 5,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Buckler of Friendship",
      "desc": "This buckler has been enchanted with the power to protect you and your allies.",
      "value": null,
      "rarity": 4,
      "weight": 6,
      "category": "Armor",
      "properties": "For one round, all allies gain +1 AC.",
      "requirements": null
    },
    {
      "name": "Bullet Bag",
      "desc": "A small bag containing 58 clay sling bullets. Each bullet has a 12 gp opal hidden inside.",
      "value": 696,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Canary Diamond",
      "desc": "A diamond of incredible beauty which slowly shifts its color from the purest white to canary to blue to black and back again.",
      "value": 250,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Carlin's Courageous Chickens",
      "desc": "These three chickens have been trained to check for traps, unfortunately they are not very good at it. Once released, each chicken will roam a dungeon at 30 feet a round and will walk in the direction of any nearby traps. If there are no nearby traps, they will walk in the direction that the players imagine there to be traps (they are prone to getting caught up in the moment). Each chicken will accidentally set off any trap it is feasible for it to set off and be killed by the trap. The chicken have name tags and are called Dara, Demi and Miki.",
      "value": 0.2,
      "rarity": 4,
      "weight": 18,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ceremonial Dagger",
      "desc": "This is a ceremonial dagger made of electrum with a black pearl in it's pommel.",
      "value": 750,
      "rarity": 4,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Chimera's Mantel",
      "desc": "This Cloak is woven together from the fur of a lion and goat over the skin of a serpent. It bears the emblem of house Chimera.",
      "value": 5000,
      "rarity": 4,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": "While wearing this cloak and attuned to it, you gain fire resistance. In addition you can use your action to exhale fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 7d8 fire damage on a failed save, or half as much damage on a successful one. Once you use this ability, you cannot do so again until you take a short rest.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Cinder Glove",
      "desc": "A left-handed glove. It remains warm regardless of atmosphere, and is almost painfully hot to be touched with.",
      "value": 150,
      "rarity": 4,
      "weight": null,
      "category": "Armor",
      "properties": "Rubbing the fingertips of this glove together creates flames that can ignite easily flammable objects. Holding a creature with it causes painful burns that will blister the skin, and unarmed strikes with this glove deal an additional 1 fire damage.",
      "requirements": null
    },
    {
      "name": "Circlet of Inconsolable Weeping",
      "desc": "Cursed. Anything who puts on this circlet is sent into an irreversible state of misery for 1d4 hours.",
      "value": 400,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Coiling Rope (50 feet)",
      "desc": "This rope coils itself after 10 rounds of being uncoiled, regardless of what is happening to it. It will undo all knots and will wind itself up around one end (always the same end). This process always takes 1 round.",
      "value": 800,
      "rarity": 4,
      "weight": 5,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Collapsible Rod",
      "desc": "1\u2019, 10\u2019, or 20\u2019 \u2013 any size you need!",
      "value": 500,
      "rarity": 4,
      "weight": 10,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Countdown Cutlass",
      "desc": "A large sword with jewels that sequentially light up after activation. After the last jewel is lit, the sword will explode!",
      "value": 3000,
      "rarity": 4,
      "weight": 3,
      "category": "Wondrous Item",
      "properties": "Each time an attack roll with the Countdown Cutlass succeeds, one of the 10 gemstones illuminates. Upon a successful hit with 10 stones illuminated (the 11th hit), the item explodes, dealing 4d8 fire damage in a 10-foot radius centered around the cutlass. The cutlass is consumed and cannot be remade.",
      "requirements": null
    },
    {
      "name": "Cowardly Blade",
      "desc": "A normal, if not well-crafted looking shortsword. There is a sigil of a chicken on the bottom of the pommel.",
      "value": 0,
      "rarity": 4,
      "weight": null,
      "category": "Weapon",
      "properties": "Damage: 1d6+1 slashing (considered magical). If the wielder receives a critical hit, faces imminent death, or is subjected to a fear effect, the sword falls to pieces.",
      "requirements": null
    },
    {
      "name": "Crate of Chaos Mushrooms",
      "desc": "This wooden crate is about 60cm by 60cm by 40cm, with 'Chaos Mushrooms' burned into the lid in Sylvan. It fizzes with a faint magical aura, and smells delicious",
      "value": 2000,
      "rarity": 4,
      "weight": 30,
      "category": "Treasure",
      "properties": "The box contains 1d10+4 'Chaos Mushrooms', which are considered a delecacy at Fey dinner parties. If a creature eats one of the Chaos Mushrooms, they must roll on the Wild Magic Surge table (PHB, p104) and are subject to the result. Each mushroom eaten requires a seperate roll. ",
      "requirements": null
    },
    {
      "name": "Crescent Armor Spikes",
      "desc": "A set of Armor Spikes made out of thick, sharp silver. They can be attached to full or half-plate, and behave like normal armor spikes. However, they grow faintly in total darkness - - enough for the wearer to see 5 ft, or for another person to see the wearer from up to 50 ft away.",
      "value": 650,
      "rarity": 4,
      "weight": 10,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Crystal Prism",
      "desc": "Crystal prism (d20 x 10 gp)",
      "value": 200,
      "rarity": 4,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Cursed Tarot Cards",
      "desc": "Demonic themed tarot/playing cards \u2013 extra planar repercussions based on game played; tarot tales come true",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dagger of Bleeding",
      "desc": "DC save to avoid bleeding damage",
      "value": null,
      "rarity": 4,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Piercing; Finesse, Light, Range, Thrown",
      "requirements": null
    },
    {
      "name": "Dehydrated Minotaur Helm",
      "desc": "A preserved Minotaur head, old but still retaining most detail. The skin is old and decrepit, yet both the horns have been dipped in molten gold. When donned, this helmet magically causes the wearer to appear as a living minotaur\u2014as well as protecting the wearer against critical hits. The user's stats remain the same, however, and the player only appears to be a minotaur (+4 on intimidate checks).",
      "value": 2400,
      "rarity": 4,
      "weight": 5,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Digiridoom",
      "desc": "A long, Hollow wooden rod with a narrow opening at one end, and a wider one at the other.",
      "value": 250,
      "rarity": 4,
      "weight": null,
      "category": "Weapon",
      "properties": "1d6, Finesse, blowing into the narrow end of the rod creates a circle of silence within 10 feet for as long as the note is sustained.",
      "requirements": null
    },
    {
      "name": "Dowsing Compass",
      "desc": "Like a regular compass, except with multiple needles each pointing toward different useful things, such as: north, the nearest source of fresh water, the strongest nearby evil aura, nearest large concentration of gold, nearest civilization (exact definition of civilization may vary by user), and nearest storm. Needles lengthen and shorten as the object gets closer or further away.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dowsing Rod",
      "desc": "Object of secret door detection/lay out visualization",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dragon Comb Set",
      "desc": "A set of golden combs shapes as dragons, each set with red garnets as the eyes.",
      "value": 750,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dragon Scale Tombe",
      "desc": "Trained rat in wooden cage \u2013 sniffs out gold in exchange for treats. One trail ration per sniff.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Dreaming Nightfeather",
      "desc": "A long, black feather with violet iridescence. The shaft glows softly white in moonlight.",
      "value": 1500,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Holding this feather at night will allow you to fly with a speed of 60 feet, as long as your eyes are closed. The feather ignites in sunlight.",
      "requirements": null
    },
    {
      "name": "Elixir of Madness",
      "desc": "Upon taking a single sip of this potion, you are afflicted with some form of madness. Roll 1d6. On a 1-3 you are afflicted with a short-term madness (DMG p. 259); on a 4-5 you are afflicted with a long-term madness (DMG p. 260); on a 6 you are afflicted with an indefinite madness.(DMG p. 260). The remainder of the elixir loses its magical properties, becoming merely a foul tasting liquid.",
      "value": 100,
      "rarity": 4,
      "weight": null,
      "category": "Potion",
      "properties": "Cursed.",
      "requirements": null
    },
    {
      "name": "Embroidered Gloves",
      "desc": "An embroidered glove set designed for human sized hands, each with jewel chips.",
      "value": 2500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Emerald",
      "desc": "An Emerald is a brilliant green beryl, cleaved along straight box like lines, with rectangular cutting in the finished gem. Emeralds are often connected with health, and so are used ornamentally for such a purpose.",
      "value": 1000,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Extra-Dimensional Flask",
      "desc": "Extra dimensional flask \u2013 holds 1 gallon",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Eye Patch",
      "desc": "An eye patch with a mock eye set in blue sapphire and moonstone.",
      "value": 2500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Filligins Uncontrollable Flame",
      "desc": "A small wooden box with a silver embossed flame on the lid. Inside is a pipe-shape horn that spouts a tiny flame that can not be snuffed. The box is not flammable.",
      "value": 350,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "When the flame ignites an object, the fire cannot be doused by any other method than returning the flame to the pipe. When the fire runs out of fuel, it will reduce to a candle-like flame and remain indefinitely.",
      "requirements": null
    },
    {
      "name": "Filthy Bucket",
      "desc": "A filthy bucket, bolted to the floor, \u00be full of urine, containing silver coins, rings and necklaces.",
      "value": 820,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fire Blanket",
      "desc": "A heavy rug that has been kept rolled up. When unrolled, it reveals that the surface of the rug is permanently on fire. When rolled back up the fire disappears.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fire Opal",
      "desc": "This Fire Opal is a translucent fiery red colour and is set within a broken brooch. It takes no effort to wedge it out.",
      "value": 1000,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Fire Opal Chain",
      "desc": "A fine gold chain set with a fire opal.",
      "value": 2500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Flail of Flagellation",
      "desc": "This imposing, three-headed flail has a +2 bonus to attack and damage rolls. Any creature that takes damage from this flail may immediately make a saving throw against any one ongoing effect that is affecting them.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Weapon",
      "properties": "1d8 Bludgeoning - Two-Handed",
      "requirements": null
    },
    {
      "name": "Frostbite Lilly",
      "desc": "A pure white lily that becomes rigid when picked. Its petals are icy cold and shatter like glass if mishandled.",
      "value": 150,
      "rarity": 4,
      "weight": null,
      "category": "Potion",
      "properties": "If kept intact, this flower will refrigerate any container smaller than a 6x6x6 cube for up to one week. The six petals may be plucked and crushed, creating a sheen of ice in a 10 foot radius. If used over water, this will freeze 3 inches thick.",
      "requirements": null
    },
    {
      "name": "Gauntlets",
      "desc": "The curse of the gauntlets was that no magic would ever help you, beneficial or baneful and anything you were in contact with would lose its magical properties while you're touching it. found out the contact one when visiting flying mage's tower. I was no longer welcome there, but with certain classes the gloves are pretty sweet even considering the downside. Oh also the curse had a very specific trigger, the gauntlets could only be removed if you cast remove curse on them and then had a chaotic neutral halfling pull them off of you with the intention of stealing them. even if you hacked your arms off and then had regeneration cast on you your hands would grow back with the gauntlets on them.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Giant Temple Candles",
      "desc": "Six giant temple candles. Each is 6\u2019 tall, 1\u2019 thick, and weighs 100 lbs. They are made of fine white wax, rolled in gold dust, and set with emeralds. (320 gps each)",
      "value": 1920,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Girdle of Femininity/Masculinity",
      "desc": "The cursed Girdle of Femininity and Masculinity, a rare yet oft-discussed magical item, is wrought with a most powerful magic. Anyone unfortunate enough to secure it around their waist instantly finds their gender to be transformed. It is said that not fifty years past, a nameless court jester was beheaded for presenting the girdle as a gift to Duke Lobelahn's lover.\t",
      "value": 200,
      "rarity": 4,
      "weight": 2,
      "category": "Wondrous Item",
      "properties": "Changes the gender of the wearer.\nRequires \"Remove Curse\".",
      "requirements": null
    },
    {
      "name": "Gold Circlet",
      "desc": "A gold circlet set with four aquamarines.",
      "value": 2500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gold Idol",
      "desc": "A small gold idol.",
      "value": 750,
      "rarity": 4,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gold Plated Idols",
      "desc": "Gold plated idols \u2013 possession = death penalty",
      "value": 160,
      "rarity": 4,
      "weight": null,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Grog of Substantial Whimsy",
      "desc": "http://www.dandwiki.com/wiki/Grog_of_Susbtantial_Whimsy_%283.5e_Equipment%29",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Potion",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hammer of Thunderous Power",
      "desc": "Thunder Hammer \u2013 deafening or stunned, DC save, 40\u2019 radius",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Harp",
      "desc": "A carved harp of exotic wood with an ivory inlay and zircon gems.",
      "value": 750,
      "rarity": 4,
      "weight": 80,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Headband of Enslavement",
      "desc": "Description needed.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Headdress of the Dawn Dancer",
      "desc": "At the end of a long rest, a Bard attuned to this item may perform a dancing ritual while wearing it. That bard makes a Performance check. Each creature that watches the whole ritual performance may replace their result for one attack roll, ability check, or saving throw with the result of the bard's performance check. The ritual performance takes 5 minutes to complete. ",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Helm of Confusion",
      "desc": " Helm \u2013 cherubic infant embellishment, emits confusion spell at wil",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Helm of Unsurvivable Knowledge",
      "desc": "A 'God-Helmet' that explained the universe when you put it on. It usually just fried your brain though, small chance of enlightenment or instant death.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hollow Glass Sphere",
      "desc": "A hollow glass sphere of surprising proportions \u2013 nearly three meters across. If it is broken those nearby will catch the barest scent of alien perfumes, hinting at strange lands belonging to the ancient time when the sphere was first forged and air trapped within it.",
      "value": 1000,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hyperstone",
      "desc": "Once per day this item grants one extra attack for it's user.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Javelin of Explosions",
      "desc": "5x range, normal range 5x dmg, 2xs range = 4xs dmg, 3xs range = 3xs dmg, etc\u2026 - explodes & destroyed after use except at 5xs or 4xs range",
      "value": null,
      "rarity": 4,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d6 Piercing - Simple - Thrown - Range: 30/120",
      "requirements": null
    },
    {
      "name": "Jeweled Anklet",
      "desc": "A jeweled anklet.",
      "value": 2500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Lost Diamond",
      "desc": "A sizeable cut diamond with bluish tint.",
      "value": 500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": "Whenever this diamond is sought, it has a DC 12 to be found. If it is not found, it is in the ethereal plane, and remains there for 30 minutes until reappearing.",
      "requirements": null
    },
    {
      "name": "Magmatic Elixir",
      "desc": "A viscous potion in a clear glass bottle. It is uncomfortably hot to hold, and glows a faint orange in darkness.",
      "value": 150,
      "rarity": 4,
      "weight": null,
      "category": "Potion",
      "properties": "When you drink this potion, make a constitution saving throw with a DC of 14. If you fail the save, you painfully vomit the substance, and suffer 2d6 fire damage. Otherwise, you gain the ability to breath fire for ten minutes. Breathing on enemies deals 2d6 + your current level in damage to foes in a 15 foot line, and ignites flammable objects.",
      "requirements": null
    },
    {
      "name": "Magnetic Grappling Hook",
      "desc": "Self-guided grappling hook - +10 to ranged attack roll for aiming",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Malluf's Not-Quite-Full, Not-Quite-Empty Quiver",
      "desc": " Near-Empty-Ever-Full One Arrow Quiver \u2013 always only 1 arrow, will reappear after being shot.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Mantle Set",
      "desc": "An embroidered silk and velvet mantle set with numerous moonstones. ",
      "value": 2500,
      "rarity": 4,
      "weight": 5,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Masterpiece Painting",
      "desc": "An old painting, a lot treasure by a painter of some renoun.",
      "value": 2500,
      "rarity": 4,
      "weight": 10,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Mongrel Collar",
      "desc": "A black leather collar, stiff from wear and riddled with bite marks.",
      "value": 75,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "While wearing this collar, you are unable to speak. At most, you may utter grunts and yelps like a dog.",
      "requirements": null
    },
    {
      "name": "Music Box",
      "desc": "An ornate golden music box.",
      "value": 2500,
      "rarity": 4,
      "weight": 3,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Necromancer's Saddle",
      "desc": "Black leather saddle with streaks of red through the leather itself. A small amount of black smoke emanates from the saddle when it is holding still.",
      "value": 2000,
      "rarity": 4,
      "weight": 30,
      "category": "Wondrous Item",
      "properties": "You can use an action to place this saddle on the corpse or skeleton of a Large creature and animate it as an undead mount. The undead creature's bones shift as necessary to create something similar to a warhorse skeleton (MM 273), which follows your mental commands as long as you are riding it. The effect lasts until you remove the saddle, or until the next dawn. When the effect ends, the undead creature crumbles into dust.",
      "requirements": null
    },
    {
      "name": "Nightmare Pipeweed",
      "desc": "A common looking pipeweed, which smells only a little sweeter than the most common varieties. Close inspection reveals occasional black burrs mixed among the leaves.",
      "value": 150,
      "rarity": 4,
      "weight": null,
      "category": "Potion",
      "properties": "Smoking this pipeweed causes a brief feeling of relaxation and elation. A few minutes in, however, the experience falls into terror. The smoker will hallucinate that they are being pursued by a nightmarish figment that is never fully visible. The pursuer will never actually reach them, but if the smoker fails a wisdom check of DC 15, they will be compelled to flee in a random direction for ten minutes.",
      "requirements": null
    },
    {
      "name": "Obsidian Statuette",
      "desc": "An obsidian statuette of a demon with a golden inlay and fittings.",
      "value": 750,
      "rarity": 4,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Olivewood Staff",
      "desc": "A very heavy, hard staff engrained with beautiful swirling, natural patterns across the wood. It has a large diameter and is slightly tapered to be thicker at one end. It can be used like a normal quarterstaff, except at 1d8 damage. However, in the hands of a Druid or a 5th-level Ranger, the staff's thicker tip can be lit at-will like a Sunrod of any color. The wielder is also capable of easily distinguishing any non-natural (magical) trees, and can speak Entish (so long as they could already speak Elvish).",
      "value": 4000,
      "rarity": 4,
      "weight": 8,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Opal",
      "desc": "A translucent pale blue Opal with green and golden mottling.",
      "value": 1000,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ornate Longsword",
      "desc": "This longsword seems to have been made more for show than for use. It is silver-plated steel and has a jet gemstone set inside the hilt.",
      "value": 750,
      "rarity": 4,
      "weight": 5,
      "category": "Treasure",
      "properties": "1d8 Slashing - Versatile (1d10)",
      "requirements": "Marial Weapon Expertise"
    },
    {
      "name": "Outdated Book of Prophecies",
      "desc": "A small, leather-bound book filled with prophecies. All of them will be found to be true, but the last of them is dated just a few weeks ago.",
      "value": 150,
      "rarity": 4,
      "weight": null,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Elvish"
    },
    {
      "name": "Pearl Necklace",
      "desc": "A necklace string of small pink pearls.",
      "value": 2500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Peridot Gemstone",
      "desc": "A circular Peridot of rich green colouring with milky inclusions.",
      "value": 500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Philter of Blave",
      "desc": "A viscous, golden liquid inside of a corked glass vial.",
      "value": 1000,
      "rarity": 4,
      "weight": 1,
      "category": "Potion",
      "properties": "After drinking the potion, you are compelled to speak first in every conversation and become unable to say anything which is not a deliberate and blatant lie. You believe the lies yourself [and reality itself can alter in minor ways, as determined by the DM, to reflect what you say. Your lies cannot place yourself or any other creature in immediate physical harm]. For the duration of the effect, you automatically succeed on saving throws against any spell or effect which would compel you to speak the truth. These effects last for 1 hour.",
      "requirements": null
    },
    {
      "name": "Platinum Bracelet",
      "desc": "A platinum bracelet set with a sapphire.",
      "value": 2500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pouch of Healing Potions",
      "desc": "A large carry pouch made from the skin of a monkey. Inside are 1d6 Potions of Superior Healing. ",
      "value": 750,
      "rarity": 4,
      "weight": 0.5,
      "category": "Potion",
      "properties": "You regain 8d4 + 8 hit points when you drink this potion. \nThe potion's red liquid glimmers when agitated.",
      "requirements": null
    },
    {
      "name": "Prism of Paranoia",
      "desc": "This cursed item hovers just behind whoever it is attuned to, generating startling sounds and lights at random intervals. A character attuned to the Prism of Paranoia cannot sleep or benefit from long or short rests, but has +10 to passive Perception.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Rafting Cloak",
      "desc": "An cherrywood cloak that repels water perfectly.",
      "value": 550,
      "rarity": 4,
      "weight": null,
      "category": "Armor",
      "properties": "This cloak may be spread like a blanket over open water. When it is, it can support up to 300 lbs as a raft, staying perfectly buoyant and supportive even in moderately choppy conditions.",
      "requirements": null
    },
    {
      "name": "Ring Mail of Three Wishes",
      "desc": "This armor is Leather Armor with heavy rings sewn into it. The rings help reinforce the armor against blows from swords and axes. Three rings across the chest are made of brilliant gold that sheds dim light similar to daybreak.",
      "value": 1500,
      "rarity": 4,
      "weight": 40,
      "category": "Armor",
      "properties": "When you are hit by a melee or ranged attack while wearing this armor, you can use your reaction to wish that you hadn't been hit. The attack deals no damage, but the armor class provided by the armor decreases by 1. After the third wish, the armor's rings vanish and it becomes nonmagical leather armor.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Ring of Contrariness",
      "desc": "",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Cursed. Once attuned, the wearer of this ring cannot take it off and is forced to disagree with any idea, statement or action. On top of that, the wearer is also forced to resist any attempt to remove the curse.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Rod of Rulership",
      "desc": "You can use an action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. While charmed in this way, the creature regards you as its trusted leader. If harmed by you or your companions, or commanded to do something contrary to its nature, a target ceases to be charmed in this way. The rod can't be used again until the next dawn.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Rod",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Shield of Bashing",
      "desc": "A tough metal shield with a large stud in the center.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Weapon",
      "properties": "When running to a target from at least 20 feet. The target must make a Constitution saving throw of 14 or be knocked prone. Following attacks would then have advantage.",
      "requirements": null
    },
    {
      "name": "Silver and Gold Brooch",
      "desc": "A simple but finely made silver and gold brooch.",
      "value": 750,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silver Chalice",
      "desc": "A silver chalice set with moonstones.",
      "value": 750,
      "rarity": 4,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silver Platter of Feathers",
      "desc": "A light silver platter, 6 inches in diameter, etched with ornate feathers.",
      "value": 1250,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Anything placed on this platter has no weight whatsoever. The item must be fully supported by the platter and regains its weight over 1 second after leaving the platter",
      "requirements": null
    },
    {
      "name": "Spire of the Manticore",
      "desc": "You gain a +1 bonus to attack and damage rolls with this magical weapon, and it deals an additional 1d8 poison damage. The damage increases by 1d8 if the target is a Monstrosity or Beast.\n\nThis weapon has 7 spikes hidden within the Barb at the end of the pike. As a ranged attack, you can launch a single spike at a target, each having a range of 100/200 ft. Each of these spikes deal 1d8 piercing damage. Every Morning at dawn, this weapon regrows all of it's spikes.",
      "value": 5000,
      "rarity": 4,
      "weight": 18,
      "category": "Weapon",
      "properties": "Heavy, Reach, Two-Handed",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Star of Morning's Glory",
      "desc": "This Morningstar is made of solid wrought steel, with a heavy spiked head. It behaves like a normal Morningstar, except within 60ft of Evil and Undead creatures and within an hour of Dawn. In any of these cases, the head glows like the tip of a Sunrod, and it becomes a Morningstar +2 which stuns for 1d4+1 rnds on a Critical. Fortitude saves vs stun, with a DC equal to the player's attack roll. Cannot be used by Evil creatures.",
      "value": 3200,
      "rarity": 4,
      "weight": 8,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Star Ruby",
      "desc": "A translucent ruby with a white star-shaped center.",
      "value": 1000,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Star Sapphire",
      "desc": "Star Sapphire is a precious variation of the sapphire, however is more translucent, with a white star highlighted in its center. A star sapphire has been known to ornament devices which protect against magic.\t",
      "value": 1000,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Stones of Ruin",
      "desc": "A simple leather pouch filled with 4 small runestones.",
      "value": 5,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Requires attunement by a druid. A pouch of stone runes that predict the worst event that will happen before the next full moon. Using the runes makes the events it predicts more likely to happen.",
      "requirements": null
    },
    {
      "name": "Sun Gem",
      "desc": "This round and polished stone glows with a fierce light and seems to dispel the shadows around you.\t",
      "value": 500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": "Properties of a torch.",
      "requirements": null
    },
    {
      "name": "Sword of Bleeding",
      "desc": "A sharp one-sided blade that is slightly curved.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Weapon",
      "properties": "The creature must a Constitution saving throw of 14 or take an addition 1d6. The creature makes this check every turn until succeeded",
      "requirements": null
    },
    {
      "name": "Telescoping Glaive",
      "desc": "This is a magical Glaive, with an ornately decorated shaft made of solid (but light) steel. The blade is made of silver, and floats near the end unattached to the shaft. Three keywords act on this weapon: anda, sinta, and pahta (long, short, and closed, in Elven). Anda is the longest extent, and the weapon acts as a two-handed glaive. Sinta makes the weapon shorten and behave as a one-handed axe, and pahta shortens the weapon to throwing-axe size. The blade also changes shape and position to fit these weapon styles.",
      "value": 1400,
      "rarity": 4,
      "weight": 3,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Clegane Bowl",
      "desc": "This large basin has bloodstains permanently ingrained in it. Any liquid placed in the Clegane Bowl immediately turns into Potion of Greater Hype. When consumed, a dose of this potion doubles the Strength score of the user for 1 hour, up to a maximum of 30 Strength.",
      "value": null,
      "rarity": 4,
      "weight": 20,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Iron Thorn",
      "desc": "This wrought-iron band is pitted and stained as if by acid. Between the two thorns formed by the band, a crude lump of silver on its head suggests the image of a skull against a black field, perhaps the symbol of Myrkul, Lord of Bones.",
      "value": 100,
      "rarity": 4,
      "weight": 1,
      "category": "Ring",
      "properties": "Upon attunement this ring changes it's wearer's appearance to that of a Zombie. Requires \"Remove Curse\" to remove.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Tome of Alchemy",
      "desc": "A large tome, bound in leather and clasped with gold. A closer inspection of this volume will reveal that each page is perfectly preserved dragon scale which has been inscribed with the black blood of a fiend. The book describes the four spirits (quicksilver, orpiment, sal ammoniac, sulfur) and seven bodies (gold, silver, iron, quicksilver, lead, tin, copper) of traditional alchemy.",
      "value": 200,
      "rarity": 4,
      "weight": null,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Common"
    },
    {
      "name": "Topaz",
      "desc": "A yellow facet cut Topaz gemstone.",
      "value": 500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Uncut Diamond",
      "desc": "An uncut chunk of raw diamond. It is easily the size of a dwarf\u2019s fist and is likely worth a substantial sum to the right jewel maker.",
      "value": 1000,
      "rarity": 4,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Wand of Arcane Errata",
      "desc": "A wand with runic inscriptions that have been scratched out and rewritten several times",
      "value": 250,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Upon invoking the activation word, the wand will create a random effect. d20: 1-5: You or a target is made clean. 6-10: Glowing orbs dance around you as the dancing lights spell. 11-15: Conjures 1d4 loaves of warm bread. 16-19: The wand releases 20 gallons of pure, cool water. 20: The wand unfolded into a thin effigy of a man, who will serve you for 1 hour. Its strength is 6 and has 1 hp.",
      "requirements": null
    },
    {
      "name": "Wand of Prestidigitation",
      "desc": "A black and white painted Oakwood wand, with card suits painted down the length of the wand beyond the handle.",
      "value": 250,
      "rarity": 4,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": "Allows the user to cast the spell Prestidigitation without the need of somatic or visual components on any object within 25 feet.  The staff has 5 charges that refill completely every morning.",
      "requirements": null
    },
    {
      "name": "War Mask",
      "desc": "This mask has been painted gold and appears to be a ceremonial mask worn to battle.",
      "value": 750,
      "rarity": 4,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Wellwizard's Teacups",
      "desc": "A pair of elegantly decorated teacups that always feel warm to the touch. If filled with any liquid, it will somehow seep through invisible cracks in the cup.",
      "value": 500,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": "When held, the teacups will fill with hot, pleasant tea. If a pleasant conversation ensues, the teacups will refill up to three times. If someone holding the cups tells a lie, the tea will seep through invisible cracks.",
      "requirements": null
    },
    {
      "name": "Whispering Bauble",
      "desc": "A glass orb with a small slit opening, braced by fine grey metal.",
      "value": 150,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "A user may speak into this bauble for up to one minute. After this period, anyone who places the bauble to their ear will hear the message. The message can be replayed multiple times, until a new message is purposefully spoken into it.",
      "requirements": null
    },
    {
      "name": "Yellow Sapphire",
      "desc": "A transparent fiery yellow or yellow\u00b7 green Sapphire.",
      "value": 1000,
      "rarity": 4,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Potion of Extra Health",
      "desc": "A foul smelling liquid that shifts between bright red and burgundy as it swirls around it's flask.",
      "value": 3500,
      "rarity": 4,
      "weight": null,
      "category": "Potion",
      "properties": "User gains 1d2 HP per level and will regenerate 1d2HP per round. \nThe effect is lost the next time the drinker goes to the toilet.",
      "requirements": null
    },
    {
      "name": "Maester Sword",
      "desc": "A shiny silver sword with a purple hilt. There are three orange pommels at the center of the hilt that each resembles a triangle, placed together so they create a larger triangle as a group. The guard is shaped like two outstretched wings and along the blade of this sword are etchings in Elvish that read \"The Blade of Evil's Bane\". Looking into the history of this sword will tell of an order of Maesters who, upon growing weary of merely recording the passage of history, decided to make it themselves.",
      "value": null,
      "rarity": 4,
      "weight": 3,
      "category": "Weapon",
      "properties": "1d8 Slashing - Versatile (1d10)",
      "requirements": "Martial Weapon Expertise"
    },
    {
      "name": "Gale Boomerang",
      "desc": "This oddly-shaped weapon looks like it might be made of roc\u2019s feathers, bound together and strengthened by magic. There is a small emerald set in the weapon\u2019s vertex amidst gilded furnishings that mark it as a weapon of some distinction.",
      "value": 900,
      "rarity": 4,
      "weight": 2,
      "category": "Weapon",
      "properties": "1d4 + 2 Bludgeoning - Thrown (Range: 30/90)\nSpecial: Does not require direct line of sight, due to a curved trajectory.\nOnce per day, you can cast the Gust of Wind (DC 15) spell as a free action with a successful attack.",
      "requirements": null
    },
    {
      "name": "Potion of Purple Ooze",
      "desc": "A potion vial containing a purple concoction, labelled simply \"Ooze\". The bubbling, slimy fluid is dark purple with emerald accretions on the side. It smells like butyric acid (vomit) and tastes worse.",
      "value": 900,
      "rarity": 4,
      "weight": null,
      "category": "Potion",
      "properties": "Drinking this potion will turn you into an ooze for 1d8+1 days.",
      "requirements": null
    },
    {
      "name": "Power Treads",
      "desc": "Grants the following, +2 fort saves, +2 reflex saves, +2 will saves",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Grants +2 fort saves, +2 reflex saves, +2 will saves",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Pregnancy Figure",
      "desc": "The tiny figurine of a fertility goddess, carved from a rare, fist-sized pearl. Found deep beneath the surface of the earth, for two weeks after it is brought to the surface any woman touching the figurines will become pregnant. After the two week period has expired, the figure will never work again (or until returned to its original spot for 1d12 months).",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ring of Ghosts",
      "desc": "Ring of Ghosts: the wearer of the ring can see and communicate with the ghost of any intelligent being that has died in the past 24 hours within a 1 mile radius. After the 24 hours, the ghost disappears. The ghosts are only visible and audible to the wearer, but remain intangible. Also, the ghosts likely aren't very cooperative if the players killed them.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Ring",
      "properties": " ",
      "requirements": null
    },
    {
      "name": "Blood Scroll",
      "desc": "A scroll that when signed with blood would enter the participant into an assassin ranking system. Upon the scroll was also an arrow that always pointed to the assassin that was a rank above you. The goal is to reach rank 1 for a single wish however the only way to gain a rank is to kill the assassin above you. The Rank is infamous and well paid for their trade so strong assassins are always waiting for a rank opening.",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Essence Extractor",
      "desc": "Extract the consciousness of a pacified or willing being to be stored within. The consciousness can be injected into the still warm body of a dead being, giving them a new body to inhabit. ",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Helpless Bandage",
      "desc": "A person bandaged with this item will be unable to do anything for themselves and will rely on others for everything. They will not remove the bandage until the wound is healed.\n",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ill-Fated Necklace",
      "desc": "The wearer of this necklace has a general feeling that he is safe. The opposite is, in fact, the case. Any time something bad happens to the group, the wearer of this necklace bears the brunt of the misfortune",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Permanently Damp Rag",
      "desc": "A damp rag which carries a faint musty smell.",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Can be wrung out infinitely to produce foul tasting water.",
      "requirements": null
    },
    {
      "name": "Polymorphed Adventurers Potions",
      "desc": "The potions are a polymorphed group of famous heroes transformed into oozes. Anyone with the ability to communicate telepathically are able to speak with them (and probably help them get back to normal).",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "1d20 Ammunition +3",
      "desc": "You have a bonus to attack and damage rolls made with this piece of magic ammunition. The bonus is determined by the rarity of the ammunition. Once it hit a target, the ammunition is no longer magical. Value listed is for individual units.",
      "value": 400,
      "rarity": 5,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "2d4 + 2 Arrows of Slaying",
      "desc": "An arrow of slaying is a magic weapon meant to slay a particular kind of creature. Some are more focused than others; for example, there are both arrows of dragon slaying and arrows of blue dragon slaying. If a creature belonging to the type, race, or group associated with an arrow of slaying takes damage from the arrow, the creature must make a DC 17 Constitution saving throw, taking an extra 6d10 piercing damage on a failed save, or half as much extra damage on a successful one. Once an arrow of slaying deals its extra damage to a creature, it becomes a nonmagical arrow. Other types of magic ammunition of this kind exist, such as bolts of slaying meant for a crossbow, though arrows are most common. Value listed is for each arrow.",
      "value": 600,
      "rarity": 5,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Amulet of the Planes",
      "desc": "While wearing this amulet, you can use an action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence check. On a successful check, you cast the plane shift spell. On a failure , you and each creature and object within 15 feet of you travel to a random destination.\nRoll a dlOO. On a 1- 60, you travel to a random location on the plane you named. On a 61- 100, you travel to a randomly determined plane of existence. ",
      "value": 160000,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Amulets of Inedibility",
      "desc": "These two amulets are enchanted as a pair and both must be worn at the same time for the enchantment to work. Anything wearing it cannot be considered as food.",
      "value": 1000,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Anderson's Medallion",
      "desc": "Once per day, you can remove AC of target granted by armor, last until end of your next turn. User takes -2 to AC for same duration. (I think lasting until the end of combat might be a bit op, also  I have named it after Hans Christian Anderson because it makes me thing of the Emperor's New Clothes)",
      "value": 400,
      "rarity": 5,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Animated Rope",
      "desc": "Smart 50\u2019 rope \u2013 obeys simple commands, animated like snake",
      "value": 50,
      "rarity": 5,
      "weight": 5,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Animated Shield",
      "desc": "While holding this shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free.",
      "value": 6000,
      "rarity": 5,
      "weight": 6,
      "category": "Armor",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Armor +2",
      "desc": "You have a +2 bonus to AC while wearing this armor.",
      "value": 6000,
      "rarity": 5,
      "weight": 64,
      "category": "Armor",
      "properties": "Light, Medium or Heavy",
      "requirements": null
    },
    {
      "name": "Back to the Beginning Ring",
      "desc": "When you take off this ring and it transports you to where you first put it on and disappears.",
      "value": 9000,
      "rarity": 5,
      "weight": null,
      "category": "Ring",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bag of Devouring",
      "desc": "This bag superficially resembles a bag of holding but is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice. The extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal or vegetable matter placed wholly in the bag is devoured and lost forever. When part of a living creature is placed in the bag, as happens when someone reaches inside it, there is a 50 percent chance that the creature is pulled inside the bag. A creature inside the bag can use its action to try to escape with a successful DC 15 Strength check. Another creature can use its action to reach into the bag to pull a creature out, doing so with a successful DC 20 Strength check (provided it isn't pulled inside the bag first). Any creature that starts its turn inside the bag is devoured, its body destroyed. Inanimate objects can be stored in the bag, which can hold a cubic foot of such material. However, once each day, the bag swallows any objects inside it and spits them out into another plane of existence. The DM determines the time and plane. If the bag is pierced or torn, it is destroyed, and anything contained within it is transported to a random location on the Astral Plane. ",
      "value": 10000,
      "rarity": 5,
      "weight": 15,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bardweave Parisol",
      "desc": "A beautiful, vibrantly colorful cloth parasol with a light wooden handle. The object feels delicate and weightless.",
      "value": 1500,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "As a reaction, you may open this parasol to defend you, provided it is easily reachable on your character. When you make a dexterity save, you may use your reaction to open the magical parasol, giving you resistance to all damage. If you suffer more than 10 damage after this resistance, the parasol is damaged and can no longer protect you. It can be repaired with a sewing kit or a proficient tailor.",
      "requirements": null
    },
    {
      "name": "Belt of Fire Giant Strength",
      "desc": "While wearing this belt, your Strength score changes to 25. If your Strength is already\nequal to or greater than 25, the item has no effect on you.",
      "value": 24000,
      "rarity": 5,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Belt of Frost Giant Strength",
      "desc": "While wearing this belt, your Strength score changes to 23. If your Strength is already\nequal to or greater than 23, the item has no effect on you.",
      "value": 19000,
      "rarity": 5,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Belt of Stone Giant Strength",
      "desc": "While wearing this belt, your Strength score changes to 23. If your Strength is already\nequal to or greater than 23, the item has no effect on you.",
      "value": 19000,
      "rarity": 5,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Black Obelisk",
      "desc": "A plain, unadorned black obelisk. If brought above ground and into the open, the obelisk will draw down a near-constant barrage of lightning to itself \u2013 even if the sky is clear.",
      "value": 17500,
      "rarity": 5,
      "weight": 1000,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Black Sapphire",
      "desc": "A translucent lustrous black Sapphire with glowing highlights.",
      "value": 5000,
      "rarity": 5,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blink Dagger",
      "desc": "Twice per day, whomever users this dagger can instantly teleport up to 30 ft in any direction. Cannot be used if you were attacked since your last turn.",
      "value": 7000,
      "rarity": 5,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4+2 Piercing | Finesse, Light",
      "requirements": null
    },
    {
      "name": "Bloodied Harp",
      "desc": "An old looking brass harp that has only 3 strings left. The strings are flecked with rust, or so it seems. Holding it gives you a feeling of cold anxiety.",
      "value": 2500,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Plucking the harp strings causes you great pain and triggers magical effects. The first string deals 1d6 damage to you, and casts the \"sleep\" spell at first level, using Charisma. The second string deals 2d6 damage to you, and 2d6 damage to all targets within 20 feet. The third string deals 3d6 damage to you, and heals a target in 20 feet for 4d6. You may pluck 3 strings each day.",
      "requirements": null
    },
    {
      "name": "Boots of Dry Land",
      "desc": "The wearer of the boots gains water-walking, with a twist. On any body of salt water, the boots generate a 30 ft. radius of dry, walkable sand beneath the wearer. Which means several party members could benefit from the effect. They functioned for an hour per day, but it didn't have to be continuous.",
      "value": null,
      "rarity": 5,
      "weight": 3,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Brazier of Infinite Imps",
      "desc": "Brazier of infinite imps. 1d4 imps spawn every 24 hours. If they are not killed by the time the brazier spawns a new set, the previous imps die and vanish.",
      "value": 500,
      "rarity": 5,
      "weight": 2,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Buzzing Buckler",
      "desc": "A wooden buckler with a burned-in sigil of a bee on the shield face. It vibrates ferociously when struck.",
      "value": 2500,
      "rarity": 5,
      "weight": null,
      "category": "Armor",
      "properties": "Adds no armor. If you are the victim of a ranged attacked, you may use your reaction to increase your AC by +1. If you choose to do this, and the attack fails to hit you, the projectile is deflected by your shield, and bursts into a cloud of angry bees that will seek the attacker and sting it relentlessly, causing 1d6 poison damage at the beginning of each of their turns for one minute, or until you recall the bees. The victim also suffers disadvantage on attack rolls and can no longer maintain concentration.",
      "requirements": null
    },
    {
      "name": "Candle of Invocation",
      "desc": "This slender taper is dedicated to a deity and shares that deity's alignment. The candle's alignment can be detected with the detect evil and good spell. The DM chooses the god and associated alignment or determines the alignment randomly. The candle's magic is activated when the candle is lit, which requires an action. After burning for 4 hours, the candle is destroyed. You can snuff it out early for use at a later time. Deduct the time it burned in increments of 1 minute from the candle's total burn time. While lit, the candle sheds dim light in a 30-foot radius. Any creature within that light whose alignment matches that of the candle makes attack rolls, saving throws, and ability checks with advantage. In addition, a cleric or druid in the light whose alignment matches the candle's can cast 1st-level spells he or she has prepared without expending spell slots, though the spell's effect is as if cast with a 1st-level slot. Alternatively, when you light the candle for the first time, you can cast the gate spell with it. Doing so destroys the candle.",
      "value": 8400,
      "rarity": 5,
      "weight": 0.5,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Companion Rings",
      "desc": "Two rings, user may opt to take damage for the other person wearing the ring",
      "value": 1000,
      "rarity": 5,
      "weight": null,
      "category": "Ring",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Crown of Fingers",
      "desc": "A crown of severed, mummified fingers. Each finger bears three jeweled rings.",
      "value": 2200,
      "rarity": 5,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Crystal Pyramid",
      "desc": "A finely-crafted, clear crystal pyramid with no noticeable impurities.",
      "value": null,
      "rarity": 5,
      "weight": 1,
      "category": "Treasure",
      "properties": "If a creature focuses on the item for at least 30 seconds,  the creature sees a glimpse of a historical event in extraplanar history and takes 1d4 Int (psychic) damage. The image changes every 30 seconds of concentration and the creature takes 1d4 Int (psychic damage) for every event seen.",
      "requirements": null
    },
    {
      "name": "Cursed Eye",
      "desc": "Allows a blind user to see but at a cost. (will at random cause you to attack others)",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "May attack the player while not connected. (The player has to lack at least one eye) ",
      "requirements": null
    },
    {
      "name": "Dark Gemini Ring",
      "desc": "A set of dark blue rings, which rotate freely against each other, but cannot be separated.",
      "value": 0,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Donning this ring will spawn a replica of you with inverse motivations. The replica will have dark blue eyes, and will seek to ruin you. The ring cannot come off as long as the clone survives, and you always know the direction of the clone.",
      "requirements": null
    },
    {
      "name": "Diamond",
      "desc": "Diamond is a hard clear gem which can be clear blue-white, rich blue, yelow or pink. The hardest of all the gemstones, and among the most valuable. Diamonds are usually found in northern mountains by underground races, and then traded to the surface world.\t",
      "value": 5000,
      "rarity": 5,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Donkey Legs",
      "desc": "These wooden donkey legs can be attached to anything  (but are not strong enough to carry literally anything).  Once attached, the thing will follow you around like a loyal donkey.  For example, you can attach them to a heavy statue and then have it walk itself out of the dungeon.  Donkey legs are as strong as two donkeys!\n",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Earthbreaker Totem",
      "desc": "A thick shaft of wood with totemic carvings. It has a slight gradual spike shape, being thinner and sharper at one end, and thick and flat at the other.",
      "value": 1500,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "You may use your action to plant this into any reasonably soft ground. If the totem takes 15 bludgeoning damage (from being forcibly smashed deeper into the ground), it will trigger an earthquake, causing 4d12 thunder damage to all ground-bound targets within 200 feet. Constructs and buildings are considered vulnerable. Targets within 10 feet of the totem are unaffected.",
      "requirements": null
    },
    {
      "name": "Eldhand's Mind Slug",
      "desc": "In the laboratory, vault, or home of the famed (and thought long dead) Eldhand the Scholar sits a small glass box. Across the lid is a grid of very tiny holes for air. The box contains a pink, slimy slug admidst some wet sawdust. A tag on the box reads \u201cEldhand.\u201d The bug can be killed easily, like any slug. However, placing the slug near one's nose or mouth allows it to crawl up into the player's brain. The player will go into a coma for 3d4 hours and, upon awakening, will find that the voice of Eldhand the Scholar can be heard inside their head. He is quite sarcastic, pessimistic, and usually upset that someone so \u201cpea-brained\u201d ended up finding him. However, he can be convinced to give help in scholarly matters\u2014granting the host +6 on all Knowledge Arcana, Knowledge History, and Spellcraft checks. He is reluctant to give out help unless you have proven yourself a more than worthy host. But he is generally willing to help in exchange for your player eating some odd or expensive food item (plums, goat cheese, and Ruby Port liquor tend to be his favorites).",
      "value": 0,
      "rarity": 5,
      "weight": null,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Encyclopedia Approximatus",
      "desc": "A large, unmarked blue tome. Every page inside is blank.",
      "value": 500,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Speak any subject to its spine and roll 1d4. On a 4, the reader is given a couple pages of accurate and detailed information on the subject (more accurate and detailed the most specific you are). All other rolls provides the user with approximate information, with regular errors. Regardless of accuracy, it's always written in a condescending tone.",
      "requirements": null
    },
    {
      "name": "Fulcrum Ring",
      "desc": "A plain, heavy ring of dark metal. It seems occasionally heavy.",
      "value": 2000,
      "rarity": 5,
      "weight": null,
      "category": "Treasure",
      "properties": "Mundane in most respects--except when pinched hard from the sides, it will refuse to move. It does not need to be worn for this to take effect.",
      "requirements": null
    },
    {
      "name": "Gladiator's Prizeblade",
      "desc": "A high quality, perfectly balanced gladius that is excessively comfortable to wield. The blade only seems to sharpen with use.",
      "value": 4000,
      "rarity": 5,
      "weight": null,
      "category": "Weapon",
      "properties": "1d8, +1 to hit. Whenever you kill a foe in combat, the blade gains an additional +1 slashing damage on a hit, up to 10 total bonus damage. If the wielder is reduced to 0 hit points, the blade dulls and loses its damage bonus in exchange for a -1 damage penalty. The bonus damage then accrues normally by slaying foes.",
      "requirements": null
    },
    {
      "name": "Gold Crown",
      "desc": "A jeweled gold crown of superb quality.",
      "value": 7500,
      "rarity": 5,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gold Jewelry Box",
      "desc": "A solid gold jewelry box with a platinum filigree.",
      "value": 7500,
      "rarity": 5,
      "weight": 5,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Gold Statuette",
      "desc": "A small gold statuette of a man, set with rubies.",
      "value": 7500,
      "rarity": 5,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Harkol's Agonizing Instruments",
      "desc": "A cloth tool-roll that contains six needles of varying thickness. A melody is embroidered on the inside of the roll.",
      "value": 500,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "While humming the melody inscribed in the roll, the needles will move very slowly and very accurately according to the user's will. It would not be possible to cause bodily harm to an unrestrained creature by using these.",
      "requirements": null
    },
    {
      "name": "Heavenly Armor",
      "desc": "A set of enhanced, heavenly armor. Powerful enough to protect and shield a hero on his journey through the the world, or even beyond the Gates of Hell itself. These armors are made for the most faithful and divine mortals and angels alike.\nWhile wearing this armor, you gain a +2 bonus to AC, you have advantage on all saving throws against effects caused by fiends, and it creates an aura in a 5-foot radius around you. Fiends in the aura have disadvantage on saving throws.",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Armor",
      "properties": "Light, Medium or Heavy",
      "requirements": "Requires Attunement\nLawful Good"
    },
    {
      "name": "Ivory Drinking Horn",
      "desc": "A bejeweled ivory drinking horn with gold filigree.",
      "value": 7500,
      "rarity": 5,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jacinth",
      "desc": "A transparent fiery orange gem variety of Zircon.",
      "value": 5000,
      "rarity": 5,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jade Game Board",
      "desc": "An ornate game board made of jade, with 40 solid gold playing pieces.",
      "value": 7500,
      "rarity": 5,
      "weight": 2,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "King's Tears",
      "desc": "King's Tears are very rare and are sometimes called frozen tears. Clear, teardrop-shaped, smooth surfaced, and totally unbreakable so far by any means. These stones are said to be the crystallized tears of long-dead necromancer kings. In each gem can be seen that which the weeping king loved long ago. Their true nature is unknown but suffice it to say that sages prize these gems above all others",
      "value": 5000,
      "rarity": 5,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Links of Truth",
      "desc": "Plain, but exceptionally clean chainmail that feels light, and always cold.",
      "value": 1250,
      "rarity": 5,
      "weight": null,
      "category": "Armor",
      "properties": "Grants 13 AC +Dex. If the bearer tells a lie, the armor will fall into hundreds of metal rings. If the lie is redeemed, the armor will reassemble itself.",
      "requirements": null
    },
    {
      "name": "Mother's Love",
      "desc": "A gold-rimmed cobalt locket inscribed with draconic runes. Inside is a small replaceable portrait.",
      "value": 1250,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Requires attunement by someone of female sex. While wearing this magical item, the wearer gains the following benefits:\n\nWhenever the wearer has to make a death saving throw, they can roll a 1d4 and add the rolled number to the total. This bonus is 1d4+2 if the wearer is pregnant.  The wearer can choose to turn a death saving throw roll into a critical success, but the locket's magic then fades for one full year. The locket can be restored if specifically targeted by a Greater Restoration spell after one month.  The wearer has advantage on Charisma-based skill checks and saving throws against individuals of early childhood.",
      "requirements": null
    },
    {
      "name": "Mysterious Dwarven Club Hammer",
      "desc": "A mysterious ornamental club hammer of dwarf origin, only someone with extensive knowledge of weapons or magic (Eg. Blacksmith, Enchanter, etc) can discover its true meaning.",
      "value": 2700,
      "rarity": 5,
      "weight": 4,
      "category": "Weapon",
      "properties": "Glows when a mimic is near and occasionally at random.\nInstantly kills disguised mimics, forces undisguised mimics to return to hidden form.\n1d3 Bludgeoning Damage.\n\n[Before it is discovered what this item does, the PC knows that it does 1d3 Bludgeoning Damage and glows sometimes, other effects are still present yet the PC is not to be aware of them until true meaning is discovered]",
      "requirements": null
    },
    {
      "name": "Necklace of the Fang Pact",
      "desc": "This fiber necklace contains beads that separate several teeth from a variety of creatures. All together, it can support up to 7 teeth. ",
      "value": 5000,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "While wearing this amulet, you can use an action to sap the remaining essence from a creature that has been brought to 0 hit points. Doing so turns the creature's flesh into ash and forges its life force into a tooth appropriate for its type which magically binds itself to the amulet.\n\nEach tooth has a type and a property. As a ritual, you can expend one tooth to gain its property for 24 hours or until a new ritual has been performed. Constructs, Oozes, and Plants are unaffected by this item. Undead whose essence you sap grant you a tooth with the type that it possessed in life rather than undeath.\n\n*Aberrations: You can magically transmit simple messages and images to any creature within 120 ft. that can understand a Language. This form of telepathy doesn't allow the receiving creature to telepathically respond.\n\n*Beasts: Your hit point maximum increases by an amount equal to twice your level.\n\n*Celestials: As an action, you can touch a target and remove any curse, disease, poison, blindness, or deafness condition.\n\n*Dragons: Your breath weapon gains a recharge of 6 and its damage die is increased to d8.\n\n*Elemental: You choose acid, cold, fire, lightning, poison, or thunder and gain resistance to that element.\n\n*Fey: Touching a creature, you magically know the creature's current emotional state. If the target fails a Charisma saving throw, you also know the creature's alignment. Celestials, Fiends, and Undead automatically fail the saving throw.\n\n*Fiends: You gain advantage on saving throws against Spells and other magical effects.\n\n*Giants: Your Strength score is 21. This property has no effect on you if your Strength is already 21 or higher without this necklace.\n\n*Humanoids: You become proficient in any two skills. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\n\n*Monstrosities: You gain Darkvision 60 Ft. and Tremorsense 60 Ft. In addition, you gain a keen sense of hearing and smelling which grants you advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Nevermore Seed",
      "desc": "A small pouch of tiny dry seeds that leave black soot on your fingers and smell of pungent incense.",
      "value": 350,
      "rarity": 5,
      "weight": null,
      "category": "Potion",
      "properties": "Throwing these seeds causes shadowy ravens to appear from thin air to invade a 15 ft area. The ravens create a cloud of inky soot that grants full cover to the affected area. The affected targets also take 2d6 damage at the beginning of each turn each turn inside the area. Lasts 1 minute, the pouch contains 5 handfuls.",
      "requirements": null
    },
    {
      "name": "Phamea's Pocket Steed",
      "desc": "This is a small brass whistle, shaped like the head of a horse and stained with age. When the whistle is blown an extremely high-pitched note is emitted, summoning a magical steed that serves just like a Heavy Warhorse. It will stay until the whistle is blown again\u2014at which time it unsummons. However, if the horse is slain, its body disappears, and the whistle will never emit a sound again.",
      "value": 4600,
      "rarity": 5,
      "weight": null,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pink Nayla Petal",
      "desc": "A thick, velvety flower petal of pastel pink and flecks of red. It leaves a fragrant, pleasant dust on your fingertips.",
      "value": 200,
      "rarity": 5,
      "weight": null,
      "category": "Potion",
      "properties": "Placing the petal over a wound causes it to meld with flesh, restoring half of the subject's maximum hit points. The recipient's skin color will permanently change to a pastel pink wherever this is applied.",
      "requirements": null
    },
    {
      "name": "Platinum Ring",
      "desc": "A jeweled platinum ring.",
      "value": 7500,
      "rarity": 5,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Potion of Lycanthropy Immunization",
      "desc": "A thick green potion in a small clear bottle. Closer examination reveals silver particles suspended in the liquid.",
      "value": 1000,
      "rarity": 5,
      "weight": null,
      "category": "Potion",
      "properties": "Drinking this potion will prevent you from being cursed with lycanthropy. \nEffective for one day.",
      "requirements": null
    },
    {
      "name": "Potion of Sudden Translocation",
      "desc": "Inside this strangely shaped vial swirls a blackish purple liquid. When used it will randomly and instantly teleport the user to a free spot up to 50 feet away. This includes through walls, into pits and between floors. However the potion will not work if you are otherwise prevented from teleporting either by Dimensional shackles or other by means.",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Potion",
      "properties": "Teleport to a random spot up to 50 feet away. One use only.",
      "requirements": null
    },
    {
      "name": "Pouch of Healing Potions",
      "desc": "A large carry pouch made from the skin of a monkey. Inside are 1d6 Potions of Superior Healing. ",
      "value": 1000,
      "rarity": 5,
      "weight": 0.5,
      "category": "Potion",
      "properties": "You regain 10d4 + 10 hit points when you drink this potion. \nThe potion's red liquid glimmers when agitated.",
      "requirements": null
    },
    {
      "name": "Powder of Piercing ",
      "desc": "A gray powder that when thrown vastly increases speed and creates many small holes in the target",
      "value": 1000,
      "rarity": 5,
      "weight": 2,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Remnant",
      "desc": "\"The handle was made of black leathers which connected two chains down to the head of a cylinder-shaped flail head. The head was like a cage that had interlocking strips of steel with spikes pointing outwards at every link. Inside, it contained a brilliant blue light that hummed which grew with intensity when spun.\"",
      "value": 40000,
      "rarity": 5,
      "weight": 4,
      "category": "Weapon",
      "properties": "You have a + 1 bonus to attack and damage rolls made with this magic weapon.\n\nThe Flail Head sheds dim light in a 10-foot radius.\n\nWhen you roll a 20 on a weapon attack with Remnant, you may conjure forth a frost giant from a mist that flows out from the blue light in the head of this weapon. The creature appears in the same space you are in, using its height to leave the user room to move. If he cannot fit in the space, the creature refuses to be summoned.\n\nAfter your turn ends, The creature immediately takes it's initiative. The creature hears what commands you have, but acts on it's own and is capable of making it's own decisions. After it's turn is over, the creature remains until the start of your next turn before returning to mist and binding itself to Remnant once more. Once this ability is used, it cannot be used again until you complete a short rest.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Rogue Stone",
      "desc": "A small, shifting, rainbow coloured, irridecent gemstone. The fluid shades of colour appear almost liquid under normal sunlight, it is truly a beautiful sight to behold. Rogue stones are extremely rare and are used for the gemjump spell, hence one of the most sought after gems in the Realms.\t",
      "value": 5000,
      "rarity": 5,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ruby",
      "desc": "Ruby is a pink to blood-red colored gemstone, a variety of the mineral corundum.",
      "value": 5000,
      "rarity": 5,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sarcophagus",
      "desc": "A painted gold child's sarcophagus. It is empty, but itself valuable.",
      "value": 7500,
      "rarity": 5,
      "weight": 50,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Set of Golden Cups",
      "desc": "A set of golden cups, each set with emeralds.",
      "value": 7500,
      "rarity": 5,
      "weight": 6,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Staff of the Verdant Grove",
      "desc": "A knotted and well-worn walking stick with living vines that grow from it. There are druidic symbols for everlasting life etched near the handle.",
      "value": 2500,
      "rarity": 5,
      "weight": null,
      "category": "Weapon",
      "properties": "1d6. The vines that grow from the staff will aid the wielder, allowing you to grapple a target with a 10 foot reach, with a +4 bonus. You may also lash a target with the vines, like a whip (you don't need proficiency), dealing 1d6 damage at 10 feet. The staff increases the prosperity of plant life within 25 feet by twenty fold.",
      "requirements": null
    },
    {
      "name": "Stern Sword of Grammar Correction",
      "desc": "A dull, rather drab looking rapier inhabited with the intelligence of a hyper-particular grammarian.",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Weapon",
      "properties": "Acts as a +1 sword vs any creature speaking with poor grammar construction. On a successful hit, the creature must save or begin using immaculate grammar (spelling gets a bump too), after which the sword attacks the creature as a mundane weapon. Shocks the wielder for 1 hp damage each time he or she uses poor grammar.",
      "requirements": null
    },
    {
      "name": "Stick of Rage",
      "desc": "A carved, thumb-width stick of great sturdiness. Holding it fills you with a furious urge to break it.",
      "value": 500,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Holding this stick fills you with an insurmountable urge to try to break it. You must use your action and make a DC 22 Strength check to attempt to break it. If you fail, you throw the stick 20 feet in a random direction. If you succeed, your strength score becomes 20 for 24 hours, and you enter a Rage, as the Barbarian trait.",
      "requirements": null
    },
    {
      "name": "Sunfire Chakrams",
      "desc": "A set of two Chakrams, one copper and the other bronze, both wrapped with old leather handles. Each deals 1d6 damage and an additional +2 Fire damage, when either thrown or swung in melee. If a Chakram is thrown and hits, it returns to the thrower's hand by magical means. Treated as an exotic weapon. 1.5lbs each",
      "value": 2300,
      "rarity": 5,
      "weight": 3,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sunfire Shurikens",
      "desc": "This is a bag of shurikens, made of flat bronze blades with a large copper ball set in the center. They are very heavy, and suffer a -2 to attack rolls. However, once they are thrown, they explode upon touching anything substantial and deal 4d6 Fire damage within 10 feet. Survivors within 20 feet are deafened for 1d6 rounds. 0.5lb each",
      "value": 600,
      "rarity": 5,
      "weight": 1,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Blaze of Glory",
      "desc": "A heavy, simple platinum torch that will not ignite under normal circumstances.",
      "value": 8000,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "A willing creature holding this item may choose to ignite it at will. When you do, you are consumed by a brilliant white flame and you lose all of your remaining hit points, and then suffer damage equal to your maximum hit points. Up to 3 targets within 50 feet each take radiant damage equal to 1d10 damage per character level that you have, plus half of your maximum hit points, or half that amount on a successful Dexterity save (DC17). The torch becomes mundane after this effect takes place.",
      "requirements": null
    },
    {
      "name": "The Olm Shield",
      "desc": "A circular shield with an amber edge, and covered in a lustrous, gold-colored metal. On the face of the shield is a depiction of a man destroying a dragon while the dragon destroys the man, as in an ouroboros.",
      "value": 1500,
      "rarity": 5,
      "weight": null,
      "category": "Armor",
      "properties": "Grants +2 AC when equipped. While carried, it grants immunity to fear effects, and you have advantage on Charisma skill checks to inspire others. If the shield is struck with Dragonfire, the bearer is enveloped with amber scales, grants resistance to fire damage, increases size by 1 category, and grants a fly speed of 60 for as long as you remain in combat.",
      "requirements": null
    },
    {
      "name": "Thunderhead Bolts",
      "desc": "Obviously mystical arrows of superior make. They have a metallic shaft etched with elegant marks of clouds and storms, and always glow with a pale shimmer. The markings occasionally gleam with bright light. A full set is 13 arrows or bolts.",
      "value": 150,
      "rarity": 5,
      "weight": null,
      "category": "Weapon",
      "properties": "Whether inside or outdoors, these arrows grant +1 to attack as long as the sky is not clear. A full round after an arrow is launched, a bolt of lightning will strike the arrow, dealing 4d12 lightning damage to anything in its space. You must be outside on a clouded day for the latter effect to occur.",
      "requirements": null
    },
    {
      "name": "Winged Eye",
      "desc": "This extremely tiny Beholder creature has wings in addition to its ten eyed tentacles. It is made of delicate glass that is finely stained. Any arcane spellcaster can activate it, as can any creature that succeeds on a DC 20 Use Magic Device skill check. When activated, it will come to life in all respects\u2014except that it is tethered to the mind of the activator. It cannot attack, move objects, or affect the physical setting in any way. However, it can fly up to 100 ft away at a speed of 10 ft per round. The activator can now see as though their head were the eye, and can ONLY see what the eye would see. This means the original PC is temporarily \u201cblinded.\u201d The eye can be deactived at any time from any distance within 100 ft. However, as soon as it is deactived, it turns back to delicate glass\u2014wherever it was. Thus deactivating it before flying it back is not recommended.",
      "value": 6400,
      "rarity": 5,
      "weight": null,
      "category": null,
      "properties": null,
      "requirements": null
    },
    {
      "name": "Zoltar's Pearlescent Ring",
      "desc": "A simple white pearlescent ring. Curse: Lose 1d4 max health once per day. The effect stacks each day. Once worn, this ring cannot be removed. Any attempt to remove the ring sees it reappear after a few seconds. Any attempt to circumvent the curse by removing the ring finger sees it appear on a different finger. If the wearer removes every finger, the curse ends. Should they fail to get the curse removed before their health falls below 0 they become an undead thrall.",
      "value": 0,
      "rarity": 5,
      "weight": null,
      "category": "Trap",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Quelling Axe",
      "desc": "This axe appears to be like any other felling axe, but when used it will unerringly cut down any tree with one swing. Its formidable weight and uneven balancing make it a slow, inefficient weapon.",
      "value": 7000,
      "rarity": 5,
      "weight": 10,
      "category": "Wondrous Item",
      "properties": "1d10 Slashing - Martial - Heavy, Two-Handed",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Reanimation Bomb",
      "desc": "Re-animation bomb",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pyramid Model",
      "desc": "A miniature model of a pyramid, which glows a faint blue. If a deceased creature of Diminutive or Fine size is placed beneath the pyramid, they will be reincarnated in 1d20 hours. The pyramid can manifest this ability once per lunar month.",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ring of Sustenance",
      "desc": "Ring of Sustenance \u2013 require no food/water/rations",
      "value": null,
      "rarity": 5,
      "weight": null,
      "category": "Ring",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Perpetual Tree",
      "desc": "The sapling of a young tree. Within a few minutes it will have grown into a wizened oak. A few moments more and the tree slowly fades from existence as a young seedling pushes up from the ground and begins the cycle anew.",
      "value": null,
      "rarity": 6,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "48-sided Garnet Gemstone",
      "desc": "Garnet is a general class of crystals ranging from deep red to violet in colour. a typical cut for this rare isometric gem is 12 to 24 sides, with the very rare 36 sides being known from time to time. This may be the only 48 sided garnet in existance. and as such it is highly prized.",
      "value": 10000,
      "rarity": 6,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Apparatus of Kwalish",
      "desc": "An apparatus of Kwalish appears to be a large, sealed iron barrel, but it has a secret catch that opens a hatch in one end. Inside, a character finds ten levers. The levers perform various functions, including extending or retracting the legs, tail, pincers and feelers, covering and uncovering the portholes, moving the apparatus, snapping its pincers, opening and closing its magically-lit \"eyes\", rising and sinking in water, and opening or closing the hatch. When activated the apparatus looks like a giant lobster.",
      "value": 10000,
      "rarity": 6,
      "weight": 500,
      "category": "Wondrous Item",
      "properties": "See DMG page 151.",
      "requirements": null
    },
    {
      "name": "Apple of the Gods",
      "desc": "Apple of the God\u2019s \u2013 gain random ability of 1 god aspect at risk of save vs death, then random forbidden fruit side effect; ability is 1 per day/50% chance success",
      "value": 5000,
      "rarity": 6,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Armor +3",
      "desc": "You have a +3 bonus to AC while wearing this armor. ",
      "value": 24000,
      "rarity": 6,
      "weight": 64,
      "category": "Armor",
      "properties": "Light, Medium or Heavy",
      "requirements": null
    },
    {
      "name": "Armor of Invulnerability",
      "desc": "You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. Once this special action is used, it can't be used again until the next dawn.",
      "value": 18000,
      "rarity": 6,
      "weight": 65,
      "category": "Armor",
      "properties": "Plate Armor",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Balering, the Sword of Balance",
      "desc": "A long steel blade with an amber edge and lustrous golden hilt. When first discovered, the blade is without detail, but is filled with runes as members of other races volunteer their blood as tribute to the blade's cause.",
      "value": 3000,
      "rarity": 6,
      "weight": null,
      "category": "Weapon",
      "properties": "1d8, plus an additional 1d8 radiant damage to Dragons, Garou, and Spiders for each rune that appears on the blade. The blade is adorned with a rune for every 3 different races that willingly shed their blood on the sword.",
      "requirements": null
    },
    {
      "name": "Belt of Cloud Giant Strength",
      "desc": "While wearing this belt, your Strength score changes to 27. If your Strength is already\nequal to or greater than 27, the item has no effect on you.",
      "value": 36000,
      "rarity": 6,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Belt of Storm Giant Strength",
      "desc": "While wearing this belt, your Strength score changes to 29. If your Strength is already\nequal to or greater than 29, the item has no effect on you.",
      "value": 45000,
      "rarity": 6,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Bloodgaze, Champion of Vingaret",
      "desc": "This greatsword belongs to the current mortal champion of Vingaret, the goddess of vengeance. Once per day, the attuned champion can choose to have one attack with Bloodgaze deal an extra 1D10 damage to the target if the target was the last creature to attack the champion. This damage increases to 2D10 when the champion reaches 7th level and to 3D10 when the champion reaches 15th level.",
      "value": 50000,
      "rarity": 6,
      "weight": 15,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bound Armor of the Demon",
      "desc": " Gives insane buffs, will eventually turn you into one of whatever it's namesake is.",
      "value": null,
      "rarity": 6,
      "weight": 80,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bound Armor of the Fey",
      "desc": " Gives insane buffs, will eventually turn you into one of whatever it's namesake is.",
      "value": null,
      "rarity": 6,
      "weight": 80,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bound Armor of the Lich",
      "desc": " Gives insane buffs, will eventually turn you into one of whatever it's namesake is.",
      "value": null,
      "rarity": 6,
      "weight": 80,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Brass Halo",
      "desc": "A small brass flame-shaped charm on a black cord. The center of the flame is overlaid with platinum and is visible in darkness. Holding it in your hands fills you with a tingling sense of ambition and an urge to act.",
      "value": 2000,
      "rarity": 6,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "CHA +2 Whenever you cast a spell, roll a d20. On a 20, that spell will be cast as a 10th level spell. A spell slot of the lowest castable level is expended as a result.",
      "requirements": null
    },
    {
      "name": "Bronze Halo",
      "desc": "A flattened bronze halo that hovers behind the bearer's head. It spins rapidly when the bearer exhibits great presence of mind.",
      "value": 1000,
      "rarity": 6,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "INT +2 You may add 1d20 to any dice roll you make. A bolt of lightning then strikes you, dealing lightning damage equal to the result of the roll. This can only be done once per dice roll.",
      "requirements": null
    },
    {
      "name": "Cloak of the Shadow General",
      "desc": "A commanding cloak of authority, used to hide whole legions of armies against the Starwizards of the astral planes. ",
      "value": null,
      "rarity": 6,
      "weight": 2,
      "category": "Wondrous Item",
      "properties": "1/ Day: Creatures within a 30 feet radius, including the user, are granted the effects of greater invisibility, and cannot be detected by Truesight and other means of reveal, e.g. Mordenkainen's Faithful Hound.\nCharges are restored at dusk.",
      "requirements": null
    },
    {
      "name": "Copper Band of the Deceiver",
      "desc": "A copper band with a scale-pattern etched into it. At the top of the bracelet is a broken inset where a platinum decoration used to be.",
      "value": 0,
      "rarity": 6,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Grants the wearer a feeling of safety that they become instantly addicted to. Wearing it for a full day creates a feeling of dependency, requiring a DC 12 wisdom save to overcome and remove the bracelet. Attempting to do so makes the user panicked and sickened and fearful of the dangers of the world. The DC increases by 2 for each day that they bracelet is worn. After a week, the bearer will look sickly and lose their will to eat. After a month, they will become dark and boney, and begin to develop scarring, and their features will become shifted and demonic. This transition continues until they resemble a waifish demonic figure.\n\nThe wearer of this bracelet is immortal in the physical sense, no amount of harm will cause them to die.",
      "requirements": null
    },
    {
      "name": "Copper Halo",
      "desc": "A copper gauntlet that never greens. The bearer feels a sense of influence and importance.",
      "value": 1500,
      "rarity": 6,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "STR +2 You may point at a creature and give it a command. The command must be phrased as helping you or helping another person to complete a task. If the target has less than 10 intelligence, it obeys you. If its Intelligence is 10 or higher, it makes a DC 17 Wisdom save or follows your command. You may do this to any number of targets, but if one of them fails to listen to you, the effect may break on all others (roll 1d2, success on 1).",
      "requirements": null
    },
    {
      "name": "Eternity Armor",
      "desc": "Nigh-unbreakable golemsteel armor enchanted to withstand nearly any strike.\nIf a ranged attack targets a friendly creature besides yourself within five feet radius, you can move them and take the shot to negate the damage and effects instead; if they are within a 10 feet radius, use your reaction. ",
      "value": null,
      "rarity": 6,
      "weight": 80,
      "category": "Armor",
      "properties": "Heavy Armor | AC 20 | Str 20 | Stealth: Disadvantage",
      "requirements": null
    },
    {
      "name": "Golden Halo",
      "desc": "A necklace of large gold-and-platinum prayer beads, 12 beads in all. They project a feeling of safety and austere silence.",
      "value": 1000,
      "rarity": 6,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "WIS +2 You may choose one target within ten feet to be encapsulated in an opaque sphere of white force. The target must have 100 or less current HP. When a target is captured in a sphere, a bead on the necklace will turn platinum. Once inside the sphere, time ceases to pass within it, effectively preserving the captive indefinitely. The captives can be released at will.",
      "requirements": null
    },
    {
      "name": "Hallowed Skin",
      "desc": "A thick, flesh-like leather vest adorned with occult symbols and human teeth. Parts of it are ragged with wear, and it feels clammy to the touch.",
      "value": 5000,
      "rarity": 6,
      "weight": null,
      "category": "Armor",
      "properties": "Grants 12 AC +Dex. Undead creatures revere the bearer of this garment, and will not attack you, unless they are in threat of being destroyed. A good-aligned character wearing this vest will become nauseous, and suffers fitful nightmares on any night after this has been worn, preventing them from benefitting from a long rest.",
      "requirements": null
    },
    {
      "name": "Observer's Ring",
      "desc": "This ring is set with a hemispherical glass eyeball that looks around when it is worn. It functions as an alternative eye for the user and is not affected by magic.",
      "value": 9000,
      "rarity": 6,
      "weight": null,
      "category": "Ring",
      "properties": null,
      "requirements": "Requires Attunement"
    },
    {
      "name": "Pocket Tornado",
      "desc": "Two disks of hardened quicksilver laying atop one another. If they are separated, a tornado springs up between them \u2013 anchored on each end to a disk.",
      "value": null,
      "rarity": 6,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Potion of Temporary Immortality",
      "desc": "Bottle with a liquid with rainbow colors. When you drink it you automatically succeed on death saving throws for one hour.",
      "value": null,
      "rarity": 6,
      "weight": null,
      "category": "Potion",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Seaglass Earring",
      "desc": "A single, elegant seaglass colored earring made of clear glasslike material. Its exact shape changes slowly over time, shifting from one watery artful shape to another.",
      "value": 5000,
      "rarity": 6,
      "weight": null,
      "category": "Treasure",
      "properties": "The attuned bearer of this earring may cast the \"Control Water\" spell once per day, using Charisma as their modifier. The bearer may also take an aqueous form once per day, becoming immune to nonmagical damage, gaining a swim speed of 60 ft, and may effuse through pinhole openings for up to 1 minute.",
      "requirements": null
    },
    {
      "name": "Silver Halo",
      "desc": "A small silver ring shaped from the circle of Captain Wellby's hat.",
      "value": 2000,
      "rarity": 6,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "DEX +2 Activate to slip between dimensions - for one minute you can choose to be invisible, ghostly or fully real. You can move through objects at will, and can still affect the material world.",
      "requirements": null
    },
    {
      "name": "Smoldering Cloak",
      "desc": "A black and crimson cloak with tattered edges that are ever-glowing as it were on fire on moments ago.",
      "value": 2000,
      "rarity": 6,
      "weight": null,
      "category": "Armor",
      "properties": "If an attack would strike you in combat, you may use your reaction to become a cloud of thick, black smoke, and may move up to 15 feet without provoking attacks of opportunity. You must complete a short rest before using this ability again. If you suffer 10 or more fire damage from any source, the feature becomes available again.",
      "requirements": null
    },
    {
      "name": "Solarion",
      "desc": "A simple, sturdy longsword with a broad blade. There is a shining sun sigil at the crossguard. The blade shines as if reflecting sunlight, even in the dimmest rooms.",
      "value": 10000,
      "rarity": 6,
      "weight": 5,
      "category": "Weapon",
      "properties": "1d8, +1d6 fire, +1d6 radiant. As a bonus action, you may hold the sword above your head, under a clear, bright day in order to charge the sword with power. Doing so increases the fire and radiant damage of the weapon to 2d6 for one minute. The blade also emits a bright light in 60 feet at will.",
      "requirements": null
    },
    {
      "name": "Thaxton's Hammer",
      "desc": "This warhammer belonged to a famous dwarven general known as Thaxton the Fierce. It grants a +1 bonus to attack and damage rolls, as well as Intimidation checks, to the user. If the user is a dwarf, this bonus is increased to +2.",
      "value": null,
      "rarity": 6,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Book of Kaza",
      "desc": "The Book of Kaza is a famed tome written by the lich, Kaza. It is said to deal with the darkest secrets of necromancy, though the pages appear to be blank when you look at it. Kaza was destroyed during the upheaval of Nethril's final days. How it has come to its present location after so many years is anyone's guess.        ",
      "value": 4500,
      "rarity": 6,
      "weight": 1.5,
      "category": "Book",
      "properties": null,
      "requirements": "Language: Abyssal"
    },
    {
      "name": "The Box of 'Do Want'",
      "desc": " \"The Box of Do Want\" which made anyone looking into the box desire whatever it was that I put inside of it. A rock? The shopkeeper wants it so badly they're willing to pay their entire fortune. A spoon? The tavern keeper is willing to give you his daughter.",
      "value": null,
      "rarity": 6,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Eye of Far Seeing",
      "desc": "This legendary eyeball, said to have once been that of a gynosphinx, has the capability to scry at a radius of around 1000 miles. To use it, one must attune to it and to do so, one must gouge out one of their own eyes and replace it with the Eye of Far Seeing (similar to the eye of vecna).",
      "value": 30000,
      "rarity": 6,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Inserting this eye into one of your own eyes lots gives the ability to scry at will twice (or thrice) a day. If it is used more than that, your vision in that eye will start to fade and you will suffer exhaustion. ",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Vial #2",
      "desc": "Vial #2 contains speculumia, a slightly greenish opaque liquid that when drunk suddenly causes a cloud of smoke and summons an exact copy of whoever drank it. The new person is completely the same as the drinker and will actually think that he is the one who drank the drink, the sudden cloud of smoke will prevent anyone witnessing the situation from being able to tell which one is the original person.",
      "value": null,
      "rarity": 6,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Rust-Dust Bomb",
      "desc": "Rust-dust Bomb \u2013 metallic eating dust",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sack of Flower Bulbs",
      "desc": "A sack of prized flower bulbs",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sales Receipt",
      "desc": "Receipt for delivery of slaves",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Salve of Silence",
      "desc": "Salve of Silence \u2013 armor improving sound nullifier",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sand Crown Crown",
      "desc": "When used (worn), this seemingly golden crown turns to sand and falls to the ground where it reforms into a crown. Any gold, silver, or copper item it is placed near will also gain this property. A coin would only turn to sand when it was being used (spent), etc\n",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Satchel",
      "desc": "A thick leather satchel containing an adventurer's\u2019 kit: 6 wax candles, two pieces of white chalk, two pieces of red chalk, a small bag of (100) clay marbles, a whistle, four pieces of charcoal, three large sacks, six iron pitons, a hammer, a tinderbox with flint and steel, 2 empty copper vials, a chunk of coal, and three large sheets of paper.",
      "value": 10,
      "rarity": 2,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Satyr Pipes",
      "desc": "Silver pan/satyr pipes/flute",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sausages",
      "desc": "Package of d6 sausages",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Screaming Arrows",
      "desc": "A quarry of 20 Screaming Arrows \u2013 intimidate/fear check",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Scroll Case",
      "desc": "Nigh-indestructible scroll case \u2013 leviathan ivory, jewel encrusted, demon paintings on side \u2013 scraps of scroll inside",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Scroll of Cursed Gibberish",
      "desc": "Without a successful Arcana check of 25, this scroll appears to be a Scroll of Comprehend Language. When used, however a DC save must be made or the user will be unable to speak anything but gibberish for 1d20 days.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Book",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Scroll of Summon Moose",
      "desc": "Summons a moose.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Book",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sea Shell Coil",
      "desc": "A 40\u2019 coil of rare sea shells strung on a silken cord",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Self-Incinerating Pellets",
      "desc": "extra planar/dimensional transport/escape to pocket dimension with scrying/teleportation stone/orb",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Service Record",
      "desc": "A scroll detailing the bound service of two men-at-arms sworn to six months of service.",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Book",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Shadoweave Armor",
      "desc": "Shadoweave armor is woven with darkness imbued into its silk. +6 armor +6 max bonus",
      "value": null,
      "rarity": 4,
      "weight": 5,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sharkskin Armour",
      "desc": "Studded leather armor made from sharkskin set with iron disks.",
      "value": 100,
      "rarity": 2,
      "weight": 10,
      "category": "Armor",
      "properties": "Light Armor\nArmor Class: 12 + Dex Modifier",
      "requirements": null
    },
    {
      "name": "Sharpening Stone",
      "desc": "A high quality sharpening stone",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Shrunken Head",
      "desc": "Shrunken head with command word \u2013 1 ray spell per hour",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Shurikens",
      "desc": "A leather string holding 11 silver shuriken. ",
      "value": 12,
      "rarity": 2,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Signet Ring of Gold",
      "desc": "A large signet ring of gold, worked with a unicorn crest. Any commoner who dons the ring will suddenly discover its metal heated to unbearable levels \u2013 causing one hit point of damage per round. However, anyone with noble blood (however slight), or destined to become a noble at some point in the future, who does the same will suffer only a momentary flash of pain (with an accompanying 1 hp of damage). They will find that the unicorn crest has reshaped itself to their own heraldry, which has also been branded in miniature form upon the back of the finger. From this point forward, they can put on or remove the ring at will without any further ill effects.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Ring",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silver Brooch",
      "desc": "A silver brooch depicting a mage\u2019s tower. (This could be a pass for magical wards at the mage\u2019s tower, at the DM\u2019s discretion.)",
      "value": 12,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silver Bullets",
      "desc": "A pouch filled with 13 silver sling bullets. Each bullet is engraved with the holy symbol of Pelor.",
      "value": 10,
      "rarity": 2,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silver Ore",
      "desc": "A large chunk of raw silver ore.",
      "value": 5,
      "rarity": 2,
      "weight": 25,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silver Spoons",
      "desc": "A set of 8 silver spoons.",
      "value": 2,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silver Statuettes",
      "desc": "A set of five small silver statuettes (each about 2\u201d tall) consisting of a cat, an owl, a falcon, a horse and a griffon.",
      "value": 45,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Six Fingered Gloves",
      "desc": "Two six-fingered gloves, along with a matching seven-fingered glove. The set is made of supple black leather, and stitched with fine, silver thread.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Skeleton Key",
      "desc": "A single, platinum skeleton-key on a platinum ring. The key is finely crafted, with a delicate design etched in elvish characters along the length and across the bow.",
      "value": 37,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Skeleton Key Chain",
      "desc": "Key chain with multiple types of \u2018skeleton keys\u2019",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Skull Idol",
      "desc": "Gold dipped idol of several skulls",
      "value": 600,
      "rarity": 3,
      "weight": 3,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Slave Order",
      "desc": "A bearer-order allowing the possessor to take ownership of a dozen slaves from Zoealage the flesh-monger",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Smoke of Deceit",
      "desc": "One time use only, grants perfect hide and move silently rolls to all allies. effect is lost if moved within 10ft of enemy",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Aeger's Hide",
      "desc": "This heavy and thick bear hide is all that remains of the fabled Aeger. Several hundred years ago, the Aeger, a giant bear, terrorized hundreds of small villages up and down the Sword Coast. The bear was invulnerable to fire, cold, or acid. Finally the young men and women of several villages banded together, forming a militia almost two hundred people strong. The Aeger was surrounded and finally slain. Less than a dozen villagers survived, and they carved the Aeger's hide amongst themselves. Out of one of the pieces this armor was created.\t",
      "value": 9000,
      "rarity": 3,
      "weight": 35,
      "category": "Armor",
      "properties": "Medium Armor\nArmor Class: 12 + Dex Modifier (max 2)\nProvides +15% resistance to fire, cold, and acid\nRender's it's wearer immune to confusion",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Smoking Box",
      "desc": "A long, narrow wooden box containing forty, \u00bd lb rolls of quality smoking leaf.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Smoking Pipe",
      "desc": "A six foot long smoking pipe made of ivory, possibly a narwhal horn, carved to look like a twisting serpent.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Smuggler's Boots",
      "desc": "Smugglers boots \u2013 great for hiding a concealed backup dagger or wand",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Smuggler's Coat",
      "desc": "A hooded cloak with a dozen inside pockets.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Snail Dye",
      "desc": "A 1 quart jar of rare purple snail dye.",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Snakeskin Scimitar",
      "desc": "A scimitar with a gold and snakeskin hilt set with a citrine.",
      "value": 100,
      "rarity": 2,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Snow Serpent Stockings",
      "desc": "Four pairs of snow serpent fur felt stockings",
      "value": 20,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Solomon's Fishing Pole",
      "desc": "A cursed fishing pole made of blackened ash. It will never catch a fish \u2013 although, if one attempts to use it unbaited, they will succeed in catching skeleton fish.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sortida Compass",
      "desc": "Brass dungeon compass, runic markings, always points to nearest exit.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Special Syrup",
      "desc": "A two gallon stone ware jug containing hallucinogenic tree sap syrup ",
      "value": 20,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Spider-Silk Rope",
      "desc": "Giant spider silk rope \u2013 sticks to most surfaces (including oiled gloves)",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Staff of Eulosus",
      "desc": "once per day, standard. lifts target into air for 3 rounds. Enemy can make a reflex save each round to get out DC 10+User level. Deals 1d8 after 1 round, then 2d8, and 3d8 if they cannot get out after 3 rounds",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Staff of Force",
      "desc": "once per day, standard. push target 10 ft the direction they are facing. once per day. If target is pushed into another creature, they deal 1d20 damage. to each other. If target is pushed into object, they take 1d20. Target can make a fort save against the push, goes against users 1d20+will mod ",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Steel Spiked Gauntlets",
      "desc": "A pair of blue enameled steel spiked gauntlets. The palms of both gauntlets are designed to display the Cambersome family crest, a stylized \u2018C\u2019 shaped into the likeness of a coiled serpent.",
      "value": 90,
      "rarity": 2,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Stem-Stone",
      "desc": "Pebble that transforms into whatever inorganic substance it last touched. Currently the leather of your pouch. ",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sting",
      "desc": "Monster presence detecting weapon (Hobbit \u2013 Sting, Orcs/Goblins)",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Storm Giant Coins",
      "desc": "Thirty storm giant minted gold coins, each is the size of a dinner plate and weighs 17 lbs. The image stuck on the coins shows a giant hand flicking a human off a table.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Storm Giant Horn",
      "desc": "A horn fashioned from the translucent bone of a storm giant. Those who put their ear to the horn hear it whisper the sounds of an unknown village square. Whether the village which they hear is \u2013 or was \u2013 a real place is a mystery which may never be solved. (Twin horn in village square allows communication between the two).",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Straw Broom",
      "desc": "A straw broom",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Stuffed Falcon",
      "desc": "A stuffed falcon, tattered with age, with black onyx eyes. (Onyx value: 5gp each)",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sunrod Quiver",
      "desc": "A short quiver holding 3 sunrods.",
      "value": 6,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sword of Battle Fury",
      "desc": "Battle Fury-grants the feat Cleave",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tactical Defense Stick",
      "desc": "Tactical defense stick\u2026",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Talking Toad",
      "desc": "Enchanted talking toad \u2013 polymorphed noble \u2013 knowledge of multiple regions, religions & other worldly strangeness",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tasty Cake",
      "desc": "A well-sealed cake box with intact cake",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tattoo Kit",
      "desc": "Ritualistic tattooing kit",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Teak Mask",
      "desc": "A cracked mask of teak wood, colored in (chipped) blue and red paint depicting the face of a fairy (4sp)",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Teakwood Quarterstaff",
      "desc": "An ornately carved quarterstaff of teakwood. The end is carved into the likeness of a dragon\u2019s head, with (painted red) flame issuing from its mouth and the butt end carved into an entwining serpent-like tail. (5gp)",
      "value": 5,
      "rarity": 2,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Bloody Burden",
      "desc": "Each day this blade draws no blood it becomes heavier to bear.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Elven Mirror",
      "desc": "A plain mirror with a frame of pale ashwood. Whenever someone looks in the mirror, however, they perceive an elven face in place of their own.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Erian Tapestry",
      "desc": "A famous (or forgotten) tapestry depicting the Fall of Erian. The figures upon the tapestry move and change, re-enacting \u2013 in an artistically abstracted form \u2013 the legendary battle over the course of half an hour.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Headless Helm",
      "desc": "Functions as a normal helmet other than the fact that it turns the user's head invisible.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Living Lantern",
      "desc": "The Living Lantern, it acts as a decent light source, but it hates wooden items and structures and tends to set them on fire. I haven't decided if it should take a liking to burning cloth. It has some very curious results, mostly involving villagers getting angry at their houses burning or support struts burning down resulting in some catastrophic collapse.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Neverburning Torch",
      "desc": "The neverburning torch. A jet black torch, with an inscription in gold upon its side: \u201cOnly in your hour of darkest need will I light.\u201d All attempts \u2013 magical or otherwise \u2013 to light the torch will fail, but if the character carrying the torch ever finds himself upon the brink of death, the torch will flare to life.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Scalpel",
      "desc": "Scalpel capable of cutting any substance",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Torturer's Dagger",
      "desc": "Found on the corpse of an enemy from the realm of chaos.",
      "value": null,
      "rarity": 2,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse, Light - Range: 20/60 \nAny wounds inflicted using this dagger are healed two rounds later.",
      "requirements": null
    },
    {
      "name": "Throwing Axe of Appendage Severing",
      "desc": "If the user of this throwing axe manages a critical hit, it will sever an appendage. \u2013 critical = appendage severed",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Thunder Pommel",
      "desc": "When embedded in the hilt of a weapon. -deal and additional 1d6 lightning damage on attacks with an odd 1d20 roll",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tigerseye Ring",
      "desc": "You find a barrel filled with broken crockery. Near the bottom is a mouse nest in which, amidst the tangled mouse fur, lays a silver ring set with a polished tigerseye.",
      "value": 200,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tiny Phantasm",
      "desc": "A floating mass of swirling colours the size of a penny. It follows your every command and leaves a multicolour trail across any surface it touches. Cannot physically interact in any other way.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Top Secret Battle Monkeys",
      "desc": "Box of \u2018Top Secret Battle Monkeys\u2019",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Totem Pole",
      "desc": "A pinewood totem pole of the northern barbarians, bearing six faces (from top to bottom): a hawk, a demon, an elk, a man, a fox, and a white dragon. The hawk has a silver feather on the left side of its face (8gp), the demon has a gold nose-ring (6gp), the elk has copper antlers (4gp), the man has electrum eyes (3gp each), the fox has a black onyx nose (15gp), and the dragon has ivory teeth (30 teeth worth 1gp each). The pole is fifteen feet tall and weighs 200 pounds. (4.57m, 90.7kg)",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Trap Detection Key",
      "desc": "A token/key designed to deactivate all traps within the dungeon, requires activation at security box in secret depths of deepest part of dungeon",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Treasure Map I",
      "desc": "Piece of Legendary weapon & map with possible locations for other pieces",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Treasure Map II",
      "desc": "A peg leg inscribed with a pirate\u2019s treasure map. The map is either false or its treasure has long since been plundered. If you wish to provide the PCs with a true map, then one may be found in the hollow compartment within the leg.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Triple Barreled Crossbow",
      "desc": "Triple \u2018barreled\u2019 crossbow",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Triple Harness",
      "desc": "A leather harness bearing three short quivers (sized for quarrels, rather than arrows). The first holds a dozen red-fletched quarrels, the second a dozen green fletched quarrels, and the third has a dozen white fletched quarrels.",
      "value": 5,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Troll Horn",
      "desc": "When blown, any trolls within a mile or so will approach the players",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Troll Oboe",
      "desc": "An oboe-like musical instrument made from a troll\u2019s femur.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Troll-Rubber Boots",
      "desc": "Troll-rubber boots. They give a +1 to stealth movement.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Armor",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Undead Knife",
      "desc": "Knife of a god of undeath. It turned whoever owned it immediately undead.",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Weapon",
      "properties": "Cursed",
      "requirements": null
    },
    {
      "name": "Underworld Currency",
      "desc": "Underworld Currency \u2013 lead coins; purple rocks/crystals, fairy dust, dragon scales, dna globules (rocks/capsules with runic understanding of specific creatures), tally bones, soul traps/crystals",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Unicorn Pipes",
      "desc": "A set of panpipes carved from the bones of a unicorn. When played, they do not make the slightest sound.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "The Book of Monster Recipes",
      "desc": "This leather-bound recipe book appears to be aimed at adventurers who aren't satified with merely fighting monsters and taking their treasure. It features a mixed selection of recipies, with side-notes on how best to prepare the remains of each creature included. \"Braized Dragon Liver and Onions\", \"Eye of the Beholder Soup\", \"Rust Monster Jerky\" and \"Gelatinous Cube Jelly\" are particular standouts.",
      "value": 40,
      "rarity": 2,
      "weight": 1,
      "category": "Book",
      "properties": "Allows the reader to prepare meals from most common monsters without poisoning themselves.",
      "requirements": "Language: Common"
    },
    {
      "name": "Unspoiled Golden Apples",
      "desc": "A bowl full of golden apples found in the midst of ruins which have long been left desolate and uninhabited. They are quite edible and unspoiled. If they are taken beyond the ruins, they will lose their golden sheen and appear \u2013 in all respects \u2013 as normal, red apples. So long as they remain within the ruins, however, they are golden, and will not age or rot.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Urn of Shadows",
      "desc": "Urn of shadows-starts with no charges, user can grant allies 10HP, or deal 10 damage to enemies. gains additional uses for every 2 creatures that die within 40ft radius of holder",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Vials of Oil",
      "desc": "Seventy-three clay vials of oil (1 pint each). ",
      "value": 75,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Visikus",
      "desc": "This dagger belonged to the great druid, Marcek, a wise and cunning elf who fell only to the fiery Wyrm, Brazzemel, during his quest to reclaim the lost Eladrin spell tomes. Marcek inherited this dagger from his master and mentor, Garbasen the Sage, who crafted it with ancient Eladrin magic. Covered in etched runes and jewels, this dagger holds a legendary history and a powerful magic core.",
      "value": null,
      "rarity": 3,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d4 Piercing - Finesse, Light - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Wand Chamber",
      "desc": "Wand Chamber \u2013 fashioned to look like a scroll case, it contains 1d12 slots to hold wands \u2013 think of it as a circular bandolier for your everyday wizard",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Wand of Eye-Poking",
      "desc": "A wand of eye poking, four charges. It will unerringly poke out the eye of a target creature within arm\u2019s reach.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Warning Box",
      "desc": "Box with runic markings for destroy/to be destroyed containing cursed object",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Water Damaged Ledger",
      "desc": "Water damaged ledger \u2013 hidden location",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Quest Hook",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Waterskin of Inexplicable Amelioration",
      "desc": "A sheep's bladder waterskin. It is lined with a suedelike fabric which has been beautifully stiched with the image of a stag's head. ",
      "value": 600,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "When any liquid is poured into this waterskin it is instantly purified of disease, poison or other potentially harmful contaminents.",
      "requirements": null
    },
    {
      "name": "Weapon Cabinet",
      "desc": "A weapons cabinet, unlocked and immovable, containing: 12 score arrows (1gp/score), 40 javelins (1gp each), 120 crossbow bolts (1sp/each), and a short bow (30gp).",
      "value": 94,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Whalebone Scrimshaw",
      "desc": "An elaborate, whalebone scrimshaw carving of intertwined orbs, each showing the legend of creation story of one of the seven civilized religions, roughly 10\u201d in diameter.",
      "value": 45,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "White Ivory Cane",
      "desc": "A cane of the purest white ivory, decorated with ruins unknown to modern scholars, and topped with a handle of polished amber. Trapped within the amber is a strange creature unlike any the PCs have ever seen before.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "White Marble Ball",
      "desc": "A small ball of white marble \u2013 roughly three inches across \u2013 which hovers in the air until it is touched or disturbed, at which point it falls to the floor and ceases to exhibit any supernatural properties.",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Wolfsbane",
      "desc": "D8 springs of wolfsbane",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Worldly Tortoise",
      "desc": "A small tortoise (STR 2, DEX 1, WIL 6, 1hp, Armour 1) that knows the way to anywhere you ask, but gets there very slowly. ",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Wrought Iron Sign",
      "desc": "A large, wrought-iron sign crafted to read: \u201cBeware of Wyvern\u201d in a bold script.",
      "value": 70,
      "rarity": 2,
      "weight": 80,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Yggdrasil Leaf",
      "desc": "A leaf from the great tree Yggdrasil.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Zombie Dust",
      "desc": "A small, brown glass jar, sealed with wax, with a gray dust inside. A white label is affixed to the jar, and reads: \u201cZombie Dust\u201d in a shaky script. (It is zombie dust.)",
      "value": 3,
      "rarity": 2,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Zulabar's Fist-Stick",
      "desc": "A trolls hand mounted on a three foot rod. It will grasp objects or make a fist. Commands: Grabit, Leggo, Fist.",
      "value": null,
      "rarity": 3,
      "weight": 4,
      "category": "Wondrous Item",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Peg Leg",
      "desc": "You'll never know if the owner willingly parted with this prosthetic. You do know that it makes an effective cudgel.",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Prick Axe",
      "desc": "A pick axe has a curved iron head that is useful for breaking up rocky surfaces. A prick axe has an uncomfortable knobbly handle and the axe head constantly falls off.",
      "value": null,
      "rarity": 1,
      "weight": null,
      "category": "Weapon",
      "properties": "1d4 Piercing - Simple - Light",
      "requirements": null
    },
    {
      "name": "Terrible Thermometer",
      "desc": "This thermometer has a long, silver blade and a pommeled wooden handle. \"Come here, monster! I just want to take your temperature!\"",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Weapon",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Double Axe",
      "desc": "A normal hand axe, only there's two of them.",
      "value": 10,
      "rarity": 2,
      "weight": 4,
      "category": "Weapon",
      "properties": "1d6 Slashing - Simple - Light, Thrown - Range: 20/60",
      "requirements": null
    },
    {
      "name": "Greedy Bag of Holding",
      "desc": "This appears to be a common cloth sack about 2 feet by 4 feet in size. ",
      "value": 500,
      "rarity": 3,
      "weight": 15,
      "category": "Wondrous Item",
      "properties": "This functions as a normal Bag of Holding, but for every item you wish to remove from the bag you must put in a silver piece. Any money placed into the bag dissapears almost immediately. It's unclear where the coins go when placed into the bag.",
      "requirements": null
    },
    {
      "name": "Spear of the Hunter",
      "desc": "",
      "value": 800,
      "rarity": 4,
      "weight": 3,
      "category": "Weapon",
      "properties": "This spear grants a +2 to AC and summons a friendly wolf whenever a natural 20 is rolled to hit.\n1d8 Piercing - Oversized (1d10), Thrown (20/60), Two-Handed",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Soul Stealer",
      "desc": "A legendary longsword that glows a dark red when ",
      "value": 10000,
      "rarity": 6,
      "weight": 3,
      "category": "Weapon",
      "properties": "When this weapon is used to kill an intelligent creature, it's soul is absorbed into the blade. These souls can be released as a bonus action for 1d4 psychic damage per soul. All of the souls must be released at once.\n1d12 Slashing - Versatile (2d8)",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Insanity Blade",
      "desc": "",
      "value": 1200,
      "rarity": 4,
      "weight": null,
      "category": "Weapon",
      "properties": "Once attuned, the user of this weapon must make a Wisdom save each day, starting at 0 and going up +1 DC with each subsequent check. On a failure, the character is thrown into a blind rage and must fight the nearest creature for 1d8 rounds or until they are killed.\n1d8 Slashing & 1d4 Psychic",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Tracking Dagger",
      "desc": "",
      "value": 1400,
      "rarity": 4,
      "weight": null,
      "category": "Weapon",
      "properties": "On a successful hit with this dagger, the user knows exactly where the target is for 1d20 hours.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Dice Mace",
      "desc": "",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Weapon",
      "properties": "-5 to hit but does 1d20 Bludgeoning Damage",
      "requirements": null
    },
    {
      "name": "Belt of Fattening",
      "desc": "",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Cursed\nPutting on this belt causes the user to gain 200lb over the period of a short rest.",
      "requirements": null
    },
    {
      "name": "Thirsty Cup",
      "desc": "",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "All liquid poured into this cup drains from it as if there was a hole in the bottom.",
      "requirements": null
    },
    {
      "name": "Susej Cup",
      "desc": "",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Turns any liquid that is poured into this cup into Elven wine.",
      "requirements": null
    },
    {
      "name": "Morph Blade",
      "desc": "",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Weapon",
      "properties": "This blade can switching between piecing, slashing and bludgeoning damage as a bonus action.",
      "requirements": null
    },
    {
      "name": "Charm of Frost",
      "desc": "",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "grants water-walking abilities, but requires concentration. Anything that disrupts a concentration spell disrupts the charm. 10 ft radius of ice",
      "requirements": null
    },
    {
      "name": "Illusionary Coin Bag",
      "desc": "",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "a bag that makes all coins in it appear as platinum. Coins revert to original form 5 minutes after being taken out of bag. Can not hold more than 50 coins. This means you do not actually gain any profit from using the bag, but you can trick people",
      "requirements": null
    },
    {
      "name": "Gnomish Stop Clock",
      "desc": "",
      "value": null,
      "rarity": 6,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Allows you to stop time. However, if you ever let go of the clock while time is stopped it will shatter, restoring time but freezing the user",
      "requirements": null
    },
    {
      "name": "Sword of Frost",
      "desc": "",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Weapon",
      "properties": "1d6 slashing damage, 1d6 chill damage. Freezes/Slows enemies hit, upon death enemy turns to ice and shatters, damaging all nearby enemies for 1d4 chill damage. No effect on fire or ice enemies",
      "requirements": null
    },
    {
      "name": "Axe of Blood",
      "desc": "",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Weapon",
      "properties": "crimson red axe that deals 1d6 slashing damage and 1d6 bludgeoning damage. Each hit restores +1 hp to wielding regardless of damage dealt",
      "requirements": null
    },
    {
      "name": "Lucky Coin",
      "desc": "",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Coin always lands heads up.",
      "requirements": null
    },
    {
      "name": "Wand of Pillows",
      "desc": "",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "At any time, if the users says \"Floomp\" a pillow will magically appear. After the eighth pillow apparates, they start simply teleporting to the user in order.",
      "requirements": null
    },
    {
      "name": "Gravedigger",
      "desc": "",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Weapon",
      "properties": "1d4 Bludgeoning\nAttack with advantage and 1d10 against undead enemies",
      "requirements": null
    },
    {
      "name": "Hypnotic Spinning Top",
      "desc": "",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "a spinning top that causes all creatures that can see it, including the person spinning it, to become mesmerized by it and will do nothing but stand in place and stare at it until it stops spinning and falls. This effect is technically psionic",
      "requirements": null
    },
    {
      "name": "Giggle Water",
      "desc": "",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Potion",
      "properties": "small vial of liquid that when drunk makes the drinker continuously giggle for 1 hour. When that wears off they hiccup for 1 hour",
      "requirements": null
    },
    {
      "name": "Entangled Coins",
      "desc": "",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Two coins, when flipped at close to the same time will always land the same way, no matter how far apart they are",
      "requirements": null
    },
    {
      "name": "Ring of Fire Detection",
      "desc": "",
      "value": null,
      "rarity": 2,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "A bronze ring that houses magical protection. It alerts the wearer of fire by etchings becoming red and glowing when fire is within a 10 foot radius, even behind walls",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Blood Amulet",
      "desc": "A bronze circle held by a red ribbon.",
      "value": null,
      "rarity": 3,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "This amulet is constantly covered in blood. Any attempt to wash the blood off is unsuccessful, and the amulet must be wrapped in a waterproof cloth to prevent anything it is kept in frow slowly becoming drenched in blood.",
      "requirements": null
    },
    {
      "name": "Drunkard's Hat",
      "desc": "A simple straw hat.",
      "value": 30,
      "rarity": 2,
      "weight": 1,
      "category": "Wondrous Item",
      "properties": "The wearer of this hat always knows the direction to the nearest alcholic beverage.",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Key Dagger",
      "desc": "",
      "value": null,
      "rarity": 6,
      "weight": null,
      "category": "Weapon",
      "properties": "Appears to be a silvered 1d4 dagger with some cuts running up it\u2019s spine. But when the blade is inserted into a lock, it acts as the correct key",
      "requirements": null
    },
    {
      "name": "The Patient Man's Key Ring",
      "desc": "",
      "value": null,
      "rarity": 4,
      "weight": null,
      "category": "Wondrous Item",
      "properties": "Rusty key ring containing 100 rusty keys, for any given lock, one of the keys will open said lock. You just have to keep going until you find it. 1d100 to figure out how many keys the player has to try before they succeed.",
      "requirements": null
    },
    {
      "name": "Psyche of Strife",
      "desc": "A tall mirror in ornate silvery frame with perfectly reflecting surface. The ornaments depicting faceless humanoids locked in battle. ",
      "value": 15000,
      "rarity": 5,
      "weight": 70,
      "category": "Wondrous Item",
      "properties": "Anyone who looks into the mirror will see their own perfect reflection. However, when the first character takes a glimpse on someone else's image, they will see a horrifying visage of a powerful monster (lich, mind flayer, etc.), likely to be found in the complex where the Psyche is located. This effect is commanded by a demonic intelligence imprisoned in the shiny surface, and will occur in a manner to cause maximum confusion, mistrust and likely infighting to bands of adventurers. It's very easy to shatter the mirror, however all the fragments will have the same tendency to occasionally show your best friend as a rotting undead - only to you.",
      "requirements": null
    },
    {
      "name": "Adamantine Dust",
      "desc": "This is a small jar of Adamantine dust, most likely the end result of exposing a Drow item to the light of day. It seems the previous owner wasn't quite ready to let go of it.",
      "value": 1,
      "rarity": 1,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Adjatha the Drinker",
      "desc": "This blade belonged to Dabbar, a long dead servant of Bhaal that exercised control over his minions in the most brutal of ways. In addition to strengthening the mind against the guile of others, the sword absorbs life energy from an opponent with each successful hit, healing the user. Dabbar considered it a failure of his officers if he returned from battle in less than perfect health, and as the rest of the company watched, he would administer beatings until fully healed.",
      "value": 3500,
      "rarity": 4,
      "weight": 1,
      "category": "Weapon",
      "properties": "1d8+2 Slashing - Versatile (1d10+2)\nHeals the wielder 1 hit point every time it hits the target. Makes wielder immune to charm and domination status effects.",
      "requirements": "Martial Weapon Expertise"
    },
    {
      "name": "Adventurer's Robe",
      "desc": "This robe has been specially enchanted to meet the eclectic needs of the adventuring mage. Aside from protecting the wearer from various forms of crushing damage, it also provides protection from the basilisk's petrying gaze and polymorphing powers of rival mages. As with other such robes, the Adventurer's Robe can only be worn by those engaged in the wizardly profession.\t",
      "value": 600,
      "rarity": 3,
      "weight": 4,
      "category": "Armor",
      "properties": "AC: 11 + Dex Modifier\nDisadvantage on Stealth\n+ 1 bonus vs. petrification & polymorph",
      "requirements": null
    },
    {
      "name": "Leather Armor",
      "desc": "The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.",
      "value": 10,
      "rarity": 2,
      "weight": 10,
      "category": "Armor",
      "properties": "Light Armor\nArmor Class: 11 + Dex Modifier",
      "requirements": null
    },
    {
      "name": "Padded Armor",
      "desc": "Padded armor consists of quilted layers of cloth and batting.",
      "value": 5,
      "rarity": 2,
      "weight": 8,
      "category": "Armor",
      "properties": "Light Armor\nArmor Class: 11 + Dex Modifier\nDisadvantage on Stealth",
      "requirements": null
    },
    {
      "name": "Studded Armor",
      "desc": "Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.",
      "value": 45,
      "rarity": 2,
      "weight": 13,
      "category": "Armor",
      "properties": "Light Armor\nArmor Class: 12 + Dex Modifier",
      "requirements": null
    },
    {
      "name": "Hide Armor",
      "desc": "This crude armor consists of thick furs and pelts. It is commonly worn by barbarian tribes, evil humanoids, and other folk who lack access to the tools and materials needed to create better armor.",
      "value": 10,
      "rarity": 2,
      "weight": 12,
      "category": "Armor",
      "properties": "Medium Armor\nArmor Class: 12 + Dex Modifier (max 2)",
      "requirements": null
    },
    {
      "name": "Breastplate Armor",
      "desc": "This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer's vital organs while leaving the wearer relatively unencumbered.",
      "value": 400,
      "rarity": 2,
      "weight": 20,
      "category": "Armor",
      "properties": "Medium Armor\nArmor Class: 14 + Dex Modifier (max 2)",
      "requirements": null
    },
    {
      "name": "Half Plate Armor",
      "desc": "Half plate consists of shaped metal plates that cover most of the wearer's body. It does not include leg protection beyond simple greaves that are attached with leather straps.",
      "value": 750,
      "rarity": 2,
      "weight": 40,
      "category": "Armor",
      "properties": "Medium Armor\nArmor Class: 15 + Dex Modifier (max 2)\nDisadvantage on Stealth",
      "requirements": null
    },
    {
      "name": "Chain Shirt Armor",
      "desc": "Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest protection to the wearer's upper body and allows the sound of the rings rubbing against one another to be muffled by outer layers.",
      "value": 50,
      "rarity": 2,
      "weight": 20,
      "category": "Armor",
      "properties": "Medium Armor\nArmor Class: 13 + Dex Modifier (max 2)",
      "requirements": null
    },
    {
      "name": "Scale Mail Armor",
      "desc": "This armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets.",
      "value": 50,
      "rarity": 2,
      "weight": 45,
      "category": "Armor",
      "properties": "Medium Armor\nArmor Class: 14 + Dex Modifier (max 2)\nDisadvantage on Stealth",
      "requirements": null
    },
    {
      "name": "Ring Mail Armor",
      "desc": "This armor is leather armor with heavy rings sewn into it. The rings help reinforce the armor against blows from swords and axes. Ring mail is inferior to chain mail, and it's usually worn only by those who can't afford better armor.",
      "value": 30,
      "rarity": 2,
      "weight": 40,
      "category": "Armor",
      "properties": "Heavy Armor\nArmor Class: 14\nDisadvantage on Stealth",
      "requirements": null
    },
    {
      "name": "Plate Armor",
      "desc": "Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.",
      "value": 1500,
      "rarity": 2,
      "weight": 65,
      "category": "Armor",
      "properties": "Heavy Armor\nArmour Class: 18\nDisadvantage on Stealth",
      "requirements": "Strength: 15"
    },
    {
      "name": "Chain Mail Armor",
      "desc": "Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets.",
      "value": 75,
      "rarity": 2,
      "weight": 55,
      "category": "Armor",
      "properties": "Heavy Armor\nArmour Class: 16\nDisadvantage on Stealth",
      "requirements": "Strength: 13"
    },
    {
      "name": "Splint Armor",
      "desc": "This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible chain mail protects the joints.",
      "value": 200,
      "rarity": 2,
      "weight": 60,
      "category": "Armor",
      "properties": "Heavy Armor\nArmour Class: 17\nDisadvantage on Stealth",
      "requirements": "Strength: 15"
    },
    {
      "name": "Shield",
      "desc": "A shield is made from wood or metal and is carried in one hand.",
      "value": 10,
      "rarity": 2,
      "weight": 6,
      "category": "Armor",
      "properties": "Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.",
      "requirements": null
    },
    {
      "name": "Air Elemental Statue",
      "desc": "This enchanted statuette depicts the swirling form of an air elemental. When stood close, you can feel a cooling breeze swirling around the statuette.",
      "value": 450,
      "rarity": 3,
      "weight": 10,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Albruin",
      "desc": "Basalin was a large man, rumored, far from his hearing, to be a werebear. He long wielded the bastard sword Albruin in the protection of his village, slaying giant spiders that plagued the area. The sword protected him from their poison and also allowed him to see invisible Red Wizards who controlled some of the more fantastic variants. The reason for their enmity is unknown.",
      "value": 2000,
      "rarity": 4,
      "weight": 8,
      "category": "Weapon",
      "properties": "2d4+3 Slashing - Versatile (2d6+2)\nRenders user immune to poison.\nCan detect invisibility once per day.",
      "requirements": "Requires Attunement\nStrength: 11"
    },
    {
      "name": "Algernon's Cloak",
      "desc": "Algernon's cloak is imbued with magical properties such that the wearer will seem to shine with an inner glow.\t",
      "value": 1750,
      "rarity": 4,
      "weight": 3,
      "category": "Wondrous Item",
      "properties": "Provides +2 to Charisma",
      "requirements": "Requires Attunement"
    },
    {
      "name": "Ammo Belt",
      "desc": "This shoulder belt is ideally suited for holding sling bullets, darts, arrows or bolts.",
      "value": 200,
      "rarity": 2,
      "weight": 2,
      "category": "Adventuring Gear",
      "properties": "More reliable than a quiver.",
      "requirements": null
    },
    {
      "name": "Alchemist's Fire",
      "desc": "This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.",
      "value": 50,
      "rarity": 2,
      "weight": 1,
      "category": "Adventuring Gear",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Silver Ring",
      "desc": "A simple silver ring that bears no inscription or identifying marks on it's surface.",
      "value": 10,
      "rarity": 2,
      "weight": null,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sharpening Sheath",
      "desc": "A dagger sheath of hardened leather, set with a number of cheap decorative stones. Any dagger kept within this sheath is automatically sharpened as if it were a fresh blade.",
      "value": 200,
      "rarity": 2,
      "weight": 1,
      "category": "Treasure",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Abacus",
      "desc": "",
      "value": 2,
      "rarity": 1,
      "weight": 2,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Acid (vial)",
      "desc": "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage.",
      "value": 25,
      "rarity": 2,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Alchemist\u2019s fire (flask)",
      "desc": "This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.",
      "value": 50,
      "rarity": 2,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Backpack",
      "desc": "Holds 1 cubic foot/30 pounds of gear",
      "value": 2,
      "rarity": 1,
      "weight": 5,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ball bearings (bag of 1000)",
      "desc": "As an action, you can spill these tiny metal balls from their pouch to cover a level area 10 feet square. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn\u2019t need to make the saving throw.",
      "value": 1,
      "rarity": 1,
      "weight": 2,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Barrel",
      "desc": "Holds 40 gallons liquid, or 4 cubic feet solid",
      "value": 2,
      "rarity": 1,
      "weight": 70,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Basket",
      "desc": "Holds 2 cubic feet/40 pounds of gear",
      "value": 0.4,
      "rarity": 1,
      "weight": 2,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bedroll",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": 7,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bell",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Blanket",
      "desc": "",
      "value": 0.5,
      "rarity": 1,
      "weight": 3,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Block and tackle",
      "desc": "A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift.",
      "value": 1,
      "rarity": 1,
      "weight": 5,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Book",
      "desc": "A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a spellbook.",
      "value": 25,
      "rarity": 2,
      "weight": 5,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bottle glass",
      "desc": "Holds 1 1/2 pints liquid",
      "value": 2,
      "rarity": 1,
      "weight": 2,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Bucket",
      "desc": "Holds 3 gallons liquid, or 1/2 cubic foot solid",
      "value": 0.05,
      "rarity": 1,
      "weight": 2,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Caltrops (bag of 20)",
      "desc": "As an action, you can spread a single bag of caltrops to cover a 5-foot-square area. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving and take 1 piercing damage. Until the creature regains at least 1 hit point, its walking speed is reduced by 10 feet. A creature moving through the area at half speed doesn\u2019t need to make the saving throw.",
      "value": 1,
      "rarity": 1,
      "weight": 2,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Candle",
      "desc": "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet.",
      "value": 0.01,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Case, crossbow bolt",
      "desc": "This wooden case can hold up to twenty crossbow bolts.",
      "value": 1,
      "rarity": 1,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Case, map or scroll",
      "desc": "This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment.",
      "value": 1,
      "rarity": 1,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Chain (10 feet)",
      "desc": "A chain has 10 hit points. It can be burst with a successful DC 20 Strength check.",
      "value": 5,
      "rarity": 1,
      "weight": 10,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Chalk (1 piece)",
      "desc": "",
      "value": 0.01,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Chest",
      "desc": "Holds 12 cubic feet/300 pounds of gear",
      "value": 5,
      "rarity": 1,
      "weight": 25,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Clothes, common",
      "desc": "",
      "value": 0.5,
      "rarity": 1,
      "weight": 3,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Clothes, costume",
      "desc": "",
      "value": 5,
      "rarity": 1,
      "weight": 4,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Clothes, fine",
      "desc": "",
      "value": 15,
      "rarity": 1,
      "weight": 6,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Clothes, traveler\u2019s",
      "desc": "",
      "value": 2,
      "rarity": 1,
      "weight": 4,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Crowbar",
      "desc": "Using a crowbar grants advantage to Strength checks where the crowbar\u2019s leverage can be applied.",
      "value": 2,
      "rarity": 1,
      "weight": 5,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Flask or tankard",
      "desc": "Holds 1 pint liquid",
      "value": 0.02,
      "rarity": 1,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Grappling hook",
      "desc": "",
      "value": 2,
      "rarity": 1,
      "weight": 4,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hammer ",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": 3,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hammer, sledge",
      "desc": "",
      "value": 2,
      "rarity": 1,
      "weight": 10,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hourglass",
      "desc": "",
      "value": 25,
      "rarity": 2,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Hunting trap",
      "desc": "When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature.",
      "value": 5,
      "rarity": 1,
      "weight": 25,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ink (1 ounce bottle)",
      "desc": "",
      "value": 10,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ink pen",
      "desc": "",
      "value": 0.02,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Jug or pitcher",
      "desc": "Holds 1 gallon liquid",
      "value": 0.02,
      "rarity": 1,
      "weight": 4,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ladder (10-foot)",
      "desc": "",
      "value": 0.1,
      "rarity": 1,
      "weight": 25,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Lamp",
      "desc": "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.",
      "value": 0.5,
      "rarity": 1,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Lantern bullseye",
      "desc": "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.",
      "value": 10,
      "rarity": 1,
      "weight": 2,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Lantern hooded",
      "desc": "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius.",
      "value": 5,
      "rarity": 1,
      "weight": 2,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Lock",
      "desc": "A key is provided with the lock. Without the key, a creature proficient with thieves\u2019 tools can pick this lock with a successful DC 15 Dexterity check. Your DM may decide that better locks are available for higher prices.",
      "value": 10,
      "rarity": 1,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Magnifying glass",
      "desc": "This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed.",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Manacles",
      "desc": "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves\u2019 tools can pick the manacles\u2019 lock with a successful DC 15 Dexterity check. Manacles have 15 hit points.",
      "value": 2,
      "rarity": 1,
      "weight": 6,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Mess kit",
      "desc": "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.",
      "value": 0.2,
      "rarity": 1,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Steel Mirror ",
      "desc": "",
      "value": 5,
      "rarity": 1,
      "weight": 0.5,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Oil (flask)",
      "desc": "Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn.",
      "value": 0.1,
      "rarity": 1,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Paper (one sheet)",
      "desc": "",
      "value": 0.2,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Parchment (one sheet)",
      "desc": "",
      "value": 0.1,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Perfume (vial)",
      "desc": "",
      "value": 5,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pick Miner\u2019s",
      "desc": "",
      "value": 2,
      "rarity": 1,
      "weight": 10,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Piton",
      "desc": "",
      "value": 0.05,
      "rarity": 1,
      "weight": 0.25,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Poison basic (vial)",
      "desc": "You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying.",
      "value": 100,
      "rarity": 3,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pole (10-foot)",
      "desc": "",
      "value": 0.05,
      "rarity": 1,
      "weight": 7,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pot iron",
      "desc": "Holds 1 gallon liquid",
      "value": 2,
      "rarity": 1,
      "weight": 10,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Potion of healing",
      "desc": "A character w ho drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action.",
      "value": 50,
      "rarity": 2,
      "weight": 0.5,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Pouch",
      "desc": "A cloth or leather pouch can hold up to 20. Holds 1/5 cubic foot/6 pounds of gear sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a component pouch.",
      "value": 0.5,
      "rarity": 1,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Quiver",
      "desc": "A quiver can hold up to 20 arrows.",
      "value": 1,
      "rarity": 1,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Ram portable",
      "desc": "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check.",
      "value": 4,
      "rarity": 1,
      "weight": 35,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Rations (1 day)",
      "desc": "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts.",
      "value": 0.5,
      "rarity": 1,
      "weight": 2,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Robes",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": 4,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Rope, hempen (50 feet)",
      "desc": "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.",
      "value": 1,
      "rarity": 1,
      "weight": 10,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Rope, silk (50 feet)",
      "desc": "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.",
      "value": 10,
      "rarity": 1,
      "weight": 5,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sack",
      "desc": "Holds 1 cubic foot/30 pounds of gear",
      "value": 0.01,
      "rarity": 1,
      "weight": 0.5,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Scale merchant\u2019s",
      "desc": "A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth.",
      "value": 5,
      "rarity": 1,
      "weight": 3,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Sealing wax",
      "desc": "",
      "value": 0.5,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Shovel",
      "desc": "",
      "value": 2,
      "rarity": 1,
      "weight": 5,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Signal whistle",
      "desc": "",
      "value": 0.05,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Signet ring",
      "desc": "",
      "value": 5,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Soap",
      "desc": "",
      "value": 0.02,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Spikes iron (10)",
      "desc": "",
      "value": 1,
      "rarity": 1,
      "weight": 5,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Spyglass",
      "desc": "Objects viewed through a spyglass are magnified to twice their size.",
      "value": 1000,
      "rarity": 5,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tent (two-person)",
      "desc": "A simple and portable canvas shelter that sleeps two.",
      "value": 2,
      "rarity": 1,
      "weight": 20,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Tinderbox",
      "desc": "",
      "value": 0.5,
      "rarity": 1,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Torch",
      "desc": "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage.",
      "value": 0.01,
      "rarity": 1,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Vial",
      "desc": "Holds 4 ounces liquid",
      "value": 1,
      "rarity": 1,
      "weight": null,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Waterskin",
      "desc": "Holds 4 pints liquid",
      "value": 0.2,
      "rarity": 1,
      "weight": 5,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
    {
      "name": "Whetstone",
      "desc": "",
      "value": 0.01,
      "rarity": 1,
      "weight": 1,
      "category": "Misc",
      "properties": null,
      "requirements": null
    },
  ],
};
export default ITEMS;