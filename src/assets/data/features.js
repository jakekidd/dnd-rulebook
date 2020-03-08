const Feature = (name, effects) => ({name, effects: Array.isArray(effects) ? effects : [effects]});
// const Restriction = (text, details) => ({text, details});

export default Object.freeze({
  /* GENERAL */
  ABILITY_SCORE_IMPROVEMENT: Feature(
    'Ability Score Improvement',
    `Increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.`
  ),
  EXTRA_ATTACK_I: Feature(
    'Extra Attack I',
    'You can attack twice, instead of once, whenever you take the Attack action on your turn.'
  ),
  EXTRA_ATTACK_II: Feature(
    'Extra Attack II',
    'You can attack three times, instead of twice, whenever you take the Attack action on your turn.'
  ),
  EXTRA_ATTACK_III: Feature(
    'Extra Attack III',
    'You can attack four times, instead of three, whenever you take the Attack action on your turn.'
  ),
  SPELLCASTING: Feature(
    'Spellcasting',
    'You gain the ability to cast spells relevant to your class.'
  ),
  EXPERTISE_I: Feature(
    'Expertise I',
    `Choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. (If you are a Rogue, you may optionally choose your proficiency with thieves' tools as one of those skills.)`
  ),
  EXPERTISE_II: Feature(
    'Expertise II',
    `Choose two more of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. (If you are a Rogue, you may optionally choose your proficiency with thieves' tools as one of those skills.)`
  ),
  EVASION: Feature(
    'Evasion',
    `Your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon’s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`
  ),
  LANDS_STRIDE: Feature(
    `Land's Stride`,
    [
      `Moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.`,
      `In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.`
    ]
  ),

  /* BARBARIAN */
  RAGE: Feature(
    'Rage',
    [
      `In battle, you fight with primal ferocity. On your turn, you can enter a rage as a Bonus Action.`,   
      `While raging, you gain the following benefits **if you aren’t wearing heavy armor**:`,
      `• You have advantage on Strength checks and Strength saving throws.`,
      `• When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.`,
      `• You have resistance to bludgeoning, piercing, and slashing damage.`,
      `• If you are able to cast spells, you can’t cast them or concentrate on them while raging.`,
      `Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.`,
      `**Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.**`,
    ]
  ),
  BARBARIAN_UNARMORED_DEFENSE: Feature(
    'Unarmored Defense',
    'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.'
  ),
  RECKLESS_ATTACK: Feature(
    'Reckless Attack',
    'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.'
  ),
  DANGER_SENSE: Feature(
    'Danger Sense',
    [
      `At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.`,
      `You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.`
    ]
  ),
  PRIMAL_PATH: Feature(
    'Primal Path',
    'At 3rd level, you choose a path that shapes the nature of your rage. The Path of the Berserker is detailed at the end of the class description, and additional primal paths are available in other sources. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.'
  ),
  FAST_MOVEMENT: Feature(
    'Fast Movement',
    'Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor.'
  ),
  FERAL_INSTINCT: Feature(
    'Feral Instinct',
    [
      `By 7th level, your instincts are so honed that you have advantage on initiative rolls.`,
      `Additionally, if you are surprised at the beginning of combat and aren’t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.`
    ]
  ),
  BRUTAL_CRITICAL_I: Feature(
    'Brutal Critical I',
    `Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.`
  ),
  BRUTAL_CRITICAL_II: Feature(
    'Brutal Critical II',
    `At 13th level, you can roll two additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.`
  ),
  BRUTAL_CRITICAL_III: Feature(
    'Brutal Critical III',
    `At 17th level, you can roll three additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.`
  ),
  RELENTLESS_RAGE: Feature(
    'Relentless Rage',
    [
      `Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you’re raging and don’t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.`,
      `Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.`
    ]
  ),
  PERSISTENT_RAGE: Feature(
    'Persistent Rage',
    'Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.'
  ),
  INDOMITABLE_MIGHT: Feature(
    'Indomitable Might',
    'Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.'
  ),
  PRIMAL_CHAMPION: Feature(
    'Primal Champion',
    'At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.'
  ),

  /* BARBARIAN SUBCLASSES */
  ANCESTRAL_PROTECTORS: Feature(
    'Ancestral Protectors',
    `Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you’re raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage of the target’s attacks.`
  ),
  SPIRIT_SHIELD: Feature(
    'Spirit Shield',
    [
      `Beginning at 6th level, the guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and a creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6.`,
      `When you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level.`
    ]
  ),
  CONSULT_THE_SPIRITS: Feature(
    'Consult the Spirits',
    [
      `At 10th level, you gain the ability to consult with your ancestral spirits. When you do so, you cast the Augury or Clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of Clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells.`,
      `After you cast either spell in this way, you can’t use this feature again until you finish a short or long rest.`
    ]
  ),
  VENGEFUL_ANCESTORS: Feature(
    'Vengeful Ancestors',
    `At 14th level, your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage that your Spirit Shield prevents.`
  ),
  BATTLERAGER_ARMOR: Feature(
    'Battlerager Armor',
    [
      `When you choose this path at 3rd level, you gain the ability to use spiked armor as a weapon.`,
      `While you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes against a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.`,
      `Additionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds.`
    ]
  ),
  RECKLESS_ABANDON: Feature(
    'Reckless Abandon',
    `Beginning at 6th level, when you use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish if any of them are left when your rage ends.`
  ),
  BATTLERAGER_CHARGE: Feature(
    `Battlerager Charge`,
    'Beginning at 10th level, you can take the Dash action as a bonus action while you are raging.'
  ),
  SPIKED_RETRIBUTION: Feature(
    'Spiked Retribution',
    `Starting at 14th level, when a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't incapacitated, and are wearing spiked armor.`
  ),
  FRENZY: Feature(
    'Frenzy',
    `Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.`
  ),
  MINDLESS_RAGE: Feature(
    'Mindless Rage',
    `Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.`
  ),
  INTIMIDATING_PRESENCE: Feature(
    'Intimidating Presence',
    [
      `Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.`,
      `If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.`
    ]
  ),
  RETALIATION: Feature(
    'Retaliation',
    `Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.`
  ),
  STORM_AURA: Feature(
    'Storm Aura',
    [
      `When you select this path at 3rd level, you emanate a stormy, magical aura while you rage. The aura extends 10 feet from you in every direction, but not through total cover.`,
      `Your aura has an effect that activates when you enter your rage, and you can activate the effect again on each of your turns as a bonus action. Choose desert, sea, or tundra. Your aura's effect depends on that chosen environment, as detailed below. You can change your environment choice whenever you gain a level in this class.`,
      `If your aura's effects require a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.`,
      `***Desert.*** When this effect is activated, all other creatures in your aura take 2 fire damage each. The damage increases when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level.`,
      `***Sea.*** When this effect is activated, you can choose one other creature you can see in your aura. The target must make a Dexterity saving throw. The target takes 1d6 lightning damage on a failed save, or half as much damage on a successful one. The damage increases when you reach certain levels in this class, increasing to 2d6 at 10th level, 3d6 at 15th level, and 4d6 at 20th level.`,
      `***Tundra.*** When this effect is activated, each creature of your choice in your aura gains 2 temporary hit points, as icy spirits inure it to suffering. The temporary hit points increase when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level.`
    ]
  ),
  STORM_SOUL: Feature(
    'Storm Soul',
    [
      `At 6th level, the storm grants you benefits even when your aura isn't active. The benefits are based on the environment you chose for your Storm Aura.`,
      `***Desert.*** You gain resistance to fire damage, and you don’t suffer the effects of extreme heat, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch a flammable object that isn't being worn or carried by anyone else and set it on fire.`,
      `***Sea.*** You gain resistance to lightning damage, and you can breathe underwater. You also gain a swimming speed of 30 feet.`,
      `***Tundra.*** You gain resistance to cold damage, and you don’t suffer the effects of extreme cold, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch water and turn a 5-foot cube of it into ice, which melts after 1 minute. This action fails if a creature is in the cube.`
    ]
  ),
  SHIELDING_STORM: Feature(
    'Shielding Storm',
    `At 10th level, you learn to use your mastery of the storm to protect others. Each creature of your choice has the damage resistance you gained from the Storm Soul feature while the creature is in your Storm Aura.`
  ),
  RAGING_STORM: Feature(
    'Raging Storm',
    [
      `At 14th level, the power of the storm you channel grows mightier, lashing out at your foes. The effect is based on the environment you chose for your Storm Aura.`,
      `***Desert.*** Immediately after a creature in your aura hits you with an attack, you can use your reaction to force that creature to make a Dexterity saving throw. On a failed save, the creature takes fire damage equal to your Barbarian level.`,
      `***Sea.*** When you hit a creature in your aura with an attack, you can use your reaction to force that creature to make a Strength saving throw. On a failed save, the creature is knocked prone, as if struck by a wave.`,
      `***Tundra.*** Whenever the effect of your Storm Aura is activated, you can choose one creature you can see in the aura. That creature must succeed on a Strength saving throw, or its speed is reduced to 0 until the start of your next turn, as magical frost covers it.`
    ]
  ),
  SPIRIT_SEEKER: Feature(
    'Spirit Seeker',
    `Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the Beast Sense and Speak with Animals spells, but only as rituals.`
  ),
  TOTEM_SPIRIT: Feature(
    'Totem Spirit',
    [
      `At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object – an amulet or similar adornment – that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow.`,
      `Your totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle.`,
      `***Bear.*** While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment.`,
      `***Eagle.*** While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease.`,
      `***Elk.*** While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift.`,
      `***Tiger.*** While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps.`,
      `***Wolf.*** While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters.`,
    ]
  ),
  ASPECT_OF_THE_BEAST: Feature(
    'Aspect of the Beast',
    [
      
      `At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.`,
      `***Bear.*** You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.`,
      `***Eagle.*** You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks.`,
      `***Elk.*** Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they're within 60 feet of you and you're not incapacitated. The elk spirit helps you roam far and fast.`,
      `***Tiger.*** You gain proficiency in two skills from the following list: Athletics, Acrobatics, Stealth, and Survival. The cat spirit hones your survival instincts.`,
      `***Wolf.*** You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace.`,
    ]
  ),
  SPIRIT_WALKER: Feature(
    'Spirit Walker',
    `At 10th level, you can cast the Commune with Nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.`
  ),
  TOTEMIC_ATTUNEMENT: Feature(
    'Totemic Attunement',
    [
      
      `At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.`,
      `***Bear.*** While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be frightened.`,
      `***Eagle.*** While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft.`,
      `***Elk.*** While raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw (DC 8 + your Strength bonus + your proficiency bonus) or be knocked prone and take bludgeoning damage equal to 1d12 + your Strength modifier.`,
      `***Tiger.*** While you're raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it.`,
      `***Wolf.*** While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with melee weapon attack.`,
    ]
  ),
  DIVINE_FURY: Feature(
    'Divine Fury',
    `Starting when you choose this path at 3rd level, you can channel divine fury into your weapon strikes. While you're raging, the first creature you hit on each of your turns with a weapon attack takes extra damage equal to 1d6 + half your Barbarian level. The extra damage is necrotic or radiant; you choose the type of damage when you gain this feature.`
  ),
  WARRIOR_OF_THE_GODS: Feature(
    'Warrior of the Gods',
    `At 3rd level, your soul is marked for endless battle. If a spell, such as Raise Dead, has the sole effect of restoring you to life (but not undeath), the caster doesn't need material components to cast the spell on you.`,
  ),
  FANATICAL_FOCUS: Feature(
    'Fanatical Focus',
    `Starting at 6th level, the divine power that fuels your rage can protect you. If you fail a saving throw while raging, you can reroll it, and you must use the new roll. You can use this ability only once per rage.`
  ),
  ZEALOUS_PRESENCE: Feature(
    'Zealous Presence',
    [
      `At 10th level, you learn to channel divine power to inspire zealotry in others. As a bonus action, you unleash a battle cry infused with divine energy. Up to ten other creatures of your choice within 60 feet of you that can hear you gain advantage on attack rolls and saving throws until the start of your next turn.`,
      `**Once you use this feature, you can’t use it again until you finish a long rest.**`
    ]
  ),
  RAGE_BEYOND_DEATH: Feature(
    'Rage Beyond Death',
    [
      `Beginning at 14th level, the divine power that fuels your rage allows you to shrug off fatal blows.`,
      `While you're raging, having 0 hit points doesn’t knock you unconscious. You still must make death saving throws, and you suffer the normal effects of taking damage while at 0 hit points. However, if you would die due to failing death saving throws, you don’t die until your rage ends, and you die then only if you still have 0 hit points.`
    ]
  ),

  /* BARD */
  BARDIC_INSPIRATION_I: Feature(
    'Bardic Inspiration I',
    [
      `You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.`,
      `Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.`,
      `You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.`
    ]
  ),
  BARDIC_INSPIRATION_II: Feature(
    'Bardic Inspiration II',
    `Your Bardic Inspiration die now becomes a d8.`
  ),
  BARDIC_INSPIRATION_III: Feature(
    'Bardic Inspiration III',
    `Your Bardic Inspiration die now becomes a d10.`
  ),
  BARDIC_INSPIRATION_IV: Feature(
    'Bardic Inspiration IV',
    `Your Bardic Inspiration die now becomes a d12.`
  ),
  JACK_OF_ALL_TRADES: Feature(
    'Jack of All Trades',
    `Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus.`
  ),
  SONG_OF_REST_I: Feature(
    'Song of Rest I',
    'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.'
  ),
  SONG_OF_REST_II: Feature(
    'Song of Rest II',
    'Song of rest now heals allies 1d8.'
  ),
  SONG_OF_REST_III: Feature(
    'Song of Rest III',
    'Song of rest now heals allies 1d10.'
  ),
  SONG_OF_REST_IV: Feature(
    'Song of Rest IV',
    'Song of rest now heals allies 1d12.'
  ),
  BARD_COLLEGE: Feature(
    'Bard College',
    `At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore detailed at the end of the class description or another from the Player's Handbook or other sources. Your choice grants you features at 3rd level and again at 6th and 14th level.`
  ),
  FONT_OF_INSPIRATION: Feature(
    'Font of Inspiration',
    `Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.`
  ),
  COUNTERCHARM: Feature(
    'Countercharm',
    `At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).`
  ),
  MAGICAL_SECRETS_I: Feature(
    'Magical Secrets I',
    [
      `By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.`,
      `The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.`,
      `You learn two additional spells from any classes at 14th level and again at 18th level.`
    ]
  ),
  MAGICAL_SECRETS_II: Feature(
    'Magical Secrets II',
    [
      `At 18th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.`,
      `The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.`
    ]
  ),
  MAGICAL_SECRETS_III: Feature(
    'Magical Secrets III',
    [
      `At 18th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.`,
      `The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.`
    ]
  ),
  SUPERIOR_INSPIRATION: Feature(
    'Superior Inspiration',
    `At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.`
  ),
  /* BARD SUBCLASSES */
  MANTLE_OF_INSPIRATION: Feature(
    'Mantle of Inspiration',
    [
      `When you join the College of Glamour at 3rd level, you gain the ability to weave a song of fey magic that imbues your allies with vigor and speed.`,
      `As a bonus action, you can expend one use of your Bardic Inspiration to grant yourself a wondrous appearance. When you do so, choose a number of creatures you can see and who can see you within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one). Each of them gains 5 temporary hit points. When a creature gains these temporary hit points, it can immediately use its reaction to move up to its speed, without provoking opportunity attacks.`,
      `The number of temporary hit points increases when you reach certain levels in this class, increasing to 8 at 5th level, 11 at 10th level, and 14 at 15th level.`
    ]
  ),
  ENTHRALLING_PERFORMANCE: Feature(
    'Enthralling Performance',
    [
      `Starting at 3rd level, you can charge your performance with seductive, fey magic.`,
      `If you perform for at least 1 minute, you can attempt to inspire wonder in your audience by singing, reciting a poem, or dancing. At the end of the performance, choose a number of humanoids within 60 feet of you who watched and listened to all of it, up to a number equal to your Charisma modifier (minimum of one). Each target must succeed on a Wisdom saving throw against your spell save DC or be charmed by you. While charmed in this way, the target idolizes you, it speaks glowingly of you to anyone who speaks to it, and it hinders anyone who opposes you, avoiding violence unless it was already inclined to fight on your behalf. This effect ends on a target after 1 hour, if it takes any damage, if you attack it, or if it witnesses you attacking or damaging any of its allies.`,
      `If a target succeeds on its saving throw, the target has no hint that you tried to charm it.`,
      `Once you use this feature, you can’t use it again until you finish a short or long rest.`
    ]
  ),
  MANTLE_OF_MAJESTY: Feature(
    'Mantle of Majesty',
    [
      `At 6th level, you gain the ability to cloak yourself in a fey magic that makes others want to serve you. As a bonus action, you cast Command, without expending a spell slot, and you take on an appearance of unearthly beauty for 1 minute or until your concentration ends (as if you were concentrating on a spell). During this time, you can cast Command as a bonus action on each of your turns, without expending a spell slot.`,
      `Any creature charmed by you automatically fails its saving throw against the Command you cast with this feature.`,
      `Once you use this feature, you can’t use it again until you finish a long rest.`
    ]
  ),
  UNBREAKABLE_MAJESTY: Feature(
    'Unbreakable Majesty',
    [
      `At 14th level, your appearance permanently gains an otherworldly aspect that makes you look more lovely and fierce.`,
      `In addition, as a bonus action, you can assume a magically majestic presence for 1 minute or until you are incapacitated. For the duration, whenever any creature tries to attack you for the first time on a turn, the attacker must make a Charisma saving throw against your spell save DC. On a failed save, it can't attack you on this turn, and it must choose a new target for its attack or the attack is wasted. On a successful save, it can attack you on this turn, but it has disadvantage on any saving throw it makes against your spells on your next turn.`,
      `Once you assume this majestic presence, you can't do so again until you finish a short or long rest.`
    ]
  ),
  LORE_BONUS_PROFICIENCIES: Feature(
    'Bonus Proficiencies',
    `When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.`
  ),
  CUTTING_WORDS: Feature(
    'Cutting Words',
    [
      `Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll.`,
      `You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed.`
    ]
  ),
  ADDITIONAL_MAGICAL_SECRETS: Feature(
    'Additional Magical Secrets',
    `At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know.`
  ),
  PEERLESS_SKILL: Feature(
    'Peerless Skill',
    `Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail.`
  ),
  SATIRE_BONUS_PROFICIENCIES: Feature(
    'Bonus Proficiencies',
    `When you join the College of Satire at 3rd level, you gain proficiency with thieves’ tools. You also gain proficiency in Sleight of Hand and one additional skill of your choice. If you are already proficient with thieves’ tools or in Sleight of Hand, choose another skill proficiency for each proficiency you already have.`
  ),
  TUMBLING_FOOL: Feature(
    'Tumbling Fool',
    [
      `At 3rd level, you master a variety of acrobatic techniques that allow you to evade danger. As a bonus action, you can tumble. When you tumble, you gain the following benefits for the rest of your turn:`,
      `• You gain the benefits of taking the Dash and Disengage actions.`,
      `• You gain a climbing speed equal to your current speed.`,
      `• You take half damage from falling.`
    ]
  ),
  FOOLS_INSIGHT: Feature(
    `Fool's Insight`,
    [
      `At 6th level, your ability to gather stories and lore gains a supernatural edge. You can cast Detect Thoughts up to a number of times equal to your Charisma modifier. You regain any expended uses of this ability after completing a long rest.`,
      `If a creature resists your attempt to probe deeper and succeeds at its saving throw against your Detect Thoughts, it immediately suffers an embarrassing social gaffe. It might loudly pass gas, unleash a thunderous burp, trip and fall, or be compelled to tell a tasteless joke.`
    ]
  ),
  FOOLS_LUCK: Feature(
    `Fool's Luck`,
    [
      `Jesters seem to have a knack for pulling themselves out of tight situations, transforming what looks like sure failure into an embarrassing but effective success.`,
      `At 14th level, you can expend one use of Bardic Inspiration after you fail an ability check, fail a saving throw, or miss with an attack roll. Roll a Bardic Inspiration die and add the number rolled to your attack, saving throw, or ability check, using the new result in place of the failed one.`,
      `If using this ability grants you a success on the attack, saving throw, or ability check, note the number you rolled on the Bardic Inspiration die. The DM can then apply that result as a penalty to an attack or check you make, and you cannot use this ability again until you suffer this drawback. When the DM invokes this penalty, describe an embarrassing gaffe or mistake you make as part of the affected die roll.`
    ]
  ),
  SWORDS_BONUS_PROFICIENCIES: Feature(
    'Bonus Proficiencies',
    [
      `When you join the College of Swords at 3rd level, you gain proficiency with medium armor and the scimitar.`,
      `If you’re proficient with a simple or martial melee weapon, you can use it as a spellcasting focus for your bard spells.`
    ]
  ),
  SWORDS_FIGHTING_STYLE: Feature(
    'Fighting Style',
    [
      `At 3rd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.`,
      `• **Dueling**`,
      `When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.`,
      `• **Two-Weapon Fighting**`,
      `When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.`
    ]
  ),
  BLADE_FLOURISH: Feature(
    'Blade Flourish',
    [
      `At 3rd level, you learn to conduct impressive displays of martial prowess and speed.`,
      `Whenever you take the Attack action on your turn, your walking speed increases by 10 feet until the end of the turn, and if a weapon attack that you make as part of this action hits a creature, you can use one of the following Blade Flourish options of your choice. You can use only one Blade Flourish option per turn.`,
      `**Defensive Flourish.** You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You also add the number rolled to your AC until the start of your next turn.`,
      `**Slashing Flourish.** You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit and to any other creature of your choice that you can see within 5 feet of you. The damage equals the number you roll on the Bardic Inspiration die.`,
      `**Mobile Flourish.** You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You can also push the target up to 5 feet away from you, plus a number of feet equal to the number you roll on that die. You can then immediately use your reaction to move up to your walking speed to an unoccupied space within 5 feet of the target.`
    ]
  ),
  MASTERS_FLOURISH: Feature(
    `Master's Flourish`,
    `Starting at 14th level, whenever you use a Blade Flourish option, you can roll a d6 and use it instead of expending a Bardic Inspiration die.`
  ),
  VALOR_BONUS_PROFICIENCIES: Feature(
    'Bonus Proficiencies',
    `When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons.`
  ),
  COMBAT_INSPIRATION: Feature(
    'Combat Inspiration',
    `Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses.`
  ),
  BATTLE_MAGIC: Feature(
    'Battle Magic',
    `At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.`
  ),
  PSYCHIC_BLADES: Feature(
    'Psychic Blades',
    [
      `When you join the College of Whispers at 3rd level, you gain the ability to make your weapon attacks magically toxic to a creature's mind.`,
      `When you hit a creature with a weapon attack, you can expend one use of your Bardic Inspiration to deal an additional 2d6 psychic damage to that target. You can do so only once per round on your turn.`,
      `The psychic damage increases when you reach certain levels in this class, increasing to 3d6 at 5th level, 5d6 at 10th level, and 8d6 at 15th level.`
    ]
  ),
  WORDS_OF_TERROR: Feature(
    'Words of Terror',
    [
      `At 3rd level, you learn to infuse innocent-seeming words with an insidious magic that can inspire terror.`,
      `If you speak to a humanoid alone for at least 1 minute, you can attempt to seed paranoia and fear into its mind. At the end of the conversation, the target must succeed on a Wisdom saving throw against your spell save DC or be frightened of you or another creature of your choice. The target is frightened in this way for 1 hour, until it is attacked or damaged, or until it witnesses its allies being attacked or damaged.`,
      `If the target succeeds on its saving throw, the target has no hint that you tried to frighten it.`,
      `Once you use this feature, you can’t use it again until you finish a short rest or long rest.`
    ]
  ),
  MANTLE_OF_WHISPERS: Feature(
    'Mantle of Whispers',
    [
      `At 6th level, you gain the ability to adopt a humanoid's persona. When a humanoid dies within 30 feet of you, you can magically capture its shadow using your reaction. You retain this shadow until you use it or you finish a long rest.`,
      `You can use the shadow as an action. When you do so, it vanishes, magically transforming into a disguise that appears on you. You now look like the dead person, but healthy and alive. This disguise lasts for 1 hour or until you end it as a bonus action.`,
      `While you're in the disguise, you gain access to all information that the humanoid would freely share with a casual acquaintance. Such information includes general details on its background and personal life, but doesn't include secrets. The information is enough that you can pass yourself off as the person by drawing on its memories.`,
      `Another creature can see through this disguise by succeeding on a Wisdom (Insight) check contested by your Charisma (Deception) check. You gain a +5 bonus to your check.`,
      `**Once you capture a shadow with this feature, you can't capture another one with it until you finish a short or long rest.**`
    ]
  ),
  SHADOW_LORE: Feature(
    'Shadow Lore',
    [
      `At 14th level, you gain the ability to weave dark magic into your words and tap into a creature’s deepest fears.`,
      `As an action, you magically whisper a phrase that only one creature of your choice within 30 feet of you can hear. The target must make a Wisdom saving throw against your spell save DC. It automatically succeeds if it doesn’t share a language with you or if it can’t hear you. On a successful saving throw, your whisper sounds like unintelligible mumbling and has no effect.`,
      `If the target fails its saving throw, it is charmed by you for the next 8 hours or until you or your allies attack or damage it. It interprets the whispers as a description of its most mortifying secret.`,
      `While you gain no knowledge of this secret, the target is convinced you know it. While charmed in this way, the creature obeys your commands for fear that you will reveal its secret. It won’t risk its life for you or fight for you, unless it was already inclined to do so. It grants you favors and gifts it would offer to a close friend.`,
      `When the effect ends, the creature has no understanding of why it held you in such fear.`,
      `**Once you use this feature, you can’t use it again until you finish a long rest.**`
    ]
  ),


  /* CLERIC */
  DIVINE_DOMAIN: Feature(
    'Divine Domain',
    `Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. The Life domain is detailed at the end of the class description and provides examples of gods associated with it. See the Player’s Handbook for details on all the domains.Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.`
  ),
  DOMAIN_SPELLS: Feature(
    'Domain Spells',
    [
      `Each domain has a list of spells — its domain spells — that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.`,
      `If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you.`
    ]
  ),
  CLERIC_CHANNEL_DIVINITY_I: Feature(
    'Channel Divinity I',
    [
      `At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.`,
      `When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.`,  
      `Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.`
    ]
  ),
  CLERIC_CHANNEL_DIVINITY_II: Feature(
    'Channel Divinity II',
    `Beginning at 6th level, you can use your Channel Divinity twice between rests.`
  ),
  CLERIC_CHANNEL_DIVINITY_III: Feature(
    'Channel Divinity III',
    `Beginning at 18th level, you can use Channel Divinity three times between rests. When you finish a short or long rest, you regain your expended uses.`
  ),
  TURN_UNDEAD: Feature(
    'Channel Divinity: Turn Undead',
    [
      `As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.`,
      `A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.`
    ]
  ),
  DESTROY_UNDEAD_I: Feature(
    'Destroy Undead I',
    `Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating (CR) is at or below a threshold of 1/2 or lower.`
  ),
  DESTROY_UNDEAD_II: Feature(
    'Destroy Undead II',
    `Destroy Undead CR threshold is now 1 or lower.`
  ),
  DESTROY_UNDEAD_III: Feature(
    'Destroy Undead III',
    `Destroy Undead CR threshold is now 2 or lower.`
  ),
  DESTROY_UNDEAD_IV: Feature(
    'Destroy Undead IV',
    `Destroy Undead CR threshold is now 3 or lower.`
  ),
  DESTROY_UNDEAD_V: Feature(
    'Destroy Undead V',
    `Destroy Undead CR threshold is now 4 or lower.`
  ),
  DIVINE_INTERVENTION_I: Feature(
    'Divine Intervention I',
    [
      `Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.`,
      `Imploring your deity’s aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.`,
      `If your deity intervenes, you can’t use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.`
    ]
  ),
  DIVINE_INTERVENTION_II: Feature(
    'Divine Intervention II',
    `At 20th level, your call for intervention succeeds automatically, no roll required.`
  ),
  /* CLERIC SUBCLASSES */
  ARCANE_INITIATE: Feature(
    'Arcane Initiate',
    'When you choose this domain at 1st level, you gain proficiency in the Arcana skill, and you gain two cantrips of your choice from the wizard spell list. For you, these cantrips count as cleric cantrips.',
  ),
  ARCANA_CHANNEL_DIVINITY: Feature(
    'Channel Divinity: Arcane Abjuration',
    [
      `Starting at 2nd level, you can use your Channel Divinity to abjure otherworldly creatures.`,
      `As an action, you present your holy symbol, and one celestial, elemental, fey, or fiend of your choice that is within 30 feet of you must make a Wisdom saving throw, provided that the creature can see or hear you. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.`,
      `A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. It also can't take reactions. For its action, it can only use the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.`,
      `After you reach 5th level, when a creature fails its saving throw against your Arcane Abjuration feature, the creature is banished for 1 minute (as in the Banishment spell, no concentration required) if it isn't on its plane of origin and its challenge rating is at or below a certain threshold, as shown on the Arcane Banishment table.`,
      {
        title: 'Arcane Banishment',
        table: {
          'Cleric Level': [
            '5th', '8th', '11th', '14th', '17th'
          ],
          'Banishes Creatures of CR...': [
            '1/2 or lower', '1 or lower', '2 or lower', '3 or lower' , '4 or lower'
          ]
        }
      }
    ]
  ),
  SPELL_BREAKER: Feature(
    'Spell Breaker',
    `Starting at 6th level, when you restore hit points to an ally with a spell of 1st level or higher, you can also end one spell of your choice on that creature. The level of the spell you end must be equal to or lower than the level of the spell slot you use to cast the healing spell.`
  ),
  POTENT_SPELLCASTING: Feature(
    'Potent Spellcasting',
    `Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.`
  ),
  ARCANE_MASTERY: Feature(
    'Arcane Mastery',
    `At 17th level, you choose four spells from the wizard spell list, one from each of the following levels: 6th, 7th, 8th, and 9th. You add them to your list of domain spells. Like your other domain spells, they are always prepared and count as cleric spells for you.`
  ),
  DEATH_BONUS_PROFICIENCY: Feature(
    'Death Bonus Proficiency',
    `When you choose this domain at 1st level, you gain proficiency with martial weapons.`
  ),
  REAPER_I: Feature(
    'Reaper I',
    `At 1st level, you learn one necromancy cantrip of your choice from any spell list. When you cast a necromancy cantrip that normally targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other.`
  ),
  REAPER_II: Feature(
    'Reaper II',
    `Starting at 17th level, when you cast a necromancy spell of 1st through 5th level that targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other. If the spell consumes its material components, you must provide them for each target.`
  ),
  DEATH_CHANNEL_DIVINITY: Feature(
    `Channel Divinity: Artisan's Blessing`,
    `Starting at 2nd level, you can use Channel Divinity to destroy another creature's life force by touch. When you hit a creature with a melee attack, you can use Channel Divinity to deal extra necrotic damage to the target. The damage equals 5 + twice your cleric level.`
  ),
  INESCAPABLE_DESTRUCTION: Feature(
    'Inescapable Destruction',
    `Starting at 6th level, your ability to channel negative energy becomes more potent. Necrotic damage dealt by your cleric spells and Channel Divinity options ignores resistance to necrotic damage.`
  ),
  DIVINE_STRIKE: Feature(
    'Divine Strike',
    `At 8th level, you gain the ability to infuse your weapon strikes with necrotic energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an a 1d8 necrotic damage to the target. When you reach 14th level, the extra damage increases to 2d8.`
  ),
  FORGE_BONUS_PROFICIENCIES: Feature(
    'Forge Bonus Proficiencies',
    `When you choose this domain at 1st level, you gain proficiency with heavy armor and smith's tools.`
  ),
  BLESSING_OF_THE_FORGE: Feature(
    'Blessing of the Forge',
    [
      `At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a simple or martial weapon. Until the end of your next long rest or until you die, the object becomes a magic item, granting a +1 bonus to AC if it’s armor or a +1 bonus to attack and damage rolls if it’s a weapon.`,
      `Once you use this feature, you can’t use it again until you finish a long rest.`
    ]
  ),
  FORGE_CHANNEL_DIVINITY: Feature(
    'Forge Channel Divinity',
    [
      `Starting at 2nd level, you can use your Channel Divinity to create simple items.`,
      `You conduct an hour-long ritual that crafts a nonmagical item that must include some metal: a simple or martial weapon, a suit of armor, ten pieces of ammunition, a set of tools, or another metal object. The creation is completed at the end of the hour, coalescing in an unoccupied space of your choice on a surface within 5 feet of you.`,
      `The thing you create can be something that is worth no more than 100 gp. As part of this ritual, you must lay out metal, which can include coins, with a value equal to the creation. The metal irretrievably coalesces and transforms into the creation at the ritual’s end, magically forming even nonmetal parts of the creation.`,
      `The ritual can create a duplicate of a nonmagical item that contains metal, such as a key, if you possess the original during the ritual.`
    ]
  ),
  SOUL_OF_THE_FORGE: Feature(
    'Soul of the Forge',
    [
      `Starting at 6th level, your mastery of the forge grants you special abilities:`,
      `• You gain resistance to fire damage.`,
      `• While wearing heavy armor, you gain a +1 bonus to AC.`
    ]
  ),
  DIVINE_STRIKE: Feature(
    'Divine Strike',
    `At 8th level, you gain the ability to infuse your weapon strikes with the fiery power of the forge. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 fire damage to the target. When you reach 14th level, the extra damage increases to 2d8.`
  ),
  SAINT_OF_FORGE_AND_FIRE: Feature(
    'Saint of Forge and Fire',
    [
      `At 17th level, your blessed affinity with fire and metal becomes more powerful:`,
      `• You gain immunity to fire damage.`,
      `• While wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.`
    ]
  ),
  CIRCLE_OF_MORTALITY: Feature(
    'Circle of Mortality',
    [
      `At 1st level, you gain the ability to manipulate the line between life and death. When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible for each die.`,
      `In addition, you learn the Spare the Dying cantrip, which doesn't count against the number of cleric cantrips you know. For you, it has a range of 30 feet, and you can cast it as a bonus action.`
    ]
  ),
  EYES_OF_THE_GRAVE: Feature(
    'Eyes of the Grave',
    [
      `At 1st level, you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your next turn, you know the location of any undead within 60 feet of you that isn't behind total cover and that isn't protected from divination magic. This sense doesn't tell you anything about a creature's capabilities or identity.`,
      `You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.`
    ]
  ),
  GRAVE_CHANNEL_DIVINITY: Feature(
    'Channel Divinity: Path to the Grave',
    [
      `Starting at 2nd level, you can use your Channel Divinity to mark another creature’s life force for termination.`,
      `As an action, you choose one creature you can see within 30 feet of you, cursing it until the end of your next turn. The next time you or an ally of yours hits the cursed creature with an attack, the creature has vulnerability to all of that attack's damage, and then the curse ends.`
    ]
    
  ),
  SENTINEL_AT_DEATHS_DOOR: Feature(
    `Sentinel at Death's Door`,
    [
      `At 6th level, you gain the ability to impede death’s progress. As a reaction when you or an ally that you can see within 30 feet of you suffers a critical hit, you can turn that attack into a normal hit. Any effects triggered by a critical hit are canceled.`,
      `You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.`
    ]
  ),
  POTENT_SPELLCASTING: Feature(
    'Potent Spellcasting',
    `Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.`
  ),
  KEEPER_OF_SOULS: Feature(
    'Keeper of Souls',
    `At 17th level, you can seize a trace of vitality from a parting soul and use it to heal the living. When an enemy you can see dies within 30 feet of you, you or one ally of your choice that is within 30 feet of you regains hit points equal to the enemy’s number of Hit Dice. You can use this feature only if you aren't incapacitated. Once you use it, you can't do so again until the start of your next turn.`
  ),
  BLESSINGS_OF_KNOWLEDGE: Feature(
    'Blessings of Knowledge',
    [
      `At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.`,
      `Your proficiency bonus is doubled for any ability check you make that uses either of those skills.`
    ]
  ),
  KNOWLEDGE_CHANNEL_DIVINITY_KNOWLEDGE_OF_AGES: Feature(
    'Channel Divinity: Knowledge of the Ages',
    `Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.`
  ),
  KNOWLEDGE_CHANNEL_DIVINITY_READ_THOUGHTS: Feature(
    'Channel Divinity: Read Thoughts',
    [
      `At 6th level, you can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.`,
      `As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.`,
      `If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it ie actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.`,
      `During that time, you can use your action to end this effect and cast the Suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.`
    ]
  ),
  POTENT_SPELLCASTING: Feature(
    'Potent Spellcasting',
    `Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.`
  ),
  VISIONS_OF_THE_PAST: Feature(
    'Visions of the Past',
    [
      `Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.`,
      `Once you use this feature, you can't use it again until you finish a short or long rest.`,
      `***Object Reading.*** Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.`,
      `***Area Reading.*** As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation.`
    ]
  ),
  LIFE_BONUS_PROFICIENCY: Feature(
    'Life Bonus Proficiency',
    `When you choose this domain at 1st level, you gain proficiency with heavy armor.`
  ),
  DISCIPLE_OF_LIFE: Feature(
    'Disciple of Life',
    `Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.`
  ),
  LIFE_CHANNEL_DIVINITY: Feature(
    'Channel Divinity: Preserve Life',
    [
      `Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.`,
      `As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.`
    ]
  ),
  BLESSED_HEALER: Feature(
    'Disciple of Life',
    `Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.`
  ),
  DIVINE_STRIKE: Feature(
    'Disciple of Life',
    `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.`
  ),
  SUPREME_HEALING: Feature(
    'Disciple of Life',
    `Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.`
  ),
  LIGHT_BONUS_CANTRIP: Feature(
    'Light Bonus Cantrip',
    `When you choose this domain at 1st level, you gain the Light cantrip if you don't already know it.`
  ),
  WARDING_FLARE_I: Feature(
    'Warding Flare I',
    [
      `Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature.`,
      `You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.`
    ]
  ),
  WARDING_FLARE_II: Feature(
    'Warding Flare II',
    `Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.`
  ),
  LIGHT_CHANNEL_DIVINITY: Feature(
    'Channel Divinity: Radiance of the Dawn',
    [
      `Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.`,
      `As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected.`
    ]
  ),
  POTENT_SPELLCASTING: Feature(
    'Potent Spellcasting',
    `Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.`
  ),
  CORONA_OF_LIGHT: Feature(
    'Corona of Light',
    `Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.`
  ),
  ACOLYTE_OF_NATURE: Feature(
    'Acolyte of Nature',
    `At 1st level, you learn one cantrip of your choice from the druid spell list. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.`
  ),
  NATURE_BONUS_PROFICIENCY: Feature(
    'Bonus Proficiency',
    `Also at 1st level, you gain proficiency with heavy armor.`
  ),
  NATURE_CHANNEL_DIVINITY: Feature(
    'Channel Divinity: Charm Animals and Plants',
    [
      `Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.`,
      `As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.`
    ]
  ),
  DAMPEN_ELEMENTS: Feature(
    'Dampen Elements',
    'Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.'
  ),
  DIVINE_STRIKE: Feature(
    'Divine Strike',
    `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to 2d8.`
  ),
  MASTER_OF_NATURE: Feature(
    'Master of Nature',
    `At 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.`
  ),
  ORDER_BONUS_PROFICIENCY: Feature(
    'Bonus Proficiencies',
    `When you choose this domain at 1st level, you gain proficiency with heavy armor. You also gain proficiency in the Intimidation or Persuasion skill (your choice).`
  ),
  VOICE_OF_AUTHORITY: Feature(
    'Voice of Authority',
    [
      `Starting at 1st level, you can invoke the power of law to drive an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell to make one weapon attack against a creature of your choice that you can see.`,
      `If the spell targets more than one ally, you choose the ally who can make the attack.`
    ]
  ),
  ORDER_CHANNEL_DIVINITY: Feature(
    `Channel Divinity: Order's Demand`,
    [
      `Starting at 2nd level, you can use your Channel Divinity to exert an intimidating presence over others.`,
      `As an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be charmed by you until the end of your next turn or until the charmed creature takes any damage. You can also cause any of the charmed creatures to drop what they are holding when they fail the saving throw.`
    ]
  ),
  EMBODIMENT_OF_LAW: Feature(
    'Embodiment of the Law',
    [
      `At 6th level, you become remarkably adept at channeling magical energy to compel others.`,
      `If you cast a spell of the enchantment school using a spell slot of 1st level or higher, you can change the spell's casting time to 1 bonus action for this casting, provided the spell's casting time is normally 1 action.`,
      `You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.`
    ]
  ),
  DIVINE_STRIKE: Feature(
    'Divine Strike',
    `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 psychic damage to the target. When you reach 14th level, the extra damage increases to 2d8.`
  ),
  ORDERS_WRATH: Feature(
    `Order's Wrath`,
    `Starting at 17th level, enemies you designate for destruction wilt under the combined efforts of you and your allies. If you deal your Divine Strike damage to a creature on your turn, you can curse that creature until the start of your next turn. The next time one of your allies hits the cursed creature with an attack, the target also takes 2d8 psychic damage, and the curse ends. You can curse a creature in this way only once per turn.`
  ),
  PROTECTION_BONUS_PROFICIENCY: Feature(
    'Bonus Proficiency',
    `When you choose this domain at 1st level, you gain proficiency with heavy armor.`
  ),
  SHIELD_OF_THE_FAITHFUL: Feature(
    'Shield of the Faithful',
    `Starting at 1st level, you gain the ability to hinder attacks intended for others. When a creature attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. To do so, you must be able to see both the attacker and the target. You interpose an arm, a shield, or some other part of yourself to try to throw the attack off target.`
  ),
  PROTECTION_CHANNEL_DIVINITY: Feature(
    'Channel Divinity: Radiant Defense',
    [
      `Starting at 2nd level, you can use your Channel Divinity to cloak your allies in radiant armor.`,
      `As an action, you channel blessed energy into an ally that you can see within 30 feet of you. The first time that ally is hit by an attack within the next minute, the attacker takes radiant damage equal to 2d10 + your cleric level.`
    ]
  ),
  BLESSED_HEALER: Feature(
    'Blessed Healer',
    `Beginning at 6th level, the healing spells you cast on others can heal you as well. When you cast a spell with a spell slot and it restores hit points to any creature other than you this turn, you regain hit points equal to 2 + the spell’s level.`
  ),
  DIVINE_STRIKE: Feature(
    'Divine Strike',
    `At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.`
  ),
  INDOMITABLE_DEFENSE: Feature(
    'Indomitable Defense',
    [
      `At 17th level, you gain resistance to two damage types of your choice, choosing from bludgeoning, necrotic, piercing, radiant, and slashing. Whenever you finish a short or long rest, you can change the damage types you chose.`,
      `As an action, you can temporarily give up this resistance and transfer it to one creature you touch. The creature keeps the resistance until the end of your next short or long rest or until you transfer it back to yourself as a bonus action.`
    ]
  ),
  INDOMITABLE_DEFENSE: Feature(
    '',
    
  ),
  INDOMITABLE_DEFENSE: Feature(
    '',
    
  ),
  INDOMITABLE_DEFENSE: Feature(
    '',
    
  ),
  INDOMITABLE_DEFENSE: Feature(
    '',
    
  ),
  INDOMITABLE_DEFENSE: Feature(
    '',
    
  ),
  // [[FEATURES.TEMPEST_BONUS_PROFICIENCY, FEATURES.WRATH_OF_STORM], FEATURES.TEMPEST_CHANNEL_DIVINITY, FEATURES.THUNDEROUS_STRIKE, FEATURES.DIVINE_STRIKE, FEATURES.STORMBORN]

  // [FEATURES.BLESSING_OF_TRICKSTER, FEATURES.TRICKERY_CHANNEL_DIVINITY_DUPLICITY_I, FEATURES.TRICKERY_CHANNEL_DIVINITY_CLOAK, FEATURES.TRICKERY_DIVINE_STRIKE, FEATURES.TRICKERY_CHANNEL_DIVINITY_DUPLICITY_II]

  // [[FEATURES.WAR_BONUS_PROFICIENCY, FEATURES.WAR_PRIEST], FEATURES.WAR_CHANNEL_DIVINITY_STRIKE, FEATURES.WAR_CHANNEL_DIVINITY_BLESSING, FEATURES.WAR_DIVINE_STRIKE, FEATURES.WAR_AVATAR_OF_BATTLE]

  /* DRUID */
  DRUIDIC: Feature(
    'Druidic',
    `You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic.`
  ),
  DRUID_CIRCLE: Feature(
    'Druid Circle',
    `At 2nd level, you choose to identify with a circle of druids.`,
  ),
  WILD_SHAPE_I: Feature(
    'Wild Shape I',
    [
      `Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest. Your druid level determines the beasts you can transform into.`,
      `At 2nd level, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn’t have a flying or swimming speed.`
    ]
  ),
  WILD_SHAPE_II: Feature(
    'Wild Shape II',
    `At 4th level, you can use your action to magically assume the shape of a beast that you have seen before of challenge rating 1/2 or lower that doesn't have a flying speed. You can use this feature twice. You regain expended uses when you finish a short or long rest.`
  ),
  WILD_SHAPE_III: Feature(
    'Wild Shape III',
    `At 8th level, you can use your action to magically assume the shape of a beast that you have seen before of challenge rating 1 or lower. You can use this feature twice. You regain expended uses when you finish a short or long rest.`
  ),
  DRUID_TIMELESS_BODY: Feature(
    'Timeless Body',
    `Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.`
  ),
  BEAST_SPELLS: Feature(
    'Beast Spells',
    `Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren’t able to provide material components.`
  ),
  ARCHDRUID: Feature(
    'Archdruid',
    [
      `At 20th level, you can use your Wild Shape an unlimited number of times.`,
      `Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren’t consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.`
    ]
  ),
  BALM_OF_SUMMER_COURT: Feature(
    'Balm of the Summer Court',
    [
      `At 2nd level, you become imbued with the blessings of the Summer Court. You are a font of energy that offers respite from injuries. You have a pool of fey energy represented by a number of d6s equal to your druid level.`,
      `As a bonus action, you can choose an ally you can see within 120 feet of you and spend a number of those dice equal to half your druid level or less. Roll the spent dice and add them together. The target regains a number of hit points equal to the total. The target also gains 1 temporary hit point per die spent.`,
      `You regain the expended dice when you finish a long rest.`
    ]
  ),
  HEARTH_OF_MOONLIGHT_SHADOW: Feature(
    'Heath of Moonlight and Shadow',
    [
      `At 6th level, home can be wherever you are. During a short or long rest, you can invoke the shadowy power of the Gloaming Court to help guard your respite. At the start of the rest, you touch a point in space, and an invisible, 30-foot-radius sphere of magic appears, centered on that point. Total cover blocks the sphere.`,
      `While within the sphere, you and your allies gain a +5 bonus to Dexterity (Stealth) and Wisdom (Perception) checks, and any light from open flames in the sphere (a campfire, torches, or the like) isn't visible outside it.`,
      `The sphere vanishes at the end of the rest or when you leave the sphere.`
    ]
  ),
  HIDDEN_PATHS: Feature(
    'Hidden Paths',
    [
      `Starting at 10th level, you can use the hidden, magical pathways that some fey use to traverse space in a blink of an eye. As a bonus action on your turn, you can teleport up to 60 feet to an unoccupied space you can see. Alternatively, you can use your action to teleport one willing creature you touch up to 30 feet to an unoccupied space you can see.`,
      `You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.`
    ]
  ),
  WALKER_IN_DREAMS: Feature(
    'Walker in Dreams',
    [
      `At 14th level, the magic of the Feywild grants you the ability to travel mentally or physically through dreamlands.`,
      `When you finish a short rest, you can cast one of the following spells, without expending a spell slot or requiring material components: Dream (with you as the messenger), Scrying, or Teleportation Circle.`,
      `This use of Teleportation Circle is special. Rather than opening a portal to a permanent teleportation circle, it opens a portal to the last location where you finished a long rest on your current plane of existence. If you haven't taken a long rest on your current plane, the spell fails but isn't wasted.`,
      `Once you use this feature, you can't use it again until you finish a long rest.`
    ]
  ),
  COMBAT_WILD_SHAPE: Feature(
    'Combat Wild Shape',
    [
      `When you choose this circle at 2nd level, you gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.`,
      `Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended.`
    ]
  ),
  CIRCLE_FORMS: Feature(
    'Circle Forms',
    [
      `The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1. You ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there.`,
      `Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.`
    ]
  ),
  PRIMAL_STRIKE: Feature(
    'Primal Strike',
    `Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.`
  ),
  ELEMENTAL_WILD_SHAPE: Feature(
    'Elemental Wild Shape',
    `At 10th level, you can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental.`
  ),
  THOUSAND_FORMS: Feature(
    'Thousand Forms',
    `By 14th level, you have learned to use magic to alter your physical form in more subtle ways. You can cast the Alter Self spell at will.`
  ),
  LAND_BONUS_CANTRIP: Feature(
    'Bonus Cantrip',
    `When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice.`
  ),
  NATURAL_RECOVERY: Feature(
    'Natural Recovery',
    [
      `Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest.`,
      `For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots.`
    ]
  ),
  NATURES_WARD: Feature(
    `Nature's Ward`,
    `When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.`
  ),
  NATURES_SANCTUARY: Feature(
    `Nature's Sanctuary`,
    [
      `When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.`,
      `The creature is aware of this effect before it makes its attack against you.`
    ]
  ),
  SPEECH_OF_THE_WOODS: Feature(
    'Speech of the Woods',
    [
      `At 2nd level, you gain the ability to converse with beasts and many fey.`,
      `You learn to speak, read, and write Sylvan. In addition, beasts can understand your speech, and you gain the ability to decipher their noises and motions. Most beasts lack the intelligence to convey or understand sophisticated concepts, but a friendly beast could relay what it has seen or heard in the recent past. This ability doesn’t grant you any special friendship with beasts, though you can combine this ability with gifts to curry favor with them as you would with any nonplayer character.`
    ]
  ),
  SPIRIT_TOTEM: Feature(
    'Spirit Totem',
    [
      `Starting at 2nd level, you gain the ability to call forth nature spirits and use them to influence the world around you.`,
      `As a bonus action, you can magically summon an incorporeal spirit to a point you can see within 60 feet of you. The spirit creates an aura in a 30-foot radius around that point. It counts as neither a creature nor an object, though it has the spectral appearance of the creature it represents. As a bonus action, you can move the spirit up to 60 feet to a point you can see.`,
      `The spirit persists for 1 minute. Once you use this feature, you can’t use it again until you finish a short or long rest.`,
      `The effect of the spirit’s aura depends on the type of spirit you summon from the options below.`,
      `***Bear Spirit.*** The bear spirit grants you and your allies its might and endurance. Each creature of your choice in the aura when the spirit appears gains temporary hit points equal to 5 + your druid level. In addition, you and your allies gain advantage on Strength checks and Strength saving throws while in the aura.`,
      `***Hawk Spirit.*** The hawk spirit is a consummate hunter, aiding you and your allies with its keen sight. When a creature makes an attack roll against a target in the spirit’s aura, you can use your reaction to grant advantage to that attack roll. In addition, you and your allies have advantage on Wisdom (Perception) checks while in the aura.`,
      `***Unicorn Spirit.*** The unicorn spirit lends its protection to those nearby. You and your allies gain advantage on all ability checks made to detect creatures in the spirit’s aura. In addition, if you cast a spell using a spell slot that restores hit points to any creature inside or outside the aura, each creature of your choice in the aura also regains hit points equal to your druid level.`
    ]
  ),
  MIGHTY_SUMMONER: Feature(
    'Mighty Summoner',
    [
      `At 6th level, beasts and fey that you conjure are more resilient than normal. Any beast or fey summoned or created by a spell that you cast gains two benefits:`,
      `• The creature appears with more hit points than normal: 2 extra hit points per Hit Die it has.`,
      `• The damage from its natural weapons is considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage.`
    ]
  ),
  GUARDIAN_SPIRIT: Feature(
    'Guardian Spirit',
    ``
  ),
  FAITHFUL_SUMMONS: Feature(
    '',
    
  ),
  HALO_OF_SPORES: Feature(
    '',
    
  ),
  SYMBIOTIC_ENTITY: Feature(
    '',
    
  ),
  FUNGAL_INFESTATION: Feature(
    '',
    
  ),
  SPREADING_SPORES: Feature(
    '',
    
  ),
  FUNGAL_BODY: Feature(
    '',
    
  ),
  HARVESTS_SCYTHE: Feature(
    '',
    
  ),
  SPEECH_BEYOND_GRAVE: Feature(
    '',
    
  ),
  WATCHER_AT_THRESHOLD: Feature(
    '',
    
  ),
  PATH_OF_DEAD: Feature(
    '',
    
  ),

  /* FIGHTER */
  FIGHTER_FIGHTING_STYLE: Feature(
    'Fighting Style',
    `You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.

    Archery
    You gain a +2 bonus to attack rolls you make with ranged weapons.
    
    Defense
    While you are wearing armor, you gain a +1 bonus to AC.
    
    Dueling
    When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.
    
    Great Weapon Fighting
    When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.
    
    Protection
    When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.
    
    Two-Weapon Fighting
    When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.`
  ),
  SECOND_WIND: Feature(
    'Second Wind',
    'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.'
  ),
  ACTION_SURGE_I: Feature(
    'Action Surge',
    `Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.

    Once you use this feature, you must finish a short or long rest before you can use it again.`
  ),
  ACTION_SURGE_II: Feature(
    'Action Surge',
    `Starting at 17th level, you can use Action Surge twice before a rest, but only once on the same turn.`
  ),
  MARTIAL_ARCHETYPE: Feature(
    'Martial Archetype',
    `At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.`
  ),
  INDOMITABLE_I: Feature(
    'Indomitable I',
    `Once between long rests, you can reroll a saving throw that you fail. If you do so, you must use the new roll.`
  ),
  INDOMITABLE_II: Feature(
    'Indomitable II',
    `Twice between long rests, you can reroll a saving throw that you fail. If you do so, you must use the new roll.`
  ),
  INDOMITABLE_III: Feature(
    'Indomitable III',
    `Three times between long rests, you can reroll a saving throw that you fail. If you do so, you must use the new roll.`
  ),

  /* MONK */
  MONK_UNARMORED_DEFENSE: Feature(
    'Unarmored Defense',
    'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.'
  ),
  MARTIAL_ARTS: Feature(
    'Martial Arts',
    `At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property.

    You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:

    You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.
    You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.
    When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn.
    Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in the Weapons section.`
  ),
  KI: Feature(
    'Ki',
    `Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.

    You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.
    
    When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.
    
    Some of your ki features require your target to make a saving throw to resist the feature’s effects. The saving throw DC is calculated as follows:
    
    Ki save DC = 8 + your proficiency bonus + your Wisdom modifier
    
    Flurry of Blows
    Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.

    Patient Defense
    You can spend 1 ki point to take the Dodge action as a bonus action on your turn.

    Step of the Wind
    You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.`
  ),
  UNARMORED_MOVEMENT_I: Feature(
    'Unarmored Movement I',
    `Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.`
  ),
  UNARMORED_MOVEMENT_II: Feature(
    'Unarmored Movement II',
    `At 6th level, your Unarmored Speed speed bonus increases to 15 feet while you are not wearing armor or wielding a shield.`
  ),
  UNARMORED_MOVEMENT_III: Feature(
    'Unarmored Movement III',
    `At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during your move.`
  ),
  MONASTIC_TRADITION: Feature(
    'Monastic Tradition',
    `When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, detailed at the end of the class description or one from another source. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.`
  ),
  DEFLECT_MISSILES: Feature(
    'Deflect Missiles',
    `Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.
    
    If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet.`
  ),
  SLOW_FALL: Feature(
    'Slow Fall',
    `Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.`
  ),
  STUNNING_STRIKE: Feature(
    'Stunning Strike',
    `Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.`
  ),
  KI_EMPOWERED_STRIKES: Feature(
    'Ki-Empowered Strikes',
    `Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.`
  ),
  
  STILLNESS_OF_MIND: Feature(
    'Stillness of Mind',
    `Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.`
  ),
  PURITY_OF_BODY: Feature(
    'Purity of Body',
    `At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.`
  ),
  UNARMORED_MOVEMENT_IV: Feature(
    'Unarmored Movement IV',
    `At 10th level, your Unarmored Speed speed bonus increases to 20 feet while you are not wearing armor or wielding a shield.`
  ),
  TONGUE_OF_THE_SUN_AND_MOON: Feature(
    'Tongue of the Sun and Moon',
    `Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.`
  ),
  DIAMOND_SOUL: Feature(
    'Diamond Soul',
    `Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.

    Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.`
  ),
  UNARMORED_MOVEMENT_V: Feature(
    'Unarmored Movement V',
    `At 14th level, your Unarmored Speed speed bonus increases to 25 feet while you are not wearing armor or wielding a shield.`
  ),
  MONK_TIMELESS_BODY: Feature(
    'Timeless Body',
    `At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can’t be aged magically. You can still die of old age, however. In addition, you no longer need food or water.`
  ),
  EMPTY_BODY: Feature(
    'Empty Body',
    `Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.

    Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can’t take any other creatures with you.`
  ),
  UNARMORED_MOVEMENT_VI: Feature(
    'Unarmored Movement VI',
    `At 18th level, your Unarmored Speed speed bonus increases to 30 feet while you are not wearing armor or wielding a shield.`
  ),
  PERFECT_SELF: Feature(
    'Perfect Self',
    `At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.`
  ),

  /* PALADIN */
  DIVINE_SENSE: Feature(
    'Divine Sense',
    `The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.

    You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.`
  ),
  LAY_ON_HANDS: Feature(
    'Lay on Hands',
    `Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.

    As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.
    
    Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.
    
    This feature has no effect on undead and constructs.`
  ),
  PALADIN_FIGHTING_STYLE: Feature(
    'Fighting Style',
    `At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.

    Defense
    While you are wearing armor, you gain a +1 bonus to AC.
    
    Dueling
    When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.
    
    Great Weapon Fighting
    When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit.
    
    Protection
    When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.`
  ),
  DIVINE_SMITE_I: Feature(
    'Divine Smite I',
    `Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.`
  ),
  DIVINE_SMITE_II: Feature(
    'Divine Smite II',
    `By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.`
  ),
  DIVINE_HEALTH: Feature(
    'Divine Health',
    `By 3rd level, the divine magic flowing through you makes you immune to disease.`
  ),
  SACRED_OATH: Feature(
    'Sacred Oath',
    `When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion detailed at the end of the class description or one from another source.

    Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.`
  ),
  OATH_SPELLS: Feature(
    'Oath Spells',
    `Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don’t count against the number of spells you can prepare each day.

    If you gain an oath spell that doesn’t appear on the paladin spell list, the spell is nonetheless a paladin spell for you.`
  ),
  PALADIN_CHANNEL_DIVINITY_I: Feature(
    'Channel Divinity I',
    `Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.

    When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.
    
    Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC.`
  ),
  PALADIN_CHANNEL_DIVINITY_II: Feature(
    'Channel Divinity II',
    `You can now cast Channel Divinity twice after each short or long rest.`
  ),
  AURA_OF_PROTECTION_I: Feature(
    'Aura of Protection I',
    `Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.`
  ),
  AURA_OF_PROTECTION_II: Feature(
    'Aura of Protection II',
    `At 18th level, the range of this aura increases to 30 feet.`
  ),
  AURA_OF_COURAGE_I: Feature(
    'Aura of Courage I',
    `Starting at 10th level, you and friendly creatures within 10 feet of you can’t be frightened while you are conscious.`
  ),
  AURA_OF_COURAGE_II: Feature(
    'Aura of Courage II',
    `At 18th level, the range of this aura increases to 30 feet.`
  ),
  CLEANSING_TOUCH: Feature(
    'Cleansing Touch',
    `Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.

    You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.`
  ),

  /* RANGER */
  FAVORED_ENEMY_I: Feature(
    'Favored Enemy I',
    `Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.

    Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.
    
    You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.
    
    When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.`
  ),
  FAVORED_ENEMY_II: Feature(
    'Favored Enemy II',
    `At 6th level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.

    Choose an additional type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.
    
    You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.
    
    When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.`
  ),
  FAVORED_ENEMY_III: Feature(
    'Favored Enemy III',
    `At 14th level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.

    Choose an additional type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.
    
    You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.
    
    When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.`
  ),
  NATURAL_EXPLORER_I: Feature(
    'Natural Explorer I',
    `You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.

    While traveling for an hour or more in your favored terrain, you gain the following benefits:
    
    - Difficult terrain doesn’t slow your group’s travel.
    - Your group can’t become lost except by magical means.
    - Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.
    - If you are traveling alone, you can move stealthily at a normal pace.
    - When you forage, you find twice as much food as you normally would.
    - While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.`
  ),
  NATURAL_EXPLORER_II: Feature(
    'Natural Explorer II',
    `Choose an additional favored terrain type to receive Natural Explorer bonus in.`
  ),
  NATURAL_EXPLORER_III: Feature(
    'Natural Explorer III',
    `Choose an additional favored terrain type to receive Natural Explorer bonus in.`
  ),
  RANGER_FIGHTING_STYLE: Feature(
    'Fighting Style',
    `At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. 

    You can’t take a Fighting Style option more than once, even if you later get to choose again.
    
    Archery
    You gain a +2 bonus to attack rolls you make with ranged weapons.
    
    Defense
    While you are wearing armor, you gain a +1 bonus to AC.
    
    Dueling
    When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.
    
    Two-Weapon Fighting
    When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.`
  ),
  RANGER_ARCHETYPE: Feature(
    'Ranger Archetype',
    `At 3rd level, you choose an archetype that you strive to emulate: the Hunter that is detailed at the end of the class description or one from another source. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.`
  ),
  PRIMEVAL_AWARENESS: Feature(
    'Primeval Awareness',
    `Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number.`
  ),
  HIDE_IN_PLAIN_SIGHT: Feature(
    'Hide in Plain Sight',
    `Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.

    Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.`
  ),
  VANISH: Feature(
    'Vanish',
    `Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail.`
  ),
  FERAL_SENSES: Feature(
    'Feral Senses',
    `At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it.

    You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened.`
  ),
  FOE_SLAYER: Feature(
    'Foe Slayer',
    `At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.`
  ),

  /* ROGUE */
  SNEAK_ATTACK: Feature(
    'Sneak Attack',
    `Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.

    You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.
    
    The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.`
  ),
  THIEVES_CANT: Feature(
    `Thieves' Cant`,
    `During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.

    In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.`
  ),
  CUNNING_ACTION: Feature(
    'Cunning Action',
    `Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.`
  ),
  ROGUISH_ARCHETYPE: Feature(
    'Roguish Archetype',
    `At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities: Thief, detailed at the end of the class description, or one from another source. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.`
  ),
  UNCANNY_DODGE: Feature(
    'Uncanny Dodge',
    `Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.`
  ),
  RELIABLE_TALENT: Feature(
    'Reliable Talent',
    `By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.`
  ),
  BLINDSENSE: Feature(
    'Blindsense',
    `Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.`
  ),
  SLIPPERY_MIND: Feature(
    'Slippery Mind',
    `By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.`
  ),
  ELUSIVE: Feature(
    'Elusive',
    `Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren’t incapacitated.`
  ),
  STROKE_OF_LUCK: Feature(
    'Stroke of Luck',
    `At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.

    Once you use this feature, you can’t use it again until you finish a short or long rest.`
  ),

  /* SORCERER */
  SORCEROUS_ORIGIN: Feature(
    'Sorcerous Origin',
    `Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline, detailed at the end of the class description, or one from another source.

    Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.`
  ),
  FONT_OF_MAGIC: Feature(
    'Font of Magic',
    `At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.

    Sorcery Points
    You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.
    
    Flexible Casting
    You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.
    
    Creating Spell Slots. You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th.
    
    Any spell slot you create with this feature vanishes when you finish a long rest.
    
    Creating Spell Slots
    SPELL SLOT LEVEL
    
    SORCERY POINT COST
    
    1st
    
    2
    
    2nd
    
    3
    
    3rd
    
    5
    
    4th
    
    6
    
    5th
    
    7
    
    Converting a Spell Slot to Sorcery Points. As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot’s level.`
  ),
  METAMAGIC_I: Feature(
    'Metamagic',
    `At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.

    You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.
    
    Careful Spell
    When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell’s full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell.
    
    Distant Spell
    When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.
    
    When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.
    
    Empowered Spell
    When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.
    
    You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.
    
    Extended Spell
    When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.
    
    Heightened Spell
    When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.
    
    Quickened Spell
    When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.
    
    Subtle Spell
    When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.
    
    Twinned Spell
    When you cast a spell that targets only one creature and doesn’t have a range of self, you can spend a number of sorcery points equal to the spell’s level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip).
    
    To be eligible, a spell must be incapable of targeting more than one creature at the spell’s current level. For example, magic missile and scorching ray aren’t eligible, but ray of frost and chromatic orb are.`
  ),
  METAMAGIC_II: Feature(
    'Metamagic',
    `You gain another metamagic option. Note that you can use only one Metamagic option on a spell when you cast it, unless otherwise noted.`
  ),
  METAMAGIC_III: Feature(
    'Metamagic',
    `You gain another metamagic option. Note that you can use only one Metamagic option on a spell when you cast it, unless otherwise noted.`
  ),
  SORCEROUS_RESTORATION: Feature(
    'Sorcerous Restoration',
    `At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.`
  ),

  /* WARLOCK */
  OTHERWORLDLY_PATRON: Feature(
    'Otherworldly Patron',
    `At 1st level, you have struck a bargain with an otherworldly being of your choice: the Fiend, which is detailed at the end of the class description, or one from another source.
    
    Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.`
  ),
  PACT_MAGIC: Feature(
    'Pact Magic',
    `Your arcane research and the magic bestowed on you by your patron have given you facility with spells.`
  ),
  ELDRITCH_INVOCATIONS: Feature(
    'Eldtritch Invocations',
    `In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability. A level prerequisite refers to your level in this class.

    At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.
    
    Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.
    
    If an eldritch invocation has prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its prerequisites. A level prerequisite refers to your level in this class.
    
    Agonizing Blast
    Prerequisite: eldritch blast cantrip
    
    When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit.
    
    Armor of Shadows
    You can cast mage armor on yourself at will, without expending a spell slot or material components.
    
    Ascendant Step
    Prerequisite: 9th level
    
    You can cast levitate on yourself at will, without expending a spell slot or material components.
    
    Beast Speech
    You can cast speak with animals at will, without expending a spell slot.
    
    Beguiling Influence
    You gain proficiency in the Deception and Persuasion skills.
    
    Bewitching Whispers
    Prerequisite: 7th level
    
    You can cast compulsion once using a warlock spell slot. You can’t do so again until you finish a long rest.
    
    Book of Ancient Secrets
    Prerequisite: Pact of the Tome feature
    
    You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class’s spell list (the two needn’t be from the same list). The spells appear in the book and don’t count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can’t cast the spells except as rituals, unless you’ve learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.
    
    On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell’s level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it.
    
    Chains of Carceri
    Prerequisite: 15th level, Pact of the Chain feature
    
    You can cast hold monster at will — targeting a celestial, fiend, or elemental — without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again.
    
    Devil’s Sight
    You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.
    
    Dreadful Word
    Prerequisite: 7th level
    
    You can cast confusion once using a warlock spell slot. You can’t do so again until you finish a long rest.
    
    Eldritch Sight
    You can cast detect magic at will, without expending a spell slot.
    
    Eldritch Spear
    Prerequisite: eldritch blast cantrip
    
    When you cast eldritch blast, its range is 300 feet.
    
    Eyes of the Rune Keeper
    You can read all writing.
    
    Fiendish Vigor
    You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components.
    
    Gaze of Two Minds
    You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature’s senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings.
    
    Lifedrinker
    Prerequisite: 12th level, Pact of the Blade feature
    
    When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1).
    
    Mask of Many Faces
    You can cast disguise self at will, without expending a spell slot.
    
    Master of Myriad Forms
    Prerequisite: 15th level
    
    You can cast alter self at will, without expending a spell slot.
    
    Minions of Chaos
    Prerequisite: 9th level
    
    You can cast conjure elemental once using a warlock spell slot. You can’t do so again until you finish a long rest.
    
    Mire the Mind
    Prerequisite: 5th level
    
    You can cast slow once using a warlock spell slot. You can’t do so again until you finish a long rest.
    
    Misty Visions
    You can cast silent image at will, without expending a spell slot or material components.
    
    One with Shadows
    Prerequisite: 5th level
    
    When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction.
    
    Otherworldly Leap
    Prerequisite: 9th level
    
    You can cast jump on yourself at will, without expending a spell slot or material components.
    
    Repelling Blast
    Prerequisite: eldritch blast cantrip
    
    When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line.
    
    Sculptor of Flesh
    Prerequisite: 7th level
    
    You can cast polymorph once using a warlock spell slot. You can’t do so again until you finish a long rest.
    
    Sign of Ill Omen
    Prerequisite: 5th level
    
    You can cast bestow curse once using a warlock spell slot. You can’t do so again until you finish a long rest.
    
    Thief of Five Fates
    You can cast bane once using a warlock spell slot. You can’t do so again until you finish a long rest.
    
    Thirsting Blade
    Prerequisite: 5th level, Pact of the Blade feature
    
    You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn.
    
    Visions of Distant Realms
    Prerequisite: 15th level
    
    You can cast arcane eye at will, without expending a spell slot.
    
    Voice of the Chain Master
    Prerequisite: Pact of the Chain feature
    
    You can communicate telepathically with your familiar and perceive through your familiar’s senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar’s senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech.
    
    Whispers of the Grave
    Prerequisite: 9th level
    
    You can cast speak with dead at will, without expending a spell slot.
    
    Witch Sight
    Prerequisite: 15th level
    
    You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight.`
  ),
  PACT_BOON: Feature(
    'Pact Boon',
    `At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.

    Pact of the Blade
    You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it (see the Weapons section for weapon options). You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.
    
    Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.
    
    You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can’t affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.
    
    Pact of the Chain
    You learn the find familiar spell and can cast it as a ritual. The spell doesn’t count against your number of spells known.
    
    When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.
    
    Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack with its reaction.
    
    Pact of the Tome
    Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class’s spell list (the three needn’t be from the same list). While the book is on your person, you can cast those cantrips at will. They don’t count against your number of cantrips known. If they don’t appear on the warlock spell list, they are nonetheless warlock spells for you.
    
    If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.`
  ),
  MYSTIC_ARCANUM_I: Feature(
    'Mystic Arcanum I',
    `At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.

    You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.
    
    At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.`
  ),
  MYSTIC_ARCANUM_II: Feature(
    'Mystic Arcanum II',
    `At 13th level, your patron bestows upon you a magical secret called an arcanum. Choose one 7th-level spell from the warlock spell list as this arcanum.

    You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.
    
    At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.`
  ),
  MYSTIC_ARCANUM_III: Feature(
    'Mystic Arcanum III',
    `At 15th level, your patron bestows upon you a magical secret called an arcanum. Choose one 8th-level spell from the warlock spell list as this arcanum.

    You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.
    
    At 17th level, you gain a 9th-level warlock spell of your choice that can be cast in this way. You regain all uses of your Mystic Arcanum when you finish a long rest.`
  ),
  MYSTIC_ARCANUM_IV: Feature(
    'Mystic Arcanum IV',
    `At 17th level, your patron bestows upon you a magical secret called an arcanum. Choose one 9th-level spell from the warlock spell list as this arcanum.

    You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.
    
    You regain all uses of your Mystic Arcanum when you finish a long rest.`
  ),
  ELDRITCH_MASTER: Feature(
    'Eldritch Master',
    `At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.`
  ),

  /* WIZARD */
  ARCANE_RECOVERY: Feature(
    'Arcane Recovery',
    ``
  )


});






//     },
//     ARCHETYPES: {
//       ANCESTRAL_GUARDIAN: {
//         title: 'Ancestral Guardian',
//         /*
//         Ancestral Protectors
// Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you’re raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage of the target’s attacks.

// Spirit Shield
// Beginning at 6th level, the guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and a creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6.

// When you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level.

// Consult the Spirits
// At 10th level, you gain the ability to consult with your ancestral spirits. When you do so, you cast the Augury or Clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of Clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells.

// After you cast either spell in this way, you can’t use this feature again until you finish a short or long rest.

// Vengeful Ancestors
// At 14th level, your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage that your Spirit Shield prevents.
//         */
//       },
//       BATTLERAGER: {
//         restrictions: [
//           Restriction(
//             'Dwarves Only',
//             'Only dwarves can follow the Path of the Battlerager. The battlerager fills a particular niche in dwarven society and culture.'
//             )
//           ]
//               /*
// Battlerager Armor
// When you choose this path at 3rd level, you gain the ability to use spiked armor as a weapon.

// While you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes against a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.

// Additionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds.

// Reckless Abandon
// Beginning at 6th level, when you use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish if any of them are left when your rage ends.

// Battlerager Charge
// Beginning at 10th level, you can take the Dash action as a bonus action while you are raging.

// Spiked Retribution
// Starting at 14th level, when a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't incapacitated, and are wearing spiked armor.
//       */
//       },
//       BERSERKER: {
//         /*
//         Frenzy
// Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.

// Mindless Rage
// Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.

// Intimidating Presence
// Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.

// If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.

// Retaliation
// Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature. */
//       }

//     }
//   }

// }
