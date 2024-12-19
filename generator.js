/*
As part of the transition from one system of generation to another, there's
gonna be piles of refactoring. What should be done?

I like having the randomness functions in their own file. They are staying.
I think having the generator code in its own function would be a good idea, and
then we could have a function for page updates in another file.

Each part of speech would be its own class with percentages based on what comes
next in the names. They would have a function to get the next word in the name
based off of probabilities, just like a Markov chain.

What parts of speech would I need?

- Articles
  Usually "the". =)

- Subjects
  Come usually at the very beginning of a name. Can be a noun, a gerund, or a
  name.

- Objects
  More frequently appearing than subjects, often after a verb, article, or
  preposition, or at the end of the name. Can be a noun, a gerund, or a name.

- Transitive verbs
  Come after a subject. Generally followed by an object. Can be of any of the
  forms listed.

- Intransitive verbs
  Come after a subject. Not followed by an object. Can be any of the forms
  listed.

- Adjectives
  Modify a noun, whether subject or object. Can be an adjective or a participle.

- Conjunctions
  Usually "and", but can be other things. Can come after an object.

- Adverbs
  Modify a verb or an adjective. 

- Number
  Well, its a number. Used in the style of bands such as Crush 40, Matchbox 20,
  Blink-182 (?) and Haircut 100.
*/

class Article {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class Subject {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class Object {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class TraansitiveVerb {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class IntransitiveVerb {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class Adjective {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class Conjunction {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class Number {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class Adverb {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class FirstName {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class LastName {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class Place {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class Preposition {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}

class CollectiveNoun {
	constructor (word) {
		this.word = word;
	}

	getNext() {

	}
}


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
		const word = getNoun();
		return {
			wordType: "adjective",
			adjective: word.singular
		}
	} else {
		return randomFromArray(adjectives);
	}
};

/**
 * Gets a random first name from the list. This function has a 3% chance of
 * calling the `getNoun()` function instead. When it does, it takes either the
 * singular or plural form of the noun and adds that value to the `firstName`
 * field of the returned object.
 *
 * @returns A word object with its `wordType` field set to `"firstName"`.
 */
const getFirstName = () => {
	const probability = getWeightedRandomInt(0.03, 0.97);

	if (probability === 0) {
		const noun = getNoun();

		return {
			wordType: "firstName",
			firstName: getWeightedRandomInt(0.9, 0.1) === 1 ? noun.plural : noun.singular,
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
	const probability = getWeightedRandomInt(0.03, 0.97);

	if (probability === 0) {
		const noun = getNoun();

		return {
			wordType: "lastName",
			lastName: getWeightedRandomInt(0.9, 0.1) === 1 ? noun.plural : noun.singular,
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
		let probability = Math.random();

		if (probability < 0.1) {
			//The modification process has a 10% chance of not doing anything.
			break;
		} else if (probability < 0.6) {
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
