const Armor = (text, value, ac, weight, strengthRequirement=null, stealthDisadvantage=false) => ({
  text,
  value,
  // Armor class.
  ac,
  // Weight in lbs.
  weight,
  // Whether the armor requires a certain STR ability to wear without a -10 ft. penalty to movement.
  strengthRequirement,
  // Whether the armor gives Disadvantage on Stealth checks.
  stealthDisadvantage
});

// TODO: Temporarily removed bc not the appropriate place for this. Move to a stores data struct.
// LOCALES:
// Locales reflect the sort of places that this item can be purchased in.
// The locale argument may hold one of three values:
// 1 = Premium
// 2 = Premium, Urban
// 3 = Premium, Urban, Rural

export default Object.freeze({
  LIGHT: {
    text: 'Light Armor',
    // How much DEX mod can be applied to AC of this group of armor.
    // -1 for unlimited DEX mod.
    dexMod: -1,
    // Amount of time it takes to don armor (min).
    don: 1,
    // Amount of time it takes to take off armor (min).
    doff: 1,
    PADDED: Armor('Padded', 5.0, 11, null, true, 8),
    LEATHER: Armor('Leather', 10.0, 11, null, false, 10),
    STUDDED_LEATHER: Armor('Studded Leather', 45.0, 12, null, false, 13)
  },
  MEDIUM: {
    text: 'Medium Armor',
    // 2 for DEX mod capped at +2 points.
    dexMod: 2,
    don: 5,
    doff: 1,
    HIDE: Armor('Hide', 10.0, 12, null, false, 12),
    CHAIN_SHIRT: Armor('Chain Shirt', 50.0, 13, null, false, 20),
    SCALE_MAIL: Armor('Scale Mail', 50.0, 14, null, true, 45),
    BREASTPLATE: Armor('Breastplate', 400.0, 14, null, false, 20),
    HALF_PLATE: Armor('Breastplate', 750.0, 15, null, true, 40),
  },
  HEAVY: {
    text: 'Heavy Armor',
    // null for DEX mod N/A.
    dexMod: null,
    don: 10,
    doff: 5,
    RING_MAIL: Armor('Ring Mail', 30.0, 14, null, true, 40),
    CHAIN_MAIL: Armor('Chain Shirt', 75.0, 16, 13, true, 55),
    SPLINT: Armor('Splint', 200.0, 14, 17, true, 60),
    PLATE: Armor('Plate', 1500.0, 14, 18, true, 65),
  },
  SHIELDS: {
    text: 'Shields',
    // null for DEX mod N/A.
    don: 0.1,
    doff: 0.1,
    dexMod: null,
    SHIELD: Armor('Shield', 10.0, 2, null, false, 6),
    WOOD_SHIELD: Armor('Wooden Shield', 10.0, 2, null, false, 6)
  }
});