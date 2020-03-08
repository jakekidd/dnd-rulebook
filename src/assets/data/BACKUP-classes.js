import ARMOR from './armor';
import STATS from './stats';
import WEAPONS from './weapons';
import FEATURES from './features.js';

// TODO:
// DATA:
// - RACES
// - SKILLS
// - ITEMS
// - SPELLS, labeled by which classes can use them, sortable by school and class
// - DIETIES
// - BACKGROUNDS
// - ADVENTURING

// COMBAT

// CHARACTER CREATION
// - pick class, race, background
// - roll for stats
// 




// FEATS?

// TODO: Fix ASI for some of these (fighter?)

const TIMELINE_DEFAULT_ASI = [4,8,12,16,19];

const Item = (item, count=1) => Object.assign(item, {count});
const TimelineColumn = (title, dataIndex, modify=null, subcolumns=null, align='center') => {
  // If there are a number of subcolumns, convert to TimelineColumn children.
  var children = [];
  for (let i = 1; i < (subcolumns + 1); i++) {
    children.push({
      align: 'center',
      key: `key-${i}`,
      title: i.toString(),
      dataIndex: `${dataIndex}[${i-1}].value`
    });
  }
  return {
    title,
    dataIndex,
    align,
    modify,
    children: subcolumns ? children : null
  };
};
const TIMELINE_BASE_COLUMNS = [
  TimelineColumn('Proficiency Bonus', 'proficiency', i => `+${i}`),
  TimelineColumn('Features', 'features',
    i => i.map((f) => f.name),
  )
];
const CANTRIPS_KNOWN_COLUMN = TimelineColumn('Cantrips Known', 'cantrips');
const SPELLS_KNOWN_COLUMN = TimelineColumn('Spells Known', 'spellsKnown');
const SPELL_SLOTS_COLUMN = TimelineColumn('Spell Slots per Level', 'spellSlots',
  s => new Array(9).fill(0).map((_,i) => {
    const key = (i + 1).toString();
    return {
      'key': key,
      'value': s[i] ? s[i].toString() : ''
    }
  }), 9);

// What we want to do is basically assure that each class formatted equally into the same data structure,
// and that the arrangement can be changed easily.
const Class = ({ title, image, details, backstory, spellcasting, notes, hitDice, recommendedStats, proficiencies, equipment, timeline }) => {
  const throwUndefinedError = (item) => {throw new Error(`${item} was not defined for class ${title}.`)};
  return ({
    title: title ? title : throwUndefinedError('title'),
    route: title.toLowerCase(),
    image: image ? `classes/${image}` : throwUndefinedError('image'),
    details: details ? details : throwUndefinedError('details'),
    backstory: backstory ? backstory : throwUndefinedError('backstory'),
    spellcasting: spellcasting !== undefined ? (() => {
      // For classes that don't cast spells, we just return false.
      if (spellcasting === false) { return false };
      // Check to make sure spellcasting has all needed properties.
      const properties = [spellcasting.details, spellcasting.preparing, spellcasting.ability,
        spellcasting.save, spellcasting.mod, spellcasting.other];
      if (!properties.every(p => p !== undefined)) {
        throw new Error(`For class ${title} spellcasting data did not have appropriate content present:\n${properties.map(p => !!p).join('\n')}`);
      }
      return spellcasting
    })() : throwUndefinedError('spellcasting'),
    notes: notes ? notes : throwUndefinedError('notes'),
    proficiencies: proficiencies ? (() => {
      // For classes that don't cast spells, we just return false.
      if (proficiencies === false) { return false };
      // Check to make sure spellcasting has all needed properties.
      const properties = [proficiencies.armor, proficiencies.weapons, proficiencies.savingThrows,
        proficiencies.tools, proficiencies.skills];
      if (!properties.every(p => p !== undefined)) {
        throw new Error(`For class ${title} proficiencies data did not have appropriate content present:\n${properties.map(p => !!p).join('\n')}`);
      }
      return proficiencies
    })() : throwUndefinedError('proficiencies'),
    equipment: equipment ? equipment : throwUndefinedError('equipment'),
    recommendedStats: recommendedStats ? recommendedStats : throwUndefinedError('recommendedStats'),
    hitDice: hitDice ? hitDice : throwUndefinedError('hitDice'),
    timeline: timeline ? (() => {
      // Make sure leveling timeline has all needed properties.
      timeline.rows = timeline.rows.map((row,index) => {
        // Add ordinal level to row.
        const ordinalSuffixOf = i => {
          var j = i % 10,
              k = i % 100;
          if (j === 1 && k !== 11) {
              return i + "st";
          }
          if (j === 2 && k !== 12) {
              return i + "nd";
          }
          if (j === 3 && k !== 13) {
              return i + "rd";
          }
          return i + "th";
        };
        row.level = ordinalSuffixOf(index + 1);
        row.key = index.toString();

        // Add ability score improvements to appropriate rows.
        if (timeline.asi.includes(index+1)) {
          row.features.push(FEATURES.ABILITY_SCORE_IMPROVEMENT);
        }
        row.featureObjects = row.features;
        
        // Check to see if we need to apply a modify to this row.
        Object.keys(row).forEach(k => {
          timeline.columns.forEach(col => {
            if (col.dataIndex === k && col.modify) {
              try {
                row[k] = col.modify(row[k])
              } catch(err) {
                console.log(`Error occurred modifying class ${title} at level index ${index}`, err)
              }
            }
          })
        });
        return row;
      });
      return timeline;
    })() : throwUndefinedError('timeline'),
    generateTimeline: (archetype) => {
      // TODO: Include the features of passed in archetype.

      return {
        columns: timeline.columns,
        rows: timeline.rows
      };
    }
  })
}

export default {
  BARBARIAN: Class({
    title: 'Barbarian',
    image: 'barbarian.svg',
    details: [
      `People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one’s own nature was a mark of superiority.
      To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and
      ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or
      grasslands where their tribes live and hunt.`,
      `Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience.
      A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.`
    ],
    backstory: [
      `When creating a barbarian character, think about where your character comes from and his or her place in the world.`,
      `What led you to take up the adventuring life? Were you lured to settled lands by the promise of riches? Did you join forces with soldiers of those lands
      to face a shared threat? Did monsters or an invading horde drive you out of your homeland, making you a rootless refugee? Perhaps you were a prisoner of war,
      brought in chains to “civilized” lands and only now able to win your freedom. Or you might have been cast out from your people because of a crime you
      committed, a taboo you violated, or a coup that removed you from a position of authority.`
    ],
    spellcasting: false,
    notes: [],
    hitDice: 12,
    recommendedStats: [STATS.STR, STATS.CON],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.SHIELDS],
      weapons: [WEAPONS.SIMPLE, WEAPONS.MARTIAL],
      savingThrows: [STATS.STR, STATS.CON],
      tools: [],
      skills: {
        max: 2,
        options: []
      }
    },
    equipment: {
      mainWeaponOptions: [Item(WEAPONS.MARTIAL.MELEE.GREATAXE), Item(WEAPONS.MARTIAL.MELEE)],
      sideWeaponOptions: [Item(WEAPONS.SIMPLE.MELEE.HANDAXE, 2), Item(WEAPONS.SIMPLE)],
      tools: [],
      packs: [],
      other: [Item(WEAPONS.SIMPLE.MELEE.JAVELIN, 4)]
    },
    timeline: {
      columns: TIMELINE_BASE_COLUMNS.concat([TimelineColumn('Rages', 'rages'), TimelineColumn('Rage Damage', 'rageDamage')]),
      archetypes: [],
      asi: TIMELINE_DEFAULT_ASI,
      rows: [
        /*  1 */ {proficiency: 2, features: [FEATURES.RAGE, FEATURES.BARBARIAN_UNARMORED_DEFENSE], rages: 2, rageDamage: 2},
        /*  2 */ {proficiency: 2, features: [FEATURES.RECKLESS_ATTACK, FEATURES.DANGER_SENSE], rages: 2, rageDamage: 2},
        /*  3 */ {proficiency: 2, features: [FEATURES.PRIMAL_PATH], rages: 3, rageDamage: 2},
        /*  4 */ {proficiency: 2, features: [], rages: 3, rageDamage: 2},
        /*  5 */ {proficiency: 3, features: [FEATURES.EXTRA_ATTACK_I, FEATURES.FAST_MOVEMENT], rages: 3, rageDamage: 2},
        /*  6 */ {proficiency: 3, features: [], rages: 4, rageDamage: 2},
        /*  7 */ {proficiency: 3, features: [FEATURES.FERAL_INSTINCT], rages: 4, rageDamage: 2},
        /*  8 */ {proficiency: 3, features: [], rages: 4, rageDamage: 2},
        /*  9 */ {proficiency: 4, features: [FEATURES.BRUTAL_CRITICAL_I], rages: 4, rageDamage: 3},
        /* 10 */ {proficiency: 4, features: [], rages: 4, rageDamage: 3},
        /* 11 */ {proficiency: 4, features: [FEATURES.RELENTLESS_RAGE], rages: 4, rageDamage: 3},
        /* 12 */ {proficiency: 4, features: [], rages: 5, rageDamage: 3},
        /* 13 */ {proficiency: 5, features: [FEATURES.BRUTAL_CRITICAL_II], rages: 5, rageDamage: 3},
        /* 14 */ {proficiency: 5, features: [], rages: 5, rageDamage: 3},
        /* 15 */ {proficiency: 5, features: [FEATURES.PERSISTENT_RAGE], rages: 5, rageDamage: 3},
        /* 16 */ {proficiency: 5, features: [], rages: 5, rageDamage: 4},
        /* 17 */ {proficiency: 6, features: [FEATURES.BRUTAL_CRITICAL_III], rages: 6, rageDamage: 4},
        /* 18 */ {proficiency: 6, features: [FEATURES.INDOMITABLE_MIGHT], rages: 6, rageDamage: 4},
        /* 19 */ {proficiency: 6, features: [], rages: 6, rageDamage: 4},
        /* 20 */ {proficiency: 6, features: [FEATURES.PRIMAL_CHAMPION], rages: 'Unlimited', rageDamage: 4},
      ]
    },
    subclass: {
      name: 'Primal Path',
      prefix: 'Path of the ',
      levels: [3, 6, 10, 14],
      archetypes: [
        {
          title: 'Ancestral Guardian',
          details: [
            'Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger in the world as mighty spirits, who can guide and protect the living. When a barbarian who follows this path rages, the barbarian contacts the spirit world and calls on these guardian spirits for aid.',
            'Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors’ deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals.'
          ],
          restrictions: [],
          features: [FEATURES.ANCESTRAL_PROTECTORS, FEATURES.SPIRIT_SHIELD, FEATURES.CONSULT_THE_SPIRITS, FEATURES.VENGEFUL_ANCESTORS]
        },
        {
          title: 'Battlerager',
          details: [
            `Known as Kuldjargh (literally "axe idiot") in Dwarvish, battleragers are dwarf followers of the gods of war and take the Path of the Battlerager. They specialize in wearing bulky, spiked armor and throwing themselves into combat, striking with their body itself and giving themselves over to the fury of battle.`
          ],
          restrictions: [
            {
              title: 'Restrictions: Dwarves Only',
              text: `Only dwarves can follow the Path of the Battlerager. The battlerager fills a particular niche in dwarven society and culture.`
            }
          ],
          features: [FEATURES.BATTLERAGER_ARMOR, FEATURES.SPIRIT_SHIELD, FEATURES.CONSULT_THE_SPIRITS, FEATURES.VENGEFUL_ANCESTORS]
        },
        {
          title: 'Berserker',
          details: [
            `For some barbarians, rage is a means to an end – that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.`
          ],
          restrictions: [],
          features: [FEATURES.FRENZY, FEATURES.MINDLESS_RAGE, FEATURES.INTIMIDATING_PRESENCE, FEATURES.RETALIATION]
        },
        {
          title: 'Storm Herald',
          details: [
            `Typical barbarians harbor a fury that dwells within. Their rage grants them superior strength, durability, and speed. Barbarians who follow the Path of the Storm Herald learn instead to transform their rage into a mantle of primal magic that swirls around them. When in a fury, a barbarian of this path taps into nature to create powerful, magical effects.`,
            `Storm heralds are typically elite champions who train alongside druids, rangers, and others sworn to protect the natural realm. Other storm heralds hone their craft in elite lodges founded in regions wracked by storms, in the frozen reaches at the world’s end, or deep in the hottest deserts.`
          ],
          restrictions: [],
          features: [FEATURES.STORM_AURA, FEATURES.STORM_SOUL, FEATURES.SHIELDING_STORM, FEATURES.RAGING_STORM]
        },
        {
          title: 'Totem Warrior',
          details: [
            `The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage.`,
            `Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist.`
          ],
          restrictions: [],
          features: [[FEATURES.SPIRIT_SEEKER, FEATURES.TOTEM_SPIRIT], FEATURES.ASPECT_OF_THE_BEAST, FEATURES.SPIRIT_WALKER, FEATURES.TOTEMIC_ATTUNEMENT]
        },
        {
          title: 'Zealot',
          details: [
            `Some deities inspire their followers to pitch themselves into a ferocious battle fury. These barbarians are zealots – warriors who channel their rage into powerful displays of divine power.`,
            `A variety of gods across the worlds of D&D inspire their followers to embrace this path. Tempus from the Forgotten Realms and Hextor and Erythnul of Greyhawk are all prime examples. In general, the gods who inspire zealots are deities of combat, destruction, and violence. Not all are evil, but few are good.`
          ],
          restrictions: [],
          features: [[FEATURES.DIVINE_FURY, FEATURES.WARRIOR_OF_THE_GODS], FEATURES.FANATICAL_FOCUS, FEATURES.ZEALOUS_PRESENCE, FEATURES.RAGE_BEYOND_DEATH]
        },
      ]
    }
  }),

  BARD: Class({
    title: 'Bard',
    image: 'bard.svg',
    details: [
      `In the worlds of D&D, words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers.`,
      `The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor. Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging knowledge of many subjects and a natural aptitude that lets them do almost anything well. Bards become masters of the talents they set their minds to perfecting, from musical performance to esoteric knowledge.`
    ],
    backstory: [
      `Bards thrive on stories, whether those stories are true or not. Your character’s background and motivations are not as important as the stories that he or she tells about them. Perhaps you had a secure and mundane childhood. There’s no good story to be told about that, so you might paint yourself as an orphan raised by a hag in a dismal swamp. Or your childhood might be worthy of a story. Some bards acquire their magical music through extraordinary means, including the inspiration of fey or other supernatural creatures.`,
      `Did you serve an apprenticeship, studying under a master, following the more experienced bard until you were ready to strike out on your own? Or did you attend a college where you studied bardic lore and practiced your musical magic? Perhaps you were a young runaway or orphan, befriended by a wandering bard who became your mentor. Or you might have been a spoiled noble child tutored by a master. Perhaps you stumbled into the clutches of a hag, making a bargain for a musical gift in addition to your life and freedom, but at what cost?`
    ],
    spellcasting: {
      details: [`You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See Spells Rules for the general rules of spellcasting and the Spells Listing for the bard spell list.`],
      preparing: [
        `The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.`,
        `For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.`
      ],
      ability: [`Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.`],
      save: 8,
      mod: STATS.CHA,
      other: [
        {
          title: `Ritual Casting`,
          text: `You can cast any bard spell you know as a ritual if that spell has the ritual tag.`
        },
        {
          title: `Spellcasting Focus`,
          text: `You can use a musical instrument (see the Tools section) as a spellcasting focus for your bard spells.`
        }
      ]
    },
    notes: [],
    hitDice: 8,
    recommendedStats: [STATS.CHA, STATS.DEX],
    proficiencies: {
      armor: [ARMOR.LIGHT],
      weapons: [WEAPONS.SIMPLE, WEAPONS.MARTIAL.RANGED.HAND_CROSSBOW, WEAPONS.MARTIAL.MELEE.LONGSWORD, WEAPONS.MARTIAL.MELEE.RAPIER, WEAPONS.MARTIAL.MELEE.SHORTSWORD],
      savingThrows: [STATS.DEX, STATS.CHA],
      tools: [],
      skills: {
        max: 3,
        options: []
      }
    },
    equipment: {
      mainWeaponOptions: [Item(WEAPONS.MARTIAL.MELEE.RAPIER), Item(WEAPONS.MARTIAL.MELEE.LONGSWORD), Item(WEAPONS.SIMPLE)],
      sideWeaponOptions: [Item(WEAPONS.SIMPLE.MELEE.DAGGER)],
      armor: [],
      tools: [],
      packs: [],
      other: [Item(WEAPONS.SIMPLE.MELEE.JAVELIN, 4)]
//       (a) a diplomat’s pack or (b) an entertainer’s pack
// (a) a lute or (b) any other musical instrument
// Leather armor and a dagger
    },
    timeline: {
      columns: TIMELINE_BASE_COLUMNS.concat([CANTRIPS_KNOWN_COLUMN, SPELLS_KNOWN_COLUMN, SPELL_SLOTS_COLUMN]),
      archetypes: [],
      asi: TIMELINE_DEFAULT_ASI,
      rows: [
        /*  1 */ {proficiency: 2, features: [FEATURES.SPELLCASTING, FEATURES.BARDIC_INSPIRATION_I], cantrips: 2, spellsKnown: 4, spellSlots: [2]},
        /*  2 */ {proficiency: 2, features: [FEATURES.JACK_OF_ALL_TRADES, FEATURES.SONG_OF_REST_I], cantrips: 2, spellsKnown: 5, spellSlots: [3]},
        /*  3 */ {proficiency: 2, features: [FEATURES.BARD_COLLEGE, FEATURES.EXPERTISE_I], cantrips: 2, spellsKnown: 6, spellSlots: [4, 2]},
        /*  4 */ {proficiency: 2, features: [], cantrips: 3, spellsKnown: 7, spellSlots: [4, 3]},
        /*  5 */ {proficiency: 3, features: [FEATURES.BARDIC_INSPIRATION_II, FEATURES.FONT_OF_INSPIRATION], cantrips: 3, spellsKnown: 8, spellSlots: [4, 3, 2]},
        /*  6 */ {proficiency: 3, features: [], cantrips: 3, spellsKnown: 9, spellSlots: [4, 3, 3]},
        /*  7 */ {proficiency: 3, features: [FEATURES.COUNTERCHARM], cantrips: 3, spellsKnown: 10, spellSlots: [4, 3, 3, 1]},
        /*  8 */ {proficiency: 3, features: [], cantrips: 3, spellsKnown: 11, spellSlots: [4, 3, 3, 2]},
        /*  9 */ {proficiency: 4, features: [FEATURES.SONG_OF_REST_II], cantrips: 3, spellsKnown: 12, spellSlots: [4, 3, 3, 3, 1]},
        /* 10 */ {proficiency: 4, features: [FEATURES.BARDIC_INSPIRATION_III, FEATURES.EXPERTISE_II, FEATURES.MAGICAL_SECRETS_I], cantrips: 4, spellsKnown: 14, spellSlots: [4, 3, 3, 3, 2]},
        /* 11 */ {proficiency: 4, features: [], cantrips: 4, spellsKnown: 15, spellSlots: [4, 3, 3, 3, 2, 1]},
        /* 12 */ {proficiency: 4, features: [], cantrips: 5, spellsKnown: 15, spellSlots: [4, 3, 3, 3, 2, 1]},
        /* 13 */ {proficiency: 5, features: [FEATURES.SONG_OF_REST_III], cantrips: 4, spellsKnown: 16, spellSlots: [4, 3, 3, 3, 2, 1, 1]},
        /* 14 */ {proficiency: 5, features: [FEATURES.MAGICAL_SECRETS_II], cantrips: 4, spellsKnown: 18, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1]},
        /* 15 */ {proficiency: 5, features: [FEATURES.BARDIC_INSPIRATION_IV], cantrips: 4, spellsKnown: 19, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1]},
        /* 16 */ {proficiency: 5, features: [], cantrips: 4, spellsKnown: 19, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1]},
        /* 17 */ {proficiency: 6, features: [FEATURES.SONG_OF_REST_IV], cantrips: 4, spellsKnown: 20, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1]},
        /* 18 */ {proficiency: 6, features: [FEATURES.MAGICAL_SECRETS_III], cantrips: 4, spellsKnown: 22, spellSlots: [4, 3, 3, 3, 3, 1, 1, 1, 1]},
        /* 19 */ {proficiency: 6, features: [], cantrips: 4, spellsKnown: 22, spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1]},
        /* 20 */ {proficiency: 6, features: [FEATURES.SUPERIOR_INSPIRATION], cantrips: 4, spellsKnown: 22, spellSlots: [4, 3, 3, 3, 3, 2, 2, 1, 1]},
      ]
    },
    subclass: {
      name: 'Bard College',
      prefix: 'College of ',
      levels: [3, 6, 14],
      archetypes: [
        {
          title: 'Glamour',
          details: [
            `The College of Glamour is the home of bards who mastered their craft in the vibrant realm of the Feywild or under the tutelage of someone who dwelled there. Tutored by satyrs, eladrin, and other fey, these bards learn to use their magic to delight and captivate others.`,
            `The bards of this college are regarded with a mixture of awe and fear. Their performances are the stuff of legend. These bards are so eloquent that a speech or song that one of them performs can cause captors to release the bard unharmed and can lull a furious dragon into complacency. The same magic that allows them to quell beasts can also bend minds. Villainous bards of this college can leech off a community for weeks, abusing their magic to turn their hosts into thralls. Heroic bards of this college instead use this power to gladden the downtrodden and undermine oppressors.`
          ],
          features: [[FEATURES.MANTLE_OF_INSPIRATION, FEATURES.ENTHRALLING_PERFORMANCE], FEATURES.MANTLE_OF_MAJESTY, FEATURES.UNBREAKABLE_MAJESTY]
        },
        {
          title: 'Lore',
          details: [
            `Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king.`,
            `The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic.`,
            `The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.`
          ],
          features: [[FEATURES.LORE_BONUS_PROFICIENCIES, FEATURES.CUTTING_WORDS], FEATURES.ADDITIONAL_MAGICAL_SECRETS, FEATURES.PEERLESS_SKILL]
        },
        {
          title: 'Satire',
          details: [
            `Bards of the College of Satire are called jesters. They use lowbrow stories, daring acrobatics, and cutting jokes to entertain audiences, ranging from the crowds in a rundown dockside pub to the nobles of a king’s royal court. Where other bards seek forgotten lore or tales of epic bravery, jesters ferret out embarrassing and hilarious stories of all kinds. Whether telling the ribald tale of a brawny stable hand’s affair with an aged duchess or a mocking satire of a paladin of Helm’s cloying innocence, a jester never lets taste, social decorum, or shame get in the way of a good laugh.`,
            `While jesters are masters of puns, jokes, and verbal barbs, they are much more than just comic relief. They are expected to mock and provoke, taking advantage of how even the most powerful folk are expected by tradition to endure a jester’s barbs with good humor. This expectation allows a jester to serve as a critic or a voice of reason when others are too intimidated to speak the truth.`,
            `For the duchess with a taste for strapping young laborers, such tales might serve to warn the targets of her affections and force her to change her ways for lack of willing partners. Striking back at the jester only ruins her already damaged reputation, and might provide the best evidence that the jester’s satires have hit their mark. But if she is kind and generous to her conquests, the jokes and stories cast her as a kind of folk hero, while drawing even more potential partners to her.`,
            `Jesters are loyal to only one cause: the pursuit and propagation of the truth. They use their comedy and innocuous appearance to break down social barriers and expose corruption, incompetence, and stupidity among the rich and powerful. Whether revealing a con artist’s treachery or exposing a baron’s plans for war as driven by greed and bloodlust, a jester serves as the conscience of a realm.`,
            `Jesters adventure to safeguard the common folk and to undermine the plans of the rich, powerful, and arrogant. Their magic bolsters allies’ spirits while casting doubt into foes’ minds. Among bards, jesters are unmatched acrobats, and their ability to tumble, dodge, leap, and climb makes them slippery opponents in battle.`
          ],
          features: [[FEATURES.SATIRE_BONUS_PROFICIENCIES, FEATURES.TUMBLING_FOOL], FEATURES.FOOLS_INSIGHT, FEATURES.FOOLS_LUCK]
        },
        {
          title: 'Swords',
          details: [
            `Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess. Blades perform stunts such as sword swallowing, knife throwing and juggling, and mock combats. Though they use their weapons to entertain, they are also highly trained and skilled warriors in their own right.`,
            `Their talent with weapons inspires many blades to lead double lives. One blade might use a circus troupe as cover for nefarious deeds such as assassination, robbery, and blackmail. Other blades strike at the wicked, bringing justice to bear against the cruel and powerful. Most troupes are happy to accept a blade’s talent for the excitement it adds to a performance, but few entertainers fully trust a blade in their ranks.`,
            `Blades who abandon their lives as entertainers have often run into trouble that makes maintaining their secret activities impossible. A blade caught stealing or engaging in vigilante justice is too great a liability for most troupes. With their weapon skills and magic, these blades either take up work as enforcers for thieves’ guilds or strike out on their own as adventurers.`,
          ],
          features: [[FEATURES.SWORDS_BONUS_PROFICIENCIES, FEATURES.BARD_SWORDS_FIGHTING_STYLE, FEATURES.BLADE_FLOURISH], FEATURES.EXTRA_ATTACK_I, FEATURES.MASTERS_FLOURISH]
        },
        {
          title: 'Valor',
          details: [
            `Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present. They travel the land to witness great events firsthand and to ensure that the memory of those events doesn't pass from the world. With their songs, they inspire others to reach the same heights of accomplishment as the heroes of old.`
          ],
          features: [[FEATURES.VALOR_BONUS_PROFICIENCIES, FEATURES.COMBAT_INSPIRATION], FEATURES.EXTRA_ATTACK_I, FEATURES.BATTLE_MAGIC]
        },
        {
          title: 'Whispers',
          details: [
            `Most folk are happy to welcome a bard into their midst. Bards of the College of Whispers use this to their advantage. They appear to be like any other bard, sharing news, singing songs, and telling tales to the audiences they gather. In truth, the College of Whispers teaches its students that they are wolves among sheep. These bards use their knowledge and magic to uncover secrets and turn them against others through extortion and threats.`,
            `Many other bards hate the College of Whispers, viewing it as a parasite that uses the bards’ reputation to acquire wealth and power. For this reason, these bards rarely reveal their true nature unless they must. They typically claim to follow some other college, or keep their true nature secret in order to better infiltrate and exploit royal courts and other settings of power.`
          ],
          features: [[FEATURES.PSYCHIC_BLADES, FEATURES.WORDS_OF_TERROR], FEATURES.MANTLE_OF_WHISPERS, FEATURES.SHADOW_LORE]
        },
      ]
    }
  }),

  CLERIC: Class({
    title: 'Cleric',
    image: 'cleric.svg',
    details: [
      `Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don’t grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling.`,
      `Harnessing divine magic doesn’t rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity’s wishes.`,
      `Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side.`
    ],
    backstory: [
      `As you create a cleric, the most important question to consider is which deity to serve and what principles you want your character to embody. The Gods of the Multiverse section includes lists of many of the gods of the multiverse.`,
      `Once you’ve chosen a deity, consider your cleric’s relationship to that god. Did you enter this service willingly? Or did the god choose you, impelling you into service with no regard for your wishes? How do the temple priests of your faith regard you: as a champion or a troublemaker? What are your ultimate goals? Does your deity have a special task in mind for you? Or are you striving to prove yourself worthy of a great quest?`
    ],
    spellcasting: {
      details: [`As a conduit for divine power, you can cast cleric spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the cleric spell list.`],
      preparing: [
        `The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.`,
        `You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.`,
        `For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.`,
        `You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.`,
      ],
      ability: [`Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.`],
      mod: STATS.WIS,
      save: 8,
      other: [
        {
          title: `Ritual Casting`,
          text: `You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.`
        },
        {
          title: `Spellcasting Focus`,
          text: `You can use a holy symbol (see the Adventuring Gear section) as a spellcasting focus for your cleric spells.`
        }
      ]
    },
    notes: [],
    hitDice: 8,
    recommendedStats: [STATS.WIS, STATS.STR, STATS.CON],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.SHIELDS],
      weapons: [WEAPONS.SIMPLE],
      tools: [],
      savingThrows: [STATS.WIS, STATS.CHA],
      skills: {
        max: 2,
        options: []
      }
    },
    equipment: {
      mainWeaponOptions: [Item(WEAPONS.SIMPLE.MELEE.MACE), Item(WEAPONS.MARTIAL.MELEE.WARHAMMER)],
      sideWeaponOptions: [Item(WEAPONS.SIMPLE.MELEE.DAGGER)],
      armor: [],
      tools: [],
      packs: [],
      other: []
      // (a) a mace or (b) a warhammer (if proficient)
      // (a) scale mail, (b) leather armor, or (c) chain mail (if proficient)
      // (a) a light crossbow and 20 bolts or (b) any simple weapon
      // (a) a priest’s pack or (b) an explorer’s pack
      // A shield and a holy symbol
    },
    timeline: {
      columns: TIMELINE_BASE_COLUMNS.concat([CANTRIPS_KNOWN_COLUMN, SPELL_SLOTS_COLUMN]),
      archetypes: [],
      asi: TIMELINE_DEFAULT_ASI,
      rows: [
        /*  1 */ {proficiency: 2, features: [FEATURES.SPELLCASTING, FEATURES.DIVINE_DOMAIN], cantrips: 3, spellSlots: [2]},
        /*  2 */ {proficiency: 2, features: [FEATURES.CLERIC_CHANNEL_DIVINITY_I, FEATURES.TURN_UNDEAD], cantrips: 3, spellSlots: [3]},
        /*  3 */ {proficiency: 2, features: [], cantrips: 3, spellSlots: [4, 2]},
        /*  4 */ {proficiency: 2, features: [], cantrips: 4, spellSlots: [4, 3]},
        /*  5 */ {proficiency: 3, features: [FEATURES.DESTROY_UNDEAD_I], cantrips: 4, spellSlots: [4, 3, 2]},
        /*  6 */ {proficiency: 3, features: [FEATURES.CLERIC_CHANNEL_DIVINITY_II], cantrips: 4, spellSlots: [4, 3, 3]},
        /*  7 */ {proficiency: 3, features: [], cantrips: 4, spellSlots: [4, 3, 3, 1]},
        /*  8 */ {proficiency: 3, features: [FEATURES.DESTROY_UNDEAD_II], cantrips: 4, spellSlots: [4, 3, 3, 2]},
        /*  9 */ {proficiency: 4, features: [], cantrips: 4, spellSlots: [4, 3, 3, 3, 1]},
        /* 10 */ {proficiency: 4, features: [FEATURES.DIVINE_INTERVENTION_I], cantrips: 5, spellSlots: [4, 3, 3, 3, 2]},
        /* 11 */ {proficiency: 4, features: [FEATURES.DESTROY_UNDEAD_II], cantrips: 5, spellSlots: [4, 3, 3, 3, 2, 1]},
        /* 12 */ {proficiency: 4, features: [], cantrips: 5, spellSlots: [4, 3, 3, 3, 2, 1]},
        /* 13 */ {proficiency: 5, features: [], cantrips: 5, spellSlots: [4, 3, 3, 3, 2, 1, 1]},
        /* 14 */ {proficiency: 5, features: [FEATURES.DESTROY_UNDEAD_III], cantrips: 5, spellSlots: [4, 3, 3, 3, 2, 1, 1]},
        /* 15 */ {proficiency: 5, features: [], cantrips: 5, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1]},
        /* 16 */ {proficiency: 5, features: [], cantrips: 5, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1]},
        /* 17 */ {proficiency: 6, features: [FEATURES.DESTROY_UNDEAD_IV], cantrips: 5, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1]},
        /* 18 */ {proficiency: 6, features: [FEATURES.CLERIC_CHANNEL_DIVINITY_III], cantrips: 5, spellSlots: [4, 3, 3, 3, 3, 1, 1, 1, 1]},
        /* 19 */ {proficiency: 6, features: [], cantrips: 5, spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1]},
        /* 20 */ {proficiency: 6, features: [FEATURES.DIVINE_INTERVENTION_II], cantrips: 5, spellSlots: [4, 3, 3, 3, 3, 2, 2, 1, 1]},
      ]
    },
    subclass: {
      name: 'Divine Domain',
      prefix: false,
      suffic: ' Domain',
      levels: [1, 2, 6, 8, 17],
      archetypes: [
        {
          title: 'Arcana',
          details: [
            `Magic is an energy that suffuses the multiverse and that fuels both destruction and creation. Gods of the Arcana domain know the secrets and potential of magic intimately. For some of these gods, magical knowledge is a great responsibility that comes with a special understanding of the nature of reality. Other gods of Arcana see magic as pure power, to be used as its wielder sees fit.`,
            `The gods of this domain are often associated with knowledge, as learning and arcane power tend to go hand-in-hand.`,
            {
              title: 'Arcana Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Detect Magic, Magic Missile`,
                  `Magic Weapon, Nystul's Magic Aura`,
                  `Dispel Magic, Magic Circle`,
                  `Arcana Eye, Leomund's Secret Chest`,
                  `Planar Binding, Teleportation Circle`
                ]
              }
            }
          ],
          features: [FEATURES.ARCANE_INITIATE, FEATURES.ARCANA_CHANNEL_DIVINITY, FEATURES.SPELL_BREAKER, FEATURES.POTENT_SPELLCASTING, FEATURES.ARCANE_MASTERY]
        },
        {
          title: 'Death',
          details: [
            `The Death domain is concerned with the forces that cause death, as well as the negative energy that gives rise to undead creatures.`,
            {
              title: 'Death Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `False Life, Ray of Sickness`,
                  `Blindess/Deafness, Ray of Enfeeblement`,
                  `Animate Dead, Vampiric Touch`,
                  `Blight, Death Ward`,
                  `Antilife Shell, Cloudkill`
                ]
              }
            }
          ],
          features: [[FEATURES.DEATH_BONUS_PROFICIENCY, FEATURES.REAPER_I], FEATURES.DEATH_CHANNEL_DIVINITY, FEATURES.INESCAPABLE_DESTRUCTION, FEATURES.DIVINE_STRIKE, FEATURES.REAPER_II]
        },
        {
          title: 'Forge',
          details: [
            `The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords. The gods of the forge teach that, with patience and hard work, even the most intractable metal can be transformed from a lump of ore to a beautifully wrought object. Clerics of these deities search for objects lost to the forces of darkness, liberate mines overrun by orcs, and uncover rare and wondrous materials necessary to create potent magic items. Followers of these gods take great pride in their work, and they are willing to craft and use heavy armor and powerful weapons to protect them. Deities of this domain include Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.`,
            {
              title: 'Forge Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Identify, Searing Smite`,
                  `Heat Metal, Magic Weapon`,
                  `Elemental Weapon, Protection from Energy`,
                  `Fabricate, Wall of Fire`,
                  `Animate Objects, Creation`
                ]
              }
            }
          ],
          features: [[FEATURES.FORGE_BONUS_PROFICIENCIES, FEATURES.BLESSING_OF_THE_FORGE], FEATURES.FORGE_CHANNEL_DIVINITY, FEATURES.SOUL_OF_THE_FORGE, FEATURES.DIVINE_STRIKE, FEATURES.SAINT_OF_FORGE_AND_FIRE]
        },
        {
          title: 'Grave',
          details: [
            `Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse’s workings. To resist death, or to desecrate the dead’s rest, is an abomination. Deities of the grave include Kelemvor, Wee Jas, the ancestral spirits of the Undying Court, Hades, Anubis, and Osiris. These deities teach their followers to respect the dead and pay them due homage. Followers of these deities seek to put restless spirits to rest, destroy the undead wherever they find them, and ease the suffering of dying creatures. Their magic also allows them to stave off a creature’s death, though they refuse to use such magic to extend a creature’s lifespan beyond its mortal limits.`,
            {
              title: 'Grave Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Bane, False Life`,
                  `Gentle Repose, Ray of Enfeeblement`,
                  `Revivify, Vampiric Touch`,
                  `Blight, Death Ward`,
                  `Antilife Shell, Raise Dead`
                ]
              }
            }
          ],
          features: [[FEATURES.CIRCLE_OF_MORTALITY, FEATURES.EYES_OF_THE_GRAVE], FEATURES.GRAVE_CHANNEL_DIVINITY, FEATURES.SENTINEL_AT_DEATHS_DOOR, FEATURES.POTENT_SPELLCASTING, FEATURES.KEEPER_OF_SOULS]
        },
        {
          title: 'Knowledge',
          details: [
            `The gods of knowledge – including Oghma, Boccob, Gilean, Aureon, and Thoth – value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.`,
            `In Amonkhet, knowledge is the second virtue of society. Kefnet’s task is to pass on this teaching of the God-Pharaoh and elucidate its meaning. He teaches that the afterlife will be inhabited only by those who have proved by their wits that they are worthy of dwelling in the glorious presence of the God-Pharaoh. He trains acolytes and initiates to push their limits and challenge their mental capacity with spells of ever-greater power.`,
            {
              title: 'Knowledge Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Command, Identify`,
                  `Augury, Suggestion`,
                  `Nondetection, Speak with Dead`,
                  `Arcane Eye, Confusion`,
                  `Legend Lore, Scrying`
                ]
              }
            }
          ],
          features: [
            FEATURES.BLESSINGS_OF_KNOWLEDGE, FEATURES.KNOWLEDGE_CHANNEL_DIVINITY_KNOWLEDGE_OF_AGES, FEATURES.KNOWLEDGE_CHANNEL_DIVINITY_READ_THOUGHTS,
            FEATURES.POTENT_SPELLCASTING, FEATURES.VISIONS_OF_THE_PAST
          ]
        },
        {
          title: 'Life',
          details: [
            `The Life domain focuses on the vibrant positive energy – one of the fundamental forces of the universe – that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrci).`,
            {
              title: 'Life Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Bless, Cure Wounds`,
                  `Lesser Restoration, Spiritual Weapon`,
                  `Beacon of Hope, Revivify`,
                  `Death Ward, Guardian of Faith`,
                  `Mass Cure Wounds, Raise Dead`
                ]
              }
            }
          ],
          features: [[FEATURES.LIFE_BONUS_PROFICIENCY, FEATURES.DISCIPLE_OF_LIFE], FEATURES.LIFE_CHANNEL_DIVINITY, FEATURES.BLESSED_HEALER, FEATURES.DIVINE_STRIKE, FEATURES.SUPREME_HEALING]
        },
        {
          title: 'Light',
          details: [
            `Gods of light promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power oftheir gods' discerning vision, charged with chasing away lies and burning away darkness.`,
            {
              title: 'Light Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Burning Hands, Faerie Fire`,
                  `Flaming Sphere, Scorching Ray`,
                  `Daylight, Fireball`,
                  `Guardian of Faith, Wall of Fire`,
                  `Flame Strike, Scrying`
                ]
              }
            }
          ],
          features: [[FEATURES.LIGHT_BONUS_CANTRIP, FEATURES.WARDING_FLARE_I], FEATURES.LIGHT_CHANNEL_DIVINITY, FEATURES.WARDING_FLARE_II, FEATURES.POTENT_SPELLCASTING, FEATURES.CORONA_OF_LIGHT]
        },
        {
          title: 'Nature',
          details: [
            `Gods of nature are as varied as the natural world itself; from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.`,
            {
              title: 'Nature Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Animal Friendship, Speak with Animals`,
                  `Barkskin, Spike Growth`,
                  `Plant Growth, Wind Wall`,
                  `Dominate Beast, Grasping Vine`,
                  `Insect Plague, Tree Stride`
                ]
              }
            }
          ],
          features: [[FEATURES.ACOLYTE_OF_NATURE, FEATURES.NATURE_BONUS_PROFICIENCY], FEATURES.NATURE_CHANNEL_DIVINITY, FEATURES.DAMPEN_ELEMENTS, FEATURES.NATURE_DIVINE_STRIKE, FEATURES.MASTER_OF_NATURE]
        },
        {
          title: 'Order',
          details: [
            `The Order domain represents discipline, as well as devotion to a society or an institution and strict obedience to the laws governing it. The domain is favored by clerics who use it to benevolently maintain and enforce the law, or exploit law and order for their own personal gain.`,
            `The ideal of order is obedience to the law above all else, rather than to a specific individual or the passing influence of emotion or popular rule. Clerics of order are typically concerned with how things are done, rather than whether an action's results are just. Following the law and obeying its edicts is critical, especially when it benefits these clerics and their deities.`,
            `Law establishes hierarchies. Those selected by the law to lead must be obeyed. Those who obey must do so to the best of their ability. In this manner, law creates an intricate web of obligations that allows society to forge order and security in a chaotic multiverse.`,
            {
              title: 'Order Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Command, Heroism`,
                  `Hold Person, Zone of Truth`,
                  `Mass Healing Word, Slow`,
                  `Compulsion, Locate Creature`,
                  `Commune, Dominate Person`
                ]
              }
            }
          ],
          features: [[FEATURES.ORDER_BONUS_PROFICIENCY, FEATURES.VOICE_OF_AUTHORITY], FEATURES.ORDER_CHANNEL_DIVINITY, FEATURES.EMBODIMENT_OF_LAW, FEATURES.ORDER_DIVINE_STRIKE, FEATURES.ORDERS_WRATH]
        },
        {
          title: 'Protection (UA)',
          details: [
            `The protection domain is the purview of deities who charge their followers to shield the weak from the strong. The gods’ faithful dwell in villages and towns on the borderlands, where they help bolster defenses and seek out evils to defeat. These gods believe that a strong shield and a suit of armor is the best defense against evil, second only to a stout mace on hand to respond to any attacks in kind.`,
            {
              title: 'Protection Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Compelled Duel, Protection from Evil and Good`,
                  `Aid, Protection from Poison`,
                  `Protection from Energy, Slow`,
                  `Guardian of Faith, Otiluke's Resilient Sphere`,
                  `Antilife Shell, Wall of Force`
                ]
              }
            }
          ],
          features: [[FEATURES.PROTECTION_BONUS_PROFICIENCY, FEATURES.SHIELD_OF_THE_FAITHFUL], FEATURES.PROTECTION_CHANNEL_DIVINITY, FEATURES.BLESSED_HEALER, FEATURES.PROTECTION_DIVINE_STRIKE, FEATURES.INDOMITABLE_DEFENSE]
        },
        {
          title: 'Tempest',
          details: [
            `Gods whose portfolios include the Tempest domain govern storms, sea, and, sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath.`,
            {
              title: 'Tempest Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Fog Cloud, Thunderwave`,
                  `Gust of Wind, Shatter`,
                  `Call Lightning, Sleet Storm`,
                  `Control Water, Ice Storm`,
                  `Destructive Wave, Insect Plague`
                ]
              }
            }
          ],
          features: [[FEATURES.TEMPEST_BONUS_PROFICIENCY, FEATURES.WRATH_OF_STORM], FEATURES.TEMPEST_CHANNEL_DIVINITY, FEATURES.THUNDEROUS_STRIKE, FEATURES.DIVINE_STRIKE, FEATURES.STORMBORN]
        },
        {
          title: 'Trickery',
          details: [
            `Gods of trickery are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They're patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.`,
            {
              title: 'Trickery Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Charm Person, Disguise Self`,
                  `Mirror Image, Pass without Trace`,
                  `Blink, Dispel Magic`,
                  `Dimension Door, Polymorph`,
                  `Dominate Person, Modify Memory`
                ]
              }
            }
          ],
          features: [FEATURES.BLESSING_OF_TRICKSTER, FEATURES.TRICKERY_CHANNEL_DIVINITY_DUPLICITY_I, FEATURES.TRICKERY_CHANNEL_DIVINITY_CLOAK, FEATURES.TRICKERY_DIVINE_STRIKE, FEATURES.TRICKERY_CHANNEL_DIVINITY_DUPLICITY_II]
        },
        {
          title: 'War',
          details: [
            `War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry as well as gods of destruction and pillage and gods of conquest and domination. Other war gods take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.`,
            {
              title: 'War Domain Spells',
              table: {
                'Cleric Level': [
                  '1st',
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Divine Favor, Shield of Faith`,
                  `Magic Weapon, Spiritual Weapon`,
                  `Crusader's Mantle, Spirit Guardians`,
                  `Freedom of Movement, Stoneskin`,
                  `Flame Strike, Hold Monster`
                ]
              }
            }
          ],
          features: [[FEATURES.WAR_BONUS_PROFICIENCY, FEATURES.WAR_PRIEST], FEATURES.WAR_CHANNEL_DIVINITY_STRIKE, FEATURES.WAR_CHANNEL_DIVINITY_BLESSING, FEATURES.WAR_DIVINE_STRIKE, FEATURES.WAR_AVATAR_OF_BATTLE]
        },
      ]
    }
  }),

  DRUID: Class({
    title: 'Druid',
    image: 'druid.svg',
    details: [
      `Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.`,
      `Druid spells are oriented toward nature and animals—the power of tooth and claw, of sun and moon, of fire and storm. Druids also gain the ability to take on animal forms, and some druids make a particular study of this practice, even to the point where they prefer animal form to their natural form.`
     ],
    backstory: [
      `When making a druid, consider why your character has such a close bond with nature. Perhaps your character lives in a society where the Old Faith still thrives, or was raised by a druid after being abandoned in the depths of a forest. Perhaps your character had a dramatic encounter with the spirits of nature, coming face to face with a giant eagle or dire wolf and surviving the experience. Maybe your character was born during an epic storm or a volcanic eruption, which was interpreted as a sign that becoming a druid was part of your character’s destiny.`,
      `Have you always been an adventurer as part of your druidic calling, or did you first spend time as a caretaker of a sacred grove or spring? Perhaps your homeland was befouled by evil, and you took up an adventuring life in hopes of finding a new home or purpose.`
    ],
    spellcasting: {
      details: [`Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. See Spells Rules for the general rules of spellcasting and the Spells Listing for the druid spell list.`],
      preparing: [
        `The Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.`,
        `You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.`,
        `For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.`,
        `You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.`
      ],
      ability: [`Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.`],
      mod: STATS.WIS,
      save: 8,
      other: [
        {
          title: `Ritual Casting`,
          text: `You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.`
        },
        {
          title: `Spellcasting Focus`,
          text: `You can use a druidic focus (see the Adventuring Gear section) as a spellcasting focus for your druid spells.`
        }
      ]
    },
    notes: [],
    hitDice: 8,
    recommendedStats: [STATS.WIS, STATS.CON],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.SHIELDS],
      weapons: [
        WEAPONS.SIMPLE.MELEE.CLUB, WEAPONS.SIMPLE.MELEE.DAGGER, WEAPONS.SIMPLE.RANGED.DART,
        WEAPONS.SIMPLE.MELEE.JAVELIN, WEAPONS.SIMPLE.MELEE.MACE, WEAPONS.SIMPLE.MELEE.QUARTERSTAFF,
        WEAPONS.MARTIAL.MELEE.SCIMITHAR, WEAPONS.SIMPLE.MELEE.SICKLE, WEAPONS.SIMPLE.RANGED.SLING,
        WEAPONS.SIMPLE.MELEE.SPEAR
      ],
      tools: [],
      //Herbalism kit
      savingThrows: [STATS.INT, STATS.WIS],
      skills: {
        max: 2,
        options: []
      }
    },
    equipment: {
      mainWeaponOptions: [],
      sideWeaponOptions: [],
      armor: [],
      tools: [],
      packs: [],
      other: []
      // (a) a wooden shield or (b) any simple weapon
      // (a) a scimitar or (b) any simple melee weapon
      // Leather armor, an explorer’s pack, and a druidic focus
    },
    timeline: {
      columns: TIMELINE_BASE_COLUMNS.concat([CANTRIPS_KNOWN_COLUMN, SPELL_SLOTS_COLUMN]),
      archetypes: [],
      asi: TIMELINE_DEFAULT_ASI,
      rows: [
        /*  1 */ {proficiency: 2, features: [FEATURES.DRUIDIC, FEATURES.SPELLCASTING], cantrips: 2, spellSlots: [2]},
        /*  2 */ {proficiency: 2, features: [FEATURES.WILD_SHAPE_I, FEATURES.DRUID_CIRCLE], cantrips: 2, spellSlots: [3]},
        /*  3 */ {proficiency: 2, features: [], cantrips: 2, spellSlots: [4, 2]},
        /*  4 */ {proficiency: 2, features: [FEATURES.WILD_SHAPE_II], cantrips: 3, spellSlots: [4, 3]},
        /*  5 */ {proficiency: 3, features: [], cantrips: 3, spellSlots: [4, 3, 2]},
        /*  6 */ {proficiency: 3, features: [], cantrips: 3, spellSlots: [4, 3, 3]},
        /*  7 */ {proficiency: 3, features: [], cantrips: 3, spellSlots: [4, 3, 3, 1]},
        /*  8 */ {proficiency: 3, features: [FEATURES.WILD_SHAPE_III], cantrips: 3, spellSlots: [4, 3, 3, 2]},
        /*  9 */ {proficiency: 4, features: [], cantrips: 3, spellSlots: [4, 3, 3, 3, 1]},
        /* 10 */ {proficiency: 4, features: [], cantrips: 4, spellSlots: [4, 3, 3, 3, 2]},
        /* 11 */ {proficiency: 4, features: [], cantrips: 4, spellSlots: [4, 3, 3, 3, 2, 1]},
        /* 12 */ {proficiency: 4, features: [], cantrips: 4, spellSlots: [4, 3, 3, 3, 2, 1]},
        /* 13 */ {proficiency: 5, features: [], cantrips: 4, spellSlots: [4, 3, 3, 3, 2, 1, 1]},
        /* 14 */ {proficiency: 5, features: [], cantrips: 4, spellSlots: [4, 3, 3, 3, 2, 1, 1]},
        /* 15 */ {proficiency: 5, features: [], cantrips: 4, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1]},
        /* 16 */ {proficiency: 5, features: [], cantrips: 4, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1]},
        /* 17 */ {proficiency: 6, features: [], cantrips: 4, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1]},
        /* 18 */ {proficiency: 6, features: [FEATURES.DRUID_TIMELESS_BODY, FEATURES.BEAST_SPELLS], cantrips: 4, spellSlots: [4, 3, 3, 3, 3, 1, 1, 1, 1]},
        /* 19 */ {proficiency: 6, features: [], cantrips: 4, spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1]},
        /* 20 */ {proficiency: 6, features: [FEATURES.ARCHDRUID], cantrips: 4, spellSlots: [4, 3, 3, 3, 3, 2, 2, 1, 1]},
      ]
    },
    subclass: {
      name: 'Druid Circle',
      prefix: 'Circle of ',
      levels: [3, 6, 10, 14],
      archetypes: [
        {
          title: 'Dreams',
          details: [
            `Druids who are members of the Circle of Dreams hail from regions that have strong ties to the Feywild and its dreamlike realms. The druids’ guardianship of the natural world makes for a natural alliance between them and good-aligned fey. These druids seek to fill the world with dreamy wonder. Their magic mends wounds and brings joy to downcast hearts, and the realms they protect are gleaming, fruitful places, where dream and reality blur together and where the weary can find rest.`
          ],
          restrictions: [],
          features: [FEATURES.BALM_OF_SUMMER_COURT, FEATURES.HEARTH_OF_MOONLIGHT_SHADOW, FEATURES.HIDDEN_PATHS, FEATURES.WALKER_IN_DREAMS]
        },
        {
          title: 'Moon',
          details: [
            `Druids of the Circle of the Moon are fierce guardians of the wilds. Their order gathers under the full moon to share news and trade warnings. They haunt the deepest parts of the wilderness, where they might go for weeks on end before crossing paths with another humanoid creature, let alone another druid.`,
            `Changeable as the moon, a druid of this circle might prowl as a great cat one night, soar over the treetops as an eagle the next day, and crash through the undergrowth in bear form to drive off a trespassing monster. The wild is in the druid's blood.`
          ],
          restrictions: [],
          features: [FEATURES.COMBAT_WILD_SHAPE, FEATURES.CIRCLE_FORMS, FEATURES.PRIMAL_STRIKE, FEATURES.ELEMENTAL_WILD_SHAPE, FEATURES.THOUSAND_FORMS]
        },
        {
          title: 'Land',
          details: [
            `The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.`,
            `Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. **Choose that land – Arctic, Coast, Desert, Forest, Grassland, Mountain, Swamp, or Underdark – and consult the associated list of spells.**`,
            `**Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.** If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.`,
            {
              title: 'Arctic',
              table: {
                'Druid Level': [
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Hold Person, Spike Growth`,
                  `Sleet Storm, Slow`,
                  `Freedom of Movement, Ice Storm`,
                  `Commune with Nature, Cone of Cold`
                ]
              }
            },
            {
              title: 'Coast',
              table: {
                'Druid Level': [
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Mirror Image, Misty Step`,
                  `Water Breathing, Water Walk`,
                  `Control Water, Freedom of Movement`,
                  `Conjure Elemental, Scrying`
                ]
              }
            },
            {
              title: 'Desert',
              table: {
                'Druid Level': [
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Blur, Silence`,
                  `Create Food and Water, Protection from Energy`,
                  `Blight, Hallucinatory Terrain`,
                  `Insect Plague, Wall of Stone`
                ]
              }
            },
            {
              title: 'Forest',
              table: {
                'Druid Level': [
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Barkskin, Spider Climb`,
                  `Call Lightning, Plant Growth`,
                  `Divination, Freedom of Movement`,
                  `Commune with Nature, Tree Stride`
                ]
              }
            },
            {
              title: 'Grassland',
              table: {
                'Druid Level': [
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Invisibility, Pass Without Trace`,
                  `Daylight, Haste`,
                  `Divination, Freedom of Movement`,
                  `Dream, Insect Plague`
                ]
              }
            },
            {
              title: 'Mountain',
              table: {
                'Druid Level': [
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Spider Climb, Spike Growth`,
                  `Lightning Bolt, Meld into Stone`,
                  `Stone Shape, Stoneskin`,
                  `Passwall, Wall of Stone`
                ]
              }
            },
            {
              title: 'Swamp',
              table: {
                'Druid Level': [
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Darkness, Melf's Acid Arrow`,
                  `Water Walk, Stinking Cloud`,
                  `Freedom of Movement, Locate Creature`,
                  `Insect Plague, Scrying`
                ]
              }
            },
            {
              title: 'Underdark',
              table: {
                'Druid Level': [
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Spider Climb, Web`,
                  `Gaseous Form, Stinking Cloud`,
                  `Greater Invisibility, Stone Shape`,
                  `Cloudkill, Insect Plague`
                ]
              }
            }
          ],
          restrictions: [],
          features: [[FEATURES.LAND_BONUS_CANTRIP, FEATURES.NATURAL_RECOVERY], FEATURES.LANDS_STRIDE, FEATURES.NATURES_WARD, FEATURES.NATURES_SANCTUARY]
        },
        {
          title: 'Shepherd',
          details: [
            `Druids of the Circle of the Shepherd commune with the spirits of nature, especially the spirits of beasts and the fey, and call to those spirits for aid. These druids recognize that all living things play a role in the natural world, yet they focus on protecting animals and fey creatures that have difficulty defending themselves. Shepherds, as they are known, see such creatures as their charges. They ward off monsters that threaten them, rebuke hunters who kill more prey than necessary, and prevent civilization from encroaching on rare animal habitats and on sites sacred to the fey.`,
            `Many of these druids are happiest far from cities and towns, content to spend their days in the company of animals and the fey creatures of the wilds. Members of this circle become adventurers to oppose forces that threaten their charges or to seek knowledge and power that will help them safeguard their charges better. Wherever these druids go, the spirits of the wilderness are with them.`
          ],
          restrictions: [],
          features: [FEATURES.SPEECH_OF_THE_WOODS, FEATURES.SPIRIT_TOTEM, FEATURES.MIGHTY_SUMMONER, FEATURES.GUARDIAN_SPIRIT, FEATURES.FAITHFUL_SUMMONS]
        },
        {
          title: 'Spores',
          details: [
            `Druids of the Circle of Spores find beauty in decay. They see within mold and other fungi the ability to transform lifeless material into abundant, albeit somewhat strange, life.`,
            `These druids believe that life and death are portions of a grand cycle, with one leading to the other and then back again. Death is not the end of life, but instead a change of state that sees life shift into a new form.`,
            `Druids of this circle have a complex relationship with the undead. Unlike most other druids, they see nothing inherently wrong with undeath, which they consider to be a companion to life and death. However, these druids believe that the natural cycle is healthiest when each segment of it is vibrant and changing. Undead that seek to replace all life with undeath, or avoid passing to a final rest, violate the cycle and must be thwarted.`,
            `Your symbiotic link to fungus and your ability to tap into the cycle of life and death grants you access to certain spells.`,
            `**Once you gain access to one of these spells, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.** If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you.`,
            {
              title: 'Circle of Spores Spells',
              table: {
                'Druid Level': [
                  '3rd',
                  '5th',
                  '7th',
                  '9th'
                ],
                'Spells': [
                  `Blindness/Deafness, Gentle Repose`,
                  `Animate Dead, Gaseous Form`,
                  `Blight, Confusion`,
                  `Cloudkill, Contagion`
                ]
              }
            }
          ],
          restrictions: [],
          features: [[FEATURES.HALO_OF_SPORES, FEATURES.SYMBIOTIC_ENTITY], FEATURES.FUNGAL_INFESTATION, FEATURES.SPREADING_SPORES, FEATURES.FUNGAL_BODY]
        },
        {
          title: 'Twilight',
          details: [
            `The Circle of Twilight seeks to exterminate undead creatures and preserve the natural cycle of life and death that rules over the cosmos. Their magic allows them to manipulate the boundary between life and death, sending their foes to their final rest while keeping their allies from that fate.`,
            `These druids seek out lands that have been tainted by undeath. Such places are grim and foreboding. Once vibrant forests become gloomy, haunted places devoid of animals and filled with plants dying a slow, lingering death. The Circle of Twilight goes to such places to banish undeath and restore life.`
          ],
          restrictions: [],
          features: [FEATURES.HARVESTS_SCYTHE, FEATURES.SPEECH_BEYOND_GRAVE, FEATURES.WATCHER_AT_THRESHOLD, FEATURES.PATH_OF_DEAD]
        },
      ]
    }
  }),

  FIGHTER: Class({
    title: 'Fighter',
    image: 'fighter.svg',
    details: [
      `Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a
      greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and
      every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some
      concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic.
      This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields
      and in dungeons alike.`
    ],
    backstory: [
      `As you build your fighter, think about two related elements of your character’s background: Where did you get your combat training, and what set you apart from the mundane warriors around you? Were you particularly ruthless? Did you get extra help from a mentor, perhaps because of your exceptional dedication? What drove you to this training in the first place? A threat to your homeland, a thirst for revenge, or a need to prove yourself might all have been factors. You might have enjoyed formal training in a noble’s army or in a local militia. Perhaps you trained in a war academy, learning strategy, tactics, and military history. Or you might be self-taught—unpolished but well tested. Did you take up the sword as a way to escape the limits of life on a farm, or are you following a proud family tradition? Where did you acquire your weapons and armor? They might have been military issue or family heirlooms, or perhaps you scrimped and saved for years to buy them. Your armaments are now among your most important possessions—the only things that stand between you and death’s embrace.`,
      `You might have enjoyed formal training in a noble’s army or in a local militia. Perhaps you trained in a war academy, learning strategy, tactics, and military history. Or you might be self-taught—unpolished but well tested. Did you take up the sword as a way to escape the limits of life on a farm, or are you following a proud family tradition? Where did you acquire your weapons and armor? They might have been military issue or family heirlooms, or perhaps you scrimped and saved for years to buy them. Your armaments are now among your most important possessions—the only things that stand between you and death’s embrace.`
    ],
    spellcasting: false,
    notes: [],
    hitDice: 10,
    recommendedStats: [STATS.STR, STATS.DEX, STATS.CON],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.SHIELDS],
      weapons: [WEAPONS.SIMPLE, WEAPONS.MARTIAL],
      savingThrows: [STATS.STR, STATS.CON],
      tools: [],
      skills: {
        max: 2,
        options: []
      }
    },
    equipment: {
      mainWeaponOptions: [Item(WEAPONS.MARTIAL.MELEE.GREATAXE), Item(WEAPONS.MARTIAL.MELEE)],
      sideWeaponOptions: [Item(WEAPONS.SIMPLE.MELEE.HANDAXE, 2), Item(WEAPONS.SIMPLE)],
      tools: [],
      packs: [],
      other: [Item(WEAPONS.SIMPLE.MELEE.JAVELIN, 4)]
    },
    timeline: {
      columns: TIMELINE_BASE_COLUMNS,
      archetypes: [],
      asi: TIMELINE_DEFAULT_ASI,
      rows: [
        /*  1 */ {proficiency: 2, features: [FEATURES.FIGHTER_FIGHTING_STYLE, FEATURES.SECOND_WIND]},
        /*  2 */ {proficiency: 2, features: [FEATURES.ACTION_SURGE_I]},
        /*  3 */ {proficiency: 2, features: [FEATURES.MARTIAL_ARCHETYPE]},
        /*  4 */ {proficiency: 2, features: []},
        /*  5 */ {proficiency: 3, features: [FEATURES.EXTRA_ATTACK_I]},
        /*  6 */ {proficiency: 3, features: []},
        /*  7 */ {proficiency: 3, features: []},
        /*  8 */ {proficiency: 3, features: []},
        /*  9 */ {proficiency: 4, features: [FEATURES.INDOMITABLE_I]},
        /* 10 */ {proficiency: 4, features: []},
        /* 11 */ {proficiency: 4, features: [FEATURES.EXTRA_ATTACK_II]},
        /* 12 */ {proficiency: 4, features: []},
        /* 13 */ {proficiency: 5, features: [FEATURES.INDOMITABLE_II]},
        /* 14 */ {proficiency: 5, features: []},
        /* 15 */ {proficiency: 5, features: []},
        /* 16 */ {proficiency: 5, features: []},
        /* 17 */ {proficiency: 6, features: [FEATURES.ACTION_SURGE_II, FEATURES.INDOMITABLE_III]},
        /* 18 */ {proficiency: 6, features: []},
        /* 19 */ {proficiency: 6, features: []},
        /* 20 */ {proficiency: 6, features: [FEATURES.EXTRA_ATTACK_III]},
      ]
    }
  }),

  MONK: Class({
    title: 'Monk',
    image: 'monk.svg',
    details: [
      `Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse—specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies’ physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.`
    ],
    backstory: [
      `As you make your monk character, think about your connection to the monastery where you learned your skills and spent your formative years. Were you an orphan or a child left on the monastery’s threshold? Did your parents promise you to the monastery in gratitude for a service performed by the monks? Did you enter this secluded life to hide from a crime you committed? Or did you choose the monastic life for yourself?`,
      `Consider why you left. Did the head of your monastery choose you for a particularly important mission beyond the cloister? Perhaps you were cast out because of some violation of the community’s rules. Did you dread leaving, or were you happy to go? Is there something you hope to accomplish outside the monastery? Are you eager to return to your home?`,
      `As a result of the structured life of a monastic community and the discipline required to harness ki, monks are almost always lawful in alignment.`
    ],
    spellcasting: false,
    notes: [],
    hitDice: 8,
    recommendedStats: [STATS.DEX, STATS.WIS],
    proficiencies: {
      armor: [],
      weapons: [WEAPONS.SIMPLE, WEAPONS.MARTIAL.MELEE.SHORTSWORD],
      savingThrows: [STATS.STR, STATS.DEX],
      tools: [],
      skills: {
        max: 2,
        options: []
      }
    },
    equipment: {
      mainWeaponOptions: [],
      sideWeaponOptions: [],
      tools: [],
      packs: [],
      other: []
      // (a) a shortsword or (b) any simple weapon
      // (a) a dungeoneer’s pack or (b) an explorer’s pack
      // 10 darts
    },
    timeline: {
      columns: TIMELINE_BASE_COLUMNS.concat([
        TimelineColumn('Martial Arts', 'martialArts'),
        TimelineColumn('Ki Points', 'ki'),
        TimelineColumn('UnarmoredMovement', 'unarmoredMovement')
      ]),
      archetypes: [],
      asi: TIMELINE_DEFAULT_ASI,
      rows: [
        /*  1 */ {proficiency: 2, features: [FEATURES.MONK_UNARMORED_DEFENSE, FEATURES.MARTIAL_ARTS], martialArts: '1d4'},
        /*  2 */ {proficiency: 2, features: [FEATURES.KI, FEATURES.UNARMORED_MOVEMENT_I], martialArts: '1d4', ki: 2, unarmoredMovement: 10},
        /*  3 */ {proficiency: 2, features: [FEATURES.MONASTIC_TRADITION, FEATURES.DEFLECT_MISSILES], martialArts: '1d4', ki: 3, unarmoredMovement: 10},
        /*  4 */ {proficiency: 2, features: [FEATURES.SLOW_FALL], martialArts: '1d4', ki: 4, unarmoredMovement: 10},
        /*  5 */ {proficiency: 3, features: [FEATURES.EXTRA_ATTACK_I, FEATURES.STUNNING_STRIKE], martialArts: '1d6', ki: 5, unarmoredMovement: 10},
        /*  6 */ {proficiency: 3, features: [FEATURES.KI_EMPOWERED_STRIKES], martialArts: '1d6', ki: 6, unarmoredMovement: 15},
        /*  7 */ {proficiency: 3, features: [FEATURES.EVASION, FEATURES.STILLNESS_OF_MIND], martialArts: '1d6', ki: 7, unarmoredMovement: 15},
        /*  8 */ {proficiency: 3, features: [], martialArts: '1d6', ki: 8, unarmoredMovement: 15},
        /*  9 */ {proficiency: 4, features: [FEATURES.UNARMORED_MOVEMENT_II], martialArts: '1d6', ki: 9, unarmoredMovement: 15},
        /* 10 */ {proficiency: 4, features: [FEATURES.PURITY_OF_BODY], martialArts: '1d6', ki: 10, unarmoredMovement: 20},
        /* 11 */ {proficiency: 4, features: [], martialArts: '1d8', ki: 11, unarmoredMovement: 20},
        /* 12 */ {proficiency: 4, features: [], martialArts: '1d8', ki: 12, unarmoredMovement: 20},
        /* 13 */ {proficiency: 5, features: [FEATURES.TONGUE_OF_THE_SUN_AND_MOON], martialArts: '1d8', ki: 13, unarmoredMovement: 20},
        /* 14 */ {proficiency: 5, features: [FEATURES.DIAMOND_SOUL], martialArts: '1d8', ki: 14, unarmoredMovement: 25},
        /* 15 */ {proficiency: 5, features: [FEATURES.MONK_TIMELESS_BODY], martialArts: '1d8', ki: 15, unarmoredMovement: 25},
        /* 16 */ {proficiency: 5, features: [], martialArts: '1d8', ki: 16, unarmoredMovement: 25},
        /* 17 */ {proficiency: 6, features: [], martialArts: '1d10', ki: 17, unarmoredMovement: 25},
        /* 18 */ {proficiency: 6, features: [FEATURES.EMPTY_BODY], martialArts: '1d10', ki: 18, unarmoredMovement: 30},
        /* 19 */ {proficiency: 6, features: [], martialArts: '1d10', ki: 19, unarmoredMovement: 30},
        /* 20 */ {proficiency: 6, features: [FEATURES.PERFECT_SELF], martialArts: '1d10', ki: 20, unarmoredMovement: 30},
      ]
    }
  }),

  PALADIN: Class({
    title: 'Paladin',
    image: 'paladin.svg',
    details: [
      `A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin’s power comes as much from a commitment to justice itself as it does from a god.`,
      `Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the undead, and to protect the innocent and those who join them in the fight for justice.`
    ],
    backstory: [
      `The most important aspect of a paladin character is the nature of his or her holy quest. Although the class features related to your oath don’t appear until you reach 3rd level, plan ahead for that choice by reading the oath descriptions at the end of the class. Are you a devoted servant of good, loyal to the gods of justice and honor, a holy knight in shining armor venturing forth to smite evil? Are you a glorious champion of the light, cherishing everything beautiful that stands against the shadow, a knight whose oath descends from traditions older than many of the gods? Or are you an embittered loner sworn to take vengeance on those who have done great evil, sent as an angel of death by the gods or driven by your need for revenge? The Gods of the Multiverse section lists many deities worshiped by paladins throughout the multiverse, such as Torm, Tyr, Heironeous, Paladine, Kiri-Jolith, Dol Arrah, the Silver Flame, Bahamut, Athena, Re-Horakhty, and Heimdall.`,
      `How did you experience your call to serve as a paladin? Did you hear a whisper from an unseen god or angel while you were at prayer? Did another paladin sense the potential within you and decide to train you as a squire? Or did some terrible event—the destruction of your home, perhaps—drive you to your quests? Perhaps you stumbled into a sacred grove or a hidden elven enclave and found yourself called to protect all such refuges of goodness and beauty. Or you might have known from your earliest memories that the paladin’s life was your calling, almost as if you had been sent into the world with that purpose stamped on your soul.`,
      `As guardians against the forces of wickedness, paladins are rarely of any evil alignment. Most of them walk the paths of charity and justice. Consider how your alignment colors the way you pursue your holy quest and the manner in which you conduct yourself before gods and mortals. Your oath and alignment might be in harmony, or your oath might represent standards of behavior that you have not yet attained.`
    ],
    spellcasting: {
      details: [`By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does. See Spells Rules for the general rules of spellcasting and the Spells Listing for the paladin spell list.`,],
      preparing: [
        `The Paladin table shows how many spell slots you have to cast your paladin spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.`,
        `You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.`,
        `For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.`,
        `You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.`
      ],
      ability: [`Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.`],
      mod: STATS.CHA,
      save: 8,
      other: [
        {
          title: `Spellcasting Focus`,
          text: `You can use a holy symbol (see the Adventuring Gear section) as a spellcasting focus for your paladin spells.`
        }
      ]
    },
    notes: [
      {
        title: 'BREAKING YOUR OATH',
        details: [
          `A paladin tries to hold to the highest standards of conduct, but even the most virtuous paladin is fallible. Sometimes the right path proves too demanding, sometimes a situation calls for the lesser of two evils, and sometimes the heat of emotion causes a paladin to transgress his or her oath.`,
          `A paladin who has broken a vow typically seeks absolution from a cleric who shares his or her faith or from another paladin of the same order. The paladin might spend an all-night vigil in prayer as a sign of penitence, or undertake a fast or similar act of self-denial. After a rite of confession and forgiveness, the paladin starts fresh.`,
          `If a paladin willfully violates his or her oath and shows no sign of repentance, the consequences can be more serious. At the DM’s discretion, an impenitent paladin might be forced to abandon this class and adopt another, or perhaps to take the Oathbreaker paladin option that appears in the Dungeon Master’s Guide.`
        ]
      }
    ],
    hitDice: 10,
    recommendedStats: [STATS.STR, STATS.CHA],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.HEAVY, ARMOR.SHIELDS],
      weapons: [WEAPONS.SIMPLE, WEAPONS.MARTIAL],
      savingThrows: [STATS.WIS, STATS.CHA],
      tools: [],
      skills: {
        max: 2,
        options: []
      }
    },
    equipment: {
      mainWeaponOptions: [Item(WEAPONS.MARTIAL.MELEE.GREATAXE), Item(WEAPONS.MARTIAL.MELEE)],
      sideWeaponOptions: [Item(WEAPONS.SIMPLE.MELEE.HANDAXE, 2), Item(WEAPONS.SIMPLE)],
      tools: [],
      packs: [],
      other: [Item(WEAPONS.SIMPLE.MELEE.JAVELIN, 4)]
      // (a) a martial weapon and a shield or (b) two martial weapons
      // (a) five javelins or (b) any simple melee weapon
      // (a) a priest’s pack or (b) an explorer’s pack
      // Chain mail and a holy symbol
    },
    timeline: {
      columns: TIMELINE_BASE_COLUMNS.concat([SPELL_SLOTS_COLUMN]),
      archetypes: [],
      asi: TIMELINE_DEFAULT_ASI,
      rows: [
        /*  1 */ {proficiency: 2, features: [FEATURES.DIVINE_SENSE, FEATURES.LAY_ON_HANDS], spellSlots: []},
        /*  2 */ {proficiency: 2, features: [FEATURES.FIGHTER_FIGHTING_STYLE, FEATURES.SPELLCASTING, FEATURES.DIVINE_SMITE_I], spellSlots: [2]},
        /*  3 */ {proficiency: 2, features: [FEATURES.DIVINE_HEALTH, FEATURES.SACRED_OATH], spellSlots: [3]},
        /*  4 */ {proficiency: 2, features: [], spellSlots: [3]},
        /*  5 */ {proficiency: 3, features: [FEATURES.EXTRA_ATTACK_I], spellSlots: [4, 2]},
        /*  6 */ {proficiency: 3, features: [FEATURES.AURA_OF_PROTECTION_I], spellSlots: [4, 2]},
        /*  7 */ {proficiency: 3, features: [], spellSlots: [4, 3]},
        /*  8 */ {proficiency: 3, features: [], spellSlots: [4, 3]},
        /*  9 */ {proficiency: 4, features: [], spellSlots: [4, 3, 2]},
        /* 10 */ {proficiency: 4, features: [FEATURES.AURA_OF_COURAGE_I], spellSlots: [4, 3, 2]},
        /* 11 */ {proficiency: 4, features: [FEATURES.DIVINE_SMITE_II], spellSlots: [4, 3, 3]},
        /* 12 */ {proficiency: 4, features: [], spellSlots: [4, 3, 3]},
        /* 13 */ {proficiency: 5, features: [], spellSlots: [4, 3, 3, 1]},
        /* 14 */ {proficiency: 5, features: [FEATURES.CLEANSING_TOUCH], spellSlots: [4, 3, 3, 1]},
        /* 15 */ {proficiency: 5, features: [], spellSlots: [4, 3, 3, 2]},
        /* 16 */ {proficiency: 5, features: [], spellSlots: [4, 3, 3, 2]},
        /* 17 */ {proficiency: 6, features: [], spellSlots: [4, 3, 3, 3, 1]},
        /* 18 */ {proficiency: 6, features: [FEATURES.AURA_OF_COURAGE_II, FEATURES.AURA_OF_PROTECTION_II], spellSlots: [4, 3, 3, 3, 1]},
        /* 19 */ {proficiency: 6, features: [], spellSlots: [4, 3, 3, 3, 2]},
        /* 20 */ {proficiency: 6, features: [], spellSlots: [4, 3, 3, 3, 2]},
      ]
    }
  }),

  RANGER: Class({
    title: 'Ranger',
    image: 'ranger.svg',
    details: [
      `Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.`,
      `Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature’s power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger’s talents and abilities are honed with deadly focus on the grim task of protecting the borderlands.`
    ],
    backstory: [
      `As you create your ranger character, consider the nature of the training that gave you your particular capabilities. Did you train with a single mentor, wandering the wilds together until you mastered the ranger’s ways? Did you leave your apprenticeship, or was your mentor slain—perhaps by the same kind of monster that became your favored enemy? Or perhaps you learned your skills as part of a band of rangers affiliated with a druidic circle, trained in mystic paths as well as wilderness lore. You might be self-taught, a recluse who learned combat skills, tracking, and even a magical connection to nature through the necessity of surviving in the wilds.`,
      `What’s the source of your particular hatred of a certain kind of enemy? Did a monster kill someone you loved or destroy your home village? Or did you see too much of the destruction these monsters cause and commit yourself to reining in their depredations? Is your adventuring career a continuation of your work in protecting the borderlands, or a significant change? What made you join up with a band of adventurers? Do you find it challenging to teach new allies the ways of the wild, or do you welcome the relief from solitude that they offer?`
    ],
    spellcasting: {
      details: [`By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See Spells Rules for the general rules of spellcasting and the Spells Listing for the ranger spell list.`],
      preparing: [
        `The Ranger table shows how many spell slots you have to cast your ranger spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.`,
        `For example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot.`,
        ``
      ],
      ability: [`Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.`],
      mod: STATS.WIS,
      save: 8,
      other: [
        {
          title: `Spells Known of 1st Level and Higher`,
          text: `The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level. Starting from 2nd level, ou know two 1st-level spells of your choice from the ranger spell list.`
        }
      ]
    },
    notes: [],
    hitDice: 10,
    recommendedStats: [STATS.DEX, STATS.WIS],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.SHIELDS],
      weapons: [WEAPONS.SIMPLE, WEAPONS.MARTIAL],
      savingThrows: [STATS.STR, STATS.DEX],
      tools: [],
      skills: {
        max: 3,
        options: []
      }
    },
    equipment: {
      mainWeaponOptions: [],
      sideWeaponOptions: [],
      tools: [],
      packs: [],
      other: []
      // (a) scale mail or (b) leather armor
      // (a) two shortswords or (b) two simple melee weapons
      // (a) a dungeoneer’s pack or (b) an explorer’s pack
      // A longbow and a quiver of 20 arrows
    },
    timeline: {
      columns: TIMELINE_BASE_COLUMNS.concat([SPELLS_KNOWN_COLUMN, SPELL_SLOTS_COLUMN]),
      archetypes: [],
      asi: TIMELINE_DEFAULT_ASI,
      rows: [
        /*  1 */ {proficiency: 2, features: [FEATURES.FAVORED_ENEMY_I, FEATURES.NATURAL_EXPLORER_I], spellSlots: []},
        /*  2 */ {proficiency: 2, features: [FEATURES.RANGER_FIGHTING_STYLE, FEATURES.SPELLCASTING], spellsKnown: 2, spellSlots: [2]},
        /*  3 */ {proficiency: 2, features: [FEATURES.RANGER_ARCHETYPE, FEATURES.PRIMEVAL_AWARENESS], spellsKnown: 3, spellSlots: [3]},
        /*  4 */ {proficiency: 2, features: [], spellsKnown: 3, spellSlots: [3]},
        /*  5 */ {proficiency: 3, features: [FEATURES.EXTRA_ATTACK_I], spellsKnown: 4, spellSlots: [4, 2]},
        /*  6 */ {proficiency: 3, features: [FEATURES.FAVORED_ENEMY_II, FEATURES.NATURAL_EXPLORER_II], spellsKnown: 4, spellSlots: [4, 2]},
        /*  7 */ {proficiency: 3, features: [], spellsKnown: 5, spellSlots: [4, 3]},
        /*  8 */ {proficiency: 3, features: [FEATURES.LANDS_STRIDE], spellsKnown: 5, spellSlots: [4, 3]},
        /*  9 */ {proficiency: 4, features: [], spellsKnown: 6, spellSlots: [4, 3, 2]},
        /* 10 */ {proficiency: 4, features: [FEATURES.NATURAL_EXPLORER_III, FEATURES.HIDE_IN_PLAIN_SIGHT], spellsKnown: 6, spellSlots: [4, 3, 2]},
        /* 11 */ {proficiency: 4, features: [], spellsKnown: 7, spellSlots: [4, 3, 3]},
        /* 12 */ {proficiency: 4, features: [], spellsKnown: 7, spellSlots: [4, 3, 3]},
        /* 13 */ {proficiency: 5, features: [], spellsKnown: 8, spellSlots: [4, 3, 3, 1]},
        /* 14 */ {proficiency: 5, features: [FEATURES.FAVORED_ENEMY_III, FEATURES.VANISH], spellsKnown: 8, spellSlots: [4, 3, 3, 1]},
        /* 15 */ {proficiency: 5, features: [], spellsKnown: 9, spellSlots: [4, 3, 3, 2]},
        /* 16 */ {proficiency: 5, features: [], spellsKnown: 9, spellSlots: [4, 3, 3, 2]},
        /* 17 */ {proficiency: 6, features: [], spellsKnown: 10, spellSlots: [4, 3, 3, 3, 1]},
        /* 18 */ {proficiency: 6, features: [FEATURES.FERAL_SENSES], spellsKnown: 10, spellSlots: [4, 3, 3, 3, 1]},
        /* 19 */ {proficiency: 6, features: [], spellsKnown: 11, spellSlots: [4, 3, 3, 3, 2]},
        /* 20 */ {proficiency: 6, features: [FEATURES.FOE_SLAYER], spellsKnown: 11, spellSlots: [4, 3, 3, 3, 2]},
      ]
    }
  }),
  
  ROGUE: Class({
    title: 'Rogue',
    image: 'rogue.svg',
    details: [
      `Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.`,
      `When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few learn magical tricks to supplement their other abilities.`
    ],
    backstory: [
      `As you create your rogue character, consider the character’s relationship to the law. Do you have a criminal past—or present? Are you on the run from the law or from an angry thieves’ guild master? Or did you leave your guild in search of bigger risks and bigger rewards? Is it greed that drives you in your adventures, or some other desire or ideal?`,
      `What was the trigger that led you away from your previous life? Did a great con or heist gone terribly wrong cause you to reevaluate your career? Maybe you were lucky and a successful robbery gave you the coin you needed to escape the squalor of your life. Did wanderlust finally call you away from your home? Perhaps you suddenly found yourself cut off from your family or your mentor, and you had to find a new means of support. Or maybe you made a new friend—another member of your adventuring party—who showed you new possibilities for earning a living and employing your particular talents.`
    ],
    spellcasting: false,
    notes: [],
    hitDice: 8,
    recommendedStats: [STATS.DEX, STATS.INT, STATS.CHA],
    proficiencies: {
      armor: [ARMOR.LIGHT],
      weapons: [
        WEAPONS.SIMPLE, WEAPONS.MARTIAL.RANGED.HAND_CROSSBOW,
        WEAPONS.MARTIAL.MELEE.LONGSWORD, WEAPONS.MARTIAL.MELEE.RAPIER, WEAPONS.MARTIAL.MELEE.SHORTSWORD],
      savingThrows: [STATS.DEX, STATS.INT],
      tools: [/* Thieves' tools */],
      skills: {
        max: 4,
        options: []
        //Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth
      }
    },
    equipment: {
      mainWeaponOptions: [],
      sideWeaponOptions: [],
      tools: [],
      packs: [],
      other: []
      // (a) a rapier or (b) a shortsword
      // (a) a shortbow and quiver of 20 arrows or (b) a shortsword
      // (a) a burglar’s pack, (b) a dungeoneer’s pack, or (c) an explorer’s pack
      // Leather armor, two daggers, and thieves’ tools
    },
    timeline: {
      columns: TIMELINE_BASE_COLUMNS.concat([TimelineColumn('Sneak Attack', 'sneakAttack')]),
      archetypes: [],
      asi: [4,8,10,12,16,19],
      rows: [
        /*  1 */ {proficiency: 2, features: [FEATURES.EXPERTISE_I, FEATURES.SNEAK_ATTACK, FEATURES.THIEVES_CANT], sneakAttack: '1d6'},
        /*  2 */ {proficiency: 2, features: [FEATURES.CUNNING_ACTION], sneakAttack: '1d6'},
        /*  3 */ {proficiency: 2, features: [FEATURES.ROGUISH_ARCHETYPE], sneakAttack: '2d6'},
        /*  4 */ {proficiency: 2, features: [], sneakAttack: '2d6'},
        /*  5 */ {proficiency: 3, features: [FEATURES.UNCANNY_DODGE], sneakAttack: '3d6'},
        /*  6 */ {proficiency: 3, features: [FEATURES.EXPERTISE_II], sneakAttack: '3d6'},
        /*  7 */ {proficiency: 3, features: [FEATURES.EVASION], sneakAttack: '4d6'},
        /*  8 */ {proficiency: 3, features: [], sneakAttack: '4d6'},
        /*  9 */ {proficiency: 4, features: [], sneakAttack: '5d6'},
        /* 10 */ {proficiency: 4, features: [], sneakAttack: '5d6'},
        /* 11 */ {proficiency: 4, features: [FEATURES.RELIABLE_TALENT], sneakAttack: '6d6'},
        /* 12 */ {proficiency: 4, features: [], sneakAttack: '6d6'},
        /* 13 */ {proficiency: 5, features: [], sneakAttack: '7d6'},
        /* 14 */ {proficiency: 5, features: [FEATURES.BLINDSENSE], sneakAttack: '7d6'},
        /* 15 */ {proficiency: 5, features: [FEATURES.SLIPPERY_MIND], sneakAttack: '8d6'},
        /* 16 */ {proficiency: 5, features: [], sneakAttack: '8d6'},
        /* 17 */ {proficiency: 6, features: [], sneakAttack: '9d6'},
        /* 18 */ {proficiency: 6, features: [FEATURES.ELUSIVE], sneakAttack: '9d6'},
        /* 19 */ {proficiency: 6, features: [], sneakAttack: '10d6'},
        /* 20 */ {proficiency: 6, features: [FEATURES.STROKE_OF_LUCK], sneakAttack: '10d6'},
      ]
    }
  }),

  SORCERER: Class({
    title: 'Sorcerer',
    image: 'sorcerer.svg',
    details: [
      `Magic is a part of every sorcerer, suffusing body, mind, and spirit with a latent power that waits to be tapped. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons. Others carry a raw, uncontrolled magic within them, a chaotic storm that manifests in unexpected ways.`,
      `The appearance of sorcerous powers is wildly unpredictable. Some draconic bloodlines produce exactly one sorcerer in every generation, but in other lines of descent every individual is a sorcerer. Most of the time, the talents of sorcery appear as apparent flukes. Some sorcerers can’t name the origin of their power, while others trace it to strange events in their own lives. The touch of a demon, the blessing of a dryad at a baby’s birth, or a taste of the water from a mysterious spring might spark the gift of sorcery. So too might the gift of a deity of magic, exposure to the elemental forces of the Inner Planes or the maddening chaos of Limbo, or a glimpse into the inner workings of reality.`,
      `Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells as warlocks do. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power.`
     ],
    backstory: [
      `The most important question to consider when creating your sorcerer is the origin of your power. As a starting character, you’ll choose an origin that ties to a draconic bloodline or the influence of wild magic, but the exact source of your power is up to you to decide. Is it a family curse, passed down to you from distant ancestors? Or did some extraordinary event leave you blessed with inherent magic but perhaps scarred as well?`,
      `How do you feel about the magical power coursing through you? Do you embrace it, try to master it, or revel in its unpredictable nature? Is it a blessing or a curse? Did you seek it out, or did it find you? Did you have the option to refuse it, and do you wish you had? What do you intend to do with it? Perhaps you feel like you’ve been given this power for some lofty purpose. Or you might decide that the power gives you the right to do what you want, to take what you want from those who lack such power. Perhaps your power links you to a powerful individual in the world—the fey creature that blessed you at birth, the dragon who put a drop of its blood into your veins, the lich who created you as an experiment, or the deity who chose you to carry this power.`
    ],
    spellcasting: {
      details: [`An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the sorcerer spell list.`],
      preparing: [
        `The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.`,
        `For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.`,
      ],
      ability: [`Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.`],
      mod: STATS.CHA,
      save: 8,
      other: [
        {
          title: `Spellcasting Focus`,
          text: `You can use an arcane focus (see the Adventuring Gear section) as a spellcasting focus for your sorcerer spells.`
        }
      ]
    },
    notes: [],
    hitDice: 8,
    recommendedStats: [STATS.CHA, STATS.CON],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.SHIELDS],
      weapons: [
        WEAPONS.SIMPLE.MELEE.DAGGER, WEAPONS.SIMPLE.RANGED.DART,
        WEAPONS.SIMPLE.MELEE.QUARTERSTAFF, WEAPONS.SIMPLE.RANGED.SLING
      ],
      tools: [],
      //Herbalism kit
      savingThrows: [STATS.CON, STATS.CHA],
      skills: {
        max: 2,
        options: []
        // Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion
      }
    },
    equipment: {
      mainWeaponOptions: [],
      sideWeaponOptions: [],
      armor: [],
      tools: [],
      packs: [],
      other: []
      // (a) a light crossbow and 20 bolts or (b) any simple weapon
      // (a) a component pouch or (b) an arcane focus
      // (a) a dungeoneer’s pack or (b) an explorer’s pack
      // Two daggers
    },
    timeline: {
      columns:
        TIMELINE_BASE_COLUMNS.concat([TimelineColumn('Sorcery Points', 'sorceryPoints'), CANTRIPS_KNOWN_COLUMN, SPELLS_KNOWN_COLUMN, SPELL_SLOTS_COLUMN]),
      archetypes: [],
      asi: TIMELINE_DEFAULT_ASI,
      rows: [
        /*  1 */ {proficiency: 2, features: [FEATURES.SPELLCASTING, FEATURES.SORCEROUS_ORIGIN], sorceryPoints: 0, cantrips: 4, spellsKnown: 2, spellSlots: [2]},
        /*  2 */ {proficiency: 2, features: [FEATURES.FONT_OF_MAGIC], sorceryPoints: 2, cantrips: 4, spellsKnown: 3, spellSlots: [3]},
        /*  3 */ {proficiency: 2, features: [FEATURES.METAMAGIC_I], sorceryPoints: 3, cantrips: 4, spellsKnown: 4, spellSlots: [4, 2]},
        /*  4 */ {proficiency: 2, features: [], sorceryPoints: 4, cantrips: 5, spellsKnown: 5, spellSlots: [4, 3]},
        /*  5 */ {proficiency: 3, features: [], sorceryPoints: 5, cantrips: 5, spellsKnown: 6, spellSlots: [4, 3, 2]},
        /*  6 */ {proficiency: 3, features: [], sorceryPoints: 6, cantrips: 5, spellsKnown: 7, spellSlots: [4, 3, 3]},
        /*  7 */ {proficiency: 3, features: [], sorceryPoints: 7, cantrips: 5, spellsKnown: 8, spellSlots: [4, 3, 3, 1]},
        /*  8 */ {proficiency: 3, features: [], sorceryPoints: 8, cantrips: 5, spellsKnown: 9, spellSlots: [4, 3, 3, 2]},
        /*  9 */ {proficiency: 4, features: [], sorceryPoints: 9, cantrips: 5, spellsKnown: 10, spellSlots: [4, 3, 3, 3, 1]},
        /* 10 */ {proficiency: 4, features: [FEATURES.METAMAGIC_II], sorceryPoints: 10, cantrips: 6, spellsKnown: 11, spellSlots: [4, 3, 3, 3, 2]},
        /* 11 */ {proficiency: 4, features: [], sorceryPoints: 11, cantrips: 6, spellsKnown: 12, spellSlots: [4, 3, 3, 3, 2, 1]},
        /* 12 */ {proficiency: 4, features: [], sorceryPoints: 12, cantrips: 6, spellsKnown: 12, spellSlots: [4, 3, 3, 3, 2, 1]},
        /* 13 */ {proficiency: 5, features: [], sorceryPoints: 13, cantrips: 6, spellsKnown: 13, spellSlots: [4, 3, 3, 3, 2, 1, 1]},
        /* 14 */ {proficiency: 5, features: [], sorceryPoints: 14, cantrips: 6, spellsKnown: 13, spellSlots: [4, 3, 3, 3, 2, 1, 1]},
        /* 15 */ {proficiency: 5, features: [], sorceryPoints: 15, cantrips: 6, spellsKnown: 14, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1]},
        /* 16 */ {proficiency: 5, features: [], sorceryPoints: 16, cantrips: 6, spellsKnown: 14, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1]},
        /* 17 */ {proficiency: 6, features: [FEATURES.METAMAGIC_III], sorceryPoints: 17, cantrips: 6, spellsKnown: 15, spellSlots: [4, 3, 3, 3, 2, 1, 1, 1, 1]},
        /* 18 */ {proficiency: 6, features: [], sorceryPoints: 18, cantrips: 6, spellsKnown: 15, spellSlots: [4, 3, 3, 3, 3, 1, 1, 1, 1]},
        /* 19 */ {proficiency: 6, features: [], sorceryPoints: 19, cantrips: 6, spellsKnown: 15, spellSlots: [4, 3, 3, 3, 3, 2, 1, 1, 1]},
        /* 20 */ {proficiency: 6, features: [FEATURES.SORCEROUS_RESTORATION], sorceryPoints: 20, cantrips: 6, spellsKnown: 15, spellSlots: [4, 3, 3, 3, 3, 2, 2, 1, 1]},
      ]
    }
  }),

  WARLOCK: Class({
    title: 'Warlock',
    image: 'warlock.svg',
    details: [
      `A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows in power, at the cost of occasional services performed on the patron’s behalf.`,
      `The magic bestowed on a warlock ranges from minor but lasting alterations to the warlock’s being (such as the ability to see in darkness or to read any language) to access to powerful spells. Unlike bookish wizards, warlocks supplement their magic with some facility at hand-to-hand combat. They are comfortable in light armor and know how to use simple weapons.`
     ],
    backstory: [
      `As you make your warlock character, spend some time thinking about your patron and the obligations that your pact imposes upon you. What led you to make the pact, and how did you make contact with your patron? Were you seduced into summoning a devil, or did you seek out the ritual that would allow you to make contact with an alien elder god? Did you search for your patron, or did your patron find and choose you? Do you chafe under the obligations of your pact or serve joyfully in anticipation of the rewards promised to you?`,
      `Depending on who your patron is, your patron’s demands might drive you into adventures, or they might consist entirely of small favors you can do between adventures.`,
      `What kind of relationship do you have with your patron? Is it friendly, antagonistic, uneasy, or romantic? How important does your patron consider you to be? What part do you play in your patron’s plans? Do you know other servants of your patron?`,
      `How does your patron communicate with you? If you have a familiar, it might occasionally speak with your patron’s voice. Some warlocks find messages from their patrons etched on trees, mingled among tea leaves, or adrift in the clouds — messages that only the warlock can see. Other warlocks converse with their patrons in dreams or waking visions, or deal only with intermediaries.`
    ],
    spellcasting: {
      details: [`Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the warlock spell list.`],
      preparing: [
        `The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.`,
        `For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.`,
      ],
      ability: [`Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.`],
      mod: STATS.CHA,
      save: 8,
      other: [
        {
          title: `Spellcasting Focus`,
          text: `You can use an arcane focus (see the Adventuring Gear section) as a spellcasting focus for your warlock spells.`
        }
      ]
    },
    notes: [],
    hitDice: 8,
    recommendedStats: [STATS.CHA, STATS.CON],
    proficiencies: {
      armor: [ARMOR.LIGHT,],
      weapons: [WEAPONS.SIMPLE],
      tools: [],
      savingThrows: [STATS.WIS, STATS.CHA],
      skills: {
        max: 2,
        options: []
        // Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion
      }
    },
    equipment: {
      mainWeaponOptions: [],
      sideWeaponOptions: [],
      armor: [],
      tools: [],
      packs: [],
      other: []
      // (a) a light crossbow and 20 bolts or (b) any simple weapon
      // (a) a component pouch or (b) an arcane focus
      // (a) a scholar’s pack or (b) a dungeoneer’s pack
      // Leather armor, any simple weapon, and two daggers
    },
    timeline: {
      columns:
        TIMELINE_BASE_COLUMNS.concat([TimelineColumn('Sorcery Points'), CANTRIPS_KNOWN_COLUMN, SPELLS_KNOWN_COLUMN, SPELL_SLOTS_COLUMN]),
      archetypes: [],
      asi: TIMELINE_DEFAULT_ASI,
      rows: [
        // /*  1 */ {proficiency: 2, features: [FEATURES.SPELLCASTING, FEATURES.SORCEROUS_ORIGIN], 0, 4, 2, [2]},
        // /*  2 */ {proficiency: 2, features: [FEATURES.FONT_OF_MAGIC], 2, 4, 3, [3]},
        // /*  3 */ {proficiency: 2, features: [FEATURES.METAMAGIC_I], 3, 4, 4, [4, 2]},
        // /*  4 */ {proficiency: 2, features: [], 4, 5, 5, [4, 3]},
        // /*  5 */ {proficiency: 3, features: [], 5, 5, 6, [4, 3, 2]},
        // /*  6 */ {proficiency: 3, features: [], 6, 5, 7, [4, 3, 3]},
        // /*  7 */ {proficiency: 3, features: [], 7, 5, 8, [4, 3, 3, 1]},
        // /*  8 */ {proficiency: 3, features: [], 8, 5, 9, [4, 3, 3, 2]},
        // /*  9 */ {proficiency: 4, features: [], 9, 5, 10, [4, 3, 3, 3, 1]},
        // /* 10 */ {proficiency: 4, features: [FEATURES.METAMAGIC_II], 10, 6, 11, [4, 3, 3, 3, 2]},
        // /* 11 */ {proficiency: 4, features: [], 11, 6, 12, [4, 3, 3, 3, 2, 1]},
        // /* 12 */ {proficiency: 4, features: [], 12, 6, 12, [4, 3, 3, 3, 2, 1]},
        // /* 13 */ {proficiency: 5, features: [], 13, 6, 13, [4, 3, 3, 3, 2, 1, 1]},
        // /* 14 */ {proficiency: 5, features: [], 14, 6, 13, [4, 3, 3, 3, 2, 1, 1]},
        // /* 15 */ {proficiency: 5, features: [], 15, 6, 14, [4, 3, 3, 3, 2, 1, 1, 1]},
        // /* 16 */ {proficiency: 5, features: [], 16, 6, 14, [4, 3, 3, 3, 2, 1, 1, 1]},
        // /* 17 */ {proficiency: 6, features: [FEATURES.METAMAGIC_III], 17, 6, 15, [4, 3, 3, 3, 2, 1, 1, 1, 1]},
        // /* 18 */ {proficiency: 6, features: [], 18, 6, 15, [4, 3, 3, 3, 3, 1, 1, 1, 1]},
        // /* 19 */ {proficiency: 6, features: [], 19, 6, 15, [4, 3, 3, 3, 3, 2, 1, 1, 1]},
        // /* 20 */ {proficiency: 6, features: [FEATURES.SORCEROUS_RESTORATION], 20, 6, 15, [4, 3, 3, 3, 3, 2, 2, 1, 1]},
      ]
    }
  }),

  WIZARD: Class({
    title: 'Wizard',
    image: 'wizard.svg',
    details: [
      `Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study.`,
      `Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.`
     ],
    backstory: [
      `Creating a wizard character demands a backstory dominated by at least one extraordinary event. How did your character first come into contact with magic? How did you discover you had an aptitude for it? Do you have a natural talent, or did you simply study hard and practice incessantly? Did you encounter a magical creature or an ancient tome that taught you the basics of magic?`,
      `What drew you forth from your life of study? Did your first taste of magical knowledge leave you hungry for more? Have you received word of a secret repository of knowledge not yet plundered by any other wizard? Perhaps you’re simply eager to put your newfound magical skills to the test in the face of danger.`
    ],
    spellcasting: {
      details: [`As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power. See Spells Rules for the general rules of spellcasting and the Spells Listing for the wizard spell list.`],
      preparing: [
        `The Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.`,
        `You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.`,
        `For example, if you’re a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.`,
        `You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.`
      ],
      ability: [`Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.`],
      mod: STATS.INT,
      save: 8,
      other: [
        {
          title: `Ritual Casting`,
          text: `You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don’t need to have the spell prepared.`
        },
        {
          title: `Spellcasting Focus`,
          text: `You can use an arcane focus (see the Adventuring Gear section) as a spellcasting focus for your wizard spells.`
        },
        {
          title: `Learning Spells of 1st Level and Higher`,
          text: `Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook for free. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook (see the “Your Spellbook” sidebar).`
        }
      ]
    },
    notes: [
      {
        title: 'YOUR SPELLBOOK',
        details: [
          `The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard’s chest, for example, or in a dusty tome in an ancient library.`,
          `Copying a Spell into the Book. When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it.

          Copying that spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your spellbook using your own notation.
          
          For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.`,
          `Replacing the Book. You can copy a spell from your own spellbook into another book—for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell.

          If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.`,
          `The Book’s Appearance. Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library, or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.`
        ]
      }
    ],
    hitDice: 8,
    recommendedStats: [STATS.INT, STATS.WIS],
    proficiencies: {
      armor: [ARMOR.LIGHT,],
      weapons: [WEAPONS.SIMPLE],
      tools: [],
      //Herbalism kit
      savingThrows: [STATS.WIS, STATS.CHA],
      skills: {
        max: 2,
        options: []
        // Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion
      }
    },
    equipment: {
      mainWeaponOptions: [],
      sideWeaponOptions: [],
      armor: [],
      tools: [],
      packs: [],
      other: []
      // (a) a light crossbow and 20 bolts or (b) any simple weapon
      // (a) a component pouch or (b) an arcane focus
      // (a) a scholar’s pack or (b) a dungeoneer’s pack
      // Leather armor, any simple weapon, and two daggers
    },
    timeline: {
      columns:
        TIMELINE_BASE_COLUMNS.concat([TimelineColumn('Sorcery Points'), CANTRIPS_KNOWN_COLUMN, SPELLS_KNOWN_COLUMN, SPELL_SLOTS_COLUMN]),
      archetypes: [],
      asi: TIMELINE_DEFAULT_ASI,
      rows: [
        // /*  1 */ [2, [FEATURES.SPELLCASTING, FEATURES.SORCEROUS_ORIGIN], 0, 4, 2, [2]],
        // /*  2 */ [2, [FEATURES.FONT_OF_MAGIC], 2, 4, 3, [3]],
        // /*  3 */ [2, [FEATURES.METAMAGIC_I], 3, 4, 4, [4, 2]],
        // /*  4 */ [2, [], 4, 5, 5, [4, 3]],
        // /*  5 */ [3, [], 5, 5, 6, [4, 3, 2]],
        // /*  6 */ [3, [], 6, 5, 7, [4, 3, 3]],
        // /*  7 */ [3, [], 7, 5, 8, [4, 3, 3, 1]],
        // /*  8 */ [3, [], 8, 5, 9, [4, 3, 3, 2]],
        // /*  9 */ [4, [], 9, 5, 10, [4, 3, 3, 3, 1]],
        // /* 10 */ [4, [FEATURES.METAMAGIC_II], 10, 6, 11, [4, 3, 3, 3, 2]],
        // /* 11 */ [4, [], 11, 6, 12, [4, 3, 3, 3, 2, 1]],
        // /* 12 */ [4, [], 12, 6, 12, [4, 3, 3, 3, 2, 1]],
        // /* 13 */ [5, [], 13, 6, 13, [4, 3, 3, 3, 2, 1, 1]],
        // /* 14 */ [5, [], 14, 6, 13, [4, 3, 3, 3, 2, 1, 1]],
        // /* 15 */ [5, [], 15, 6, 14, [4, 3, 3, 3, 2, 1, 1, 1]],
        // /* 16 */ [5, [], 16, 6, 14, [4, 3, 3, 3, 2, 1, 1, 1]],
        // /* 17 */ [6, [FEATURES.METAMAGIC_III], 17, 6, 15, [4, 3, 3, 3, 2, 1, 1, 1, 1]],
        // /* 18 */ [6, [], 18, 6, 15, [4, 3, 3, 3, 3, 1, 1, 1, 1]],
        // /* 19 */ [6, [], 19, 6, 15, [4, 3, 3, 3, 3, 2, 1, 1, 1]],
        // /* 20 */ [6, [FEATURES.SORCEROUS_RESTORATION], 20, 6, 15, [4, 3, 3, 3, 3, 2, 2, 1, 1]]
      ]
    }
  }),

};