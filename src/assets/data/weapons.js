const DAMAGE_TYPES = {
  BLUDGEONING: 'bludgeoning',
  PIERCING: 'piercing',
  SLASHING: 'slashing',
  NONE: 'none'
};
  
const damageToDiceString = (value, num) => `${num ? num : 1}d${value}`;

const WEAPON_PROPERTIES = Object.freeze({
  VERSATILE: (dmg) => ({
    text: `Versatile (${damageToDiceString(dmg)})`,
    details: 'This weapon can be used with one or two hands.'
  }),
  FINESSE: {
    text: 'Finesse',
    details: 'Use your choice of your Strength or Dexterity modifier for attack and damage rolls.'
  },
  HEAVY: {
    text: 'Heavy',
    details: 'Small creatures have disadvantage on attack rolls with heavy weapons.'
  },
  LIGHT: {
    text: 'Light',
    details: `When you Attack with a light melee weapon you're holding in one hand,
    you can use a Bonus Action to Attack with a different light melee weapon that
    you're holding in the other hand.`
  },
  THROWN: (rangeMin, rangeMax) => ({
    text: `Thrown (Range: ${rangeMin}/${rangeMax})`
  }),
  AMMUNITION: (rangeMin, rangeMax) => ({
    text: `Ammunition (Range: ${rangeMin}/${rangeMax})`,
    details: `You can use a weapon that has the Ammunition property to make a
    ranged Attack only if you have Ammunition to fire from the weapon.`
  }),
  REACH: {
    text: 'Reach',
    details: `This weapon adds 5 feet to your reach when you Attack with it, as
    well as when determining your reach for Opportunity Attacks with it.`
  },
  TWO_HANDED: {
    text: 'Two-Handed',
    details: 'This weapon requires two hands when you Attack with it.'
  },
  LOADING: {
    text: 'Loading',
    details: ''
  },
  LANCE: {
    text: 'Lance',
    details: `You have disadvantage when you use a lance to Attack a
    target within 5 feet of you. Also, a lance requires two hands to
    wield when you aren’t mounted.`
  },
  NET: {
    text: 'Net',
    details: 'A Large or smaller creature hit by a net is Restrained until it is freed.'
  }
});

const Damage = (die, num=1) => ({
  die,
  num,
  text: die === 0 ? 'None' : die > 1 ? `${num}d${die}` : '1'
});

const Weapon = (text, value, weight, dmg, dmgType, properties) => ({
  text,
  value,
  weight,
  dmg,
  dmgType,
  properties: properties ? properties : []
});

export default Object.freeze({
  SIMPLE: {
    text: 'Simple Weapon',
    MELEE: {
      text: 'Simple Melee Weapon',
      CLUB: Weapon(
        'Club', 10, 2, Damage(4), DAMAGE_TYPES.BLUDGEONING,
        [WEAPON_PROPERTIES.LIGHT]
      ),
      DAGGER: Weapon(
        'Dagger', 200, 1, Damage(4), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.FINESSE, WEAPON_PROPERTIES.LIGHT, WEAPON_PROPERTIES.THROWN(20, 60)]
      ),
      GREATCLUB: Weapon(
        'Greatclub', 20, 10, Damage(8), DAMAGE_TYPES.BLUDGEONING,
        [WEAPON_PROPERTIES.TWO_HANDED]
      ),
      HANDAXE: Weapon(
        'Handaxe', 500, 2, Damage(6), DAMAGE_TYPES.SLASHING,
        [WEAPON_PROPERTIES.LIGHT, WEAPON_PROPERTIES.THROWN(20, 60)]
      ),
      LIGHT_HAMMER: Weapon(
        'Light Hammer', 200, 2, Damage(4), DAMAGE_TYPES.BLUDGEONING,
        [WEAPON_PROPERTIES.LIGHT, WEAPON_PROPERTIES.THROWN(20, 60)]
      ),
      JAVELIN: Weapon(
        'Javelin', 50, 2, Damage(6), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.THROWN(30, 120)]
      ),
      MACE: Weapon(
        'Mace', 500, 4, Damage(6), DAMAGE_TYPES.BLUDGEONING
      ),
      QUARTERSTAFF: Weapon(
        'Quarterstaff', 20, 4, Damage(6), DAMAGE_TYPES.BLUDGEONING,
        [WEAPON_PROPERTIES.VERSATILE(8)]
      ),
      SICKLE: Weapon(
        'Sickle', 100, 2, Damage(4), DAMAGE_TYPES.SLASHING,
        [WEAPON_PROPERTIES.LIGHT]
      ),
      SPEAR: Weapon(
        'Spear', 100, 3, Damage(6), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.THROWN(20, 60), WEAPON_PROPERTIES.VERSATILE(8)]
      )
    },
    RANGED: {
      text: 'Simple Ranged Weapon',
      LIGHT_CROSSBOW: Weapon(
        'Light Crossbow', 2500, 5, Damage(8), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.AMMUNITION(80,320), WEAPON_PROPERTIES.LOADING, WEAPON_PROPERTIES.TWO_HANDED]
      ),
      DART: Weapon(
        'Dart', 5, 0.25, Damage(4), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.FINESSE, WEAPON_PROPERTIES.THROWN(20,60)]
      ),
      SHORTBOW: Weapon(
        'Shortbow', 2500, 2, Damage(6), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.AMMUNITION(80,320), WEAPON_PROPERTIES.TWO_HANDED]
      ),
      SLING: Weapon(
        'Sling', 10, 1, Damage(4), DAMAGE_TYPES.BLUDGEONING,
        [WEAPON_PROPERTIES.AMMUNITION(30,120)]
      )
    }
  },
  MARTIAL: {
    text: 'Martial Weapon',
    MELEE: {
      text: 'Martial Melee Weapon',
      BATTLEAXE: Weapon(
        'Battleaxe', 100, 4, Damage(8), DAMAGE_TYPES.SLASHING,
        [WEAPON_PROPERTIES.VERSATILE(10)]
      ),
      FLAIL: Weapon(
        'Flail', 100, 2, Damage(8), DAMAGE_TYPES.BLUDGEONING
      ),
      GLAIVE: Weapon(
        'Glaive', 200, 6, Damage(10), DAMAGE_TYPES.SLASHING,
        [WEAPON_PROPERTIES.HEAVY, WEAPON_PROPERTIES.REACH, WEAPON_PROPERTIES.TWO_HANDED]
      ),
      GREATAXE: Weapon(
        'Greataxe', 500, 7, Damage(12), DAMAGE_TYPES.SLASHING,
        [WEAPON_PROPERTIES.HEAVY, WEAPON_PROPERTIES.TWO_HANDED]
      ),
      GREATSWORD: Weapon(
        'Greatsword', 500, 6, Damage(6,2), DAMAGE_TYPES.SLASHING,
        [WEAPON_PROPERTIES.HEAVY, WEAPON_PROPERTIES.TWO_HANDED]
      ),
      HALBERD: Weapon(
        'Halberd', 200, 6, Damage(10), DAMAGE_TYPES.SLASHING,
        [WEAPON_PROPERTIES.HEAVY, WEAPON_PROPERTIES.REACH, WEAPON_PROPERTIES.TWO_HANDED]
      ),
      LANCE:  Weapon(
        'Lance', 1000, 6, Damage(12), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.REACH, WEAPON_PROPERTIES.LANCE]
      ),
      LONGSWORD: Weapon(
        'Longsword', 1500, 3, Damage(8), DAMAGE_TYPES.SLASHING,
        [WEAPON_PROPERTIES.VERSATILE(10)]
      ),
      MAUL: Weapon(
        'Maul', 1000, 10, Damage(6,2), DAMAGE_TYPES.BLUDGEONING,
        [WEAPON_PROPERTIES.HEAVY, WEAPON_PROPERTIES.TWO_HANDED]
      ),
      MORNINGSTAR: Weapon(
        'Morningstar', 1500, 4, Damage(8), DAMAGE_TYPES.PIERCING
      ),
      PIKE: Weapon(
        'Pike', 500, 18, Damage(10), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.HEAVY, WEAPON_PROPERTIES.REACH, WEAPON_PROPERTIES.TWO_HANDED]
      ),
      RAPIER: Weapon(
        'Rapier', 2500, 2, Damage(8), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.FINESSE]
      ),
      SCIMITHAR: Weapon(
        'Scimitar', 2500, 3, Damage(6), DAMAGE_TYPES.SLASHING,
        [WEAPON_PROPERTIES.FINESSE, WEAPON_PROPERTIES.LIGHT]
      ),
      SHORTSWORD: Weapon(
        'Shortsword', 1000, 2, Damage(6), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.FINESSE, WEAPON_PROPERTIES.LIGHT]
      ),
      TRIDENT: Weapon(
        'Trident', 500, 4, Damage(6), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.THROWN(20,60), WEAPON_PROPERTIES.VERSATILE(8)]
      ),
      WAR_PICK: Weapon(
        'War Pick', 500, 2, Damage(8), DAMAGE_TYPES.PIERCING
      ),
      WARHAMMER: Weapon(
        'Warhammer', 1500, 2, Damage(8), DAMAGE_TYPES.BLUDGEONING,
        [WEAPON_PROPERTIES.VERSATILE(10)]
      ),
      WHIP: Weapon(
        'Whip', 200, 3, Damage(4), DAMAGE_TYPES.SLASHING,
        [WEAPON_PROPERTIES.FINESSE, WEAPON_PROPERTIES.REACH]
      ),
    },
    RANGED: {
      text: 'Martial Ranged Weapon',
      BLOWGUN: Weapon(
        'Blowgun', 1000, 1, Damage(1), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.AMMUNITION(25,100), WEAPON_PROPERTIES.LOADING]
      ),
      HAND_CROSSBOW: Weapon(
        'Hand Crossbow', 7500, 3, Damage(6), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.AMMUNITION(30,120), WEAPON_PROPERTIES.LIGHT, WEAPON_PROPERTIES.LOADING]
      ),
      HEAVY_CROSSBOW: Weapon(
        'Heavy Crossbow', 5000, 18, Damage(10), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.AMMUNITION(100,400), WEAPON_PROPERTIES.HEAVY, WEAPON_PROPERTIES.LOADING, WEAPON_PROPERTIES.TWO_HANDED]
      ),
      LONGBOW: Weapon(
        'Longbow', 5000, 2, Damage(8), DAMAGE_TYPES.PIERCING,
        [WEAPON_PROPERTIES.AMMUNITION(150,600), WEAPON_PROPERTIES.HEAVY, WEAPON_PROPERTIES.TWO_HANDED]
      ),
      NET: Weapon(
        'Net', 100, 3, Damage(0), DAMAGE_TYPES.NONE,
        [WEAPON_PROPERTIES.NET, WEAPON_PROPERTIES.THROWN(5,15)]
      )
    }
  }
});