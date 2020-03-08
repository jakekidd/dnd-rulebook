import NAMES from './names';

/**
 * pick 1 or more unique values from an array, and return a new array of those picked values
 *
 * @param {any[]} array an array of values to pick from
 */
const pick = (array) => array[Math.floor(Math.random() * array.length)];

/**
 * parse our special template syntax
 *
 * handles multiple "kinds" of template syntax
 *
 * a string container '{alpha/beta}' will choose one at random
 *
 * a string starting with a $ symbol is a reference for any passed content
 *   so '{$colour}' becomes 'blue' if `content` was passed as { colour: 'blue' }
 *
 * a string container using the linked format (symbol, double colon) e.g {X::aplha/beta}
 *   will ensure that any other placeholder in the string that uses the same linked symbol
 *   returns the same index of random that the first placeholder with that symbol did
 *
 * @param {string} string
 */
const parseTemplate = (string, content, seed) => {
  if (content === void 0) { content = {}; }
  if (seed === void 0) { seed = null; }
  var regex = /{(.+?)}/gm;
  var matches = string.match(regex);
  var linkedPlaceholderIndexes = {};
  if (matches) {
      // is our match a placeholder setup
      matches.forEach(function (match) {
          var linkedPlaceholderMatches = /{(.+?)::(.+?)}/gm.exec(match);
          if (linkedPlaceholderMatches) {
              var rawLinkToken = linkedPlaceholderMatches[1];
              if (linkedPlaceholderIndexes[rawLinkToken] != null) {
                  // if we're already setup
                  var replacement = linkedPlaceholderMatches[2].split("/")[linkedPlaceholderIndexes[rawLinkToken]];
                  string = string.replace(match, replacement);
              }
              else {
                  // if not, we need to do the first one and add the index into the linkedPlaceholderIndexes
                  var allPlaceholderChunks = linkedPlaceholderMatches[2].split("/");
                  var newIndex = exports.rand(0, allPlaceholderChunks.length - 1);
                  var replacement = allPlaceholderChunks[newIndex];
                  linkedPlaceholderIndexes[rawLinkToken] = newIndex; // set it up for further matches
                  string = string.replace(match, replacement);
              }
          }
      });
      matches.forEach(function (match) {
          if (match.charAt(1) === "$") {
              var replacementVarName = match.substring(2, match.length - 1);
              string = string.replace(match, content[replacementVarName]);
          }
          else {
              var replacement = exports.pick(match
                  .substring(1)
                  .substring(0, match.length - 2)
                  .split("/"));
              string = string.replace(match, replacement);
          }
      });
  }
  return string;
};

/**
 * generate a name for a race and gender.
 *
 * @param {string} props.race generate with a specific race
 * @param {string} props.gender generate with a specific gender
 */
export default function generate(race=null, gender=null) {
  // Shameful binary, but we can always just abstain from using this feature.
  gender = gender ? gender : pick(['male', 'female'])
  const races = Object.keys(NAMES);
  if (race === null || !races.includes(race)) {
    race = pick(races);
  }
  var raceTemplates = NAMES[race].templates;
  if (!raceTemplates) {
    throw new Error("could not find race templates for " + race);
  }
  var template = pick(raceTemplates);
  switch (race) {
    case "dragonborn":
    case "dwarf":
    case "elf":
    case "gnome":
    case "halfling":
    case "human":
      return parseTemplate(template, {
          first: pick(NAMES[race][gender]),
          last: pick(NAMES[race].last)
      });
    case "halfOrc":
      return parseTemplate(template, {
          humanFirst: pick(NAMES.human[gender]),
          humanLast: pick(NAMES.human.last),
          orcFirst: pick(NAMES.halfOrc[gender])
        });
    case "halfElf":
      return parseTemplate(template, {
          humanFirst: pick(NAMES.human[gender]),
          humanLast: pick(NAMES.human.last),
          elfFirst: pick(NAMES.elf[gender]),
          elfLast: pick(NAMES.elf.last)
      });
    case "tiefling":
      return parseTemplate(template, {
          humanFirst: pick(NAMES.human[gender]),
          humanLast: pick(NAMES.human.last),
          tieflingFirst: pick(NAMES.tiefling[gender])
      });
  }
};

// exports.generate = function (props) {
//     if (props === void 0) { props = {}; }
//     var race = props.race, gender = props.gender, seed = props.seed;
//     // use the given seed, or one set by withSeed, or generate one
//     seed = seed || globalThis.FantasyContentGeneratorSeed || Utils.generateUUID(); //eslint-disable-line
//     // use withSeed to ensure seeded output for all `picks`
//     return Utils.withSeed(seed, function () {
//         race = race ? race : pick(Object.keys(names_json_1.default));
//         gender = gender ? gender : Utils.randomGender();
//         var name = generateName(race, gender);
//         var _a = name.split(" "), firstName = _a[0], lastName = _a[1];
//         return {
//             seed: seed,
//             name: name,
//             race: race,
//             gender: gender,
//             firstName: firstName,
//             lastName: lastName,
//             formattedNAMES: {
//                 name: name,
//                 race: Utils.formatRace(race),
//                 gender: Utils.titleCase(gender),
//                 firstName: firstName ? Utils.titleCase(firstName) : undefined,
//                 lastName: lastName ? Utils.titleCase(lastName) : undefined
//             }
//         };
//     });
// };
// var functions = {
//     generate: exports.generate
// };
// // setup a function for each race
// Object.keys(names_json_1.default).forEach(function (race) {
//     functions[race] = function (props) {
//         props.race = race;
//         return exports.generate(props);
//     };
// });
