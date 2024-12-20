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

- All the ones I forgot
  Saw some prepositions and collective nouns, etc. Decided to make a class for
  those.

With the class and next-word system worked out, we now need to decide how we're
going to actually pass the words to those classes. I like the system I have now,
with a meaty bank of words and getter functions that randomly choose one or ano-
ther from those banks. Maybe, for ease of access, they should be moved to a sep-
arate file.

There are a few words that don't work quite as well with a getter function pull-
ing a random word from an entire bank. For instance, "the", "a", and "an" should
not appear with an equal frequency, and "an" should not appear before "boat".
More specialized functions are needed.

A similar question: What about words that could work well in multiple contexts?
For instance, how would we know whether to pluralize a noun or leave it
singular? Or which verb tense to use? I think the solution here is similar to
what I was already doing: to have each word be represented by an object
containing multiple possible tenses or word forms, and then determining which
one to use based off of the context.
*/

class NameStart {
	constructor() {
		this.word = "";
	}

	getNext() {
		const nextWord = getWeightedRandomInt(30, 1, 32, 33, 1, 1, 2, 1, 20, 6, 14, 2);

		switch(nextWord) {
			//30 times out of 143, the name start will lead to an article.
			case 0:
				return new Article("article");
			//1 time out of 143, the name start will lead to a subject.
			case 1:
				return new Subject("subject");
			//32 times out of 143, the name start will lead to an object.
			case 2:
				return new NameObject("object");
			//33 times out of 143, the name start will lead to an adjective.
			case 3:
				return new Adjective("adjective");
			//1 time out of 143, the name start will lead to a transitive verb.
			case 4:
				return new TransitiveVerb("transitiveverb");
			//1 time out of 143, the name start will lead to an intransitive verb.
			case 5:
				return new IntransitiveVerb("intransitiveverb");
			//2 times out of 143, the name start will lead to an adverb.
			case 6:
				return new Adverb("adverb");
			//1 time out of 143, the name start will lead to a number.
			case 7:
				return new NameNumber("number");
			//20 times out of 143, the name start will lead to a first name.
			case 8:
				return new FirstName("firstname");
			//6 times out of 143, the name start will lead to a last name.
			case 9:
				return new LastName("lastname");
			//14 times out of 143, the name start will lead to a place.
			case 10:
				return new Place("place");
			//2 times out of 143, the name start will lead to a preposition.
			case 11:
				return new Preposition("preposition");
		}
	}
}

class Article {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(1, 30, 6, 1, 2, 1, 1, 2);

		switch(nextWord) {
			//1 time out of 44, an article will lead to a subject.
			case 0:
				return new Subject("subject");
			//30 times out of 44, an article will lead to an object.
			case 1:
				return new NameObject("object");
			//6 times out of 44, an article will lead to an adjective.
			case 2:
				return new Adjective("adjective");
			//1 time out of 44, an article will lead to an adverb.
			case 3:
				return new Adverb("adverb");
			//2 times out of 44, an article will lead to a first name.
			case 4:
				return new FirstName("firstName");
			//1 time out of 44, an article will lead to a last name.
			case 5:
				return new LastName("lastName");
			//1 time out of 44, an article will lead to a place.
			case 6:
				return new Place("place");
			//2 times out of 44, an article will lead to a collective noun.
			case 7:
				return new CollectiveNoun("collectivenoun");
		}
	}
}

class Subject {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(2, 1);

		switch(nextWord) {
			//2 times out of 3, a subject will lead to a transitive verb.
			case 0:
				return new TransitiveVerb("transitiveverb");
			//1 time out of 3, a subject will lead to an intransitive verb.
			case 1:
				return new IntransitiveVerb("intransitiveverb");
		}
	}
}

class NameObject {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(6, 4, 3, 8, 5, 134);

		switch(nextWord) {
			//6 times out of 160, an object will lead to another object.
			case 0:
				return new NameObject("object");
			//4 times out of 160, an object will lead to a conjunction.
			case 1:
				return new Conjunction("conjunction");
			//3 times out of 160, an object will lead to a number.
			case 2:
				return new NameNumber("3.1416");
			//8 times out of 160, an object will lead to a preposition.
			case 3:
				return new Preposition("preposition");
			//5 times out of 160, an object will lead to a collective noun.
			case 4:
				return new CollectiveNoun("collectivenoun");
			//134 times out of 160, an object will lead to the end of the name.
			case 5:
				return new NameEnd();
		}
	}
}

class Adjective {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(35, 3, 1, 2, 6);

		switch(nextWord) {
			//35 times out of 47, an adjective will lead to an object.
			case 0:
				return new NameObject("object");
			//3 times out of 47, an adjective will lead to another adjective.
			case 1:
				return new Adjective("adjective");
			//1 time out of 47, an adjective will lead to a conjunction.
			case 2:
				return new Conjunction("conjunction");
			//2 times out of 47, an adjective will lead to a collective noun.
			case 3:
				return new CollectiveNoun("collectivenoun");
			//6 times out of 47, an adjective will lead to the end of the name.
			case 4:
				return new NameEnd();
		}
	}
}

class TransitiveVerb {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(1, 2);

		switch(nextWord) {
			//1 time out of 3, a transitive verb will lead to an article.
			case 0:
				return new Article("article");
			//2 times out of 3, a transitive verb will lead to an object.
			case 1:
				return new NameObject("object");
		}
	}
}

class IntransitiveVerb {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(1, 5, 1);

		switch(nextWord) {
			//1 time out of 7, an intransitive verb will lead to an adverb.
			case 0:
				return new Adverb("adverb");
			//5 times out of 7, an intransitive verb will lead to a preposition.
			case 1:
				return new Preposition("preposition");
			//1 time out of 7, an intransitive verb will lead to the end of the name.
			case 2:
				return new NameEnd();
		}
	}
}

class Conjunction {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(10, 3, 1, 1);

		switch(nextWord) {
			//10 times out of 15, a conjunction will lead to an article.
			case 0:
				return new Article("article");
			//3 times out of 15, a conjunction will lead to an object.
			case 1: 
				return new NameObject("object");
			//1 time out of 15, a conjunction will lead to an adjective.
			case 2:
				return new Adjective("adjective");
			//1 time out of 15, a conjunction will lead to a first name.
			case 3:
				return new FirstName("firstname");
		}
	}
}

class Adverb {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(2, 1);

		switch(nextWord) {
			//2 times out of 3, an adverb will lead to an adjective.
			case 0:
				return new Adjective("adjective");
			//1 time out of 3, an adverb will lead to a preposition.
			case 1:
				return new Preposition("preposition");
		}
	}
}

class NameNumber {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(1, 4);

		switch(nextWord) {
			//1 time out of 5, a number will lead to an object.
			case 0:
				return new NameObject("object");
			//4 times out of 5, a number will lead to the end of the name.
			case 1:
				return new NameEnd();
		}
	}
}

class FirstName {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(4, 1, 1, 1, 6, 9, 1, 4);

		switch(nextWord) {
			//4 times out of 27, a first name will lead to an object.
			case 0:
				return new NameObject("object");
			//1 time out of 27, a first name will lead to an adjective.
			case 1:
				return new Adjective("adjective");
			//1 time out of 27, a first name will lead to a transitive verb.
			case 2:
				return new TransitiveVerb("transitiveverb");
			//1 time out of 27, a first name will lead to an intransitive verb.
			case 3:
				return new IntransitiveVerb("intransitiveverb");
			//6 times out of 27, a first name will lead to a conjunction.
			case 4:
				return new Conjunction("conjunction");
			//9 times out of 27, a first name will lead to a last name.
			case 5:
				return new LastName("lastname");
			//1 time out of 27, a first name will lead to a collective noun.
			case 6:
				return new CollectiveNoun("collectivenoun");
			//4 times out of 27, a first name will lead to the end of the name.
			case 7:
				return new NameEnd();
		}
	}
}

class LastName {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(2, 5, 1, 2, 6);

		switch(nextWord) {
			//2 times out of 16, a last name will lead to an object.
			case 0:
				return new NameObject("object");
			//5 times out of 16, a last name will lead to a conjunction.
			case 1:
				return new Conjunction("conjunction");
			//1 time out of 16, a last name will lead to another last name.
			case 2:
				return new LastName("lastname");
			//2 times out of 16, a last name will lead to a collective noun.
			case 3:
				return new CollectiveNoun("collectivenoun");
			//6 times out of 16, a last name will lead to the end of the name.
			case 4:
				return new NameEnd();
		}
	}
}

class Place {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(8, 1, 1, 2, 22);

		switch(nextWord) {
			//8 times out of 34, a place will lead to an object.
			case 0:
				return new NameObject("object");
			//1 time out of 34, a place will lead to a transitive verb.
			case 1:
				return new TransitiveVerb("transitiveverb");
			//1 time out of 34, a place will lead to a number.
			case 2:
				return new NameNumber("3.1416");
			//2 times out of 34, a place will lead to a first name.
			case 3:
				return new FirstName("firstname");
			//22 times out of 34, a place will lead to the end of the name.
			case 4:
				return new NameEnd();
		}
	}
}

class Preposition {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(3, 10, 1);

		switch(nextWord) {
			//3 times out of 14, a preposition will lead to an article.
			case 0:
				return new Article("article");
			//10 times out of 14, a preposition will lead to an object.
			case 1:
				return new NameObject("object");
			//1 time out of 14, a preposition will lead to a place
			case 2:
				return new Place("place");
		}
	}
}

class CollectiveNoun {
	constructor (word) {
		this.word = word;
	}

	getNext() {
		const nextWord = getWeightedRandomInt(1, 1, 3, 27);

		switch(nextWord) {
			//1 time out of 32, a collective noun will be followed by a transitive verb.
			case 0:
				return new TransitiveVerb("transitiveverb");
			//1 time out of 32, a collective noun will be followed by an intransitive verb.
			case 1:
				return new IntransitiveVerb("intransitiveverb");
			//3 times out of 32, a collective noun will be followed by a preposition.
			case 2:
				return new Preposition("preposition");
			//27 times out of 32, a collective noun will be followed by the end of the name.
			case 3:
				return new NameEnd();
		}
	}
}

class NameEnd {
	constructor () {
		this.word = "";
	}

	getNext() {
		return new NameEnd();
	}
}

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
