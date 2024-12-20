/**
 * Takes a string and properly capitalizes the individual words in it. This
 * function treats each sequence of characters separated by a whitespace as a 
 * word. It also defines properly capitalized words as words where the first
 * letter is uppercase while all after it are lowercase. This method preserves
 * whitespace in its original order and quantity.
 *
 * Examples:
 * ```
 * capitalize("depeche mode") returns "Depeche Mode"
 * capitalize("THIS IS SPARTA") returns "This Is Sparta"
 * capitalize("   bAnAnA   pUdDiNg   ") returns "   Banana   Pudding   "
 * capitalize("γεια σου φιλε") returns "Γεια Σου Φιλε"
 * ```
 *
 * @param str The string to capitalize.
 * @return The string `str` with the first letter of each word uppercased.
 */
const capitalize = (str) => {
	const strings = str.split(/\s/);

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
 * A list of consonants beginning a word for the random word generator.
 */
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
	`gl`,
	`gr`,
	`h`,
	`j`,
	`k`,
	`l`,
	`m`,
	`n`,
	`p`,
	`pl`,
	`pr`,
	`qu`,
	`r`,
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
	`x`,
	`y`,
	`z`,
];

/**
 * A list of consonants ending a word for the random word generator.
 */
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
	`j`,
	`k`,
	`ck`,
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
	`z`,
];

/**
 * A list of vowels for the random word generator.
 */
const vowels = [
	`a`,
	`ae`,
	`ai`,
	`e`,
	`ea`,
	`ee`,
	`ei`,
	`i`,
	`ie`,
	`o`,
	`oa`,
	`oi`,
	`oo`,
	`ou`,
	`u`,
	`y`,
];

/**
 * Generates a random word. Fundamentally, the generator creates a syllable by
 * taking a random consonant or consonant blend from `startConsonants`, then a
 * random vowel or vowel blend from `vowels`, then a random consonant or blend
 * from `endConsonants`. The generator creates randomly many syllables, but
 * favors words between three and eight characters.
 * 
 * @returns A random nonsense word.
 */
const generateWord = () => {
	let syllableGenerationChance = 1;
	let toReturn = "";

	//Each time a syllable is generated, the chance of generating another lowers
	//by some percent (starting at 100%).
	while (Math.random() < syllableGenerationChance) {
		let consonantProbability;

		//If the word ends in a vowel, add a consonant 80% of the time;
		//otherwise, add a consonant 20% of the time.
		if (toReturn.search(/.*[aeiouy]$/) > -1 || toReturn.length === 0) {
			consonantProbability = 0.8;
		} else {
			consonantProbability = 0.2;
		}

		if (Math.random() <= consonantProbability) {
			toReturn += randomFromArray(startConsonants);
		}

		//Adds a vowel always.
		toReturn += randomFromArray(vowels);

		//Has a 66% chance of adding a consonant to the end of the syllable.
		if (Math.random() > 0.66) {
			toReturn += randomFromArray(endConsonants);
		}

		const minimumSafeLength = 3;
		const maximumSafeLength = 8;
		if (toReturn.length < minimumSafeLength) {
			syllableGenerationChance *= Math.random() * 1.3;
		} else if (toReturn > maximumSafeLength) {
			syllableGenerationChance *= Math.random() * 0.7;
		} else {
			syllableGenerationChance *= Math.random();
		}
	}

	return toReturn;
};

/**
 * Gets a random article. This function returns "the" 95% of the time, and "a"
 * or "an" the remaining 5%. The returned object is of the form:
 * ```
 * {
 *    wordType: "article",
 *    consonant: "spelling when followed by consonant",
 *    vowel: "spelling when followed by vowel"
 * }
 * ```
 * @returns an object with `wordType` as `"article"`
 */
const getArticle = () => {
	//95% chance of returning "the", 5% chance of returning "a"/"an"
	const whichArticle = getWeightedRandomInt(0.95, 0.05);

	if(whichArticle === 0) {
		return {
			wordType: "article",
			consonant: "the",
			vowel: "the"
		};
	} else {
		return {
			wordType: "article",
			consonant: "a",
			vowel: "an"
		};
	}
}

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
 * Gets a random noun from the list.
 * 
 * This function has a 3% chance of returning a random adjective instead. This
 * adjective has `adjective.adjective` as both singular and plural forms of the
 * noun. In this case, the returned object has in its `wordType` field `"noun"`.
 * In addition, this function has a 3% chance of returning a random generated
 * word. This word takes on the singular form, and it also has an `"s"` appended
 * to it to make the plural form. As above, the returned object's `wordType` is
 * `"noun"`.
 *
 * @returns A random word object with `wordType` as noun
 */
const getNoun = () => {
	const probability = getWeightedRandomInt(0.03, 0.03, 0.94);
	//3% chance of returning adjective, 3% chance of returning random word, 94%
	//chance of returning actual noun

	if (probability === 0) {
		const adjective = getAdjective();
		return {
			wordType: "noun",
			singular: adjective.adjective,
			plural: adjective.adjective,
		};
	} else if(probability === 1) {
		const word = generateWord();
		return {
			wordType: "noun",
			singular: word,
			plural: word + "s"
		}
	} else {
		return randomFromArray(nouns);
	}
};

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
 * Gets a random adjective from the list.
 * 
 * This function has a 3% chance of returning a generated word instead. This
 * word fills the `adjective` property, and the object's `wordType` is
 * `"adjective"`.
 *
 * @returns A random word object with its `wordType` property as `"adjective"`.
 */
const getAdjective = () => {
	const probability = getWeightedRandomInt(0.03, 0.97);

	if(probability === 0) {
		const word = generateWord();
		return {
			wordType: "adjective",
			adjective: word
		}
	} else {
		return randomFromArray(adjectives);
	}
};

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
 * Gets a random transitive verb from the list.
 *
 * @returns A random transitive verb from `transitiveVerbs`.
 */
const getTransitiveVerb = () => randomFromArray(transitiveVerbs);

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
		wordType: "intransitiveVerb",
		present: "screech",
		past: "screeched",
		verbal: "screeching",
		thirdPerson: "screeches",
	},
	{
		wordType: "intransitiveVerb",
		present: "wander",
		past: "wandered",
		verbal: "wandering",
		thirdPerson: "wanders",
	},
	{
		wordType: "intransitiveVerb",
		present: "ache",
		past: "ached",
		verbal: "aching",
		thirdPerson: "aches",
	},
	{
		wordType: "intransitiveVerb",
		present: "explode",
		past: "exploded",
		verbal: "exploding",
		thirdPerson: "explodes",
	},
	{
		wordType: "intransitiveVerb",
		present: "snore",
		past: "snored",
		verbal: "snoring",
		thirdPerson: "snores",
	},
];

/**
 * Gets a random intransitive verb from the list.
 *
 * @returns A random intransitive verb from `intransitiveVerbs`.
 */
const getIntransitiveVerb = () => randomFromArray(intransitiveVerbs);

/**
 * Gets a random conjunction, either "or" or "and", biased heavily towards "and".
 * The returned object is of the form:
 * ```
 * {
 *    wordType: "conjunction",
 *    conjunction: "the conjunction"
 * }
 * ```
 * @returns an object with `wordType` set to `"conjunction"`
 */
const getConjunction = () => {
	const probability = getWeightedRandomInt(0.9, 0.1);
	//90% chance of returning "and", 10% chance of returning "or"

	if(probability === 0) {
		return {
			wordType: "conjunction",
			conjunction: "and"
		};
	} else {
		return {
			wordType: "conjunction",
			conjunction: "or"
		};
	}
}

/**
 * A list of all adverbs to use in the band name generator. The adverbs are of
 * the form:
 * ```
 * {
 *    wordType: "adverb",
 *    adverb: "the adverb"
 * }
 * ```
 */
const adverbs = [
	{
		wordType: "adverb",
		adverb: "coolly",
	},
	{
		wordType: "adverb",
		adverb: "unfortunately",
	},
	{
		wordType: "adverb",
		adverb: "astonishingly",
	},
	{
		wordType: "adverb",
		adverb: "deliciously",
	},
	{
		wordType: "adverb",
		adverb: "not",
	}
];

const getAdverb = () => randomFromArray(adverbs);

/**
 * Gets an object representing a number in word form. The returned object is of
 * the form:
 * ```
 * {
 *    wordType: "number",
 *    number: "A number"
 * }
 * ```
 * @returns an object with `wordType` set to `"number"`.
 */
const getNumber = () => ({
	wordType: "number",
	number: getRandomInt(0, 100).toString()
});

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
 * Gets a random first name from the list. This function has a 3% chance of
 * calling the `getNoun()` function instead. When it does, it takes either the
 * singular or plural form of the noun and adds that value to the `firstName`
 * field of the returned object.
*
* @returns A word object with its `wordType` field set to `"firstName"`.
*/
const getFirstName = () => randomFromArray(firstNames);

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
 * Gets a random last name from the list. This function has a 3% chance of
 * calling the `getNoun()` function instead. When it does, it takes either the
 * singular or plural form of the noun and adds that value to the `lastName`
 * field of the returned object.
 *
 * @returns A word object with its `wordType` field set to `"lastName"`.
 */
const getLastName = () => randomFromArray(lastNames);

/**
 * A list of places for the random name generator. The objects are of the form:
 * ```
 * {
 *    wordType: "place",
 *    place: "The place"
 * }
 * ```
 */
const places = [
	{
		wordType: "place",
		place: "Berlin",
	},
	{
		wordType: "place",
		place: "Phillipines",
	},
	{
		wordType: "place",
		place: "Canada",
	},
	{
		wordType: "place",
		place: "Yellville",
	},
	{
		wordType: "place",
		place: "Whoville",
	},
];

/**
 * Returns a random place from the list.
 * 
 * @returns A random object with `wordType` of `"place"`.
 */
const getPlace = () => randomFromArray(places);

/**
 * A list of the prepositions for the random name generator. The prepositions
 * are of the form:
 * ```
 * {
 *    wordType: "preposition",
 *    preposition: "The preposition"
 * }
 * ```
 */
const prepositions = [
	{
		wordType: "preposition",
		preposition: "for"
	},
	{
		wordType: "preposition",
		preposition: "about"
	},
	{
		wordType: "preposition",
		preposition: "with"
	},
	{
		wordType: "preposition",
		preposition: "in"
	},
	{
		wordType: "preposition",
		preposition: "near"
	},
];

/**
 * Gets a random preposition from the list.
 * @returns a random object with its `wordType` set to `"preposition"`.
 */
const getPreposition = () => randomFromArray(prepositions);

/**
 * A list of collective nouns for the random name generator. These objects are
 * of the form:
 * ```
 * {
 *    wordType: "collectiveNoun",
 *    collectiveNoun: "The collective noun"
 * }
 * ```
 * Unlike normal nouns, these words do not have a singular/plural distinction.
 */
const collectiveNouns = [
	{
		wordType: "collectiveNoun",
		collectiveNoun: "band",
	},
	{
		wordType: "collectiveNoun",
		collectiveNoun: "club",
	},
	{
		wordType: "collectiveNoun",
		collectiveNoun: "crew",
	},
	{
		wordType: "collectiveNoun",
		collectiveNoun: "cult",
	},
	{
		wordType: "collectiveNoun",
		collectiveNoun: "story",
	},
	{
		wordType: "collectiveNoun",
		collectiveNoun: "association",
	},
];

/**
 * Gets a random collective noun from the list.
 * @returns a random object with a `wordType` of `"collectiveNoun"`.
 */
const getCollectiveNoun = () => randomFromArray(collectiveNouns);
