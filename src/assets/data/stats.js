const Stat = (text, abbr) => ({text, abbr})

export default Object.freeze({
  STR: Stat('Strength', 'STR'),
  DEX: Stat('Dexterity', 'DEX'),
  CON: Stat('Constitution', 'CON'),
  INT: Stat('Intelligence', 'INT'),
  WIS: Stat('Wisdom', 'WIS'),
  CHA: Stat('Charisma', 'CHA')
});