import WEAPONS from './weapons';
import ARMOR from './armor';
import SKILLS from './skills';
import STATS from './stats';
import ITEMS from './items';
const Item = (item, count=1) => Object.assign(item, {count});

export default {
  "BARBARIAN": {
    "title": "Barbarian",
    "route": "barbarian",
    "image": "barbarian.svg",
    "details": [
      "For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.",
      "**You must have a Strength score of 13 or higher in order to multiclass in or out of this class.**"
    ],
    "tym": [
      "man literally too angry to die",
      "hangry, will straight up eat you alive",
      "cinammon roll or the devil, no in between"
    ],
    "summary": "A fierce warrior of a primitive background who can enter a powerful battle rage in combat.",
    "recommendedStats": [
      "Strength",
      "Constitution"
    ],
    "spellcasting": false,
    "hitDice": 12,
    equipment: [
      [Item(WEAPONS.MARTIAL.MELEE.GREATAXE), Item(WEAPONS.MARTIAL.MELEE)],
      [Item(WEAPONS.SIMPLE.MELEE.HANDAXE, 2), Item(WEAPONS.SIMPLE)],
      [Item(ITEMS.STARTER_PACK.EXPLORER)],
      [Item(WEAPONS.SIMPLE.MELEE.JAVELIN, 4)]
    ],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.SHIELDS],
      weapons: [WEAPONS.SIMPLE, WEAPONS.MARTIAL],
      tools: [],
      savingThrows: [STATS.STR, STATS.CON],
      skills: {
        choose: 2,
        options: [
          SKILLS.ANIMAL_HANDLING, 
          SKILLS.ATHLETICS, 
          SKILLS.INTIMIDATION, 
          SKILLS.NATURE, 
          SKILLS.PERCEPTION, 
          SKILLS.SURVIVAL
        ]
      }
    },
    "asi": [
      4,
      8,
      12,
      16,
      19
    ],
    "levelTable": {
      "title": "The Barbarian",
      "rows": [
        {
          "key": 2,
          "level": "1st",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Rage",
              "id": 0
            },
            {
              "name": "Unarmored Defense",
              "id": 1
            }
          ],
          "rages": "2",
          "rageDamage": "+2"
        },
        {
          "key": 3,
          "level": "2nd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Reckless Attack",
              "id": 3
            },
            {
              "name": "Danger Sense",
              "id": 2
            }
          ],
          "rages": "2",
          "rageDamage": "+2"
        },
        {
          "key": 4,
          "level": "3rd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Primal Path",
              "id": 4
            }
          ],
          "rages": "3",
          "rageDamage": "+2"
        },
        {
          "key": 5,
          "level": "4th",
          "proficiencyBonus": "+2",
          "features": [
            
          ],
          "rages": "3",
          "rageDamage": "+2"
        },
        {
          "key": 6,
          "level": "5th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Extra Attack",
              "id": 6
            },
            {
              "name": "Fast Movement",
              "id": 7
            }
          ],
          "rages": "3",
          "rageDamage": "+2"
        },
        {
          "key": 7,
          "level": "6th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "rages": "4",
          "rageDamage": "+2"
        },
        {
          "key": 8,
          "level": "7th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Feral Instinct",
              "id": 8
            }
          ],
          "rages": "4",
          "rageDamage": "+2"
        },
        {
          "key": 9,
          "level": "8th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "rages": "4",
          "rageDamage": "+2"
        },
        {
          "key": 10,
          "level": "9th",
          "proficiencyBonus": "+4",
          "features": [
            {
              "name": "Brutal Critical (1 die)",
              "id": 9
            }
          ],
          "rages": "4",
          "rageDamage": "+3"
        },
        {
          "key": 11,
          "level": "10th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "rages": "4",
          "rageDamage": "+3"
        },
        {
          "key": 12,
          "level": "11th",
          "proficiencyBonus": "+4",
          "features": [
            {
              "name": "Relentless Rage",
              "id": 10
            }
          ],
          "rages": "4",
          "rageDamage": "+3"
        },
        {
          "key": 13,
          "level": "12th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "rages": "5",
          "rageDamage": "+3"
        },
        {
          "key": 14,
          "level": "13th",
          "proficiencyBonus": "+5",
          "features": [
            {
              "name": "Brutal Critical (2 dice)",
              "id": 9
            }
          ],
          "rages": "5",
          "rageDamage": "+4"
        },
        {
          "key": 15,
          "level": "14th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "rages": "5",
          "rageDamage": "+4"
        },
        {
          "key": 16,
          "level": "15th",
          "proficiencyBonus": "+5",
          "features": [
            {
              "name": "Persistent Rage",
              "id": 11
            }
          ],
          "rages": "5",
          "rageDamage": "+4"
        },
        {
          "key": 17,
          "level": "16th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "rages": "5",
          "rageDamage": "+4"
        },
        {
          "key": 18,
          "level": "17th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Brutal Critical (3 dice)",
              "id": 9
            }
          ],
          "rages": "6",
          "rageDamage": "+4"
        },
        {
          "key": 19,
          "level": "18th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Indomitable Might",
              "id": 12
            }
          ],
          "rages": "6",
          "rageDamage": "+4"
        },
        {
          "key": 20,
          "level": "19th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "rages": "6",
          "rageDamage": "+4"
        },
        {
          "key": 21,
          "level": "20th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Primal Champion",
              "id": 13
            }
          ],
          "rages": "Unlimited",
          "rageDamage": "+4"
        }
      ],
      "columns": [
        {
          "title": "Level",
          "dataIndex": "level",
          "key": "level",
          "align": "center"
        },
        {
          "title": "Proficiency Bonus",
          "dataIndex": "proficiencyBonus",
          "key": "proficiencyBonus",
          "align": "center"
        },
        {
          "title": "Features",
          "dataIndex": "features",
          "key": "features",
          "align": "center"
        },
        {
          "title": "Rages",
          "dataIndex": "rages",
          "key": "rages",
          "align": "center"
        },
        {
          "title": "Rage Damage",
          "dataIndex": "rageDamage",
          "key": "rageDamage",
          "align": "center"
        }
      ],
      "featuresIndex": 2
    },
    "features": [
      {
        "title": "Rage",
        "isSubclassFeature": false,
        "details": [
          "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.",
          "While raging, you gain the following benefits if you aren't wearing heavy armor:",
          "\u2022 You have advantage on Strength checks and Strength saving throws.\n\u2022 When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.\n\u2022 You have resistance to bludgeoning, piercing, and slashing damage.",
          "If you are able to cast spells, you can't cast them or concentrate on them while raging.",
          "Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.",
          "Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
        ]
      },
      {
        "title": "Unarmored Defense",
        "isSubclassFeature": false,
        "details": [
          "While you are not wearing any armor, your armor class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
        ]
      },
      {
        "title": "Danger Sense",
        "isSubclassFeature": false,
        "details": [
          "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated."
        ]
      },
      {
        "title": "Reckless Attack",
        "isSubclassFeature": false,
        "details": [
          "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
        ]
      },
      {
        "title": "Primal Path",
        "isSubclassFeature": false,
        "details": [
          "At 3rd level, you choose a path that shapes the nature of your rage:\n\u2022\u00a0Ancestral Guardian\n\u2022\u00a0Battlerager\n\u2022\u00a0Berserker\n\u2022\u00a0Storm Herald\n\u2022\u00a0Totem Warrior\n\u2022\u00a0Zealot\nThe following subclass is unofficial homebrew created by WOTC affiliated DM, Matthew Mercer:\n\u2022\u00a0Juggernaut\nYour choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
        ]
      },
      {
        "title": "Ability Score Improvement",
        "isSubclassFeature": false,
        "details": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      {
        "title": "Extra Attack",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      {
        "title": "Fast Movement",
        "isSubclassFeature": false,
        "details": [
          "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor."
        ]
      },
      {
        "title": "Feral Instinct",
        "isSubclassFeature": false,
        "details": [
          "By 7th level, your instincts are so honed that you have advantage on initiative rolls.",
          "Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
        ]
      },
      {
        "title": "Brutal Critical",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.",
          "This increases to two additional dice at 13th level and three additional dice at 17th level."
        ]
      },
      {
        "title": "Relentless Rage",
        "isSubclassFeature": false,
        "details": [
          "Starting at 11th level, your raage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.",
          "Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
        ]
      },
      {
        "title": "Persistent Rage",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
        ]
      },
      {
        "title": "Indomitable Might",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
        ]
      },
      {
        "title": "Primal Champion",
        "isSubclassFeature": false,
        "details": [
          "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
        ]
      },
      {
        "title": "Ancestral Protectors",
        "isSubclassFeature": true,
        "details": [
          "Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you\u2019re raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage of the target\u2019s attacks."
        ]
      },
      {
        "title": "Spirit Shield",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 6th level, the guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and a creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6.",
          "When you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level."
        ]
      },
      {
        "title": "Consult the Spirits",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you gain the ability to consult with your ancestral spirits. When you do so, you cast the Augury or Clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of Clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells.",
          "After you cast either spell in this way, you can\u2019t use this feature again until you finish a short or long rest."
        ]
      },
      {
        "title": "Vengeful Ancestors",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage that your Spirit Shield prevents."
        ]
      },
      {
        "title": "Battlerager Armor",
        "isSubclassFeature": true,
        "details": [
          "When you choose this path at 3rd level, you gain the ability to use spiked armor as a weapon.",
          "While you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes against a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.",
          "Additionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds."
        ]
      },
      {
        "title": "Reckless Abandon",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 6th level, when you use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish if any of them are left when your rage ends."
        ]
      },
      {
        "title": "Battlerager Charge",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 10th level, you can take the Dash action as a bonus action while you are raging."
        ]
      },
      {
        "title": "Spiked Retribution",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, when a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't incapacitated, and are wearing spiked armor."
        ]
      },
      {
        "title": "Frenzy",
        "isSubclassFeature": true,
        "details": [
          "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion."
        ]
      },
      {
        "title": "Mindless Rage",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
        ]
      },
      {
        "title": "Intimidating Presence",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.",
          "If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours."
        ]
      },
      {
        "title": "Retaliation",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature."
        ]
      },
      {
        "title": "Storm Aura",
        "isSubclassFeature": true,
        "details": [
          "When you select this path at 3rd level, you emanate a stormy, magical aura while you rage. The aura extends 10 feet from you in every direction, but not through total cover.",
          "Your aura has an effect that activates when you enter your rage, and you can activate the effect again on each of your turns as a bonus action. Choose desert, sea, or tundra. Your aura's effect depends on that chosen environment, as detailed below. You can change your environment choice whenever you gain a level in this class.",
          "If your aura's effects require a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.",
          "***Desert.*** When this effect is activated, all other creatures in your aura take 2 fire damage each. The damage increases when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level.",
          "***Sea.*** When this effect is activated, you can choose one other creature you can see in your aura. The target must make a Dexterity saving throw. The target takes 1d6 lightning damage on a failed save, or half as much damage on a successful one. The damage increases when you reach certain levels in this class, increasing to 2d6 at 10th level, 3d6 at 15th level, and 4d6 at 20th level.",
          "***Tundra.*** When this effect is activated, each creature of your choice in your aura gains 2 temporary hit points, as icy spirits inure it to suffering. The temporary hit points increase when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level."
        ]
      },
      {
        "title": "Storm Soul",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, the storm grants you benefits even when your aura isn't active. The benefits are based on the environment you chose for your Storm Aura.",
          "***Desert.*** You gain resistance to fire damage, and you don\u2019t suffer the effects of extreme heat, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch a flammable object that isn't being worn or carried by anyone else and set it on fire.",
          "***Sea.*** You gain resistance to lightning damage, and you can breathe underwater. You also gain a swimming speed of 30 feet.",
          "***Tundra.*** You gain resistance to cold damage, and you don\u2019t suffer the effects of extreme cold, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch water and turn a 5-foot cube of it into ice, which melts after 1 minute. This action fails if a creature is in the cube."
        ]
      },
      {
        "title": "Shielding Storm",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you learn to use your mastery of the storm to protect others. Each creature of your choice has the damage resistance you gained from the Storm Soul feature while the creature is in your Storm Aura."
        ]
      },
      {
        "title": "Raging Storm",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, the power of the storm you channel grows mightier, lashing out at your foes. The effect is based on the environment you chose for your Storm Aura.",
          "***Desert.*** Immediately after a creature in your aura hits you with an attack, you can use your reaction to force that creature to make a Dexterity saving throw. On a failed save, the creature takes fire damage equal to your Barbarian level.",
          "***Sea.*** When you hit a creature in your aura with an attack, you can use your reaction to force that creature to make a Strength saving throw. On a failed save, the creature is knocked prone, as if struck by a wave.",
          "***Tundra.*** Whenever the effect of your Storm Aura is activated, you can choose one creature you can see in the aura. That creature must succeed on a Strength saving throw, or its speed is reduced to 0 until the start of your next turn, as magical frost covers it."
        ]
      },
      {
        "title": "Spirit Seeker",
        "isSubclassFeature": true,
        "details": [
          "Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the Beast Sense and Speak with Animals spells, but only as rituals."
        ]
      },
      {
        "title": "Totem Spirit",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object \u2013 an amulet or similar adornment \u2013\u00a0that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow.",
          "Your totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle.",
          "***Bear.*** While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment.",
          "***Eagle.*** While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease.",
          "***Elk.*** While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift.",
          "***Tiger.*** While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps.",
          "***Wolf.*** While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters."
        ]
      },
      {
        "title": "Aspect of the Beast",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.",
          "***Bear.*** You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.",
          "***Eagle.*** You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks.",
          "***Elk.*** Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they're within 60 feet of you and you're not incapacitated. The elk spirit helps you roam far and fast.",
          "***Tiger.*** You gain proficiency in two skills from the following list: Athletics, Acrobatics, Stealth, and Survival. The cat spirit hones your survival instincts.",
          "***Wolf.*** You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace."
        ]
      },
      {
        "title": "Spirit Walker",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you can cast the Commune with Nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek."
        ]
      },
      {
        "title": "Totemic Attunement",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.",
          "***Bear.*** While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be frightened.",
          "***Eagle.*** While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft.",
          "***Elk.*** While raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw (DC 8 + your Strength bonus + your proficiency bonus) or be knocked prone and take bludgeoning damage equal to 1d12 + your Strength modifier.",
          "***Tiger.*** While you're raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it.",
          "***Wolf.*** While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with melee weapon attack."
        ]
      },
      {
        "title": "Divine Fury",
        "isSubclassFeature": true,
        "details": [
          "Starting when you choose this path at 3rd level, you can channel divine fury into your weapon strikes. While you're raging, the first creature you hit on each of your turns with a weapon attack takes extra damage equal to 1d6 + half your Barbarian level. The extra damage is necrotic or radiant; you choose the type of damage when you gain this feature."
        ]
      },
      {
        "title": "Warrior of the Gods",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, your soul is marked for endless battle. If a spell, such as Raise Dead, has the sole effect of restoring you to life (but not undeath), the caster doesn't need material components to cast the spell on you."
        ]
      },
      {
        "title": "Fanatical Focus",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, the divine power that fuels your rage can protect you. If you fail a saving throw while raging, you can reroll it, and you must use the new roll. You can use this ability only once per rage."
        ]
      },
      {
        "title": "Zealous Presence",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you learn to channel divine power to inspire zealotry in others. As a bonus action, you unleash a battle cry infused with divine energy. Up to ten other creatures of your choice within 60 feet of you that can hear you gain advantage on attack rolls and saving throws until the start of your next turn.",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      },
      {
        "title": "Rage Beyond Death",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 14th level, the divine power that fuels your rage allows you to shrug off fatal blows.",
          "While you're raging, having 0 hit points doesn\u2019t knock you unconscious. You still must make death saving throws, and you suffer the normal effects of taking damage while at 0 hit points. However, if you would die due to failing death saving throws, you don\u2019t die until your rage ends, and you die then only if you still have 0 hit points."
        ]
      },
      {
        "title": "Thunderous Blows",
        "isSubclassFeature": true,
        "details": [
          "Starting when you choose this path at 3rd level, your rage instills you with the strength to batter around your foes, making any battlefield your domain. Once per turn while raging, when you damage a creature with a melee attack, you can force the target to make a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier). On a failure, you push the target 5 feet away from you, and you can choose to immediately move 5 feet into the target\u2019s previous position."
        ]
      },
      {
        "title": "Stance of the Mountain",
        "isSubclassFeature": true,
        "details": [
          "You harness your fury to anchor your feet to the earth, shrugging off the blows of those who wish to topple you. Upon choosing this path at 3rd level, you cannot be knocked prone while raging unless you become unconscious."
        ]
      },
      {
        "title": "Demolishing Might",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 6th level, you can muster destructive force with your assault, shaking the core of even the strongest structures. All of your melee attacks gain the siege property (your attacks deal double damage to objects and structures). Your melee attacks against creatures of the construct type deal an additional 1d8 weapon damage."
        ]
      },
      {
        "title": "Overwhelming Cleave",
        "isSubclassFeature": true,
        "details": [
          "Upon reaching 10th level, you wade into armies of foes, great swings of your weapon striking any who threaten you. When you make a weapon attack while raging, you can make another attack as a bonus action with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
        ]
      },
      {
        "title": "Unstoppable",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you can choose to become unstoppable when you enter a rage. If you do so, for the duration of the rage your speed cannot be reduced, and you are immune to the frightened, paralyzed, and stunned conditions. If you are frightened, paralyzed, or stunned, you can still take your bonus action to enter your rage and suspend the effects for the duration of the rage. When your rage ends, you suffer one level of exhaustion."
        ]
      }
    ],
    "subclass": {
      "title": "Primal Path",
      "prefix": "Path of the ",
      "suffix": null,
      "levels": [
        3,
        6,
        10,
        14
      ],
      "archetypes": {
        "ANCESTRAL_GUARDIAN": {
          "title": "Ancestral Guardian",
          "restrictions": [
            
          ],
          "details": [
            "Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger in the world as mighty spirits, who can guide and protect the living. When a barbarian who follows this path rages, the barbarian contacts the spirit world and calls on these guardian spirits for aid.",
            "Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors\u2019 deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals."
          ],
          "features": [
            [
              {
                "name": "Ancestral Protectors",
                "id": 14
              }
            ],
            [
              {
                "name": "Spirit Shield",
                "id": 15
              }
            ],
            [
              {
                "name": "Consult the Spirits",
                "id": 16
              }
            ],
            [
              {
                "name": "Vengeful Ancestors",
                "id": 17
              }
            ]
          ]
        },
        "BATTLERAGER": {
          "title": "Battlerager",
          "restrictions": [
            {
              "title": "Restriction: Dwarves Only",
              "details": [
                "Only dwarves can follow the Path of the Battlerager. The battlerager fills a particular niche in dwarven society and culture.",
                "Your DM can lift this restriction to better suit the campaign. The restriction exists for the Forgotten Realms. It might not apply to your DM's setting or your DM's version of the Realms."
              ]
            }
          ],
          "details": [
            "Known as Kuldjargh (literally \"axe idiot\") in Dwarvish, battleragers are dwarf followers of the gods of war and take the Path of the Battlerager. They specialize in wearing bulky, spiked armor and throwing themselves into combat, striking with their body itself and giving themselves over to the fury of battle."
          ],
          "features": [
            [
              {
                "name": "Battlerager Armor",
                "id": 18
              }
            ],
            [
              {
                "name": "Reckless Abandon",
                "id": 19
              }
            ],
            [
              {
                "name": "Battlerager Charge",
                "id": 20
              }
            ],
            [
              {
                "name": "Spiked Retribution",
                "id": 21
              }
            ]
          ]
        },
        "BERSERKER": {
          "title": "Berserker",
          "restrictions": [
            
          ],
          "details": [
            "For some barbarians, rage is a means to an end \u2013 that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being."
          ],
          "features": [
            [
              {
                "name": "Frenzy",
                "id": 22
              }
            ],
            [
              {
                "name": "Mindless Rage",
                "id": 23
              }
            ],
            [
              {
                "name": "Intimidating Presence",
                "id": 24
              }
            ],
            [
              {
                "name": "Retaliation",
                "id": 25
              }
            ]
          ]
        },
        "STORM_HERALD": {
          "title": "Storm Herald",
          "restrictions": [
            
          ],
          "details": [
            "Typical barbarians harbor a fury that dwells within. Their rage grants them superior strength, durability, and speed. Barbarians who follow the Path of the Storm Herald learn instead to transform their rage into a mantle of primal magic that swirls around them. When in a fury, a barbarian of this path taps into nature to create powerful, magical effects.",
            "Storm heralds are typically elite champions who train alongside druids, rangers, and others sworn to protect the natural realm. Other storm heralds hone their craft in elite lodges founded in regions wracked by storms, in the frozen reaches at the world\u2019s end, or deep in the hottest deserts."
          ],
          "features": [
            [
              {
                "name": "Storm Aura",
                "id": 26
              }
            ],
            [
              {
                "name": "Storm Soul",
                "id": 27
              }
            ],
            [
              {
                "name": "Shielding Storm",
                "id": 28
              }
            ],
            [
              {
                "name": "Raging Storm",
                "id": 29
              }
            ]
          ]
        },
        "TOTEM_WARRIOR": {
          "title": "Totem Warrior",
          "restrictions": [
            
          ],
          "details": [
            "The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage.",
            "Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist."
          ],
          "features": [
            [
              {
                "name": "Spirit Seeker",
                "id": 30
              },
              {
                "name": "Totem Spirit",
                "id": 31
              }
            ],
            [
              {
                "name": "Aspect of the Beast",
                "id": 32
              }
            ],
            [
              {
                "name": "Spirit Walker",
                "id": 33
              }
            ],
            [
              {
                "name": "Totemic Attunement",
                "id": 34
              }
            ]
          ]
        },
        "ZEALOT": {
          "title": "Zealot",
          "restrictions": [
            
          ],
          "details": [
            "Some deities inspire their followers to pitch themselves into a ferocious battle fury. These barbarians are zealots \u2013 warriors who channel their rage into powerful displays of divine power.",
            "A variety of gods across the worlds of D&D inspire their followers to embrace this path. Tempus from the Forgotten Realms and Hextor and Erythnul of Greyhawk are all prime examples. In general, the gods who inspire zealots are deities of combat, destruction, and violence. Not all are evil, but few are good."
          ],
          "features": [
            [
              {
                "name": "Divine Fury",
                "id": 35
              },
              {
                "name": "Warrior of the Gods",
                "id": 36
              }
            ],
            [
              {
                "name": "Fanatical Focus",
                "id": 37
              }
            ],
            [
              {
                "name": "Zealous Presence",
                "id": 38
              }
            ],
            [
              {
                "name": "Rage Beyond Death",
                "id": 39
              }
            ]
          ]
        },
        "JUGGERNAUT": {
          "title": "Juggernaut",
          "restrictions": [
            
          ],
          "details": [
            "Juggernaut barbarians are siege engines in their own right, able to stand their ground and move their foes into positions of weakness. While raging, they make any battlefield their domain, shoving foes over mountainsides and destroying even the strongest structures with their attacks."
          ],
          "features": [
            [
              {
                "name": "Thunderous Blows",
                "id": 40
              },
              {
                "name": "Stance of the Mountain",
                "id": 41
              }
            ],
            [
              {
                "name": "Demolishing Might",
                "id": 42
              }
            ],
            [
              {
                "name": "Overwhelming Cleave",
                "id": 43
              }
            ],
            [
              {
                "name": "Unstoppable",
                "id": 44
              }
            ]
          ]
        }
      }
    }
  },
  "BARD": {
    "title": "Bard",
    "route": "bard",
    "image": "bard.svg",
    "details": [
      "Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds. The bard is a master of song, speech, and the magic they contain.",
      "**You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.**"
    ],
    "tym": [
      "‘do it for the vine’",
      "is just Donkey from Shrek",
      "last words will be 'what are you gonna do, stab me?'"
    ],
    "summary": "An inspiring musician whose magical power echoes the music of creation and sometimes annoys the DM.",
    "recommendedStats": [
      "Charisma",
      "Dexterity"
    ],
    "spellcasting": {
      "details": [
        "You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See Spells Rules for the general rules of spellcasting and the Spells Listing for the bard spell list."
      ],
      "preparing": [
        "The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell\u2019s level or higher. You regain all expended spell slots when you finish a long rest.",
        "For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot."
      ],
      "ability": [
        "Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one."
      ],
      "save": 8,
      "mod": "CHA",
      "other": [
        {
          "title": "Ritual Casting",
          "text": "You can cast any bard spell you know as a ritual if that spell has the ritual tag."
        },
        {
          "title": "Spellcasting Focus",
          "text": "You can use a musical instrument (see the Tools section) as a spellcasting focus for your bard spells."
        }
      ]
    },
    "hitDice": 8,
    equipment: [
      [Item(WEAPONS.MARTIAL.MELEE.RAPIER), Item(WEAPONS.MARTIAL.MELEE.LONGSWORD), Item(WEAPONS.SIMPLE)],
      [Item(WEAPONS.SIMPLE.MELEE.DAGGER)],
      [Item(ARMOR.LIGHT.LEATHER)],
      [Item(ITEMS.MUSICAL_INSTRUMENT)],
      [Item(ITEMS.STARTER_PACK.DIPLOMAT), Item(ITEMS.STARTER_PACK.ENTERTAINER)]
    ],
    proficiencies: {
      armor: [ARMOR.LIGHT],
      weapons: [WEAPONS.SIMPLE, WEAPONS.MARTIAL.RANGED.HAND_CROSSBOW, WEAPONS.MARTIAL.MELEE.LONGSWORD, WEAPONS.MARTIAL.MELEE.RAPIER, WEAPONS.MARTIAL.MELEE.SHORTSWORD],
      savingThrows: [STATS.DEX, STATS.CHA],
      tools: [Item(ITEMS.MUSICAL_INSTRUMENT, 3)],
      skills: {
        choose: 3,
        options: [
          SKILLS.ACROBATICS,
          SKILLS.ANIMAL_HANDLING,
          SKILLS.ARCANA,
          SKILLS.ATHLETICS,
          SKILLS.DECEPTION,
          SKILLS.HISTORY,
          SKILLS.INSIGHT,
          SKILLS.INTIMIDATION,
          SKILLS.INVESTIGATION,
          SKILLS.MEDICINE,
          SKILLS.NATURE,
          SKILLS.PERCEPTION,
          SKILLS.PERFORMANCE,
          SKILLS.PERSUASION,
          SKILLS.RELIGION,
          SKILLS.SLEIGHT_OF_HAND,
          SKILLS.STEALTH,
          SKILLS.SURVIVAL
        ]
      }
    },
    "asi": [
      4,
      8,
      12,
      16,
      19
    ],
    "levelTable": {
      "title": "The Bard",
      "rows": [
        {
          "key": 2,
          "level": "1st",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Spellcasting",
              "id": 0
            },
            {
              "name": "Bardic Inspiration (d6)",
              "id": 1
            }
          ],
          "cantripsKnown": "2",
          "spellsKnown": "4",
          "1st": "2",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 3,
          "level": "2nd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Jack of All Trades",
              "id": 2
            },
            {
              "name": "Song of Rest (d6)",
              "id": 3
            }
          ],
          "cantripsKnown": "2",
          "spellsKnown": "5",
          "1st": "3",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 4,
          "level": "3rd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Bard College",
              "id": 4
            },
            {
              "name": "Expertise",
              "id": 5
            }
          ],
          "cantripsKnown": "2",
          "spellsKnown": "6",
          "1st": "4",
          "2nd": "2",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 5,
          "level": "4th",
          "proficiencyBonus": "+2",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "spellsKnown": "7",
          "1st": "4",
          "2nd": "3",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 6,
          "level": "5th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Bardic Inspiration (d8)",
              "id": 1
            },
            {
              "name": "Font of Inspiration",
              "id": 7
            }
          ],
          "cantripsKnown": "3",
          "spellsKnown": "8",
          "1st": "4",
          "2nd": "3",
          "3rd": "2",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 7,
          "level": "6th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Countercharm",
              "id": 8
            }
          ],
          "cantripsKnown": "3",
          "spellsKnown": "9",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 8,
          "level": "7th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "spellsKnown": "10",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "1",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 9,
          "level": "8th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "spellsKnown": "11",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "2",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 10,
          "level": "9th",
          "proficiencyBonus": "+4",
          "features": [
            {
              "name": "Song of Rest (d8)",
              "id": 3
            }
          ],
          "cantripsKnown": "3",
          "spellsKnown": "12",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "1",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 11,
          "level": "10th",
          "proficiencyBonus": "+4",
          "features": [
            {
              "name": "Bardic Inspiration (d10)",
              "id": 1
            },
            {
              "name": "Expertise",
              "id": 5
            },
            {
              "name": "Magical Secrets",
              "id": 9
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "14",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 12,
          "level": "11th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "spellsKnown": "15",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 13,
          "level": "12th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "spellsKnown": "15",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 14,
          "level": "13th",
          "proficiencyBonus": "+5",
          "features": [
            {
              "name": "Song of Rest (d10)",
              "id": 3
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "16",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 15,
          "level": "14th",
          "proficiencyBonus": "+5",
          "features": [
            {
              "name": "Magical Secrets",
              "id": 9
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "18",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 16,
          "level": "15th",
          "proficiencyBonus": "+5",
          "features": [
            {
              "name": "Bardic Inspiration (d12)",
              "id": 1
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "19",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "-"
        },
        {
          "key": 17,
          "level": "16th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "spellsKnown": "19",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "-"
        },
        {
          "key": 18,
          "level": "17th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Song of Rest (d12)",
              "id": 3
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "20",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 19,
          "level": "18th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Magical Secrets",
              "id": 9
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "22",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 20,
          "level": "19th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "spellsKnown": "22",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "2",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 21,
          "level": "20th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Superior Inspiration",
              "id": 10
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "22",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "2",
          "7th": "2",
          "8th": "1",
          "9th": "1"
        }
      ],
      "columns": [
        {
          "title": "Level",
          "dataIndex": "level",
          "key": "level",
          "align": "center"
        },
        {
          "title": "Proficiency Bonus",
          "dataIndex": "proficiencyBonus",
          "key": "proficiencyBonus",
          "align": "center"
        },
        {
          "title": "Features",
          "dataIndex": "features",
          "key": "features",
          "align": "center"
        },
        {
          "title": "Cantrips Known",
          "dataIndex": "cantripsKnown",
          "key": "cantripsKnown",
          "align": "center"
        },
        {
          "title": "Spells Known",
          "dataIndex": "spellsKnown",
          "key": "spellsKnown",
          "align": "center"
        },
        {
          "title": "Spell Slots per Spell Level",
          "dataIndex": "spellSlotsPerSpellLevel",
          "key": "spellSlotsPerSpellLevel",
          "children": [
            {
              "title": "1st",
              "dataIndex": "1st",
              "key": "1st",
              "align": "center"
            },
            {
              "title": "2nd",
              "dataIndex": "2nd",
              "key": "2nd",
              "align": "center"
            },
            {
              "title": "3rd",
              "dataIndex": "3rd",
              "key": "3rd",
              "align": "center"
            },
            {
              "title": "4th",
              "dataIndex": "4th",
              "key": "4th",
              "align": "center"
            },
            {
              "title": "5th",
              "dataIndex": "5th",
              "key": "5th",
              "align": "center"
            },
            {
              "title": "6th",
              "dataIndex": "6th",
              "key": "6th",
              "align": "center"
            },
            {
              "title": "7th",
              "dataIndex": "7th",
              "key": "7th",
              "align": "center"
            },
            {
              "title": "8th",
              "dataIndex": "8th",
              "key": "8th",
              "align": "center"
            },
            {
              "title": "9th",
              "dataIndex": "9th",
              "key": "9th",
              "align": "center"
            }
          ],
          "align": "center"
        }
      ],
      "featuresIndex": 2
    },
    "features": [
      {
        "title": "Spellcasting",
        "isSubclassFeature": false,
        "details": [
          "You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations.",
          "**You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations.**",
          "You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.",
          "**You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.**",
          "The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. For example, if you know the 1st-level spell Cure Wounds and have a 1st-level and a 2nd-level spell slot available, you can cast Cure Wounds using either slot.",
          "**The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. For example, if you know the 1st-level spell Cure Wounds and have a 1st-level and a 2nd-level spell slot available, you can cast Cure Wounds using either slot.**",
          "You know four 1st-level spells of your choice from the bard spell list.",
          "The Spells Known column of the Bard table shows when you learn more bard spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.",
          "Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.",
          "**Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.**",
          "Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.",
          "**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier",
          "**Spell attack modifier** = your proficiency bonus + your Charisma modifier",
          "****Spell attack modifier** = your proficiency bonus + your Charisma modifier**",
          "You can cast any bard spell you know as a ritual if that spell has the ritual tag.",
          "**You can cast any bard spell you know as a ritual if that spell has the ritual tag.**",
          "You can use a musical instrument (found in chapter 5) as a spellcasting focus for your bard spells."
        ]
      },
      {
        "title": "Bardic Inspiration",
        "isSubclassFeature": false,
        "details": [
          "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.",
          "Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
          "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.",
          "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
        ]
      },
      {
        "title": "Jack of All Trades",
        "isSubclassFeature": false,
        "details": [
          "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus."
        ]
      },
      {
        "title": "Song of Rest",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance spend one or more Hit Dice to regain hit points at the end of the short rest, each of those creatures regains an extra 1d6 hit points."
        ]
      },
      {
        "title": "Bard College",
        "isSubclassFeature": false,
        "details": [
          "At 3rd level, you delve into the advanced techniques of a bard college of your choice:\n\u2022\u00a0Glamour\n\u2022\u00a0Lore\n\u2022\u00a0Satire (UA)\n\u2022\u00a0Swords\n\u2022\u00a0Valor\n\u2022\u00a0Whispers\nYour choice grants you features at 3rd level and again at 6th and 14th level."
        ]
      },
      {
        "title": "Expertise",
        "isSubclassFeature": false,
        "details": [
          "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
          "At 10th level, you can choose another two skill proficiencies to gain this benefit."
        ]
      },
      {
        "title": "Ability Score Improvement",
        "isSubclassFeature": false,
        "details": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      {
        "title": "Font of Inspiration",
        "isSubclassFeature": false,
        "details": [
          "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest."
        ]
      },
      {
        "title": "Countercharm",
        "isSubclassFeature": false,
        "details": [
          "At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required)."
        ]
      },
      {
        "title": "Magical Secrets",
        "isSubclassFeature": false,
        "details": [
          "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
          "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.",
          "You learn two additional spells from any class at 14th level and again at 18th level."
        ]
      },
      {
        "title": "Superior Inspiration",
        "isSubclassFeature": false,
        "details": [
          "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
        ]
      },
      {
        "title": "Mantle of Inspiration",
        "isSubclassFeature": true,
        "details": [
          "When you join the College of Glamour at 3rd level, you gain the ability to weave a song of fey magic that imbues your allies with vigor and speed.",
          "As a bonus action, you can expend one use of your Bardic Inspiration to grant yourself a wondrous appearance. When you do so, choose a number of creatures you can see and who can see you within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one). Each of them gains 5 temporary hit points. When a creature gains these temporary hit points, it can immediately use its reaction to move up to its speed, without provoking opportunity attacks.",
          "The number of temporary hit points increases when you reach certain levels in this class, increasing to 8 at 5th level, 11 at 10th level, and 14 at 15th level."
        ]
      },
      {
        "title": "Enthralling Performance",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you can charge your performance with seductive, fey magic.",
          "If you perform for at least 1 minute, you can attempt to inspire wonder in your audience by singing, reciting a poem, or dancing. At the end of the performance, choose a number of humanoids within 60 feet of you who watched and listened to all of it, up to a number equal to your Charisma modifier (minimum of one). Each target must succeed on a Wisdom saving throw against your spell save DC or be charmed by you. While charmed in this way, the target idolizes you, it speaks glowingly of you to anyone who speaks to it, and it hinders anyone who opposes you, avoiding violence unless it was already inclined to fight on your behalf. This effect ends on a target after 1 hour, if it takes any damage, if you attack it, or if it witnesses you attacking or damaging any of its allies.",
          "If a target succeeds on its saving throw, the target has no hint that you tried to charm it.",
          "Once you use this feature, you can\u2019t use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Mantle of Majesty",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to cloak yourself in a fey magic that makes others want to serve you. As a bonus action, you cast Command, without expending a spell slot, and you take on an appearance of unearthly beauty for 1 minute or until your concentration ends (as if you were concentrating on a spell). During this time, you can cast Command as a bonus action on each of your turns, without expending a spell slot.",
          "Any creature charmed by you automatically fails its saving throw against the Command you cast with this feature.",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      },
      {
        "title": "Unbreakable Majesty",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, your appearance permanently gains an otherworldly aspect that makes you look more lovely and fierce.",
          "In addition, as a bonus action, you can assume a magically majestic presence for 1 minute or until you are incapacitated. For the duration, whenever any creature tries to attack you for the first time on a turn, the attacker must make a Charisma saving throw against your spell save DC. On a failed save, it can't attack you on this turn, and it must choose a new target for its attack or the attack is wasted. On a successful save, it can attack you on this turn, but it has disadvantage on any saving throw it makes against your spells on your next turn.",
          "Once you assume this majestic presence, you can't do so again until you finish a short or long rest."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice."
        ]
      },
      {
        "title": "Cutting Words",
        "isSubclassFeature": true,
        "details": [
          "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed."
        ]
      },
      {
        "title": "Additional Magical Secrets",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know."
        ]
      },
      {
        "title": "Peerless Skill",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "When you join the College of Satire at 3rd level, you gain proficiency with thieves\u2019 tools. You also gain proficiency in Sleight of Hand and one additional skill of your choice. If you are already proficient with thieves\u2019 tools or in Sleight of Hand, choose another skill proficiency for each proficiency you already have."
        ]
      },
      {
        "title": "Tumbling Fool",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you master a variety of acrobatic techniques that allow you to evade danger. As a bonus action, you can tumble. When you tumble, you gain the following benefits for the rest of your turn:\n\u2022 You gain the benefits of taking the Dash and Disengage actions.\n\u2022 You gain a climbing speed equal to your current speed.\n\u2022 You take half damage from falling."
        ]
      },
      {
        "title": "Fool's Insight",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, your ability to gather stories and lore gains a supernatural edge. You can cast Detect Thoughts up to a number of times equal to your Charisma modifier. You regain any expended uses of this ability after completing a long rest.",
          "If a creature resists your attempt to probe deeper and succeeds at its saving throw against your Detect Thoughts, it immediately suffers an embarrassing social gaffe. It might loudly pass gas, unleash a thunderous burp, trip and fall, or be compelled to tell a tasteless joke."
        ]
      },
      {
        "title": "Fool's Luck",
        "isSubclassFeature": true,
        "details": [
          "Jesters seem to have a knack for pulling themselves out of tight situations, transforming what looks like sure failure into an embarrassing but effective success.",
          "At 14th level, you can expend one use of Bardic Inspiration after you fail an ability check, fail a saving throw, or miss with an attack roll. Roll a Bardic Inspiration die and add the number rolled to your attack, saving throw, or ability check, using the new result in place of the failed one.",
          "If using this ability grants you a success on the attack, saving throw, or ability check, note the number you rolled on the Bardic Inspiration die. The DM can then apply that result as a penalty to an attack or check you make, and you cannot use this ability again until you suffer this drawback. When the DM invokes this penalty, describe an embarrassing gaffe or mistake you make as part of the affected die roll."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "When you join the College of Swords at 3rd level, you gain proficiency with medium armor and the scimitar.",
          "If you\u2019re proficient with a simple or martial melee weapon, you can use it as a spellcasting focus for your bard spells."
        ]
      },
      {
        "title": "Fighting Style",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
          "\u2022\u00a0Dueling",
          "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
          "\u2022\u00a0Two-Weapon Fighting",
          "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
        ]
      },
      {
        "title": "Blade Flourish",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you learn to conduct impressive displays of martial prowess and speed.",
          "Whenever you take the Attack action on your turn, your walking speed increases by 10 feet until the end of the turn, and if a weapon attack that you make as part of this action hits a creature, you can use one of the following Blade Flourish options of your choice. You can use only one Blade Flourish option per turn.",
          "***Defensive Flourish.*** You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You also add the number rolled to your AC until the start of your next turn.",
          "***Slashing Flourish.*** You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit and to any other creature of your choice that you can see within 5 feet of you. The damage equals the number you roll on the Bardic Inspiration die.",
          "***Mobile Flourish.*** You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You can also push the target up to 5 feet away from you, plus a number of feet equal to the number you roll on that die. You can then immediately use your reaction to move up to your walking speed to an unoccupied space within 5 feet of the target."
        ]
      },
      {
        "title": "Extra Attack",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      {
        "title": "Master's Flourish",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, whenever you use a Blade Flourish option, you can roll a d6 and use it instead of expending a Bardic Inspiration die."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons."
        ]
      },
      {
        "title": "Combat Inspiration",
        "isSubclassFeature": true,
        "details": [
          "Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses."
        ]
      },
      {
        "title": "Extra Attack",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      {
        "title": "Battle Magic",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action."
        ]
      },
      {
        "title": "Psychic Blades",
        "isSubclassFeature": true,
        "details": [
          "When you join the College of Whispers at 3rd level, you gain the ability to make your weapon attacks magically toxic to a creature's mind.",
          "When you hit a creature with a weapon attack, you can expend one use of your Bardic Inspiration to deal an additional 2d6 psychic damage to that target. You can do so only once per round on your turn.",
          "The psychic damage increases when you reach certain levels in this class, increasing to 3d6 at 5th level, 5d6 at 10th level, and 8d6 at 15th level."
        ]
      },
      {
        "title": "Words of Terror",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you learn to infuse innocent-seeming words with an insidious magic that can inspire terror.",
          "If you speak to a humanoid alone for at least 1 minute, you can attempt to seed paranoia and fear into its mind. At the end of the conversation, the target must succeed on a Wisdom saving throw against your spell save DC or be frightened of you or another creature of your choice. The target is frightened in this way for 1 hour, until it is attacked or damaged, or until it witnesses its allies being attacked or damaged.",
          "If the target succeeds on its saving throw, the target has no hint that you tried to frighten it.",
          "Once you use this feature, you can\u2019t use it again until you finish a short rest or long rest."
        ]
      },
      {
        "title": "Mantle of Whispers",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to adopt a humanoid's persona. When a humanoid dies within 30 feet of you, you can magically capture its shadow using your reaction. You retain this shadow until you use it or you finish a long rest.",
          "You can use the shadow as an action. When you do so, it vanishes, magically transforming into a disguise that appears on you. You now look like the dead person, but healthy and alive. This disguise lasts for 1 hour or until you end it as a bonus action.",
          "While you're in the disguise, you gain access to all information that the humanoid would freely share with a casual acquaintance. Such information includes general details on its background and personal life, but doesn't include secrets. The information is enough that you can pass yourself off as the person by drawing on its memories.",
          "Another creature can see through this disguise by succeeding on a Wisdom (Insight) check contested by your Charisma (Deception) check. You gain a +5 bonus to your check.",
          "Once you capture a shadow with this feature, you can't capture another one with it until you finish a short or long rest."
        ]
      },
      {
        "title": "Shadow Lore",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, you gain the ability to weave dark magic into your words and tap into a creature\u2019s deepest fears.",
          "As an action, you magically whisper a phrase that only one creature of your choice within 30 feet of you can hear. The target must make a Wisdom saving throw against your spell save DC. It automatically succeeds if it doesn\u2019t share a language with you or if it can\u2019t hear you. On a successful saving throw, your whisper sounds like unintelligible mumbling and has no effect.",
          "If the target fails its saving throw, it is charmed by you for the next 8 hours or until you or your allies attack or damage it. It interprets the whispers as a description of its most mortifying secret.",
          "While you gain no knowledge of this secret, the target is convinced you know it. While charmed in this way, the creature obeys your commands for fear that you will reveal its secret. It won\u2019t risk its life for you or fight for you, unless it was already inclined to do so. It grants you favors and gifts it would offer to a close friend.",
          "When the effect ends, the creature has no understanding of why it held you in such fear.",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      }
    ],
    "subclass": {
      "title": "Bard College",
      "prefix": "College of ",
      "suffix": null,
      "levels": [
        3,
        6,
        14
      ],
      "archetypes": {
        "GLAMOUR": {
          "title": "Glamour",
          "restrictions": [
            
          ],
          "details": [
            "The College of Glamour is the home of bards who mastered their craft in the vibrant realm of the Feywild or under the tutelage of someone who dwelled there. Tutored by satyrs, eladrin, and other fey, these bards learn to use their magic to delight and captivate others.",
            "The bards of this college are regarded with a mixture of awe and fear. Their performances are the stuff of legend. These bards are so eloquent that a speech or song that one of them performs can cause captors to release the bard unharmed and can lull a furious dragon into complacency. The same magic that allows them to quell beasts can also bend minds. Villainous bards of this college can leech off a community for weeks, abusing their magic to turn their hosts into thralls. Heroic bards of this college instead use this power to gladden the downtrodden and undermine oppressors."
          ],
          "features": [
            [
              {
                "name": "Mantle of Inspiration",
                "id": 11
              },
              {
                "name": "Enthralling Performance",
                "id": 12
              }
            ],
            [
              {
                "name": "Mantle of Majesty",
                "id": 13
              }
            ],
            [
              {
                "name": "Unbreakable Majesty",
                "id": 14
              }
            ]
          ]
        },
        "LORE": {
          "title": "Lore",
          "restrictions": [
            
          ],
          "details": [
            "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king.",
            "The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic.",
            "The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 15
              },
              {
                "name": "Cutting Words",
                "id": 16
              }
            ],
            [
              {
                "name": "Additional Magical Secrets",
                "id": 17
              }
            ],
            [
              {
                "name": "Peerless Skill",
                "id": 18
              }
            ]
          ]
        },
        "SATIRE_(UA)": {
          "title": "Satire",
          "restrictions": [
            
          ],
          "details": [
            "Bards of the College of Satire are called jesters. They use lowbrow stories, daring acrobatics, and cutting jokes to entertain audiences, ranging from the crowds in a rundown dockside pub to the nobles of a king\u2019s royal court. Where other bards seek forgotten lore or tales of epic bravery, jesters ferret out embarrassing and hilarious stories of all kinds. Whether telling the ribald tale of a brawny stable hand\u2019s affair with an aged duchess or a mocking satire of a paladin of Helm\u2019s cloying innocence, a jester never lets taste, social decorum, or shame get in the way of a good laugh.",
            "While jesters are masters of puns, jokes, and verbal barbs, they are much more than just comic relief. They are expected to mock and provoke, taking advantage of how even the most powerful folk are expected by tradition to endure a jester\u2019s barbs with good humor. This expectation allows a jester to serve as a critic or a voice of reason when others are too intimidated to speak the truth.",
            "For the duchess with a taste for strapping young laborers, such tales might serve to warn the targets of her affections and force her to change her ways for lack of willing partners. Striking back at the jester only ruins her already damaged reputation, and might provide the best evidence that the jester\u2019s satires have hit their mark. But if she is kind and generous to her conquests, the jokes and stories cast her as a kind of folk hero, while drawing even more potential partners to her.",
            "Jesters are loyal to only one cause: the pursuit and propagation of the truth. They use their comedy and innocuous appearance to break down social barriers and expose corruption, incompetence, and stupidity among the rich and powerful. Whether revealing a con artist\u2019s treachery or exposing a baron\u2019s plans for war as driven by greed and bloodlust, a jester serves as the conscience of a realm.",
            "Jesters adventure to safeguard the common folk and to undermine the plans of the rich, powerful, and arrogant. Their magic bolsters allies\u2019 spirits while casting doubt into foes\u2019 minds. Among bards, jesters are unmatched acrobats, and their ability to tumble, dodge, leap, and climb makes them slippery opponents in battle."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 19
              },
              {
                "name": "Tumbling Fool",
                "id": 20
              }
            ],
            [
              {
                "name": "Fool's Insight",
                "id": 21
              }
            ],
            [
              {
                "name": "Fool's Luck",
                "id": 22
              }
            ]
          ]
        },
        "SWORDS": {
          "title": "Swords",
          "restrictions": [
            
          ],
          "details": [
            "Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess. Blades perform stunts such as sword swallowing, knife throwing and juggling, and mock combats. Though they use their weapons to entertain, they are also highly trained and skilled warriors in their own right.",
            "Their talent with weapons inspires many blades to lead double lives. One blade might use a circus troupe as cover for nefarious deeds such as assassination, robbery, and blackmail. Other blades strike at the wicked, bringing justice to bear against the cruel and powerful. Most troupes are happy to accept a blade\u2019s talent for the excitement it adds to a performance, but few entertainers fully trust a blade in their ranks.",
            "Blades who abandon their lives as entertainers have often run into trouble that makes maintaining their secret activities impossible. A blade caught stealing or engaging in vigilante justice is too great a liability for most troupes. With their weapon skills and magic, these blades either take up work as enforcers for thieves\u2019 guilds or strike out on their own as adventurers."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 23
              },
              {
                "name": "Fighting Style",
                "id": 24
              },
              {
                "name": "Blade Flourish",
                "id": 25
              }
            ],
            [
              {
                "name": "Extra Attack",
                "id": 26
              }
            ],
            [
              {
                "name": "Master's Flourish",
                "id": 27
              }
            ]
          ]
        },
        "VALOR": {
          "title": "Valor",
          "restrictions": [
            
          ],
          "details": [
            "Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present. They travel the land to witness great events firsthand and to ensure that the memory of those events doesn't pass from the world. With their songs, they inspire others to reach the same heights of accomplishment as the heroes of old."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 28
              },
              {
                "name": "Combat Inspiration",
                "id": 29
              }
            ],
            [
              {
                "name": "Extra Attack",
                "id": 30
              }
            ],
            [
              {
                "name": "Battle Magic",
                "id": 31
              }
            ]
          ]
        },
        "WHISPERS": {
          "title": "Whispers",
          "restrictions": [
            
          ],
          "details": [
            "Most folk are happy to welcome a bard into their midst. Bards of the College of Whispers use this to their advantage. They appear to be like any other bard, sharing news, singing songs, and telling tales to the audiences they gather. In truth, the College of Whispers teaches its students that they are wolves among sheep. These bards use their knowledge and magic to uncover secrets and turn them against others through extortion and threats.",
            "Many other bards hate the College of Whispers, viewing it as a parasite that uses the bards\u2019 reputation to acquire wealth and power. For this reason, these bards rarely reveal their true nature unless they must. They typically claim to follow some other college, or keep their true nature secret in order to better infiltrate and exploit royal courts and other settings of power."
          ],
          "features": [
            [
              {
                "name": "Psychic Blades",
                "id": 32
              },
              {
                "name": "Words of Terror",
                "id": 33
              }
            ],
            [
              {
                "name": "Mantle of Whispers",
                "id": 34
              }
            ],
            [
              {
                "name": "Shadow Lore",
                "id": 35
              }
            ]
          ]
        }
      }
    }
  },
  "CLERIC": {
    "title": "Cleric",
    "route": "cleric",
    "image": "cleric.svg",
    "details": [
      "Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.",
      "**You must have a Wisdom score of 13 or higher in order to multiclass in or out of this class.**"
    ],
    "tym": [
      "mom friend",
      "carries band-aids",
      "bakes cookies for everybody"
    ],
    "summary": "A priestly champion who wields divine magic capable of healing and empowering allies in service of a higher power.",
    "recommendedStats": [
      "Wisdom",
      "Strength",
      "Constitution"
    ],
    "spellcasting": {
      "details": [
        "As a conduit for divine power, you can cast cleric spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the cleric spell list."
      ],
      "preparing": [
        "The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell\u2019s level or higher. You regain all expended spell slots when you finish a long rest.",
        "You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.",
        "For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn\u2019t remove it from your list of prepared spells.",
        "You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
      ],
      "ability": [
        "Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one."
      ],
      "mod": "WIS",
      "save": 8,
      "other": [
        {
          "title": "Ritual Casting",
          "text": "You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared."
        },
        {
          "title": "Spellcasting Focus",
          "text": "You can use a holy symbol (see the Adventuring Gear section) as a spellcasting focus for your cleric spells."
        }
      ]
    },
    "hitDice": 8,
    equipment: [
      [Item(WEAPONS.SIMPLE.MELEE.MACE), Item(WEAPONS.MARTIAL.MELEE.WARHAMMER, 1, true)],
      [Item(WEAPONS.SIMPLE.MELEE.DAGGER)],
      [Item(ARMOR.MEDIUM.SCALE_MAIL), Item(ARMOR.LIGHT.LEATHER), Item(ARMOR.HEAVY.CHAIN_MAIL, 1, true)],
      [[Item(WEAPONS.SIMPLE.RANGED.LIGHT_CROSSBOW), Item(ITEMS.AMMUNITION.CROSSBOW_BOLT, 20)], Item(WEAPONS.SIMPLE)],
      [Item(ITEMS.STARTER_PACK.PRIEST), Item(ITEMS.STARTER_PACK.EXPLORER)],
      [[Item(ARMOR.SHIELDS.SHIELD), Item(ITEMS.HOLY_SYMBOL)]]
    ],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.SHIELDS],
      weapons: [WEAPONS.SIMPLE],
      tools: [],
      savingThrows: [STATS.WIS, STATS.CHA],
      skills: {
        choose: 2,
        options: [
          SKILLS.HISTORY, 
          SKILLS.INSIGHT,
          SKILLS.MEDICINE, 
          SKILLS.PERSUASION, 
          SKILLS.RELIGION
        ]
      }
    },
    "asi": [
      4,
      8,
      12,
      16,
      19
    ],
    "levelTable": {
      "title": "The Cleric",
      "rows": [
        {
          "key": 2,
          "level": "1st",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Spellcasting",
              "id": 0
            },
            {
              "name": "Divine Domain",
              "id": 1
            }
          ],
          "cantripsKnown": "3",
          "1st": "2",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 3,
          "level": "2nd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Channel Divinity (x1)",
              "id": 2
            }
          ],
          "cantripsKnown": "3",
          "1st": "3",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 4,
          "level": "3rd",
          "proficiencyBonus": "+2",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "1st": "4",
          "2nd": "2",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 5,
          "level": "4th",
          "proficiencyBonus": "+2",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 6,
          "level": "5th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Destroy Undead (CR 1/2)",
              "id": 4
            }
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "2",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 7,
          "level": "6th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Channel Divinity (x2)",
              "id": 2
            }
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 8,
          "level": "7th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "1",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 9,
          "level": "8th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Destroy Undead (CR 1)",
              "id": 4
            }
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "2",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 10,
          "level": "9th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "1",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 11,
          "level": "10th",
          "proficiencyBonus": "+4",
          "features": [
            {
              "name": "Divine Intervention",
              "id": 5
            }
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 12,
          "level": "11th",
          "proficiencyBonus": "+4",
          "features": [
            {
              "name": "Destroy Undead (CR 2)",
              "id": 4
            }
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 13,
          "level": "12th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 14,
          "level": "13th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 15,
          "level": "14th",
          "proficiencyBonus": "+5",
          "features": [
            {
              "name": "Destroy Undead (CR 3)",
              "id": 4
            }
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 16,
          "level": "15th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "-"
        },
        {
          "key": 17,
          "level": "16th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "-"
        },
        {
          "key": 18,
          "level": "17th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Destroy Undead (CR 4)",
              "id": 4
            }
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 19,
          "level": "18th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Channel Divinity (x3)",
              "id": 2
            }
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 20,
          "level": "19th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "2",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 21,
          "level": "20th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Divine Intervention II",
              "id": 5
            }
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "2",
          "7th": "2",
          "8th": "1",
          "9th": "1"
        }
      ],
      "columns": [
        {
          "title": "Level",
          "dataIndex": "level",
          "key": "level",
          "align": "center"
        },
        {
          "title": "Proficiency Bonus",
          "dataIndex": "proficiencyBonus",
          "key": "proficiencyBonus",
          "align": "center"
        },
        {
          "title": "Features",
          "dataIndex": "features",
          "key": "features",
          "align": "center"
        },
        {
          "title": "Cantrips Known",
          "dataIndex": "cantripsKnown",
          "key": "cantripsKnown",
          "align": "center"
        },
        {
          "title": "Spell Slots per Spell Level",
          "dataIndex": "spellSlotsPerSpellLevel",
          "key": "spellSlotsPerSpellLevel",
          "children": [
            {
              "title": "1st",
              "dataIndex": "1st",
              "key": "1st",
              "align": "center"
            },
            {
              "title": "2nd",
              "dataIndex": "2nd",
              "key": "2nd",
              "align": "center"
            },
            {
              "title": "3rd",
              "dataIndex": "3rd",
              "key": "3rd",
              "align": "center"
            },
            {
              "title": "4th",
              "dataIndex": "4th",
              "key": "4th",
              "align": "center"
            },
            {
              "title": "5th",
              "dataIndex": "5th",
              "key": "5th",
              "align": "center"
            },
            {
              "title": "6th",
              "dataIndex": "6th",
              "key": "6th",
              "align": "center"
            },
            {
              "title": "7th",
              "dataIndex": "7th",
              "key": "7th",
              "align": "center"
            },
            {
              "title": "8th",
              "dataIndex": "8th",
              "key": "8th",
              "align": "center"
            },
            {
              "title": "9th",
              "dataIndex": "9th",
              "key": "9th",
              "align": "center"
            }
          ],
          "align": "center"
        }
      ],
      "featuresIndex": 2
    },
    "features": [
      {
        "title": "Spellcasting",
        "isSubclassFeature": false,
        "details": [
          "As a conduit for divine power, you can cast cleric spells.",
          "**As a conduit for divine power, you can cast cleric spells.**",
          "At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.",
          "**At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.**",
          "The Cleric table shows how many spell slots you have to cast your spells of lst level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
          "You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.",
          "For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
          "You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
          "**You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.**",
          "Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.",
          "**Spell save DC** = 8 + your proficiency bonus + your Wisdom modifier",
          "**Spell attack modifier** = your proficiency bonus + your Wisdom modifier",
          "****Spell attack modifier** = your proficiency bonus + your Wisdom modifier**",
          "You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.",
          "**You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.**",
          "You can use a holy symbol as a spellcasting focus for your cleric spells."
        ]
      },
      {
        "title": "Divine Domain",
        "isSubclassFeature": false,
        "details": [
          "Choose one domain:\n\u2022\u00a0Arcana\n\u2022\u00a0Death\n\u2022\u00a0Forge\n\u2022\u00a0Grave\n\u2022\u00a0Knowledge\n\u2022\u00a0Life\n\u2022\u00a0Light\n\u2022\u00a0Nature\n\u2022\u00a0Order\n\u2022\u00a0Protection (UA)\n\u2022\u00a0Tempest\n\u2022\u00a0Trickery\n\u2022\u00a0War\nThe following subclass is unofficial homebrew created by WOTC affiliated DM, Matthew Mercer:\n\u2022\u00a0Blood\nThe following domains are designed for the Amonkhet setting, but may be used elsewhere with DM permission:\n\u2022\u00a0Solidarity\n\u2022\u00a0Strength\n\u2022\u00a0Ambition\n\u2022\u00a0Zeal\nYour choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.",
          "**Choose one domain:\n\u2022\u00a0Arcana\n\u2022\u00a0Death\n\u2022\u00a0Forge\n\u2022\u00a0Grave\n\u2022\u00a0Knowledge\n\u2022\u00a0Life\n\u2022\u00a0Light\n\u2022\u00a0Nature\n\u2022\u00a0Order\n\u2022\u00a0Protection (UA)\n\u2022\u00a0Tempest\n\u2022\u00a0Trickery\n\u2022\u00a0War\nThe following subclass is unofficial homebrew created by WOTC affiliated DM, Matthew Mercer:\n\u2022\u00a0Blood\nThe following domains are designed for the Amonkhet setting, but may be used elsewhere with DM permission:\n\u2022\u00a0Solidarity\n\u2022\u00a0Strength\n\u2022\u00a0Ambition\n\u2022\u00a0Zeal\nYour choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.**",
          "Each domain has a list of spells-its domain spells that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
          "If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
        ]
      },
      {
        "title": "Channel Divinity",
        "isSubclassFeature": false,
        "details": [
          "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.",
          "When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.",
          "Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.",
          "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.",
          "**Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.**",
          "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
          "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
        ]
      },
      {
        "title": "Ability Score Improvement",
        "isSubclassFeature": false,
        "details": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      {
        "title": "Destroy Undead",
        "isSubclassFeature": false,
        "details": [
          "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Cleric table above."
        ]
      },
      {
        "title": "Divine Intervention",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.",
          "Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.",
          "At 20th level, your call for intervention succeeds automatically, no roll required."
        ]
      },
      {
        "title": "Arcane Initiate",
        "isSubclassFeature": true,
        "details": [
          "When you choose this domain at 1st level, you gain proficiency in the Arcana skill, and you gain two cantrips of your choice from the wizard spell list. For you, these cantrips count as cleric cantrips."
        ]
      },
      {
        "title": "Channel Divinity: Arcane Abjuration",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to abjure otherworldly creatures.",
          "As an action, you present your holy symbol, and one celestial, elemental, fey, or fiend of your choice that is within 30 feet of you must make a Wisdom saving throw, provided that the creature can see or hear you. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
          "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. It also can't take reactions. For its action, it can only use the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.",
          "After you reach 5th level, when a creature fails its saving throw against your Arcane Abjuration feature, the creature is banished for 1 minute (as in the Banishment spell, no concentration required) if it isn't on its plane of origin and its challenge rating is at or below a certain threshold, as shown on the Arcane Banishment table.",
          {
            "title": "Arcane Banishment",
            "rows": [
              {
                "key": 2,
                "clericLevel": "5th",
                "banishesCreaturesOfCr\u2026": "1/2 or lower"
              },
              {
                "key": 3,
                "clericLevel": "8th",
                "banishesCreaturesOfCr\u2026": "1 or lower"
              },
              {
                "key": 4,
                "clericLevel": "11th",
                "banishesCreaturesOfCr\u2026": "2 or lower"
              },
              {
                "key": 5,
                "clericLevel": "14th",
                "banishesCreaturesOfCr\u2026": "3 or lower"
              },
              {
                "key": 6,
                "clericLevel": "17th",
                "banishesCreaturesOfCr\u2026": "4 or lower"
              }
            ],
            "columns": [
              {
                "title": "Cleric Level",
                "dataIndex": "clericLevel",
                "key": "clericLevel"
              },
              {
                "title": "Banishes Creatures of CR\u2026",
                "dataIndex": "banishesCreaturesOfCr\u2026",
                "key": "banishesCreaturesOfCr\u2026"
              }
            ]
          }
        ]
      },
      {
        "title": "Spell Breaker",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, when you restore hit points to an ally with a spell of 1st level or higher, you can also end one spell of your choice on that creature. The level of the spell you end must be equal to or lower than the level of the spell slot you use to cast the healing spell."
        ]
      },
      {
        "title": "Potent Spellcasting",
        "isSubclassFeature": true,
        "details": [
          "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
        ]
      },
      {
        "title": "Arcane Mastery",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you choose four spells from the wizard spell list, one from each of the following levels: 6th, 7th, 8th, and 9th. You add them to your list of domain spells. Like your other domain spells, they are always prepared and count as cleric spells for you."
        ]
      },
      {
        "title": "Bonus Proficiency",
        "isSubclassFeature": true,
        "details": [
          "When you choose this domain at 1st level, you gain proficiency with martial weapons."
        ]
      },
      {
        "title": "Reaper",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you learn one necromancy cantrip of your choice from any spell list. When you cast a necromancy cantrip that normally targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other."
        ]
      },
      {
        "title": "Channel Divinity: Touch of Death",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use Channel Divinity to destroy another creature's life force by touch. When you hit a creature with a melee attack, you can use Channel Divinity to deal extra necrotic damage to the target. The damage equals 5 + twice your cleric level."
        ]
      },
      {
        "title": "Inescapable Destruction",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, your ability to channel negative energy becomes more potent. Necrotic damage dealt by your cleric spells and Channel Divinity options ignores resistance to necrotic damage."
        ]
      },
      {
        "title": "Divine Strike",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you gain the ability to infuse your weapon strikes with necrotic energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an a 1d8 necrotic damage to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Improved Reaper",
        "isSubclassFeature": true,
        "details": [
          "Starting at 17th level, when you cast a necromancy spell of 1st through 5th level that targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other. If the spell consumes its material components, you must provide them for each target."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "When you choose this domain at 1st level, you gain proficiency with heavy armor and smith's tools."
        ]
      },
      {
        "title": "Blessing of the Forge",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a simple or martial weapon. Until the end of your next long rest or until you die, the object becomes a magic item, granting a +1 bonus to AC if it\u2019s armor or a +1 bonus to attack and damage rolls if it\u2019s a weapon.",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      },
      {
        "title": "Channel Divinity: Artisan's Blessing",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to create simple items.",
          "You conduct an hour-long ritual that crafts a nonmagical item that must include some metal: a simple or martial weapon, a suit of armor, ten pieces of ammunition, a set of tools, or another metal object. The creation is completed at the end of the hour, coalescing in an unoccupied space of your choice on a surface within 5 feet of you.",
          "The thing you create can be something that is worth no more than 100 gp. As part of this ritual, you must lay out metal, which can include coins, with a value equal to the creation. The metal irretrievably coalesces and transforms into the creation at the ritual\u2019s end, magically forming even nonmetal parts of the creation.",
          "The ritual can create a duplicate of a nonmagical item that contains metal, such as a key, if you possess the original during the ritual."
        ]
      },
      {
        "title": "Soul of the Forge",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, your mastery of the forge grants you special abilities:\n\u2022 You gain resistance to fire damage.\n\u2022 While wearing heavy armor, you gain a +1 bonus to AC."
        ]
      },
      {
        "title": "Divine Strike",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you gain the ability to infuse your weapon strikes with the fiery power of the forge. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 fire damage to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Saint of Forge and Fire",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, your blessed affinity with fire and metal becomes more powerful:\n\u2022 You gain immunity to fire damage.\n\u2022 While wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
        ]
      },
      {
        "title": "Circle of Mortality",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you gain the ability to manipulate the line between life and death. When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible for each die.",
          "In addition, you learn the Spare the Dying cantrip, which doesn't count against the number of cleric cantrips you know. For you, it has a range of 30 feet, and you can cast it as a bonus action."
        ]
      },
      {
        "title": "Eyes of the Grave",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your next turn, you know the location of any undead within 60 feet of you that isn't behind total cover and that isn't protected from divination magic. This sense doesn't tell you anything about a creature's capabilities or identity.",
          "You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest."
        ]
      },
      {
        "title": "Channel Divinity: Path to the Grave",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to mark another creature\u2019s life force for termination.",
          "As an action, you choose one creature you can see within 30 feet of you, cursing it until the end of your next turn. The next time you or an ally of yours hits the cursed creature with an attack, the creature has vulnerability to all of that attack's damage, and then the curse ends."
        ]
      },
      {
        "title": "Sentinel at Death's Door",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to impede death\u2019s progress. As a reaction when you or an ally that you can see within 30 feet of you suffers a critical hit, you can turn that attack into a normal hit. Any effects triggered by a critical hit are canceled.",
          "You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest."
        ]
      },
      {
        "title": "Potent Spellcasting",
        "isSubclassFeature": true,
        "details": [
          "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
        ]
      },
      {
        "title": "Keeper of Souls",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you can seize a trace of vitality from a parting soul and use it to heal the living. When an enemy you can see dies within 30 feet of you, you or one ally of your choice that is within 30 feet of you regains hit points equal to the enemy\u2019s number of Hit Dice. You can use this feature only if you aren't incapacitated. Once you use it, you can't do so again until the start of your next turn."
        ]
      },
      {
        "title": "Blessings of Knowledge",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.",
          "Your proficiency bonus is doubled for any ability check you make that uses either of those skills."
        ]
      },
      {
        "title": "Channel Divinity: Knowledge of the Ages",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool."
        ]
      },
      {
        "title": "Channel Divinity: Read Thoughts",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.",
          "As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.",
          "If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it ie actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.",
          "During that time, you can use your action to end this effect and cast the Suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell."
        ]
      },
      {
        "title": "Potent Spellcasting",
        "isSubclassFeature": true,
        "details": [
          "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
        ]
      },
      {
        "title": "Visions of the Past",
        "isSubclassFeature": true,
        "details": [
          "Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.",
          "Once you use this feature, you can't use it again until you finish a short or long rest.",
          "***Object Reading.*** Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.",
          "***Area Reading.*** As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation."
        ]
      },
      {
        "title": "Bonus Proficiency",
        "isSubclassFeature": true,
        "details": [
          "When you choose this domain at 1st level, you gain proficiency with heavy armor."
        ]
      },
      {
        "title": "Disciple of Life",
        "isSubclassFeature": true,
        "details": [
          "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level."
        ]
      },
      {
        "title": "Channel Divinity: Preserve Life",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.",
          "As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct."
        ]
      },
      {
        "title": "Blessed Healer",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level."
        ]
      },
      {
        "title": "Divine Strike",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Supreme Healing",
        "isSubclassFeature": true,
        "details": [
          "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12."
        ]
      },
      {
        "title": "Bonus Cantrip",
        "isSubclassFeature": true,
        "details": [
          "When you choose this domain at 1st level, you gain the Light cantrip if you don't already know it."
        ]
      },
      {
        "title": "Warding Flare",
        "isSubclassFeature": true,
        "details": [
          "Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature.",
          "You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
        ]
      },
      {
        "title": "Channel Divinity: Radiance of the Dawn",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.",
          "As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected."
        ]
      },
      {
        "title": "Improved Flare",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you."
        ]
      },
      {
        "title": "Potent Spellcasting",
        "isSubclassFeature": true,
        "details": [
          "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
        ]
      },
      {
        "title": "Corona of Light",
        "isSubclassFeature": true,
        "details": [
          "Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage."
        ]
      },
      {
        "title": "Acolyte of Nature",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you learn one cantrip of your choice from the druid spell list. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival."
        ]
      },
      {
        "title": "Bonus Proficiency",
        "isSubclassFeature": true,
        "details": [
          "Also at 1st level, you gain proficiency with heavy armor."
        ]
      },
      {
        "title": "Channel Divinity: Charm Animals and Plants",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.",
          "As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate."
        ]
      },
      {
        "title": "Dampen Elements",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage."
        ]
      },
      {
        "title": "Divine Strike",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Master of Nature",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "When you choose this domain at 1st level, you gain proficiency with heavy armor. You also gain proficiency in the Intimidation or Persuasion skill (your choice)."
        ]
      },
      {
        "title": "Voice of Authority",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, you can invoke the power of law to drive an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell to make one weapon attack against a creature of your choice that you can see.",
          "If the spell targets more than one ally, you choose the ally who can make the attack."
        ]
      },
      {
        "title": "Channel Divinity: Order's Demand",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to exert an intimidating presence over others.",
          "As an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be charmed by you until the end of your next turn or until the charmed creature takes any damage. You can also cause any of the charmed creatures to drop what they are holding when they fail the saving throw."
        ]
      },
      {
        "title": "Embodiment of the Law",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you become remarkably adept at channeling magical energy to compel others.",
          "If you cast a spell of the enchantment school using a spell slot of 1st level or higher, you can change the spell's casting time to 1 bonus action for this casting, provided the spell's casting time is normally 1 action.",
          "You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
        ]
      },
      {
        "title": "Divine Strike",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 psychic damage to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Order's Wrath",
        "isSubclassFeature": true,
        "details": [
          "Starting at 17th level, enemies you designate for destruction wilt under the combined efforts of you and your allies. If you deal your Divine Strike damage to a creature on your turn, you can curse that creature until the start of your next turn. The next time one of your allies hits the cursed creature with an attack, the target also takes 2d8 psychic damage, and the curse ends. You can curse a creature in this way only once per turn."
        ]
      },
      {
        "title": "Bonus Proficiency",
        "isSubclassFeature": true,
        "details": [
          "When you choose this domain at 1st level, you gain proficiency with heavy armor."
        ]
      },
      {
        "title": "Shield of the Faithful",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, you gain the ability to hinder attacks intended for others. When a creature attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. To do so, you must be able to see both the attacker and the target. You interpose an arm, a shield, or some other part of yourself to try to throw the attack off target."
        ]
      },
      {
        "title": "Channel Divinity: Radiant Defense",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to cloak your allies in radiant armor.",
          "As an action, you channel blessed energy into an ally that you can see within 30 feet of you. The first time that ally is hit by an attack within the next minute, the attacker takes radiant damage equal to 2d10 + your cleric level."
        ]
      },
      {
        "title": "Blessed Healer",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 6th level, the healing spells you cast on others can heal you as well. When you cast a spell with a spell slot and it restores hit points to any creature other than you this turn, you regain hit points equal to 2 + the spell\u2019s level."
        ]
      },
      {
        "title": "Divine Strike",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Indomitable Defense",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you gain resistance to two damage types of your choice, choosing from bludgeoning, necrotic, piercing, radiant, and slashing. Whenever you finish a short or long rest, you can change the damage types you chose.",
          "As an action, you can temporarily give up this resistance and transfer it to one creature you touch. The creature keeps the resistance until the end of your next short or long rest or until you transfer it back to yourself as a bonus action."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you gain proficiency with martial weapons and heavy armor."
        ]
      },
      {
        "title": "Wrath of the Storm",
        "isSubclassFeature": true,
        "details": [
          "Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.",
          "You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
        ]
      },
      {
        "title": "Channel Divinity: Destructive Wrath",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.",
          "When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling."
        ]
      },
      {
        "title": "Thunderous Strike",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you."
        ]
      },
      {
        "title": "Divine Strike",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Stormborn",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors."
        ]
      },
      {
        "title": "Blessing of the Trickster",
        "isSubclassFeature": true,
        "details": [
          "Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again."
        ]
      },
      {
        "title": "Channel Divinity: Invoke Duplicity",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.",
          "As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.",
          "For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target."
        ]
      },
      {
        "title": "Channel Divinity: Cloak of Shadows",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can use your Channel Divinity to vanish.",
          "As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell."
        ]
      },
      {
        "title": "Divine Strike",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you gain the ability to infuse your weapon strikes with poison \u2013\u00a0a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Improved Duplicity",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet."
        ]
      },
      {
        "title": "Bonus Proficiency",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you gain proficiency with martial weapons and heavy armor."
        ]
      },
      {
        "title": "War Preist",
        "isSubclassFeature": true,
        "details": [
          "From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action.",
          "You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
        ]
      },
      {
        "title": "Channel Divinity: Guided Strike",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
        ]
      },
      {
        "title": "Channel Divinity: War God's Blessing",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
        ]
      },
      {
        "title": "Divine Strike",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Avatar of Battle",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons."
        ]
      },
      {
        "title": "Bonus Proficiency",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you gain proficiency with martial weapons."
        ]
      },
      {
        "title": "Bloodletting Focus",
        "isSubclassFeature": true,
        "details": [
          "From 1st level, your divine magics draw the blood from inflicted wounds, worsening the agony of your nearby foes. When you use a spell of 1st level or higher to inflict damage to any creatures that have blood, those creatures suffer additional necrotic damage equal to 2 + the spell\u2019s level."
        ]
      },
      {
        "title": "Channel Divinity: Blood Puppet",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to briefly control a creature\u2019s actions against their will.",
          "As an action, you target a Large or smaller creature that has blood within 60 feet of you. That creature must succeed on a Constitution saving throw against your spell save DC or immediately move up to half of their movement in any direction of your choice and make a single weapon attack against a creature of your choice within range. Dead or unconscious creatures automatically fail their saving throw. At 8th level, you can target a Huge or smaller creature."
        ]
      },
      {
        "title": "Channel Divinity: Crimson Bond",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can use your Channel Divinity to focus on a sample of blood from a creature that is at least 2 ounces, and that has been spilt no longer than a week ago.",
          "As an action, you can focus on the blood of the creature to form a bond and gain information about their current circumstances. You know their approximate distance and direction from you, as well as their general state of health, as long as they are within 10 miles of you. You can maintain this effect as though you were concentrating on a spell for up to 1 hour.",
          "During your bond, you can spend an action to attempt to connect with the bonded creature\u2019s senses. The target makes a Constitution saving throw against your spell save DC. If they succeed, the connection is resisted, ending the bond. You suffer 2d6 necrotic damage. Upon a failed saving throw, you can choose to either see through the eyes of or hear through their ears of the target for a number of rounds equal to your Wisdom modifier (minimum of 1). During this time, you are blind or deaf (respectively) with regard to your own senses.",
          "Once this connection ends, the Crimson Bond is lost."
        ]
      },
      {
        "title": "Sanguine Recall",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you can sacrifice a portion of your own vitality to recover expended spell slots. As an action, you recover spell slots that have a combined level equal to or less than half of your cleric level (rounded up), and none of the slots can be 6th level or higher. You immediately suffer 1d6 necrotic damage per spell slot level recovered. You can\u2019t use this feature again until you finish a long rest.",
          "For example, if you are an 8th-level cleric, you can recover up to four levels of spell slots. You can recover a single 4th-level spell slot, two 2nd-level spell slots, a 3rd-level spell slot and a 1st level spell slot, or four 1st-level spell slots. You then suffer 4d6 damage."
        ]
      },
      {
        "title": "Vascular Corruption Aura",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, as an action, you can emit a powerful aura that extends 30 feet out from you. This aura pulses necrotic energy through the veins of nearby foes, causing them to burst and bleed.",
          "For 1 minute, any enemy creatures with blood that begin their turn within the aura or enter it for the first time on their turn immediately suffer 2d6 necrotic damage. Any enemy creature with blood that would regain hit points while within the aura only regains half of the intended number of hit points (rounded up).",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      },
      {
        "title": "Bonus Proficiency",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you gain proficiency with heavy armor."
        ]
      },
      {
        "title": "Solidarity's Action",
        "isSubclassFeature": true,
        "details": [
          "Also at 1st level, when you take the Help action to aid an ally\u2019s attack, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain expended uses when you finish a long rest."
        ]
      },
      {
        "title": "Channel Divinity: Preserve Life",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to heal the badly injured. As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can\u2019t use this feature on an undead or a construct."
        ]
      },
      {
        "title": "Channel Divinity: Oketra's Blessing",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
        ]
      },
      {
        "title": "Divine Strike",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Supreme Healing",
        "isSubclassFeature": true,
        "details": [
          "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12."
        ]
      },
      {
        "title": "Bonus Proficiency",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you gain proficiency with heavy armor."
        ]
      },
      {
        "title": "Acolyte of Strength",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Athletics, Nature, or Survival."
        ]
      },
      {
        "title": "Channel Divinity: Feat of Strength",
        "isSubclassFeature": true,
        "details": [
          "At 2nd level, you can use your Channel Divinity to enhance your physical might. When you make an attack roll, ability check, or saving throw using Strength, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the roll succeeds or fails."
        ]
      },
      {
        "title": "Channel Divinity: Rhonas' Blessing",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, when a creature within 30 feet of you makes an attack roll, ability check, or saving throw using Strength, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the roll succeeds or fail."
        ]
      },
      {
        "title": "Divine Strike",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Avatar of Battle",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
        ]
      },
      {
        "title": "Warding Flare",
        "isSubclassFeature": true,
        "details": [
          "When you choose this domain at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can\u2019t be blinded is immune to this feature.",
          "You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
        ]
      },
      {
        "title": "Channel Divinity: Invoke Duplicity",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.",
          "As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.",
          "For the duration, you can cast spells as though you were in the illusion\u2019s space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target."
        ]
      },
      {
        "title": "Channel Divinity: Cloak of Shadows",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can use your Channel Divinity to vanish. As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell."
        ]
      },
      {
        "title": "Potent Spellcasting",
        "isSubclassFeature": true,
        "details": [
          "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
        ]
      },
      {
        "title": "Improved Duplicity",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you gain proficiency with martial weapons and heavy armor."
        ]
      },
      {
        "title": "Priest of Zeal",
        "isSubclassFeature": true,
        "details": [
          "From 1st level, Hazoret delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action.",
          "You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
        ]
      },
      {
        "title": "Channel Divinity: Consuming Fervor",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can use your Channel Divinity to channel your zeal into unchecked ferocity.",
          "When you roll fire or thunder damage, you can use your Channel Divinity to deal maximum damage instead of rolling."
        ]
      },
      {
        "title": "Resounding Strike",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, when you deal thunder damage to a Large or smaller creature, you can also push it up to 10 feet away from you."
        ]
      },
      {
        "title": "Divine Strike",
        "isSubclassFeature": true,
        "details": [
          "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Blaze of Glory",
        "isSubclassFeature": true,
        "details": [
          "Starting at 17th level, you can delay death for an instant to perform a final heroic act.",
          "When you are reduced to 0 hit points by an attacker you can see, even if you would be killed outright, you can use your reaction to move up to your speed toward the attacker and make one melee weapon attack against it, as long as the movement brings it within your reach. You make this attack with advantage. If the attack hits, the creature takes an extra 5d10 fire damage and an extra 5d10 damage of the weapon\u2019s type. You then fall unconscious and begin making death saving throws as normal, or you die if the damage you took would have killed you outright.",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      }
    ],
    "subclass": {
      "title": "Divine Domain",
      "prefix": null,
      "suffix": " Domain",
      "levels": [
        1,
        2,
        6,
        8,
        17
      ],
      "archetypes": {
        "ARCANA": {
          "title": "Arcana",
          "restrictions": [
            
          ],
          "details": [
            "Magic is an energy that suffuses the multiverse and that fuels both destruction and creation. Gods of the Arcana domain know the secrets and potential of magic intimately. For some of these gods, magical knowledge is a great responsibility that comes with a special understanding of the nature of reality. Other gods of Arcana see magic as pure power, to be used as its wielder sees fit.",
            "The gods of this domain are often associated with knowledge, as learning and arcane power tend to go hand-in-hand. In the Realms, deities of this domain include Azuth and Mystra, as well as Corellon Larethian of the elven pantheon. In other worlds, this domain includes Hecate, Math Mathonwy, and Isis; the triple moon gods of Solinari, Lunitari, and Nuitari of Krynn; and Boccob, Vecna, and Wee Jas of Greyhawk."
          ],
          "features": [
            [
              {
                "name": "Arcane Initiate",
                "id": 6
              }
            ],
            [
              {
                "name": "Channel Divinity: Arcane Abjuration",
                "id": 7
              }
            ],
            [
              {
                "name": "Spell Breaker",
                "id": 8
              }
            ],
            [
              {
                "name": "Potent Spellcasting",
                "id": 9
              }
            ],
            [
              {
                "name": "Arcane Mastery",
                "id": 10
              }
            ]
          ]
        },
        "DEATH": {
          "title": "Death",
          "restrictions": [
            
          ],
          "details": [
            "The Death domain is concerned with the forces that cause death, as well as the negative energy that gives rise to undead creatures. Deities such as Chemosh, Myrkul, and Wee Jas are patrons of necromancers, death knights, liches, mummy lords, and vampires. Gods of the Death domain also embody murder (Anubis, Bhaal, and Pyremius), pain (Iuz or Loviatar), disease or poison (Incabulos, Talona, or Morgion), and the underworld (Hades and Hel)."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiency",
                "id": 11
              },
              {
                "name": "Reaper",
                "id": 12
              }
            ],
            [
              {
                "name": "Channel Divinity: Touch of Death",
                "id": 13
              }
            ],
            [
              {
                "name": "Inescapable Destruction",
                "id": 14
              }
            ],
            [
              {
                "name": "Divine Strike",
                "id": 15
              }
            ],
            [
              {
                "name": "Improved Reaper",
                "id": 16
              }
            ]
          ]
        },
        "FORGE": {
          "title": "Forge",
          "restrictions": [
            
          ],
          "details": [
            "The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords. The gods of the forge teach that, with patience and hard work, even the most intractable metal can be transformed from a lump of ore to a beautifully wrought object. Clerics of these deities search for objects lost to the forces of darkness, liberate mines overrun by orcs, and uncover rare and wondrous materials necessary to create potent magic items. Followers of these gods take great pride in their work, and they are willing to craft and use heavy armor and powerful weapons to protect them. Deities of this domain include Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 17
              },
              {
                "name": "Blessing of the Forge",
                "id": 18
              }
            ],
            [
              {
                "name": "Channel Divinity: Artisan's Blessing",
                "id": 19
              }
            ],
            [
              {
                "name": "Soul of the Forge",
                "id": 20
              }
            ],
            [
              {
                "name": "Divine Strike",
                "id": 21
              }
            ],
            [
              {
                "name": "Saint of Forge and Fire",
                "id": 22
              }
            ]
          ]
        },
        "GRAVE": {
          "title": "Grave",
          "restrictions": [
            
          ],
          "details": [
            "Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse\u2019s workings. To resist death, or to desecrate the dead\u2019s rest, is an abomination. Deities of the grave include Kelemvor, Wee Jas, the ancestral spirits of the Undying Court, Hades, Anubis, and Osiris. These deities teach their followers to respect the dead and pay them due homage. Followers of these deities seek to put restless spirits to rest, destroy the undead wherever they find them, and ease the suffering of dying creatures. Their magic also allows them to stave off a creature\u2019s death, though they refuse to use such magic to extend a creature\u2019s lifespan beyond its mortal limits."
          ],
          "features": [
            [
              {
                "name": "Circle of Mortality",
                "id": 23
              },
              {
                "name": "Eyes of the Grave",
                "id": 24
              }
            ],
            [
              {
                "name": "Channel Divinity: Path to the Grave",
                "id": 25
              }
            ],
            [
              {
                "name": "Sentinel at Death's Door",
                "id": 26
              }
            ],
            [
              {
                "name": "Potent Spellcasting",
                "id": 27
              }
            ],
            [
              {
                "name": "Keeper of Souls",
                "id": 28
              }
            ]
          ]
        },
        "KNOWLEDGE": {
          "title": "Knowledge",
          "restrictions": [
            
          ],
          "details": [
            "The gods of knowledge \u2013 including Oghma, Boccob, Gilean, Aureon, and Thoth \u2013 value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.",
            "In Amonkhet, knowledge is the second virtue of society. Kefnet\u2019s task is to pass on this teaching of the God-Pharaoh and elucidate its meaning. He teaches that the afterlife will be inhabited only by those who have proved by their wits that they are worthy of dwelling in the glorious presence of the God-Pharaoh. He trains acolytes and initiates to push their limits and challenge their mental capacity with spells of ever-greater power."
          ],
          "features": [
            [
              {
                "name": "Blessings of Knowledge",
                "id": 29
              }
            ],
            [
              {
                "name": "Channel Divinity: Knowledge of the Ages",
                "id": 30
              }
            ],
            [
              {
                "name": "Channel Divinity: Read Thoughts",
                "id": 31
              }
            ],
            [
              {
                "name": "Potent Spellcasting",
                "id": 32
              }
            ],
            [
              {
                "name": "Visions of the Past",
                "id": 33
              }
            ]
          ]
        },
        "LIFE": {
          "title": "Life",
          "restrictions": [
            
          ],
          "details": [
            "The Life domain focuses on the vibrant positive energy \u2013 one of the fundamental forces of the universe \u2013 that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrci)."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiency",
                "id": 34
              },
              {
                "name": "Disciple of Life",
                "id": 35
              }
            ],
            [
              {
                "name": "Channel Divinity: Preserve Life",
                "id": 36
              }
            ],
            [
              {
                "name": "Blessed Healer",
                "id": 37
              }
            ],
            [
              {
                "name": "Divine Strike",
                "id": 38
              }
            ],
            [
              {
                "name": "Supreme Healing",
                "id": 39
              }
            ]
          ]
        },
        "LIGHT": {
          "title": "Light",
          "restrictions": [
            
          ],
          "details": [
            "Gods of light \u2013\u00a0including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Re-Horakhty \u2013\u00a0promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power oftheir gods' discerning vision, charged with chasing away lies and burning away darkness."
          ],
          "features": [
            [
              {
                "name": "Bonus Cantrip",
                "id": 40
              },
              {
                "name": "Warding Flare",
                "id": 41
              }
            ],
            [
              {
                "name": "Channel Divinity: Radiance of the Dawn",
                "id": 42
              }
            ],
            [
              {
                "name": "Improved Flare",
                "id": 43
              }
            ],
            [
              {
                "name": "Potent Spellcasting",
                "id": 44
              }
            ],
            [
              {
                "name": "Corona of Light",
                "id": 45
              }
            ]
          ]
        },
        "NATURE": {
          "title": "Nature",
          "restrictions": [
            
          ],
          "details": [
            "Gods of nature are as varied as the natural world itself; from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods."
          ],
          "features": [
            [
              {
                "name": "Acolyte of Nature",
                "id": 46
              },
              {
                "name": "Bonus Proficiency",
                "id": 47
              }
            ],
            [
              {
                "name": "Channel Divinity: Charm Animals and Plants",
                "id": 48
              }
            ],
            [
              {
                "name": "Dampen Elements",
                "id": 49
              }
            ],
            [
              {
                "name": "Divine Strike",
                "id": 50
              }
            ],
            [
              {
                "name": "Master of Nature",
                "id": 51
              }
            ]
          ]
        },
        "ORDER": {
          "title": "Order",
          "restrictions": [
            
          ],
          "details": [
            "The Order domain represents discipline, as well as devotion to a society or an institution and strict obedience to the laws governing it. The domain is favored by clerics who use it to benevolently maintain and enforce the law, or exploit law and order for their own personal gain. Gods who grant access to this domain include Bane, Tyr, Majere, Erathis, Pholtus, Wee Jas, Aureon, Maglubiyet, Nuada, Athena, Anubis, Forsetti, and Asmodeus.",
            "The ideal of order is obedience to the law above all else, rather than to a specific individual or the passing influence of emotion or popular rule. Clerics of order are typically concerned with how things are done, rather than whether an action's results are just. Following the law and obeying its edicts is critical, especially when it benefits these clerics and their deities.",
            "Law establishes hierarchies. Those selected by the law to lead must be obeyed. Those who obey must do so to the best of their ability. In this manner, law creates an intricate web of obligations that allows society to forge order and security in a chaotic multiverse."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 52
              },
              {
                "name": "Voice of Authority",
                "id": 53
              }
            ],
            [
              {
                "name": "Channel Divinity: Order's Demand",
                "id": 54
              }
            ],
            [
              {
                "name": "Embodiment of the Law",
                "id": 55
              }
            ],
            [
              {
                "name": "Divine Strike",
                "id": 56
              }
            ],
            [
              {
                "name": "Order's Wrath",
                "id": 57
              }
            ]
          ]
        },
        "PROTECTION_(UA)": {
          "title": "Protection",
          "restrictions": [
            
          ],
          "details": [
            "The protection domain is the purview of deities who charge their followers to shield the weak from the strong. The gods\u2019 faithful dwell in villages and towns on the borderlands, where they help bolster defenses and seek out evils to defeat. These gods believe that a strong shield and a suit of armor is the best defense against evil, second only to a stout mace on hand to respond to any attacks in kind. Deities who grant this domain include Helm, Ilmater, Torm, Tyr, Heironeous, St. Cuthbert, Paladine, Dol Dorn, the Silver Flame, Bahamut, Yondalla, Athena, and Odin."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiency",
                "id": 58
              },
              {
                "name": "Shield of the Faithful",
                "id": 59
              }
            ],
            [
              {
                "name": "Channel Divinity: Radiant Defense",
                "id": 60
              }
            ],
            [
              {
                "name": "Blessed Healer",
                "id": 61
              }
            ],
            [
              {
                "name": "Divine Strike",
                "id": 62
              }
            ],
            [
              {
                "name": "Indomitable Defense",
                "id": 63
              }
            ]
          ]
        },
        "TEMPEST": {
          "title": "Tempest",
          "restrictions": [
            
          ],
          "details": [
            "Gods whose portfolios include the Tempest domain \u2013 including Talos, Umberlee, Kord, Zeboim, the Devourer, Zeus, and Thor \u2013\u00a0govern storms, sea, and, sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 64
              },
              {
                "name": "Wrath of the Storm",
                "id": 65
              }
            ],
            [
              {
                "name": "Channel Divinity: Destructive Wrath",
                "id": 66
              }
            ],
            [
              {
                "name": "Thunderous Strike",
                "id": 67
              }
            ],
            [
              {
                "name": "Divine Strike",
                "id": 68
              }
            ],
            [
              {
                "name": "Stormborn",
                "id": 69
              }
            ]
          ]
        },
        "TRICKERY": {
          "title": "Trickery",
          "restrictions": [
            
          ],
          "details": [
            "Gods of trickery \u2013\u00a0such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki \u2013\u00a0are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They're patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation."
          ],
          "features": [
            [
              {
                "name": "Blessing of the Trickster",
                "id": 70
              }
            ],
            [
              {
                "name": "Channel Divinity: Invoke Duplicity",
                "id": 71
              }
            ],
            [
              {
                "name": "Channel Divinity: Cloak of Shadows",
                "id": 72
              }
            ],
            [
              {
                "name": "Divine Strike",
                "id": 73
              }
            ],
            [
              {
                "name": "Improved Duplicity",
                "id": 74
              }
            ]
          ]
        },
        "WAR": {
          "title": "War",
          "restrictions": [
            
          ],
          "details": [
            "War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as Torm, Heironeous, and Kiri-Jolith) as well as gods of destruction and pillage (such as Erythnul, the Fury, Gruumsh, and Ares) and gods of conquest and domination (such as Bane, Hextor, and Maglubiyet). Other war gods (such as Tempus, Nike, and Nuada) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiency",
                "id": 75
              },
              {
                "name": "War Preist",
                "id": 76
              }
            ],
            [
              {
                "name": "Channel Divinity: Guided Strike",
                "id": 77
              }
            ],
            [
              {
                "name": "Channel Divinity: War God's Blessing",
                "id": 78
              }
            ],
            [
              {
                "name": "Divine Strike",
                "id": 79
              }
            ],
            [
              {
                "name": "Avatar of Battle",
                "id": 80
              }
            ]
          ]
        },
        "BLOOD": {
          "title": "Blood",
          "restrictions": [
            
          ],
          "details": [
            "The Blood domain centers around the understanding of the natural life force within one\u2019s own physical body. The power of blood is the power of sacrifice, the balance of life and death, and the spirit\u2019s anchor within the mortal shell. Clerics of blood seek to tap into the connection between body and soul through divine means, exploit the hidden reserves of will within one\u2019s own vitality, and even manipulate or corrupt the body of others through these secret rites of crimson."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiency",
                "id": 81
              },
              {
                "name": "Bloodletting Focus",
                "id": 82
              }
            ],
            [
              {
                "name": "Channel Divinity: Blood Puppet",
                "id": 83
              }
            ],
            [
              {
                "name": "Channel Divinity: Crimson Bond",
                "id": 84
              }
            ],
            [
              {
                "name": "Sanguine Recall",
                "id": 85
              }
            ],
            [
              {
                "name": "Vascular Corruption Aura",
                "id": 86
              }
            ]
          ]
        },
        "SOLIDARITY": {
          "title": "Solidarity",
          "restrictions": [
            
          ],
          "details": [
            "Solidarity is the first virtue of Amonkhet's society. Oketra is charged with expounding upon this teaching of the God-Pharaoh, instilling in every initiate the virtue of solidarity. She forges each group of children into a crop of acolytes with just one purpose: to be judged worthy of a glorious afterlife. And she instills in each crop the ability to unite in a single action in pursuit of that purpose. She is fond of poetic imagery to communicate her ideals."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiency",
                "id": 87
              },
              {
                "name": "Solidarity's Action",
                "id": 88
              }
            ],
            [
              {
                "name": "Channel Divinity: Preserve Life",
                "id": 89
              }
            ],
            [
              {
                "name": "Channel Divinity: Oketra's Blessing",
                "id": 90
              }
            ],
            [
              {
                "name": "Divine Strike",
                "id": 91
              }
            ],
            [
              {
                "name": "Supreme Healing",
                "id": 92
              }
            ]
          ]
        },
        "STRENGTH": {
          "title": "Strength",
          "restrictions": [
            
          ],
          "details": [
            "Strength is the third virtue of Amonkhet's society. It falls to Rhonas to instill this teaching in those who would enter the afterlife\u2014but to his mind, the words themselves don\u2019t matter. Strength can\u2019t be taught. It must be built through practice and training. Rhonas demonstrates his teachings by his example, rather than by giving his students any kind of academic instruction. He welcomes the people of Naktamun to stand by the Hekma and watch him as he storms into the desert to battle the greatest horrors. He encourages them to observe his indomitable strength, for though they will never equal it, they can aspire to mimicry. He invites them to scrutinize every move and practice what they see."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiency",
                "id": 93
              },
              {
                "name": "Acolyte of Strength",
                "id": 94
              }
            ],
            [
              {
                "name": "Channel Divinity: Feat of Strength",
                "id": 95
              }
            ],
            [
              {
                "name": "Channel Divinity: Rhonas' Blessing",
                "id": 96
              }
            ],
            [
              {
                "name": "Divine Strike",
                "id": 97
              }
            ],
            [
              {
                "name": "Avatar of Battle",
                "id": 98
              }
            ]
          ]
        },
        "AMBITION": {
          "title": "Ambition",
          "restrictions": [
            
          ],
          "details": [
            "Clerics of Ambition act as cunning viziers who subtly plant the seeds that flower into the ambition their gods desire. Through insinuation, they remind acolytes, initiates, and veterans alike that achieving one\u2019s place (in life or the afterlife) at the expense of others is not shameful, but is proof of determination and drive. Nothing is more important than that drive, they suggest \u2013 not the bonds of a family, not friendship or love. Not even devotion to a deity.."
          ],
          "features": [
            [
              {
                "name": "Warding Flare",
                "id": 99
              }
            ],
            [
              {
                "name": "Channel Divinity: Invoke Duplicity",
                "id": 100
              }
            ],
            [
              {
                "name": "Channel Divinity: Cloak of Shadows",
                "id": 101
              }
            ],
            [
              {
                "name": "Potent Spellcasting",
                "id": 102
              }
            ],
            [
              {
                "name": "Improved Duplicity",
                "id": 103
              }
            ]
          ]
        },
        "ZEAL": {
          "title": "Zeal",
          "restrictions": [
            
          ],
          "details": [
            "Zeal is the fifth and final virtue of Amonkhet's society. The God-Pharaoh expects those he welcomes into the afterlife to desire it above all other pleasures and achievements, and for them to show their dedication, passion, and fervor through their actions. Hazoret is charged with cultivating this zeal in the initiates who come under her care, and she has undertaken the task with appropriate enthusiasm. She recognizes, however, that the best way to teach zeal is by demonstrating it."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 104
              },
              {
                "name": "Priest of Zeal",
                "id": 105
              }
            ],
            [
              {
                "name": "Channel Divinity: Consuming Fervor",
                "id": 106
              }
            ],
            [
              {
                "name": "Resounding Strike",
                "id": 107
              }
            ],
            [
              {
                "name": "Divine Strike",
                "id": 108
              }
            ],
            [
              {
                "name": "Blaze of Glory",
                "id": 109
              }
            ]
          ]
        }
      }
    }
  },
  "DRUID": {
    "title": "Druid",
    "route": "druid",
    "image": "druid.svg",
    "details": [
      "Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.",
      "**You must have a Wisdom score of 13 or higher in order to multiclass in or out of this class.**"
    ],
    "tym": [
      "thinks plants have feelings",
      "probably needs a shower",
      "best cook in the group, but puts tofu in every dish"
    ],
    "summary": "A priest of the Old Faith, wielding the dank powers of nature and capable of shapeshifting into animal forms.",
    "recommendedStats": [
      "Wisdom",
      "Constitution"
    ],
    "spellcasting": {
      "details": [
        "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. See Spells Rules for the general rules of spellcasting and the Spells Listing for the druid spell list."
      ],
      "preparing": [
        "The Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell\u2019s level or higher. You regain all expended spell slots when you finish a long rest.",
        "You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.",
        "For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn\u2019t remove it from your list of prepared spells.",
        "You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
      ],
      "ability": [
        "Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one."
      ],
      "mod": "WIS",
      "save": 8,
      "other": [
        {
          "title": "Ritual Casting",
          "text": "You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared."
        },
        {
          "title": "Spellcasting Focus",
          "text": "You can use a druidic focus (see the Adventuring Gear section) as a spellcasting focus for your druid spells."
        }
      ]
    },
    "hitDice": 8,
    equipment: [
      [Item(ARMOR.SHIELDS.WOOD_SHIELD), Item(WEAPONS.SIMPLE.MELEE)],
      [Item(WEAPONS.MARTIAL.MELEE.SCIMITHAR), Item(WEAPONS.SIMPLE.MELEE)],
      [Item(ITEMS.STARTER_PACK.EXPLORER)],
      [[Item(ARMOR.LIGHT.LEATHER), Item(ITEMS.DRUIDIC_FOCUS)]]
    ],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.SHIELDS],
      weapons: [
        WEAPONS.SIMPLE.MELEE.CLUB, WEAPONS.SIMPLE.MELEE.DAGGER, WEAPONS.SIMPLE.RANGED.DART,
        WEAPONS.SIMPLE.MELEE.JAVELIN, WEAPONS.SIMPLE.MELEE.MACE, WEAPONS.SIMPLE.MELEE.QUARTERSTAFF,
        WEAPONS.MARTIAL.MELEE.SCIMITHAR, WEAPONS.SIMPLE.MELEE.SICKLE, WEAPONS.SIMPLE.RANGED.SLING,
        WEAPONS.SIMPLE.MELEE.SPEAR
      ],
      tools: [ITEMS.TOOLS.HERBALISM],
      savingThrows: [STATS.INT, STATS.WIS],
      skills: {
        choose: 2,
        options: [
          SKILLS.ARCANA, 
          SKILLS.ANIMAL_HANDLING, 
          SKILLS.INSIGHT, 
          SKILLS.MEDICINE, 
          SKILLS.NATURE, 
          SKILLS.PERCEPTION, 
          SKILLS.RELIGION, 
          SKILLS.SURVIVAL
        ]
      }
    },
    "asi": [
      2,
      8,
      12,
      16,
      19
    ],
    "levelTable": {
      "title": "The Druid",
      "rows": [
        {
          "key": 2,
          "level": "1st",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Druidic",
              "id": 0
            },
            {
              "name": "Spellcasting",
              "id": 1
            }
          ],
          "cantripsKnown": "2",
          "1st": "2",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 3,
          "level": "2nd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Wild Shape",
              "id": 2
            },
            {
              "name": "Druid Circle",
              "id": 3
            }
          ],
          "cantripsKnown": "2",
          "1st": "3",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 4,
          "level": "3rd",
          "proficiencyBonus": "+2",
          "features": [
            
          ],
          "cantripsKnown": "2",
          "1st": "4",
          "2nd": "2",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 5,
          "level": "4th",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Wild Shape II",
              "id": 2
            }
          ],
          "cantripsKnown": "3",
          "1st": "4",
          "2nd": "3",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 6,
          "level": "5th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "1st": "4",
          "2nd": "3",
          "3rd": "2",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 7,
          "level": "6th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 8,
          "level": "7th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "1",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 9,
          "level": "8th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Wild Shape III",
              "id": 2
            }
          ],
          "cantripsKnown": "3",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "2",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 10,
          "level": "9th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "1",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 11,
          "level": "10th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 12,
          "level": "11th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 13,
          "level": "12th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 14,
          "level": "13th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 15,
          "level": "14th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 16,
          "level": "15th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "-"
        },
        {
          "key": 17,
          "level": "16th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "-"
        },
        {
          "key": 18,
          "level": "17th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 19,
          "level": "18th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Timeless Body",
              "id": 5
            },
            {
              "name": "Beast Spells",
              "id": 6
            }
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 20,
          "level": "19th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "2",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 21,
          "level": "20th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Archdruid",
              "id": 7
            }
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "2",
          "7th": "2",
          "8th": "1",
          "9th": "1"
        }
      ],
      "columns": [
        {
          "title": "Level",
          "dataIndex": "level",
          "key": "level",
          "align": "center"
        },
        {
          "title": "Proficiency Bonus",
          "dataIndex": "proficiencyBonus",
          "key": "proficiencyBonus",
          "align": "center"
        },
        {
          "title": "Features",
          "dataIndex": "features",
          "key": "features",
          "align": "center"
        },
        {
          "title": "Cantrips Known",
          "dataIndex": "cantripsKnown",
          "key": "cantripsKnown",
          "align": "center"
        },
        {
          "title": "Spell Slots per Spell Level",
          "dataIndex": "spellSlotsPerSpellLevel",
          "key": "spellSlotsPerSpellLevel",
          "children": [
            {
              "title": "1st",
              "dataIndex": "1st",
              "key": "1st",
              "align": "center"
            },
            {
              "title": "2nd",
              "dataIndex": "2nd",
              "key": "2nd",
              "align": "center"
            },
            {
              "title": "3rd",
              "dataIndex": "3rd",
              "key": "3rd",
              "align": "center"
            },
            {
              "title": "4th",
              "dataIndex": "4th",
              "key": "4th",
              "align": "center"
            },
            {
              "title": "5th",
              "dataIndex": "5th",
              "key": "5th",
              "align": "center"
            },
            {
              "title": "6th",
              "dataIndex": "6th",
              "key": "6th",
              "align": "center"
            },
            {
              "title": "7th",
              "dataIndex": "7th",
              "key": "7th",
              "align": "center"
            },
            {
              "title": "8th",
              "dataIndex": "8th",
              "key": "8th",
              "align": "center"
            },
            {
              "title": "9th",
              "dataIndex": "9th",
              "key": "9th",
              "align": "center"
            }
          ],
          "align": "center"
        }
      ],
      "featuresIndex": 2
    },
    "features": [
      {
        "title": "Druidic",
        "isSubclassFeature": false,
        "details": [
          "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
        ]
      },
      {
        "title": "Spellcasting",
        "isSubclassFeature": false,
        "details": [
          "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.",
          "**Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.**",
          "At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.",
          "**At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.**",
          "The Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
          "You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your Druid level (minimum of one spell). The spells must be of a level for which you have spell slots.",
          "For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
          "**For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.**",
          "Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.",
          "**Spell save DC** = 8 + your proficiency bonus + your Wisdom modifier",
          "**Spell attack modifier** = your proficiency bonus + your Wisdom modifier",
          "****Spell attack modifier** = your proficiency bonus + your Wisdom modifier**",
          "You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.",
          "**You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.**",
          "You can use a druidic focus as a spellcasting focus for your druid spells."
        ]
      },
      {
        "title": "Wild Shape",
        "isSubclassFeature": false,
        "details": [
          "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
          "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
          {
            "title": "Beast Shapes",
            "rows": [
              {
                "key": 2,
                "level": "2nd",
                "maxCr": "1/4",
                "limitations": "No flying or swimming speed",
                "example": "Wolf"
              },
              {
                "key": 3,
                "level": "4th",
                "maxCr": "1/2",
                "limitations": "No flying speed",
                "example": "Crocodile"
              },
              {
                "key": 4,
                "level": "8th",
                "maxCr": "1",
                "limitations": "",
                "example": "Giant eagle"
              }
            ],
            "columns": [
              {
                "title": "Level",
                "dataIndex": "level",
                "key": "level"
              },
              {
                "title": "Max. CR",
                "dataIndex": "maxCr",
                "key": "maxCr"
              },
              {
                "title": "Limitations",
                "dataIndex": "limitations",
                "key": "limitations"
              },
              {
                "title": "Example",
                "dataIndex": "example",
                "key": "example"
              }
            ]
          },
          "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
          "While you are transformed, the following rules apply:",
          "\u2022 Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
          "\u2022 When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form, For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
          "\u2022 You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as Call Lightning, that you've already cast.",
          "\u2022\u00a0You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
          "\u2022\u00a0You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
        ]
      },
      {
        "title": "Druid Circle",
        "isSubclassFeature": false,
        "details": [
          "At 2nd level, you choose to identify with a circle of druids:\n\u2022\u00a0Dreams\n\u2022\u00a0Moon\n\u2022\u00a0Land\n\u2022\u00a0Shepherd\n\u2022\u00a0Spores\n\u2022\u00a0Twilight (UA)\nYour choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
        ]
      },
      {
        "title": "Ability Score Improvement",
        "isSubclassFeature": false,
        "details": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      {
        "title": "Timeless Body",
        "isSubclassFeature": false,
        "details": [
          "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."
        ]
      },
      {
        "title": "Beast Spells",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components."
        ]
      },
      {
        "title": "Archdruid",
        "isSubclassFeature": false,
        "details": [
          "At 20th level, you can use your Wild Shape an unlimited number of times."
        ]
      },
      {
        "title": "Balm of the Summer Court",
        "isSubclassFeature": true,
        "details": [
          "At 2nd level, you become imbued with the blessings of the Summer Court. You are a font of energy that offers respite from injuries. You have a pool of fey energy represented by a number of d6s equal to your druid level.",
          "As a bonus action, you can choose an ally you can see within 120 feet of you and spend a number of those dice equal to half your druid level or less. Roll the spent dice and add them together. The target regains a number of hit points equal to the total. The target also gains 1 temporary hit point per die spent.",
          "You regain the expended dice when you finish a long rest."
        ]
      },
      {
        "title": "Hearth of Moonlight and Shadow",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, home can be wherever you are. During a short or long rest, you can invoke the shadowy power of the Gloaming Court to help guard your respite. At the start of the rest, you touch a point in space, and an invisible, 30-foot-radius sphere of magic appears, centered on that point. Total cover blocks the sphere.",
          "While within the sphere, you and your allies gain a +5 bonus to Dexterity (Stealth) and Wisdom (Perception) checks, and any light from open flames in the sphere (a campfire, torches, or the like) isn't visible outside it.",
          "The sphere vanishes at the end of the rest or when you leave the sphere."
        ]
      },
      {
        "title": "Hidden Paths",
        "isSubclassFeature": true,
        "details": [
          "Starting at 10th level, you can use the hidden, magical pathways that some fey use to traverse space in a blink of an eye. As a bonus action on your turn, you can teleport up to 60 feet to an unoccupied space you can see. Alternatively, you can use your action to teleport one willing creature you touch up to 30 feet to an unoccupied space you can see.",
          "You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
        ]
      },
      {
        "title": "Walker in Dreams",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, the magic of the Feywild grants you the ability to travel mentally or physically through dreamlands.",
          "When you finish a short rest, you can cast one of the following spells, without expending a spell slot or requiring material components: Dream (with you as the messenger), Scrying, or Teleportation Circle.",
          "This use of Teleportation Circle is special. Rather than opening a portal to a permanent teleportation circle, it opens a portal to the last location where you finished a long rest on your current plane of existence. If you haven't taken a long rest on your current plane, the spell fails but isn't wasted.",
          "Once you use this feature, you can't use it again until you finish a long rest."
        ]
      },
      {
        "title": "Combat Wild Shape",
        "isSubclassFeature": true,
        "details": [
          "When you choose this circle at 2nd level, you gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.",
          "Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended."
        ]
      },
      {
        "title": "Circle Forms",
        "isSubclassFeature": true,
        "details": [
          "The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1. You ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there.",
          "Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down."
        ]
      },
      {
        "title": "Primal Strike",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
        ]
      },
      {
        "title": "Elemental Wild Shape",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental."
        ]
      },
      {
        "title": "Thousand Forms",
        "isSubclassFeature": true,
        "details": [
          "By 14th level, you have learned to use magic to alter your physical form in more subtle ways. You can cast the Alter Self spell at will."
        ]
      },
      {
        "title": "Bonus Cantrip",
        "isSubclassFeature": true,
        "details": [
          "When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice."
        ]
      },
      {
        "title": "Natural Recovery",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest.",
          "For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots."
        ]
      },
      {
        "title": "Circle Spells",
        "isSubclassFeature": true,
        "details": [
          "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land \u2013\u00a0arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark \u2013\u00a0and consult the associated list of spells.",
          "Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
          {
            "title": "Arctic",
            "rows": [
              {
                "key": 2,
                "druidLevel": "3rd",
                "circleSpells": "Hold Person, Spike Growth"
              },
              {
                "key": 3,
                "druidLevel": "5th",
                "circleSpells": "Sleet Storm, Slow"
              },
              {
                "key": 4,
                "druidLevel": "7th",
                "circleSpells": "Freedom of Movement, Ice Storm"
              },
              {
                "key": 5,
                "druidLevel": "9th",
                "circleSpells": "Commune with Nature, Cone of Cold"
              }
            ],
            "columns": [
              {
                "title": "Druid Level",
                "dataIndex": "druidLevel",
                "key": "druidLevel"
              },
              {
                "title": "Circle Spells",
                "dataIndex": "circleSpells",
                "key": "circleSpells"
              }
            ]
          },
          {
            "title": "Coast",
            "rows": [
              {
                "key": 2,
                "druidLevel": "3rd",
                "circleSpells": "Mirror Image, Misty Step"
              },
              {
                "key": 3,
                "druidLevel": "5th",
                "circleSpells": "Water Breathing, Water Walk"
              },
              {
                "key": 4,
                "druidLevel": "7th",
                "circleSpells": "Control Water, Freedom of Movement"
              },
              {
                "key": 5,
                "druidLevel": "9th",
                "circleSpells": "Conjure Elemental, Scrying"
              }
            ],
            "columns": [
              {
                "title": "Druid Level",
                "dataIndex": "druidLevel",
                "key": "druidLevel"
              },
              {
                "title": "Circle Spells",
                "dataIndex": "circleSpells",
                "key": "circleSpells"
              }
            ]
          },
          {
            "title": "Desert",
            "rows": [
              {
                "key": 2,
                "druidLevel": "3rd",
                "circleSpells": "Blur, Silence"
              },
              {
                "key": 3,
                "druidLevel": "5th",
                "circleSpells": "Create Food and Water, Protection from Energy"
              },
              {
                "key": 4,
                "druidLevel": "7th",
                "circleSpells": "Blight, Hallucinatory Terrain"
              },
              {
                "key": 5,
                "druidLevel": "9th",
                "circleSpells": "Insect Plague, Wall of Stone"
              }
            ],
            "columns": [
              {
                "title": "Druid Level",
                "dataIndex": "druidLevel",
                "key": "druidLevel"
              },
              {
                "title": "Circle Spells",
                "dataIndex": "circleSpells",
                "key": "circleSpells"
              }
            ]
          },
          {
            "title": "Forest",
            "rows": [
              {
                "key": 2,
                "druidLevel": "3rd",
                "circleSpells": "Barkskin, Spider Climb"
              },
              {
                "key": 3,
                "druidLevel": "5th",
                "circleSpells": "Call Lightning, Plant Growth"
              },
              {
                "key": 4,
                "druidLevel": "7th",
                "circleSpells": "Divination, Freedom of Movement"
              },
              {
                "key": 5,
                "druidLevel": "9th",
                "circleSpells": "Commune with Nature, Tree Stride"
              }
            ],
            "columns": [
              {
                "title": "Druid Level",
                "dataIndex": "druidLevel",
                "key": "druidLevel"
              },
              {
                "title": "Circle Spells",
                "dataIndex": "circleSpells",
                "key": "circleSpells"
              }
            ]
          },
          {
            "title": "Grassland",
            "rows": [
              {
                "key": 2,
                "druidLevel": "3rd",
                "circleSpells": "Invisibility, Pass Without Trace"
              },
              {
                "key": 3,
                "druidLevel": "5th",
                "circleSpells": "Daylight, Haste"
              },
              {
                "key": 4,
                "druidLevel": "7th",
                "circleSpells": "Divination, Freedom of Movement"
              },
              {
                "key": 5,
                "druidLevel": "9th",
                "circleSpells": "Dream, Insect Plague"
              }
            ],
            "columns": [
              {
                "title": "Druid Level",
                "dataIndex": "druidLevel",
                "key": "druidLevel"
              },
              {
                "title": "Circle Spells",
                "dataIndex": "circleSpells",
                "key": "circleSpells"
              }
            ]
          },
          {
            "title": "Mountain",
            "rows": [
              {
                "key": 2,
                "druidLevel": "3rd",
                "circleSpells": "Spider Climb, Spike Growth"
              },
              {
                "key": 3,
                "druidLevel": "5th",
                "circleSpells": "Lightning Bolt, Meld into Stone"
              },
              {
                "key": 4,
                "druidLevel": "7th",
                "circleSpells": "Stone Shape, Stoneskin"
              },
              {
                "key": 5,
                "druidLevel": "9th",
                "circleSpells": "Passwall, Wall of Stone"
              }
            ],
            "columns": [
              {
                "title": "Druid Level",
                "dataIndex": "druidLevel",
                "key": "druidLevel"
              },
              {
                "title": "Circle Spells",
                "dataIndex": "circleSpells",
                "key": "circleSpells"
              }
            ]
          },
          {
            "title": "Swamp",
            "rows": [
              {
                "key": 2,
                "druidLevel": "3rd",
                "circleSpells": "Darkness, Melf's Acid Arrow"
              },
              {
                "key": 3,
                "druidLevel": "5th",
                "circleSpells": "Water Walk, Stinking Cloud"
              },
              {
                "key": 4,
                "druidLevel": "7th",
                "circleSpells": "Freedom of Movement, Locate Creature"
              },
              {
                "key": 5,
                "druidLevel": "9th",
                "circleSpells": "Insect Plague, Scrying"
              }
            ],
            "columns": [
              {
                "title": "Druid Level",
                "dataIndex": "druidLevel",
                "key": "druidLevel"
              },
              {
                "title": "Circle Spells",
                "dataIndex": "circleSpells",
                "key": "circleSpells"
              }
            ]
          },
          {
            "title": "Underdark",
            "rows": [
              {
                "key": 2,
                "druidLevel": "3rd",
                "circleSpells": "Spider Climb, Web"
              },
              {
                "key": 3,
                "druidLevel": "5th",
                "circleSpells": "Gaseous Form, Stinking Cloud"
              },
              {
                "key": 4,
                "druidLevel": "7th",
                "circleSpells": "Greater Invisibility, Stone Shape"
              },
              {
                "key": 5,
                "druidLevel": "9th",
                "circleSpells": "Cloudkill, Insect Plague"
              }
            ],
            "columns": [
              {
                "title": "Druid Level",
                "dataIndex": "druidLevel",
                "key": "druidLevel"
              },
              {
                "title": "Circle Spells",
                "dataIndex": "circleSpells",
                "key": "circleSpells"
              }
            ]
          }
        ]
      },
      {
        "title": "Land's Stride",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
          "In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the Entangle spell."
        ]
      },
      {
        "title": "Nature's Ward",
        "isSubclassFeature": true,
        "details": [
          "When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease."
        ]
      },
      {
        "title": "Nature's Sanctuary",
        "isSubclassFeature": true,
        "details": [
          "When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.",
          "The creature is aware of this effect before it makes its attack against you."
        ]
      },
      {
        "title": "Speech of the Woods",
        "isSubclassFeature": true,
        "details": [
          "At 2nd level, you gain the ability to converse with beasts and many fey.",
          "You learn to speak, read, and write Sylvan. In addition, beasts can understand your speech, and you gain the ability to decipher their noises and motions. Most beasts lack the intelligence to convey or understand sophisticated concepts, but a friendly beast could relay what it has seen or heard in the recent past. This ability doesn\u2019t grant you any special friendship with beasts, though you can combine this ability with gifts to curry favor with them as you would with any nonplayer character."
        ]
      },
      {
        "title": "Spirit Totem",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you gain the ability to call forth nature spirits and use them to influence the world around you.",
          "As a bonus action, you can magically summon an incorporeal spirit to a point you can see within 60 feet of you. The spirit creates an aura in a 30-foot radius around that point. It counts as neither a creature nor an object, though it has the spectral appearance of the creature it represents. As a bonus action, you can move the spirit up to 60 feet to a point you can see.",
          "The spirit persists for 1 minute. Once you use this feature, you can\u2019t use it again until you finish a short or long rest.",
          "The effect of the spirit\u2019s aura depends on the type of spirit you summon from the options below.",
          "***Bear Spirit.*** The bear spirit grants you and your allies its might and endurance. Each creature of your choice in the aura when the spirit appears gains temporary hit points equal to 5 + your druid level. In addition, you and your allies gain advantage on Strength checks and Strength saving throws while in the aura.",
          "***Hawk Spirit.*** The hawk spirit is a consummate hunter, aiding you and your allies with its keen sight. When a creature makes an attack roll against a target in the spirit\u2019s aura, you can use your reaction to grant advantage to that attack roll. In addition, you and your allies have advantage on Wisdom (Perception) checks while in the aura.",
          "***Unicorn Spirit.*** The unicorn spirit lends its protection to those nearby. You and your allies gain advantage on all ability checks made to detect creatures in the spirit\u2019s aura. In addition, if you cast a spell using a spell slot that restores hit points to any creature inside or outside the aura, each creature of your choice in the aura also regains hit points equal to your druid level."
        ]
      },
      {
        "title": "Mighty Summoner",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, beasts and fey that you conjure are more resilient than normal. Any beast or fey summoned or created by a spell that you cast gains two benefits:",
          "\u2022 The creature appears with more hit points than normal: 2 extra hit points per Hit Die it has.",
          "\u2022 The damage from its natural weapons is considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage."
        ]
      },
      {
        "title": "Guardian Spirit",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 10th level, your Spirit Totem safeguards the beasts and fey that you call forth with your magic. When a beast or fey that you summoned or created with a spell ends its turn in your Spirit Totem aura, that creature regains a number of hit points equal to half your druid level."
        ]
      },
      {
        "title": "Faithful Summons",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, the nature spirits you commune with protect you when you are the most defenseless. If you are reduced to 0 hit points or are incapacitated against your will, you can immediately gain the benefits of Conjure Animals as if it were cast with a 9th-level spell slot. It summons four beasts of your choice that are challenge rating 2 or lower. The conjured beasts appear within 20 feet of you. If they receive no commands from you, they protect you from harm and attack your foes. The spell lasts for 1 hour, requiring no concentration, or until you dismiss it (no action required).",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      },
      {
        "title": "Circle Spells",
        "isSubclassFeature": true,
        "details": [
          "Your symbiotic link to fungus and your ability to tap into the cycle of life and death grants you access to certain spells. At 2nd level, you learn the Chill Touch cantrip. At 3rd, 5th, 7th, and 9th level you gain access to the spells listed for that level in the Circle of Spores Spells table.",
          "Once you gain access to one of these spells, you always have it prepared, and it doesn\u2019t count against the number of spells you can prepare each day. If you gain access to a spell that doesn\u2019t appear on the druid spell list, the spell is nonetheless a druid spell for you.",
          {
            "title": "Circle of Spores Spells",
            "rows": [
              {
                "key": 2,
                "druidLevel": "3rd",
                "circleSpells": "Blindness/Deafness, Gentle Repose"
              },
              {
                "key": 3,
                "druidLevel": "5th",
                "circleSpells": "Animate Dead, Gaseous Form"
              },
              {
                "key": 4,
                "druidLevel": "7th",
                "circleSpells": "Blight, Confusion"
              },
              {
                "key": 5,
                "druidLevel": "9th",
                "circleSpells": "Cloudkill, Contagion"
              }
            ],
            "columns": [
              {
                "title": "Druid Level",
                "dataIndex": "druidLevel",
                "key": "druidLevel"
              },
              {
                "title": "Circle Spells",
                "dataIndex": "circleSpells",
                "key": "circleSpells"
              }
            ]
          }
        ]
      },
      {
        "title": "Halo of Spores",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you are surrounded by invisible, necrotic spores that are harmless until you unleash them on a creature nearby. When a creature you can see moves into a space within 10 feet of you or starts its turn there, you can use your reaction to deal 1d4 necrotic damage to that creature unless it succeeds on a Constitution saving throw against your spell save DC. The necrotic damage increases to 1d6 at 6th level, 1d8 at 10th level, and 1d10 at 14th level."
        ]
      },
      {
        "title": "Symbiotic Entity",
        "isSubclassFeature": true,
        "details": [
          "At 2nd level, you gain the ability to channel magic into your spores. As an action, you can expend a use of your Wild Shape feature to awaken those spores, rather than transforming into a beast form, and you gain 5 temporary hit points for each level you have in this class. While this feature is active, you gain the following benefits:",
          "\u2022\u00a0When you deal your Halo of Spores damage, roll the damage die a second time and add it to the total.\n\u2022 Your melee weapon attacks deal an extra 1d6 poison damage to any target they hit.",
          "These benefits last for 10 minutes, until you lose all these temporary hit points, or until you use your Wild Shape again."
        ]
      },
      {
        "title": "Fungal Infestation",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, your spores gain the ability to infest a humanoid corpse and animate it.",
          "If a beast or humanoid that is Small or Medium dies within 10 feet of you, you can use your reaction to animate it, causing it to stand up immediately with 1 hit point. The creature uses the zombie statistics. It remains animate for 1 hour, after which time it collapses and dies.",
          "In combat, the zombie's turn is immediately after yours. It obeys your mental commands, and the only action it can take is the Attack action, making one melee attack."
        ]
      },
      {
        "title": "Spreading Spores",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you gain the ability to seed an area with deadly spores. As a bonus action while your Symbiotic Entity feature is active, you can hurl spores up to 30 feet away, where they swirl in a 10-foot cube for 1 minute. The spores disappear early if you use this feature again, if you dismiss them as a bonus action, or if your Symbiotic Entity feature is no longer active.",
          "Whenever a creature moves into the cube or starts its turn there, that creature takes your Halo of Spores damage, unless the creature succeeds on a Constitution saving throw against your spell save DC. A creature can take this damage no more than once per turn.",
          "While the cube of spores persists, you can't use your Halo of Spores reaction."
        ]
      },
      {
        "title": "Fungal Body",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, the fungal spores in your body alter you: you can\u2019t be blinded, deafened, frightened, or poisoned, and any critical hit against you counts as a normal hit, unless you are incapacitated."
        ]
      },
      {
        "title": "Harvest's Scythe",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you learn to unravel and harvest the life energy of other creatures. You can augment your spells to drain the life force from creatures. You have a pool of energy represented by a number of d10s equal to your druid level.",
          "When you roll damage for a spell, you can increase that damage by spending dice from the pool. You can spend a number of dice equal to half your druid level or less. Roll the spent dice and add them to the damage as necrotic damage. If you kill one or more hostile creatures with a spell augmented in this way, you or an ally of your choice that you can see within 30 feet of you regains 2 hit points per die spent to increase the spell\u2019s damage, or 5 hit points per die if at least one of the slain creatures was undead.",
          "You regain the expended dice when you finish a long rest."
        ]
      },
      {
        "title": "Speech Beyond the Grave",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to reach beyond death\u2019s veil in search of knowledge. Using this feature, you can cast Speak with Dead without material components, and you understand what the target of this casting says. It can understand your questions, even if you don\u2019t share a language or it is not intelligent enough to speak.",
          "Once you use this feature, you can\u2019t use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Watcher at the Threshold",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you gain resistance to necrotic and radiant damage. In addition, while you aren\u2019t incapacitated, any ally within 30 feet of you has advantage on death saving throws."
        ]
      },
      {
        "title": "Paths of the Dead",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, your mastery of death allows you to tread the paths used by ghosts and other spirits. Using this feature, you can cast Etherealness. Once the spell ends, you can\u2019t cast it with this feature again until you finish a short or long rest."
        ]
      }
    ],
    "subclass": {
      "title": "Druid Circle",
      "prefix": "Circle of ",
      "suffix": null,
      "levels": [
        2,
        6,
        10,
        14
      ],
      "archetypes": {
        "DREAMS": {
          "title": "Dreams",
          "restrictions": [
            
          ],
          "details": [
            "Druids who are members of the Circle of Dreams hail from regions that have strong ties to the Feywild and its dreamlike realms. The druids\u2019 guardianship of the natural world makes for a natural alliance between them and good-aligned fey. These druids seek to fill the world with dreamy wonder. Their magic mends wounds and brings joy to downcast hearts, and the realms they protect are gleaming, fruitful places, where dream and reality blur together and where the weary can find rest."
          ],
          "features": [
            [
              {
                "name": "Balm of the Summer Court",
                "id": 8
              }
            ],
            [
              {
                "name": "Hearth of Moonlight and Shadow",
                "id": 9
              }
            ],
            [
              {
                "name": "Hidden Paths",
                "id": 10
              }
            ],
            [
              {
                "name": "Walker in Dreams",
                "id": 11
              }
            ]
          ]
        },
        "MOON": {
          "title": "Moon",
          "restrictions": [
            
          ],
          "details": [
            "Druids of the Circle of the Moon are fierce guardians of the wilds. Their order gathers under the full moon to share news and trade warnings. They haunt the deepest parts of the wilderness, where they might go for weeks on end before crossing paths with another humanoid creature, let alone another druid.",
            "Changeable as the moon, a druid of this circle might prowl as a great cat one night, soar over the treetops as an eagle the next day, and crash through the undergrowth in bear form to drive off a trespassing monster. The wild is in the druid's blood."
          ],
          "features": [
            [
              {
                "name": "Combat Wild Shape",
                "id": 12
              },
              {
                "name": "Circle Forms",
                "id": 13
              }
            ],
            [
              {
                "name": "Primal Strike",
                "id": 14
              }
            ],
            [
              {
                "name": "Elemental Wild Shape",
                "id": 15
              }
            ],
            [
              {
                "name": "Thousand Forms",
                "id": 16
              }
            ]
          ]
        },
        "LAND": {
          "title": "Land",
          "restrictions": [
            
          ],
          "details": [
            "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites."
          ],
          "features": [
            [
              {
                "name": "Bonus Cantrip",
                "id": 17
              },
              {
                "name": "Natural Recovery",
                "id": 18
              },
              {
                "name": "Circle Spells",
                "id": 19
              }
            ],
            [
              {
                "name": "Land's Stride",
                "id": 20
              }
            ],
            [
              {
                "name": "Nature's Ward",
                "id": 21
              }
            ],
            [
              {
                "name": "Nature's Sanctuary",
                "id": 22
              }
            ]
          ]
        },
        "SHEPHERD": {
          "title": "Shepherd",
          "restrictions": [
            
          ],
          "details": [
            "Druids of the Circle of the Shepherd commune with the spirits of nature, especially the spirits of beasts and the fey, and call to those spirits for aid. These druids recognize that all living things play a role in the natural world, yet they focus on protecting animals and fey creatures that have difficulty defending themselves. Shepherds, as they are known, see such creatures as their charges. They ward off monsters that threaten them, rebuke hunters who kill more prey than necessary, and prevent civilization from encroaching on rare animal habitats and on sites sacred to the fey.",
            "Many of these druids are happiest far from cities and towns, content to spend their days in the company of animals and the fey creatures of the wilds. Members of this circle become adventurers to oppose forces that threaten their charges or to seek knowledge and power that will help them safeguard their charges better. Wherever these druids go, the spirits of the wilderness are with them."
          ],
          "features": [
            [
              {
                "name": "Speech of the Woods",
                "id": 23
              },
              {
                "name": "Spirit Totem",
                "id": 24
              }
            ],
            [
              {
                "name": "Mighty Summoner",
                "id": 25
              }
            ],
            [
              {
                "name": "Guardian Spirit",
                "id": 26
              }
            ],
            [
              {
                "name": "Faithful Summons",
                "id": 27
              }
            ]
          ]
        },
        "SPORES": {
          "title": "Spores",
          "restrictions": [
            
          ],
          "details": [
            "Druids of the Circle of Spores find beauty in decay. They see within mold and other fungi the ability to transform lifeless material into abundant, albeit somewhat strange, life.",
            "These druids believe that life and death are portions of a grand cycle, with one leading to the other and then back again. Death is not the end of life, but instead a change of state that sees life shift into a new form.",
            "Druids of this circle have a complex relationship with the undead. Unlike most other druids, they see nothing inherently wrong with undeath, which they consider to be a companion to life and death. However, these druids believe that the natural cycle is healthiest when each segment of it is vibrant and changing. Undead that seek to replace all life with undeath, or avoid passing to a final rest, violate the cycle and must be thwarted."
          ],
          "features": [
            [
              {
                "name": "Circle Spells",
                "id": 28
              },
              {
                "name": "Halo of Spores",
                "id": 29
              },
              {
                "name": "Symbiotic Entity",
                "id": 30
              }
            ],
            [
              {
                "name": "Fungal Infestation",
                "id": 31
              }
            ],
            [
              {
                "name": "Spreading Spores",
                "id": 32
              }
            ],
            [
              {
                "name": "Fungal Body",
                "id": 33
              }
            ]
          ]
        },
        "TWILIGHT_(UA)": {
          "title": "Twilight",
          "restrictions": [
            
          ],
          "details": [
            "The Circle of Twilight seeks to exterminate undead creatures and preserve the natural cycle of life and death that rules over the cosmos. Their magic allows them to manipulate the boundary between life and death, sending their foes to their final rest while keeping their allies from that fate.",
            "These druids seek out lands that have been tainted by undeath. Such places are grim and foreboding. Once vibrant forests become gloomy, haunted places devoid of animals and filled with plants dying a slow, lingering death. The Circle of Twilight goes to such places to banish undeath and restore life."
          ],
          "features": [
            [
              {
                "name": "Harvest's Scythe",
                "id": 34
              }
            ],
            [
              {
                "name": "Speech Beyond the Grave",
                "id": 35
              }
            ],
            [
              {
                "name": "Watcher at the Threshold",
                "id": 36
              }
            ],
            [
              {
                "name": "Paths of the Dead",
                "id": 37
              }
            ]
          ]
        }
      }
    }
  },
  "FIGHTER": {
    "title": "Fighter",
    "route": "fighter",
    "image": "fighter.svg",
    "details": [
      "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face.",
      "**You must have a Dexterity or Strength score of 13 or higher in order to multiclass in or out of this class.**"
    ],
    "tym": [
      "tough exterior, soft interior",
      "puts ketchup on everything",
      "hoarder, mostly swords though"
    ],
    "summary": "A master of martial combat and the most generic of classes, skilled with a wide variety of weapons and armor.",
    "recommendedStats": [
      "Strength",
      "Dexterity",
      "Constitution"
    ],
    "spellcasting": false,
    "hitDice": 10,
    equipment: [
      [Item(ARMOR.HEAVY.CHAIN_MAIL), [Item(ARMOR.LIGHT.LEATHER), Item(WEAPONS.MARTIAL.RANGED.LONGBOW), Item(ITEMS.AMMUNITION.ARROW, 20)]],
      [[Item(WEAPONS.MARTIAL), Item(ARMOR.SHIELDS.SHIELD)], Item(WEAPONS.MARTIAL, 2)],
      [[Item(WEAPONS.SIMPLE.RANGED.LIGHT_CROSSBOW), Item(ITEMS.AMMUNITION.CROSSBOW_BOLT, 20)], Item(WEAPONS.SIMPLE.MELEE.HANDAXE, 2)],
      [Item(ITEMS.STARTER_PACK.EXPLORER), Item(ITEMS.STARTER_PACK.DUNGEONEER)]
    ],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.SHIELDS],
      weapons: [WEAPONS.SIMPLE, WEAPONS.MARTIAL],
      savingThrows: [STATS.STR, STATS.CON],
      tools: [],
      skills: {
        choose: 2,
        options: [
          SKILLS.ACROBATICS, 
          SKILLS.ANIMAL_HANDLING, 
          SKILLS.ATHLETICS, 
          SKILLS.HISTORY, 
          SKILLS.INSIGHT, 
          SKILLS.INTIMIDATION, 
          SKILLS.PERCEPTION, 
          SKILLS.SURVIVAL
        ]
      }
    },
    "asi": [
      4,
      6,
      8,
      12,
      14,
      16,
      19
    ],
    "levelTable": {
      "title": "The Fighter",
      "rows": [
        {
          "key": 2,
          "level": "1st",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Fighting Style",
              "id": 0
            },
            {
              "name": "Second Wind",
              "id": 1
            }
          ]
        },
        {
          "key": 3,
          "level": "2nd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Action Surge (x1)",
              "id": 2
            }
          ]
        },
        {
          "key": 4,
          "level": "3rd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Martial Archetype",
              "id": 3
            }
          ]
        },
        {
          "key": 5,
          "level": "4th",
          "proficiencyBonus": "+2",
          "features": [
            
          ]
        },
        {
          "key": 6,
          "level": "5th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Extra Attack (x1)",
              "id": 5
            }
          ]
        },
        {
          "key": 7,
          "level": "6th",
          "proficiencyBonus": "+3",
          "features": [
            
          ]
        },
        {
          "key": 8,
          "level": "7th",
          "proficiencyBonus": "+3",
          "features": [
            
          ]
        },
        {
          "key": 9,
          "level": "8th",
          "proficiencyBonus": "+3",
          "features": [
            
          ]
        },
        {
          "key": 10,
          "level": "9th",
          "proficiencyBonus": "+4",
          "features": [
            {
              "name": "Indomitable (x1)",
              "id": 6
            }
          ]
        },
        {
          "key": 11,
          "level": "10th",
          "proficiencyBonus": "+4",
          "features": [
            
          ]
        },
        {
          "key": 12,
          "level": "11th",
          "proficiencyBonus": "+4",
          "features": [
            {
              "name": "Extra Attack (x2)",
              "id": 5
            }
          ]
        },
        {
          "key": 13,
          "level": "12th",
          "proficiencyBonus": "+4",
          "features": [
            
          ]
        },
        {
          "key": 14,
          "level": "13th",
          "proficiencyBonus": "+5",
          "features": [
            {
              "name": "Indomitable (x2)",
              "id": 6
            }
          ]
        },
        {
          "key": 15,
          "level": "14th",
          "proficiencyBonus": "+5",
          "features": [
            
          ]
        },
        {
          "key": 16,
          "level": "15th",
          "proficiencyBonus": "+5",
          "features": [
            
          ]
        },
        {
          "key": 17,
          "level": "16th",
          "proficiencyBonus": "+5",
          "features": [
            
          ]
        },
        {
          "key": 18,
          "level": "17th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Action Surge (x2)",
              "id": 2
            },
            {
              "name": "Indomitable (x3)",
              "id": 6
            }
          ]
        },
        {
          "key": 19,
          "level": "18th",
          "proficiencyBonus": "+6",
          "features": [
            
          ]
        },
        {
          "key": 20,
          "level": "19th",
          "proficiencyBonus": "+6",
          "features": [
            
          ]
        },
        {
          "key": 21,
          "level": "20th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Extra Attack (x3)",
              "id": 5
            }
          ]
        }
      ],
      "columns": [
        {
          "title": "Level",
          "dataIndex": "level",
          "key": "level",
          "align": "center"
        },
        {
          "title": "Proficiency Bonus",
          "dataIndex": "proficiencyBonus",
          "key": "proficiencyBonus",
          "align": "center"
        },
        {
          "title": "Features",
          "dataIndex": "features",
          "key": "features",
          "align": "center"
        }
      ],
      "featuresIndex": 2
    },
    "features": [
      {
        "title": "Fighting Style",
        "isSubclassFeature": false,
        "details": [
          "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
          "**You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.**",
          "You gain a +2 bonus to attack rolls you make with ranged weapons.",
          "**You gain a +2 bonus to attack rolls you make with ranged weapons.**",
          "When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.",
          "**When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.**",
          "While you are wearing armor, you gain a +1 bonus to AC.",
          "**While you are wearing armor, you gain a +1 bonus to AC.**",
          "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
          "**When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.**",
          "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.",
          "**When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.**",
          "As long as you not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to armor class.",
          "**As long as you not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to armor class.**",
          "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
          "**When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.**",
          "As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach.",
          "**As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach.**",
          "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
        ]
      },
      {
        "title": "Second Wind",
        "isSubclassFeature": false,
        "details": [
          "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.",
          "Once you use this feature, you must finish a short or long rest before you can use it again."
        ]
      },
      {
        "title": "Action Surge",
        "isSubclassFeature": false,
        "details": [
          "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
          "Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
        ]
      },
      {
        "title": "Martial Archetype",
        "isSubclassFeature": false,
        "details": [
          "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques:\n\u2022\u00a0Arcane Archer\n\u2022\u00a0Banneret\n\u2022\u00a0Battle Master\n\u2022\u00a0Cavalier\n\u2022\u00a0Champion\n\u2022\u00a0Eldritch Knight\n\u2022\u00a0Knight (UA)\n\u2022\u00a0Monster Hunter (UA)\n\u2022\u00a0Samurai\n\u2022\u00a0Scout (UA)\n\u2022\u00a0Sharpshooter (UA)\nThe archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
        ]
      },
      {
        "title": "Ability Score Improvement",
        "isSubclassFeature": false,
        "details": [
          "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      {
        "title": "Extra Attack",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
          "The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
        ]
      },
      {
        "title": "Indomitable",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.",
          "You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
        ]
      },
      {
        "title": "Arcane Archer Lore",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you learn magical theory or some of the secrets of nature \u2013 typical for practitioners of of this elven martial tradition. You choose to gain proficiency in either the Arcana or the Nature skill, and you choose to learn either the Prestidigitation or Druidcraft cantrip."
        ]
      },
      {
        "title": "Arcane Shot",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you learn to unleash special magical effects with some of your shots. When you gain this feature, you learn two Arcane Shot options of your choice (see \"Arcane Shot Options\" below).",
          "Once per turn when you fire an arrow from a shortbow or longbow as part of the Attack action, you can apply one of your Arcane Shot options to that arrow. You decide to use the option when the arrow hits, unless the option doesn\u2019t involve an attack roll. You have two uses of this ability, and you regain all expended uses of it when you finish a short or long rest.",
          "You gain an additional Arcane Shot option of your choice when you reach certain levels in this class: 7th, 10th, 15th, and 18th level. Each option also improves when you become an 18th-level fighter."
        ]
      },
      {
        "title": "Magic Arrow",
        "isSubclassFeature": true,
        "details": [
          "At 7th level, you gain the ability to infuse arrows with magic. Whenever you fire a nonmagical arrow from a shortbow or longbow, you can make it magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. The magic fades from the arrow immediately after it hits or misses its target."
        ]
      },
      {
        "title": "Curving Shot",
        "isSubclassFeature": true,
        "details": [
          "At 7th level, you learn how to direct an errant arrow toward a new target. When you make an attack roll with a magic arrow and miss, you can use a bonus action to reroll the attack roll against a different target within 60 feet of the original target."
        ]
      },
      {
        "title": "Ever-Ready Shot",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, your magical archery is available whenever battle starts. If you roll initiative and have no uses of Arcane Shot remaining, you regain one use of it."
        ]
      },
      {
        "title": "Arcane Shot Options",
        "isSubclassFeature": true,
        "details": [
          "The Arcane Shot feature lets you choose options for it at certain levels. The options are presented here in alphabetical order. They are all magical effects, and each one is associated with one of the schools of magic.",
          "If an option requires a saving throw, your Arcane Shot save DC equals 8 + your proficiency bonus + your Intelligence modifier.",
          "***Banishing Arrow.*** You use abjuration magic to try to temporarily banish your target to a harmless location in the Feywild. The creature hit by the arrow must also succeed on a Charisma saving throw or be banished. While banished in this way, its speed is 0, and it is incapacitated. At the end of its next turn, the target reappears in the space it vacated or in the nearest unoccupied space if that space is occupied.",
          "After you reach 18th level in this class, a target also takes 2d6 force damage when the arrow hits it.",
          "***Beguiling Arrow.*** Your enchantment magic causes this arrow to temporarily beguile its target. The creature hit by the arrow takes an extra 2d6 psychic damage, and choose one of your allies within 30 feet of the target. The target must succeed on a Wisdom saving throw, or it is charmed by the chosen ally until the start of your next turn. This effect ends early if the chosen ally attacks the charmed target, deals damage to it, or forces it to make a saving throw.",
          "The psychic damage increases to 4d6 when you reach 18th level in this class.",
          "***Bursting Arrow.*** You imbue your arrow with force energy drawn from the school of evocation. The arrow detonates after your attack. Immediately after the arrow hits the creature, the target and all other creatures within 10 feet of it take 2d6 force damage each.",
          "The force damage increases to 4d6 when you reach 18th level in this class.",
          "***Enfeebling Arrow.*** You weave necromantic magic into your arrow. The creature hit by the arrow takes an extra 2d6 necrotic damage. The target must also succeed on a Constitution saving throw, or the damage dealt by its weapon attacks is halved until the start of your next turn.",
          "The necrotic damage increases to 4d6 when you reach 18th level in this class.",
          "***Grasping Arrow.*** When this arrow strikes its target, conjuration magic creates grasping, poisonous brambles, which wrap around the target. The creature hit by the arrow takes an extra 2d6 poison damage, its speed is reduced by 10 feet, and it takes 2d6 slashing damage the first time on each turn it moves 1 foot or more without teleporting. The target or any creature that can reach it can use its action to remove the brambles with a successful Strength (Athletics) check against your Arcane Shot save DC. Otherwise, the brambles last for 1 minute or until you use this option again.",
          "The poison damage and slashing damage both increase to 4d6 when you reach 18th level in this class.",
          "***Piercing Arrow.*** You use transmutation magic to give your arrow an ethereal quality. When you use this option, you don\u2019t make an attack roll for the attack. Instead, the arrow fires forward in a line, which is 1 foot wide and 30 feet long, before disappearing. The arrow passes harmlessly through objects, ignoring cover. Each creature in that line must make a Dexterity saving throw. On a failed save, a creature takes damage as if it were hit by the arrow, plus an extra 1d6 piercing damage. On a successful save, a target takes half as much damage.",
          "The piercing damage increases to 2d6 when you reach 18th level in this class.",
          "***Seeking Arrow.*** Using divination magic, you grant your arrow the ability to seek out your target, allowing the arrow to curve and twist its path in search of its prey. When you use this option, you don\u2019t make an attack roll for the attack. Instead, choose one creature you have seen in the past minute. The arrow flies toward that creature, moving around corners if necessary and ignoring three-quarters cover and half cover. If the target is within the weapon\u2019s range and there is a path large enough for the arrow to travel to the target, the target must make a Dexterity saving throw. On a failed save, it takes damage as if it were hit by the arrow, plus an extra 1d6 force damage, and you learn the target\u2019s current location. On a successful save, the target takes half as much damage, and you don\u2019t learn its location.",
          "The force damage increases to 2d6 when you reach 18th level in this class.",
          "***Shadow Arrow.*** You weave illusion magic into your arrow, causing it to occlude your foe\u2019s vision with shadows. The creature hit by the arrow takes an extra 2d6 psychic damage, and it must succeed on a Wisdom saving throw or be unable to see anything farther than 5 feet away until the start of your next turn.",
          "The psychic damage increases to 4d6 when you reach 18th level in this class."
        ]
      },
      {
        "title": "Rallying Cry",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you learn how to inspire your allies to fight on past their injuries.",
          "When you use your Second Wind feature, you can choose up to three creatures within 60 feet of you that are allied with you. Each one regains hit points equal to your fighter level, provided that the creature can see or hear you."
        ]
      },
      {
        "title": "Royal Envoy",
        "isSubclassFeature": true,
        "details": [
          "Knights of high standing are expected to conduct themselves with grace.",
          "At 7th level, you gain proficiency in the Persuasion skill. If you are already proficient in it, you gain proficiency in one of the following skills of your choice: Animal Handling, Insight, Intimidation, or Performance.",
          "Your proficiency bonus is doubled for any ability check you make that uses Persuasion. You receive this benefit regardless of the skill proficiency you gain from this feature."
        ]
      },
      {
        "title": "Inspiring Surge",
        "isSubclassFeature": true,
        "details": [
          "Starting at 10th level, when you use your Action Surge feature, you can choose one creature within 60 feet of you that is allied with you. That creature can make one melee or ranged weapon attack with its reaction, provided that it can see or hear you.",
          "Starting at 18th level, you can choose two allies within 60 feet of you, rather than one."
        ]
      },
      {
        "title": "Bulwark",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 15th level, you can extend the benefit of your Indomitable feature to an ally. When you decide to use Indomitable to reroll an Intelligence, a Wisdom, or a Charisma saving throw and you aren't incapacitated, you can choose one ally within 60 feet of you that also failed its saving throw against the same effect. If that creature can see or hear you, it can reroll its saving throw and must use the new roll."
        ]
      },
      {
        "title": "Combat Superiority",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.",
          "***Maneuvers.*** You learn three maneuvers of your choice. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack. You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.",
          "***Superiority Dice.*** You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest. You gain another superiority die at 7th level and one more at 15th level.",
          "***Saving Throws.*** Some of your maneuvers require your target to make a saving throw to resist the maneuver's effects. The saving throw DC is calculated as follows:",
          "**Maneuver save DC** = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)"
        ]
      },
      {
        "title": "Student of War",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you gain proficiency with one type of artisan's tools of your choice."
        ]
      },
      {
        "title": "Know Your Enemy",
        "isSubclassFeature": true,
        "details": [
          "Starting at 7th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:",
          "\u2022\u00a0Strength score\n\u2022 Dexterity score\n\u2022 Constitution score\n\u2022 Armor Class\n\u2022 Current hit points\n\u2022 Total class levels, if any\n\u2022 Fighter class levels, if any"
        ]
      },
      {
        "title": "Improved Combat Superiority",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s."
        ]
      },
      {
        "title": "Relentless",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
        ]
      },
      {
        "title": "Bonus Proficiency",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: Animal Handling, History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice."
        ]
      },
      {
        "title": "Born to the Saddle",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, your mastery as a rider becomes apparent. You have advantage on saving throws made to avoid falling off your mount. If you fall off your mount and descend no more than 10 feet, you can land on your feet if you\u2019re not incapacitated.",
          "Finally, mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed."
        ]
      },
      {
        "title": "Unwavering Mark",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you can menace your foes, foiling their attacks and punishing them for harming others. When you hit a creature with a melee weapon attack, you can mark the creature until the end of your next turn. This effect ends early if you are incapacitated or you die, or if someone else marks the creature.",
          "While it is within 5 feet of you, a creature marked by you has disadvantage on any attack roll that doesn't target you.",
          "In addition, if a creature marked by you deals damage to anyone other than you, you can make a special melee weapon attack against the marked creature as a bonus action on your next turn. You have advantage on the attack roll, and if it hits, the attack's weapon deals extra damage to the target equal to half your fighter level.",
          "Regardless of the number of creatures you mark, you can make this special attack a number of times equal to your Strength modifier (a minimum of once), and you regain all expended uses of it when you finish a long rest."
        ]
      },
      {
        "title": "Warding Maneuver",
        "isSubclassFeature": true,
        "details": [
          "At 7th level, you learn to fend off strikes directed at you, your mount, or other creatures nearby. If you or a creature you can see within 5 feet of you is hit by an attack, you can roll 1d8 as a reaction if you're wielding a melee weapon or a shield. Roll the die, and add the number rolled to the target's AC against that attack. If the attack still hits, the target has resistance against the attack's damage.",
          "You can use this feature a number of times equal to your Constitution modifier (a minimum of once), and you regain all expended uses of it when you finish a long rest."
        ]
      },
      {
        "title": "Hold the Line",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you become a master of locking down your enemies. Creatures provoke an opportunity attack from you when they move 5 feet or more while within your reach, and if you hit a creature with an opportunity attack, the target's speed is reduced to 0 until the end of the current turn."
        ]
      },
      {
        "title": "Ferocious Charger",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, you can run down your foes, whether you're mounted or not. If you move at least 10 feet in a straight line right before attacking a creature and you hit it with the attack, that target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature only once on each of your turns."
        ]
      },
      {
        "title": "Vigilant Defender",
        "isSubclassFeature": true,
        "details": [
          "Starting at 18th level, you respond to danger with extraordinary vigilance. In combat, you get a special reaction that you can take once on every creature's turn, except your turn. You can use this special reaction only to make an opportunity attack, and you can't use it on the same turn that you take your normal reaction."
        ]
      },
      {
        "title": "Improved Critical",
        "isSubclassFeature": true,
        "details": [
          "Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20."
        ]
      },
      {
        "title": "Remarkable Athlete",
        "isSubclassFeature": true,
        "details": [
          "Starting at 7th level, you can add half your proficiency bonus (rounded up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus.",
          "In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier."
        ]
      },
      {
        "title": "Additional Fighting Style",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you can choose a second option from the Fighting Style class feature."
        ]
      },
      {
        "title": "Superior Critical",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20."
        ]
      },
      {
        "title": "Survivor",
        "isSubclassFeature": true,
        "details": [
          "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points."
        ]
      },
      {
        "title": "Spellcasting",
        "isSubclassFeature": true,
        "details": [
          "When you reach 3rd level, you augment your martial prowess with the ability to cast spells.",
          "Cantrips",
          "You learn two cantrips of your choice from the wizard spell list. You learn an additional wizard cantrip of your choice at 10th level.",
          "Spell Slots",
          "The Eldritch Knight Spellcasting table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
          "For example, if you know the 1st-level spell Shield and have a 1st-level and a 2nd-level spell slot available, you can cast Shield using either slot.",
          "Spells Known of 1st Level and Higher",
          "You know three 1st-level wizard spells of your choice, two of which you must choose from the abjuration and evocation spells on the wizard spell list.",
          "The Spells Known column of the Eldritch Knight Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an abjuration or evocation spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.",
          "The spells you learn at 8th, 14th, and 20th level can come from any school of magic.",
          "Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an abjuration or evocation spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic.",
          "Spellcasting Ability",
          "Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
          "**Spell save DC** = 8 + your proficiency bonus + your Intelligence modifier",
          "**Spell attack modifier** = your proficiency bonus + your Intelligence modifier"
        ]
      },
      {
        "title": "Weapon Bond",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond.",
          "Once you have bonded a weapon to yourself, you can't be disarmed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand.",
          "You can have up to two bonded weapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two."
        ]
      },
      {
        "title": "War Magic",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 7th level, when you use your action to cast a cantrip, you can make one weapon attack as a bonus action."
        ]
      },
      {
        "title": "Eldritch Strike",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you learn how to make your weapon strikes undercut a creature's resistance to your spells. When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn."
        ]
      },
      {
        "title": "Arcane Charge",
        "isSubclassFeature": true,
        "details": [
          "At 15th level, you gain the ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action."
        ]
      },
      {
        "title": "Improved War Magic",
        "isSubclassFeature": true,
        "details": [
          "Starting at 18th level, when you use your action to cast a spell, you can make one weapon attack as a bonus action."
        ]
      },
      {
        "title": "Born to the Saddle",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed. In addition, you have advantage on saving throws made to avoid falling off your mount. If you fall off it, you can automatically land on your feet if you aren\u2019t incapacitated and you fall less than 10 feet."
        ]
      },
      {
        "title": "Implacable Mark",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you excel at foiling attacks and protecting your allies by menacing your foes. When you hit a creature with a melee weapon attack, the target is marked by you until the end of your next turn. A creature ignores this effect if the creature can\u2019t be frightened.",
          "The marked target has disadvantage on any attack roll against a creature other than you or someone else who marked it.",
          "If a target marked by you is within 5 feet of you on its turn and it moves at least 1 foot or makes an attack that suffers disadvantage from this feature, you can make one melee weapon attack against it using your reaction. This attack roll has advantage, and if it hits, the attack\u2019s weapon deals extra damage to the target equal to your fighter level.",
          "You can make this special attack even if you have already expended your reaction this round, but not if you have already used your reaction this turn. You can make this attack three times, and you regain all expended uses of it when you finish a short or long rest."
        ]
      },
      {
        "title": "Noble Cavalry",
        "isSubclassFeature": true,
        "details": [
          "At 7th level, you gain proficiency in two of the following skills of your choice: Animal Handling, History, Insight, Persuasion, or Religion. Alternatively, you learn one language of your choice."
        ]
      },
      {
        "title": "Hold the Line",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you master the ability to harass and slow your enemies. As a reaction when a creature moves at least 1 foot within 5 feet of you, you can make one melee weapon attack against that creature. If you hit, the attack\u2019s weapon deals extra damage to the target equal to half your fighter level, and the target\u2019s speed is reduced to 0 until the end of this turn."
        ]
      },
      {
        "title": "Rapid Strike",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, you learn to trade accuracy for swift strikes. If you have advantage on a weapon attack against a target on your turn, you can forgo that advantage to immediately make an additional weapon attack against the same target as a bonus action."
        ]
      },
      {
        "title": "Defender's Blade",
        "isSubclassFeature": true,
        "details": [
          "At 18th level, you respond to danger with extraordinary vigilance. You can use your reaction for an opportunity attack even if you have already expended your reaction this round, but not if you have already used your reaction this turn. In addition, you gain a +1 bonus to AC while wearing heavy armor."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you gain proficiency in two of the following skills of your choice: Arcana, History, Insight, Investigation, Nature, or Perception. You can gain proficiency with a tool of your choice in place of one skill choice."
        ]
      },
      {
        "title": "Combat Superiority",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you gain a set of abilities that are fueled by special dice called superiority dice.",
          "***Superiority Dice.*** You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest.",
          "You gain another superiority die at 7th level and one more at 15th level.",
          "***Using Superiority Dice.*** You can expend superiority dice to gain a number of different benefits:",
          "\u2022\u00a0**Precision Attack.** When you make a weapon attack against a creature, you can expend one superiority die to add it to the attack roll. You can use this ability before or after making the attack roll, but before any of the effects of the attack are applied.",
          "\u2022 **Sharpened Attack.** When you damage a creature with a weapon attack, you can expend one superiority die to add it to the damage roll. You can use this ability after rolling damage. If the attack causes the target to make a Constitution saving throw to maintain concentration, it has disadvantage on that save.",
          "\u2022 **Sharpened Senses.** When you make a Wisdom (Perception) check to detect a hidden creature or object, or a Wisdom (Insight) check to determine if someone is lying to you, you can expend one superiority die to add it to the roll. You can use this feature after seeing the total but before learning if you succeeded or failed.",
          "\u2022 **Superior Willpower.** When you make an Intelligence, a Wisdom, or a Charisma saving throw, you can expend one superiority die to add it to the roll. You can use this feature only before you learn if the save succeeded or failed."
        ]
      },
      {
        "title": "Hunter's Mysticism",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, your study of the supernatural gives you a limited ability to use magic. You can cast Detect Magic as a ritual. You can cast Protection from Evil and Good, but you cannot cast it again with this feature until you finish a long rest. Wisdom is your spellcasting ability for these spells.",
          "In addition, you gain the ability to speak one of the following languages of your choice: Abyssal, Celestial, or Infernal."
        ]
      },
      {
        "title": "Monster Slayer",
        "isSubclassFeature": true,
        "details": [
          "At 7th level, whenever you expend superiority dice to add to a damage roll, you can expend up to two dice instead of just one, adding both to the roll. Both dice are expended as normal. If the target of your attack is an aberration, a fey, a fiend, or an undead, you deal maximum damage with both dice, instead of rolling them."
        ]
      },
      {
        "title": "Improved Combat Superiority",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s."
        ]
      },
      {
        "title": "Relentless",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain one superiority die."
        ]
      },
      {
        "title": "Bonus Proficiency",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice."
        ]
      },
      {
        "title": "Fighting Spirit",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, your intensity in battle can shield you and help you strike true. As a bonus action on your turn, you can give yourself advantage on all weapon attack rolls until the end of the current turn. When you do so, you also gain 5 temporary hit points. The number of hit points increases when you reach certain levels in this class, increasing to 10 at 10th level and 15 at 15th level.",
          "You can use this feature three times. You regain all expended uses of it when you finish a long rest."
        ]
      },
      {
        "title": "Elegant Courtier",
        "isSubclassFeature": true,
        "details": [
          "Starting at 7th level, your discipline and attention to detail allow you to excel in social situations. Whenever you make a Charisma (Persuasion) check, you gain a bonus to the check equal to your Wisdom modifier.",
          "Your self-control also causes you to gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence of Charisma saving throws (your choice)."
        ]
      },
      {
        "title": "Tireless Spirit",
        "isSubclassFeature": true,
        "details": [
          "Starting at 10th level, when you roll initiative and have no uses of Fighting Spirit remaining, you regain one use."
        ]
      },
      {
        "title": "Rapid Strike",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, you learn to trade accuracy for swift strikes. If you take the Attack action on your turn and have advantage on an attack roll against against one of the targets, you can forgo the advantage for that roll to make an additional weapon attack against that target, as part of the same action. You can do so no more than once per turn."
        ]
      },
      {
        "title": "Strength Before Death",
        "isSubclassFeature": true,
        "details": [
          "Starting at 18th level, your fighting spirit can delay the grasp of death. If you take damage that reduces you to 0 hit points, you can use your reaction to delay falling unconscious, and you can immediately take an extra turn. While you have 0 hit points during that extra turn, taking damage causes death saving throw failures as normal, and three death saving throw failures can still kill you. When the extra turn ends, you fall unconscious if you still have 0 hit points.",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you gain proficiency in three of the following skills of your choice: Acrobatics, Athletics, Investigation, Medicine, Nature, Perception, Stealth, or Survival. You can choose to gain proficiency with thieves\u2019 tools in place of one skill choice."
        ]
      },
      {
        "title": "Combat Superiority",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you gain a set of abilities that are fueled by special dice called superiority dice.",
          "***Superiority Dice.*** You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a long or short rest.",
          "You gain another superiority die at 7th level and one more at 15th level.",
          "***Using Superiority Dice.*** You can expend superiority dice to gain a number of different benefits:",
          "\u2022\u00a0**Survival Superiority.** When you make a check that allows you to apply your proficiency in Athletics, Nature, Perception, Stealth, or Survival, you can expend one superiority die to bolster the check. Add half the number rolled on the superiority die (rounding up) to your check. You apply this bonus after making the check but before learning if it was successful.",
          "\u2022 **Precision Attack.** When you make a weapon attack against a creature, you can expend one superiority die to add it to the attack roll. You can use this ability before or after making the attack roll, but before any of the effects of the attack are applied.",
          "\u2022\u00a0**Scout\u2019s Evasion.** If you are hit by an attack while wearing light or medium armor, you can expend one superiority die as a reaction, adding the number rolled to your AC. If the attack still hits, you take half damage from it."
        ]
      },
      {
        "title": "Natural Explorer",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you are a master of navigating the natural world, and you react with swift and decisive action when attacked. This grants you the following benefits:",
          "\u2022 You ignore difficult terrain.",
          "\u2022 You have advantage on initiative rolls.",
          "\u2022 On your first turn during combat, you have advantage on attack rolls against creatures that have not yet acted.",
          "In addition, you are skilled at navigating the wilderness. You gain the following benefits when traveling for an hour or more:",
          "\u2022 Difficult terrain doesn\u2019t slow your group\u2019s travel.",
          "\u2022 Your group can\u2019t become lost except by magical means.",
          "\u2022 Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
          "\u2022 If you are traveling alone, you can move stealthily at a normal pace.",
          "\u2022 When you forage, you find twice as much food as you normally would.",
          "\u2022 While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area."
        ]
      },
      {
        "title": "Improved Combat Superiority",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s."
        ]
      },
      {
        "title": "Relentless",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
        ]
      },
      {
        "title": "Steady Aim",
        "isSubclassFeature": true,
        "details": [
          "Beginning when you choose this archetype at 3rd level, your aim becomes deadly. As a bonus action on your turn, you can take careful aim at a creature you can see that is within range of a ranged weapon you\u2019re wielding. Until the end of this turn, your ranged attacks with that weapon gain two benefits against the target:",
          "\u2022 The attacks ignore half and three-quarters cover.",
          "\u2022 On each hit, the weapon deals additional damage to the target equal to 2 + half your fighter level.",
          "You can use this feature three times. You regain all expended uses of it when you finish a short or long rest."
        ]
      },
      {
        "title": "Careful Eyes",
        "isSubclassFeature": true,
        "details": [
          "Starting at 7th level, you excel at picking out hidden enemies and other threats. You can take the Search action as a bonus action.",
          "You also gain proficiency in the Perception, Investigation, or Survival skill (choose one)."
        ]
      },
      {
        "title": "Close-Quarters Shooting",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you learn to handle yourself in close combat. Making a ranged attack roll while within 5 feet of an enemy doesn\u2019t impose disadvantage on your roll.",
          "In addition, if you hit a creature within 5 feet of you with a ranged attack on your turn, that creature can\u2019t take reactions until the end of this turn."
        ]
      },
      {
        "title": "Rapid Strike",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, you learn to trade accuracy for swift strikes. If you have advantage on a weapon attack against a target on your turn, you can forgo that advantage to immediately make an additional weapon attack against the same target as a bonus action."
        ]
      },
      {
        "title": "Snap Shot",
        "isSubclassFeature": true,
        "details": [
          "Starting at 18th level, you are ever ready to spring into action. If you take the Attack action on your first turn of a combat, you can make one additional ranged weapon attack as part of that action."
        ]
      }
    ],
    "subclass": {
      "title": "Martial Archetype",
      "prefix": null,
      "suffix": null,
      "levels": [
        3,
        7,
        10,
        15,
        18
      ],
      "archetypes": {
        "ARCANE_ARCHER": {
          "title": "Arcane Archer",
          "restrictions": [
            
          ],
          "details": [
            "An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects. Arcane Archers are some of their most elite warriors among the elves. They stand watch over the fringes of elven domains, keeping a keen eye out for trespassers and using magic-infused arrows to defeat monsters and invaders before they can reach elven settlements. Over the centuries, the methods of these elf archers have been learned by members of other races who can also balance arcane aptitude with archery."
          ],
          "features": [
            [
              {
                "name": "Arcane Archer Lore",
                "id": 7
              },
              {
                "name": "Arcane Shot",
                "id": 8
              }
            ],
            [
              {
                "name": "Magic Arrow",
                "id": 9
              }
            ],
            [
              {
                "name": "Curving Shot",
                "id": 10
              }
            ],
            [
              {
                "name": "Ever-Ready Shot",
                "id": 11
              }
            ],
            [
              {
                "name": "Arcane Shot Options",
                "id": 12
              }
            ]
          ]
        },
        "BANNERET": {
          "title": "Banneret",
          "restrictions": [
            
          ],
          "details": [
            "A banneret is a knight who inspires greatness in others by committing brave deeds in battle. The mere presence of one in a hamlet is enough to cause some orcs and bandits to seek easier prey. A lone banneret is a skilled warrior, but a banneret leading a band of allies can transform even the most poorly equipped militia into a ferocious war band.",
            "A banneret prefers to lead through deeds, not words. As a banneret spearheads an attack, their actions can awaken reserves of courage and conviction in allies that they never suspected they had."
          ],
          "features": [
            [
              {
                "name": "Rallying Cry",
                "id": 13
              }
            ],
            [
              {
                "name": "Royal Envoy",
                "id": 14
              }
            ],
            [
              {
                "name": "Inspiring Surge",
                "id": 15
              }
            ],
            [
              {
                "name": "Bulwark",
                "id": 16
              }
            ]
          ]
        },
        "BATTLE_MASTER": {
          "title": "Battle Master",
          "restrictions": [
            
          ],
          "details": [
            "Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. To a Battle Master, combat is an academic field, sometimes including subjects beyond battle such as weaponsmithing and calligraphy. Not every fighter absorbs the lessons of history, theory, and artistry that are reflected in the Battle Master archetype, but those who do are well-rounded fighters of great skill and knowledge."
          ],
          "features": [
            [
              {
                "name": "Combat Superiority",
                "id": 17
              }
            ],
            [
              {
                "name": "Student of War",
                "id": 18
              }
            ],
            [
              {
                "name": "Know Your Enemy",
                "id": 19
              }
            ],
            [
              {
                "name": "Improved Combat Superiority",
                "id": 20
              }
            ],
            [
              {
                "name": "Relentless",
                "id": 21
              }
            ]
          ]
        },
        "CAVALIER": {
          "title": "Cavalier",
          "restrictions": [
            
          ],
          "details": [
            "The archetypal cavalier excels at mounted combat. Usually born among the nobility and raised at court, a cavalier is equally at home leading a cavalry charge or exchanging repartee at a state dinner. Cavaliers also learn how to guard those in their charge from harm, often serving as the protectors of their superiors and of the weak. Compelled to right wrongs or earn prestige, many of these fighters leave their lives of comfort to embark on glorious adventure."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiency",
                "id": 22
              },
              {
                "name": "Born to the Saddle",
                "id": 23
              },
              {
                "name": "Unwavering Mark",
                "id": 24
              }
            ],
            [
              {
                "name": "Warding Maneuver",
                "id": 25
              }
            ],
            [
              {
                "name": "Hold the Line",
                "id": 26
              }
            ],
            [
              {
                "name": "Ferocious Charger",
                "id": 27
              }
            ],
            [
              {
                "name": "Vigilant Defender",
                "id": 28
              }
            ]
          ]
        },
        "CHAMPION": {
          "title": "Champion",
          "restrictions": [
            
          ],
          "details": [
            "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows."
          ],
          "features": [
            [
              {
                "name": "Improved Critical",
                "id": 29
              }
            ],
            [
              {
                "name": "Remarkable Athlete",
                "id": 30
              }
            ],
            [
              {
                "name": "Additional Fighting Style",
                "id": 31
              }
            ],
            [
              {
                "name": "Superior Critical",
                "id": 32
              }
            ],
            [
              {
                "name": "Survivor",
                "id": 33
              }
            ]
          ]
        },
        "ELDRITCH_KNIGHT": {
          "title": "Eldritch Knight",
          "restrictions": [
            
          ],
          "details": [
            "The archetypal Eldritch Knight combines the martial mastery common to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards. They focus their study on two of the eight schools of magic: abjuration and evocation. Abjuration spells grant an Eldritch Knight additional protection in battle, and evocation spells deal damage to many foes at once, extending the fighter's reach in combat. These knights learn a comparatively small number of spells, committing them to memory instead of keeping them in a spellbook."
          ],
          "features": [
            [
              {
                "name": "Spellcasting",
                "id": 34
              },
              {
                "name": "Weapon Bond",
                "id": 35
              }
            ],
            [
              {
                "name": "War Magic",
                "id": 36
              }
            ],
            [
              {
                "name": "Eldritch Strike",
                "id": 37
              }
            ],
            [
              {
                "name": "Arcane Charge",
                "id": 38
              }
            ],
            [
              {
                "name": "Improved War Magic",
                "id": 39
              }
            ]
          ]
        },
        "KNIGHT_(UA)": {
          "title": "Knight",
          "restrictions": [
            
          ],
          "details": [
            "The Knight is a colossus on the battlefield who can shrug off attacks and protect allies from harm. Knights fight from the saddle when they can, and in combat they are expected to seek out and lock down the mightiest of the enemy\u2019s forces. On adventures, they are the armored bulwark that strives to keep the rest of the party safe."
          ],
          "features": [
            [
              {
                "name": "Born to the Saddle",
                "id": 40
              },
              {
                "name": "Implacable Mark",
                "id": 41
              }
            ],
            [
              {
                "name": "Noble Cavalry",
                "id": 42
              }
            ],
            [
              {
                "name": "Hold the Line",
                "id": 43
              }
            ],
            [
              {
                "name": "Rapid Strike",
                "id": 44
              }
            ],
            [
              {
                "name": "Defender's Blade",
                "id": 45
              }
            ]
          ]
        },
        "MONSTER_HUNTER_(UA)": {
          "title": "Monster Hunter",
          "restrictions": [
            
          ],
          "details": [
            "As an archetypal Monster Hunter, you are an expert at defeating supernatural threats. Typically mentored by an older, experienced Monster Hunter, you learn to overcome a variety of unnatural defenses and attacks, including those of undead, lycanthropes, and other creatures of horror."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 46
              },
              {
                "name": "Combat Superiority",
                "id": 47
              }
            ],
            [
              {
                "name": "Hunter's Mysticism",
                "id": 48
              }
            ],
            [
              {
                "name": "Monster Slayer",
                "id": 49
              }
            ],
            [
              {
                "name": "Improved Combat Superiority",
                "id": 50
              }
            ],
            [
              {
                "name": "Relentless",
                "id": 51
              }
            ]
          ]
        },
        "SAMURAI": {
          "title": "Samurai",
          "restrictions": [
            
          ],
          "details": [
            "The Samurai is a fighter who draws on an implacable fighting spirit to overcome enemies. A samurai\u2019s resolve is nearly unbreakable, and the enemies in a samurai\u2019s path have two choices: yield or die fighting."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiency",
                "id": 52
              },
              {
                "name": "Fighting Spirit",
                "id": 53
              }
            ],
            [
              {
                "name": "Elegant Courtier",
                "id": 54
              }
            ],
            [
              {
                "name": "Tireless Spirit",
                "id": 55
              }
            ],
            [
              {
                "name": "Rapid Strike",
                "id": 56
              }
            ],
            [
              {
                "name": "Strength Before Death",
                "id": 57
              }
            ]
          ]
        },
        "SCOUT_(UA)": {
          "title": "Scout",
          "restrictions": [
            
          ],
          "details": [
            "The archetypal scout excels at finding safe passage through dangerous regions. Scouts usually favor light armor and ranged weapons, but they are comfortable using heavier gear when faced with intense fighting."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 58
              }
            ],
            [
              {
                "name": "Combat Superiority",
                "id": 59
              }
            ],
            [
              {
                "name": "Natural Explorer",
                "id": 60
              }
            ],
            [
              {
                "name": "Improved Combat Superiority",
                "id": 61
              }
            ],
            [
              {
                "name": "Relentless",
                "id": 62
              }
            ]
          ]
        },
        "SHARPSHOOTER_(UA)": {
          "title": "Sharpshooter",
          "restrictions": [
            
          ],
          "details": [
            "The Sharpshooter is a master of ranged combat. An excellent sniper and eagle-eyed scout, this fighter is a perilous foe who can defeat an entire war band so long as they are kept at range."
          ],
          "features": [
            [
              {
                "name": "Steady Aim",
                "id": 63
              }
            ],
            [
              {
                "name": "Careful Eyes",
                "id": 64
              }
            ],
            [
              {
                "name": "Close-Quarters Shooting",
                "id": 65
              }
            ],
            [
              {
                "name": "Rapid Strike",
                "id": 66
              }
            ],
            [
              {
                "name": "Snap Shot",
                "id": 67
              }
            ]
          ]
        }
      }
    }
  },
  "MONK": {
    "title": "Monk",
    "route": "monk",
    "image": "monk.svg",
    "details": [
      "Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.",
      "**You must have a Dexterity score and a Wisdom score of 13 or higher in order to multiclass in or out of this class.**"
    ],
    "tym": [
      "drinks tea instead of coffee",
      "has yoga poses memorized",
      "their therapist knows a lot about you"
    ],
    "summary": "A ninja master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.",
    "recommendedStats": [
      "Dexterity",
      "Wisdom"
    ],
    "spellcasting": false,
    "hitDice": 8,
    equipment: [
      [Item(WEAPONS.MARTIAL.MELEE.SHORTSWORD), Item(WEAPONS.SIMPLE)],
      [Item(ITEMS.STARTER_PACK.DUNGEONEER), Item(ITEMS.STARTER_PACK.EXPLORER)],
      [Item(ITEMS.AMMUNITION.BLOWGUN_DART, 10)]
    ],
    proficiencies: {
      armor: [],
      weapons: [WEAPONS.SIMPLE, WEAPONS.MARTIAL.MELEE.SHORTSWORD],
      savingThrows: [STATS.STR, STATS.DEX],
      tools: [],
      skills: {
        choose: 2,
        options: [
          SKILLS.ACROBATICS, 
          SKILLS.ATHLETICS, 
          SKILLS.HISTORY, 
          SKILLS.INSIGHT, 
          SKILLS.RELIGION, 
          SKILLS.STEALTH
        ]
      }
    },
    "asi": [
      4,
      8,
      12,
      16,
      19
    ],
    "levelTable": {
      "title": "The Monk",
      "rows": [
        {
          "key": 2,
          "level": "1st",
          "proficiencyBonus": "+2",
          "martialArts": "1d4",
          "kiPoints": "\u2013",
          "unarmoredMovement": "\u2013\u00a0",
          "features": [
            {
              "name": "Unarmored Defense",
              "id": 0
            },
            {
              "name": "Martial Arts",
              "id": 1
            }
          ]
        },
        {
          "key": 3,
          "level": "2nd",
          "proficiencyBonus": "+2",
          "martialArts": "1d4",
          "kiPoints": "2",
          "unarmoredMovement": "+10 ft.",
          "features": [
            {
              "name": "Ki",
              "id": 2
            },
            {
              "name": "Unarmored Movement",
              "id": 3
            }
          ]
        },
        {
          "key": 4,
          "level": "3rd",
          "proficiencyBonus": "+2",
          "martialArts": "1d4",
          "kiPoints": "3",
          "unarmoredMovement": "+10 ft.",
          "features": [
            {
              "name": "Monastic Tradition",
              "id": 4
            },
            {
              "name": "Deflect Missiles",
              "id": 5
            }
          ]
        },
        {
          "key": 5,
          "level": "4th",
          "proficiencyBonus": "+2",
          "martialArts": "1d4",
          "kiPoints": "4",
          "unarmoredMovement": "+10 ft.",
          "features": [
            {
              "name": "Slow Fall",
              "id": 7
            }
          ]
        },
        {
          "key": 6,
          "level": "5th",
          "proficiencyBonus": "+3",
          "martialArts": "1d6",
          "kiPoints": "5",
          "unarmoredMovement": "+10 ft.",
          "features": [
            {
              "name": "Extra Attack",
              "id": 8
            },
            {
              "name": "Stunning Strike",
              "id": 9
            }
          ]
        },
        {
          "key": 7,
          "level": "6th",
          "proficiencyBonus": "+3",
          "martialArts": "1d6",
          "kiPoints": "6",
          "unarmoredMovement": "+15 ft.",
          "features": [
            {
              "name": "Ki-Empowered Strikes",
              "id": 10
            }
          ]
        },
        {
          "key": 8,
          "level": "7th",
          "proficiencyBonus": "+3",
          "martialArts": "1d6",
          "kiPoints": "7",
          "unarmoredMovement": "+15 ft.",
          "features": [
            {
              "name": "Evasion",
              "id": 11
            },
            {
              "name": "Stillness of Mind",
              "id": 12
            }
          ]
        },
        {
          "key": 9,
          "level": "8th",
          "proficiencyBonus": "+3",
          "martialArts": "1d6",
          "kiPoints": "8",
          "unarmoredMovement": "+15 ft.",
          "features": [
            
          ]
        },
        {
          "key": 10,
          "level": "9th",
          "proficiencyBonus": "+4",
          "martialArts": "1d6",
          "kiPoints": "9",
          "unarmoredMovement": "+15 ft.",
          "features": [
            {
              "name": "Unarmored Movement II",
              "id": 3
            }
          ]
        },
        {
          "key": 11,
          "level": "10th",
          "proficiencyBonus": "+4",
          "martialArts": "1d6",
          "kiPoints": "10",
          "unarmoredMovement": "+20 ft.",
          "features": [
            {
              "name": "Purity of Body",
              "id": 13
            }
          ]
        },
        {
          "key": 12,
          "level": "11th",
          "proficiencyBonus": "+4",
          "martialArts": "1d8",
          "kiPoints": "11",
          "unarmoredMovement": "+20 ft.",
          "features": [
            
          ]
        },
        {
          "key": 13,
          "level": "12th",
          "proficiencyBonus": "+4",
          "martialArts": "1d8",
          "kiPoints": "12",
          "unarmoredMovement": "+20 ft.",
          "features": [
            
          ]
        },
        {
          "key": 14,
          "level": "13th",
          "proficiencyBonus": "+5",
          "martialArts": "1d8",
          "kiPoints": "13",
          "unarmoredMovement": "+20 ft.",
          "features": [
            {
              "name": "Tongue of the Sun and Moon",
              "id": 14
            }
          ]
        },
        {
          "key": 15,
          "level": "14th",
          "proficiencyBonus": "+5",
          "martialArts": "1d8",
          "kiPoints": "14",
          "unarmoredMovement": "+25 ft.",
          "features": [
            {
              "name": "Diamond Soul",
              "id": 15
            }
          ]
        },
        {
          "key": 16,
          "level": "15th",
          "proficiencyBonus": "+5",
          "martialArts": "1d8",
          "kiPoints": "15",
          "unarmoredMovement": "+25 ft.",
          "features": [
            {
              "name": "Timeless Body",
              "id": 16
            }
          ]
        },
        {
          "key": 17,
          "level": "16th",
          "proficiencyBonus": "+5",
          "martialArts": "1d8",
          "kiPoints": "16",
          "unarmoredMovement": "+25 ft.",
          "features": [
            
          ]
        },
        {
          "key": 18,
          "level": "17th",
          "proficiencyBonus": "+6",
          "martialArts": "1d10",
          "kiPoints": "17",
          "unarmoredMovement": "+25 ft.",
          "features": [
            
          ]
        },
        {
          "key": 19,
          "level": "18th",
          "proficiencyBonus": "+6",
          "martialArts": "1d10",
          "kiPoints": "18",
          "unarmoredMovement": "+30 ft.",
          "features": [
            {
              "name": "Empty Body",
              "id": 17
            }
          ]
        },
        {
          "key": 20,
          "level": "19th",
          "proficiencyBonus": "+6",
          "martialArts": "1d10",
          "kiPoints": "19",
          "unarmoredMovement": "+30 ft.",
          "features": [
            
          ]
        },
        {
          "key": 21,
          "level": "20th",
          "proficiencyBonus": "+6",
          "martialArts": "1d10",
          "kiPoints": "20",
          "unarmoredMovement": "+30 ft.",
          "features": [
            {
              "name": "Perfect Self",
              "id": 18
            }
          ]
        }
      ],
      "columns": [
        {
          "title": "Level",
          "dataIndex": "level",
          "key": "level",
          "align": "center"
        },
        {
          "title": "Proficiency Bonus",
          "dataIndex": "proficiencyBonus",
          "key": "proficiencyBonus",
          "align": "center"
        },
        {
          "title": "Martial Arts",
          "dataIndex": "martialArts",
          "key": "martialArts",
          "align": "center"
        },
        {
          "title": "Ki Points",
          "dataIndex": "kiPoints",
          "key": "kiPoints",
          "align": "center"
        },
        {
          "title": "Unarmored Movement",
          "dataIndex": "unarmoredMovement",
          "key": "unarmoredMovement",
          "align": "center"
        },
        {
          "title": "Features",
          "dataIndex": "features",
          "key": "features",
          "align": "center"
        }
      ],
      "featuresIndex": 5
    },
    "features": [
      {
        "title": "Unarmored Defense",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
        ]
      },
      {
        "title": "Martial Arts",
        "isSubclassFeature": false,
        "details": [
          "At 1st level, your practice of martial arts gives you master of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.",
          "You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:",
          "\u2022\u00a0You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.",
          "\u2022\u00a0You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.",
          "\u2022\u00a0When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.",
          "Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon on the Weapons page."
        ]
      },
      {
        "title": "Ki",
        "isSubclassFeature": false,
        "details": [
          "Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.",
          "You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.",
          "When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.",
          "Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:",
          "**Ki save DC** = 8 + your proficiency bonus + your Wisdom modifier",
          "****Ki save DC** = 8 + your proficiency bonus + your Wisdom modifier**",
          "Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.",
          "**Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.**",
          "You can spend 1 ki point to take the Dodge action as a bonus action on your turn.",
          "**You can spend 1 ki point to take the Dodge action as a bonus action on your turn.**",
          "You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
        ]
      },
      {
        "title": "Unarmored Movement",
        "isSubclassFeature": false,
        "details": [
          "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.",
          "At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
        ]
      },
      {
        "title": "Monastic Tradition",
        "isSubclassFeature": false,
        "details": [
          "When you reach 3rd level, you commit yourself to a monastic tradition:\n\u2022\u00a0Drunken Master\n\u2022\u00a0Four Elements\n\u2022\u00a0Kensei\n\u2022\u00a0Long Death\n\u2022\u00a0Open Hand\n\u2022\u00a0Shadow\n\u2022\u00a0Soul Knife (UA)\n\u2022\u00a0Sun Soul\n\u2022\u00a0Tranquility (UA)\nThe following subclass is unofficial homebrew created by WOTC affiliated DM, Matthew Mercer:\n\u2022\u00a0Cobalt Soul\nYour tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
        ]
      },
      {
        "title": "Deflect Missiles",
        "isSubclassFeature": false,
        "details": [
          "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.",
          "If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with a range of 20/60 using the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack."
        ]
      },
      {
        "title": "Ability Score Improvement",
        "isSubclassFeature": false,
        "details": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      {
        "title": "Slow Fall",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
        ]
      },
      {
        "title": "Extra Attack",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      {
        "title": "Stunning Strike",
        "isSubclassFeature": false,
        "details": [
          "Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn."
        ]
      },
      {
        "title": "Ki-Empowered Strikes",
        "isSubclassFeature": false,
        "details": [
          "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
        ]
      },
      {
        "title": "Evasion",
        "isSubclassFeature": false,
        "details": [
          "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
        ]
      },
      {
        "title": "Stillness of Mind",
        "isSubclassFeature": false,
        "details": [
          "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened."
        ]
      },
      {
        "title": "Purity of Body",
        "isSubclassFeature": false,
        "details": [
          "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison."
        ]
      },
      {
        "title": "Tongue of the Sun and Moon",
        "isSubclassFeature": false,
        "details": [
          "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
        ]
      },
      {
        "title": "Diamond Soul",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.",
          "Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
        ]
      },
      {
        "title": "Timeless Body",
        "isSubclassFeature": false,
        "details": [
          "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water."
        ]
      },
      {
        "title": "Empty Body",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.",
          "Additionally, you can spend 8 ki points to cast the Astral Projection spell, without needing material components. When you do so, you can't take any other creatures with you."
        ]
      },
      {
        "title": "Perfect Self",
        "isSubclassFeature": false,
        "details": [
          "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "When you choose this tradition at 3rd level, you gain proficiency in the Performance skill if you don't already have it. Your martial arts technique mixes combat training with the precision of a dancer and the antics of a jester. You also gain proficiency with brewer's supplies if you don't already have it."
        ]
      },
      {
        "title": "Drunken Technique",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you learn how to twist and turn quickly as part of your Flurry of Blows. Whenever you use Flurry of Blows, you gain the benefit of the Disengage action, and your walking speed increases by 10 feet until the end of the current turn."
        ]
      },
      {
        "title": "Tipsy Sway",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can move in sudden, swaying ways. You gain the following benefits.",
          "**Leap to Your Feet.** When you're prone, you can stand up by spending 5 feet of movement, rather than half your speed.",
          "**Redirect Attack.** When a creature misses you with a melee attack roll, you can spend 1 ki point as a reaction to cause that attack to hit one creature of your choice, other than the attacker, that you can see within 5 feet of you."
        ]
      },
      {
        "title": "Drunkard's Luck",
        "isSubclassFeature": true,
        "details": [
          "Starting at 11th level, you always seem to get a lucky bounce at the right moment. When you make an ability check, an attack roll, or a saving throw and have disadvantage, you can spend 2 ki points to cancel the disadvantage for that roll."
        ]
      },
      {
        "title": "Intoxicated Frenzy",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you gain the ability to make an overwhelming number of attacks against a group of enemies. When you use your Flurry of Blows, you can make up to three additional attacks with it (up to a total of five Flurry of Blows attacks), provided that each Flurry of Blows attack targets a different creature this turn."
        ]
      },
      {
        "title": "Disciple of the Elements",
        "isSubclassFeature": true,
        "details": [
          "When you choose this tradition at 3rd level, you learn magical disciplines that harness the power of the four elements. A discipline requires you to spend ki points each time you use it.",
          "You know the Elemental Attunement discipline and one other elemental discipline of your choice. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level.",
          "Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.",
          "***Casting Elemental Spells.*** Some elemental disciplines allow you to cast spells. See chapter 10 for the general rules of spellcasting. To cast one of these spells, you use its casting time and other rules, but you don't need to provide material components for it.",
          "Once you reach 5th level in this class, you can spend additional ki points to increase the level of an elemental discipline spell that you cast, provided that the spell has an enhanced effect at a higher level, as Burning Hands does. The spell's level increases by 1 for each additional ki point you spend. For example, if you are a 5th-level monk and use Sweeping Cinder Strike to cast Burning Hands, you can spend 3 ki points to cast it as a 2nd-level spell (the discipline's base cost of 2 ki points plus 1).",
          "The maximum number of ki points you can spend to cast a spell in this way (including its base ki point cost and any additional ki points you spend to increase its level) is determined by your monk level, as shown in the Spells and Ki Points table.",
          {
            "title": "Spells and Ki Points",
            "rows": [
              {
                "key": 2,
                "monkLevels": "5th-8th",
                "maximumKiPointsForASpell": "3"
              },
              {
                "key": 3,
                "monkLevels": "9th-12th",
                "maximumKiPointsForASpell": "4"
              },
              {
                "key": 4,
                "monkLevels": "13th-16th",
                "maximumKiPointsForASpell": "5"
              },
              {
                "key": 5,
                "monkLevels": "17th-20th",
                "maximumKiPointsForASpell": "6"
              }
            ],
            "columns": [
              {
                "title": "Monk Levels",
                "dataIndex": "monkLevels",
                "key": "monkLevels"
              },
              {
                "title": "Maximum Ki Points for a Spell",
                "dataIndex": "maximumKiPointsForASpell",
                "key": "maximumKiPointsForASpell"
              }
            ]
          }
        ]
      },
      {
        "title": "Path of the Kensei",
        "isSubclassFeature": true,
        "details": [
          "When you choose this tradition at 3rd level, your special martial arts training leads you to master the use of certain weapons. This path also includes instruction in the deft strokes of calligraphy or painting. You gain the following benefits:",
          "\u2022 **Kensei Weapons.** Choose two types of weapons to be your kensei weapons: one melee weapon and one ranged weapon. Each of these weapons can be any simple or martial weapon that lacks the heavy and special properties. The longbow is also a valid choice. You gain proficiency with these weapons if you don't already have it. Weapons of the chosen types are monk weapons for you. Many of this tradition's features work only with your kensei weapons. When you reach 6th, 11th, and 17th level in this class, you can choose another type of weapon \u2013\u00a0either melee or ranged \u2013\u00a0to be a kensei weapon for you, following the criteria above.",
          "\u2022 **Agile Parry.** If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren\u2019t incapacitated.",
          "\u2022 **Kensei's Shot.** You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra 1d4 damage of the weapon\u2019s type. You retain this benefit until the end of the current turn.",
          "\u2022\u00a0**Way of the Brush.** You gain proficiency with your choice of calligrapher's supplies or painter's supplies."
        ]
      },
      {
        "title": "One with the Blade",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you extend your ki into your kensei weapons, granting you the following benefits.",
          "***Magic Kensei Weapons.*** Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
          "***Deft Strike.*** When you hit a target with a kensei weapon, you can spend 1 ki point to cause the weapon to deal extra damage to the target equal to your Martial Arts die. You can use this feature only once on each of your turns."
        ]
      },
      {
        "title": "Sharpen the Blade",
        "isSubclassFeature": true,
        "details": [
          "At 11th level, you gain the ability to augment your weapons further with your ki. As a bonus action, you can expend up to 3 ki points to grant one kensei weapon you touch a bonus to attack and damage rolls when you attack with it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute or until you use this feature again. This feature has no effect on a magic weapon that already has a bonus to attack and damage rolls."
        ]
      },
      {
        "title": "Unerring Accuracy",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, your mastery of weapons grants you extraordinary accuracy. If you miss with an attack roll using a monk weapon on your turn, you can reroll it. You can use this feature only once on each of your turns."
        ]
      },
      {
        "title": "Touch of Death",
        "isSubclassFeature": true,
        "details": [
          "Starting when you choose this tradition at 3rd level, your study of death allows you to extract vitality from another creature as it nears its demise. When you reduce a creature within 5 feet of you to 0 hit points, you gain temporary hit points equal to your Wisdom modifier + your monk level (minimum of 1 temporary hit point)."
        ]
      },
      {
        "title": "Hour of Reaping",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to unsettle or terrify those around you as an action, for your soul has been touched by the shadow of death. When you take this action, each creature within 30 feet of you that can see you must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn."
        ]
      },
      {
        "title": "Mastery of Death",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 11th level, you use your familiarity with death to escape its grasp. When you are reduced to 0 hit points, you can expend 1 ki point (no action required) to have 1 hit point instead."
        ]
      },
      {
        "title": "Touch of the Long Death",
        "isSubclassFeature": true,
        "details": [
          "Starting at 17th level, your touch can channel the energy of death into a creature. As an action, you touch one creature within 5 feet of you, and you expend 1 to 10 ki points. The target must make a Constitution saving throw, and it takes 2d10 necrotic damage per ki point spent on a failed save, or half as much damage on a successful one."
        ]
      },
      {
        "title": "Open Hand Technique",
        "isSubclassFeature": true,
        "details": [
          "Starting when you choose this tradition at 3rd level, you can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:",
          "\u2022\u00a0It must succeed on a Dexterity saving throw or be knocked prone.",
          "\u2022 It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.",
          "\u2022\u00a0It can't take reactions until the end of your next turn."
        ]
      },
      {
        "title": "Wholeness of Body",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again."
        ]
      },
      {
        "title": "Tranquility",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a Sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus."
        ]
      },
      {
        "title": "Quivering Palm",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.",
          "You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action."
        ]
      },
      {
        "title": "Shadow Arts",
        "isSubclassFeature": true,
        "details": [
          "Starting when you choose this tradition at 3rd level, you can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast Darkness, Darkvision, Pass without Trace, or Silence, without providing material components. Additionally, you gain the Minor Illusion cantrip if you don't already know it."
        ]
      },
      {
        "title": "Shadow Step",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn."
        ]
      },
      {
        "title": "Cloak of Shadows",
        "isSubclassFeature": true,
        "details": [
          "By 11th level, you have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light."
        ]
      },
      {
        "title": "Opportunist",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature."
        ]
      },
      {
        "title": "Soul Knives",
        "isSubclassFeature": true,
        "details": [
          "Starting when you choose this tradition at 3rd level, you can use your psionic energy to manifest blades that disrupt your foes\u2019 minds.",
          "Your unarmed strikes deal your choice of psychic, piercing, slashing, or bludgeoning damage each time you hit.",
          "In addition, you can use a bonus action to increase the reach of your unarmed strikes by 30 feet until the end of your turn."
        ]
      },
      {
        "title": "Psychic Slash",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, when you channel ki into your attacks you augment your soul knives to inflict devastating psionic blows.",
          "Whenever you hit a creature with one of the attacks granted by your Flurry of Blows and that attack inflicts psychic damage, you can impose one of the following effects on the target:",
          "***Life Drain.*** You gain temporary hit points equal to half the damage your attack deals.",
          "***Invoke Terror.*** The target must succeed on a Wisdom saving throw or become frightened of you until the end of your next turn.",
          "***Invoke Wrath.*** The target suffers disadvantage on all attack rolls against targets other than you until the end of your next turn.",
          "***Astral Slide.*** You teleport the target up to 10 feet to a destination you can see.",
          "***Synaptic Overload.*** The target gains vulnerability to psychic damage until the end of your next turn."
        ]
      },
      {
        "title": "Aura Sight",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to perceive the auras of other creatures.",
          "As an action, select a creature that you can see. That creature makes a Wisdom saving throw, though it has no knowledge that you forced it to attempt this saving throw. On a failed save, you learn if the creature shares any aspects of its alignment with you, its current hit points, and its current attitude and intentions toward you or one other creature, object, or location of your choice. In addition, for the next 24 hours or until you use this ability again, you can use an action to determine the creature\u2019s distance and direction from you.",
          "If a creature succeeds on its saving throw against this ability, you cannot use this ability against that creature again until you complete a long rest."
        ]
      },
      {
        "title": "Spectral Blades",
        "isSubclassFeature": true,
        "details": [
          "At 11th level, you can cause your blades to phase through physical objects and defenses.",
          "Once during your turn, you can choose to forego one unarmed strike in place of forcing a creature within the reach of that attack to make a Dexterity saving throw against your ki save DC. On a failed saving throw, the creature takes psychic damage equal to that of your unarmed strike, or half that damage if it succeeds."
        ]
      },
      {
        "title": "Psychic Form",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you can transform your physical body into the same psychic energy that comprises your soul knives. As a bonus action, you assume a psychic form, which grants the following benefits:",
          "\u2022 You have resistance to all damage.\n\u2022 You have a fly speed of 30 feet.\n\u2022 You can move through other creatures and objects as if they were difficult terrain. You take 5 force damage if you end your turn inside an object.",
          "This benefit lasts for 1 minute. You cannot use it again until you complete a long rest."
        ]
      },
      {
        "title": "Radiant Sun Bolt",
        "isSubclassFeature": true,
        "details": [
          "Starting when you choose this tradition at 3rd level, you can hurl searing bolts of magical radiance.",
          "You gain a new attack option that you can use with the Attack action. This special attack is a ranged spell attack with a range of 30 feet. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. Its damage is radiant, and its damage die is a d4. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.",
          "When you take the Attack action on your turn and use this special attack as part of it, you can spend 1 ki point to make the special attack twice as a bonus action.",
          "When you gain the Extra Attack feature, this special attack can be used for any of the attacks you make as part of the Attack action."
        ]
      },
      {
        "title": "Searing Arc Strike",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to channel your ki into searing waves of energy. Immediately after you take the Attack action on your turn, you can spend 2 ki points to cast the Burning Hands spell as a bonus action.",
          "You can spend additional ki points to cast Burning Hands as a higher level spell. Each additional ki point you spend increases the spell's level by 1. The maximum number of ki points (2 plus any additional points) that you can spend on the spell equals half your monk level."
        ]
      },
      {
        "title": "Searing Sunburst",
        "isSubclassFeature": true,
        "details": [
          "At 11th level, you gain the ability to create an orb of light that erupts into a devastating explosion. As an action, you magically create an orb and hurl it at a point you choose within 150 feet, where it erupts into a sphere of radiant light for a brief but deadly instant.",
          "Each creature in that 20-foot-radius sphere must succeed on a Constitution saving throw or take 2d6 radiant damage. A creature doesn't need to make the save if the creature is behind total cover that is opaque.",
          "You can increase the sphere's damage by spending ki points. Each point you spend, up to a maximum of 3, increases the damage by 2d6."
        ]
      },
      {
        "title": "Sun Shield",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you become wreathed in a luminous, magical aura. You shed bright light in a 30-foot radius and dim light for an additional 30 feet. You can extinguish or restore the light as a bonus action.",
          "If a creature hits you with a melee attack while this light shines, you can use your reaction to deal radiant damage to the creature. The radiant damage equals 5 + your Wisdom modifier."
        ]
      },
      {
        "title": "Path of Tranquility",
        "isSubclassFeature": true,
        "details": [
          "When you choose this tradition at 3rd level, you can become an island of calm in even the most chaotic of situations. With this feature, you can cast the Sanctuary spell on yourself, no material component required, and it lasts up to 8 hours. Its saving throw DC equals 8 + your proficiency bonus + your Wisdom modifier. A creature that succeeds on the save is immune to this effect for 1 hour.",
          "Once you cast the spell in this way, you can\u2019t do so again for 1 minute."
        ]
      },
      {
        "title": "Healing Hands",
        "isSubclassFeature": true,
        "details": [
          "Your mystical touch can heal wounds. Starting at 3rd level, you have a pool of magical healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your monk level \u00d7 10.",
          "As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in the pool.",
          "Instead of healing the creature, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Healing Hands, expending hit points separately for each one.",
          "When you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature.",
          "This feature has no effect on undead and constructs."
        ]
      },
      {
        "title": "Emissary of Peace",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to diffuse violent situations. Whenever you make a Charisma check to calm violent emotions or to counsel peace, you have advantage on the roll. You must make this entreaty in good faith; it doesn\u2019t apply if proficiency in the Deception or Intimidation skill applies to your check.",
          "You also gain proficiency in the Performance or Persuasion skill (choose one)."
        ]
      },
      {
        "title": "Douse the Flames of War",
        "isSubclassFeature": true,
        "details": [
          "At 11th level, you gain the ability to temporarily extinguish a creature\u2019s violent impulses. As an action, you can touch a creature, and it must make a Wisdom saving throw with a DC equal to 8 + your proficiency bonus + your Wisdom modifier. The target automatically succeeds if it\u2019s missing any of its hit points. If the target fails the save, it can\u2019t attack for 1 minute. During that time, it also can\u2019t cast spells that deal damage or that force someone to make a saving throw.",
          "This effect ends if the target is attacked, takes damage, or is forced to make a saving throw or if the target witnesses any of those things happening to its allies."
        ]
      },
      {
        "title": "Anger of a Gentle Soul",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you gain the ability to visit vengeance on someone who fells others. If you see a creature reduce another creature to 0 hit points, you can use your reaction to grant yourself a bonus to all damage rolls against the aggressor until the end of your next turn. The bonus equals your monk level.",
          "Once you use this ability, you can\u2019t use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Mystical Erudition",
        "isSubclassFeature": true,
        "details": [
          "Upon choosing this tradition at 3rd level, you\u2019ve undergone extensive training with the Cobalt Soul, teaching you extensively in history or lore from the monastery\u2019s collected volumes. You learn one language of your choice, and you choose one skill from the following list to gain proficiency in: Arcana, History, Nature, and Religion.",
          "You gain an additional language and an additional skill proficiency from the above list at 11th and 17th level. If you already have proficiency in one of the listed skills at 11th or 17th level, you can instead choose to double your proficiency bonus for any ability check you make that uses the chosen proficiency."
        ]
      },
      {
        "title": "Extract Aspects",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 3rd level when choosing this tradition, you can strike multiple pressure points to extract crucial information about your foe. Whenever you hit a single creature with one of the attacks granted by your Flurry of Blows, you learn the creature's Damage Vulnerabilities, Damage Resistances, Damage Immunities, and Condition Immunities. Once you use this feature, you must finish a short or long rest before you can use it again.",
          "Upon reaching 6th level, you can use this feature twice between rests, and beginning at 17th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
        ]
      },
      {
        "title": "Extort Truth",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you can hit a series of hidden nerves on a creature with precision, temporarily causing them to be unable to mask their true thoughts and intent. If you manage to hit a single creature with two or more attacks in one round, you can spend 1 ki point to force them to make a Charisma saving throw. You can choose to have these attacks deal no damage. On a failed save, the creature is unable to speak a deliberate lie for 1 minute and all Charisma checks directed at the creature are made with advantage for the duration. You know if they succeeded or failed on their saving throw.",
          "An affected creature is aware of the effect and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive in its answers as long as the effect lasts."
        ]
      },
      {
        "title": "Preternatural Counter",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 6th level, your quick mind and study of your foe allows you to use their failure to your advantage. If a creature misses you with an attack, you can immediately use your reaction to make a melee attack against that creature."
        ]
      },
      {
        "title": "Mind of Mercury",
        "isSubclassFeature": true,
        "details": [
          "Starting at 11th level, you\u2019ve honed your awareness and reflexes through mental aptitude and pattern recognition. You can take a number of additional reactions each round equal to your Intelligence modifier (minimum of 1), at the cost of 1 ki point per reaction beyond the first. You can only use one reaction per trigger.",
          "In addition, whenever you make an Intelligence (Investigation) check, you can spend 1 ki point to gain advantage on the roll."
        ]
      },
      {
        "title": "Debilitating Barrage",
        "isSubclassFeature": true,
        "details": [
          "Upon reaching 17th level, you\u2019ve gained the knowledge to temporarily lower a creature\u2019s fortitude by striking a series of pressure points. Whenever you hit a single creature with three or more attacks in one round, you can spend 3 ki points to cause the creature to suffer a vulnerability to a damage type of your choice for 1 minute, or until after they take any damage of that type.",
          "Creatures with resistance or immunity to the chosen damage type do not suffer vulnerability. Instead, their resistance to the chosen damage type is lost for the duration, or their immunity is reduced to resistance for the duration."
        ]
      }
    ],
    "subclass": {
      "title": "Monastic Tradition",
      "prefix": "Way of the ",
      "suffix": null,
      "levels": [
        3,
        6,
        11,
        17
      ],
      "archetypes": {
        "DRUNKEN_MASTER": {
          "title": "Drunken Master",
          "restrictions": [
            
          ],
          "details": [
            "The Way of the Drunken Master teaches its students to move with the jerky, unpredictable movements of a drunkard. A drunken master sways, tottering on unsteady feet, to present what seems like an incompetent combatant who proves frustrating to engage. The drunken master\u2019s erratic stumbles conceal a carefully executed dance of blocks, parries, advances, attacks, and retreats.",
            "A drunken master often enjoys playing the fool to bring gladness to the despondent or to demonstrate humility to the arrogant, but when battle is joined, the drunken master can be a maddening, masterful foe."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 19
              },
              {
                "name": "Drunken Technique",
                "id": 20
              }
            ],
            [
              {
                "name": "Tipsy Sway",
                "id": 21
              }
            ],
            [
              {
                "name": "Drunkard's Luck",
                "id": 22
              }
            ],
            [
              {
                "name": "Intoxicated Frenzy",
                "id": 23
              }
            ]
          ]
        },
        "FOUR_ELEMENTS": {
          "title": "Four Elements",
          "restrictions": [
            
          ],
          "details": [
            "You follow a monastic tradition that teaches you to harness the elements. When you focus your ki, you can align yourself with the forces of creation and bend the four elements to your will, using them as an extension of your body. Some members of this tradition dedicate themselves to a single element, but others weave the elements together.",
            "Many monks of this tradition tattoo their bodies with representations of their ki powers, commonly imagined as coiling dragons, but also as phoenixes, fish, plants, mountains, and cresting waves."
          ],
          "features": [
            [
              {
                "name": "Disciple of the Elements",
                "id": 24
              }
            ]
          ]
        },
        "KENSEI": {
          "title": "Kensei",
          "restrictions": [
            
          ],
          "details": [
            "Monks of the Way of Kensei train relentlessly with their weapons, to the point that the weapon becomes like an extension of the body. Founded on a mastery of sword fighting, the tradition has expanded to include many different weapons.",
            "A kensei sees a weapon much in the same way a calligrapher or a painter regards a pen or brush. Whatever the weapon, the kensei views it as a tool used to express the beauty and precision of the martial arts. That such mastery makes a kensei a peerless warrior is but a side effect of intense devotion, practice, and study."
          ],
          "features": [
            [
              {
                "name": "Path of the Kensei",
                "id": 25
              }
            ],
            [
              {
                "name": "One with the Blade",
                "id": 26
              }
            ],
            [
              {
                "name": "Sharpen the Blade",
                "id": 27
              }
            ],
            [
              {
                "name": "Unerring Accuracy",
                "id": 28
              }
            ]
          ]
        },
        "LONG_DEATH": {
          "title": "Long Death",
          "restrictions": [
            
          ],
          "details": [
            "Monks of the Way of the Long Death are obsessed with the meaning and mechanics of dying. They capture creatures and prepare elaborate experiments to capture, record, and understand the moments of their demise. They then use this knowledge to guide their understanding of martial arts, yielding a deadly fighting style."
          ],
          "features": [
            [
              {
                "name": "Touch of Death",
                "id": 29
              }
            ],
            [
              {
                "name": "Hour of Reaping",
                "id": 30
              }
            ],
            [
              {
                "name": "Mastery of Death",
                "id": 31
              }
            ],
            [
              {
                "name": "Touch of the Long Death",
                "id": 32
              }
            ]
          ]
        },
        "OPEN_HAND": {
          "title": "Open Hand",
          "restrictions": [
            
          ],
          "details": [
            "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm."
          ],
          "features": [
            [
              {
                "name": "Open Hand Technique",
                "id": 33
              }
            ],
            [
              {
                "name": "Wholeness of Body",
                "id": 34
              }
            ],
            [
              {
                "name": "Tranquility",
                "id": 35
              }
            ],
            [
              {
                "name": "Quivering Palm",
                "id": 36
              }
            ]
          ]
        },
        "SHADOW": {
          "title": "Shadow",
          "restrictions": [
            
          ],
          "details": [
            "Monks of the Way of Shadow follow a tradition that values stealth and subterfuge. These monks might be called ninjas or shadowdancers, and they serve as spies and assassins. Sometimes the members of a ninja monastery are family members, forming a clan sworn to secrecy about their arts and missions. Other monasteries are more like thieves' guilds, hiring out their services to nobles, rich merchants, or anyone else who can pay their fees. Regardless of their methods, the heads of these monasteries expect the unquestioning obedience of their students."
          ],
          "features": [
            [
              {
                "name": "Shadow Arts",
                "id": 37
              }
            ],
            [
              {
                "name": "Shadow Step",
                "id": 38
              }
            ],
            [
              {
                "name": "Cloak of Shadows",
                "id": 39
              }
            ],
            [
              {
                "name": "Opportunist",
                "id": 40
              }
            ]
          ]
        },
        "SOUL_KNIFE_(UA)": {
          "title": "Soul Knife",
          "restrictions": [
            
          ],
          "details": [
            "Monks of the Way of the Soul Knife are deadly assassins and bounty hunters. They use their psionic talents to manifest psychic blades that tear through their enemies\u2019 bodies and auras. Their talents extend beyond combat, as their ability to perceive auras allows them to track down foes and see through their deceptions."
          ],
          "features": [
            [
              {
                "name": "Soul Knives",
                "id": 41
              },
              {
                "name": "Psychic Slash",
                "id": 42
              }
            ],
            [
              {
                "name": "Aura Sight",
                "id": 43
              }
            ],
            [
              {
                "name": "Spectral Blades",
                "id": 44
              }
            ],
            [
              {
                "name": "Psychic Form",
                "id": 45
              }
            ]
          ]
        },
        "SUN_SOUL": {
          "title": "Sun Soul",
          "restrictions": [
            
          ],
          "details": [
            "Monks of the Way of the Sun Soul learn to channel their own life energy into searing bolts of light. They teach that meditation can unlock the ability to unleash the indomitable light shed by the soul of every living creature."
          ],
          "features": [
            [
              {
                "name": "Radiant Sun Bolt",
                "id": 46
              }
            ],
            [
              {
                "name": "Searing Arc Strike",
                "id": 47
              }
            ],
            [
              {
                "name": "Searing Sunburst",
                "id": 48
              }
            ],
            [
              {
                "name": "Sun Shield",
                "id": 49
              }
            ]
          ]
        },
        "TRANQUILITY_(UA)": {
          "title": "Tranquility",
          "restrictions": [
            
          ],
          "details": [
            "Monks of the Way of Tranquility see violence as a last resort. They use diplomacy, mercy, and understanding to resolve conflicts. If pushed, though, they are capable warriors who can bring an end to the unjust or cruel folk who refuse to listen to reason. When adventuring, these monks make excellent diplomats. They are also skilled in the healing arts, and can preserve their allies in the face of daunting foes."
          ],
          "features": [
            [
              {
                "name": "Path of Tranquility",
                "id": 50
              },
              {
                "name": "Healing Hands",
                "id": 51
              }
            ],
            [
              {
                "name": "Emissary of Peace",
                "id": 52
              }
            ],
            [
              {
                "name": "Douse the Flames of War",
                "id": 53
              }
            ],
            [
              {
                "name": "Anger of a Gentle Soul",
                "id": 54
              }
            ]
          ]
        },
        "COBALT_SOUL": {
          "title": "Cobalt Soul",
          "restrictions": [
            
          ],
          "details": [
            "Driven by the pursuit of knowledge, the archives of the Cobalt Soul stand as some of the most well-respected and most heavily guarded repositories of tomes, history, and information across the world. Here, young people seeking the clarity of truth and the strength of knowledge pledge to learn the arts of seeking enlightenment by understanding the world around them, and mastering the techniques to defend it. To become a Cobalt Soul is to give one\u2019s self to the quest for unveiling life\u2019s mysteries, bringing light to the secrets of the dark, and guarding the most powerful and dangerous of truths from those who would seek to perverse the sanctity of civilization.",
            "The monks of the Cobalt Soul are the embodiment of the phrase \u201cknow your enemy\u201d. Through research, they prepare themselves against the ever-coming tides of evil. Through careful training, they have learned to puncture and manipulate the spiritual flow of an opponent\u2019s body. Through understanding the secrets of their foe, they can adapt and surmount them. Then, once the fight is done, they return to record their findings for future generations of monks to study from."
          ],
          "features": [
            [
              {
                "name": "Mystical Erudition",
                "id": 55
              },
              {
                "name": "Extract Aspects",
                "id": 56
              },
              {
                "name": "Extort Truth",
                "id": 57
              }
            ],
            [
              {
                "name": "Preternatural Counter",
                "id": 58
              }
            ],
            [
              {
                "name": "Mind of Mercury",
                "id": 59
              }
            ],
            [
              {
                "name": "Debilitating Barrage",
                "id": 60
              }
            ]
          ]
        }
      }
    }
  },
  "PALADIN": {
    "title": "Paladin",
    "route": "paladin",
    "image": "paladin.svg",
    "details": [
      "Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond."
    ],
    "tym": [
      "runs a social justice blog",
      "will snitch on you",
      "makes a lot of doggo memes"
    ],
    "summary": "A holy warrior bound to a sacred oath which bestows upon them awesome powers.",
    "recommendedStats": [
      "Strength",
      "Charisma"
    ],
    "spellcasting": {
      "details": [
        "By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does. See Spells Rules for the general rules of spellcasting and the Spells Listing for the paladin spell list."
      ],
      "preparing": [
        "The Paladin table shows how many spell slots you have to cast your paladin spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell\u2019s level or higher. You regain all expended spell slots when you finish a long rest.",
        "You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.",
        "For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn\u2019t remove it from your list of prepared spells.",
        "You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
      ],
      "ability": [
        "Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one."
      ],
      "mod": "CHA",
      "save": 8,
      "other": [
        {
          "title": "Spellcasting Focus",
          "text": "You can use a holy symbol (see the Adventuring Gear section) as a spellcasting focus for your paladin spells."
        }
      ]
    },
    "hitDice": 10,
    equipment: [
      [[Item(WEAPONS.MARTIAL), Item(ARMOR.SHIELDS.SHIELD)], Item(WEAPONS.MARTIAL, 2)],
      [Item(WEAPONS.SIMPLE.MELEE.JAVELIN, 5), Item(WEAPONS.SIMPLE.MELEE)],
      [Item(ITEMS.STARTER_PACK.PRIEST), Item(ITEMS.STARTER_PACK.EXPLORER)],
      [[Item(ARMOR.HEAVY.CHAIN_MAIL), Item(ITEMS.HOLY_SYMBOL)]],
    ],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.HEAVY, ARMOR.SHIELDS],
      weapons: [WEAPONS.SIMPLE, WEAPONS.MARTIAL],
      savingThrows: [STATS.WIS, STATS.CHA],
      tools: [],
      skills: {
        choose: 2,
        options: [
          SKILLS.ATHLETICS, 
          SKILLS.INSIGHT, 
          SKILLS.INTIMIDATION, 
          SKILLS.MEDICINE, 
          SKILLS.PERSUASION, 
          SKILLS.RELIGION
        ]
      }
    },
    "asi": [
      4,
      8,
      12,
      16,
      19
    ],
    "levelTable": {
      "title": "The Paladin",
      "rows": [
        {
          "key": 2,
          "level": "1st",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Divine Sense",
              "id": 0
            },
            {
              "name": "Lay on Hands",
              "id": 1
            }
          ],
          "1st": "-",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 3,
          "level": "2nd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Fighting Style",
              "id": 2
            },
            {
              "name": "Spellcasting",
              "id": 3
            },
            {
              "name": "Divine Smite",
              "id": 4
            }
          ],
          "1st": "2",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 4,
          "level": "3rd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Divine Health",
              "id": 5
            },
            {
              "name": "Sacred Oath",
              "id": 6
            }
          ],
          "1st": "3",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 5,
          "level": "4th",
          "proficiencyBonus": "+2",
          "features": [
            
          ],
          "1st": "3",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 6,
          "level": "5th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Extra Attack",
              "id": 8
            }
          ],
          "1st": "4",
          "2nd": "2",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 7,
          "level": "6th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Aura of Protection",
              "id": 9
            }
          ],
          "1st": "4",
          "2nd": "2",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 8,
          "level": "7th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 9,
          "level": "8th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 10,
          "level": "9th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "2",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 11,
          "level": "10th",
          "proficiencyBonus": "+4",
          "features": [
            {
              "name": "Aura of Courage",
              "id": 10
            }
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "2",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 12,
          "level": "11th",
          "proficiencyBonus": "+4",
          "features": [
            {
              "name": "Improved Divine Smite",
              "id": 11
            }
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 13,
          "level": "12th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 14,
          "level": "13th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "1",
          "5th": "-"
        },
        {
          "key": 15,
          "level": "14th",
          "proficiencyBonus": "+5",
          "features": [
            {
              "name": "Cleansing Touch",
              "id": 12
            }
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "1",
          "5th": "-"
        },
        {
          "key": 16,
          "level": "15th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "2",
          "5th": "-"
        },
        {
          "key": 17,
          "level": "16th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "2",
          "5th": "-"
        },
        {
          "key": 18,
          "level": "17th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "1"
        },
        {
          "key": 19,
          "level": "18th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Aura of Courage II",
              "id": 10
            },
            {
              "name": "Aura of Protection II",
              "id": 9
            }
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "1"
        },
        {
          "key": 20,
          "level": "19th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2"
        },
        {
          "key": 21,
          "level": "20th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2"
        }
      ],
      "columns": [
        {
          "title": "Level",
          "dataIndex": "level",
          "key": "level",
          "align": "center"
        },
        {
          "title": "Proficiency Bonus",
          "dataIndex": "proficiencyBonus",
          "key": "proficiencyBonus",
          "align": "center"
        },
        {
          "title": "Features",
          "dataIndex": "features",
          "key": "features",
          "align": "center"
        },
        {
          "title": "Spell Slots per Spell Level",
          "dataIndex": "spellSlotsPerSpellLevel",
          "key": "spellSlotsPerSpellLevel",
          "children": [
            {
              "title": "1st",
              "dataIndex": "1st",
              "key": "1st",
              "align": "center"
            },
            {
              "title": "2nd",
              "dataIndex": "2nd",
              "key": "2nd",
              "align": "center"
            },
            {
              "title": "3rd",
              "dataIndex": "3rd",
              "key": "3rd",
              "align": "center"
            },
            {
              "title": "4th",
              "dataIndex": "4th",
              "key": "4th",
              "align": "center"
            },
            {
              "title": "5th",
              "dataIndex": "5th",
              "key": "5th",
              "align": "center"
            }
          ],
          "align": "center"
        }
      ],
      "featuresIndex": 2
    },
    "features": [
      {
        "title": "Divine Sense",
        "isSubclassFeature": false,
        "details": [
          "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.",
          "You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
        ]
      },
      {
        "title": "Lay on Hands",
        "isSubclassFeature": false,
        "details": [
          "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.",
          "As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature. up to the maximum amount remaining in your pool.",
          "Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.",
          "This feature has no effect on undead and constructs."
        ]
      },
      {
        "title": "Fighting Style",
        "isSubclassFeature": false,
        "details": [
          "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
          "**You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.**",
          "When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.",
          "**When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.**",
          "While you are wearing armor, you gain a +1 bonus to AC.",
          "**While you are wearing armor, you gain a +1 bonus to AC.**",
          "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
          "**When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.**",
          "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.",
          "**When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.**",
          "As long as you not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to armor class.",
          "**As long as you not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to armor class.**",
          "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
          "**When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.**",
          "As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach."
        ]
      },
      {
        "title": "Spellcasting",
        "isSubclassFeature": false,
        "details": [
          "By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.",
          "**By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.**",
          "The Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
          "You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.",
          "For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
          "You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
          "**You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.**",
          "Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.",
          "**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier",
          "**Spell attack modifier** = your proficiency bonus + your Charisma modifier",
          "****Spell attack modifier** = your proficiency bonus + your Charisma modifier**",
          "You can use a holy symbol as a spellcasting focus for your paladin spells."
        ]
      },
      {
        "title": "Divine Smite",
        "isSubclassFeature": false,
        "details": [
          "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8."
        ]
      },
      {
        "title": "Divine Health",
        "isSubclassFeature": false,
        "details": [
          "By 3rd level, the divine magic flowing through you makes you immune to disease."
        ]
      },
      {
        "title": "Sacred Oath",
        "isSubclassFeature": false,
        "details": [
          "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose one of the following oaths:\n\u2022\u00a0Ancients\n\u2022\u00a0Conquest\n\u2022\u00a0Crown\n\u2022\u00a0Devotion\n\u2022\u00a0Treachery (UA)\n\u2022\u00a0Vengeance\n\u2022\u00a0Oathbreaker\nYour choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.",
          "**When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose one of the following oaths:\n\u2022\u00a0Ancients\n\u2022\u00a0Conquest\n\u2022\u00a0Crown\n\u2022\u00a0Devotion\n\u2022\u00a0Treachery (UA)\n\u2022\u00a0Vengeance\n\u2022\u00a0Oathbreaker\nYour choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.**",
          "Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day.",
          "If you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you.",
          "**If you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you.**",
          "Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.",
          "When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.",
          "Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC."
        ]
      },
      {
        "title": "Ability Score Improvement",
        "isSubclassFeature": false,
        "details": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      {
        "title": "Extra Attack",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      {
        "title": "Aura of Protection",
        "isSubclassFeature": false,
        "details": [
          "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.",
          "At 18th level, the range of this aura increases to 30 feet."
        ]
      },
      {
        "title": "Aura of Courage",
        "isSubclassFeature": false,
        "details": [
          "Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.",
          "At 18th level, the range of this aura increases to 30 feet."
        ]
      },
      {
        "title": "Improved Divine Smite",
        "isSubclassFeature": false,
        "details": [
          "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage."
        ]
      },
      {
        "title": "Cleansing Touch",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.",
          "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
        ]
      },
      {
        "title": "Tenets of the Ancients",
        "isSubclassFeature": true,
        "details": [
          "The tenets of the Oath of the Ancients have been preserved for uncounted centuries. This oath emphasizes the principles of good above any concerns of law or chaos. Its four central principles are simple.",
          "***Kindle the Light.*** Through your acts of mercy, kindness, and forgiveness, kindle the light of hope in the world, beating back despair.",
          "***Shelter the Light.*** Where there is good, beauty, love, and laughter in the world, stand against the wickedness that would swallow it. Where life flourishes, stand against the forces that would render it barren.",
          "***Preserve Your Own Light.*** Delight in song and laughter, in beauty and art. If you allow the light to die in your own heart, you can't preserve it in the world.",
          "***Be the Light.*** Be a glorious beacon for all who live in despair. Let the light of your joy and courage shine forth in all your deeds."
        ]
      },
      {
        "title": "Oath Spells",
        "isSubclassFeature": true,
        "details": [
          "You gain oath spells at the paladin levels listed.",
          {
            "title": "Oath of the Ancients Spells",
            "rows": [
              {
                "key": 2,
                "paladinLevel": "3rd",
                "spells": "Ensnaring Strike, Speak with Animals"
              },
              {
                "key": 3,
                "paladinLevel": "5th",
                "spells": "Moonbeam, Misty Step"
              },
              {
                "key": 4,
                "paladinLevel": "9th",
                "spells": "Plant Growth, Protection from Energy"
              },
              {
                "key": 5,
                "paladinLevel": "13th",
                "spells": "Ice Storm, Stoneskin"
              },
              {
                "key": 6,
                "paladinLevel": "17th",
                "spells": "Commune with Nature, Tree Stride"
              }
            ],
            "columns": [
              {
                "title": "Paladin Level",
                "dataIndex": "paladinLevel",
                "key": "paladinLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Channel Divinity",
        "isSubclassFeature": true,
        "details": [
          "When you take this oath at 3rd level, you gain the following two Channel Divinity options.",
          "***Nature's Wrath.*** You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.",
          "***Turn the Faithless.*** You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.",
          "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.",
          "If the creature's true form is concealed by an illusion, shapeshifting, or other effect, that form is revealed while it is turned."
        ]
      },
      {
        "title": "Aura of Warding",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells.",
          "At 18th level, the range of this aura increases to 30 feet."
        ]
      },
      {
        "title": "Undying Sentinel",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can't use it again until you finish a long rest.",
          "Additionally, you suffer none of the drawbacks of old age, and you can't be aged magically."
        ]
      },
      {
        "title": "Elder Champion",
        "isSubclassFeature": true,
        "details": [
          "At 20th level, you can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take on a bark-like texture, your hair might become leafy or moss-like, or you might sprout antlers or a lion-like mane.",
          "Using your action, you undergo a transformation. For 1 minute, you gain the following benefits:",
          "\u2022\u00a0At the start of each of your turns, you regain 10 hit points.",
          "\u2022 Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.",
          "\u2022 Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.",
          "Once you use this feature, you can't use it again until you finish a long rest."
        ]
      },
      {
        "title": "Tenets of Conquest",
        "isSubclassFeature": true,
        "details": [
          "A paladin who takes this oath has the tenets of conquest seared on the upper arm.",
          "***Douse the Flame of Hope.*** It is not enough to merely defeat an enemy in battle. Your victory must be so overwhelming that your enemies\u2019 will to fight is shattered forever. A blade can end a life. Fear can end an empire.",
          "***Rule with an Iron Fist.*** Once you have conquered, tolerate no dissent. Your word is law. Those who obey it shall be favored. Those who defy it shall be punished as an example to all who might follow.",
          "***Strength Above All.*** You shall rule until a stronger one arises. Then you must grow mightier and meet the challenge, or fall to your own ruin."
        ]
      },
      {
        "title": "Oath Spells",
        "isSubclassFeature": true,
        "details": [
          "You gain oath spells at the paladin levels listed.",
          {
            "title": "Oath of Conquest Spells",
            "rows": [
              {
                "key": 2,
                "paladinLevel": "3rd",
                "spells": "Armor of Agathys, Command"
              },
              {
                "key": 3,
                "paladinLevel": "5th",
                "spells": "Hold Person, Spiritual Weapon"
              },
              {
                "key": 4,
                "paladinLevel": "9th",
                "spells": "Bestow Curse, Fear"
              },
              {
                "key": 5,
                "paladinLevel": "13th",
                "spells": "Dominate Beast, Stoneskin"
              },
              {
                "key": 6,
                "paladinLevel": "17th",
                "spells": "Cloudkill, Dominate Person"
              }
            ],
            "columns": [
              {
                "title": "Paladin Level",
                "dataIndex": "paladinLevel",
                "key": "paladinLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Channel Divinity",
        "isSubclassFeature": true,
        "details": [
          "When you take this oath at 3rd level, you gain the following two Channel Divinity options.",
          "***Conquering Presence.*** You can use your Channel Divinity to exude a terrifying presence. As an action, you force each creature of your choice that you can see within 30 feet of you to make a Wisdom saving throw. On a failed save, a creature becomes frightened of you for 1 minute. The frightened creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success.",
          "***Guided Strike.*** You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
        ]
      },
      {
        "title": "Aura of Conquest",
        "isSubclassFeature": true,
        "details": [
          "Starting at 7th level, you constantly emanate a menacing aura while you\u2019re not incapacitated. The aura extends 10 feet from you in every direction, but not through total cover.",
          "If a creature is frightened of you, its speed is reduced to 0 while in the aura, and that creature takes psychic damage equal to half your paladin level if it starts its turn there.",
          "At 18th level, the range of this aura increases to 30 feet."
        ]
      },
      {
        "title": "Scornful Rebuke",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, those who dare to strike you are psychically punished for their audacity. Whenever a creature hits you with an attack, that creature takes psychic damage equal to your Charisma modifier (minimum of 1) if you\u2019re not incapacitated."
        ]
      },
      {
        "title": "Invincible Conqueror",
        "isSubclassFeature": true,
        "details": [
          "At 20th level, you gain the ability to harness extraordinary martial prowess. As an action, you can magically become an avatar of conquest, gaining the following benefits for 1 minute:",
          "\u2022 You have resistance to all damage.",
          "\u2022 When you take the Attack action on your turn, you can make one additional attack as part of that action.",
          "\u2022 Your melee weapon attacks score a critical hit on a roll of 19 or 20 on the d20.",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      },
      {
        "title": "Tenets of the Crown",
        "isSubclassFeature": true,
        "details": [
          "The tenets of the Oath of the Crown are often set by the sovereign to which their oath is sworn, but generally emphasize the following tenets.",
          "***Law.*** The law is paramount. It is the mortar that holds the stones of civilization together, and it must be respected.",
          "***Loyalty.*** Your word is your bond. Without loyalty, oaths and laws are meaningless.",
          "***Courage.*** You must be willing to do what needs to be done for the sake of order, even in the face of overwhelming odds. If you don't act, then who will?",
          "***Responsibility.*** You must deal with the consequences of your actions, and you are responsible for fulfilling your duties and obligations."
        ]
      },
      {
        "title": "Oath Spells",
        "isSubclassFeature": true,
        "details": [
          "You gain oath spells at the paladin levels listed.",
          {
            "title": "Oath of the Crown Spells",
            "rows": [
              {
                "key": 2,
                "paladinLevel": "3rd",
                "spells": "Command, Compelled Duel"
              },
              {
                "key": 3,
                "paladinLevel": "5th",
                "spells": "Warding Bond, Zone of Truth"
              },
              {
                "key": 4,
                "paladinLevel": "9th",
                "spells": "Aura of Vitality, Spirit Guardians"
              },
              {
                "key": 5,
                "paladinLevel": "13th",
                "spells": "Banishment, Guardian of Faith"
              },
              {
                "key": 6,
                "paladinLevel": "17th",
                "spells": "Circle of Power, Geas"
              }
            ],
            "columns": [
              {
                "title": "Paladin Level",
                "dataIndex": "paladinLevel",
                "key": "paladinLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Channel Divinity",
        "isSubclassFeature": true,
        "details": [
          "When you take this oath at 3rd level, you gain the following two Channel Divinity options.",
          "***Champion Challenge.*** As a bonus action, you issue a challenge that compels other creatures to do battle with you. Each creature of your choice that you can see within 30 feet of you must make a Wisdom saving throw. On a failed save, a creature can't willingly move more than 30 feet away from you. This effect ends on the creature if you are incapacitated or die or if the creature is more than 30 feet away from you.",
          "***Turn the Tide.*** As a bonus action, you can bolster injured creatures with your Channel Divinity. Each creature of your choice that can hear you within 30 feet of you regains hit points equal to 1d6 + your Charisma modifier (minimum of 1) if it has no more than half of its hit points."
        ]
      },
      {
        "title": "Divine Allegiance",
        "isSubclassFeature": true,
        "details": [
          "Starting at 7th level, when a creature within 5 feet of you takes damage, you can use your reaction to magically substitute your own health for that of the target creature, causing that creature not to take the damage. Instead, you take the damage. This damage to you can't be reduced or prevented in any way."
        ]
      },
      {
        "title": "Unyielding Saint",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, you have advantage on saving throws to avoid becoming paralyzed or stunned."
        ]
      },
      {
        "title": "Exalted Champion",
        "isSubclassFeature": true,
        "details": [
          "At 20th level, your presence on the field of battle is an inspiration to those dedicated to your cause. You can use your action to gain the following benefits for 1 hour:",
          "\u2022\u00a0You have resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.",
          "\u2022 Your allies have advantage on death saving throws while within 30 feet of you.",
          "\u2022 You have advantage on Wisdom saving throws, as do your allies within 30 feet of you.",
          "This effect ends early if you are incapacitated or die. Once you use this feature, you can't use it again until you finish a long rest."
        ]
      },
      {
        "title": "Tenets of Devotion",
        "isSubclassFeature": true,
        "details": [
          "Though the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets.",
          "***Honesty.*** Don't lie or cheat. Let your word be your promise.",
          "***Courage.*** Never fear to act, though caution is wise.",
          "***Compassion.*** Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom.",
          "***Honor.*** Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible while causing the least amount of harm.",
          "***Duty.*** Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you."
        ]
      },
      {
        "title": "Oath Spells",
        "isSubclassFeature": true,
        "details": [
          "You gain oath spells at the paladin levels listed.",
          {
            "title": "Oath of Devotion Spells",
            "rows": [
              {
                "key": 2,
                "paladinLevel": "3rd",
                "spells": "Protection from Evil and Good, Sanctuary"
              },
              {
                "key": 3,
                "paladinLevel": "5th",
                "spells": "Lesser Restoration, Zone of Truth"
              },
              {
                "key": 4,
                "paladinLevel": "9th",
                "spells": "Beacon of Hope, Dispel Magic"
              },
              {
                "key": 5,
                "paladinLevel": "13th",
                "spells": "Freedom of Movement, Guardian of Faith"
              },
              {
                "key": 6,
                "paladinLevel": "17th",
                "spells": "Commune, Flame Strike"
              }
            ],
            "columns": [
              {
                "title": "Paladin Level",
                "dataIndex": "paladinLevel",
                "key": "paladinLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Channel Divinity",
        "isSubclassFeature": true,
        "details": [
          "When you take this oath at 3rd level, you gain the following two Channel Divinity options.",
          "***Sacred Weapon.*** As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.",
          "You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.",
          "***Turn the Unholy.*** As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.",
          "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
        ]
      },
      {
        "title": "Aura of Devotion",
        "isSubclassFeature": true,
        "details": [
          "Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious.",
          "At 18th level, the range of this aura increases to 30 feet."
        ]
      },
      {
        "title": "Purity of Spirit",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 15th level, you are always under the effects of a Protection from Evil and Good spell."
        ]
      },
      {
        "title": "Holy Nimbus",
        "isSubclassFeature": true,
        "details": [
          "At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.",
          "Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.",
          "In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.",
          "Once you use this feature, you can't use it again until you finish a long rest."
        ]
      },
      {
        "title": "Tenets of Treachery",
        "isSubclassFeature": true,
        "details": [
          "A paladin who embraces the Oath of Treachery owes allegiance to no one. There are no tenets of this oath, for it lacks any substance. Those who are unfortunate enough to have close contact with blackguards have observed that a blackguard\u2019s overwhelming concern is power and safety, especially if both can be obtained at the expense of others."
        ]
      },
      {
        "title": "Oath Spells",
        "isSubclassFeature": true,
        "details": [
          "You gain oath spells at the paladin levels listed.",
          {
            "title": "Oath of Treachery Spells",
            "rows": [
              {
                "key": 2,
                "paladinLevel": "3rd",
                "spells": "Charm Person, Expeditious Retreat"
              },
              {
                "key": 3,
                "paladinLevel": "5th",
                "spells": "Invisibility, Mirror Image"
              },
              {
                "key": 4,
                "paladinLevel": "9th",
                "spells": "Gaseous Form, Haste"
              },
              {
                "key": 5,
                "paladinLevel": "13th",
                "spells": "Confusion, Greater Invisibility"
              },
              {
                "key": 6,
                "paladinLevel": "17th",
                "spells": "Dominate Person, Passwall"
              }
            ],
            "columns": [
              {
                "title": "Paladin Level",
                "dataIndex": "paladinLevel",
                "key": "paladinLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Channel Divinity",
        "isSubclassFeature": true,
        "details": [
          "When you take this oath at 3rd level, you gain the following two Channel Divinity options.",
          "***Conjure Duplicate.*** As an action, you create a visual illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space of your choice that you can see within 30 feet of you. The illusion looks exactly like you; it is silent; it is your size, is insubstantial, and doesn\u2019t occupy its space; and it is unaffected by attacks and damage. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but the illusion must remain within 120 feet of you.",
          "For the duration, you can cast spells as though you were in the illusion\u2019s space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how uncanny the illusion is.",
          "***Poison Strike.*** You can use your Channel Divinity to make a weapon deadlier. As a bonus action, you touch one weapon or piece of ammunition and conjure a special poison on it. The poison lasts for 1 minute. The next time you hit a target with an attack using that weapon or ammunition, the target takes poison damage immediately after the attack. The poison damage equals 2d10 + your paladin level, or 20 + your paladin level if you had advantage on the attack roll."
        ]
      },
      {
        "title": "Aura of Treachery",
        "isSubclassFeature": true,
        "details": [
          "Starting at 7th level, you emanate an aura of discord, which gives you the following benefits.",
          "***Cull the Herd.*** You have advantage on melee attack rolls against any creature that has one or more of its allies within 5 feet of it.",
          "***Treacherous Strike.*** If a creature within 5 feet of you misses you with a melee attack, you can use your reaction to force the attacker to reroll that attack against a creature of your choice that is also within 5 feet of the attacker. The ability fails and is wasted if the attacker is immune to being charmed. You can use this ability three times, and regain expended uses of it when you finish a short or long rest."
        ]
      },
      {
        "title": "Blackguard's Escape",
        "isSubclassFeature": true,
        "details": [
          "At 15th level, you have the ability to slip away from your foes. Immediately after you are hit by an attack, you can use your reaction to turn invisible and teleport up to 60 feet to a spot you can see. You remain invisible until the end of your next turn or until you attack, deal damage, or force a creature to make a saving throw. Once you use this feature, you must finish a short or long rest before you can use it again."
        ]
      },
      {
        "title": "Icon of Deceit",
        "isSubclassFeature": true,
        "details": [
          "At 20th level, you gain the ability to emanate feelings of treachery. As an action, you can magically become an avatar of deceit, gaining the following benefits for 1 minute:",
          "\u2022 You are invisible.",
          "\u2022 If a creature damages you on its turn, it must succeed on a Wisdom saving throw (DC equal to your spell save DC) or you control its next action, provided that you aren\u2019t incapacitated when it takes the action. A creature automatically succeeds on the save if the creature is immune to being charmed.",
          "\u2022 If you have advantage on an attack roll, you gain a bonus to its damage roll equal to your paladin level.",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      },
      {
        "title": "Tenets of Vengeance",
        "isSubclassFeature": true,
        "details": [
          "The tenets of the Oath of Vengeance vary by paladin, but all the tenets revolve around punishing wrongdoers by any means necessary. Paladins who uphold these tenets are willing to sacrifice even their own righteousness to mete out justice upon those who do evil, so the paladins are often neutral or lawful neutral in alignment. The core principles of the tenets are brutally simple.",
          "***Fight the Greater Evil.*** Faced with a choice of fighting my sworn foes or combating a lesser evil, I choose the greater evil.",
          "***No Mercy for the Wicked.*** Ordinary foes might win my mercy, but my sworn enemies do not.",
          "***By Any Means Necessary.*** My qualms can't get in the way of exterminating my foes.",
          "***Restitution.*** If my foes wreak ruin on the world, it is because I failed to stop them. I must help those harmed by their misdeeds."
        ]
      },
      {
        "title": "Oath Spells",
        "isSubclassFeature": true,
        "details": [
          "You gain oath spells at the paladin levels listed.",
          {
            "title": "Oath of Vengeance Spells",
            "rows": [
              {
                "key": 2,
                "paladinLevel": "3rd",
                "spells": "Bane, Hunter's Mark"
              },
              {
                "key": 3,
                "paladinLevel": "5th",
                "spells": "Hold Person, Misty Step"
              },
              {
                "key": 4,
                "paladinLevel": "9th",
                "spells": "Haste, Protection from Energy"
              },
              {
                "key": 5,
                "paladinLevel": "13th",
                "spells": "Banishment, Dimension Door"
              },
              {
                "key": 6,
                "paladinLevel": "17th",
                "spells": "Hold Monster, Scrying"
              }
            ],
            "columns": [
              {
                "title": "Paladin Level",
                "dataIndex": "paladinLevel",
                "key": "paladinLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Channel Divinity",
        "isSubclassFeature": true,
        "details": [
          "When you take this oath at 3rd level, you gain the following two Channel Divinity options.",
          "***Abjure Enemy.*** As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.",
          "On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature's speed is 0, and it can't benefit from any bonus to its speed.",
          "On a successful save, the creature's speed is halved for 1 minute or until the creature takes any damage.",
          "***Vow of Enmity.*** As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious."
        ]
      },
      {
        "title": "Relentless Avenger",
        "isSubclassFeature": true,
        "details": [
          "By 7th level, your supernatural focus helps you close off a foe's retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn't provoke opportunity attacks."
        ]
      },
      {
        "title": "Soul of Vengeance",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, the authority with which you speak your Vow of Enmity gives you greater power over your foe. When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range."
        ]
      },
      {
        "title": "Avenging Angel",
        "isSubclassFeature": true,
        "details": [
          "At 20th level, you can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:",
          "\u2022 Wings sprout from your back and grant you a flying speed of 60 feet.\n\u2022 You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.",
          "Once you use this feature, you can't use it again until you finish a long rest."
        ]
      },
      {
        "title": "Oath Spells",
        "isSubclassFeature": true,
        "details": [
          "You gain oath spells at the paladin levels listed.",
          {
            "title": "Oathbreaker Spells",
            "rows": [
              {
                "key": 2,
                "paladinLevel": "3rd",
                "spells": "Hellish Rebuke, Inflict Wounds"
              },
              {
                "key": 3,
                "paladinLevel": "5th",
                "spells": "Crown of Madness, Darkness"
              },
              {
                "key": 4,
                "paladinLevel": "9th",
                "spells": "Animate Dead, Bestow Curse"
              },
              {
                "key": 5,
                "paladinLevel": "13th",
                "spells": "Blight, Confusion"
              },
              {
                "key": 6,
                "paladinLevel": "17th",
                "spells": "Contagion, Dominate Person"
              }
            ],
            "columns": [
              {
                "title": "Paladin Level",
                "dataIndex": "paladinLevel",
                "key": "paladinLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Channel Divinity",
        "isSubclassFeature": true,
        "details": [
          "When you take this oath at 3rd level, you gain the following two Channel Divinity options.",
          "***Control Undead.*** As an action, you target one undead creature you can see within 30 feet of you. The target must make a Wisdom saving throw. On a failed save, the target must obey your commands for the next 24 hours, or until you use this Channel Divinity option again. An undead whose challenge rating is equal to or greater than your paladin level is immune to this effect.",
          "***Dreadful Aspect.*** As an action, you channel the darkest emotions and focus them into a burst of magical menace. Each creature of your choice within 30 feet of you must make a Wisdom saving throw if it can see you. On a failed save, the target is frightened of you for 1 minute. If a creature frightened by this effect ends its turn more than 30 feet away from you, it can attempt another Wisdom saving throw to end the effect on it."
        ]
      },
      {
        "title": "Aura of Hate",
        "isSubclassFeature": true,
        "details": [
          "Starting at 7th level you, as well any fiends and undead within 10 feet of you, gain a bonus to melee weapon damage rolls equal to your Charisma modifier (minimum of +1). A creature can benefit from this feature from only one paladin at a time.",
          "At 18th level, the range of this aura increases to 30 feet."
        ]
      },
      {
        "title": "Supernatural Resistance",
        "isSubclassFeature": true,
        "details": [
          "At 15th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons."
        ]
      },
      {
        "title": "Dread Lord",
        "isSubclassFeature": true,
        "details": [
          "At 20th level, you can, as an action, surround yourself with an aura of gloom that lasts for 1 minute. The aura reduces any bright light in a 30-foot radius around you to dim light. Whenever an enemy that is frightened by you starts its turn in the aura, it takes 4d10 psychic damage. Additionally, you and any creatures of your choosing in the aura are draped in deeper shadow. Creatures that rely on sight have disadvantage on attack rolls against creatures draped in this shadow.",
          "While the aura lasts, you can use a bonus action on your turn to cause the shadows in the aura to attack one creature. Make a melee spell attack against the target. If the attack hits, the target takes necrotic damage equal to 3d10 + your Charisma modifier.",
          "After activating the aura, you can't do so again until you finish a long rest."
        ]
      }
    ],
    "subclass": {
      "title": "Sacred Oath",
      "prefix": "Oath of ",
      "suffix": null,
      "levels": [
        3,
        7,
        15,
        20
      ],
      "archetypes": {
        "ANCIENTS": {
          "title": "Ancients",
          "restrictions": [
            
          ],
          "details": [
            "The Oath of the Ancients is as old as the race of elves and the rituals of the druids. Sometimes called fey knights, green knights, or horned knights, paladins who swear this oath cast their lot with the side of the light in the cosmic struggle against darkness because they love the beautiful and life-giving things of the world, not necessarily because they believe in principles of honor, courage, and justice. They adorn their armor and clothing with images of growing things-leaves, antlers, or flowers-to reflect their commitment to preserving life and light in the world."
          ],
          "features": [
            [
              {
                "name": "Tenets of the Ancients",
                "id": 13
              },
              {
                "name": "Oath Spells",
                "id": 14
              },
              {
                "name": "Channel Divinity",
                "id": 15
              }
            ],
            [
              {
                "name": "Aura of Warding",
                "id": 16
              }
            ],
            [
              {
                "name": "Undying Sentinel",
                "id": 17
              }
            ],
            [
              {
                "name": "Elder Champion",
                "id": 18
              }
            ]
          ]
        },
        "CONQUEST": {
          "title": "Conquest",
          "restrictions": [
            
          ],
          "details": [
            "The Oath of Conquest calls to paladins who seek glory in battle and the subjugation of their enemies. It isn\u2019t enough for these paladins to establish order. They must crush the forces of chaos. Sometimes called knight tyrants or iron mongers, those who swear this oath gather into grim orders that serve gods or philosophies of war and well-ordered might.",
            "Some of these paladins go so far as to consort with the powers of the Nine Hells, valuing the rule of law over the balm of mercy. The archdevil Bel, warlord of Avernus, counts many of these paladins \u2013 called hell knights \u2013\u00a0as his most ardent supporters. Hell knights cover their armor with trophies taken from fallen enemies, a grim warning to any who dare oppose them and the decrees of their lords. These knights are often most fiercely resisted by other paladins of this oath, who believe that the hell knights have wandered too far into darkness."
          ],
          "features": [
            [
              {
                "name": "Tenets of Conquest",
                "id": 19
              },
              {
                "name": "Oath Spells",
                "id": 20
              },
              {
                "name": "Channel Divinity",
                "id": 21
              }
            ],
            [
              {
                "name": "Aura of Conquest",
                "id": 22
              }
            ],
            [
              {
                "name": "Scornful Rebuke",
                "id": 23
              }
            ],
            [
              {
                "name": "Invincible Conqueror",
                "id": 24
              }
            ]
          ]
        },
        "CROWN": {
          "title": "Crown",
          "restrictions": [
            
          ],
          "details": [
            "The Oath of the Crown is sworn to the ideals of civilization, be it the spirit of a nation, fealty to a sovereign, or service to a deity of law and rulership. The paladins who swear this oath dedicate themselves to serving society and, in particular, the just laws that hold society together. These paladins are the watchful guardians on the walls, standing against the chaotic tides of barbarism that threaten to tear down all that civilization has built, and are commonly known as guardians, exemplars, or sentinels. Often, paladins who swear this oath are members of an order of knighthood in service to a nation or a sovereign, and undergo their oath as part of their admission to the order's ranks."
          ],
          "features": [
            [
              {
                "name": "Tenets of the Crown",
                "id": 25
              },
              {
                "name": "Oath Spells",
                "id": 26
              },
              {
                "name": "Channel Divinity",
                "id": 27
              }
            ],
            [
              {
                "name": "Divine Allegiance",
                "id": 28
              }
            ],
            [
              {
                "name": "Unyielding Saint",
                "id": 29
              }
            ],
            [
              {
                "name": "Exalted Champion",
                "id": 30
              }
            ]
          ]
        },
        "DEVOTION": {
          "title": "Devotion",
          "restrictions": [
            
          ],
          "details": [
            "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels \u2013 the perfect servants of good \u2013 as their ideals, and incorporate images of angelic wings into their helmets or coats of arms."
          ],
          "features": [
            [
              {
                "name": "Tenets of Devotion",
                "id": 31
              },
              {
                "name": "Oath Spells",
                "id": 32
              },
              {
                "name": "Channel Divinity",
                "id": 33
              }
            ],
            [
              {
                "name": "Aura of Devotion",
                "id": 34
              }
            ],
            [
              {
                "name": "Purity of Spirit",
                "id": 35
              }
            ],
            [
              {
                "name": "Holy Nimbus",
                "id": 36
              }
            ]
          ]
        },
        "TREACHERY_(UA)": {
          "title": "Treachery",
          "restrictions": [
            
          ],
          "details": [
            "The Oath of Treachery is the path followed by paladins who have forsworn other oaths or who care only for their own power and survival. Commonly known as blackguards, these profane warriors are faithful only to themselves. Anyone desperate enough to follow one of these paladins does so because, while deceitful, these paladins command great power. Those who follow them without falling prey to their treachery hope to indulge in wanton violence and accumulate great treasure.",
            "Many of these paladins pay homage to demon lords, especially Grazz\u2019t and Orcus. Even the Lords of Hell are loath to ally with these champions of chaos, but sometimes Baalzebul and Glasya find a kindred spirit in a blackguard\u2019s penchant for double dealing and treachery"
          ],
          "features": [
            [
              {
                "name": "Tenets of Treachery",
                "id": 37
              },
              {
                "name": "Oath Spells",
                "id": 38
              },
              {
                "name": "Channel Divinity",
                "id": 39
              }
            ],
            [
              {
                "name": "Aura of Treachery",
                "id": 40
              }
            ],
            [
              {
                "name": "Blackguard's Escape",
                "id": 41
              }
            ],
            [
              {
                "name": "Icon of Deceit",
                "id": 42
              }
            ]
          ]
        },
        "VENGEANCE": {
          "title": "Vengeance",
          "restrictions": [
            
          ],
          "details": [
            "The Oath of Vengeance is a solemn commitment to punish those who have committed a grievous sin. When evil forces slaughter helpless villagers, when an entire people turns against the will of the gods, when a thieves' guild grows too violent and powerful, when a dragon rampages through the countryside \u2013\u00a0at times like these, paladins arise and swear an Oath of Vengeance to set right that which has gone wrong. To these paladins \u2013\u00a0sometimes called avengers or dark knights \u2013\u00a0their own purity is not as important as delivering justice."
          ],
          "features": [
            [
              {
                "name": "Tenets of Vengeance",
                "id": 43
              },
              {
                "name": "Oath Spells",
                "id": 44
              },
              {
                "name": "Channel Divinity",
                "id": 45
              }
            ],
            [
              {
                "name": "Relentless Avenger",
                "id": 46
              }
            ],
            [
              {
                "name": "Soul of Vengeance",
                "id": 47
              }
            ],
            [
              {
                "name": "Avenging Angel",
                "id": 48
              }
            ]
          ]
        },
        "OATHBREAKER": {
          "title": "Oathbreaker",
          "restrictions": [
            
          ],
          "details": [
            "An oathbreaker is a paladin who breaks their sacred oaths to pursue some dark ambition or serve an evil power. Whatever light burned in the paladin's heart been extinguished. Only darkness remains."
          ],
          "features": [
            [
              {
                "name": "Oath Spells",
                "id": 49
              },
              {
                "name": "Channel Divinity",
                "id": 50
              }
            ],
            [
              {
                "name": "Aura of Hate",
                "id": 51
              }
            ],
            [
              {
                "name": "Supernatural Resistance",
                "id": 52
              }
            ],
            [
              {
                "name": "Dread Lord",
                "id": 53
              }
            ]
          ]
        }
      }
    }
  },
  "RANGER": {
    "title": "Ranger",
    "route": "ranger",
    "image": "ranger.svg",
    "details": [
      "Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
      "**You must have a Dexterity score and a Wisdom score of 13 or higher in order to multiclass in or out of this class.**"
    ],
    "tym": [
      "will stop to pet random cats",
      "powered by coffee beans, camo pants, and bracelets",
      "spends hours reading random Wikipedia articles",
    ],
    "summary": "A versatile warrior who combats threats on the fringes of civilization, and an expert at navigating the wilderness.",
    "recommendedStats": [
      "Dexterity",
      "Wisdom"
    ],
    "spellcasting": {
      "details": [
        "By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See Spells Rules for the general rules of spellcasting and the Spells Listing for the ranger spell list."
      ],
      "preparing": [
        "The Ranger table shows how many spell slots you have to cast your ranger spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell\u2019s level or higher. You regain all expended spell slots when you finish a long rest.",
        "For example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot.",
        ""
      ],
      "ability": [
        "Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one."
      ],
      "mod": "WIS",
      "save": 8,
      "other": [
        {
          "title": "Spells Known of 1st Level and Higher",
          "text": "The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level. Starting from 2nd level, ou know two 1st-level spells of your choice from the ranger spell list."
        }
      ]
    },
    "hitDice": 10,
    equipment: [
      [Item(ARMOR.MEDIUM.SCALE_MAIL), Item(ARMOR.LIGHT.LEATHER)],
      [Item(WEAPONS.MARTIAL.MELEE.SHORTSWORD, 2), Item(WEAPONS.SIMPLE.MELEE, 2)],
      [Item(ITEMS.STARTER_PACK.DUNGEONEER), Item(ITEMS.STARTER_PACK.EXPLORER)],
      [[Item(WEAPONS.MARTIAL.RANGED.LONGBOW), Item(ITEMS.AMMUNITION.ARROW, 20)]]
    ],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.SHIELDS],
      weapons: [WEAPONS.SIMPLE, WEAPONS.MARTIAL],
      savingThrows: [STATS.STR, STATS.DEX],
      tools: [],
      skills: {
        choose: 3,
        options: [
          SKILLS.ANIMAL_HANDLING, 
          SKILLS.ATHLETICS, 
          SKILLS.INSIGHT, 
          SKILLS.INVESTIGATION, 
          SKILLS.NATURE, 
          SKILLS.PERCEPTION, 
          SKILLS.STEALTH, 
          SKILLS.SURVIVAL
        ]
      }
    },
    "asi": [
      4,
      8,
      12,
      16,
      19
    ],
    "levelTable": {
      "title": "The Ranger",
      "rows": [
        {
          "key": 2,
          "level": "1st",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Favored Enemy",
              "id": 0
            },
            {
              "name": "Natural Explorer",
              "id": 1
            }
          ],
          "spellsKnown": "-",
          "1st": "-",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 3,
          "level": "2nd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Fighting Style",
              "id": 2
            },
            {
              "name": "Spellcasting",
              "id": 3
            }
          ],
          "spellsKnown": "2",
          "1st": "2",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 4,
          "level": "3rd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Primeval Awareness",
              "id": 4
            },
            {
              "name": "Ranger Conclave",
              "id": 5
            }
          ],
          "spellsKnown": "3",
          "1st": "3",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 5,
          "level": "4th",
          "proficiencyBonus": "+2",
          "features": [
            
          ],
          "spellsKnown": "3",
          "1st": "3",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 6,
          "level": "5th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "spellsKnown": "4",
          "1st": "4",
          "2nd": "2",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 7,
          "level": "6th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Greater Favored Enemy",
              "id": 7
            }
          ],
          "spellsKnown": "4",
          "1st": "4",
          "2nd": "2",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 8,
          "level": "7th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "spellsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 9,
          "level": "8th",
          "proficiencyBonus": "+3",
          "features": [
            {
              "name": "Fleet of Foot",
              "id": 8
            }
          ],
          "spellsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "-",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 10,
          "level": "9th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "spellsKnown": "6",
          "1st": "4",
          "2nd": "3",
          "3rd": "2",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 11,
          "level": "10th",
          "proficiencyBonus": "+4",
          "features": [
            {
              "name": "Hide in Plain Sight",
              "id": 9
            }
          ],
          "spellsKnown": "6",
          "1st": "4",
          "2nd": "3",
          "3rd": "2",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 12,
          "level": "11th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "spellsKnown": "7",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 13,
          "level": "12th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "spellsKnown": "7",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "-",
          "5th": "-"
        },
        {
          "key": 14,
          "level": "13th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "spellsKnown": "8",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "1",
          "5th": "-"
        },
        {
          "key": 15,
          "level": "14th",
          "proficiencyBonus": "+5",
          "features": [
            {
              "name": "Vanish",
              "id": 10
            }
          ],
          "spellsKnown": "8",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "1",
          "5th": "-"
        },
        {
          "key": 16,
          "level": "15th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "spellsKnown": "9",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "2",
          "5th": "-"
        },
        {
          "key": 17,
          "level": "16th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "spellsKnown": "9",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "2",
          "5th": "-"
        },
        {
          "key": 18,
          "level": "17th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "spellsKnown": "10",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "1"
        },
        {
          "key": 19,
          "level": "18th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Feral Senses",
              "id": 11
            }
          ],
          "spellsKnown": "10",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "1"
        },
        {
          "key": 20,
          "level": "19th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "spellsKnown": "11",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2"
        },
        {
          "key": 21,
          "level": "20th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Foe Slayer",
              "id": 12
            }
          ],
          "spellsKnown": "11",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2"
        }
      ],
      "columns": [
        {
          "title": "Level",
          "dataIndex": "level",
          "key": "level",
          "align": "center"
        },
        {
          "title": "Proficiency Bonus",
          "dataIndex": "proficiencyBonus",
          "key": "proficiencyBonus",
          "align": "center"
        },
        {
          "title": "Features",
          "dataIndex": "features",
          "key": "features",
          "align": "center"
        },
        {
          "title": "Spells Known",
          "dataIndex": "spellsKnown",
          "key": "spellsKnown",
          "align": "center"
        },
        {
          "title": "Spell Slots per Spell Level",
          "dataIndex": "spellSlotsPerSpellLevel",
          "key": "spellSlotsPerSpellLevel",
          "children": [
            {
              "title": "1st",
              "dataIndex": "1st",
              "key": "1st",
              "align": "center"
            },
            {
              "title": "2nd",
              "dataIndex": "2nd",
              "key": "2nd",
              "align": "center"
            },
            {
              "title": "3rd",
              "dataIndex": "3rd",
              "key": "3rd",
              "align": "center"
            },
            {
              "title": "4th",
              "dataIndex": "4th",
              "key": "4th",
              "align": "center"
            },
            {
              "title": "5th",
              "dataIndex": "5th",
              "key": "5th",
              "align": "center"
            }
          ],
          "align": "center"
        }
      ],
      "featuresIndex": 2
    },
    "features": [
      {
        "title": "Favored Enemy",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy commonly encountered in the wilds.",
          "Choose a type of favored enemy: beasts, fey, humanoids, monstrosities, or undead. You gain a +2 bonus to damage rolls with weapon attacks against creatures of the chosen type. Additionally, you have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
          "When you gain this feature, you also learn one language of your choice, typically one spoken by your favored enemy or creatures associated with it. However, you are free to pick any language you wish to learn."
        ]
      },
      {
        "title": "Natural Explorer",
        "isSubclassFeature": false,
        "details": [
          "You are a master of navigating the natural world, and you react with swift and decisive action when attacked. This grants you the following benefits:",
          "\u2022 You ignore difficult terrain.",
          "\u2022 You have advantage on initiative rolls.",
          "\u2022 On your first turn during combat, you have advantage on attack rolls against creatures that have not yet acted.",
          "In addition, you are skilled at navigating the wilderness. You gain the following benefits when traveling for an hour or more:",
          "\u2022 Difficult terrain doesn\u2019t slow your group\u2019s travel.",
          "\u2022 Your group can\u2019t become lost except by magical means.",
          "\u2022 Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
          "\u2022 If you are traveling alone, you can move stealthily at a normal pace.",
          "\u2022 When you forage, you find twice as much food as you normally would.",
          "\u2022 While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area."
        ]
      },
      {
        "title": "Fighting Style",
        "isSubclassFeature": false,
        "details": [
          "At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
          "**At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.**",
          "You gain a +2 bonus to attack rolls you make with ranged weapons.",
          "**You gain a +2 bonus to attack rolls you make with ranged weapons.**",
          "When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.",
          "**When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.**",
          "While you are wearing armor, you gain a +1 bonus to AC.",
          "**While you are wearing armor, you gain a +1 bonus to AC.**",
          "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
          "**When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.**",
          "As long as you not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to armor class.",
          "**As long as you not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to armor class.**",
          "As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach.",
          "**As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach.**",
          "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
        ]
      },
      {
        "title": "Spellcasting",
        "isSubclassFeature": false,
        "details": [
          "By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does.",
          "**By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does.**",
          "The Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
          "For example, if you know the 1st-level spell Animal Friendship and have a 1st-level and a 2nd-level spell slot available, you can cast Animal Friendship using either slot.",
          "**For example, if you know the 1st-level spell Animal Friendship and have a 1st-level and a 2nd-level spell slot available, you can cast Animal Friendship using either slot.**",
          "You know two 1st-level spells of your choice from the ranger spell list.\nThe Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.",
          "Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.",
          "**Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.**",
          "Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.",
          "**Spell save DC** = 8 + your proficiency bonus + your Wisdom modifier",
          "**Spell attack modifier** = your proficiency bonus + your Wisdom modifier"
        ]
      },
      {
        "title": "Primeval Awareness",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 3rd level, your mastery of ranger lore allows you to establish a powerful link to beasts and to the land around you.",
          "You have an innate ability to communicate with beasts, and they recognize you as a kindred spirit. Through sounds and gestures, you can communicate simple ideas to a beast as an action, and can read its basic mood and intent. You learn its emotional state, whether it is affected by magic of any sort, its short-term needs (such as food or safety), and actions you can take (if any) to persuade it to not attack.",
          "You cannot use this ability against a creature that you have attacked within the past 10 minutes.",
          "Additionally, you can attune your senses to determine if any of your favored enemies lurk nearby. By spending 1 uninterrupted minute in concentration (as if you were concentrating on a spell), you can sense whether any of your favored enemies are present within 5 miles of you. This feature reveals which of your favored enemies are present, their numbers, and the creatures\u2019 general direction and distance (in miles) from you.",
          "If there are multiple groups of your favored enemies within range, you learn this information for each group."
        ]
      },
      {
        "title": "Ranger Conclave",
        "isSubclassFeature": false,
        "details": [
          "At 3rd level, you choose to emulate the ideals and training of a ranger conclave:\n\u2022\u00a0Beast Master\n\u2022\u00a0Gloom Stalker\n\u2022\u00a0Horizon Walker\n\u2022\u00a0Hunter\n\u2022\u00a0Monster Slayer\n\u2022\u00a0Primeval Guardian (UA)\nYour choice grants you features at 3rd level and again at 7th, 11th, and 15th level."
        ]
      },
      {
        "title": "Ability Score Improvement",
        "isSubclassFeature": false,
        "details": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      {
        "title": "Greater Favored Enemy",
        "isSubclassFeature": false,
        "details": [
          "At 6th level, you are ready to hunt even deadlier game. Choose a type of greater favored enemy: aberrations, celestials, constructs, dragons, elementals, fiends, or giants. You gain all the benefits against this chosen enemy that you normally gain against your favored enemy, including an additional language. Your bonus to damage rolls against all your favored enemies increases to +4.",
          "Additionally, you have advantage on saving throws against the spells and abilities used by a greater favored enemy."
        ]
      },
      {
        "title": "Fleet of Foot",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 8th level, you can use the Dash action as a bonus action on your turn."
        ]
      },
      {
        "title": "Hide in Plain Sight",
        "isSubclassFeature": false,
        "details": [
          "Starting at 10th level, you can remain perfectly still for long periods of time to set up ambushes.",
          "When you attempt to hide on your turn, you can opt to not move on that turn. If you avoid moving, creatures that attempt to detect you take a \u221210 penalty to their Wisdom (Perception) checks until the start of your next turn. You lose this benefit if you move or fall prone, either voluntarily or because of some external effect. You are still automatically detected if any effect or action causes you to no longer be hidden.",
          "If you are still hidden on your next turn, you can continue to remain motionless and gain this benefit until you are detected."
        ]
      },
      {
        "title": "Vanish",
        "isSubclassFeature": false,
        "details": [
          "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail."
        ]
      },
      {
        "title": "Feral Senses",
        "isSubclassFeature": false,
        "details": [
          "At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it.",
          "You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened."
        ]
      },
      {
        "title": "Foe Slayer",
        "isSubclassFeature": false,
        "details": [
          "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
        ]
      },
      {
        "title": "Animal Companion",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you learn to use your magic to create a powerful bond with a creature of the natural world.",
          "With 8 hours of work and the expenditure of 50 gp worth of rare herbs and fine food, you call forth an animal from the wilderness to serve as your faithful companion. You normally select you companion from among the following animals: an ape, a black bear, a boar, a giant badger, a giant weasel, a mule, a panther, or a wolf. However, your DM might pick one of these animals for you, based on the surrounding terrain and on what types of creatures would logically be present in the area.",
          "At the end of the 8 hours, your animal companion appears and gains all the benefits of your Companion\u2019s Bond ability. You can have only one animal companion at a time.",
          "If your animal companion is ever slain, the magical bond you share allows you to return it to life. With 8 hours of work and the expenditure of 25 gp worth of rare herbs and fine food, you call forth your companion\u2019s spirit and use your magic to create a new body for it. You can return an animal companion to life in this manner even if you do not possess any part of its body.",
          "If you use this ability to return a former animal companion to life while you have a current animal companion, your current companion leaves you and is replaced by the restored companion."
        ]
      },
      {
        "title": "Companion's Bond",
        "isSubclassFeature": true,
        "details": [
          "Your animal companion gains a variety of benefits while it is linked to you.",
          "The animal companion loses its Multiattack action, if it has one.",
          "The companion obeys your commands as best it can. It rolls for initiative like any other creature, but you determine its actions, decisions, attitudes, and so on. If you are incapacitated or absent, your companion acts on its own.",
          "When using your Natural Explorer feature, you and your animal companion can both move stealthily at a normal pace.",
          "Your animal companion has abilities and game statistics determined in part by your level. Your companion uses your proficiency bonus rather than its own. In addition to the areas where it normally uses its proficiency bonus, an animal companion also adds its proficiency bonus to its AC and to its damage rolls.",
          "Your animal companion gains proficiency in two skills of your choice. It also becomes proficient with all saving throws.",
          "For each level you gain after 3rd, your animal companion gains an additional hit die and increases its hit points accordingly.",
          "Whenever you gain the Ability Score Improvement class feature, your companion\u2019s abilities also improve. Your companion can increase one ability score of your choice by 2, or it can increase two ability scores of your choice by 1. As normal, your companion can\u2019t increase an ability score above 20 using this feature unless its description specifies otherwise.",
          "Your companion shares your alignment, and has a personality trait and a flaw that you can roll for or select from the tables below. Your companion shares your ideal, and its bond is always, \u201cThe ranger who travels with me is a beloved companion for whom I would gladly give my life.\u201d",
          "Your animal companion gains the benefits of your Favored Enemy feature, and of your Greater Favored Enemy feature when you gain that feature at 6th level. It uses the favored enemies you selected for those features.",
          {
            "title": null,
            "rows": [
              {
                "key": 1,
                "d6": "1",
                "trait": "I\u2019m dauntless in the face of adversity."
              },
              {
                "key": 2,
                "d6": "2",
                "trait": "Threaten my friends, threaten me."
              },
              {
                "key": 3,
                "d6": "3",
                "trait": "I stay on alert so others can rest."
              },
              {
                "key": 4,
                "d6": "4",
                "trait": "People see an animal and underestimate me. I use that to my advantage."
              },
              {
                "key": 5,
                "d6": "5",
                "trait": "I have a knack for showing up in the nick of time."
              },
              {
                "key": 6,
                "d6": "6",
                "trait": "I put my friends\u2019 needs before my own in all things."
              }
            ],
            "columns": [
              {
                "title": "d6",
                "dataIndex": "d6",
                "key": "d6"
              },
              {
                "title": "Trait",
                "dataIndex": "trait",
                "key": "trait"
              }
            ]
          },
          {
            "title": null,
            "rows": [
              {
                "key": 1,
                "d6": "1",
                "flaw": "If there\u2019s food left unattended, I\u2019ll eat it."
              },
              {
                "key": 2,
                "d6": "2",
                "flaw": "I growl at strangers, and all people except my ranger are strangers to me."
              },
              {
                "key": 3,
                "d6": "3",
                "flaw": "Any time is a good time for a belly rub."
              },
              {
                "key": 4,
                "d6": "4",
                "flaw": "I\u2019m deathly afraid of water."
              },
              {
                "key": 5,
                "d6": "5",
                "flaw": "My idea of hello is a flurry of licks to the face."
              },
              {
                "key": 6,
                "d6": "6",
                "flaw": "I jump on creatures to tell them how much I love them."
              }
            ],
            "columns": [
              {
                "title": "d6",
                "dataIndex": "d6",
                "key": "d6"
              },
              {
                "title": "Flaw",
                "dataIndex": "flaw",
                "key": "flaw"
              }
            ]
          }
        ]
      },
      {
        "title": "Coordinated Attack",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 5th level, you and your animal companion form a more potent fighting team. When you use the Attack action on your turn, if your companion can see you, it can use its reaction to make a melee attack."
        ]
      },
      {
        "title": "Beast's Defense",
        "isSubclassFeature": true,
        "details": [
          "At 7th level, while your companion can see you, it has advantage on all saving throws."
        ]
      },
      {
        "title": "Storm of Claws and Fangs",
        "isSubclassFeature": true,
        "details": [
          "At 11th level, your companion can use its action to make a melee attack against each creature of its choice within 5 feet of it, with a separate attack roll for each target."
        ]
      },
      {
        "title": "Superior Beast's Defense",
        "isSubclassFeature": true,
        "details": [
          "At 15th level, whenever an attacker that your companion can see hits it with an attack, it can use its reaction to halve the attack\u2019s damage against it."
        ]
      },
      {
        "title": "Gloom Stalker Magic",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Gloom Stalker Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
          {
            "title": "Gloom Stalker Spells",
            "rows": [
              {
                "key": 2,
                "rangerLevel": "3rd",
                "spells": "Disguise Self"
              },
              {
                "key": 3,
                "rangerLevel": "5th",
                "spells": "Rope Trick"
              },
              {
                "key": 4,
                "rangerLevel": "9th",
                "spells": "Fear"
              },
              {
                "key": 5,
                "rangerLevel": "13th",
                "spells": "Greater Invisibility"
              },
              {
                "key": 6,
                "rangerLevel": "17th",
                "spells": "Seeming"
              }
            ],
            "columns": [
              {
                "title": "Ranger Level",
                "dataIndex": "rangerLevel",
                "key": "rangerLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Dread Ambusher",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you master the art of the ambush. You can give yourself a bonus to your initiative rolls equal to your Wisdom modifier.",
          "At the start of your first turn of each combat, your walking speed increases by 10 feet, which lasts until the end of that turn. If you take the Attack action on that turn, you can make one additional weapon attack as part of that action. If that attack hits, the target takes an extra 1d8 damage of the weapon's damage type."
        ]
      },
      {
        "title": "Umbral Sight",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you gain darkvision out to a range of 60 feet. If you already have darkvision from your race, its range increases by 30 feet.",
          "You are also adept at evading creatures that rely on darkvision. While in darkness, you are invisible to any creature that relies on darkvision to see you in that darkness."
        ]
      },
      {
        "title": "Extra Attack",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      {
        "title": "Iron Mind",
        "isSubclassFeature": true,
        "details": [
          "By 7th level, you have honed your ability to resist the mind-altering powers of your prey. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice)."
        ]
      },
      {
        "title": "Stalker's Flurry",
        "isSubclassFeature": true,
        "details": [
          "At 11th level, you learn to attack with such unexpected speed that you can turn a miss into another strike. Once on each of your turns when you miss with a weapon attack, you can make another weapon attack as part of the same action."
        ]
      },
      {
        "title": "Shadowy Dodge",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, you can dodge in unforeseen ways, with wisps of supernatural shadow around you. Whenever a creature makes an attack roll against you and doesn't have advantage on the roll, you can use your reaction to impose disadvantage on it. You must use this feature before you know the outcome of the attack roll."
        ]
      },
      {
        "title": "Horizon Walker Magic",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Horizon Walker Spells table. The spell counts as a ranger spell for you, but it doesn\u2019t count against the number of ranger spells you know.",
          {
            "title": "Horizon Walker Spells",
            "rows": [
              {
                "key": 2,
                "rangerLevel": "3rd",
                "spells": "Protection from Evil and Good"
              },
              {
                "key": 3,
                "rangerLevel": "5th",
                "spells": "Misty Step"
              },
              {
                "key": 4,
                "rangerLevel": "9th",
                "spells": "Haste"
              },
              {
                "key": 5,
                "rangerLevel": "13th",
                "spells": "Banishment"
              },
              {
                "key": 6,
                "rangerLevel": "17th",
                "spells": "Teleportation Circle"
              }
            ],
            "columns": [
              {
                "title": "Ranger Level",
                "dataIndex": "rangerLevel",
                "key": "rangerLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Detect Portal",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you gain the ability to magically sense the presence of a planar portal. As an action, you detect the distance and direction to the closest planar portal within 1 mile of you.",
          "Once you use this feature, you can't use it again until you finish a short or long rest.",
          "See the \"Planar Travel\" section in chapter 2 of the Dungeon Master's Guide for examples of planar portals."
        ]
      },
      {
        "title": "Planar Warrior",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you learn to draw on the energy of the multiverse to augment your attacks.",
          "As a bonus action, choose one creature you can see within 30 feet of you. The next time you hit that creature on this turn with a weapon attack, all damage dealt by the attack becomes force damage, and the creature takes an extra 1d8 force damage from the attack. When you reach 11th level in this class, the extra damage increases to 2d8."
        ]
      },
      {
        "title": "Ethereal Step",
        "isSubclassFeature": true,
        "details": [
          "At 7th level, you learn to step through the Ethereal Plane. As a bonus action on your turn, you can cast the Etherealness spell with this feature, without expending a spell slot, but the spell ends at the end of the current turn.",
          "Once you use this feature, you can\u2019t use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Distant Strike",
        "isSubclassFeature": true,
        "details": [
          "At 11th level, you gain the ability to pass between the planes in a blink of an eye. When you use the Attack action, you can teleport up to 10 feet before each attack to an unoccupied space you can see.",
          "If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature."
        ]
      },
      {
        "title": "Spectral Defense",
        "isSubclassFeature": true,
        "details": [
          "At 15th level, your ability to move between planes enables you to slip through the planar boundaries to lessen the harm done to you during battle. When you take damage from an attack, you can use your reaction to give yourself resistance to all of that attack's damage on this turn."
        ]
      },
      {
        "title": "Hunter's Prey",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you gain one of the following features of your choice.",
          "Colossus Slayer",
          "Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it\u2019s below its hit point maximum. You can deal this extra damage only once per turn.",
          "Giant Killer",
          "When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.",
          "Horde Breaker",
          "Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
        ]
      },
      {
        "title": "Extra Attack",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      {
        "title": "Defensive Tactics",
        "isSubclassFeature": true,
        "details": [
          "At 7th level, you gain one of the following features of your choice.",
          "Escape the Horde",
          "Opportunity attacks against you are made with disadvantage.",
          "Multiattack Defense",
          "When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.",
          "Steel Will",
          "You have advantage on saving throws against being frightened."
        ]
      },
      {
        "title": "Multiattack",
        "isSubclassFeature": true,
        "details": [
          "At 11th level, you gain one of the following features of your choice.",
          "Volley",
          "You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon\u2019s range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target",
          "Whirlwind Attack",
          "You can use your action to make melee attacks against any number of creatures within 5 feet of you, with a separate attack roll for each target."
        ]
      },
      {
        "title": "Superior Hunter's Defense",
        "isSubclassFeature": true,
        "details": [
          "At 15th level, you gain one of the following features of your choice.",
          "Evasion",
          "When you are subjected to an effect, such as a red dragon\u2019s fiery breath or a lightning bolt spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on a saving throw, and only half damage if you fail",
          "Stand Against the Tide",
          "When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.",
          "Uncanny Dodge",
          "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack\u2019s damage against you."
        ]
      },
      {
        "title": "Monster Slayer Magic",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Monster Slayer Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
          {
            "title": "Monster Slayer Spells",
            "rows": [
              {
                "key": 2,
                "rangerLevel": "3rd",
                "spells": "Protection from Evil and Good"
              },
              {
                "key": 3,
                "rangerLevel": "5th",
                "spells": "Zone of Truth"
              },
              {
                "key": 4,
                "rangerLevel": "9th",
                "spells": "Magic Circle"
              },
              {
                "key": 5,
                "rangerLevel": "13th",
                "spells": "Banishment"
              },
              {
                "key": 6,
                "rangerLevel": "17th",
                "spells": "Hold Monster"
              }
            ],
            "columns": [
              {
                "title": "Ranger Level",
                "dataIndex": "rangerLevel",
                "key": "rangerLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Hunter's Sense",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you gain the ability to peer at a creature and magically discern how best to hurt it. As an action, choose one creature you can see within 60 feet of you. You immediately learn whether the creature has any damage immunities, resistances, or vulnerabilities and what they are. If the creature is hidden from divination magic, you sense that it has no damage immunities, resistances, or vulnerabilities.",
          "You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses of it when you finish a long rest."
        ]
      },
      {
        "title": "Slayer's Prey",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you can focus your ire on one foe, increasing the harm you inflict on it. As a bonus action, you designate one creature you can see within 60 feet of you as the target of this feature. The first time each turn that you hit that target with a weapon attack, it takes an extra 1d6 damage from the weapon.",
          "This benefit lasts until you finish a short or long rest. It ends early if you designate a different creature."
        ]
      },
      {
        "title": "Extra Attack",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      {
        "title": "Supernatural Defense",
        "isSubclassFeature": true,
        "details": [
          "At 7th level, you gain extra resilience against your prey\u2019s assaults on your mind and body. Whenever the target of your Slayer\u2019s Prey forces you to make a saving throw and whenever you make an ability check to escape that target's grapple, add 1d6 to your roll."
        ]
      },
      {
        "title": "Magic-User's Nemesis",
        "isSubclassFeature": true,
        "details": [
          "At 11th level, you gain the ability to thwart someone else's magic. When you see a creature casting a spell or teleporting within 60 feet of you, you can use your reaction to try to magically foil it. The creature must succeed on a Wisdom saving throw against your spell save DC, or its spell or teleport fails and is wasted.",
          "Once you use this feature, you can't use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Slayer's Counter",
        "isSubclassFeature": true,
        "details": [
          "At 15th level, you gain the ability to counterattack when your prey tries to sabotage you. If the target of your Slayer\u2019s Prey forces you to make a saving throw, you can use your reaction to make one weapon attack against the quarry. You make this attack immediately before making the saving throw. If the attack hits, your save automatically succeeds, in addition to the attack\u2019s normal effects."
        ]
      },
      {
        "title": "Guardian Magic",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Primeval Guardian Spells table. The spell counts as a ranger spell for you, and it doesn\u2019t count against the number of ranger spells you know.",
          {
            "title": "Primeval Guardian Spells",
            "rows": [
              {
                "key": 2,
                "rangerLevel": "3rd",
                "spells": "Entangle"
              },
              {
                "key": 3,
                "rangerLevel": "5th",
                "spells": "Enhance Ability"
              },
              {
                "key": 4,
                "rangerLevel": "9th",
                "spells": "Conjure Animals"
              },
              {
                "key": 5,
                "rangerLevel": "13th",
                "spells": "Giant Insect"
              },
              {
                "key": 6,
                "rangerLevel": "17th",
                "spells": "Insect Plague"
              }
            ],
            "columns": [
              {
                "title": "Ranger Level",
                "dataIndex": "rangerLevel",
                "key": "rangerLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Guardian Soul",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you gain the ability to temporarily grow and take on the appearance of a treelike person, covered with leaves and bark. As a bonus action, you assume this guardian form, which lasts until you end it as a bonus action or until you are incapacitated.",
          "You undergo the following changes while in your guardian form:",
          "\u2022 Your size becomes Large, unless you were larger.",
          "\u2022 Any speed you have becomes 5 feet, unless the speed was lower.",
          "\u2022 Your reach increases by 5 feet.",
          "\u2022 You gain a number of temporary hit points at the start of each of your turns. The number equals half your ranger level. When the form ends, you lose any temporary hit points you have from it."
        ]
      },
      {
        "title": "Piercing Thorns",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, your command of primal magic allows you to enhance your attacks with thorns. Once during each of your turns, you can deal an additional 1d6 piercing damage to one creature you hit with a weapon attack."
        ]
      },
      {
        "title": "Ancient Fortitude",
        "isSubclassFeature": true,
        "details": [
          "At 7th level, you gain the endurance of the ancient forests. Your hit point maximum and current hit points increase by 2 per ranger level when you assume your guardian form. This increase lasts until you leave the form; your hit point maximum then returns to normal, but your current hit points remain the same, unless they must decrease to abide by your hit point maximum"
        ]
      },
      {
        "title": "Rooted Defense",
        "isSubclassFeature": true,
        "details": [
          "At 11th level, you gain the ability to twist and turn the ground beneath you. While you are in your guardian form, the ground within 30 feet of you is difficult terrain for your enemies."
        ]
      },
      {
        "title": "Guardian Aura",
        "isSubclassFeature": true,
        "details": [
          "Starting at 15th level, your guardian form emanates a magical aura that fortifies your injured allies. When any ally starts their turn within 30 feet of your guardian form, that ally regains a number of hit points equal to half your ranger level. This aura has no effect on a creature that has half or more of its hit points, and it has no effect on undead and constructs."
        ]
      }
    ],
    "subclass": {
      "title": "Ranger Conclave",
      "prefix": null,
      "suffix": " Conclave",
      "levels": [
        3,
        5,
        7,
        11,
        15
      ],
      "archetypes": {
        "BEAST_MASTER": {
          "title": "Beast Master",
          "restrictions": [
            
          ],
          "details": [
            "Many rangers are more at home in the wilds than in civilization, to the point where animals consider them kin. Rangers of the Beast Conclave develop a close bond with a beast, then further strengthen that bond through the use of magic."
          ],
          "features": [
            [
              {
                "name": "Animal Companion",
                "id": 13
              },
              {
                "name": "Companion's Bond",
                "id": 14
              }
            ],
            [
              {
                "name": "Coordinated Attack",
                "id": 15
              }
            ],
            [
              {
                "name": "Beast's Defense",
                "id": 16
              }
            ],
            [
              {
                "name": "Storm of Claws and Fangs",
                "id": 17
              }
            ],
            [
              {
                "name": "Superior Beast's Defense",
                "id": 18
              }
            ]
          ]
        },
        "GLOOM_STALKER": {
          "title": "Gloom Stalker",
          "restrictions": [
            
          ],
          "details": [
            "Gloom stalkers are at home in the darkest places: deep under the earth, in gloomy alleyways, in primeval forests, and wherever else the light dims. Most folk enter such places with trepidation, but a gloom stalker ventures boldly into the darkness, seeking to ambush threats before they can reach the broader world. Such rangers are often found in the Underdark, but they will go any place where evil lurks in the shadows."
          ],
          "features": [
            [
              {
                "name": "Gloom Stalker Magic",
                "id": 19
              },
              {
                "name": "Dread Ambusher",
                "id": 20
              },
              {
                "name": "Umbral Sight",
                "id": 21
              }
            ],
            [
              {
                "name": "Extra Attack",
                "id": 22
              }
            ],
            [
              {
                "name": "Iron Mind",
                "id": 23
              }
            ],
            [
              {
                "name": "Stalker's Flurry",
                "id": 24
              }
            ],
            [
              {
                "name": "Shadowy Dodge",
                "id": 25
              }
            ]
          ]
        },
        "HORIZON_WALKER": {
          "title": "Horizon Walker",
          "restrictions": [
            
          ],
          "details": [
            "Horizon walkers guard the world against threats that originate from other planes or that seek to ravage the mortal realm with otherworldly magic. They seek out planar portals and keep watch over them, venturing to the Inner Planes and the Outer Planes as needed to pursue their foes. These rangers are also friends to any forces in the multiverse \u2013 especially benevolent dragons, fey, and elementals \u2013\u00a0that work to preserve life and the order of the planes."
          ],
          "features": [
            [
              {
                "name": "Horizon Walker Magic",
                "id": 26
              },
              {
                "name": "Detect Portal",
                "id": 27
              }
            ],
            [
              {
                "name": "Planar Warrior",
                "id": 28
              }
            ],
            [
              {
                "name": "Ethereal Step",
                "id": 29
              }
            ],
            [
              {
                "name": "Distant Strike",
                "id": 30
              }
            ],
            [
              {
                "name": "Spectral Defense",
                "id": 31
              }
            ]
          ]
        },
        "HUNTER": {
          "title": "Hunter",
          "restrictions": [
            
          ],
          "details": [
            "Some rangers seek to master weapons to better protect civilization from the terrors of the wilderness. Members of the Hunter Conclave learn specialized fighting techniques for use against the most dire threats, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons."
          ],
          "features": [
            [
              {
                "name": "Hunter's Prey",
                "id": 32
              }
            ],
            [
              {
                "name": "Extra Attack",
                "id": 33
              }
            ],
            [
              {
                "name": "Defensive Tactics",
                "id": 34
              }
            ],
            [
              {
                "name": "Multiattack",
                "id": 35
              }
            ],
            [
              {
                "name": "Superior Hunter's Defense",
                "id": 36
              }
            ]
          ]
        },
        "MONSTER_SLAYER": {
          "title": "Monster Slayer",
          "restrictions": [
            
          ],
          "details": [
            "You have dedicated yourself to hunting down creatures of the night and wielders of grim magic. A monster slayer seeks out vampires, dragons, evil fey, fiends, and other magical threats. Trained in supernatural techniques to overcome such monsters, slayers are experts at unearthing and defeating mighty, mystical foes."
          ],
          "features": [
            [
              {
                "name": "Monster Slayer Magic",
                "id": 37
              },
              {
                "name": "Hunter's Sense",
                "id": 38
              },
              {
                "name": "Slayer's Prey",
                "id": 39
              }
            ],
            [
              {
                "name": "Extra Attack",
                "id": 40
              }
            ],
            [
              {
                "name": "Supernatural Defense",
                "id": 41
              }
            ],
            [
              {
                "name": "Magic-User's Nemesis",
                "id": 42
              }
            ],
            [
              {
                "name": "Slayer's Counter",
                "id": 43
              }
            ]
          ]
        },
        "PRIMEVAL_GUARDIAN_(UA)": {
          "title": "Primeval Guardian",
          "restrictions": [
            
          ],
          "details": [
            "Rangers of the Primeval Guardian Conclave follow an ancient tradition rooted in powerful druidic magic. These rangers learn to become one with nature, allowing them to channel the aspects of various beasts and plants in order to overcome their foes.",
            "These rangers dwell in the elder forests of the world. They venture out only rarely, as they consider it their sacred duty to protect the druidic groves and ancient trees that saw the earliest days of the world."
          ],
          "features": [
            [
              {
                "name": "Guardian Magic",
                "id": 44
              },
              {
                "name": "Guardian Soul",
                "id": 45
              }
            ],
            [
              {
                "name": "Piercing Thorns",
                "id": 46
              }
            ],
            [
              {
                "name": "Ancient Fortitude",
                "id": 47
              }
            ],
            [
              {
                "name": "Rooted Defense",
                "id": 48
              }
            ],
            [
              {
                "name": "Guardian Aura",
                "id": 49
              }
            ]
          ]
        }
      }
    }
  },
  "ROGUE": {
    "title": "Rogue",
    "route": "rogue",
    "image": "rogue.svg",
    "details": [
      "Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
      "**You must have a Dexterity score of 13 or higher in order to multiclass in or out of this class.**"
    ],
    "tym": [
      "‘I am the danger’",
      "carries a knife 'just in case'",
      "likes: gold, murder; dislikes: being seen"
    ],
    "summary": "A scoundrel with trust issues who uses stealth and trickery to overcome obstacles and enemies.",
    "recommendedStats": [
      "Dexterity",
      "Intelligence",
      "Charisma"
    ],
    "spellcasting": false,
    "hitDice": 8,
    equipment: [
      [Item(WEAPONS.MARTIAL.MELEE.RAPIER), Item(WEAPONS.MARTIAL.MELEE.SHORTSWORD)],
      [[Item(WEAPONS.SIMPLE.RANGED.SHORTBOW), Item(ITEMS.AMMUNITION.ARROW, 20)], Item(WEAPONS.MARTIAL.MELEE.SHORTSWORD)],
      [Item(ITEMS.STARTER_PACK.BURGLAR), Item(ITEMS.STARTER_PACK.DUNGEONEER), Item(ITEMS.STARTER_PACK.EXPLORER)],
      [[Item(ARMOR.LIGHT.LEATHER), Item(WEAPONS.SIMPLE.MELEE.DAGGER, 2), Item(ITEMS.TOOLS.THIEVES)]]
    ],
    proficiencies: {
      armor: [ARMOR.LIGHT],
      weapons: [
        WEAPONS.SIMPLE, WEAPONS.MARTIAL.RANGED.HAND_CROSSBOW,
        WEAPONS.MARTIAL.MELEE.LONGSWORD, WEAPONS.MARTIAL.MELEE.RAPIER, WEAPONS.MARTIAL.MELEE.SHORTSWORD],
      savingThrows: [STATS.DEX, STATS.INT],
      tools: [ITEMS.TOOLS.THIEVES],
      skills: {
        choose: 4,
        options: [
          SKILLS.ACROBATICS, 
          SKILLS.ATHLETICS, 
          SKILLS.DECEPTION, 
          SKILLS.INSIGHT, 
          SKILLS.INTIMIDATION, 
          SKILLS.INVESTIGATION, 
          SKILLS.PERCEPTION, 
          SKILLS.PERFORMANCE, 
          SKILLS.PERSUASION, 
          SKILLS.SLEIGHT_OF_HAND, 
          SKILLS.STEALTH
        ]
      }
    },
    "asi": [
      4,
      8,
      10,
      12,
      16,
      19
    ],
    "levelTable": {
      "title": "The Rogue",
      "rows": [
        {
          "key": 2,
          "level": "1st",
          "proficiencyBonus": "+2",
          "sneakAttack": "1d6",
          "features": [
            {
              "name": "Expertise",
              "id": 0
            },
            {
              "name": "Sneak Attack",
              "id": 1
            },
            {
              "name": "Thieves' Cant",
              "id": 2
            }
          ]
        },
        {
          "key": 3,
          "level": "2nd",
          "proficiencyBonus": "+2",
          "sneakAttack": "1d6",
          "features": [
            {
              "name": "Cunning Action",
              "id": 3
            }
          ]
        },
        {
          "key": 4,
          "level": "3rd",
          "proficiencyBonus": "+2",
          "sneakAttack": "2d6",
          "features": [
            {
              "name": "Roguish Archetype",
              "id": 4
            }
          ]
        },
        {
          "key": 5,
          "level": "4th",
          "proficiencyBonus": "+2",
          "sneakAttack": "2d6",
          "features": [
            
          ]
        },
        {
          "key": 6,
          "level": "5th",
          "proficiencyBonus": "+3",
          "sneakAttack": "3d6",
          "features": [
            {
              "name": "Uncanny Dodge",
              "id": 6
            }
          ]
        },
        {
          "key": 7,
          "level": "6th",
          "proficiencyBonus": "+3",
          "sneakAttack": "3d6",
          "features": [
            {
              "name": "Expertise",
              "id": 0
            }
          ]
        },
        {
          "key": 8,
          "level": "7th",
          "proficiencyBonus": "+3",
          "sneakAttack": "4d6",
          "features": [
            {
              "name": "Evasion",
              "id": 7
            }
          ]
        },
        {
          "key": 9,
          "level": "8th",
          "proficiencyBonus": "+3",
          "sneakAttack": "4d6",
          "features": [
            
          ]
        },
        {
          "key": 10,
          "level": "9th",
          "proficiencyBonus": "+4",
          "sneakAttack": "5d6",
          "features": [
            
          ]
        },
        {
          "key": 11,
          "level": "10th",
          "proficiencyBonus": "+4",
          "sneakAttack": "5d6",
          "features": [
            
          ]
        },
        {
          "key": 12,
          "level": "11th",
          "proficiencyBonus": "+4",
          "sneakAttack": "6d6",
          "features": [
            {
              "name": "Reliable Talent",
              "id": 8
            }
          ]
        },
        {
          "key": 13,
          "level": "12th",
          "proficiencyBonus": "+4",
          "sneakAttack": "6d6",
          "features": [
            
          ]
        },
        {
          "key": 14,
          "level": "13th",
          "proficiencyBonus": "+5",
          "sneakAttack": "7d6",
          "features": [
            
          ]
        },
        {
          "key": 15,
          "level": "14th",
          "proficiencyBonus": "+5",
          "sneakAttack": "7d6",
          "features": [
            {
              "name": "Blindsense",
              "id": 9
            }
          ]
        },
        {
          "key": 16,
          "level": "15th",
          "proficiencyBonus": "+5",
          "sneakAttack": "8d6",
          "features": [
            {
              "name": "Slippery Mind",
              "id": 10
            }
          ]
        },
        {
          "key": 17,
          "level": "16th",
          "proficiencyBonus": "+5",
          "sneakAttack": "8d6",
          "features": [
            
          ]
        },
        {
          "key": 18,
          "level": "17th",
          "proficiencyBonus": "+6",
          "sneakAttack": "9d6",
          "features": [
            
          ]
        },
        {
          "key": 19,
          "level": "18th",
          "proficiencyBonus": "+6",
          "sneakAttack": "9d6",
          "features": [
            {
              "name": "Elusive",
              "id": 11
            }
          ]
        },
        {
          "key": 20,
          "level": "19th",
          "proficiencyBonus": "+6",
          "sneakAttack": "10d6",
          "features": [
            
          ]
        },
        {
          "key": 21,
          "level": "20th",
          "proficiencyBonus": "+6",
          "sneakAttack": "10d6",
          "features": [
            {
              "name": "Stroke of Luck",
              "id": 12
            }
          ]
        }
      ],
      "columns": [
        {
          "title": "Level",
          "dataIndex": "level",
          "key": "level",
          "align": "center"
        },
        {
          "title": "Proficiency Bonus",
          "dataIndex": "proficiencyBonus",
          "key": "proficiencyBonus",
          "align": "center"
        },
        {
          "title": "Sneak Attack",
          "dataIndex": "sneakAttack",
          "key": "sneakAttack",
          "align": "center"
        },
        {
          "title": "Features",
          "dataIndex": "features",
          "key": "features",
          "align": "center"
        }
      ],
      "featuresIndex": 3
    },
    "features": [
      {
        "title": "Expertise",
        "isSubclassFeature": false,
        "details": [
          "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
          "At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit."
        ]
      },
      {
        "title": "Sneak Attack",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.",
          "You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.",
          "The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
        ]
      },
      {
        "title": "Thieves' Cant",
        "isSubclassFeature": false,
        "details": [
          "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.",
          "In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
        ]
      },
      {
        "title": "Cunning Action",
        "isSubclassFeature": false,
        "details": [
          "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
        ]
      },
      {
        "title": "Roguish Archetype",
        "isSubclassFeature": false,
        "details": [
          "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities:\n\u2022\u00a0Arcane Trickster\n\u2022\u00a0Assassin\n\u2022\u00a0Inquisitive\n\u2022\u00a0Mastermind\n\u2022\u00a0Scout\n\u2022\u00a0Swashbuckler\n\u2022\u00a0Thief\nYour archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
        ]
      },
      {
        "title": "Ability Score Improvement",
        "isSubclassFeature": false,
        "details": [
          "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      {
        "title": "Uncanny Dodge",
        "isSubclassFeature": false,
        "details": [
          "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
        ]
      },
      {
        "title": "Evasion",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an Ice Storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
        ]
      },
      {
        "title": "Reliable Talent",
        "isSubclassFeature": false,
        "details": [
          "By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10."
        ]
      },
      {
        "title": "Blindsense",
        "isSubclassFeature": false,
        "details": [
          "Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you."
        ]
      },
      {
        "title": "Slippery Mind",
        "isSubclassFeature": false,
        "details": [
          "By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws."
        ]
      },
      {
        "title": "Elusive",
        "isSubclassFeature": false,
        "details": [
          "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated."
        ]
      },
      {
        "title": "Stroke of Luck",
        "isSubclassFeature": false,
        "details": [
          "At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.",
          "Once you use this feature, you can't use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Spellcasting",
        "isSubclassFeature": true,
        "details": [
          "When you reach 3rd level, you augment your martial prowess with the ability to cast spells.",
          "Cantrips",
          "You learn three cantrips: Mage Hand and two other cantrips of your choice from the wizard spell list. You learn another wizard cantrip of your choice at 10th level.",
          "Spell Slots",
          "The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
          "For example, if you know the 1st-level spell Charm Person and have a 1st-level and a 2nd-level spell slot available, you can cast Charm Person using either slot.",
          "Spells Known of 1st Level and Higher",
          "You know three 1st-level wizard spells of your choice, two of which you must choose from the enchantment and illusion spells on the wizard spell list.",
          "The Spells Known column of the Arcane Trickster Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an enchantment or illusion spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.",
          "The spells you learn at 8th, 14th, and 20th level can come from any school of magic.",
          "Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an enchantment or illusion spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic.",
          "Spellcasting Ability",
          "Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
          "**Spell save DC** = 8 + your proficiency bonus + your Intelligence modifier",
          "**Spell attack modifier** = your proficiency bonus + your Intelligence modifier"
        ]
      },
      {
        "title": "Mage Hand Legerdemain",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, when you cast Mage Hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it:",
          "\u2022 You can stow one object the hand is holding in a container worn or carried by another creature.",
          "\u2022 You can retrieve an object in a container worn or carried by another creature.",
          "\u2022 You can use thieves' tools to pick locks and disarm traps at range.",
          "You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check.",
          "In addition, you can use the bonus action granted by your Cunning Action to control the hand."
        ]
      },
      {
        "title": "Magical Ambush",
        "isSubclassFeature": true,
        "details": [
          "Starting at 9th level, if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn."
        ]
      },
      {
        "title": "Versatile Trickster",
        "isSubclassFeature": true,
        "details": [
          "At 13th level, you gain the ability to distract targets with your Mage Hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn."
        ]
      },
      {
        "title": "Spell Thief",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.",
          "Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn't need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed.",
          "Once you use this feature, you can't use it again until you finish a long rest."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you gain proficiency with the disguise kit and the poisoner's kit."
        ]
      },
      {
        "title": "Assassinate",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit."
        ]
      },
      {
        "title": "Infiltration Expertise",
        "isSubclassFeature": true,
        "details": [
          "Starting at 9th level, you can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can't establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and official- looking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants.",
          "Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to."
        ]
      },
      {
        "title": "Impostor",
        "isSubclassFeature": true,
        "details": [
          "At 13th level, you gain the ability to unerringly mimic another person's speech, writing, and behavior. You must spend at least three hours studying these three components of the person's behavior, listening to speech, examining handwriting, and observing mannerisms.",
          "Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection."
        ]
      },
      {
        "title": "Death Strike",
        "isSubclassFeature": true,
        "details": [
          "Starting at 17th level, you become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature."
        ]
      },
      {
        "title": "Ear for Deceit",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you develop a keen ear for picking out lies. Whenever you make a Wisdom (Insight) check to determine whether a creature is lying, treat a roll of 7 or lower on the d20 as an 8."
        ]
      },
      {
        "title": "Eye for Detail",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you can use a bonus action to make a Wisdom (Perception) check to spot a hidden creature or object or to make an Intelligence (Investigation) check to uncover or decipher clues."
        ]
      },
      {
        "title": "Insightful Fighting",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, you gain the ability to decipher an opponent\u2019s tactics and develop a counter to them. As a bonus action, you make a Wisdom (Insight) check against a creature you can see that isn\u2019t incapacitated, contested by the target\u2019s Charisma (Deception) check. If you succeed, you can use your Sneak Attack against that target even if you don't have advantage on the attack roll, but not if you have disadvantage on it.",
          "This benefit lasts for 1 minute or until you successfully use this feature against a different target."
        ]
      },
      {
        "title": "Steady Eye",
        "isSubclassFeature": true,
        "details": [
          "At 9th level, you gain advantage on any Wisdom (Perception) or Intelligence (Investigation) check if you move no more than half your speed on the same turn."
        ]
      },
      {
        "title": "Unerring Eye",
        "isSubclassFeature": true,
        "details": [
          "At 13th level, your senses are almost impossible to foil. As an action, you sense the presence of illusions, shapechangers not in their original form, and other magic designed to deceive the senses within 30 feet of you, provided you aren't blinded or deafened. You sense that an effect is attempting to trick you, but you gain no insight into what is hidden or into its true nature.",
          "You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
        ]
      },
      {
        "title": "Eye for Weakness",
        "isSubclassFeature": true,
        "details": [
          "At 17th level, you learn to exploit a creature\u2019s weaknesses by carefully studying its tactics and movement. While your Insightful Fighting feature applies to a creature, your Sneak Attack damage against that creature increases by 3d6."
        ]
      },
      {
        "title": "Master of Intrigue",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you gain proficiency with the disguise kit, the forgery kit, and one gaming set of your choice. You also learn two languages of your choice.",
          "Additionally, you can unerringly mimic the speech patterns and accent of a creature that you hear speak for at least 1 minute, enabling you to pass yourself off as a native speaker of a particular land, provided that you know the language."
        ]
      },
      {
        "title": "Master of Tactics",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you can use the Help action as a bonus action. Additionally, when you use the Help action to aid an ally in attacking a creature, the target of that attack can be within 30 feet of you, rather than 5 feet of you, if the target can see or hear you."
        ]
      },
      {
        "title": "Insightful Manipulator",
        "isSubclassFeature": true,
        "details": [
          "Starting at 9th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:",
          "\u2022 Intelligence score\n\u2022 Wisdom score\n\u2022\u00a0Charisma score\n\u2022 Class levels (if any)",
          "At the DM's option, you might also realize you know a piece of the creature's history or one of its personality traits, if it has any."
        ]
      },
      {
        "title": "Misdirection",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 13th level, you can sometimes cause another creature to suffer an attack meant for you. When you are targeted by an attack while a creature within 5 feet of you is granting you cover against that attack, you can use your reaction to have the attack target that creature instead of you."
        ]
      },
      {
        "title": "Soul of Deceit",
        "isSubclassFeature": true,
        "details": [
          "Starting at 17th level, your thoughts can't be read by telepathy or other means, unless you allow it. You can present false thoughts by making a Charisma (Deception) check contested by the mind reader's Wisdom (Insight) check.",
          "Additionally, no matter what you say, magic that would determine if you are telling the truth indicates you are being truthful if you so choose, and you can't be compelled to tell the truth by magic."
        ]
      },
      {
        "title": "Skirmisher",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you are difficult to pin down during a fight. You can move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn\u2019t provoke opportunity attacks."
        ]
      },
      {
        "title": "Survivalist",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you gain proficiency in the Nature and Survival skills if you don't already have it. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
        ]
      },
      {
        "title": "Superior Mobility",
        "isSubclassFeature": true,
        "details": [
          "At 9th level, your walking speed increases by 10 feet. If you have a climbing or swimming speed, this increase applies to that speed as well."
        ]
      },
      {
        "title": "Ambush Master",
        "isSubclassFeature": true,
        "details": [
          "Starting at 13th level, you excel at leading ambushes and acting first in a fight.",
          "You have advantage on initiative rolls. In addition, the first creature you hit during the first round of a combat becomes easier for you and others to strike; attack rolls against that target have advantage until the start of your next turn."
        ]
      },
      {
        "title": "Sudden Strike",
        "isSubclassFeature": true,
        "details": [
          "Starting at 17th level, you can strike with deadly speed. If you take the Attack action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but you can't use your Sneak Attack against the same target more than once in a turn."
        ]
      },
      {
        "title": "Fancy Footwork",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn."
        ]
      },
      {
        "title": "Rakish Audacity",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, your confidence propels you into battle. You can give yourself a bonus to your initiative rolls equal to your Charisma modifier.",
          "You also gain an additional way to use your Sneak Attack; you don't need advantage on the attack roll to use your Sneak Attack against a creature if you are within 5 feet of it, no other creatures are within 5 feet of you, and you don't have disadvantage on the attack roll. All the other rules for Sneak Attack still apply to you."
        ]
      },
      {
        "title": "Panache",
        "isSubclassFeature": true,
        "details": [
          "At 9th level, your charm becomes extraordinarily beguiling. As an action, you can make a Charisma (Persuasion) check contested by a creature's Wisdom (Insight) check. The creature must be able to hear you, and the two of you must share a language.",
          "If you succeed on the check and the creature is hostile to you, it has disadvantage on attack rolls against targets other than you and can't make opportunity attacks against targets other than you. This effect lasts for 1 minute, until one of your companions attacks the target or affects it with a spell, or until you and the target are more than 60 feet apart.",
          "If you succeed on the check and the creature isn't hostile to you, it is charmed by you for 1 minute. While charmed, it regards you as a friendly acquaintance. This effect ends immediately if you or your companions do anything harmful to it."
        ]
      },
      {
        "title": "Elegant Maneuver",
        "isSubclassFeature": true,
        "details": [
          "Starting at 13th level, you can use a bonus action on your turn to gain advantage on the next Dexterity (Acrobatics) or Strength (Athletics) check you make during the same turn."
        ]
      },
      {
        "title": "Master Duelist",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 17th level, your mastery of the blade lets you turn failure into success in combat. If you miss with an attack roll, you can roll it again with advantage. Once you do so, you can't use this feature again until you finish a short or long rest."
        ]
      },
      {
        "title": "Fast Hands",
        "isSubclassFeature": true,
        "details": [
          "Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action."
        ]
      },
      {
        "title": "Second-Story Work",
        "isSubclassFeature": true,
        "details": [
          "When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.",
          "In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier."
        ]
      },
      {
        "title": "Supreme Sneak",
        "isSubclassFeature": true,
        "details": [
          "Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn."
        ]
      },
      {
        "title": "Use Magic Device",
        "isSubclassFeature": true,
        "details": [
          "By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items."
        ]
      },
      {
        "title": "Thief's Reflexes",
        "isSubclassFeature": true,
        "details": [
          "When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised."
        ]
      }
    ],
    "subclass": {
      "title": "Roguish Archetype",
      "prefix": null,
      "suffix": null,
      "levels": [
        3,
        9,
        13,
        17
      ],
      "archetypes": {
        "ARCANE_TRICKSTER": {
          "title": "Arcane Trickster",
          "restrictions": [
            
          ],
          "details": [
            "Some rogues enhance their fine-honed skills of stealth and agility with magic, learning tricks of enchantment and illusion. These rogues include pickpockets and burglars, but also pranksters, mischief-makers, and a significant number of adventurers."
          ],
          "features": [
            [
              {
                "name": "Spellcasting",
                "id": 13
              },
              {
                "name": "Mage Hand Legerdemain",
                "id": 14
              }
            ],
            [
              {
                "name": "Magical Ambush",
                "id": 15
              }
            ],
            [
              {
                "name": "Versatile Trickster",
                "id": 16
              }
            ],
            [
              {
                "name": "Spell Thief",
                "id": 17
              }
            ]
          ]
        },
        "ASSASSIN": {
          "title": "Assassin",
          "restrictions": [
            
          ],
          "details": [
            "You focus your training on the grim art of death. Those who adhere to this archetype are diverse: hired killers, spies, bounty hunters, and even specially anointed priests trained to exterminate the enemies of their deity. Stealth, poison, and disguise help you eliminate your foes with deadly efficiency."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 18
              },
              {
                "name": "Assassinate",
                "id": 19
              }
            ],
            [
              {
                "name": "Infiltration Expertise",
                "id": 20
              }
            ],
            [
              {
                "name": "Impostor",
                "id": 21
              }
            ],
            [
              {
                "name": "Death Strike",
                "id": 22
              }
            ]
          ]
        },
        "INQUISITIVE": {
          "title": "Inquisitive",
          "restrictions": [
            
          ],
          "details": [
            "As an archetypal Inquisitive, you excel at rooting out secrets and unraveling mysteries. You rely on your sharp eye for detail, but also on your finely honed ability to read the words and deeds of other creatures to determine their true intent. You excel at defeating creatures that hide among and prey upon ordinary folk, and your mastery of lore and your sharp eye make you well equipped to expose and end hidden evils."
          ],
          "features": [
            [
              {
                "name": "Ear for Deceit",
                "id": 23
              },
              {
                "name": "Eye for Detail",
                "id": 24
              },
              {
                "name": "Insightful Fighting",
                "id": 25
              }
            ],
            [
              {
                "name": "Steady Eye",
                "id": 26
              }
            ],
            [
              {
                "name": "Unerring Eye",
                "id": 27
              }
            ],
            [
              {
                "name": "Eye for Weakness",
                "id": 28
              }
            ]
          ]
        },
        "MASTERMIND": {
          "title": "Mastermind",
          "restrictions": [
            
          ],
          "details": [
            "Your focus is on people and on the influence and secrets they have. Many spies, courtiers, and schemers follow this archetype, leading lives of intrigue. Words are your weapons as often as knives or poison, and secrets and favors are some of your favorite treasures."
          ],
          "features": [
            [
              {
                "name": "Master of Intrigue",
                "id": 29
              },
              {
                "name": "Master of Tactics",
                "id": 30
              }
            ],
            [
              {
                "name": "Insightful Manipulator",
                "id": 31
              }
            ],
            [
              {
                "name": "Misdirection",
                "id": 32
              }
            ],
            [
              {
                "name": "Soul of Deceit",
                "id": 33
              }
            ]
          ]
        },
        "SCOUT": {
          "title": "Scout",
          "restrictions": [
            
          ],
          "details": [
            "You are skilled in stealth and surviving far from the streets of a city, allowing you to scout ahead of your companions during expeditions. Rogues who embrace this archetype are at home in the wilderness and among barbarians and rangers, and many Scouts serve as the eyes and ears of war bands. Ambusher, spy, bounty hunter \u2013 these are just a few of the roles that Scouts assume as they range the world."
          ],
          "features": [
            [
              {
                "name": "Skirmisher",
                "id": 34
              },
              {
                "name": "Survivalist",
                "id": 35
              }
            ],
            [
              {
                "name": "Superior Mobility",
                "id": 36
              }
            ],
            [
              {
                "name": "Ambush Master",
                "id": 37
              }
            ],
            [
              {
                "name": "Sudden Strike",
                "id": 38
              }
            ]
          ]
        },
        "SWASHBUCKLER": {
          "title": "Swashbuckler",
          "restrictions": [
            
          ],
          "details": [
            "You focus your training on the art of the blade, relying on speed, elegance, and charm in equal parts. While some warriors are brutes clad in heavy armor, your method of fighting looks almost like a performance. Duelists and pirates typically belong to this archetype.",
            "A Swashbuckler excels in single combat, and can fight with two weapons while safely darting away from an opponent."
          ],
          "features": [
            [
              {
                "name": "Fancy Footwork",
                "id": 39
              },
              {
                "name": "Rakish Audacity",
                "id": 40
              }
            ],
            [
              {
                "name": "Panache",
                "id": 41
              }
            ],
            [
              {
                "name": "Elegant Maneuver",
                "id": 42
              }
            ],
            [
              {
                "name": "Master Duelist",
                "id": 43
              }
            ]
          ]
        },
        "THIEF": {
          "title": "Thief",
          "restrictions": [
            
          ],
          "details": [
            "You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ."
          ],
          "features": [
            [
              {
                "name": "Fast Hands",
                "id": 44
              },
              {
                "name": "Second-Story Work",
                "id": 45
              }
            ],
            [
              {
                "name": "Supreme Sneak",
                "id": 46
              }
            ],
            [
              {
                "name": "Use Magic Device",
                "id": 47
              }
            ],
            [
              {
                "name": "Thief's Reflexes",
                "id": 48
              }
            ]
          ]
        }
      }
    }
  },
  "SORCERER": {
    "title": "Sorcerer",
    "route": "sorcerer",
    "image": "sorcerer.svg",
    "details": [
      "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. No one chooses sorcery; the power chooses the sorcerer.",
      "**You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.**"
    ],
    "tym": [
      "ritch bitch",
      "is old money, was born with their powers",
      "thinks they're the third coming of christ"
    ],
    "summary": "A spellcaster who draws on inherent magic from a gift or bloodline.",
    "recommendedStats": [
      "Charisma",
      "Constitution"
    ],
    "spellcasting": {
      "details": [
        "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the sorcerer spell list."
      ],
      "preparing": [
        "The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell\u2019s level or higher. You regain all expended spell slots when you finish a long rest.",
        "For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot."
      ],
      "ability": [
        "Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one."
      ],
      "mod": "CHA",
      "save": 8,
      "other": [
        {
          "title": "Spellcasting Focus",
          "text": "You can use an arcane focus (see the Adventuring Gear section) as a spellcasting focus for your sorcerer spells."
        }
      ]
    },
    "hitDice": 6,
    equipment: [
      [[Item(WEAPONS.SIMPLE.RANGED.LIGHT_CROSSBOW), Item(ITEMS.AMMUNITION.CROSSBOW_BOLT, 20)], Item(WEAPONS.SIMPLE)],
      [Item(ITEMS.ARCANE_SUPPLIES.COMPONENT_POUCH), Item(ITEMS.ARCANE_FOCUS)],
      [Item(ITEMS.STARTER_PACK.DUNGEONEER), Item(ITEMS.STARTER_PACK.EXPLORER)],
      [Item(WEAPONS.SIMPLE.MELEE.DAGGER, 2)]
    ],
    proficiencies: {
      armor: [ARMOR.LIGHT, ARMOR.MEDIUM, ARMOR.SHIELDS],
      weapons: [
        WEAPONS.SIMPLE.MELEE.DAGGER, WEAPONS.SIMPLE.RANGED.DART,
        WEAPONS.SIMPLE.MELEE.QUARTERSTAFF, WEAPONS.SIMPLE.RANGED.SLING
      ],
      tools: [ITEMS.TOOLS.HERBALISM],
      savingThrows: [STATS.CON, STATS.CHA],
      skills: {
        choose: 2,
        options: [
          SKILLS.ARCANA,
          SKILLS.DECEPTION,
          SKILLS.INSIGHT,
          SKILLS.INTIMIDATION,
          SKILLS.PERSUASION,
          SKILLS.RELIGION
        ]
      }
    },
    "asi": [
      4,
      8,
      12,
      16,
      19
    ],
    "levelTable": {
      "title": "The Sorcerer",
      "rows": [
        {
          "key": 2,
          "level": "1st",
          "proficiencyBonus": "+2",
          "sorceryPoints": "-",
          "features": [
            {
              "name": "Spellcasting",
              "id": 0
            },
            {
              "name": "Sorcerous Origin",
              "id": 1
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "2",
          "1st": "2",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 3,
          "level": "2nd",
          "proficiencyBonus": "+2",
          "sorceryPoints": "2",
          "features": [
            {
              "name": "Font of Magic",
              "id": 2
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "3",
          "1st": "3",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 4,
          "level": "3rd",
          "proficiencyBonus": "+2",
          "sorceryPoints": "3",
          "features": [
            {
              "name": "Metamagic",
              "id": 3
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "4",
          "1st": "4",
          "2nd": "2",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 5,
          "level": "4th",
          "proficiencyBonus": "+2",
          "sorceryPoints": "4",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "spellsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 6,
          "level": "5th",
          "proficiencyBonus": "+3",
          "sorceryPoints": "5",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "spellsKnown": "6",
          "1st": "4",
          "2nd": "3",
          "3rd": "2",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 7,
          "level": "6th",
          "proficiencyBonus": "+3",
          "sorceryPoints": "6",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "spellsKnown": "7",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 8,
          "level": "7th",
          "proficiencyBonus": "+3",
          "sorceryPoints": "7",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "spellsKnown": "8",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "1",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 9,
          "level": "8th",
          "proficiencyBonus": "+3",
          "sorceryPoints": "8",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "spellsKnown": "9",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "2",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 10,
          "level": "9th",
          "proficiencyBonus": "+4",
          "sorceryPoints": "9",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "spellsKnown": "10",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "1",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 11,
          "level": "10th",
          "proficiencyBonus": "+4",
          "sorceryPoints": "10",
          "features": [
            {
              "name": "Metamagic",
              "id": 3
            }
          ],
          "cantripsKnown": "6",
          "spellsKnown": "11",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 12,
          "level": "11th",
          "proficiencyBonus": "+4",
          "sorceryPoints": "11",
          "features": [
            
          ],
          "cantripsKnown": "6",
          "spellsKnown": "12",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 13,
          "level": "12th",
          "proficiencyBonus": "+4",
          "sorceryPoints": "12",
          "features": [
            
          ],
          "cantripsKnown": "6",
          "spellsKnown": "12",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 14,
          "level": "13th",
          "proficiencyBonus": "+5",
          "sorceryPoints": "13",
          "features": [
            
          ],
          "cantripsKnown": "6",
          "spellsKnown": "13",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 15,
          "level": "14th",
          "proficiencyBonus": "+5",
          "sorceryPoints": "14",
          "features": [
            
          ],
          "cantripsKnown": "6",
          "spellsKnown": "13",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 16,
          "level": "15th",
          "proficiencyBonus": "+5",
          "sorceryPoints": "15",
          "features": [
            
          ],
          "cantripsKnown": "6",
          "spellsKnown": "14",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "-"
        },
        {
          "key": 17,
          "level": "16th",
          "proficiencyBonus": "+5",
          "sorceryPoints": "16",
          "features": [
            
          ],
          "cantripsKnown": "6",
          "spellsKnown": "14",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "-"
        },
        {
          "key": 18,
          "level": "17th",
          "proficiencyBonus": "+6",
          "sorceryPoints": "17",
          "features": [
            {
              "name": "Metamagic",
              "id": 3
            }
          ],
          "cantripsKnown": "6",
          "spellsKnown": "15",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 19,
          "level": "18th",
          "proficiencyBonus": "+6",
          "sorceryPoints": "18",
          "features": [
            
          ],
          "cantripsKnown": "6",
          "spellsKnown": "15",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 20,
          "level": "19th",
          "proficiencyBonus": "+6",
          "sorceryPoints": "19",
          "features": [
            
          ],
          "cantripsKnown": "6",
          "spellsKnown": "15",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "2",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 21,
          "level": "20th",
          "proficiencyBonus": "+6",
          "sorceryPoints": "20",
          "features": [
            {
              "name": "Sorcerous Restoration",
              "id": 5
            }
          ],
          "cantripsKnown": "6",
          "spellsKnown": "15",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "2",
          "7th": "2",
          "8th": "1",
          "9th": "1"
        }
      ],
      "columns": [
        {
          "title": "Level",
          "dataIndex": "level",
          "key": "level",
          "align": "center"
        },
        {
          "title": "Proficiency Bonus",
          "dataIndex": "proficiencyBonus",
          "key": "proficiencyBonus",
          "align": "center"
        },
        {
          "title": "Sorcery Points",
          "dataIndex": "sorceryPoints",
          "key": "sorceryPoints",
          "align": "center"
        },
        {
          "title": "Features",
          "dataIndex": "features",
          "key": "features",
          "align": "center"
        },
        {
          "title": "Cantrips Known",
          "dataIndex": "cantripsKnown",
          "key": "cantripsKnown",
          "align": "center"
        },
        {
          "title": "Spells Known",
          "dataIndex": "spellsKnown",
          "key": "spellsKnown",
          "align": "center"
        },
        {
          "title": "Spell Slots per Spell Level",
          "dataIndex": "spellSlotsPerSpellLevel",
          "key": "spellSlotsPerSpellLevel",
          "children": [
            {
              "title": "1st",
              "dataIndex": "1st",
              "key": "1st",
              "align": "center"
            },
            {
              "title": "2nd",
              "dataIndex": "2nd",
              "key": "2nd",
              "align": "center"
            },
            {
              "title": "3rd",
              "dataIndex": "3rd",
              "key": "3rd",
              "align": "center"
            },
            {
              "title": "4th",
              "dataIndex": "4th",
              "key": "4th",
              "align": "center"
            },
            {
              "title": "5th",
              "dataIndex": "5th",
              "key": "5th",
              "align": "center"
            },
            {
              "title": "6th",
              "dataIndex": "6th",
              "key": "6th",
              "align": "center"
            },
            {
              "title": "7th",
              "dataIndex": "7th",
              "key": "7th",
              "align": "center"
            },
            {
              "title": "8th",
              "dataIndex": "8th",
              "key": "8th",
              "align": "center"
            },
            {
              "title": "9th",
              "dataIndex": "9th",
              "key": "9th",
              "align": "center"
            }
          ],
          "align": "center"
        }
      ],
      "featuresIndex": 3
    },
    "features": [
      {
        "title": "Spellcasting",
        "isSubclassFeature": false,
        "details": [
          "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.",
          "**An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.**",
          "At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.",
          "**At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.**",
          "The Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
          "For example, if you know the 1st-level spell Burning Hands and have a 1st-level and a 2nd-level spell slot available, you can cast Burning Hands using either slot.",
          "**For example, if you know the 1st-level spell Burning Hands and have a 1st-level and a 2nd-level spell slot available, you can cast Burning Hands using either slot.**",
          "You know two 1st-level spells of your choice from the sorcerer spell list.",
          "The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.",
          "Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.",
          "**Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.**",
          "Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.",
          "**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier",
          "**Spell attack modifier** = your proficiency bonus + your Charisma modifier",
          "****Spell attack modifier** = your proficiency bonus + your Charisma modifier**",
          "You can use an arcane focus as a spellcasting focus for your sorcerer spells."
        ]
      },
      {
        "title": "Sorcerous Origin",
        "isSubclassFeature": false,
        "details": [
          "Choose a sorcerous origin, which describes the source of your innate magical power:\n\u2022\u00a0Draconic Bloodline\n\u2022\u00a0Divine Soul\n\u2022\u00a0Giant Soul (UA)\n\u2022\u00a0Phoenix (UA)\n\u2022\u00a0Pyromancy (Kaladesh)\n\u2022\u00a0Sea (UA)\n\u2022\u00a0Shadow\n\u2022\u00a0Stone (UA)\n\u2022\u00a0Storm\n\u2022 Wild Magic\nThe following subclass is unofficial homebrew created by WOTC affiliated DM, Matthew Mercer:\n\u2022 Runechild\nYour choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
        ]
      },
      {
        "title": "Font of Magic",
        "isSubclassFeature": false,
        "details": [
          "At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.",
          "**At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.**",
          "You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.",
          "**You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.**",
          "You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.\n***Creating Spell Slots.*** You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. The created spell slots vanish at the end of a long rest.",
          {
            "title": "Creating Spell Slots",
            "rows": [
              {
                "key": 2,
                "spellSlotLevel": "1st",
                "sorceryPointCost": "2"
              },
              {
                "key": 3,
                "spellSlotLevel": "2nd",
                "sorceryPointCost": "3"
              },
              {
                "key": 4,
                "spellSlotLevel": "3rd",
                "sorceryPointCost": "5"
              },
              {
                "key": 5,
                "spellSlotLevel": "4th",
                "sorceryPointCost": "6"
              },
              {
                "key": 6,
                "spellSlotLevel": "5th",
                "sorceryPointCost": "7"
              }
            ],
            "columns": [
              {
                "title": "Spell Slot Level",
                "dataIndex": "spellSlotLevel",
                "key": "spellSlotLevel"
              },
              {
                "title": "Sorcery Point Cost",
                "dataIndex": "sorceryPointCost",
                "key": "sorceryPointCost"
              }
            ]
          },
          "***Converting a Spell Slot to Sorcery Points.*** As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level."
        ]
      },
      {
        "title": "Metamagic",
        "isSubclassFeature": false,
        "details": [
          "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
          "You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.",
          "**You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.**",
          "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.",
          "**When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.**",
          "When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.",
          "When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.",
          "**When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.**",
          "When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.",
          "You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.",
          "**You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.**",
          "When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.",
          "**When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.**",
          "When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.",
          "**When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.**",
          "When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.",
          "**When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.**",
          "When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.",
          "**When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.**",
          "When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip). To be eligible for Twinned Spell, a spell must be incapable of targeting more than one creature at the spell's current level."
        ]
      },
      {
        "title": "Ability Score Improvement",
        "isSubclassFeature": false,
        "details": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      {
        "title": "Sorcerous Restoration",
        "isSubclassFeature": false,
        "details": [
          "At 20th level, you regain 4 expended sorcery points whenever you finish a short rest."
        ]
      },
      {
        "title": "Dragon Ancestor",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
          {
            "title": "Draconic Ancestry",
            "rows": [
              {
                "key": 2,
                "dragonColor": "Black",
                "damageType": "Acid"
              },
              {
                "key": 3,
                "dragonColor": "Blue",
                "damageType": "Lightning"
              },
              {
                "key": 4,
                "dragonColor": "Brass",
                "damageType": "Fire"
              },
              {
                "key": 5,
                "dragonColor": "Bronze",
                "damageType": "Lightning"
              },
              {
                "key": 6,
                "dragonColor": "Copper",
                "damageType": "Acid"
              },
              {
                "key": 7,
                "dragonColor": "Gold",
                "damageType": "Fire"
              },
              {
                "key": 8,
                "dragonColor": "Green",
                "damageType": "Poison"
              },
              {
                "key": 9,
                "dragonColor": "Red",
                "damageType": "Fire"
              },
              {
                "key": 10,
                "dragonColor": "Silver",
                "damageType": "Cold"
              },
              {
                "key": 11,
                "dragonColor": "White",
                "damageType": "Cold"
              }
            ],
            "columns": [
              {
                "title": "Dragon Color",
                "dataIndex": "dragonColor",
                "key": "dragonColor"
              },
              {
                "title": "Damage Type",
                "dataIndex": "damageType",
                "key": "damageType"
              }
            ]
          },
          "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
        ]
      },
      {
        "title": "Draconic Resilience",
        "isSubclassFeature": true,
        "details": [
          "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.",
          "Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier."
        ]
      },
      {
        "title": "Elemental Affinity",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, add your Charisma modifier to that damage. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour."
        ]
      },
      {
        "title": "Dragon Wings",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.",
          "You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them."
        ]
      },
      {
        "title": "Draconic Presence",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours."
        ]
      },
      {
        "title": "Divine Magic",
        "isSubclassFeature": true,
        "details": [
          "Your link to the divine allows you to learn spells normally associated with the cleric class. When your Spellcasting feature lets you learn a sorcerer cantrip or a sorcerer spell of 1st level or higher, you can choose the new spell from the cleric spell list or the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you.",
          "In addition, choose an affinity for the source of your divine power: good, evil, law, chaos, or neutrality. You learn an additional spell based on that affinity, as shown below. It is a sorcerer spell for you, but it doesn't count against your number of sorcerer spells known. If you later replace this spell, you must replace it with a spell from the cleric spell list.",
          {
            "title": null,
            "rows": [
              {
                "key": 1,
                "affinity": "Good",
                "spell": "Cure Wounds"
              },
              {
                "key": 2,
                "affinity": "Evil",
                "spell": "Inflict Wounds"
              },
              {
                "key": 3,
                "affinity": "Law",
                "spell": "Bless"
              },
              {
                "key": 4,
                "affinity": "Chaos",
                "spell": "Bane"
              },
              {
                "key": 5,
                "affinity": "Neutrality",
                "spell": "Protection from Evil and Good"
              }
            ],
            "columns": [
              {
                "title": "Affinity",
                "dataIndex": "affinity",
                "key": "affinity"
              },
              {
                "title": "Spell",
                "dataIndex": "spell",
                "key": "spell"
              }
            ]
          }
        ]
      },
      {
        "title": "Favored by the Gods",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll 2d4 and add it to the total, possibly changing the outcome.",
          "Once you use this feature, you can\u2019t use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Empowered Healing",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, the divine energy coursing through you can empower healing spells. Whenever you or an ally within 5 feet of you rolls dice to determine the number of hit points a spell restores, you can spend 1 sorcery point to reroll any number of those dice once, provided you aren't incapacitated. You can use this feature only once per turn."
        ]
      },
      {
        "title": "Angelic Form",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you can use a bonus action to manifest a pair of spectral wings from your back. While the wings are present, you have a flying speed of 30 feet. The wings last until you're incapacitated, you die, or you dismiss them as a bonus action.",
          "The affinity you chose for your Divine Magic feature determines the appearance of the spectral wings: eagle wings for good or law, bat wings for evil or chaos, and dragonfly wings for neutrality."
        ]
      },
      {
        "title": "Unearthly Recovery",
        "isSubclassFeature": true,
        "details": [
          "At 18th level, you gain the ability to overcome grievous injuries. As a bonus action when you have fewer than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum.",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      },
      {
        "title": "Jotun Resilience",
        "isSubclassFeature": true,
        "details": [
          "The resilience of giants flows through your body. At 1st level, your hit point maximum increases by 1, and it increases by 1 again whenever you gain a level in this class."
        ]
      },
      {
        "title": "Mark of the Ordning",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you discover innate magical abilities within yourself that are based on your giant heritage. Select one of the giant types from the Mark of the Ordning table. At 1st and 3rd level, you learn the spells associated with your choice, as shown in the table. These spells count as sorcerer spells for you, but they don\u2019t count against your number of sorcerer spells known.",
          {
            "title": null,
            "rows": [
              {
                "key": 1,
                "giantType": "Cloud",
                "spellsAt1stLevel": "Fog Cloud, Minor Illusion",
                "spellAt3rdLevel": "Invisibility"
              },
              {
                "key": 2,
                "giantType": "Fire",
                "spellsAt1stLevel": "Burning Hands, Fire Bolt",
                "spellAt3rdLevel": "Flaming Sphere"
              },
              {
                "key": 3,
                "giantType": "Frost",
                "spellsAt1stLevel": "Armor of Agathys, Ray of Frost",
                "spellAt3rdLevel": "Hold Person"
              },
              {
                "key": 4,
                "giantType": "Hill",
                "spellsAt1stLevel": "Heroism, Shillelagh",
                "spellAt3rdLevel": "Enlarge/Reduce"
              },
              {
                "key": 5,
                "giantType": "Stone",
                "spellsAt1stLevel": "Entangle, Resistance",
                "spellAt3rdLevel": "Spike Growth"
              },
              {
                "key": 6,
                "giantType": "Storm",
                "spellsAt1stLevel": "Shocking Grasp, Thunderwave",
                "spellAt3rdLevel": "Gust of Wind"
              }
            ],
            "columns": [
              {
                "title": "Giant Type",
                "dataIndex": "giantType",
                "key": "giantType"
              },
              {
                "title": "Spells at 1st Level",
                "dataIndex": "spellsAt1stLevel",
                "key": "spellsAt1stLevel"
              },
              {
                "title": "Spell at 3rd Level",
                "dataIndex": "spellAt3rdLevel",
                "key": "spellAt3rdLevel"
              }
            ]
          }
        ]
      },
      {
        "title": "Soul of Lost Ostoria",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you gain a benefit whenever you cast one of the spells granted by your Mark of the Ordning Feature.",
          "***Cloud Giant.*** Immediately after you cast any of your Mark of the Ordning spells, you can magically teleport as a bonus action. You teleport to an unoccupied space you can see that is no farther away than a number of feet equal to 10 + your Constitution modifier.",
          "***Fire Giant.*** You gain a bonus to the damage rolls of your Mark of the Ordning spells. The bonus equals your Constitution modifier (minimum of +1).",
          "***Frost Giant.*** Immediately after you cast any of your Mark of the Ordning spells, you gain temporary hit points equal to your Constitution modifier (minimum of 1). If the spell is Armor of Agathys, you instead increase its temporary hit points by an amount equal to your Constitution modifier (minimum of 1).",
          "***Hill Giant.*** Immediately after you cast any of your Mark of the Ordning spells, you can target up to two creatures within 5 feet of you that you can see. Each target must succeed on a Strength saving throw against your spell save DC or be pushed a number of feet away from you equal to 5 + your Constitution modifier (minimum of +1). A target can choose to fail this save.",
          "***Stone Giant.*** Immediately after you cast any of your Mark of the Ordning spells, you gain a bonus to AC equal to your Constitution modifier (minimum of +1) until the end of your next turn.",
          "***Storm Giant.*** Immediately after you cast any of your Mark of the Ordning spells, up to three creatures of your choice that you can see within 30 feet of you take lightning damage equal to your Constitution modifier (minimum of 1)."
        ]
      },
      {
        "title": "Rage of Fallen Ostoria",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you gain the ability to channel the souls of your ancestors into your physical form. When you start casting a sorcerer spell on your turn and expend a spell slot, you can increase your size by one category \u2013 from Medium to Large, for example. This increase lasts for 1 minute. It ends early if you die or are incapacitated. Until it ends, you gain the following benefits:",
          "\u2022 Your current hit points and your hit point maximum both increase by 1 per sorcerer level.\n\u2022 Your reach increases by 5 feet.\n\u2022 Your walking speed increases by 5 feet.\n\u2022 You have advantage on Strength checks and Strength saving throws.\n\u2022 You gain a bonus to the damage rolls of your melee weapon attacks; the bonus equals your Constitution modifier (minimum of +1).",
          "Once you use this feature, you can\u2019t use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Blessing of the All Father",
        "isSubclassFeature": true,
        "details": [
          "At 18th level, your Constitution score increases by 2, up to a maximum of 22.",
          "In addition, you can now use Rage of Fallen Ostoria twice between rests, but no more than once on a turn. If you use that feature while under its effects, its increases to your size, hit points, reach, and walking speed are cumulative."
        ]
      },
      {
        "title": "Ignite",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you gain the ability to start fires with a touch. As an action, you can magically ignite a flammable object you touch with your hand\u2014an object such as a torch, a piece of tinder, or the hem of drapes."
        ]
      },
      {
        "title": "Mantle of Flame",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, you can unleash the phoenix fire that blazes within you.",
          "As a bonus action, you magically wreathe yourself in swirling fire, as your eyes glow like hot coals. For 1 minute, you gain the following benefits:",
          "\u2022 You shed bright light in a 30-foot radius and dim light for an additional 30 feet.",
          "\u2022 Any creature takes fire damage equal to your Charisma modifier if it hits you with a melee attack from within 5 feet of you or if it touches you.",
          "\u2022 Whenever you roll fire damage on your turn, the roll gains a bonus equal to your Charisma modifier.",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      },
      {
        "title": "Phoenix Spark",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, the fiery energy within you grows restless and vengeful. In the face of defeat, it surges outward to preserve you in a fiery roar.",
          "If you are reduced to 0 hit points, you can use your reaction to draw on the spark of the phoenix. You are instead reduced to 1 hit point, and each creature within 10 feet of you takes fire damage equal to half your sorcerer level + your Charisma modifier.",
          "If you use this feature while under the effects of your Mantle of Flame, this feature instead deals fire damage equal to your sorcerer level + double your Charisma modifier, and your Mantle of Flame immediately ends.",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      },
      {
        "title": "Nourishing Fire",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, your fire spells soothe and restore you. When you expend a spell slot to cast a spell that includes a fire damage roll, you regain hit points equal to the slot\u2019s level + your Charisma modifier."
        ]
      },
      {
        "title": "Form of the Phoenix",
        "isSubclassFeature": true,
        "details": [
          "At 18th level, you finally master the spark of fire that dances within you. While under the effect of your Mantle of Flame feature, you gain additional benefits:",
          "\u2022 You have a flying speed of 40 feet and can hover.",
          "\u2022 You have resistance to all damage.",
          "\u2022 If you use your Phoenix Spark, that feature deals an extra 20 fire damage to each creature."
        ]
      },
      {
        "title": "Soul of the Sea",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, your tie to the sea grants you the ability to breathe underwater, and you have a swim speed equal to your walking speed."
        ]
      },
      {
        "title": "Curse of the Sea",
        "isSubclassFeature": true,
        "details": [
          "When you choose this origin at 1st level, you learn the secret of infusing your spells with a watery curse.",
          "When you hit a creature with a cantrip\u2019s attack or when a creature fails a saving throw against your cantrip, you can curse the target until the end of your next turn or until you curse a different creature with this feature.",
          "Once per turn when you cast a spell, you can trigger the curse if that spell deals cold or lightning damage to the cursed target or forces it to move. Doing so subjects the target to the appropriate additional effect below, and then the curse ends if the spell isn\u2019t a cantrip (you choose the effect to use if more than one effect applies):",
          "***Cold Damage.*** If the affected target takes cold damage from your spell, the target\u2019s speed is also reduced by 15 feet until the end of your next turn. If the spell already reduces the target\u2019s speed, use whichever reduction is greater.",
          "***Lightning Damage.*** If the affected target takes lightning damage from your spell, the target takes additional lightning damage equal to your Charisma modifier.",
          "***Forced Movement.*** If the target is moved by your spell, increase the distance it is moved by 15 feet."
        ]
      },
      {
        "title": "Watery Defense",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain resistance to fire damage.",
          "You also gain the ability to defend yourself by momentarily assuming a watery form. As a reaction when you are hit by an attack and take bludgeoning, piercing, or slashing damage from it, you can reduce that damage by an amount equal to your sorcerer level plus your Charisma score, and then you can move up to 30 feet without provoking opportunity attacks. Once you use this special reaction, you can\u2019t use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Shifting Form",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you gain the ability to enter a liquid state while moving.",
          "When you move on your turn, you take only half damage from opportunity attacks, and you can move through any enemy\u2019s space but can\u2019t willingly end your move there.",
          "On your turn, you can move through any space that is at least 3 inches in diameter and do so without squeezing. When you stop moving, the regular squeezing rules apply if you\u2019re in a space one size smaller than you. You can\u2019t willingly stop in a space smaller than that, and if you\u2019re forced to do so, you immediately flow to the nearest space that can fit you, back along the path of your movement."
        ]
      },
      {
        "title": "Water Soul",
        "isSubclassFeature": true,
        "details": [
          "Starting at 18th level, your being is altered by the power of the sea. You gain the following benefits:",
          "\u2022 You no longer need to eat, drink, or sleep.",
          "\u2022 A critical hit against you becomes a normal hit.",
          "\u2022 You have resistance to bludgeoning, piercing, and slashing damage."
        ]
      },
      {
        "title": "Shadow Sorcerer Quirks",
        "isSubclassFeature": true,
        "details": [
          "At your option, you can pick from or roll on the Shadow Sorcerer Quirks table to create a quirk for your character.",
          {
            "title": null,
            "rows": [
              {
                "key": 1,
                "d6": "1",
                "quirk": "You are always icy cold to the touch."
              },
              {
                "key": 2,
                "d6": "2",
                "quirk": "When you are asleep, you don't appear to breathe (though you must still breathe to survive)."
              },
              {
                "key": 3,
                "d6": "3",
                "quirk": "You barely bleed, even when badly injured."
              },
              {
                "key": 4,
                "d6": "4",
                "quirk": "Your heart beats once per minute. This event sometimes surprises you."
              },
              {
                "key": 5,
                "d6": "5",
                "quirk": "You have trouble remembering that living creatures and corpses should be treated differently."
              },
              {
                "key": 6,
                "d6": "6",
                "quirk": "You blinked. Once. Last week."
              }
            ],
            "columns": [
              {
                "title": "d6",
                "dataIndex": "d6",
                "key": "d6"
              },
              {
                "title": "Quirk",
                "dataIndex": "quirk",
                "key": "quirk"
              }
            ]
          }
        ]
      },
      {
        "title": "Eyes of the Dark",
        "isSubclassFeature": true,
        "details": [
          "From 1st level, you have darkvision with a range of 120 feet.",
          "When you reach 3rd level in this class, you learn the Darkness spell, which doesn't count against your number of sorcerer spells known. In addition, you can cast it by spending 2 sorcery points or by expending a spell slot. If you cast it with sorcery points, you can see through the darkness created by the spell."
        ]
      },
      {
        "title": "Strength of the Grave",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, your existence in a twilight state between life and death makes you difficult to defeat. When damage reduces you to 0 hit points, you can make a Charisma saving throw (DC 5 + the damage taken). On a success, you instead drop to 1 hit point. You can't use this feature if you are reduced to 0 hit points by radiant damage or by a critical hit.",
          "After the saving throw succeeds, you can't use this feature again until you finish a long rest."
        ]
      },
      {
        "title": "Hound of Ill Omen",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to call forth a howling creature of darkness to harass your foes. As a bonus action, you can spend 3 sorcery points to summon a hound of ill omen to target one creature you can see within 120 feet of you. The hound uses the dire wolf\u2019s statistics, with the following changes:",
          "\u2022 The hound is size Medium, not Large, and it counts as a monstrosity, not a beast.",
          "\u2022\u00a0It appears with a number of temporary hit points equal to half your sorcerer level.",
          "\u2022 It can move through other creatures and objects as if they were difficult terrain. The hound takes 5 force damage if it ends its turn inside an object.",
          "\u2022 At the start of its turn, the hound automatically knows its target\u2019s location. If the target was hidden, it is no longer hidden from the hound.",
          "The hound appears in an unoccupied space of your choice within 30 feet of the target. Roll initiative for the hound. On its turn, it can move only toward its target by the most direct route, and it can use its action only to attack its target. The hound can make opportunity attacks, but only against its target. Additionally, while the hound is within 5 feet of the target, the target has disadvantage on saving throws against any spell you cast. The hound disappears if it is reduced to 0 hit points, if its target is reduced to 0 hit points, or after 5 minutes."
        ]
      },
      {
        "title": "Shadow Walk",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action, you can teleport up to 120 feet to an unoccupied space you can see that is also in dim light or darkness."
        ]
      },
      {
        "title": "Umbral Form",
        "isSubclassFeature": true,
        "details": [
          "Starting at 18th level, you can spend 6 sorcery points as a bonus action to transform yourself into a shadowy form. In this form, you have resistance to all damage except force and radiant damage, and you can move through other creatures and objects as if they were difficult terrain. You take 5 force damage if you end your turn inside an object.",
          "You remain in this form for 1 minute. It ends early if you are incapacitated, if you die, or if you dismiss it as a bonus action."
        ]
      },
      {
        "title": "Bonus Proficiencies",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you gain proficiency with shields, simple weapons, and martial weapons."
        ]
      },
      {
        "title": "Metal Magic",
        "isSubclassFeature": true,
        "details": [
          "Your affinity for metal gives you the option to learn some non-sorcerer spells that focus on weapon attacks. When your Spellcasting feature lets you learn a sorcerer spell of 1st level or higher, you can select the spell from the following list of spells, in addition to the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you.",
          {
            "title": "Stone Sorcery Spells",
            "rows": [
              {
                "key": 2,
                "spellLevel": "1st",
                "spell": "Compelled Duel"
              },
              {
                "key": 3,
                "spellLevel": "1st",
                "spell": "Searing Smite"
              },
              {
                "key": 4,
                "spellLevel": "1st",
                "spell": "Thunderous Smite"
              },
              {
                "key": 5,
                "spellLevel": "1st",
                "spell": "Wrathful Smite"
              },
              {
                "key": 6,
                "spellLevel": "2nd",
                "spell": "Branding Smite"
              },
              {
                "key": 7,
                "spellLevel": "2nd",
                "spell": "Magic Weapon"
              },
              {
                "key": 8,
                "spellLevel": "3rd",
                "spell": "Blinding Smite"
              },
              {
                "key": 9,
                "spellLevel": "3rd",
                "spell": "Elemental Weapon"
              },
              {
                "key": 10,
                "spellLevel": "4th",
                "spell": "Staggering Smite"
              }
            ],
            "columns": [
              {
                "title": "Spell Level",
                "dataIndex": "spellLevel",
                "key": "spellLevel"
              },
              {
                "title": "Spell",
                "dataIndex": "spell",
                "key": "spell"
              }
            ]
          }
        ]
      },
      {
        "title": "Stone's Durability",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, your connection to stone gives you extra fortitude. Your hit point maximum increases by 1, and it increases by 1 again whenever you gain a level in this class.",
          "As an action, you can gain a base AC of 13 + your Constitution modifier if you aren\u2019t wearing armor, and your skin assumes a stony appearance. This effect lasts until you end it as a bonus action, you are incapacitated, or you don armor other than a shield."
        ]
      },
      {
        "title": "Stone Aegis",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, your command of earth magic grows stronger, allowing you to harness it for your allies\u2019 protection.",
          "As a bonus action, you can grant an aegis to one allied creature you can see within 60 feet of you. The aegis is a dim, gray aura of earth magic that protects the target. Any bludgeoning, piercing, or slashing damage the target takes is reduced by 2 + your sorcerer level divided by 4. This effect lasts for 1 minute, until you use it again, or until you are incapacitated.",
          "In addition, when a creature you can see within 60 feet of you hits the protected target with a melee attack, you can use your reaction to teleport to an unoccupied space you can see within 5 feet of the attacker. You can teleport only if you and the attacker are on the same surface. You can then make one melee weapon attack against the attacker. If that attack hits, it deals an extra 1d10 force damage. This extra damage increases to 2d10 at 11th level and 3d10 at 17th level."
        ]
      },
      {
        "title": "Stone's Edge",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, your mastery of earth magic allows you to add the force of elemental earth to your spells. When you cast a spell that deals damage, choose one creature damaged by that spell on the round you cast it. That creature takes extra force damage equal to half your sorcerer level. This feature can be used only once per casting of a spell."
        ]
      },
      {
        "title": "Earth Master's Aegis",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 18th level, when you use your Stone\u2019s Aegis to protect an ally, you can choose up to three creatures to gain its benefits."
        ]
      },
      {
        "title": "Wind Speaker",
        "isSubclassFeature": true,
        "details": [
          "The arcane magic you command is infused with elemental air. You can speak, read, and write Primordial. Knowing this language allows you to understand and be understood by those who speak its dialects: Aquan, Auran, Ignan, and Terran."
        ]
      },
      {
        "title": "Tempestuous Magic",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, you can use a bonus action on your turn to cause whirling gusts of elemental air to briefly surround you, immediately before or after you cast a spell of 1st level or higher. Doing so allows you to fly up to 10 feet without provoking opportunity attacks."
        ]
      },
      {
        "title": "Heart of the Storm",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain resistance to lightning and thunder damage. In addition, whenever you start casting a spell of 1st level or higher that deals lightning or thunder damage, stormy magic erupts from you. This eruption causes creatures of your choice that you can see within 10 feet of you to take lightning or thunder damage (choose each time this ability activates) equal to half your sorcerer level."
        ]
      },
      {
        "title": "Storm Guide",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to subtly control the weather around you.",
          "If it is raining, you can use an action to cause the rain to stop falling in a 20-foot-radius sphere centered on you. You can end this effect as a bonus action.",
          "If it is windy, you can use a bonus action each round to choose the direction that the wind blows in a 100-foot-radius sphere centered on you. The wind blows in that direction until the end of your next turn. This feature doesn't alter the speed of the wind."
        ]
      },
      {
        "title": "Storm's Fury",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, when you are hit by a melee attack, you can use your reaction to deal lightning damage to the attacker. The damage equals your sorcerer level. The attacker must also make a Strength saving throw against your sorcerer spell save DC. On a failed save, the attacker is pushed in a straight line up to 20 feet away from you."
        ]
      },
      {
        "title": "Wind Soul",
        "isSubclassFeature": true,
        "details": [
          "At 18th level, you gain immunity to lightning and thunder damage.",
          "You also gain a magical flying speed of 60 feet. As an action, you can reduce your flying speed to 30 feet for 1 hour and choose a number of creatures within 30 feet of you equal to 3 + your Charisma modifier. The chosen creatures gain a magical flying speed of 30 feet for 1 hour. Once you reduce your flying speed in this way, you can't do so again until you finish a short or long rest."
        ]
      }
    ],
    "subclass": {
      "title": "Sorcerous Origin",
      "prefix": null,
      "suffix": null,
      "levels": [
        1,
        6,
        14,
        18
      ],
      "archetypes": {
        "DRACONIC_BLOODLINE": {
          "title": "Draconic Bloodline",
          "restrictions": [
            
          ],
          "details": [
            "Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance."
          ],
          "features": [
            [
              {
                "name": "Dragon Ancestor",
                "id": 6
              },
              {
                "name": "Draconic Resilience",
                "id": 7
              }
            ],
            [
              {
                "name": "Elemental Affinity",
                "id": 8
              }
            ],
            [
              {
                "name": "Dragon Wings",
                "id": 9
              }
            ],
            [
              {
                "name": "Draconic Presence",
                "id": 10
              }
            ]
          ]
        },
        "DIVINE_SOUL": {
          "title": "Divine Soul",
          "restrictions": [
            
          ],
          "details": [
            "Sometimes the spark of magic that fuels a sorcerer comes from a divine source that glimmers within the soul. Having such a blessed soul is a sign that your innate magic might come from a distant but powerful familial connection to a divine being. Perhaps your ancestor was an angel, transformed into a mortal and sent to fight in a god\u2019s name. Or your birth might align with an ancient prophecy, marking you as a servant of the gods or a chosen vessel of divine magic.",
            "A Divine Soul, with natural magnetism, is seen as a threat by some religious hierarchies. As an outsider who commands celestial power, these sorcerers can undermine the existing order by claiming a direct tie to the divine.",
            "In some cultures, only those who can claim the power of a Divine Soul may command religious power. In these lands, ecclesiastical positions are dominated by a few bloodlines and preserved over generations."
          ],
          "features": [
            [
              {
                "name": "Divine Magic",
                "id": 11
              },
              {
                "name": "Favored by the Gods",
                "id": 12
              }
            ],
            [
              {
                "name": "Empowered Healing",
                "id": 13
              }
            ],
            [
              {
                "name": "Angelic Form",
                "id": 14
              }
            ],
            [
              {
                "name": "Unearthly Recovery",
                "id": 15
              }
            ]
          ]
        },
        "GIANT_SOUL_(UA)": {
          "title": "Giant Soul",
          "restrictions": [
            
          ],
          "details": [
            "The giants once dwelled in a fabled realm known as Ostoria, a paradise for their folk that reflected their mastery of the mortal realm. In time, Ostoria fell, and the giants were scattered and broken. During that mythic era, the giants granted a few chosen individuals among the small folk a shard of their great power. These favored people were caught in the same tragedy that sundered Ostoria. Since that time, they have spread across the many worlds of the multiverse. Now and again, one of their descendants manifests the gifts imparted by the giants, granting them sorcerous magic that allows them to command the elements and gain the might of a giant."
          ],
          "features": [
            [
              {
                "name": "Jotun Resilience",
                "id": 16
              },
              {
                "name": "Mark of the Ordning",
                "id": 17
              }
            ],
            [
              {
                "name": "Soul of Lost Ostoria",
                "id": 18
              }
            ],
            [
              {
                "name": "Rage of Fallen Ostoria",
                "id": 19
              }
            ],
            [
              {
                "name": "Blessing of the All Father",
                "id": 20
              }
            ]
          ]
        },
        "PHOENIX_(UA)": {
          "title": "Phoenix",
          "restrictions": [
            
          ],
          "details": [
            "Your power draws from the immortal flame that fuels the legendary phoenix. You or your ancestors perhaps rendered a phoenix a great service, or you were born in its presence. Whatever the cause, a shard of the phoenix\u2019s power dwells within you.",
            "That power is a mixed blessing. Like the mythical creature, you can invoke fiery energy and gain the ability to cheat death itself. This power comes at a cost. The fire within you seethes, demanding to be unleashed. You sometimes find yourself absentmindedly feeding fires. You can\u2019t bear to allow a fire to sputter out. You feel most comfortable while holding a lit torch or sitting in front of a campfire.",
            "More importantly, this gift comes with no special protection from fire. You are as vulnerable as any other creature to fiery magic, including your own. Phoenix sorcerers can use their powers to pull themselves back from the brink of death, and all too often their own, rash nature or reliance on destructive magic is what puts them there in the first place.",
            "Such sorcerers are wanderers by necessity. The volatile nature of their magic makes other folk nervous. If a fire breaks out in town, a phoenix sorcerer had best flee, whether guilty or not. Fire is a dangerous force, and phoenix sorcerers have a reputation (deserved or not) for reckless behavior, confident that the essence of the phoenix can save them."
          ],
          "features": [
            [
              {
                "name": "Ignite",
                "id": 21
              },
              {
                "name": "Mantle of Flame",
                "id": 22
              }
            ],
            [
              {
                "name": "Phoenix Spark",
                "id": 23
              }
            ],
            [
              {
                "name": "Nourishing Fire",
                "id": 24
              }
            ],
            [
              {
                "name": "Form of the Phoenix",
                "id": 25
              }
            ]
          ]
        },
        "PYROMANCY_(KALADESH)": {
          "title": "Pyromancy (Kaladesh)",
          "restrictions": [
            
          ],
          "details": [
            "\nThe page sorcerer:pyromancy-kaladesh you want to access does not exist."
          ],
          "features": [
            
          ]
        },
        "SEA_(UA)": {
          "title": "Sea",
          "restrictions": [
            
          ],
          "details": [
            "The power of water is the strength of flexibility, resilience, and a relentless nature. Water parts to allow a ship to sail over it or a diver to plunge into it, but their passing leaves no mark. Water flowing down a mountain reaches the sea. It might bend and turn across valleys and down hillsides, but it slowly and steadily returns to the waves. Those whose souls are touched by the power of elemental water command a similar power.",
            "Your heritage ties to powerful creatures of the sea, such as nereids, the lords of the merfolk, and elemental powers. Like a river, you feel the call of the ocean. The call is ever present in your heart, and you are never completely at peace until you are near the sea."
          ],
          "features": [
            [
              {
                "name": "Soul of the Sea",
                "id": 26
              },
              {
                "name": "Curse of the Sea",
                "id": 27
              }
            ],
            [
              {
                "name": "Watery Defense",
                "id": 28
              }
            ],
            [
              {
                "name": "Shifting Form",
                "id": 29
              }
            ],
            [
              {
                "name": "Water Soul",
                "id": 30
              }
            ]
          ]
        },
        "SHADOW": {
          "title": "Shadow",
          "restrictions": [
            
          ],
          "details": [
            "You are a creature of shadow, for your innate magic comes from the Shadowfell itself. You might trace your lineage to an entity from that place, or perhaps you were exposed to its fell energy and transformed by it.",
            "The power of shadow magic casts a strange pall over your physical presence. The spark of life that sustains you is muffled, as if it struggles to remain viable against the dark energy that imbues your soul."
          ],
          "features": [
            [
              {
                "name": "Shadow Sorcerer Quirks",
                "id": 31
              },
              {
                "name": "Eyes of the Dark",
                "id": 32
              },
              {
                "name": "Strength of the Grave",
                "id": 33
              }
            ],
            [
              {
                "name": "Hound of Ill Omen",
                "id": 34
              }
            ],
            [
              {
                "name": "Shadow Walk",
                "id": 35
              }
            ],
            [
              {
                "name": "Umbral Form",
                "id": 36
              }
            ]
          ]
        },
        "STONE_(UA)": {
          "title": "Stone",
          "restrictions": [
            
          ],
          "details": [
            "Your magic springs from a mystical link between your soul and the magic of elemental earth. You might trace a distant ancestor to the Plane of Earth, or your family might have earned a mighty boon in return for a service to the dao lords. Whatever your past, the magic of elemental earth is yours to command.",
            "Your link to earth magic grants you extraordinary resilience, and stone sorcerers have a natural affinity for combat. A steel blade feels like a natural extension of your body, and sorcerers with this origin have a knack for wielding both shields and weapons. In combat your place is amid the fray. You rely on your elemental nature to shield you from harm and your magic and metal weapons to overwhelm your foes."
          ],
          "features": [
            [
              {
                "name": "Bonus Proficiencies",
                "id": 37
              },
              {
                "name": "Metal Magic",
                "id": 38
              },
              {
                "name": "Stone's Durability",
                "id": 39
              }
            ],
            [
              {
                "name": "Stone Aegis",
                "id": 40
              }
            ],
            [
              {
                "name": "Stone's Edge",
                "id": 41
              }
            ],
            [
              {
                "name": "Earth Master's Aegis",
                "id": 42
              }
            ]
          ]
        },
        "STORM": {
          "title": "Storm",
          "restrictions": [
            
          ],
          "details": [
            "Your innate magic comes from the power of elemental air. Many with this power can trace their magic back to a near-death experience caused by the Great Rain, but perhaps you were born during a howling gale so powerful that folk still tell stories of it, or your lineage might include the influence of potent air creatures such as vaati or djinn. Whatever the case, the magic of the storm permeates your being.",
            "Storm sorcerers are invaluable members of a ship's crew. Their magic allows them to exert control over wind and weather in their immediate area. Their abilities also prove useful in repelling attacks by sahuagin, pirates, and other waterborne threats."
          ],
          "features": [
            [
              {
                "name": "Wind Speaker",
                "id": 43
              },
              {
                "name": "Tempestuous Magic",
                "id": 44
              },
              {
                "name": "Heart of the Storm",
                "id": 45
              }
            ],
            [
              {
                "name": "Storm Guide",
                "id": 46
              }
            ],
            [
              {
                "name": "Storm's Fury",
                "id": 47
              }
            ],
            [
              {
                "name": "Wind Soul",
                "id": 48
              }
            ]
          ]
        }
      }
    }
  },
  "WARLOCK": {
    "title": "Warlock",
    "route": "warlock",
    "image": "warlock.svg",
    "details": [
      "Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular.",
      "**You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.**"
    ],
    "tym": [
      "the weird kid",
      "also the goth kid",
      "drinks too many energy drinks"
    ],
    "summary": "A wielder of magic that is derived from a bargain with an extraplanar entity, such as fiend, fey, or octopus demon.",
    "recommendedStats": [
      "Charisma",
      "Constitution"
    ],
    "spellcasting": {
      "details": [
        "Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the warlock spell list."
      ],
      "preparing": [
        "The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.",
        "For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell."
      ],
      "ability": [
        "Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one."
      ],
      "mod": "CHA",
      "save": 8,
      "other": [
        {
          "title": "Spellcasting Focus",
          "text": "You can use an arcane focus (see the Adventuring Gear section) as a spellcasting focus for your warlock spells."
        }
      ]
    },
    "hitDice": 8,
    equipment: [
      [
        [[Item(WEAPONS.SIMPLE.RANGED.LIGHT_CROSSBOW), Item(ITEMS.AMMUNITION.CROSSBOW_BOLT, 20)], Item(WEAPONS.SIMPLE)],
        [Item(ITEMS.ARCANE_SUPPLIES.COMPONENT_POUCH), Item(ITEMS.ARCANE_FOCUS)],
        [Item(ITEMS.STARTER_PACK.SCHOLAR), Item(ITEMS.STARTER_PACK.DUNGEONEER)],
        [[Item(ARMOR.LIGHT.LEATHER), Item(WEAPONS.SIMPLE), Item(WEAPONS.SIMPLE.MELEE.DAGGER, 2)]]
      ]
    ],
    proficiencies: {
      armor: [ARMOR.LIGHT],
      weapons: [WEAPONS.SIMPLE],
      tools: [],
      savingThrows: [STATS.WIS, STATS.CHA],
      skills: {
        choose: 2,
        options: [
          SKILLS.ARCANA, 
          SKILLS.DECEPTION, 
          SKILLS.HISTORY, 
          SKILLS.INTIMIDATION, 
          SKILLS.INVESTIGATION, 
          SKILLS.NATURE, 
          SKILLS.RELIGION
        ]
      }
    },
    "asi": [
      4,
      8,
      12,
      16,
      19
    ],
    "levelTable": {
      "title": "The Warlock",
      "rows": [
        {
          "key": 2,
          "level": "1st",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Otherworldly Patron",
              "id": 0
            },
            {
              "name": "Pact Magic",
              "id": 1
            }
          ],
          "cantripsKnown": "2",
          "spellsKnown": "2",
          "spellSlots": "1",
          "slotLevel": "1st",
          "invocationsKnown": "-"
        },
        {
          "key": 3,
          "level": "2nd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Eldritch Invocations",
              "id": 2
            }
          ],
          "cantripsKnown": "2",
          "spellsKnown": "3",
          "spellSlots": "2",
          "slotLevel": "1st",
          "invocationsKnown": "2"
        },
        {
          "key": 4,
          "level": "3rd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Pact Boon",
              "id": 3
            }
          ],
          "cantripsKnown": "2",
          "spellsKnown": "4",
          "spellSlots": "2",
          "slotLevel": "2nd",
          "invocationsKnown": "2"
        },
        {
          "key": 5,
          "level": "4th",
          "proficiencyBonus": "+2",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "spellsKnown": "5",
          "spellSlots": "2",
          "slotLevel": "2nd",
          "invocationsKnown": "2"
        },
        {
          "key": 6,
          "level": "5th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "spellsKnown": "6",
          "spellSlots": "2",
          "slotLevel": "3rd",
          "invocationsKnown": "3"
        },
        {
          "key": 7,
          "level": "6th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "spellsKnown": "7",
          "spellSlots": "2",
          "slotLevel": "3rd",
          "invocationsKnown": "3"
        },
        {
          "key": 8,
          "level": "7th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "spellsKnown": "8",
          "spellSlots": "2",
          "slotLevel": "4th",
          "invocationsKnown": "4"
        },
        {
          "key": 9,
          "level": "8th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "spellsKnown": "9",
          "spellSlots": "2",
          "slotLevel": "4th",
          "invocationsKnown": "4"
        },
        {
          "key": 10,
          "level": "9th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "spellsKnown": "10",
          "spellSlots": "2",
          "slotLevel": "5th",
          "invocationsKnown": "5"
        },
        {
          "key": 11,
          "level": "10th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "spellsKnown": "10",
          "spellSlots": "2",
          "slotLevel": "5th",
          "invocationsKnown": "5"
        },
        {
          "key": 12,
          "level": "11th",
          "proficiencyBonus": "+4",
          "features": [
            {
              "name": "Mystic Arcanum (6th level)",
              "id": 5
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "11",
          "spellSlots": "3",
          "slotLevel": "5th",
          "invocationsKnown": "5"
        },
        {
          "key": 13,
          "level": "12th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "spellsKnown": "11",
          "spellSlots": "3",
          "slotLevel": "5th",
          "invocationsKnown": "6"
        },
        {
          "key": 14,
          "level": "13th",
          "proficiencyBonus": "+5",
          "features": [
            {
              "name": "Mystic Arcanum (7th level)",
              "id": 5
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "12",
          "spellSlots": "3",
          "slotLevel": "5th",
          "invocationsKnown": "6"
        },
        {
          "key": 15,
          "level": "14th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "spellsKnown": "12",
          "spellSlots": "3",
          "slotLevel": "5th",
          "invocationsKnown": "6"
        },
        {
          "key": 16,
          "level": "15th",
          "proficiencyBonus": "+5",
          "features": [
            {
              "name": "Mystic Arcanum (8th level)",
              "id": 5
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "13",
          "spellSlots": "3",
          "slotLevel": "5th",
          "invocationsKnown": "7"
        },
        {
          "key": 17,
          "level": "16th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "spellsKnown": "13",
          "spellSlots": "3",
          "slotLevel": "5th",
          "invocationsKnown": "7"
        },
        {
          "key": 18,
          "level": "17th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Mystic Arcanum (9th level)",
              "id": 5
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "14",
          "spellSlots": "4",
          "slotLevel": "5th",
          "invocationsKnown": "7"
        },
        {
          "key": 19,
          "level": "18th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "spellsKnown": "14",
          "spellSlots": "4",
          "slotLevel": "5th",
          "invocationsKnown": "8"
        },
        {
          "key": 20,
          "level": "19th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "spellsKnown": "15",
          "spellSlots": "4",
          "slotLevel": "5th",
          "invocationsKnown": "8"
        },
        {
          "key": 21,
          "level": "20th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Eldritch Master",
              "id": 6
            }
          ],
          "cantripsKnown": "4",
          "spellsKnown": "15",
          "spellSlots": "4",
          "slotLevel": "5th",
          "invocationsKnown": "8"
        }
      ],
      "columns": [
        {
          "title": "Level",
          "dataIndex": "level",
          "key": "level",
          "align": "center"
        },
        {
          "title": "Proficiency Bonus",
          "dataIndex": "proficiencyBonus",
          "key": "proficiencyBonus",
          "align": "center"
        },
        {
          "title": "Features",
          "dataIndex": "features",
          "key": "features",
          "align": "center"
        },
        {
          "title": "Cantrips Known",
          "dataIndex": "cantripsKnown",
          "key": "cantripsKnown",
          "align": "center"
        },
        {
          "title": "Spells Known",
          "dataIndex": "spellsKnown",
          "key": "spellsKnown",
          "align": "center"
        },
        {
          "title": "Spell Slots",
          "dataIndex": "spellSlots",
          "key": "spellSlots",
          "align": "center"
        },
        {
          "title": "Slot Level",
          "dataIndex": "slotLevel",
          "key": "slotLevel",
          "align": "center"
        },
        {
          "title": "Invocations Known",
          "dataIndex": "invocationsKnown",
          "key": "invocationsKnown",
          "align": "center"
        }
      ],
      "featuresIndex": 2
    },
    "features": [
      {
        "title": "Otherworldly Patron",
        "isSubclassFeature": false,
        "details": [
          "At 1st level, you have struck a bargain with an otherworldly being of your choice:\n\u2022\u00a0Archfey\n\u2022\u00a0Celestial\n\u2022\u00a0Fiend\n\u2022\u00a0Great Old One\n\u2022\u00a0Hexblade\n\u2022\u00a0Kraken (UA)\n\u2022\u00a0Raven Queen (UA)\n\u2022\u00a0Seeker (UA)\n\u2022\u00a0Undying\nYour choice grants you features at 1st level and again at 6th, 10th, and 14th level."
        ]
      },
      {
        "title": "Pact Magic",
        "isSubclassFeature": false,
        "details": [
          "Your arcane research and the magic bestowed on you by your patron have given you facility with spells.",
          "**Your arcane research and the magic bestowed on you by your patron have given you facility with spells.**",
          "You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.",
          "**You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.**",
          "The Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.",
          "For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell Witch Bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.",
          "**For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell Witch Bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.**",
          "At 1st level, you know two 1st-level spells of your choice from the warlock spell list.",
          "The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level or higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.",
          "Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.",
          "**Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.**",
          "Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.",
          "**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier",
          "**Spell attack modifier** = your proficiency bonus + your Charisma modifier",
          "****Spell attack modifier** = your proficiency bonus + your Charisma modifier**",
          "You can use an arcane focus as a spellcasting focus for your warlock spells."
        ]
      },
      {
        "title": "Eldritch Invocations",
        "isSubclassFeature": false,
        "details": [
          "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
          "At 2nd level, you gain two eldritch invocations of your choice. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
          "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.",
          "A level prerequisite in an invocation refers to warlock level, not character level."
        ]
      },
      {
        "title": "Pact Boon",
        "isSubclassFeature": false,
        "details": [
          "At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.",
          "**At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.**",
          "You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
          "Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.",
          "You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest.",
          "You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.",
          "**You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.**",
          "You learn the Find Familiar spell and can cast it as a ritual. The spell doesn't count against your number of spells known.",
          "When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.",
          "Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to use its reaction to make one attack of its own.",
          "**Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to use its reaction to make one attack of its own.**",
          "Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list. While the book is on your person, you can cast those cantrips at will. They are considered warlock spells for you, and they needn't be from the same spell list. They don't count against your number of cantrips known.",
          "If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die."
        ]
      },
      {
        "title": "Ability Score Improvement",
        "isSubclassFeature": false,
        "details": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      {
        "title": "Mystic Arcanum",
        "isSubclassFeature": false,
        "details": [
          "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.",
          "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
          "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
        ]
      },
      {
        "title": "Eldritch Master",
        "isSubclassFeature": false,
        "details": [
          "At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again."
        ]
      },
      {
        "title": "Expanded Spell List",
        "isSubclassFeature": true,
        "details": [
          "The Archfey lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
          {
            "title": "Archfey Expanded Spells",
            "rows": [
              {
                "key": 2,
                "spellLevel": "1st",
                "spells": "Faerie Fire, Sleep"
              },
              {
                "key": 3,
                "spellLevel": "2nd",
                "spells": "Calm Emotions, Phantasmal Force"
              },
              {
                "key": 4,
                "spellLevel": "3rd",
                "spells": "Blink, Plant Growth"
              },
              {
                "key": 5,
                "spellLevel": "4th",
                "spells": "Dominate Beast, Greater Invisibility"
              },
              {
                "key": 6,
                "spellLevel": "5th",
                "spells": "Dominate Person, Seeming"
              }
            ],
            "columns": [
              {
                "title": "Spell Level",
                "dataIndex": "spellLevel",
                "key": "spellLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Fey Presence",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.",
          "Once you use this feature, you can't use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Misty Escape",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell.",
          "Once you use this feature, you can't use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Beguiling Defenses",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 10th level, your patron teaches you how to turn the mind-affecting magic of your enemies against them. You are immune to being charmed, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage."
        ]
      },
      {
        "title": "Dark Delirium",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you can plunge a creature into an illusory realm. As an action, choose a creature that you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken (as if you are concentrating on a spell). This effect ends early if the creature takes any damage.",
          "Until this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion.",
          "You must finish a short or long rest before you can use this feature again."
        ]
      },
      {
        "title": "Expanded Spell List",
        "isSubclassFeature": true,
        "details": [
          "The Celestial lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
          {
            "title": "Celestial Expanded Spells",
            "rows": [
              {
                "key": 2,
                "spellLevel": "1st",
                "spells": "Cure Wounds, Guiding Bolt"
              },
              {
                "key": 3,
                "spellLevel": "2nd",
                "spells": "Flaming Sphere, Lesser Restoration"
              },
              {
                "key": 4,
                "spellLevel": "3rd",
                "spells": "Daylight, Revivify"
              },
              {
                "key": 5,
                "spellLevel": "4th",
                "spells": "Guardian of Faith, Wall of Fire"
              },
              {
                "key": 6,
                "spellLevel": "5th",
                "spells": "Flame Strike, Greater Restoration"
              }
            ],
            "columns": [
              {
                "title": "Spell Level",
                "dataIndex": "spellLevel",
                "key": "spellLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Bonus Cantrips",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you learn the Light and Sacred Flame cantrips. They count as warlock cantrips for you, but they don\u2019t count against your number of cantrips known."
        ]
      },
      {
        "title": "Healing Light",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you gain the ability to channel celestial energy to heal wounds. You have a pool of d6s that you spend to fuel this healing. The number of dice in the pool equals 1 + your warlock level.",
          "As a bonus action, you can heal one creature you can see within 60 feet of you, spending dice from the pool. The maximum number of dice you can spend at once equals your Charisma modifier (minimum of one die). Roll the dice you spend, add them together, and restore a number of hit points equal to the total.",
          "Your pool regains all expended dice when you finish a long rest."
        ]
      },
      {
        "title": "Radiant Soul",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, your link to the Celestial allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant or fire damage, you add your Charisma modifier to one radiant or fire damage roll of that spell against one of its targets."
        ]
      },
      {
        "title": "Celestial Resistance",
        "isSubclassFeature": true,
        "details": [
          "Starting at 10th level, you gain temporary hit points whenever you finish a short or long rest. These temporary hit points equal your warlock level + your Charisma modifier. Additionally, choose up to five creatures you can see at the end of the rest. Those creatures each gain temporary hit points equal to half your warlock level + your Charisma modifier."
        ]
      },
      {
        "title": "Searing Vengeance",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, the radiant energy you channel allows you to resist death. When you have to make a death saving throw at the start of your turn, you can instead spring back to your feet with a burst of radiant energy. You regain hit points equal to half your hit point maximum, and then you stand up if you so choose. Each creature of your choice that is within 30 feet of you takes radiant damage equal to 2d8 + your Charisma modifier, and is blinded until the end of the current turn.",
          "Once you use this feature, you can\u2019t use it again until you finish a long rest."
        ]
      },
      {
        "title": "Expanded Spell List",
        "isSubclassFeature": true,
        "details": [
          "The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
          {
            "title": "Fiend Expanded Spells",
            "rows": [
              {
                "key": 2,
                "spellLevel": "1st",
                "spells": "Burning Hands, Command"
              },
              {
                "key": 3,
                "spellLevel": "2nd",
                "spells": "Blindness/Deafness, Scorching Ray"
              },
              {
                "key": 4,
                "spellLevel": "3rd",
                "spells": "Fireball, Stinking Cloud"
              },
              {
                "key": 5,
                "spellLevel": "4th",
                "spells": "Fire Shield, Wall of Fire"
              },
              {
                "key": 6,
                "spellLevel": "5th",
                "spells": "Flame Strike, Hallow"
              }
            ],
            "columns": [
              {
                "title": "Spell Level",
                "dataIndex": "spellLevel",
                "key": "spellLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Dark One's Blessing",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1)."
        ]
      },
      {
        "title": "Dark One's Own Luck",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur.",
          "Once you use this feature, you can't use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Fiendish Resilience",
        "isSubclassFeature": true,
        "details": [
          "Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance."
        ]
      },
      {
        "title": "Hurl Through Hell",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.",
          "At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.",
          "Once you use this feature, you can't use it again until you finish a long rest."
        ]
      },
      {
        "title": "Expanded Spell List",
        "isSubclassFeature": true,
        "details": [
          "The Great Old One lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
          {
            "title": "Great Old One Expanded Spells",
            "rows": [
              {
                "key": 2,
                "spellLevel": "1st",
                "spells": "Dissonant Whispers, Tasha's Hideous Laughter"
              },
              {
                "key": 3,
                "spellLevel": "2nd",
                "spells": "Detect Thoughts, Phantasmal Force"
              },
              {
                "key": 4,
                "spellLevel": "3rd",
                "spells": "Clairvoyance, Sending"
              },
              {
                "key": 5,
                "spellLevel": "4th",
                "spells": "Dominate Beast, Evard's Black Tentacles"
              },
              {
                "key": 6,
                "spellLevel": "5th",
                "spells": "Dominate Person, Telekinesis"
              }
            ],
            "columns": [
              {
                "title": "Spell Level",
                "dataIndex": "spellLevel",
                "key": "spellLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Awakened Mind",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other creatures. You can communicate telepathically with any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language."
        ]
      },
      {
        "title": "Entropic Ward",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you learn to magically ward yourself against attack and to turn an enemy's failed strike into good luck for yourself. When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage if you make it before the end of your next turn.",
          "Once you use this feature, you can't use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Thought Shield",
        "isSubclassFeature": true,
        "details": [
          "Starting at 10th level, your thoughts can't be read by telepathy or other means unless you allow it. You also have resistance to psychic damage, and whenever a creature deals psychic damage to you, that creature takes the same amount of damage that you do."
        ]
      },
      {
        "title": "Create Thrall",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, you gain the ability to infect a humanoid's mind with the alien magic of your patron. You can use your action to touch an incapacitated humanoid. That creature is then charmed by you until a Remove Curse spell is cast on it, the charmed condition is removed from it, or you use this feature again.",
          "You can communicate telepathically with the charmed creature as long as the two of you are on the same plane of existence."
        ]
      },
      {
        "title": "Expanded Spell List",
        "isSubclassFeature": true,
        "details": [
          "The Hexblade lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
          {
            "title": "Hexblade Expanded Spells",
            "rows": [
              {
                "key": 2,
                "spellLevel": "1st",
                "spells": "Shield, Wrathful Smite"
              },
              {
                "key": 3,
                "spellLevel": "2nd",
                "spells": "Blur, Branding Smite"
              },
              {
                "key": 4,
                "spellLevel": "3rd",
                "spells": "Blink, Elemental Weapon"
              },
              {
                "key": 5,
                "spellLevel": "4th",
                "spells": "Phantasmal Killer, Staggering Smite"
              },
              {
                "key": 6,
                "spellLevel": "5th",
                "spells": "Banishing Smite, Cone of Cold"
              }
            ],
            "columns": [
              {
                "title": "Spell Level",
                "dataIndex": "spellLevel",
                "key": "spellLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Hexblade's Curse",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, you gain the ability to place a baleful curse on someone. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. The curse ends early if the target dies, you die, or you are incapacitated. Until the curse ends, you gain the following benefits:",
          "\u2022 You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus.",
          "\u2022 Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the d20.",
          "\u2022 If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier (minimum of 1 hit point).",
          "You can\u2019t use this feature again until you finish a short or long rest."
        ]
      },
      {
        "title": "Hex Warrior",
        "isSubclassFeature": true,
        "details": [
          "At 1st level, you acquire the training necessary to effectively arm yourself for battle. You gain proficiency with medium armor, shields, and martial weapons.",
          "The influence of your patron also allows you to mystically channel your will through a particular weapon. Whenever you finish a long rest, you can touch one weapon that you are proficient with and that lacks the two-handed property. When you attack with that weapon, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls. This benefit lasts until you finish a long rest. If you later gain the Pact of the Blade feature, this benefit extends to every pact weapon you conjure with that feature, no matter the weapon's type."
        ]
      },
      {
        "title": "Accursed Specter",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can curse the soul of a person you slay, temporarily binding it in your service. When you slay a humanoid, you can cause its spirit to rise from its corpse as a specter. When the specter appears, it gains temporary hit points equal to half your warlock level. Roll initiative for the specter, which has its own turns. It obeys your verbal commands, and it gains a special bonus to its attack rolls equal to your Charisma modifier (minimum of +0).",
          "The specter remains in your service until the end of your next long rest, at which point it vanishes to the afterlife.",
          "Once you bind a specter with this feature, you can't use the feature again until you finish a long rest."
        ]
      },
      {
        "title": "Armor of Hexes",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, your hex grows more powerful. If the target cursed by your Hexblade\u2019s Curse hits you with an attack roll, roll a d6. On a 4 or higher, the attack instead misses you, regardless of its roll."
        ]
      },
      {
        "title": "Master of Hexes",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you can spread your Hexblade's Curse from a slain creature to another creature. When the creature cursed by your Hexblade's Curse dies, you can apply the curse to a different creature you can see within 30 feet of you, provided you aren't incapacitated. When you apply the curse in this way, you don't regain hit points from the death of the previously cursed creature."
        ]
      },
      {
        "title": "Expanded Spell List",
        "isSubclassFeature": true,
        "details": [
          "The Kraken lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
          {
            "title": "Kraken Expanded Spells",
            "rows": [
              {
                "key": 2,
                "spellLevel": "1st",
                "spells": "Create or Destroy Water, Thunderwave"
              },
              {
                "key": 3,
                "spellLevel": "2nd",
                "spells": "Augury, Gust of Wind"
              },
              {
                "key": 4,
                "spellLevel": "3rd",
                "spells": "Call Lightning, Water Breathing"
              },
              {
                "key": 5,
                "spellLevel": "4th",
                "spells": "Control Water, Evard's Black Tentacles"
              },
              {
                "key": 6,
                "spellLevel": "5th",
                "spells": "Commune With Nature, Cone of Cold"
              }
            ],
            "columns": [
              {
                "title": "Spell Level",
                "dataIndex": "spellLevel",
                "key": "spellLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Grasp of the Kraken",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, you gain the ability to call forth spectral tentacles that grab at your foes. As an action, pick a point you can see within 60 feet of you. A horde of grasping tendrils appears at that point. Creatures of your choice within 10 feet of that point must make a Strength saving throw against your warlock spell save DC. Creatures that fail their saving throws are grappled for 1 minute or until you use this ability again. The spectral tentacle's Strength (Athletics) bonus is 2 + your proficiency bonus and its reach is 10 feet."
        ]
      },
      {
        "title": "Inky Escape",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to call upon your patron to escape from your foes. As a reaction when you take damage, you can cast Darkness centered on a point within 5 feet of you. The spell lasts until the end of your next turn, and it has no effect on your vision. Once you use this ability, you cannot use it again until you complete a short or long rest."
        ]
      },
      {
        "title": "Scion of the Depths",
        "isSubclassFeature": true,
        "details": [
          "Starting at 10th level, your patron accepts you into its inner court of servitors. You gain the ability to breathe water and a swim speed equal to your normal speed. You gain immunity to lightning damage. When your immunity reduces damage from an effect to 0, you can use your reaction to cause creatures of your choice that you can see within 30 feet of you to take lightning damage equal to your Charisma modifier + your proficiency bonus."
        ]
      },
      {
        "title": "Unleash the Kraken",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, you gain the ability to call upon your patron for aid. As an action, you open a portal at a point you can see within 30 feet of you and choose one of the following effects.",
          "\u2022 ***Transport.*** You and up to 5 willing creatures of your choice that you can see are grasped by tentacles that emerge from the portal. A second portal opens at a point of your choice within 100 miles that you have visited within the past 24 hours. A second portal opens, depositing you and your chosen allies there.",
          "\u2022 ***Fury.*** The tentacles slam onto your foes. Pick up to 5 creatures that you can see within 30 feet of the portal. Those creatures must make Dexterity saving throws against your warlock spell save DC. Creatures that fail their saving throw take 10d6 bludgeoning damage and are restrained for 1 minute. Those that succeed take half the bludgeoning damage and are not restrained. On its turn, a restrained creature can use its action to attempt a DC 15 Strength (Athletics) or Dexterity (Acrobatics) check to end the restrained condition.",
          "Once you use this ability, you cannot use it again until you complete a long rest."
        ]
      },
      {
        "title": "Expanded Spell List",
        "isSubclassFeature": true,
        "details": [
          "The Raven Queen lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
          {
            "title": "Raven Queen Expanded Spells",
            "rows": [
              {
                "key": 2,
                "spellLevel": "1st",
                "spells": "False Life, Sanctuary"
              },
              {
                "key": 3,
                "spellLevel": "2nd",
                "spells": "Silence, Spiritual Weapon"
              },
              {
                "key": 4,
                "spellLevel": "3rd",
                "spells": "Feign Death, Speak with Dead"
              },
              {
                "key": 5,
                "spellLevel": "4th",
                "spells": "Ice Storm, Locate Creature"
              },
              {
                "key": 6,
                "spellLevel": "5th",
                "spells": "Commune, Cone of Cold"
              }
            ],
            "columns": [
              {
                "title": "Spell Level",
                "dataIndex": "spellLevel",
                "key": "spellLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Sentinel Raven",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, you gain the service of a spirit sent by the Raven Queen to watch over you. The spirit assumes the form and game statistics of a raven, and it always obeys your commands, which you can give telepathically while it is within 100 feet of you.",
          "While the raven is perched on your shoulder, you gain darkvision with a range of 30 feet and a bonus to your passive Wisdom (Perception) score and to Wisdom (Perception) checks. The bonus equals your Charisma modifier. While perched on your shoulder, the raven can\u2019t be targeted by any attack or other harmful effect; only you can cast spells on it; it can\u2019t take damage; and it is incapacitated.",
          "You can see through the raven\u2019s eyes and hear what it hears while it is within 100 feet of you.",
          "In combat, you roll initiative for the raven and control how it acts. If it is slain by a creature, you gain advantage on all attack rolls against the killer for the next 24 hours.",
          "The raven doesn\u2019t require sleep. While it is within 100 feet of you, it can awaken you from sleep as a bonus action.",
          "The raven vanishes when it dies, if you die, or if the two of you are separated by more than 5 miles.",
          "At the end of a short or long rest, you can call the raven back to you\u2014no matter where it is or whether it died\u2014and it reappears within 5 feet of you."
        ]
      },
      {
        "title": "Soul of the Raven",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to merge with your raven spirit. As a bonus action when your raven is perched on your shoulder, your body merges with your raven\u2019s form. While merged, you become Tiny, you replace your speed with the raven\u2019s, and you can use your action only to Dash, Disengage, Dodge, Help, Hide, or Search. During this time, you gain the benefits of your raven being perched on your shoulder. As an action, you and the raven return to normal."
        ]
      },
      {
        "title": "Raven's Shield",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, the Raven Queen grants you a protective blessing. You gain advantage on death saving throws, immunity to the frightened condition, and resistance to necrotic damage."
        ]
      },
      {
        "title": "Queen's Right Hand",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you can channel the Raven Queen\u2019s power to slay a creature. You can cast Finger of Death. After you cast the spell with this feature, you can\u2019t do so again until you finish a long rest."
        ]
      },
      {
        "title": "Expanded Spell List",
        "isSubclassFeature": true,
        "details": [
          "The Seeker lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
          {
            "title": "Seeker Expanded Spells",
            "rows": [
              {
                "key": 2,
                "spellLevel": "1st",
                "spells": "Feather Fall, Jump"
              },
              {
                "key": 3,
                "spellLevel": "2nd",
                "spells": "Levitate, Locate Object"
              },
              {
                "key": 4,
                "spellLevel": "3rd",
                "spells": "Clairvoyance, Sending"
              },
              {
                "key": 5,
                "spellLevel": "4th",
                "spells": "Arcane Eye, Locate Creature"
              },
              {
                "key": 6,
                "spellLevel": "5th",
                "spells": "Legend Lore, Passwall"
              }
            ],
            "columns": [
              {
                "title": "Spell Level",
                "dataIndex": "spellLevel",
                "key": "spellLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Shielding Aurora",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, you can invoke the Seeker\u2019s power to protect you from harm. As a bonus action, you create a whirling aurora of brilliant energy that swirls around you. Until the end of your next turn, you gain resistance to all damage, and if a hostile creature ends its turn within 10 feet of you, it takes radiant damage equal to your warlock level + your Charisma modifier.",
          "Once you use this feature, you can\u2019t use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Pact Boon: Pact of the Star Chain",
        "isSubclassFeature": true,
        "details": [
          "At 3rd level, a character dedicated to the Seeker can select this option instead of one of the warlock\u2019s existing Pact Boon options.",
          "The Seeker grants you a chain forged from starlight, decorated with seven gleaming motes of brightness. While the chain is on your person, you know the augury spell and can cast it as a ritual. The spell doesn\u2019t count against your number of spells known.",
          "Additionally, you can invoke the Seeker\u2019s power to gain advantage on an Intelligence check while you carry this item. Once you use this ability, you cannot use it again until you complete a short or long rest.",
          "If you lose your Star Chain, you can perform a 1-hour ceremony to receive a replacement from the Seeker. The ceremony can be performed during a short or long rest, and it destroys the previous chain. The chain disappears in a flash of light when you die.",
          "The exact form of this item might be different depending on your patron. The Star Chain is inspired by the Greyhawk deity Celestian."
        ]
      },
      {
        "title": "Astral Refuge",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain the ability to step into an astral refuge. As an action, you disappear from the world for a brief moment and enter the Astral Plane, taking advantage of its timeless nature. While in your astral refuge, you can take two actions to cast spells that target only you. After using those two actions, you return to the space you occupied and your turn ends."
        ]
      },
      {
        "title": "Far Wanderer",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you no longer need to breathe, and you gain resistance to fire damage and cold damage."
        ]
      },
      {
        "title": "Astral Sequestration",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you gain the ability to sequester yourself and your allies on the Astral Plane.",
          "By performing a special ritual over the course of 5 minutes, you shift yourself and up to ten willing creatures you can see to the Astral Plane. You and those creatures gain the benefits of a short rest while sequestered on the Astral Plane. You then return to the spaces you all occupied when you used this ability, with no time having passed in the world.",
          "During this short rest, you and the creatures you sequester can make use of any options available during a rest that affect only you and the creatures you sequester.",
          "Once you use this ability, you cannot use it again until you complete a long rest."
        ]
      },
      {
        "title": "Expanded Spell List",
        "isSubclassFeature": true,
        "details": [
          "The Undying lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
          {
            "title": "Undying Expanded Spells",
            "rows": [
              {
                "key": 2,
                "spellLevel": "1st",
                "spells": "False Life, Ray of Sickness"
              },
              {
                "key": 3,
                "spellLevel": "2nd",
                "spells": "Blindness/Deafness, Silence"
              },
              {
                "key": 4,
                "spellLevel": "3rd",
                "spells": "Feign Death, Speak with Dead"
              },
              {
                "key": 5,
                "spellLevel": "4th",
                "spells": "Aura of Life, Death Ward"
              },
              {
                "key": 6,
                "spellLevel": "5th",
                "spells": "Contagion, Legend Lore"
              }
            ],
            "columns": [
              {
                "title": "Spell Level",
                "dataIndex": "spellLevel",
                "key": "spellLevel"
              },
              {
                "title": "Spells",
                "dataIndex": "spells",
                "key": "spells"
              }
            ]
          }
        ]
      },
      {
        "title": "Among the Dead",
        "isSubclassFeature": true,
        "details": [
          "Starting at 1st level, you learn the Spare the Dying cantrip, which counts as a warlock cantrip for you. You also have advantage on saving throws against any disease.",
          "Additionally, undead have difficulty harming you. If an undead targets you directly with an attack or a harmful spell, that creature must make a Wisdom saving throw against your spell save DC (an undead needn't make the save when it includes you in an area effect, such as the explosion of Fireball). On a failed save, the creature must choose a new target or forfeit targeting someone instead of you, potentially wasting the attack or spell. On a successful save, the creature is immune to this effect for 24 hours. An undead is also immune to this effect for 24 hours if you target it with an attack or a harmful spell."
        ]
      },
      {
        "title": "Defy Death",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can give yourself vitality when you cheat death or when you help someone else cheat it. You can regain hit points equal to 1d8 + your Constitution modifier (minimum of 1 hit point) when you succeed on a death saving throw or when you stabilize a creature with Spare the Dying.",
          "Once you use this feature, you can't use it again until you finish a long rest."
        ]
      },
      {
        "title": "Undying Nature",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 10th level, you can hold your breath indefinitely, and you don't require food, water, or sleep, although you still require rest to reduce exhaustion and still benefit from finishing short and long rests.",
          "In addition, you age at a slower rate. For every 10 years that pass, your body ages only 1 year, and you are immune to being magically aged."
        ]
      },
      {
        "title": "Indestructible Life",
        "isSubclassFeature": true,
        "details": [
          "When you reach 14th level, you partake of some of the true secrets of the Undying. On your turn, you can use a bonus action to regain hit points equal to 1d8 + your warlock level. Additionally, if you put a severed body part of yours back in place when you use this feature, the part reattaches.",
          "Once you use this feature, you can't use it again until you finish a short or long rest."
        ]
      }
    ],
    "subclass": {
      "title": "Otherworldly Patron",
      "prefix": "The ",
      "suffix": null,
      "levels": [
        1,
        6,
        10,
        14
      ],
      "archetypes": {
        "ARCHFEY": {
          "title": "Archfey",
          "restrictions": [
            
          ],
          "details": [
            "Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being's motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power or the settling of age-old grudges. Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and ancient hags."
          ],
          "features": [
            [
              {
                "name": "Expanded Spell List",
                "id": 7
              },
              {
                "name": "Fey Presence",
                "id": 8
              }
            ],
            [
              {
                "name": "Misty Escape",
                "id": 9
              }
            ],
            [
              {
                "name": "Beguiling Defenses",
                "id": 10
              }
            ],
            [
              {
                "name": "Dark Delirium",
                "id": 11
              }
            ]
          ]
        },
        "CELESTIAL": {
          "title": "Celestial",
          "restrictions": [
            
          ],
          "details": [
            "Your patron is a powerful being of the Upper Planes. You have bound yourself to an ancient empyrean, solar, ki-rin, unicorn, or other entity that resides in the planes of everlasting bliss. Your pact with that being allows you to experience the barest touch of the holy light that illuminates the multiverse.",
            "Being connected to such power can cause changes to your behavior and beliefs. You might find yourself driven to annihilate the undead, to defeat fiends, and to protect the innocent. At times, your heart might also be filled with a longing for the celestial realm of your patron, a desire to wander that paradise for the rest of your days. But you know that your mission is among mortals for now and that your pact binds you to bring light to the dark places of the world."
          ],
          "features": [
            [
              {
                "name": "Expanded Spell List",
                "id": 12
              },
              {
                "name": "Bonus Cantrips",
                "id": 13
              },
              {
                "name": "Healing Light",
                "id": 14
              }
            ],
            [
              {
                "name": "Radiant Soul",
                "id": 15
              }
            ],
            [
              {
                "name": "Celestial Resistance",
                "id": 16
              }
            ],
            [
              {
                "name": "Searing Vengeance",
                "id": 17
              }
            ]
          ]
        },
        "FIEND": {
          "title": "Fiend",
          "restrictions": [
            
          ],
          "details": [
            "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths."
          ],
          "features": [
            [
              {
                "name": "Expanded Spell List",
                "id": 18
              },
              {
                "name": "Dark One's Blessing",
                "id": 19
              }
            ],
            [
              {
                "name": "Dark One's Own Luck",
                "id": 20
              }
            ],
            [
              {
                "name": "Fiendish Resilience",
                "id": 21
              }
            ],
            [
              {
                "name": "Hurl Through Hell",
                "id": 22
              }
            ]
          ]
        },
        "GREAT_OLD_ONE": {
          "title": "Great Old One",
          "restrictions": [
            
          ],
          "details": [
            "Your patron is a mysterious entity whose nature is utterly foreign to the fabric of reality. It might come from the Far Realm, the space beyond reality, or it could be one of the elder gods known only in legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even the greatest libraries pale in comparison to the vast secrets it holds. The Great Old One might be unaware of your existence or entirely indifferent to you, but the secrets you have learned allow you to draw your magic from it.",
            "Entities of this type include Ghaunadar, called That Which Lurks; Tharizdun, the Chained God; Dendar, the Night Serpent; Zargon, the Returner; Great Cthulhu; and other unfathomable beings."
          ],
          "features": [
            [
              {
                "name": "Expanded Spell List",
                "id": 23
              },
              {
                "name": "Awakened Mind",
                "id": 24
              }
            ],
            [
              {
                "name": "Entropic Ward",
                "id": 25
              }
            ],
            [
              {
                "name": "Thought Shield",
                "id": 26
              }
            ],
            [
              {
                "name": "Create Thrall",
                "id": 27
              }
            ]
          ]
        },
        "HEXBLADE": {
          "title": "Hexblade",
          "restrictions": [
            
          ],
          "details": [
            "You have made your pact with a mysterious entity from the Shadowfell \u2013 a force that manifests in sentient magic weapons carved from the stuff of shadow. The mighty sword Blackrazor is the most notable of these weapons, which have been spread across the multiverse over the ages. The shadowy force behind these weapons can offer power to warlocks who form pacts with it. Many hexblade warlocks create weapons that emulate those formed in the Shadowfell. Others forgo such arms, content to weave the dark magic of that plane into their spellcasting.",
            "Because the Raven Queen is known to have forged the first of these weapons, many sages speculate that she and the force are one and that the weapons, along with hexblade warlocks, are tools she uses to manipulate events on the Material Plane to her inscrutable ends."
          ],
          "features": [
            [
              {
                "name": "Expanded Spell List",
                "id": 28
              },
              {
                "name": "Hexblade's Curse",
                "id": 29
              },
              {
                "name": "Hex Warrior",
                "id": 30
              }
            ],
            [
              {
                "name": "Accursed Specter",
                "id": 31
              }
            ],
            [
              {
                "name": "Armor of Hexes",
                "id": 32
              }
            ],
            [
              {
                "name": "Master of Hexes",
                "id": 33
              }
            ]
          ]
        },
        "KRAKEN_(UA)": {
          "title": "Kraken",
          "restrictions": [
            
          ],
          "details": [
            "You have made a pact with a kraken that lurks somewhere in the oceans of the world. Krakens are ancient and terrifying creatures; incomprehensible alien knowledge lurks within their minds. Krakens are known to control the rain and storms in the region around them, thus drawing many farmers or sailors to worship krakens in hopes of fair weather."
          ],
          "features": [
            [
              {
                "name": "Expanded Spell List",
                "id": 34
              },
              {
                "name": "Grasp of the Kraken",
                "id": 35
              }
            ],
            [
              {
                "name": "Inky Escape",
                "id": 36
              }
            ],
            [
              {
                "name": "Scion of the Depths",
                "id": 37
              }
            ],
            [
              {
                "name": "Unleash the Kraken",
                "id": 38
              }
            ]
          ]
        },
        "RAVEN_QUEEN_(UA)": {
          "title": "Raven Queen",
          "restrictions": [
            
          ],
          "details": [
            "Your patron is the Raven Queen, a mysterious being who rules the Shadowfell from a palace of ice deep within that dread realm. The Raven Queen watches over the world, anticipating each creature\u2019s death and ensuring that it meets its end at the proscribed time and place. As the ruler of the Shadowfell, she dwells in a decayed, dark reflection of the world. Her ability to reach into the world is limited. Thus, she turns to mortal warlocks to serve her will. Warlocks sworn to the Raven Queen receive visions and whispers from her in their dreams, sending them on quests and warning them of impending dangers.",
            "The Raven Queen\u2019s followers are expected to serve her will in the world. She concerns herself with ensuring that those fated to die pass from the world as expected, and bids her agents to defeat those who seek to cheat death through undeath or other imitations of immortality. She hates intelligent undead and expects her followers to strike them down, whereas mindless undead such as skeletons and zombies are little more than stumbling automatons in her eyes."
          ],
          "features": [
            [
              {
                "name": "Expanded Spell List",
                "id": 39
              },
              {
                "name": "Sentinel Raven",
                "id": 40
              }
            ],
            [
              {
                "name": "Soul of the Raven",
                "id": 41
              }
            ],
            [
              {
                "name": "Raven's Shield",
                "id": 42
              }
            ],
            [
              {
                "name": "Queen's Right Hand",
                "id": 43
              }
            ]
          ]
        },
        "SEEKER_(UA)": {
          "title": "Seeker",
          "restrictions": [
            
          ],
          "details": [
            "Your patron is an inscrutable being who travels the Astral Plane in search of knowledge and secrets. In return for your patron\u2019s gifts, you wander the world seeking lore that you can share with the Seeker.",
            "Your patron could be any deity or other powerful entity dedicated to knowledge or forgotten lore. Celestian is an ideal patron for a Greyhawk campaign, and was the inspiration for this concept. In the Forgotten Realms, your patron might be Azuth or Oghma. Aureon makes an excellent patron in Eberron, while in Krynn and the Dragonlance campaign setting, Gilean is a good match for the Seeker\u2019s role."
          ],
          "features": [
            [
              {
                "name": "Expanded Spell List",
                "id": 44
              },
              {
                "name": "Shielding Aurora",
                "id": 45
              },
              {
                "name": "Pact Boon: Pact of the Star Chain",
                "id": 46
              }
            ],
            [
              {
                "name": "Astral Refuge",
                "id": 47
              }
            ],
            [
              {
                "name": "Far Wanderer",
                "id": 48
              }
            ],
            [
              {
                "name": "Astral Sequestration",
                "id": 49
              }
            ]
          ]
        },
        "UNDYING": {
          "title": "Undying",
          "restrictions": [
            
          ],
          "details": [
            "Death holds no sway over your patron, who has unlocked the secrets of everlasting life, although such a prize \u2013 like all power \u2013 comes at a price. Once mortal, the Undying has seen mortal lifetimes pass like the seasons, like the flicker of endless days and nights. It has the secrets of the ages to share, secrets of life and death. Beings of this sort include Vecna, Lord of the Hand and the Eye; the dread Iuz; the lich-queen Vol; the Undying Court of Aerenal; Vlaakith, lich-queen of the githyanki; and the deathless wizard Fistandantalus.",
            "In the Realms, Undying patrons include Larloch the Shadow King, legendary master of Warlock's Crypt, and Gilgeam, the God-King of Unther."
          ],
          "features": [
            [
              {
                "name": "Expanded Spell List",
                "id": 50
              },
              {
                "name": "Among the Dead",
                "id": 51
              }
            ],
            [
              {
                "name": "Defy Death",
                "id": 52
              }
            ],
            [
              {
                "name": "Undying Nature",
                "id": 53
              }
            ],
            [
              {
                "name": "Indestructible Life",
                "id": 54
              }
            ]
          ]
        }
      }
    }
  },
  "WIZARD": {
    "title": "Wizard",
    "route": "wizard",
    "image": "wizard.svg",
    "details": [
      "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, brute-force mind control, and much more.",
      "**You must have an Intelligence score of 13 or higher in order to multiclass in or out of this class.**"
    ],
    "tym": [
      "harry potter phase never ended",
      "lights up scented candles as a coping mechanism",
      "in debt cause of books and candles"
    ],
    "summary": "A scholarly magic-user capable of manipulating the structures of reality with their nerd powers.",
    "recommendedStats": [
      "Intelligence",
      "Wisdom"
    ],
    "spellcasting": {
      "details": [
        "As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power. See Spells Rules for the general rules of spellcasting and the Spells Listing for the wizard spell list."
      ],
      "preparing": [
        "The Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell\u2019s level or higher. You regain all expended spell slots when you finish a long rest.",
        "You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.",
        "For example, if you\u2019re a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn\u2019t remove it from your list of prepared spells.",
        "You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list."
      ],
      "ability": [
        "Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one."
      ],
      "mod": "INT",
      "save": 8,
      "other": [
        {
          "title": "Ritual Casting",
          "text": "You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don\u2019t need to have the spell prepared."
        },
        {
          "title": "Spellcasting Focus",
          "text": "You can use an arcane focus (see the Adventuring Gear section) as a spellcasting focus for your wizard spells."
        },
        {
          "title": "Learning Spells of 1st Level and Higher",
          "text": "Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook for free. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook (see the \u201cYour Spellbook\u201d sidebar)."
        }
      ]
    },
    "hitDice": 6,
    equipment: [
      [Item(WEAPONS.SIMPLE.MELEE.QUARTERSTAFF), Item(WEAPONS.SIMPLE.MELEE.DAGGER)],
      [Item(ITEMS.ARCANE_SUPPLIES.COMPONENT_POUCH), Item(ITEMS.ARCANE_FOCUS)],
      [Item(ITEMS.STARTER_PACK.SCHOLAR), Item(ITEMS.STARTER_PACK.EXPLORER)],
      [Item(ITEMS.ARCANE_SUPPLIES.SPELLBOOK)]
    ],
    proficiencies: {
      armor: [],
      weapons: [
        WEAPONS.SIMPLE.MELEE.DAGGER, WEAPONS.SIMPLE.RANGED.DART, WEAPONS.SIMPLE.RANGED.SLING,
        WEAPONS.SIMPLE.MELEE.QUARTERSTAFF, WEAPONS.SIMPLE.RANGED.LIGHT_CROSSBOW
      ],
      tools: [],
      savingThrows: [STATS.INT, STATS.WIS],
      skills: {
        choose: 2,
        options: [
          SKILLS.ARCANA, 
          SKILLS.HISTORY, 
          SKILLS.INSIGHT, 
          SKILLS.INVESTIGATION, 
          SKILLS.MEDICINE, 
          SKILLS.RELIGION
        ]
      }
    },
    "asi": [
      4,
      8,
      12,
      16,
      19
    ],
    "levelTable": {
      "title": "The Wizard",
      "rows": [
        {
          "key": 2,
          "level": "1st",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Spellcasting",
              "id": 0
            },
            {
              "name": "Arcane Recovery",
              "id": 1
            }
          ],
          "cantripsKnown": "3",
          "1st": "2",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 3,
          "level": "2nd",
          "proficiencyBonus": "+2",
          "features": [
            {
              "name": "Arcane Tradition",
              "id": 2
            }
          ],
          "cantripsKnown": "3",
          "1st": "3",
          "2nd": "-",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 4,
          "level": "3rd",
          "proficiencyBonus": "+2",
          "features": [
            
          ],
          "cantripsKnown": "3",
          "1st": "4",
          "2nd": "2",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 5,
          "level": "4th",
          "proficiencyBonus": "+2",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "-",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 6,
          "level": "5th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "2",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 7,
          "level": "6th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "-",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 8,
          "level": "7th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "1",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 9,
          "level": "8th",
          "proficiencyBonus": "+3",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "2",
          "5th": "-",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 10,
          "level": "9th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "4",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "1",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 11,
          "level": "10th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "-",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 12,
          "level": "11th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 13,
          "level": "12th",
          "proficiencyBonus": "+4",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "-",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 14,
          "level": "13th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 15,
          "level": "14th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "-",
          "9th": "-"
        },
        {
          "key": 16,
          "level": "15th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "-"
        },
        {
          "key": 17,
          "level": "16th",
          "proficiencyBonus": "+5",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "-"
        },
        {
          "key": 18,
          "level": "17th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "2",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 19,
          "level": "18th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Spell Mastery",
              "id": 4
            }
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "1",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 20,
          "level": "19th",
          "proficiencyBonus": "+6",
          "features": [
            
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "2",
          "7th": "1",
          "8th": "1",
          "9th": "1"
        },
        {
          "key": 21,
          "level": "20th",
          "proficiencyBonus": "+6",
          "features": [
            {
              "name": "Signature Spells",
              "id": 5
            }
          ],
          "cantripsKnown": "5",
          "1st": "4",
          "2nd": "3",
          "3rd": "3",
          "4th": "3",
          "5th": "3",
          "6th": "2",
          "7th": "2",
          "8th": "1",
          "9th": "1"
        }
      ],
      "columns": [
        {
          "title": "Level",
          "dataIndex": "level",
          "key": "level",
          "align": "center"
        },
        {
          "title": "Proficiency Bonus",
          "dataIndex": "proficiencyBonus",
          "key": "proficiencyBonus",
          "align": "center"
        },
        {
          "title": "Features",
          "dataIndex": "features",
          "key": "features",
          "align": "center"
        },
        {
          "title": "Cantrips Known",
          "dataIndex": "cantripsKnown",
          "key": "cantripsKnown",
          "align": "center"
        },
        {
          "title": "Spell Slots per Spell Level",
          "dataIndex": "spellSlotsPerSpellLevel",
          "key": "spellSlotsPerSpellLevel",
          "children": [
            {
              "title": "1st",
              "dataIndex": "1st",
              "key": "1st",
              "align": "center"
            },
            {
              "title": "2nd",
              "dataIndex": "2nd",
              "key": "2nd",
              "align": "center"
            },
            {
              "title": "3rd",
              "dataIndex": "3rd",
              "key": "3rd",
              "align": "center"
            },
            {
              "title": "4th",
              "dataIndex": "4th",
              "key": "4th",
              "align": "center"
            },
            {
              "title": "5th",
              "dataIndex": "5th",
              "key": "5th",
              "align": "center"
            },
            {
              "title": "6th",
              "dataIndex": "6th",
              "key": "6th",
              "align": "center"
            },
            {
              "title": "7th",
              "dataIndex": "7th",
              "key": "7th",
              "align": "center"
            },
            {
              "title": "8th",
              "dataIndex": "8th",
              "key": "8th",
              "align": "center"
            },
            {
              "title": "9th",
              "dataIndex": "9th",
              "key": "9th",
              "align": "center"
            }
          ],
          "align": "center"
        }
      ],
      "featuresIndex": 2
    },
    "features": [
      {
        "title": "Spellcasting",
        "isSubclassFeature": false,
        "details": [
          "As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.",
          "**As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.**",
          "At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.",
          "**At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.**",
          "At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice.",
          "The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library.",
          "***Copying a Spell into the Book.*** When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a level for which you have spell slots and if you can spare the time to decipher and copy it.\nCopying a spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your spellbook using your own notation.\nFor each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.",
          "***Replacing the Book.*** You can copy a spell from your own spellbook into another book-for example, if you want\nto make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell.\nIf you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.",
          "***The Book's Appearance.*** Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.",
          "*****The Book's Appearance.*** Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.**",
          "The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
          "You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.",
          "For example, if you're a 3rd-level wizard, you have four 1st-1evel and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell Magic Missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
          "You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantiations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.",
          "**You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantiations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.**",
          "Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
          "**Spell save DC** = 8 + your proficiency bonus + your Intelligence modifier",
          "**Spell attack modifier** = your proficiency bonus + your Intelligence modifier",
          "****Spell attack modifier** = your proficiency bonus + your Intelligence modifier**",
          "You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.",
          "**You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.**",
          "You can use an arcane focus as a spellcasting focus for your wizard spells.",
          "**You can use an arcane focus as a spellcasting focus for your wizard spells.**",
          "Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook."
        ]
      },
      {
        "title": "Arcane Recovery",
        "isSubclassFeature": false,
        "details": [
          "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.",
          "For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."
        ]
      },
      {
        "title": "Arcane Tradition",
        "isSubclassFeature": false,
        "details": [
          "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of the following schools:\n\u2022\u00a0Abjuration\n\u2022\u00a0Bladesinger\n\u2022\u00a0Conjuration\n\u2022\u00a0Divination\n\u2022\u00a0Enchantment\n\u2022\u00a0Evocation\n\u2022\u00a0Illusion\n\u2022\u00a0Invention\n\u2022\u00a0Lore Mastery\n\u2022\u00a0Necromancy\n\u2022\u00a0Theurgy\n\u2022\u00a0Transmutation\n\u2022\u00a0War Magic\nYour choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
        ]
      },
      {
        "title": "Ability Score Improvement",
        "isSubclassFeature": false,
        "details": [
          "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
        ]
      },
      {
        "title": "Spell Mastery",
        "isSubclassFeature": false,
        "details": [
          "At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.",
          "By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels."
        ]
      },
      {
        "title": "Signature Spells",
        "isSubclassFeature": false,
        "details": [
          "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.",
          "If you want to cast either spell at a higher level, you must expend a spell slot as normal."
        ]
      },
      {
        "title": "Abjuration Savant",
        "isSubclassFeature": true,
        "details": [
          "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a abjuration spell into your spellbook is halved."
        ]
      },
      {
        "title": "Arcane Ward",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage.",
          "While the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell.",
          "Once you create the ward, you can't create it again until you finish a long rest."
        ]
      },
      {
        "title": "Projected Ward",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, when a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage."
        ]
      },
      {
        "title": "Improved Abjuration",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 10th level, when you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in Counterspell and Dispel Magic), you add your proficiency bonus to that ability check."
        ]
      },
      {
        "title": "Spell Resistance",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you have advantage on saving throws against spells.",
          "Furthermore, you have resistance against the damage of spells."
        ]
      },
      {
        "title": "Training in War and Song",
        "isSubclassFeature": true,
        "details": [
          "When you adopt this tradition at 2nd level, you gain proficiency with light armor, and you gain proficiency with one type of one-handed melee weapon of your choice.",
          "You also gain proficiency in the Performance skill if you don't already have it."
        ]
      },
      {
        "title": "Bladesong",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can invoke a secret elven magic called the Bladesong, provided that you aren't wearing medium or heavy armor or using a shield. It graces you with supernatural speed, agility, and focus.",
          "You can use a bonus action to start the Bladesong, which lasts for 1 minute. It ends early if you are incapacitated, if you don medium or heavy armor or a shield, or if you use two hands to make an attack with a weapon. You can also dismiss the Bladesong at any time you choose (no action required).",
          "While your Bladesong is active, you gain the following benefits:",
          "\u2022 You gain a bonus to your AC equal to your Intelligence modifier (minimum of +1).",
          "\u2022\u00a0Your walking speed increases by 10 feet.",
          "\u2022\u00a0You have advantage on Dexterity (Acrobatics) checks.",
          "\u2022 You gain a bonus to any Constitution saving throw you make to maintain your concentration on a spell. The bonus equals your Intelligence modifier (minimum of +1).",
          "You can use this feature twice. You regain all expended uses of it when you finish a short or long rest."
        ]
      },
      {
        "title": "Extra Attack",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
        ]
      },
      {
        "title": "Song of Defense",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 10th level, you can direct your magic to absorb damage while your Bladesong is active. When you take damage, you can use your reaction to expend one spell slot and reduce that damage to you by an amount equal to five times the spell slot's level."
        ]
      },
      {
        "title": "Song of Victory",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you add your Intelligence modifier (minimum of +1) to the damage of your melee weapon attacks while your Bladesong is active."
        ]
      },
      {
        "title": "Conjuration Savant",
        "isSubclassFeature": true,
        "details": [
          "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Conjuration spell into your spellbook is halved."
        ]
      },
      {
        "title": "Minor Conjuration",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level when you select this school, you can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet.",
          "The object disappears after 1 hour, when you use this feature again, or if it takes any damage."
        ]
      },
      {
        "title": "Benign Transportation",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places.",
          "Once you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher."
        ]
      },
      {
        "title": "Focused Conjuration",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 10th level, while you are concentrating on a conjuration spell, your concentration can't be broken as a result of taking damage."
        ]
      },
      {
        "title": "Durable Summons",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, any creature that you summon or create with a conjuration spell has 30 temporary hit points."
        ]
      },
      {
        "title": "Divination Savant",
        "isSubclassFeature": true,
        "details": [
          "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Divination spell into your spellbook is halved."
        ]
      },
      {
        "title": "Portent",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.",
          "Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls."
        ]
      },
      {
        "title": "Expert Divination",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 6th level, casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level."
        ]
      },
      {
        "title": "The Third Eye",
        "isSubclassFeature": true,
        "details": [
          "Starting at 10th level, you can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can't use the feature again until you finish a short or long rest.",
          "***Darkvision.*** You gain darkvision out to a range of 60 feet.",
          "***Ethereal Sight.*** You can see into the Ethereal Plane within 60 feet of you.",
          "***Greater Comprehension.*** You can read any language.",
          "***See Invisibility.*** You can see invisible creatures and objects within 10 feet of you that are within line of sight."
        ]
      },
      {
        "title": "Greater Portent",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, the visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. You roll three d20s for your Portent feature, rather than two."
        ]
      },
      {
        "title": "Enchantment Savant",
        "isSubclassFeature": true,
        "details": [
          "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Enchantment spell into your spellbook is halved."
        ]
      },
      {
        "title": "Hypnotic Gaze",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level when you choose this school, your soft words and enchanting gaze can magically enthrall another creature. As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature's speed drops to 0, and the creature is incapacitated and visibly dazed.",
          "On subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage.",
          "Once the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can't use this feature on that creature again until you finish a long rest."
        ]
      },
      {
        "title": "Instinctive Charm",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 6th level, when a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack's range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target.",
          "On a successful save, you can't use this feature on the attacker again until you finish a long rest.",
          "You must choose to use this feature before knowing whether the attack hits or misses. Creatures that can't be charmed are immune to this effect."
        ]
      },
      {
        "title": "Split Enchantment",
        "isSubclassFeature": true,
        "details": [
          "Starting at 10th level, when you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature."
        ]
      },
      {
        "title": "Alter Memories",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, you gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature's understanding so that it remains unaware of being charmed.",
          "Additionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its memories equal to 1 + your Charisma modifier (minimum 1). You can make the creature forget less time, and the amount of time can't exceed the duration of your enchantment spell."
        ]
      },
      {
        "title": "Evocation Savant",
        "isSubclassFeature": true,
        "details": [
          "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Evocation spell into your spellbook is halved."
        ]
      },
      {
        "title": "Sculpt Spells",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
        ]
      },
      {
        "title": "Potent Cantrip",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip."
        ]
      },
      {
        "title": "Empowered Evocation",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 10th level, you can add your Intelligence modifier (minimum of +1) to the damage roll of any wizard evocation spell that you cast. The damage bonus applies to one damage roll of a spell, not multiple rolls."
        ]
      },
      {
        "title": "Overchannel",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 5th level or lower that deals damage and isn't a cantrip, you can deal maximum damage with that spell.",
          "The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity."
        ]
      },
      {
        "title": "Illusion Savant",
        "isSubclassFeature": true,
        "details": [
          "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Illusion spell into your spellbook is halved."
        ]
      },
      {
        "title": "Improved Minor Illusion",
        "isSubclassFeature": true,
        "details": [
          "When you choose this school at 2nd level, you learn the Minor Illusion cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn't count against your number of cantrips known.",
          "When you cast Minor Illusion, you can create both a sound and an image with a single casting of the spell."
        ]
      },
      {
        "title": "Malleable Illusions",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, when you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell's normal parameters for the illusion), provided that you can see the illusion."
        ]
      },
      {
        "title": "Illusory Self",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 10th level, you can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates.",
          "Once you use this feature, you can't use it again until you finish a short or long rest."
        ]
      },
      {
        "title": "Illusory Reality",
        "isSubclassFeature": true,
        "details": [
          "By 14th level, you have learned the secret of weaving shadow magic into your illusions to give them a semi-reality. When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross.",
          "The object can't deal damage or otherwise directly harm anyone."
        ]
      },
      {
        "title": "Tools of the Inventor",
        "isSubclassFeature": true,
        "details": [
          "At 2nd level, you gain proficiency with two tools of your choice."
        ]
      },
      {
        "title": "Arcanomechanical Armor",
        "isSubclassFeature": true,
        "details": [
          "Innovation is a dangerous practice, at least as far as members of this school practice it. As a shield against this risk, you have developed a suit of arcane armor.",
          "Starting at 2nd level, you gain proficiency with light armor and gain a suit of arcanomechanical armor\u2014a magic item that only you can attune to. While you are attuned to it and wearing it, it grants you resistance to force damage.",
          "The armor is light armor and provides an AC of 12 + your Dexterity modifier. It weighs 8 pounds.",
          "You can create a new suit of it at the end of a long rest by touching a nonmagical suit of studded leather armor, which magically transforms it. Doing so removes the magic from your previous arcanomechanical armor, turning it into nonmagical studded leather."
        ]
      },
      {
        "title": "Reckless Casting",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you can attempt to cast a spell you don\u2019t have prepared. When you use this ability, you use your action and choose one of the following options:",
          "\u2022 Roll on the Reckless Casting table for cantrips and cast the resulting spell as part of this action.\n\u2022 Expend a spell slot and roll twice on the Reckless Casting table for its level, or the 5th-level table if the slot is 6th level or higher. Pick which of the two results you want to use and cast the resulting spell as part of this action.",
          "If the spell you cast isn\u2019t a wizard spell, it is nonetheless a wizard spell for you when you cast it with this feature.",
          {
            "title": "Reckless Casting",
            "rows": [
              {
                "key": 2,
                "d10": "1",
                "cantrip": "Acid Splash"
              },
              {
                "key": 3,
                "d10": "2",
                "cantrip": "Chill Touch"
              },
              {
                "key": 4,
                "d10": "3",
                "cantrip": "Fire Bolt"
              },
              {
                "key": 5,
                "d10": "4",
                "cantrip": "Light"
              },
              {
                "key": 6,
                "d10": "5",
                "cantrip": "Poison Spray"
              },
              {
                "key": 7,
                "d10": "6",
                "cantrip": "Ray of Frost"
              },
              {
                "key": 8,
                "d10": "7",
                "cantrip": "Shocking Grasp"
              },
              {
                "key": 9,
                "d10": "8",
                "cantrip": "Sacred Flame"
              },
              {
                "key": 10,
                "d10": "9",
                "cantrip": "Thorn Whip"
              },
              {
                "key": 11,
                "d10": "10",
                "cantrip": "Roll twice and cast each cantrip, but if you roll another 10 on either die, you cast nothing, wasting your action."
              },
              {
                "key": 12
              },
              {
                "key": 13,
                "d10": "1",
                "cantrip": "Burning Hands"
              },
              {
                "key": 14,
                "d10": "2",
                "cantrip": "Chromatic Orb"
              },
              {
                "key": 15,
                "d10": "3",
                "cantrip": "Color Spray"
              },
              {
                "key": 16,
                "d10": "4",
                "cantrip": "Faerie Fire"
              },
              {
                "key": 17,
                "d10": "5",
                "cantrip": "False Life"
              },
              {
                "key": 18,
                "d10": "6",
                "cantrip": "Fog Cloud"
              },
              {
                "key": 19,
                "d10": "7",
                "cantrip": "Jump"
              },
              {
                "key": 20,
                "d10": "8",
                "cantrip": "Magic Missile"
              },
              {
                "key": 21,
                "d10": "9",
                "cantrip": "Thunderwave"
              },
              {
                "key": 22,
                "d10": "10",
                "cantrip": "Roll twice and cast each spell, but if you roll another 10 on either die, you cast nothing, wasting your action."
              },
              {
                "key": 23
              },
              {
                "key": 24,
                "d10": "1",
                "cantrip": "Blur"
              },
              {
                "key": 25,
                "d10": "2",
                "cantrip": "Darkness"
              },
              {
                "key": 26,
                "d10": "3",
                "cantrip": "Enlarge/Reduce"
              },
              {
                "key": 27,
                "d10": "4",
                "cantrip": "Gust of Wind"
              },
              {
                "key": 28,
                "d10": "5",
                "cantrip": "Invisibility"
              },
              {
                "key": 29,
                "d10": "6",
                "cantrip": "Levitate"
              },
              {
                "key": 30,
                "d10": "7",
                "cantrip": "Melf's Acid Arrow"
              },
              {
                "key": 31,
                "d10": "8",
                "cantrip": "Scorching Ray"
              },
              {
                "key": 32,
                "d10": "9",
                "cantrip": "Shatter"
              },
              {
                "key": 33,
                "d10": "10",
                "cantrip": "Roll twice and cast each spell, but if you roll another 10 on either die, you cast nothing, wasting your action."
              },
              {
                "key": 34
              },
              {
                "key": 35,
                "d10": "1",
                "cantrip": "Blink"
              },
              {
                "key": 36,
                "d10": "2",
                "cantrip": "Fear"
              },
              {
                "key": 37,
                "d10": "3",
                "cantrip": "Feign Death"
              },
              {
                "key": 38,
                "d10": "4",
                "cantrip": "Fireball"
              },
              {
                "key": 39,
                "d10": "5",
                "cantrip": "Fly"
              },
              {
                "key": 40,
                "d10": "6",
                "cantrip": "Gaseous Form"
              },
              {
                "key": 41,
                "d10": "7",
                "cantrip": "Lightning Bolt"
              },
              {
                "key": 42,
                "d10": "8",
                "cantrip": "Sleet Storm"
              },
              {
                "key": 43,
                "d10": "9",
                "cantrip": "Stinking Cloud"
              },
              {
                "key": 44,
                "d10": "10",
                "cantrip": "Roll twice and cast each spell, but if you roll another 10 on either die, you cast nothing, wasting your action."
              },
              {
                "key": 45
              },
              {
                "key": 46,
                "d10": "1",
                "cantrip": "Blight"
              },
              {
                "key": 47,
                "d10": "2",
                "cantrip": "Confusion"
              },
              {
                "key": 48,
                "d10": "3",
                "cantrip": "Evard's Black Tentacles"
              },
              {
                "key": 49,
                "d10": "4",
                "cantrip": "Fire Shield"
              },
              {
                "key": 50,
                "d10": "5",
                "cantrip": "Greater Invisibility"
              },
              {
                "key": 51,
                "d10": "6",
                "cantrip": "Ice Storm"
              },
              {
                "key": 52,
                "d10": "7",
                "cantrip": "Phantasmal Killer"
              },
              {
                "key": 53,
                "d10": "8",
                "cantrip": "Stoneskin"
              },
              {
                "key": 54,
                "d10": "9",
                "cantrip": "Wall of Fire"
              },
              {
                "key": 55,
                "d10": "10",
                "cantrip": "Roll twice and cast each spell, but if you roll another 10 on either die, you cast nothing, wasting your action."
              },
              {
                "key": 56
              },
              {
                "key": 57,
                "d10": "1",
                "cantrip": "Cloudkill"
              },
              {
                "key": 58,
                "d10": "2",
                "cantrip": "Cone of Cold"
              },
              {
                "key": 59,
                "d10": "3",
                "cantrip": "Destructive Wave"
              },
              {
                "key": 60,
                "d10": "4",
                "cantrip": "Flame Strike"
              },
              {
                "key": 61,
                "d10": "5",
                "cantrip": "Hold Monster"
              },
              {
                "key": 62,
                "d10": "6",
                "cantrip": "Insect Plague"
              },
              {
                "key": 63,
                "d10": "7",
                "cantrip": "Mass Cure Wounds"
              },
              {
                "key": 64,
                "d10": "8",
                "cantrip": "Wall of Force"
              },
              {
                "key": 65,
                "d10": "9",
                "cantrip": "Wall of Stone"
              },
              {
                "key": 66,
                "d10": "10",
                "cantrip": "Roll twice and cast each spell, but if you roll another 10 on either die, you cast nothing, wasting your action."
              }
            ],
            "columns": [
              {
                "title": "d10",
                "dataIndex": "d10",
                "key": "d10"
              },
              {
                "title": "Cantrip",
                "dataIndex": "cantrip",
                "key": "cantrip"
              }
            ]
          }
        ]
      },
      {
        "title": "Alchemical Casting",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you learn to channel magic through your arcanomechanical armor to augment spells in a variety of ways. When you cast a spell while wearing that armor and attuned to it, you can expend one additional spell slot of 1st or 2nd level to alter the spell. The effect depends on the spell slot you expend.",
          "A 1st-level slot allows you to manipulate the spell\u2019s energy. When you cast a spell that deals acid, cold, fire, lightning, or thunder damage, you can substitute that damage type for another one from that list.",
          "A 2nd-level slot increases the spell\u2019s raw force. If you roll damage for the spell when you cast it, increase that damage by 2d10 force damage against one of the spell\u2019s targets (your choice) this turn."
        ]
      },
      {
        "title": "Prodigious Inspiration",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you have attained a greater mastery of spell preparation. As a bonus action, you can replace one spell you have prepared with another spell from your spellbook. You can\u2019t use this ability again until you finish a short or long rest."
        ]
      },
      {
        "title": "Controlled Chaos",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, your ability to improvise magic grows stronger. Whenever you roll on a Reckless Casting table for a spell other than a cantrip, you can roll on the table that is one level higher than the expended spell slot."
        ]
      },
      {
        "title": "Lore Mastery",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, you become a compendium of knowledge on a vast array of topics. Your proficiency bonus is doubled for any ability check you make that uses the Arcana, History, Nature, or Religion skill if you are proficient in that skill.",
          "In addition, your analytical abilities are so well-honed that your initiative in combat can be driven by mental agility, rather than physical agility. When you roll initiative, it is either an Intelligence check or a Dexterity check for you (your choice)."
        ]
      },
      {
        "title": "Spell Secrets",
        "isSubclassFeature": true,
        "details": [
          "At 2nd level, you master the first in a series of arcane secrets uncovered by your extensive studies.",
          "When you cast a spell with a spell slot and the spell deals acid, cold, fire, force, lightning, necrotic, radiant, or thunder damage, you can substitute that damage type with one other type from that list (you can change only one damage type per casting of a spell). You replace one energy type for another by altering the spell\u2019s formula as you cast it.",
          "When you cast a spell with a spell slot and the spell requires a saving throw, you can change the saving throw from one ability score to another of your choice. Once you change a saving throw in this way, you can\u2019t do so again until you finish a short or long rest."
        ]
      },
      {
        "title": "Altering Spells",
        "isSubclassFeature": true,
        "details": [
          "While the Spell Secrets feature offers increased versatility, at the table its effects can be difficult to spot by the other players. If you\u2019re playing a savant, take a moment to describe how you alter your spells. Think of a signature change your character is particularly proud of. Be inventive, and make the game more fun for everyone by playing up the sudden, unexpected tricks you character can employ. For example, a Fireball transformed to require a Strength save might become a sphere of burning rock that shatters and slams into its target. A Charm Person that requires a Constitution save might take the form of a vaporous narcotic that alters the target\u2019s mood."
        ]
      },
      {
        "title": "Alchemical Casting",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you learn to augment spells in a variety of ways. When you cast a spell with a spell slot, you can expend one additional spell slot to augment its effects for this casting, mixing the raw stuff of magic into your spell to amplify it. The effect depends on the spell slot you expend.",
          "An additional 1st-level spell slot can increase the spell\u2019s raw force. If you roll damage for the spell when you cast it, increase the damage against every target by 2d10 force damage. If the spell can deal damage on more than one turn, it deals this extra force damage only on the turn you cast the spell.",
          "An additional 2nd-level spell slot can increase the spell\u2019s range. If the spell\u2019s range is at least 30 feet, it becomes 1 mile.",
          "An additional 3rd-level spell slot can increase the spell\u2019s potency. Increase the spell\u2019s save DC by 2."
        ]
      },
      {
        "title": "Prodigious Memory",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you have attained a greater mastery of spell preparation. As a bonus action, you can replace one spell you have prepared with another spell from your spellbook. You can\u2019t use this feature again until you finish a short or long rest."
        ]
      },
      {
        "title": "Master of Magic",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, your knowledge of magic allows you to duplicate almost any spell. As a bonus action, you can call to mind the ability to cast one spell of your choice from any class\u2019s spell list. The spell must be of a level for which you have spell slots, you mustn\u2019t have it prepared, and you follow the normal rules for casting it, including expending a spell slot. If the spell isn\u2019t a wizard spell, it counts as a wizard spell when you cast it. The ability to cast the spell vanishes from your mind when you cast it or when the current turn ends.",
          "You can\u2019t use this feature again until you finish a long rest."
        ]
      },
      {
        "title": "Necromancy Savant",
        "isSubclassFeature": true,
        "details": [
          "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Necromancy spell into your spellbook is halved."
        ]
      },
      {
        "title": "Grim Harvest",
        "isSubclassFeature": true,
        "details": [
          "At 2nd level, you gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead."
        ]
      },
      {
        "title": "Undead Thralls",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you add the Animate Dead spell to your spellbook if it is not there already. When you cast Animate Dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate.",
          "Whenever you create an undead using a necromancy spell, it has additional benefits:",
          "\u2022\u00a0The creature's hit point maximum is increased by an amount equal to your wizard level.",
          "\u2022\u00a0The creature adds your proficiency bonus to its weapon damage rolls."
        ]
      },
      {
        "title": "Inured to Undeath",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 10th level, you have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects."
        ]
      },
      {
        "title": "Command Undead",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can't use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again.",
          "Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free."
        ]
      },
      {
        "title": "Divine Inspiration",
        "isSubclassFeature": true,
        "details": [
          "When you choose this tradition at 2nd level, choose a cleric domain from your chosen deity\u2019s list of eligible domains. The Knowledge and Light domains are especially appropriate choices for a theurgist."
        ]
      },
      {
        "title": "Arcane Initiate",
        "isSubclassFeature": true,
        "details": [
          "Beginning when you select this tradition at 2nd level, whenever you gain a wizard level, you can replace one of the wizard spells you add to your spellbook with a cleric domain spell for your chosen domain. The spell must be of a level for which you have spell slots.",
          "If you add all of your domain spells to your spellbook, you can subsequently add any spell from the cleric spell list instead. The spell must still be of a level for which you have spell slots.",
          "Any cleric spell you gain from this feature is considered a wizard spell for you, but other wizards can\u2019t copy cleric spells from your spellbook into their own spellbooks."
        ]
      },
      {
        "title": "Channel Arcana",
        "isSubclassFeature": true,
        "details": [
          "At 2nd level, you gain the ability to channel arcane energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Divine Arcana and the Channel Divinity option granted at 2nd level by your chosen domain. You employ that Channel Divinity option by using your Channel Arcana ability.",
          "When you use your Channel Arcana, you choose which effect to create. You must then finish a short or long rest to use your Channel Arcana again.",
          "Some Channel Arcana effects require saving throws. When you use such an effect, the save DC equals your wizard spell save DC.",
          "Beginning at 6th level, you can use your Channel Arcana twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.",
          "If you gain additional Channel Divinity options from your domain, you can employ them by using your Channel Arcana feature."
        ]
      },
      {
        "title": "Channel Arcana: Divine Arcana",
        "isSubclassFeature": true,
        "details": [
          "As a bonus action, you speak a prayer to control the flow of magic around you. The next spell you cast gains a +2 bonus to any attack roll you make for it or to its saving throw DC, as appropriate."
        ]
      },
      {
        "title": "Arcane Acolyte",
        "isSubclassFeature": true,
        "details": [
          "At 6th level, you gain your chosen domain\u2019s 1st-level benefits. However, you do not gain any weapon or armor proficiencies from the domain."
        ]
      },
      {
        "title": "Arcane Priest",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you gain your chosen domain\u2019s 6th-level benefits. Your faith and your understanding of magic allow you to delve into your god\u2019s secrets."
        ]
      },
      {
        "title": "Arcane High Priest",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, you gain your chosen domain\u2019s 17th-level benefits. Your academic nature and understanding of magic and doctrine allow you to master this ability sooner than a cleric of your domain."
        ]
      },
      {
        "title": "Transmutation Savant",
        "isSubclassFeature": true,
        "details": [
          "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Transmutation spell into your spellbook is halved."
        ]
      },
      {
        "title": "Minor Alchemy",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level when you select this school, you can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance."
        ]
      },
      {
        "title": "Transmuter's Stone",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can spend 8 hours creating a transmuter's stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature's possession. When you create the stone, choose the benefit from the following options:",
          "\u2022\u00a0Darkvision out to a range of 60 feet",
          "\u2022\u00a0An increase to speed of 10 feet while the creature is unencumbered",
          "\u2022\u00a0Proficiency in Constitution saving throws",
          "\u2022\u00a0Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit)",
          "Each time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.",
          "If you create a new transmuter's stone, the previous one ceases to function."
        ]
      },
      {
        "title": "Shapechanger",
        "isSubclassFeature": true,
        "details": [
          "At 10th level, you add the Polymorph spell to your spellbook, if it is not there already. You can cast Polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower.",
          "Once you cast Polymorph in this way, you can't do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot."
        ]
      },
      {
        "title": "Master Transmuter",
        "isSubclassFeature": true,
        "details": [
          "Starting at 14th level, you can use your action to consume the reserve of transmutation magic stored within your transmuter's stone in a single burst. When you do so, choose one of the following effects. Your transmuter's stone is destroyed and can't be remade until you finish a long rest.",
          "***Major Transformation.*** You can transmute one nonmagical object \u2013\u00a0no larger than a 5-foot cube \u2013\u00a0into another nonmagical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it.",
          "***Panacea.*** You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter's stone. The creature also regains all its hit points.",
          "***Restore Life.*** You cast the Raise Dead spell on a creature you touch with the transmuter's stone, without expending a spell slot or needing to have the spell in your spellbook.",
          "***Restore Youth.*** You touch the transmuter's stone to a willing creature, and that creature's apparent age is reduced by 3d10 years, to a minimum of 13 years. This effect doesn't extend the creature's lifespan."
        ]
      },
      {
        "title": "Arcane Deflection",
        "isSubclassFeature": true,
        "details": [
          "At 2nd level, you have learned to weave your magic to fortify yourself against harm. When you are hit by an attack or you fail a saving throw, you can use your reaction to gain a +2 bonus to your AC against that attack or a +4 bonus to that saving throw.",
          "When you use this feature, you can\u2019t cast spells other than cantrips until the end of your next turn."
        ]
      },
      {
        "title": "Tactical Wit",
        "isSubclassFeature": true,
        "details": [
          "Starting at 2nd level, your keen ability to assess tactical situations allows you to act quickly in battle. You can give yourself a bonus to your initiative rolls equal to your Intelligence modifier."
        ]
      },
      {
        "title": "Power Surge",
        "isSubclassFeature": true,
        "details": [
          "Starting at 6th level, you can store magical energy within yourself to later empower your damaging spells.",
          "You can store a maximum number of power surges equal to your Intelligence modifier (minimum of one). Whenever you finish a long rest, your number of power surges resets to one. Whenever you successfully end a spell with Dispel Magic or Counterspell, you gain one power surge, as you steal magic from the spell you foiled. If you end a short rest with no power surges, you gain one power surge.",
          "Once per turn when you deal damage to a creature or object with a wizard spell, you can spend one power surge to deal extra force damage to that target. The extra damage equals half your wizard level."
        ]
      },
      {
        "title": "Durable Magic",
        "isSubclassFeature": true,
        "details": [
          "Beginning at 10th level, the magic you channel helps ward off harm. While you maintain concentration on a spell, you have a +2 bonus to AC and all saving throws."
        ]
      },
      {
        "title": "Deflecting Shroud",
        "isSubclassFeature": true,
        "details": [
          "At 14th level, your Arcane Deflection becomes infused with deadly magic. When you use your Arcane Deflection feature, you can cause magical energy to arc from you. Up to three creatures of your choice within 60 feet of you each take force damage equal to half your wizard level."
        ]
      }
    ],
    "subclass": {
      "title": "Arcane Tradition",
      "prefix": "School of ",
      "suffix": null,
      "levels": [
        2,
        6,
        10,
        14
      ],
      "archetypes": {
        "ABJURATION": {
          "title": "Abjuration",
          "restrictions": [
            
          ],
          "details": [
            "The School of Abjuration emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void. It is a proud and respected vocation.",
            "Called abjurers, members of this school are sought when baleful spirits require exorcism, when important locations must be guarded against magical spying, and when portals to other planes of existence must be closed."
          ],
          "features": [
            [
              {
                "name": "Abjuration Savant",
                "id": 6
              },
              {
                "name": "Arcane Ward",
                "id": 7
              }
            ],
            [
              {
                "name": "Projected Ward",
                "id": 8
              }
            ],
            [
              {
                "name": "Improved Abjuration",
                "id": 9
              }
            ],
            [
              {
                "name": "Spell Resistance",
                "id": 10
              }
            ]
          ]
        },
        "BLADESINGER": {
          "title": "Bladesinger",
          "restrictions": [
            {
              "title": "Restriction: Elves Only",
              "details": [
                "Only elves and half-elves can choose the bladesinger arcane tradition. In the world of Faer\u00fbn, elves closely guard the secrets of bladesinging.",
                "Your DM can lift this restriction to better suit the campaign. The restriction reflects the story of bladesingers in the Forgotten Realms, but it might not apply to your DM's setting or your DM's version of the Realms."
              ]
            }
          ],
          "details": [
            "Bladesingers are elves who bravely defend their people and lands. They are elf wizards who master a school of sword fighting grounded in a tradition of arcane magic. In combat, a bladesinger uses a series of intricate, elegant maneuvers that fend off harm and allow the bladesinger to channel magic into devastating attacks and a cunning defense.",
            "Styles of Bladesinging are broadly categorized based on the type of weapon employed, and each is associated with a category of animal. Within that style are specializations named after specific animal types, based on the types of spells employed, the techniques of the master, and the particular weapon used.",
            "Styles that employ a sword belong to the Cat family, including the longsword-wielding Lion style and the scimitar-wielding Red Tiger style. Styles that focus on the use of hafted weapons belong to the Bird family, including the handaxe-throwing Eagle style or warpick-wielding Raven style. Styles that use whips, chains, or flails are included in the Snake style family, such as the whip-wielding Viper style.",
            "Bladesingers who apprentice to a master typically get a tattoo of their chosen style's animal. Some bladesingers learn multiple styles and bear many tattoos, wearing a warning on their skin of their deadly skills."
          ],
          "features": [
            [
              {
                "name": "Training in War and Song",
                "id": 11
              },
              {
                "name": "Bladesong",
                "id": 12
              }
            ],
            [
              {
                "name": "Extra Attack",
                "id": 13
              }
            ],
            [
              {
                "name": "Song of Defense",
                "id": 14
              }
            ],
            [
              {
                "name": "Song of Victory",
                "id": 15
              }
            ]
          ]
        },
        "CONJURATION": {
          "title": "Conjuration",
          "restrictions": [
            
          ],
          "details": [
            "As a conjurer, you favor spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of transportation and can teleport yourself across vast distances, even to other planes of existence, in an instant."
          ],
          "features": [
            [
              {
                "name": "Conjuration Savant",
                "id": 16
              },
              {
                "name": "Minor Conjuration",
                "id": 17
              }
            ],
            [
              {
                "name": "Benign Transportation",
                "id": 18
              }
            ],
            [
              {
                "name": "Focused Conjuration",
                "id": 19
              }
            ],
            [
              {
                "name": "Durable Summons",
                "id": 20
              }
            ]
          ]
        },
        "DIVINATION": {
          "title": "Divination",
          "restrictions": [
            
          ],
          "details": [
            "The counsel of a diviner is sought by royalty and commoners alike, for all seek a clearer understanding of the past, present, and future. As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly. You work to master spells of discernment, remote viewing, supernatural knowledge, and foresight."
          ],
          "features": [
            [
              {
                "name": "Divination Savant",
                "id": 21
              },
              {
                "name": "Portent",
                "id": 22
              }
            ],
            [
              {
                "name": "Expert Divination",
                "id": 23
              }
            ],
            [
              {
                "name": "The Third Eye",
                "id": 24
              }
            ],
            [
              {
                "name": "Greater Portent",
                "id": 25
              }
            ]
          ]
        },
        "ENCHANTMENT": {
          "title": "Enchantment",
          "restrictions": [
            
          ],
          "details": [
            "As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service. Most enchanters fall somewhere in between."
          ],
          "features": [
            [
              {
                "name": "Enchantment Savant",
                "id": 26
              },
              {
                "name": "Hypnotic Gaze",
                "id": 27
              }
            ],
            [
              {
                "name": "Instinctive Charm",
                "id": 28
              }
            ],
            [
              {
                "name": "Split Enchantment",
                "id": 29
              }
            ],
            [
              {
                "name": "Alter Memories",
                "id": 30
              }
            ]
          ]
        },
        "EVOCATION": {
          "title": "Evocation",
          "restrictions": [
            
          ],
          "details": [
            "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants."
          ],
          "features": [
            [
              {
                "name": "Evocation Savant",
                "id": 31
              },
              {
                "name": "Sculpt Spells",
                "id": 32
              }
            ],
            [
              {
                "name": "Potent Cantrip",
                "id": 33
              }
            ],
            [
              {
                "name": "Empowered Evocation",
                "id": 34
              }
            ],
            [
              {
                "name": "Overchannel",
                "id": 35
              }
            ]
          ]
        },
        "ILLUSION": {
          "title": "Illusion",
          "restrictions": [
            
          ],
          "details": [
            "You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk. Your magic is subtle, but the illusions crafted by your keen mind make the impossible seem real. Some illusionists \u2013 including many gnome wizards \u2013\u00a0are benign tricksters who use their spells to entertain. Others are more sinister masters of deception, using their illusions to frighten and fool others for their personal gain."
          ],
          "features": [
            [
              {
                "name": "Illusion Savant",
                "id": 36
              },
              {
                "name": "Improved Minor Illusion",
                "id": 37
              }
            ],
            [
              {
                "name": "Malleable Illusions",
                "id": 38
              }
            ],
            [
              {
                "name": "Illusory Self",
                "id": 39
              }
            ],
            [
              {
                "name": "Illusory Reality",
                "id": 40
              }
            ]
          ]
        },
        "INVENTION": {
          "title": "Invention",
          "restrictions": [
            
          ],
          "details": [
            "The School of Invention claims credit for inventing the other schools of magic \u2013 a claim other wizards find absurd. Wizards of this school push magic to its limits. They stretch the known laws of arcane power and strive to reveal important truths about the nature of the multiverse.",
            "Adherents of this school believe that innovation is best served through experimentation. They have a reputation for acting first, thinking second. Most wizards are scholars who have mastered their craft through careful study, rigorous practice, and endless hours of repetition. These wizards would rather throw spells together and see what happens.",
            "Many wizards of this tradition are gnomes, alchemists, or both, and they take pride in the magic-infused armor they don. The armor not only provides protection, but it is also designed to help the wizard channel magic in unpredictable ways.",
            "Wizards of this tradition are regarded as savants to their faces, but wizards of other traditions often think of them as lunatics."
          ],
          "features": [
            [
              {
                "name": "Tools of the Inventor",
                "id": 41
              },
              {
                "name": "Arcanomechanical Armor",
                "id": 42
              },
              {
                "name": "Reckless Casting",
                "id": 43
              }
            ],
            [
              {
                "name": "Alchemical Casting",
                "id": 44
              }
            ],
            [
              {
                "name": "Prodigious Inspiration",
                "id": 45
              }
            ],
            [
              {
                "name": "Controlled Chaos",
                "id": 46
              }
            ]
          ]
        },
        "LORE_MASTERY": {
          "title": "Lore Mastery",
          "restrictions": [
            
          ],
          "details": [
            "Lore Mastery is an arcane tradition fixated on understanding the underlying mechanics of magic. It is the most academic of all arcane traditions. The promise of uncovering new knowledge or proving (or discrediting) a theory of magic is usually required to rouse its practitioners from their laboratories, academies, and archives to pursue a life of adventure.",
            "Known as savants, followers of this tradition are a bookish lot who see beauty and mystery in the application of magic. The results of a spell are less interesting to them than the process that creates it. Some savants take a haughty attitude toward those who follow a tradition focused on a single school of magic, seeing them as provincial and lacking the sophistication needed to master true magic. Other savants are generous teachers, countering ignorance and deception with deep knowledge and good humor."
          ],
          "features": [
            [
              {
                "name": "Lore Mastery",
                "id": 47
              },
              {
                "name": "Spell Secrets",
                "id": 48
              },
              {
                "name": "Altering Spells",
                "id": 49
              }
            ],
            [
              {
                "name": "Alchemical Casting",
                "id": 50
              }
            ],
            [
              {
                "name": "Prodigious Memory",
                "id": 51
              }
            ],
            [
              {
                "name": "Master of Magic",
                "id": 52
              }
            ]
          ]
        },
        "NECROMANCY": {
          "title": "Necromancy",
          "restrictions": [
            
          ],
          "details": [
            "The School of Necromancy explores the cosmic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate.",
            "Most people see necromancers as menacing, or even villainous, due to the close association with death. Not all necromancers are evil, but the forces they manipulate are considered taboo by many societies."
          ],
          "features": [
            [
              {
                "name": "Necromancy Savant",
                "id": 53
              },
              {
                "name": "Grim Harvest",
                "id": 54
              }
            ],
            [
              {
                "name": "Undead Thralls",
                "id": 55
              }
            ],
            [
              {
                "name": "Inured to Undeath",
                "id": 56
              }
            ],
            [
              {
                "name": "Command Undead",
                "id": 57
              }
            ]
          ]
        },
        "THEURGY": {
          "title": "Theurgy",
          "restrictions": [
            
          ],
          "details": [
            "A number of deities claim arcane magic as their domain, for magic is as much a part of the fabric of the cosmos as wind, fire, lightning, and all other primal forces. Just as there are deities of the sea and gods of warfare, the arcane arts feature their own divine patrons.",
            "Such deities often have clerics, but many gods of magic bid their followers to take up the study of wizardry. These religious magic-users follow the arcane tradition of Theurgy, and are commonly known as theurgists. Such spellcasters are as dedicated and scholarly as any other wizard, but they blend their arcane study with religious devotion."
          ],
          "features": [
            [
              {
                "name": "Divine Inspiration",
                "id": 58
              },
              {
                "name": "Arcane Initiate",
                "id": 59
              },
              {
                "name": "Channel Arcana",
                "id": 60
              },
              {
                "name": "Channel Arcana: Divine Arcana",
                "id": 61
              }
            ],
            [
              {
                "name": "Arcane Acolyte",
                "id": 62
              }
            ],
            [
              {
                "name": "Arcane Priest",
                "id": 63
              }
            ],
            [
              {
                "name": "Arcane High Priest",
                "id": 64
              }
            ]
          ]
        },
        "TRANSMUTATION": {
          "title": "Transmutation",
          "restrictions": [
            
          ],
          "details": [
            "You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities. Your magic gives you the tools to become a smith on reality's forge.",
            "Some transmuters are tinkerers and pranksters, turning people into toads and transforming copper into silver for fun and occasional profit. Others pursue their magical studies with deadly seriousness, seeking the power of the gods to make and destroy worlds."
          ],
          "features": [
            [
              {
                "name": "Transmutation Savant",
                "id": 65
              },
              {
                "name": "Minor Alchemy",
                "id": 66
              }
            ],
            [
              {
                "name": "Transmuter's Stone",
                "id": 67
              }
            ],
            [
              {
                "name": "Shapechanger",
                "id": 68
              }
            ],
            [
              {
                "name": "Master Transmuter",
                "id": 69
              }
            ]
          ]
        },
        "WAR_MAGIC": {
          "title": "War Magic",
          "restrictions": [
            
          ],
          "details": [
            "A variety of arcane colleges specialize in training wizards for war. The tradition of War Magic blends principles of evocation and abjuration, rather than specializing in either of those schools. It teaches techniques that empower a caster\u2019s spells, while also providing methods for wizards to bolster their own defenses.",
            "Followers of this tradition are known as war mages. They see their magic as both a weapon and armor, a resource superior to any piece of steel. War mages act fast in battle, using their spells to seize tactical control of a situation. Their spells strike hard, while their defensive skills foil their opponents\u2019 attempts to counterattack. War mages are also adept at turning other spellcasters' magical energy against them.",
            "In great battles, a war mage often works with evokers, abjurers, and other types of wizards. Evokers, in particular, sometimes tease war mages for splitting their attention between offense and defense. A war mage's typical response: \"What good is being able to throw a mighty Fireball if I die before I can cast it?\""
          ],
          "features": [
            [
              {
                "name": "Arcane Deflection",
                "id": 70
              },
              {
                "name": "Tactical Wit",
                "id": 71
              }
            ],
            [
              {
                "name": "Power Surge",
                "id": 72
              }
            ],
            [
              {
                "name": "Durable Magic",
                "id": 73
              }
            ],
            [
              {
                "name": "Deflecting Shroud",
                "id": 74
              }
            ]
          ]
        }
      }
    }
  }
}