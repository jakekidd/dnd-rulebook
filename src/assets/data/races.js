const Language = (name, details) => ({name, details});
const LANGUAGES = {
  DRACONIC: Language('Draconic', 'Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.'),
  DWARVEN: Language('Dwarven', 'Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.'),
  COMMON: Language('Common', 'The common tongue of the land.'),
  ELVISH: Language('Elvish', ' Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.'),
  GNOMISH: Language('Gnomish', 'The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.'),
  HALFLING: Language('Halfling', 'The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.'),
  ORC: Language('Orc', ' Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.'),
  INFERNAL: Language('Infernal', 'A mysterious language spoken by fiends, devils, tieflings, and other underworldlings.'),
  AURAN: Language('Auran', 'Auran is a breathy, relaxed language that has been described as a slow exhaling of air'),
  GOBLIN: Language('Goblin', 'Goblins, bugbears, and hobgoblins share the same language. There are dialect differences, but they can be overcome by speaking very clearly. However, the races do not share a script. While hobgoblins use a complicated pictographic script, goblins use a simple phonetic script using heavily modified Dwarven characters.'),
  ABYSSAL: Language('Abyssal', '~̶̡̛̛̪̮̮̼̱̖̳̽͊̅̽̀̌̉̓͠-̴̣̗̘̖̰͙̺̹̲̔͗̂̈́̃͜`̸̨̧̩̺̫̤̙̲̲̺̼̘̮͕̝̣̲͂̀́́̉̒́̿͠_̸̡̛̞̙̥̰̪̮̭̣̲̳̻͉͎̜̻͚̆̔͌̿̌̂̊̎͆͝`̸̡̧̧̪͕̱̺̲̮͍̋̉̈́̃̒̌̉̊̽͊͗͒͝͠,̵̨̢̧͙̜̻̻͇͖̟̤͉͉̬̮̾̇̽̌͐̃-̷̨̢̹̖̘̱͔̮̒̋̔̈́̈́̾̒`̸̡̞̪̹̜͛͜,̶̧̤͉̭̤͍͖̪͚͖̥̱̠̼̺̳̤̐̿͌͆̈́̒̌̚͘ͅ-̸̣̱͕̻̈́͑̋̾͐̌̀͜͝.̶̫̣͈̥͚̿̈̆̉́̀̀̓̏́͌̚͠`̸̛̗̏̾̉̓̈́͋̀͑̀̈̒̓͐͝-̵͇̜͉̅̊́̽͒.̶̣̤̩̜͕͈̦̫̰̹͉̬̓̈́̑͝.̷̠͈̣̜͍̰͍̞̏̐̒,̴̛͈̟̤̖̾̃̓͂́̿̐͆̉̐͛͘͜͠͠`̵̡̢͈̻̼̝̗̭̣̪̖̼̤̬̓̽͊/̴̛̪̤̗̓̆̏̾̚̚͠͝`̷̡̢̺͎̖͈̮̰͔̗͕̟̥̩͒`̸̳͔͓̰̳͚̮͇͚̒͗͒͆̆̇̋̅͊͛́̚̕̚͜͝ͅ-̵̫͍̫̮̦̗̘̰̻̟̈́̍͐̑̌̀́͆͗̇̈́̕͜-̶̠̪̬͎̜͓͍̭̭̊̓̄̾̋̀͂͛̆̽̚͝͝_̵̡̡̢̞͓̫̥͉͂̅̍͆̔̀͊͒̎̈́͑̈́̍̄̋̈́͜͜͝͠_̷̧͓̤̖̰̝̞͚̩̮͔̣̠͓̪̎̄̈̆̀͒̄̓̓̿̍͘̚͜-̴̡͈͈̤̥̼̱̙̹̺͇̤͊`̷͈̯̯̥͉͆͊̊̄̈́̿̋̇̈́͆̌̈̃̎̅͠)̶̧̨̛̮͎͈̪̼̫͎̥̻͎̝̰̠͔̿̈́͗̀̀͛̾̆̎̕ͅ`̶̗͇͉͉͍͇͋̑̆̑͂̂̅̋̈̆͂͗̈́͋͝͝*̵̛̹̯̯͖͎̫͎̣̹͈̳͖̜̝͙͒͑̂̒͆͆̓̈́̄̓̚~̵̛̭̙́̌͂̎̈́̄́̓̍̊͋̍͘͜͝-̶͇͔̻̘̲̭͖͎͎̲̘̻̽͛̂̆͋͑̔̌̀̂̿̊̋̉̚͜͝`̵̡̘͗̍͗̿́̈́͒-̸̧̨̨̼̼̦̻̖̦͍̟͙̹̻̠̄̃̈́̈́̆́͑͆̎̾-̵̙̠̺̜̱̤̤͕̱́̈́̌̃͒̈̈̓̌̃̊̀͜͠`̴̛̹͍̒́̀͊̒~̵̱͙̰͖̖̗͊̄̐̔̋̍̽͆͗̍͛͊̏̌͘͠͝`̸̨̓͛͋̅͐̇̎͋̈́̓͆́͒̊͘͝ͅ,̵̧̨̘̮̓͌̀̊̂̏̐̂͒͂͜͝.̸̧̹̱̘̅̏`̵̢̨̢̛͉͎̮̠̻̬̖͎̞̥͕̯͊́͜͠͠͝͝/̷̡̦̪̯̪͚͚͖̬̻̊̌̑̄͂͠~̶̞̞̈́̉͑̒͂̒͐̿͌̒̔̚.̸̝̞̖͓͍̯̺̪̕͜`̷̨͔̖̺̫̜̎̾̌'),

  EXTRA: Language('one extra language of your choice.', 'This can be any language you like!'),
};

export default {
  HUMAN: {
    name: 'Human',
    image: 'human.png',
    colors: ['#56ab2f', '#a8e063'],
    route: 'human',
    isPlayable: true,
    details: [
      'In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.',
      'Humans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs in the many different lands where they have settled. When they settle, though, they stay: they build cities to last for the ages, and great kingdoms that can persist for long centuries. An individual human might have a relatively short life span, but a human nation or culture preserves traditions with origins far beyond the reach of any single human’s memory. They live fully in the present—making them well suited to the adventuring life—but also plan for the future, striving to leave a lasting legacy. Individually and as a group, humans are adaptable opportunists, and they stay alert to changing political and social dynamics.',
      'Humans who seek adventure are the most daring and ambitious members of a daring and ambitious race. They seek to earn glory in the eyes of their fellows by amassing power, wealth, and fame. More than other people, humans champion causes rather than territories or groups.'
    ],
    abilityScore: [1,1,1,1,1,1],
    age: 'Humans reach adulthood in their late teens and live less than a century.',
    alignment: 'Humans tend toward no particular alignment. The best and the worst are found among them.',
    size: 'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.EXTRA],
    features: [
      {
        title: 'Skills',
        text: 'You gain proficiency in one skill of your choice.'
      },
    ],
  },
  ELF: {
    name: 'Elf',
    image: 'elf.png',
    colors: ['#ffb347', '#ffcc33'],
    route: 'elf',
    isPlayable: true,
    details: [
      'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.',
      'Like the branches of a young tree, elves are flexible in the face of danger. They trust in diplomacy and compromise to resolve differences before they escalate to violence. They have been known to retreat from intrusions into their woodland homes, confident that they can simply wait the invaders out. But when the need arises, elves reveal a stern martial side, demonstrating skill with sword, bow, and strategy.',
      'Most elves dwell in small forest villages hidden among the trees. Elves hunt game, gather food, and grow vegetables, and their skill and magic allow them to support themselves without the need for clearing and plowing land. They are talented artisans, crafting finely worked clothes and art objects. Their contact with outsiders is usually limited, though a few elves make a good living by trading crafted items for metals (which they have no interest in mining).',
      'Elves take up adventuring out of wanderlust. Since they are so long-lived, they can enjoy centuries of exploration and discovery. They dislike the pace of human society, which is regimented from day to day but constantly changing over decades, so they find careers that let them travel freely and set their own pace. Elves also enjoy exercising their martial prowess or gaining greater magical power, and adventuring allows them to do so. Some might join with rebels fighting against oppression, and others might become champions of moral causes.'
    ],
    abilityScore: [0,2,0,0,0,0],
    age: 'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
    alignment: 'Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.',
    size: 'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.ELVISH],
    features: [
      {
        title: 'Darkvision',
        text: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
      },
      {
        title: 'Keen Senses',
        text: 'You have proficiency in the Perception skill.'
      },
      {
        title: 'Fey Ancestry',
        text: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.'
      },
      {
        title: 'Trance',
        text: 'Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.'
      },
    ],
    subraces: [
      {
        name: 'High Elf',
        details: ['As a high elf, you have a keen mind and a mastery of at least the basics of magic.'],
        abilityScore: [0,0,0,1,0,0],
        features: [
          {
            title: 'Elf Weapon Training',
            text: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.'
          },
          {
            title: 'Cantrip',
            text: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.'
          },
          {
            title: 'Extra Language',
            text: 'You can speak, read, and write one extra language of your choice.'
          }
        ]
      },
      {
        name: 'Wood Elf',
        details: ['As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests.'],
        abilityScore: [0,0,0,0,1,0],
        features: [
          {
            title: 'Elf Weapon Training',
            text: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.'
          },
          {
            title: 'Fleet of Foot',
            text: 'Your base walking speed increases to 35 feet.'
          },
          {
            title: 'Mask of the Wild',
            text: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.'
          },
        ]
      }
    ]
  },
  DWARF: {
    name: 'Dwarf',
    image: 'dwarf.png',
    colors: ['#D38312', '#A83279'],
    route: 'dwarf',
    isPlayable: true,
    details: [
      'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.',
      'Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change. They respect the traditions of their clans, tracing their ancestry back to the founding of their most ancient strongholds in the youth of the world, and don’t abandon those traditions lightly. Part of those traditions is devotion to the gods of the dwarves, who uphold the dwarven ideals of industrious labor, skill in battle, and devotion to the forge.',
      'Individual dwarves are determined and loyal, true to their word and decisive in action, sometimes to the point of stubbornness. Many dwarves have a strong sense of justice, and they are slow to forget wrongs they have suffered. A wrong done to one dwarf is a wrong done to the dwarf’s entire clan, so what begins as one dwarf’s hunt for vengeance can become a full-blown clan feud.',
      'Dwarves who take up the adventuring life might be motivated by a desire for treasure—for its own sake, for a specific purpose, or even out of an altruistic desire to help others. Other dwarves are driven by the command or inspiration of a deity, a direct calling or simply a desire to bring glory to one of the dwarf gods. Clan and ancestry are also important motivators. A dwarf might seek to restore a clan’s lost honor, avenge an ancient wrong the clan suffered, or earn a new place within the clan after having been exiled. Or a dwarf might search for the axe wielded by a mighty ancestor, lost on the field of battle centuries ago.'
    ],
    abilityScore: [0,0,2,0,0,0],
    age: 'Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.',
    alignment: 'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.',
    size: 'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.',
    speed: 'Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.',
    languages: [LANGUAGES.COMMON, LANGUAGES.DWARVEN],
    subraces: [
      {
        name: 'Hill Dwarf',
        details: ['As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.'],
        abilityScore: [0,0,0,0,1,0],
        features: [
          {
            title: 'Dwarven Toughness',
            text: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'
          }
        ]
      },
      {
        name: 'Mountain Dwarf',
        details: ['As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration.'],
        abilityScore: [2,0,0,0,0,0],
        features: [
          {
            title: 'Dwarven Armor Training',
            text: 'You have proficiency with light and medium armor.'
          }
        ]
      }
    ],
    features: [
      {
        title: 'Darkvision',
        text: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
      },
      {
        title: 'Dwarven Resilience',
        text: 'You have advantage on saving throws against poison, and you have resistance against poison damage (explained in the “Combat” section).'
      },
      {
        title: 'Dwarven Combat Training',
        text: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.'
      },
      {
        title: 'Tool Proficiency',
        text: 'You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.'
      },
      {
        title: 'Stonecunning',
        text: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.'
      }
    ],
  },
  HALF_ELF: {
    name: 'Half-Elf',
    image: 'halfelf.png',
    colors: ['#5d1674', '#2f0047'],
    route: 'halfelf',
    isPlayable: true,
    details: [
      'Half-elves have no lands of their own, though they are welcome in human cities and somewhat less welcome in elven forests. In large cities in regions where elves and humans interact often, half-elves are sometimes numerous enough to form small communities of their own. They enjoy the company of other half-elves, the only people who truly understand what it is to live between these two worlds.',
      'In most parts of the world, though, half-elves are uncommon enough that one might live for years without meeting another. Some half-elves prefer to avoid company altogether, wandering the wilds as trappers, foresters, hunters, or adventurers and visiting civilization only rarely. Like elves, they are driven by the wanderlust that comes of their longevity. Others, in contrast, throw themselves into the thick of society, putting their charisma and social skills to great use in diplomatic roles or as swindlers.'
    ],
    abilityScore: [0,0,0,0,0,2],
    age: 'Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.',
    alignment: 'Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others’ demands, and sometimes prove unreliable, or at least unpredictable.',
    size: 'Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.ELVEN, LANGUAGES.EXTRA],
    features: [
      {
        title: 'Darkvision',
        text: 'Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
      },
      {
        title: 'Fey Ancestry',
        text: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.'
      },
      {
        title: 'Skill Versatility',
        text: 'You gain proficiency in two skills of your choice.'
      },
    ],
    subraces: false
  },
  HALF_ORC: {
    name: 'Half-Orc',
    image: 'halforc4.png',
    colors: ['#ff0084', '#33001b'],
    route: 'halforc',
    details: [
      'Half-orcs feel emotion powerfully. Rage doesn’t just quicken their pulse, it makes their bodies burn. An insult stings like acid, and sadness saps their strength. But they laugh loudly and heartily, and simple bodily pleasures—feasting, drinking, wrestling, drumming, and wild dancing—fill their hearts with joy. They tend to be short-tempered and sometimes sullen, more inclined to action than contemplation and to fighting than arguing. The most accomplished half-orcs are those with enough self-control to get by in a civilized land.',
      'Orcs regard battle scars as tokens of pride and ornamental scars as things of beauty. Other scars, though, mark an orc or half-orc as a former slave or a disgraced exile. Any half-orc who has lived among or near orcs has scars, whether they are marks of humiliation or of pride, recounting their past exploits and injuries. Such a half-orc living among humans might display these scars proudly or hide them in shame.',
      'Half-orcs most often live among orcs. Of the other races, humans are most likely to accept half-orcs, and half-orcs almost always live in human lands when not living among orc tribes. Whether proving themselves among rough barbarian tribes or scrabbling to survive in the slums of larger cities, half-orcs get by on their physical might, their endurance, and the sheer determination they inherit from their human ancestry.'
    ],
    abilityScore: [2,0,1,0,0,0],
    age: 'Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.',
    alignment: 'Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.',
    size: 'Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.ORC],
    features: [
      {
        title: 'Darkvision',
        text: 'Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
      },
      {
        title: 'Menacing',
        text: 'You gain proficiency in the Intimidation skill.'
      },
      {
        title: 'Relentless Endurance',
        text: 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.'
      },
      {
        title: 'Savage Attacks',
        text: 'When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.'
      },
    ],
    subraces: false
  },
  DRAGONBORN: {
    name: 'Dragonborn',
    image: 'dragonborn.png',
    colors: ['#001510', '#00bf8f'],
    route: 'dragonborn',
    isPlayable: true,
    details: [
      'To any dragonborn, the clan is more important than life itself. Dragonborn owe their devotion and respect to their clan above all else, even the gods. Each dragonborn’s conduct reflects on the honor of his or her clan, and bringing dishonor to the clan can result in expulsion and exile. Each dragonborn knows his or her station and duties within the clan, and honor demands maintaining the bounds of that position.',
      'A continual drive for self-improvement reflects the self-sufficiency of the race as a whole. Dragonborn value skill and excellence in all endeavors. They hate to fail, and they push themselves to extreme efforts before they give up on something. A dragonborn holds mastery of a particular skill as a lifetime goal. Members of other races who share the same commitment find it easy to earn the respect of a dragonborn.',
      'Though all dragonborn strive to be self-sufficient,  they recognize that help is sometimes needed in difficult situations. But the best source for such help is the clan, and when a clan needs help, it turns to another dragonborn clan before seeking aid from other races—or even from the gods.'
    ],
    abilityScore: [2,0,0,0,0,1],
    age: 'Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.',
    alignment: 'Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil (represented by Bahamut and Tiamat, respectively). Most dragonborn are good, but those who side with Tiamat can be terrible villains.',
    size: 'Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.DRACONIC],
    features: [
      {
        title: 'Damage Resistance',
        text: 'You have resistance to the damage type associated with your draconic ancestry.'
      },
      {
        title: 'Draconic Ancestry',
        text: 'You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.'
      },
      {
        title: 'Draconic Ancestry',
        table: {
          '**Dragon**': [
            'Black',
            'Blue',
            'Brass',
            'Bronze',
            'Copper',
            'Gold',
            'Green',
            'Red',
            'Silver',
            'White'
          ],
          '**Damage Type**': [
            'Acid',
            'Lightning',
            'Fire',
            'Lightning',
            'Acid',
            'Fire',
            'Poison',
            'Fire',
            'Cold',
            'Cold'
          ],
          '**Breath Weapon**': [
            '5 by 30 ft. line (Dex. save)',
            '5 by 30 ft. line (Dex. save)',
            '5 by 30 ft. line (Dex. save)',
            '5 by 30 ft. line (Dex. save)',
            '5 by 30 ft. line (Dex. save)',
            '15 ft. cone (Dex. save)',
            '15 ft. cone (Con. save)',
            '15 ft. cone (Dex. save)',
            '15 ft. cone (Con. save)',
            '15 ft. cone (Con. save)'
          ]
        }
      }
    ],
  },
  GNOME: {
    name: 'Gnome',
    image: 'gnome5.png',
    colors: ['#267871', '#136a8a'],
    route: 'gnome',
    isPlayable: true,
    details: [
      'A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. As far as gnomes are concerned, being alive is a wonderful thing, and they squeeze every ounce of enjoyment out of their three to five centuries of life. Humans might wonder about getting bored over the course of such a long life, and elves take plenty of time to savor the beauties of the world in their long years, but gnomes seem to worry that even with all that time, they can’t get in enough of the things they want to do and see.',
      'Gnomes speak as if they can’t get the thoughts out of their heads fast enough. Even as they offer ideas and opinions on a range of subjects, they still manage to listen carefully to others, adding the appropriate exclamations of surprise and appreciation along the way.',
      'Though gnomes love jokes of all kinds, particularly puns and pranks, they’re just as dedicated to the more serious tasks they undertake. Many gnomes are skilled engineers, alchemists, tinkers, and inventors. They’re willing to make mistakes and laugh at themselves in the process of perfecting what they do, taking bold (sometimes foolhardy) risks and dreaming large.',
      'Gnomes make their homes in hilly, wooded lands. They live underground but get more fresh air than dwarves do, enjoying the natural, living world on the surface whenever they can. Their homes are well hidden by both clever construction and simple illusions. Welcome visitors are quickly ushered into the bright, warm burrows. Those who are not welcome are unlikely to find the burrows in the first place.'
    ],
    abilityScore: [0,0,0,2,0,0],
    age: 'Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.',
    alignment: 'Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.',
    size: 'Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.',
    speed: 'Your base walking speed is 25 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.GNOMISH],
    features: [
      {
        title: 'Darkvision',
        text: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
      },
      {
        title: 'Gnome Cunning',
        text: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.'
      },
    ],
    subraces: [
      {
        name: 'Deep Gnome',
        details: [
          'Forest gnomes and rock gnomes are the gnomes most commonly encountered in the lands of the surface world. There is another subrace of gnomes rarely seen by any surface-dweller: deep gnomes, also known as svirfneblin. Guarded, and suspicious of outsiders, svirfneblin are cunning and taciturn, but can be just as kind-hearted, loyal, and compassionate as their surface cousins.',
        ],
        abilityScore: [0,1,0,0,0,0],
        features: [
          {
            title: 'Altered Age',
            text: 'Deep gnomes are short-lived for gnomes. They mature at the same rate humans do and are considered full-grown adults by 25. They live 200 to 250 years, although hard toil and the dangers of the Underdark often claim them before their time.'
          },
          {
            title: 'Altered Alignment',
            text: 'Svirfneblin believe that survival depends on avoiding entanglements with other creatures and not making enemies, so they favor neutral alignments. They rarely wish others ill, and they are unlikely to take risks on behalf of others.'
          },
          {
            title: 'Undercommon Language',
            text: 'You can speak, read, and write Undercommon. The svirfneblin dialect is more guttural than surface Gnomish, and most svirfneblin know only a little bit of Common, but those who deal with outsiders (and that includes you as an adventurer) pick up enough Common to get by in other lands.'
          },
          {
            title: 'Superior Darkvision',
            text: 'Your darkvision has a radius of 120 feet.'
          },
          {
            title: 'Stone Camouflage',
            text: 'You have advantage on Dexterity (stealth) checks to hide in rocky terrain.'
          },
        ]
      },
      {
        name: 'Rock Gnome',
        details: [
          'As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. '
        ],
        abilityScore: [0,0,1,0,0,0],
        features: [
          {
            title: 'Artificer’s Lore',
            text: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.'
          },
          {
            title: 'Tinker',
            text: [
              'You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.',
              'When you create a device, choose one of the following options:',
              '*Clockwork Toy.* This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.',
              '*Fire Starter.* The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.',
              '*Music Box.* When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.'
            ]
          },
        ]
      },
      {
        name: 'Desert Gnome',
        details: [
          'As a desert gnome, you have a natural ability to survive in harsh terrain. In the worlds of D&D, desert gnomes tend to be isolated far from from civilizations in their own tribes, however this is not to say that deserts gnome are less educated than other gnomes. Desert gnomes are known for their vast catalogue of rare beasts found in climates much too unforgiving for other races, and they are experts at befriending them. Desert gnomes are known for their hospitality among travelers; stumbling among a desert gnome settlement while crossing a desert is a godsend.'
        ],
        abilityScore: [0,0,0,0,1,0],
        features: [
          {
            title: 'Desert Survivalist',
            text: 'You are proficient in the Survival skill, and only need to consume half as much food and drink as normal. You’re also naturally adapted to extreme heat, as described in chapter 5 of the Dungeon Master’s Guide.'
          },
          {
            title: 'Survivalist’s Training',
            text: 'You gain proficiency with the shortbow, scimitar, and leather armor.'
          },
          {
            title: 'Animal Lore',
            text: 'You are have advantage on Intelligence (Nature) checks to recalling information about beasts.'
          },
        ]
      }
    ],
  },
  HALFLING: {
    name: 'Halfling',
    image: 'halfling8.png',
    colors: ['#D1913C', '#FFD194'],
    route: 'halfling',
    isPlayable: true,
    details: [
      'Halflings are an affable and cheerful people. They cherish the bonds of family and friendship as well as the comforts of hearth and home, harboring few dreams of gold or glory. Even adventurers among them usually venture into the world for reasons of community, friendship, wanderlust, or curiosity. They love discovering new things, even simple things, such as an exotic food or an unfamiliar style of clothing.',
      'Halfling practicality extends beyond their clothing. They’re concerned with basic needs and simple pleasures and have little use for ostentation. Even the wealthiest of halflings keep their treasures locked in a cellar rather than on display for all to see. They have a knack for finding the most straightforward solution to a problem, and have little patience for dithering.',
      'Halflings are adept at fitting into a community of humans, dwarves, or elves, making themselves valuable and welcome. The combination of their inherent stealth and their unassuming nature helps halflings to avoid unwanted attention.',
      'Halflings work readily with others, and they are loyal to their friends, whether halfling or otherwise. They can display remarkable ferocity when their friends, families, or communities are threatened.',
      'Most halflings live in small, peaceful communities with large farms and well-kept groves. They rarely build kingdoms of their own or even hold much land beyond their quiet shires. They typically don’t recognize any sort of halfling nobility or royalty, instead looking to family elders to guide them. Families preserve their traditional ways despite the rise and fall of empires.'
    ],
    abilityScore: [0,2,0,0,0,0],
    age: 'A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.',
    alignment: 'Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.',
    size: 'Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.',
    speed: 'Your base walking speed is 25 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.HALFLING],
    features: [
      {
        title: 'Lucky',
        text: 'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.'
      },
      {
        title: 'Brave',
        text: 'You have advantage on saving throws against being frightened.'
      },
      {
        title: 'Halfling Nimbleness',
        text: 'You can move through the space of any creature that is of a size larger than yours.'
      },
    ],
    subraces: [
      {
        name: 'Lightfoot Halfling',
        details: [
          'As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety.',
          'Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halflings are called hairfeet or tallfellows.'
        ],
        abilityScore: [0,0,0,0,0,1],
        features: [
          {
            title: 'Naturally Stealthy',
            text: 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.'
          },
        ]
      },
      {
        name: 'Stout Halfling',
        details: [
          'As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.'
        ],
        abilityScore: [0,0,1,0,0,0],
        features: [
          {
            title: 'Stout Resilience',
            text: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
          },
        ]
      }
    ],
  },
  KOBOLD: {
    name: 'Kobold',
    image: 'kobold3.png',
    route: 'kobold',
    isPlayable: true,
    details: [
      'Kobolds thrive in cramped quarters far from the light of the sun. Most live in vast warrens deep beneath the earth, but a few instead prefer to make their homes beneath tangles of overgrown trees and brush. Saving their malice for other races, most kobolds get along well with their own kind. While squabbles and feuds do occur, the elders who rule kobold communities tend to settle such conflicts swiftly. Kobolds delight in taking slaves, relishing the chance to torment and humiliate them. They are also cowardly and practical, and often end up bowing to more powerful beings. If these creatures are of another humanoid race, kobolds often scheme to free themselves from subjugation as soon as possible. If the overlord is a powerful draconic or monstrous creature, however, kobolds see no shame in submission, and often shower adoration on their new leader. This is especially true if the kobolds serve a true dragon, who they tend to worship outright.',
      `Kobolds often seethe with hatred and jealousy, but their innate caution ensures that they only act on these impulses when they have the upper hand. If unable to safely indulge their urge to physically harm and degrade members of other races, they resort to careful insults and "practical jokes" instead. They consider both dwarves and elves to be deadly rivals. Kobolds fear the brute power of half-orcs and resent humans for the dominant status that race enjoys. They believe half-elves blend the best qualities of both parent races, which strikes kobolds as fundamentally unfair. Kobolds believe halflings, small in stature, make wonderful slaves and targets for kobold rage and practical jokes. When the gnomes first arrived in the mortal realm, kobolds saw them as perfect victims. This sparked waves of retaliation and reprisal that have echoed on down through the centuries and earned the kobolds' permanent enmity.`
    ],
    abilityScore: [-1,2,0,0,0,0],
    age: 'Once hatched, kobolds mature at a breakneck pace. By the time a kobold reaches 7 or 8 years old, on average, they are mentally and physically capable to assist the tribe in some capacity. Kobolds can live to be over 120 years old, but usually die to external causes well before then.',
    alignment: 'Kobolds are fiercely loyal to their tribe. Thus, they tend toward lawful alignments.',
    size: 'Kobolds are diminutive creatures, virtually never reaching over 3 feet tall. Your size is Small.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.DRACONIC],
    features: [
      {
        title: 'Sunlight Sensitivity',
        text: 'While in sunlight, the kobold has disadvantage on Attack rolls, as well as on Wisdom (Perception) checks that rely on sight.'
      },
      {
        title: 'Pack Tactics',
        text: `The kobold has advantage on an Attack roll against a creature if at least one of the kobold's allies is within 5 ft. of the creature and the ally isn't Incapacitated.`
      },
      {
        title: 'Darkvision',
        text: `You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`
      },
      {
        title: 'Slim Build',
        text: 'You count as one size smaller when determining your carrying capacity and the weight you can push, drag, or lift.'
      },
    ],
    subraces: [
      {
        name: 'Burrows Kobold',
        details: [
          'A clever variant of kobold that often live underground and hunt at night - often with the use of complex traps. Tinkerers at heart, Burrows Kobold that live among the common folk are often known for their diverse skills with tools.',
        ],
        abilityScore: [0,0,0,1,0,0],
        features: [
          {
            title: 'Ambusher',
            text: `When you roll damage for an attack with a melee weapon against a creature that is surprised, you may reroll the weapon's damage dice and use either total.`
          },
          {
            title: 'Bonus Proficiency',
            text: `You are proficient with thieves' tools.`
          },
        ]
      },
      {
        name: 'Loredrake Kobold',
        details: [
          'A less common variant of kobold that is born with sorcerous abilities.'
        ],
        abilityScore: [0,0,0,0,0,1],
        features: [
          {
            title: 'Sorcerous Initiate',
            text: `You know 2 cantrips of your choice from the sorcerer spell list. In addition, you know one 1st-level spell from the Sorcerer spell list. You can cast this spell once, regaining the ability to cast it when you complete a long rest. Charisma is your spellcasting ability for these spells.`
          },
        ]
      },
      {
        name: 'Winged Kobold (Urd)',
        details: [
          `A few kobolds are born with leathery wings and can fly. Known as urds, they like to lurk on high ledges and drop rocks on passersby. Although the urds' wings are seen as gifts from Tiamat, the Dragon Queen, wingless kobolds are envious of those gifts and don't get along with the urds.`
        ],
        abilityScore: [0,0,0,0,0,0],
        features: [
          {
            title: 'Flight',
            text: `You have a flying speed of 30 feet. To use this speed, you can't be wearing medium or heavy armor.`
          },
        ]
      }
    ],
  },
  GOBLIN: {
    name: 'Goblin',
    image: 'goblin.png',
    route: 'goblin',
    isPlayable: true,
    details: [
      'Goblin history is rich with folklore and tall tales, ranging from hobgoblin invasions of old to the story of a young goblin once rode a chicken into an orc camp. However, it is also riddled with tales of subjugation and powerlessness as, due to their small size, they are frequently bullied into the service of other malevolent creatures. This history of groveling makes goblins dream of gaining power and strength of their own, which sometimes draws them to adventure.',
      'Goblins live in loose clans ruled by a leader they refer to as a Mob Boss. Evil goblin societies frequently war against their neighbors, if not attempt to annoy them. More peaceable goblins, who are fewer and far between, prefer to play practical jokes on neighbors, which sometimes can be just as bad as if they had declared war.',
      'Some goblins believe in reincarnation, which makes them even more dangerous than normal Goblins, as, without the fear of death, they have no qualms dying or sacrificing other goblins for the greater (their own) good.',
      'In the cities where they are accepted, most of the time begrudgingly, goblins usually live in solitary or occasionally join gangs with other races.'
    ],
    abilityScore: [0,2,0,0,0,0],
    age: 'Goblins mature faster than other races considered fully grown at the age of 3. Unfortunately, goblins are also a very short-lived race not because of the shortness of their natural lifespan but because the majority of them live brutal and short lives or do brutal and stupid things. The oldest goblin to date was a bogart elder, who had survived to the ripe old age of 43 until he fell into a patch of bog and drowned.',
    alignment: 'Goblins alignment tends to differ by subrace, however, it is very unlikely a goblin, regardless of subrace, will ever be lawful.',
    size: 'Goblins are short, usually 3 to 4 feet and weigh about 50 pounds. Your size is Small.',
    speed: 'Goblins are naturally fast despite being small creatures. Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.GOBLIN],
    features: [
      {
        title: 'Darkvision',
        text: `You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`
      },
      {
        title: 'Nimble Escape',
        text: 'Goblins know when to run when things get heated. When you are the target of an opportunity attack, you may use your reaction to impose disadvantage on that attack.'
      },
    ],
    subraces: [
      {
        name: 'Greenskin',
        details: [
          'Greenskins are what people think about when they hear the word "goblin". Their skin are shades of green or yellow, and their faces are squat and flat. These goblins are the most numerous and savage of their kin and war against anything that’s not a goblinoid. Until anything conquers and enslaves them, that is.'
        ],
        abilityScore: [0,0,1,0,0,0],
        features: [
          {
            title: 'Mudslinger',
            text: 'Insults are your pastime. You gain the cantrip Vicious Mockery. Charisma is your spellcasting ability for this spell.'
          },
          {
            title: 'Worg Rider',
            text: 'Greenskins have an amicable relationship with worgs, whom they ride into battle. You have proficiency in the animal handling skill.'
          },
          {
            title: 'Run For It',
            text: `When the odds are against you, at least you can trust your legs. When using the disengage action, difficult terrain doesn't cost you extra movement on that turn.`
          },
        ]
      },
      {
        name: 'Boggart',
        details: [
          'Boggarts are goblins that live in the swamps and marshes of the world. While they are smaller in number than greenskins, they make up for it with strong communal relationships and fierce defense of their territory. Boggarts skin range from brown to black and have little hair on their heads, though they have been known to grow beards and whiskers. Unlike their more unruly kin, Boggarts very rarely interact with other races, preferring to keep to themselves. The only race they are openly hostile against are the Bullywugs, which they are at constant war with.'
        ],
        abilityScore: [0,0,0,0,1,0],
        features: [
          {
            title: 'Bog Swimmer',
            text: 'Boggart hit and run tactics usually include a good dose of swimming through less than cooperative waters. You have a swimming speed of 25 feet.'
          },
          {
            title: 'Boggart Weapon Proficiency',
            text: 'Your clan has trained you well. You have proficiency with the blowgun and net.'
          },
          {
            title: 'Swamp Life',
            text: `You didn't choose the swamp life, the swamp life chose you. You have advantage on saving throws against poison and diseases, and you have resistance against poison damage.`
          }
        ]
      },
      {
        name: 'Gremlin',
        details: [
          'A long time ago, a group of Rock Gnomes enslaved a clan of Goblins that had been marauding in their territory. The descendants of these Goblins are known today as Gremlins. Gremlins are unlike the rest of their race, they have long noses unlike the usual squat noses of goblinoids, skin that ranges from turquoise to red, and some hair on their body. They are incredibly intelligent for goblins and have a passion for creating that matches even the most dedicated of gnomes. Unfortunately, this passion is for creating things that destroy, which puts the goblins in a vicious cycle of rebuilding and destroying. They are the fewest among the goblins mostly because of their mad experiments. The main cause of death among gremlins is "immolation".'
        ],
        abilityScore: [0,0,0,1,0,0],
        features: [
          {
            title: 'Almost Fire Proof',
            text: `You have set yourself on fire so often you've gotten used to it. You are resistant to fire damage.`
          },
          {
            title: 'Tinkerer',
            text: `You count as a tinker gnome for all feats.`
          },
          {
            title: 'Dangerous Tinker',
            text: [
              'The gnomes like pretty things, but you like your creations to be a little more dynamic. You have proficiency with one artisan’s tool of your choice. Using those tools, you can spend 1 hour and 10gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp) that works for 24 hours, or when you use your action to dismantle it. You can have up to three such devices active at one time. You may reclaim the parts used to create the device once it stops functioning, only if it did not explode. When you create a device, choose one of the following options:',
              `*Arsonist's Friend*: A small brass rod with a slit at the top and a button on the side. When the button on the device is pushed roll 1d6. On a roll of 2-6, the device produces a miniature flame, which you can use to light a candle, torch, or campfire. On a roll of 1, the device explodes causing 1d4 fire damage to the user.`,
              `*Blast Orb*: The device is a small brass orb that makes a ticking sound once a small button on the top is pressed. One round after the button at the top is pressed the device explodes in a 5-foot radius dealing 1d8 fire damage to anything within it. If the device is destroyed, nothing happens.`,
              `*Bomb Boy*: A clockwork tiny construct that is in the form of a goblin. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in the direction it is facing making a loud wailing sound as it walks. When it is destroyed roll a d20. On a roll of 12 or higher, the object explodes in a sphere five feet in diameter dealing 1d4 piercing damage.`
            ]
          }
        ]
      },
    ],
  },
  TIEFLING: {
    name: 'Tiefling',
    image: 'tiefling.png',
    route: 'tiefling',
    isPlayable: true,
    details: [
      'Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings have large horns that take any of a variety of shapes: some have curling horns like a ram, others have straight and tall horns like a gazelle’s, and some spiral upward like an antelopes’ horns. They have thick tails, four to five feet long, which lash or coil around their legs when they get upset or nervous. Their canine teeth are sharply pointed, and their eyes are solid colors—black, red, white, silver, or gold—with no visible sclera or pupil. Their skin tones cover the full range of human coloration, but also include various shades of red. Their hair, cascading down from behind their horns, is usually dark, from black or brown to dark red, blue, or purple.',
      'Tieflings subsist in small minorities found mostly in human cities or towns, often in the roughest quarters of those places, where they grow up to be swindlers, thieves, or crime lords. Sometimes they live among other minority populations in enclaves where they are treated with more respect.',
      'Lacking a homeland, tieflings know that they have to make their own way in the world and that they have to be strong to survive. They are not quick to trust anyone who claims to be a friend, but when a tiefling’s companions demonstrate that they trust him or her, the tiefling learns to extend the same trust to them. And once a tiefling gives someone loyalty, the tiefling is a firm friend or ally for life.'
    ],
    abilityScore: [0,0,0,0,1,2],
    age: 'Tieflings mature at the same rate as humans but live a few years longer on average.',
    alignment: 'Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.',
    size: 'Tieflings are about the same size and build as humans. Your size is Medium.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.INFERNAL],
    features: [
      {
        title: 'Darkvision',
        text: 'Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
      },
      {
        title: 'Hellish Resistance',
        text: 'You have resistance to fire damage.'
      },
      {
        title: 'Infernal Legacy',
        text: 'You know the Thaumaturgy cantrip. When you reach 3rd level, you can cast the Hellish Rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
      }
    ],
    subraces: false
  },
  LIZARDFOLK: {
    name: 'Lizardfolk',
    image: 'lizardfolk.png',
    route: 'lizardfolk',
    isPlayable: true,
    details: [
      'Lizardfolk society is primarily patriarchal, with the strongest member normally in charge. Shamans are typically counselors, and normally do not lead tribes. Wherever they make their home, survival is the main priority for any lizardfolk. Lizardfolk mostly worship the deity Semuanya, whose main agenda is the reproduction and survival of the species.',
      'Lizardfolk are ferocious and tough, with an edge in moving silently and swiftly. They are normally found in temperate marshes and swamps. Lizardfolk are passable swimmers however, and may be found in underwater cave systems.'
    ],
    physical: [
      'Lizardfolk are primitive reptilian humanoids typically standing from six to seven feet tall. Their scales are normally dull, earthy colors such as green, brown, or gray. They have a tail for balance, which measures three to four feet long. Typical weight is between 200 and 300 pounds (90 and 136 kg). There are several species of lizardfolk however, and these can range from 3-foot-tall (0.91 m) pygmies to 9-foot-tall (2.7 m) giants.'
    ],
    abilityScore: [1,0,2,0,0,0],
    age: 'Lizardfolk reach adulthood around age 12 and can live to be about 60.',
    alignment: 'Most lizardfolk are neutral, operating on animal instinct and their fierce territorial nature more often than a distinct moral pattern.',
    size: 'Lizardfolk stand 6 to 7 feet tall and average about 230 pounds. Your size is Medium.',
    speed: 'Your base walking speed is 30 feet, and you have a swimming speed of 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.DRACONIC],
    features: [
      {
        title: 'Bite',
        text: 'Whenever you hit an enemy with a melee attack on your turn, as a bonus action you can make a melee attack against the same enemy. On a hit, the target takes 1d6 + your Strength modifier as piercing damage. You are always considered proficient with this bonus attack.'
      },
      {
        title: 'Hold Breath',
        text: 'You can hold your breath for 15 minutes.'
      },
      {
        title: 'Natural Armor',
        text: `You have tough scales that repel harm. When you aren't wearing armor, your Armor Class is 13 + your Dexterity modifier. You can use your natural armor to determine your Armor Class if the armor you wear would leave you with a lower Armor Class. A shield's benefits apply as normal while you use your natural armor.`
      },
      {
        title: 'Sneaky Survivalist',
        text: 'You are proficient in both the Stealth and Survival skill.'
      }
    ],
    subraces: false
  },
  KENKU: {
    name: 'Kenku',
    image: 'kenku3.png',
    route: 'kenku',
    isPlayable: false,
    details: [
      'A race of crow-like, wingless Avians that communicate through their ability to flawlessly imitate any sound they hear. These flightless people often form thieves guilds, referred to as "flocks" in major cities and quite often work as burglars, pickpockets, and assassins.',
      `Kenku were first driven to their current state of existence by greed and thievery, and such traits remain in their culture to this day. The Kenku are spread far and wide, operating in small flocks, each one independent from the rest, often acting as thieves, bandits, forgers and other such unlawful practitioners. Nevertheless, each flock has its own laws and codes of conduct. Betrayal of these laws often involve the bearing of large wooden wings, a symbol of shame of the Kenku's lost grace, and a crime so heinous that calls for execution will end with the offender tossed from a tall cliff.`,
      `Kenku are often quite dextrous. Their keen eyes are good at spotting potential victims for thievery, and their ability to bluff others with their mimicked voices is well-known.`
    ],
    physical: [
      `About 5'0 to 5'6, and about 90-110 pounds, these crow-like people have avian heads with a large beak and glossy black feathers, which cover the body except for their clawed hands and the skin starting about halfway up its legs. The skin on these areas can range from dark grey to bright yellow.`
    ],
    abilityScore: [0,2,0,0,1,0],
    age: 'Kenku have shorter lifespans than humans. They reach maturity at about 12 years old and can live to 60.',
    alignment: 'Largely concerned with their own survival and continuing to exist, many kenku are neutral. However, as a race largely consisting of criminals and thieves, many tend to a Chaotic alignment, regardless of individual methods.',
    size: 'Your size is Medium.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.AURAN],
    features: [
      {
        title: 'Ambusher',
        text: 'You have advantage on attack rolls against any creature you have surprised.'
      },
      {
        title: 'Mimicry',
        text: 'You can mimic any sounds you have heard, including voices. This talent extends to handwriting. A creature that hears your sounds can tell they are imitations with a successful Wisdom (Insight) check, and a creature that sees your forgery can tell it is a forgery with a successful Intelligence (Investigation) check. The DCs of these checks are each equal to 8 + your Charisma modifier + your proficiency bonus. This ability is the thing that enables you to speak in languages, as Kenku have no language of their own.'
      },
      {
        title: 'Voice of Deceit',
        text: 'You have proficiency in the Deception skill.'
      }
    ],
    subraces: false
  },
  TABAXI: {
    name: 'Tabaxi',
    image: 'tabaxi.png',
    route: 'tabaxi',
    isPlayable: false,
    details: [
      `Hailing from a strange and distant land, wandering tabaxi are catlike humanoids driven by curiosity to collect interesting artifacts, gather tales and stories, and lay eyes on all the world's wonders. Ultimate travelers, the inquisitive tabaxi rarely stay in one place for long. Their innate nature pushes them to leave no secrets uncovered, no treasures or legends lost.`,
    ],
    abilityScore: [0,2,0,0,0,1],
    age: 'Tabaxi have lifespans equivalent to humans.',
    alignment: `Tabaxi tend toward chaotic alignments, as they let impulse and fancy guide their decisions. They are rarely evil, with most of them driven by curiosity rather than greed or other dark impulses.`,
    size: 'Tabaxi are taller on average than humans and relatively slender. Your size is Medium.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.EXTRA],
    features: [
      {
        title: 'Darkvision',
        text: `You have a cat's keen senses, especially in the dark. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`
      },
      {
        title: 'Feline Agility',
        text: `Your reflexes and agility allow you to move with a burst of speed. When you move on your tum in combat, you can double your speed until the end of the tum. Once you use this trait, you can't use it again until you move O feet on one of your turns.`
      },
      {
        title: `Cat's Claws`,
        text: `Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.`
      },
      {
        title: `Cat's Talent`,
        text: `You have proficiency in the Perception and Stealth skills.`
      },
    ],
    subraces: false
  },
  HOBGOBLIN: {
    name: 'Hobgoblin',
    image: 'hobgoblin.png',
    route: 'hobgoblin',
    isPlayable: true,
    details: [
      'Fierce and militaristic, hobgoblins survive by conquest. The raw materials to fuel their war machines come from raids, their armaments and buildings from the toil of slaves worked to death. Naturally ambitious and envious, hobgoblins seek to better themselves at the expense of others of their kind, yet in battle they put aside petty differences and fight with discipline rivaling that of the finest soldiers. Hobgoblins have little love or trust for one another, and even less for outsiders. Life for these brutes consists of duty to those of higher station, domination of those below, and the rare opportunities to seize personal glory and elevate their status.',
      'A hobgoblin measures virtue by physical strength and martial prowess, caring about nothing except the opportunity to demonstrate skill and cunning in battle. Hobgoblins of high military rank attain their positions by force, then hold those positions by imposing authority through draconian measures. Hobgoblins train to fight with a variety of weapons, and have great skill at crafting arms, armor, siege engines, and other. military devices. Organized and disciplined, they take exceptional care of their weapons, armor, and personal possessions. They favor the bold colors associated with their tribes, and trim their often-elaborate uniforms with blood-red piping and leather dyed black.',
      `Hobgoblins organize themselves into tribal bands known as legions. In their martial society, every hobgoblin has a rank, from the powerful leaders and champions, to the rank-and-file foot soldiers, to the goblins that find themselves driven into the front lines at spear point. A legion is headed by a warlord with several captains serving under its command. A hobgoblin warlord is a ruthless tyrant more interested in strategy, victory, glory, reputation, and dominion than leading troops into battle. As loyal and disciplined as hobgoblins are in their own legion, rival legions compete constantly for reputation and status. Meetings between legions erupt in violence if troops aren't restrained, and only exceptionally powerful leaders can force legions to cooperate on the battlefield.`
    ],
    physical: [
      'Hobgoblins have dark orange or red-orange skin, and hair ranging from dark red-brown to dark gray. Yellow or dark brown eyes peer out beneath their beetling brows, and their wide mouths sport sharp and yellowed teeth. A male hobgoblin might have a large blue or red nose, which symbolizes virility and power among goblinkin. Hobgoblins can live as long as humans, though their love of warfare and battle means that few do.',
      'Hobgoblins belong to a family of creatures called goblinoids. They are often found lording over their cousins, the smaller goblins and the ferocious bugbears.'
    ],
    abilityScore: [1,0,1,1,0,0],
    age: 'Hobgoblins tend to reach adulthood in their early teens and have a lifespan similar to humans.',
    alignment: 'Hobgoblin society is very rigid and militaristic. As such they tend toward lawful alignments, usually evil.',
    size: 'Hobgoblins are similar in height to humans, and are slightly heavier. Your size is Medium.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.GOBLIN],
    features: [
      {
        title: 'Darkvision',
        text: `You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`
      },
      {
        title: 'Hobgoblin Martial Training',
        text: 'You have proficiency with light armor and two weapons of your choice.'
      },
      {
        title: 'Martial Adept',
        text: 'Because of your training, you can perform special combat maneuvers. You gain the benefits of the Martial Adept feat.'
      },
      {
        title: 'Military Genius',
        text: `Hobgoblins are master tacticians. If you miss an attack roll with a weapon, you can choose to draw upon your knowledge of warfare, gaining a bonus to your roll equal to your Intelligence modifier (minimum 1). Once you use this trait, you can't use it again until you complete a short or long rest.`
      }
    ],
    subraces: false
  },
  ORC: {
    name: 'Orc',
    image: 'orc.png',
    route: 'orc',
    isPlayable: false,
    details: [
      'Orcs are savage humanoids with stooped postures, piggish faces, and prominent teeth that resemble tusks. They gather in tribes that satisfy their bloodlust by slaying any humanoids that stand against them.',
      `Traditional common orc culture is extremely warlike and when not at war the race is usually planning for it. Most orcs approach life with the belief that to survive, one must subjugate potential enemies and control as many resources as possible, which puts them naturally at odds with other races as well as themselves. This belief is spurred in part by Uruk and his pantheon, which teaches that all races are inferior to the orcs. Eyes of Uruk are orcs especially tied to the one-eyed god and offer sacrifices, read omens, and advise tribes through Uruk's will. For millennia common orcs have plagued civilizations as raiders and pillaging hordes with orc tribes united under the banner of Uruk.`,
    ],
    abilityScore: [1,0,3,-2,0,0],
    age: 'Orcs are short-lived, reaching adulthood at around 12 and usually only living around 50 years.',
    alignment: 'Given their culture and religion, orcs tend towards chaotic evil.',
    size: 'Orcs are tall and burly, usually standing over 6 feet tall and weighing between 230 and 280 pounds. Your size is Medium.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.ORC],
    features: [
      {
        title: 'Aggressive',
        text: 'As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than you started.'
      },
      {
        title: 'Savage Demise',
        text: `When you are reduced to 0 hit points, before you fall unconscious, you can use your reaction to make one attack. Once you use this trait, you can't use it again until you finish a short or long rest.`
      },
      {
        title: 'Menacing',
        text: 'You have proficiency with the Intimidation skill.'
      }
    ],
    subraces: [
      {
        name: 'Orog',
        details: [
          'Orogs, also called elite orcs or greater orcs, are the much larger kin of normal orcs. They usually reach well over 6 feet tall but closely resemble normal orcs in all ways except build: orogs are much stronger and stockier. It is believed that orogs are the result of the union of a male orc and a female ogre. In contrast to lesser orcs, orogs are highly disciplined and straightforward. Orogs within an orc community quickly rise to leadership positions within their clan, although in orc armies the orogs will segregate themselves into all-orog military units. Orog military units are highly organized, tactically superior, and far more dangerous than those of normal orcs. Such orog units form the vanguard of the army to which they belong. Orogs do not separate themselves into their own clans, despite their tendency to self-segregate while in an orc army. It is due to their ogre ancestry Orogs can live up to 100 years.'
        ],
        abilityScore: [0,0,0,2,0,0],
        features: [
          {
            title: 'Martial Adept',
            text: 'Because of your training, you can perform special combat maneuvers. You gain the benefits of the Martial Adept feat.'
          },
          {
            title: 'Powerful Build',
            text: 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.'
          },
          {
            title: 'Tactical Genius',
            text: `Orog are master tacticians. If you miss an attack roll with a weapon, you can choose to draw upon your knowledge of warfare, gaining a bonus to your roll equal to your Intelligence modifier (minimum 1). Once you use this trait, you can't use it again until you complete a short or long rest.`
          }
        ]
      },
    ]
  },
  BUGBEAR: {
    name: 'Bugbear',
    image: 'bugbear.png',
    route: 'bugbear',
    isPlayable: false,
    details: [
      `Bugbears are brute force fighters with a knack for ambushing. Bugbears, like other goblinoids, had a reputation for being dim-witted and brutish. This claim was not unfounded and like their kin bugbears had easily provoked tempers and were prone to rages. Few bugbears overcame this flaw and their culture's brutal nature. Bugbear heroes, though rare, were heard of and could acquire significant renown if successful. Often the motivation for this change of heart came from the rewards earned from virtue, which in the long term were more pleasing than the short-lasting pleasures of evil.`,
      `Bugbears were often found in the company of other goblinoids, particularly goblins, since tribes made up mostly of hobgoblins and bugbears tended to be wiped out quickly by other races as a precaution.[12] Some bugbears also operated independently, though tribes ruled by hobgoblins were better organized and less savage. This was in part because bugbears had little patience for diplomacy or negotiation, preferring violent solutions to conflicts unless obviously overpowered.`,
      `In general, bugbears lived a life based around survival and became rogues, though many also made excellent barbarians.`
    ],
    abilityScore: [2,1,0,0,0,0],
    age: 'Bugbears reach adulthood around age 16 and can live to be about 75.',
    alignment: 'Most Bugbears are chaotic evil, but some tend to stray away from evil while almost always staying chaotic.',
    size: 'Bugbears stand 6 1/2 to 7 1/2 feet tall and average about 350 pounds. Your size is Medium.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.GOBLIN],
    features: [
      {
        title: 'Darkvision',
        text: `You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`
      },
      {
        title: 'Bugbear Armor Training',
        text: 'You are proficient with medium armor and shields.'
      },
      {
        title: 'Brute Force',
        text: `When you hit a hostile creature with an attack, you can roll one of the weapon’s damage dice one additional time and add it to the damage of your attack. Once you have used this ability, you must complete a short or long rest before you can use it again.`
      },
      {
        title: 'Ambusher',
        text: 'If you surprise a creature and hit it with an attack during the first round of combat, the target takes an extra 2d6 damage from the attack.'
      },
    ],
    subraces: [
      {
        name: '',
        details: [
          ''
        ],
        abilityScore: [0,0,0,0,0,0],
        features: [
          {
            title: '',
            text: ''
          },
        ]
      },
      {
        name: '',
        details: [
          ''
        ],
        abilityScore: [0,0,0,0,0,0],
        features: [
          {
            title: '',
            text: ''
          },
        ]
      }
    ],
  },
  TANARUKK: {
    name: 'Tanarukk',
    image: 'tanarukk.png',
    route: 'tanarukk',
    isPlayable: false,
    details: [
      'Tanarukks are derived from orcish bloodlines, and in the broadest possible sense, they still look orcish. However, their abyssal heritage has left a clear imprint on their appearance. Tanarukks have one or more sets of horns that take any of a variety of shapes: some have curling horns like a ram, others have wide and jagged horns like a bull or ox, and some spiral upward like an antelopes’ horns. They also often have bony protrusions or ridges on their knees, elbows, and shoulders which can make regular armor or clothing difficult to wear, requiring customization. Tanarukk walk on their toes in a manner similar to other digitigrades and their canine teeth are sharply pointed. Their eyes typically have black, brown or red sclera rather than white, and their pupil-less irises are solid black, white, red, orange, or yellow. Their unnaturally tough skin ranges in tone to include grey, red, brown, and mottled green. Albino (white) or melanistic (black) skin tones are also not unheard of. Their hair is short, bristly and usually dark, in shades of black, brown, grey, and dark red.',
      'The Tanarukks originated as orc-demon crossbreeds made from a deal with Baphomet. The Orcs that made the bargain with Baphomet may have a Tanarukk born into their next generation. These children are usually killed by the Chieftain because of their tendency to take over clans.',
      'Homeless, tribeless, and hunted; this is the lot of the tanarukk, especially among its orcish cousins. The orc deities consider the blessing of Baphomet to be a betrayal of their worship and a crime punishable by obliteration. Orcish zealots view tanarukks as horrid blasphemies that must be attacked on sight.'
    ],
    abilityScore: [2,0,1,0,0,0],
    age: 'Tanarukk mature slightly faster than humans, reaching adulthood around age 14.',
    alignment: 'Most tanarukk are chaotic evil. There are very few neutral or good, but some, either abandoned at birth or exiled because of their differing beliefs, have denied their natural instincts.',
    size: 'Most tanarukk are slightly larger than orcs and covered in muscle. They range from 6 to 7 feet tall, with some of the largest reaching nearly 8 feet. Your size is Medium.',
    speed: 'Your base walking speed is 30 feet.',
    languages: [LANGUAGES.COMMON, LANGUAGES.ABYSSAL, LANGUAGES.ORC],
    features: [
      {
        title: 'Darkvision',
        text: `You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`
      },
      {
        title: 'Demonic Blood',
        text: 'Your creature type is both fiend (demon) and humanoid (orc).'
      },
      {
        title: 'Fiendish Resistance',
        text: 'You have resistance to fire damage.'
      },
      {
        title: 'Menacing',
        text: 'You are proficient in the Intimidation skill.'
      },
      {
        title: 'Natural Armor',
        text: `When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.`
      },
      {
        title: 'Unbridled Frenzy',
        text: `In response to being hit by a melee attack, as a reaction you can make one melee weapon attack with advantage against the attacker. Once you use this trait you can't use it again until you finish a short or long rest.`
      },
    ],
    subraces: false
  }
}