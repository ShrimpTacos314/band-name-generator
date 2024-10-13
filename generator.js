/**
 * Generates a random integer between `min` (inclusive) and `max` (exclusive).
 *
 * @param {*} min An integer representing the minimum value this function can
 * return, inclusive.
 * @param {*} max An integer representing the maximum value this function can
 * return, exclusive.
 * @returns An integer between `min` (inclusive) and `max` (exclusive).
 */
const getRandomInt = (min, max) =>
	Math.floor(Math.random() * (max - min) + min);

/**
 * Returns a random element from the array.
 *
 * @param arr  An array to take an element from.
 * @returns A random element from this array.
 */
const randomFromArray = (arr) => {
	return arr[getRandomInt(0, arr.length)];
};

/**
 * Takes a string and properly capitalizes the individual words in it. This
 * function treats each sequence of characters separated by a space (`\u0020`)
 * as a word. It also defines properly capitalized words as words where the
 * first letter is uppercase while all after it are lowercase. This method
 * preserves whitespace in its original order and quantity.
 *
 * Examples:
 * ```
 * capitalize("depeche mode") returns "Depeche Mode"
 * capitalize("THIS IS EXAMPLE") returns "This Is Example"
 * capitalize("   bAnAnA   pUdDiNg   ") returns "   Banana   Pudding   "
 * capitalize("γεια σου φιλε") returns "Γεια Σου Φιλε"
 * ```
 *
 * @param str The string to capitalize.
 * @return The string `str` with the first letter of each word uppercased.
 */
const capitalize = (str) => {
	const strings = str.split(" ");

	if (strings.length === 0) {
		return "";
	}

	let toReturn =
		strings[0].substring(0, 1).toUpperCase() +
		strings[0].substring(1).toLowerCase();

	for (let i = 1; i < strings.length; i++) {
		toReturn =
			toReturn +
			" " +
			strings[i].substring(0, 1).toUpperCase() +
			strings[i].substring(1).toLowerCase();
	}

	return toReturn;
};

/**
 * A list of all nouns to use in the band name generator. The nouns are objects
 * of the form:
 * ```
 * {
 *    wordType: "noun",
 *    singular: "Singular form of noun",
 *    plural: "Plural form of noun"
 * }
 * ```
 */
const nouns = [
	{
		wordType: "noun",
		singular: "goat",
		plural: "goats",
	},
	{
		wordType: "noun",
		singular: "foot",
		plural: "feet",
	},
	{
		wordType: "noun",
		singular: "music",
		plural: "music",
	},
	{
		wordType: "noun",
		singular: "clam",
		plural: "clams",
	},
	{
		wordType: "noun",
		singular: "schizophrenic",
		plural: "schizophrenics",
	},
	{
		wordType: "noun",
		singular: "jam jar",
		plural: "jam jars",
	},
];

/**
 * A list of all adjectives to use in the band name generator. The adjectives
 * are objects of the form:
 * ```
 * {
 *    wordType: "adjective",
 *    adjective: "The adjective"
 * }
 * ```
 */
const adjectives = [
	{
		wordType: "adjective",
		adjective: "sleazy",
	},
	{
		wordType: "adjective",
		adjective: "apathetic",
	},
	{
		wordType: "adjective",
		adjective: "emo",
	},
	{
		wordType: "adjective",
		adjective: "paper",
	},
	{
		wordType: "adjective",
		adjective: "orange",
	},
];

/**
 * A list of all first names to use in the band name generator. The first names
 * are objects of the form:
 * ```
 * {
 *    wordType: "firstName",
 *    firstName: "The first name"
 * }
 * ```
 */
const firstNames = [
	{
		wordType: "firstName",
		firstName: "James",
	},
	{
		wordType: "firstName",
		firstName: "Gareth",
	},
	{
		wordType: "firstName",
		firstName: "Willa",
	},
	{
		wordType: "firstName",
		firstName: "Clark",
	},
	{
		wordType: "firstName",
		firstName: "Kalmar",
	},
];

/**
 * A list of all last names to use in the band name generator. The last names
 * are objects of the form:
 * ```
 * {
 *    wordType: "lastName",
 *    lastName: "The last name"
 * }
 * ```
 */
const lastNames = [
	{
		wordType: "lastName",
		lastName: "Smith",
	},
	{
		wordType: "lastName",
		lastName: "Garcia",
	},
	{
		wordType: "lastName",
		lastName: "Butler",
	},
	{
		wordType: "lastName",
		lastName: "Wilde",
	},
	{
		wordType: "lastName",
		lastName: "Wingfeather",
	},
];

/**
 * A list of all transitive verbs to use in the band name generator. The
 * transitive verbs are objects of the form:
 * ```
 * {
 *    wordType: "transitiveVerb",
 *    present: "The present tense form of the verb",
 *    past: "The past tense form of the verb",
 *    verbal: "The participle or gerund form of the verb",
 *    thirdPerson: "The third-person form of the verb"
 * }
 * ```
 */
const transitiveVerbs = [
	{
		wordType: "transitiveVerb",
		present: "buy",
		past: "bought",
		verbal: "buying",
		thirdPerson: "buys",
	},
	{
		wordType: "transitiveVerb",
		present: "tickle",
		past: "tickled",
		verbal: "tickling",
		thirdPerson: "tickles",
	},
	{
		wordType: "transitiveVerb",
		present: "microwave",
		past: "microwaved",
		verbal: "microwaving",
		thirdPerson: "microwaves",
	},
	{
		wordType: "transitiveVerb",
		present: "eat",
		past: "ate",
		verbal: "eating",
		thirdPerson: "eats",
	},
];

/**
 * A list of all intransitive verbs to use in the band name generator. The
 * intransitive verbs are objects of the form:
 * ```
 * {
 *    wordType: "intransitiveVerb",
 *    present: "The present tense form of the verb",
 *    past: "The past tense form of the verb",
 *    verbal: "The participle or gerund form of the verb",
 *    thirdPerson: "The third-person form of the verb"
 * }
 * ```
 */
const intransitiveVerbs = [
	{
		wordType: "transitiveVerb",
		present: "screech",
		past: "screeched",
		verbal: "screeching",
		thirdPerson: "screeches",
	},
	{
		wordType: "transitiveVerb",
		present: "wander",
		past: "wandered",
		verbal: "wandering",
		thirdPerson: "wanders",
	},
	{
		wordType: "transitiveVerb",
		present: "ache",
		past: "ached",
		verbal: "aching",
		thirdPerson: "aches",
	},
	{
		wordType: "transitiveVerb",
		present: "explode",
		past: "exploded",
		verbal: "exploding",
		thirdPerson: "explodes",
	},
	{
		wordType: "transitiveVerb",
		present: "snore",
		past: "snored",
		verbal: "snoring",
		thirdPerson: "snores",
	},
];

/**
 * Gets a random noun from the list. This function has a 3% chance of returning
 * a random adjective instead. This adjective has `adjective.adjective` as both
 * singular and plural forms of the noun. In this case, the returned object has
 * in its `wordType` field `"noun"`.
 *
 * @returns A random word object with `wordType` as noun
 */
const getNoun = () => {
	const probability = getRandomInt(0, 100);

	//getNoun has a 3% chance of returning a random adjective.
	if (probability < 3) {
		const adjective = getAdjective();
		return {
			wordType: "noun",
			singular: adjective.adjective,
			plural: adjective.adjective,
		};
	} else {
		return randomFromArray(nouns);
	}
};

/**
 * Gets a random adjective from the list.
 *
 * @returns A random adjective object.
 */
const getAdjective = () => randomFromArray(adjectives);

/**
 * Gets a random first name from the list. This function has a 3% chance of
 * calling the `getNoun()` function instead. When it does, it takes either the
 * singular or plural form of the noun and adds that value to the `firstName`
 * field of the returned object.
 *
 * @returns A word object with its `wordType` field set to `"firstName"`.
 */
const getFirstName = () => {
	const probability = getRandomInt(0, 100);

	if (probability < 3) {
		const noun = getNoun();

		return {
			wordType: "firstName",
			firstName: probability > 90 ? noun.plural : noun.singular,
		};
	} else {
		return randomFromArray(firstNames);
	}
};

/**
 * Gets a random last name from the list. This function has a 3% chance of
 * calling the `getNoun()` function instead. When it does, it takes either the
 * singular or plural form of the noun and adds that value to the `lastName`
 * field of the returned object.
 *
 * @returns A word object with its `wordType` field set to `"lastName"`.
 */
const getLastName = () => {
	const probability = getRandomInt(0, 100);

	if (probability < 3) {
		const noun = getNoun();

		return {
			wordType: "lastName",
			lastName: probability > 90 ? noun.plural : noun.singular,
		};
	} else {
		return randomFromArray(lastNames);
	}
};

/**
 * Gets a random transitive verb from the list.
 *
 * @returns A random transitive verb from `transitiveVerbs`.
 */
const getTransitiveVerb = () => randomFromArray(transitiveVerbs);

/**
 * Gets a random intransitive verb from the list.
 *
 * @returns A random intransitive verb from `intransitiveVerbs`.
 */
const getIntransitiveVerb = () => randomFromArray(intransitiveVerbs);

/**
 * A list of consonants for the random word generator.
 */
const consonants = [
	`b`,
	`c`,
	`d`,
	`f`,
	`g`,
	`h`,
	`j`,
	`k`,
	`l`,
	`m`,
	`n`,
	`p`,
	`qu`,
	`r`,
	`s`,
	`t`,
	`v`,
	`w`,
	`x`,
	`y`,
	`z`,
];

const startConsonants = [
	`b`,
	`bl`,
	`br`,
	`c`,
	`ch`,
	`cl`,
	`cr`,
	`d`,
	`dr`,
	`f`,
	`fl`,
	`fr`,
	`g`,
	`gh`,
	`gl`,
	`gr`,
	`h`,
	`j`,
	`k`,
	`kh`,
	`kr`,
	`l`,
	`ll`,
	`m`,
	`mn`,
	`n`,
	`p`,
	`pl`,
	`pn`,
	`pr`,
	`ps`,
	`qu`,
	`r`,
	`rh`,
	`s`,
	`sc`,
	`sh`,
	`sk`,
	`sl`,
	`sm`,
	`sn`,
	`sp`,
	`squ`,
	`st`,
	`sw`,
	`t`,
	`th`,
	`tw`,
	`v`,
	`w`,
	`wh`,
	`wr`,
	`x`,
	`y`,
	`z`,
];

const endConsonants = [
	`b`,
	`bb`,
	`ble`,
	`bre`,
	`c`,
	`ch`,
	`ct`,
	`d`,
	`dd`,
	`dge`,
	`f`,
	`ff`,
	`g`,
	`gg`,
	`h`,
	`hm`,
	`j`,
	`k`,
	`ck`,
	`kh`,
	`l`,
	`ll`,
	`m`,
	`mm`,
	`n`,
	`nn`,
	`p`,
	`ph`,
	`r`,
	`rr`,
	`s`,
	`sh`,
	`sm`,
	`sp`,
	`ss`,
	`st`,
	`t`,
	`th`,
	`tt`,
	`v`,
	`w`,
	`x`,
	`y`,
	`z`
];

/**
 * A list of vowels for the random word generator.
 */
const vowels = [
	`a`,
	`ae`,
	`ai`,
	`au`,
	`e`,
	`ea`,
	`ee`,
	`ei`,
	`eu`,
	`i`,
	`ie`,
	`o`,
	`oa`,
	`oe`,
	`oi`,
	`oo`,
	`ou`,
	`u`,
	`ue`,
	`y`,
];

const generateWord = () => {
	let syllableGenerationChance = 100;
	let toReturn = "";

	//Each time a syllable is generated, the chance of generating another lowers
	//by some percent (starting at 100%).
	while(getRandomInt(0, 100) < syllableGenerationChance) {
		//Has a 66% chance of adding a consonant to the beginning of the
		//syllable.
		if(getRandomInt(0, 4) > 1) {
			toReturn += randomFromArray(startConsonants);
		}

		//Adds a vowel always.
		toReturn += randomFromArray(vowels);

		//Has a 66% chance of adding a consonant to the end of the syllable.
		if(getRandomInt(0, 4) > 1) {
			toReturn += randomFromArray(endConsonants);
		}

		syllableGenerationChance *= Math.random();
	}

	return toReturn;
};

/**
 * Generates a random band name.
 *
 * The generator operates by taking a random noun and building off of it.
 *
 * @returns A randomly generated band name.
 */
const generateName = () => {
	let name = [];

	//Get a random noun
	name.push(getNoun());

	//Modify it in random ways
	while (true) {
		let probability = getRandomInt(0, 100);

		if (probability < 10) {
			//The modification process has a 10% chance of not doing anything.
			break;
		} else if (probability < 60) {
			//The modification process has a 50% chance of adding an adjective.
			//If it does, it repeats this loop.
			name.unshift(getAdjective());
			console.log(name);
		} else {
			//The modification process has a 40% chance of adding "the" and
			//breaking.
			name.unshift("The");

			let lastNoun = name.findLastIndex(
				(element) => element.wordType === "noun"
			);
			name[lastNoun] = name[lastNoun].plural;

			console.log(name);

			break;
		}
	}

	//Concatenate the elements in name
	return name.reduce((fullName, currentElement) => {
		if (typeof currentElement === "string") {
			return fullName + capitalize(currentElement) + " ";
		} else if (currentElement.wordType === "noun") {
			return fullName + capitalize(currentElement.singular) + " ";
		} else {
			return (
				fullName +
				capitalize(currentElement[currentElement.wordType]) +
				" "
			);
		}
	}, "");
};

const update = () => {
	document.getElementById("name-display").innerText = generateName();
};
