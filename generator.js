const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

Array.prototype.random = function() { return this[getRandomInt(0, this.length)] };

//A noun has a singular and plural form.
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
    }
];

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
]

const generateName = () => {
    let name = [];

    //Get a random noun
    name.push(nouns.random());

    //Modify it in random ways
    
    //Concatenate the elements in name
    return name.reduce((fullName, currentElement) => {
        return fullName = fullName.concat(currentElement.singular);
    }, "");
};

const update = () => {
    document.getElementById("name-display").innerText = generateName();
}
