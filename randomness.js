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
	Math.floor(Math.random() * (max + 1 - min) + min);

/**
 * Gets a random integer according to predetermined weights. The range of
 * possible integers is the same as the number of parameters given; the
 * probability of each integer occurring is the same as the number at that
 * position in `probabilities`. For instance, `getWeightedRandomInt(0.3, 0.7)`
 * can return `0` or `1`; it will return `0` 30% of the time and `1` 70% of the
 * time.
 * 
 * The probabilities can be thought of as decimal representations of
 * percentages. If the probabilities do not add up to 1 (in a call such as
 * `getWeightedRandomInt(1, 2, 2)`), then the probabilities are mapped to the
 * range 0 - 1 and the function proceeds as normal. In such an instance, the
 * probabilities can be thought of as fractions, whereby the numerator is the
 * given probability and the denominator is the sum of all the probabilities.
 * 
 * Certain cases will return execution to the caller with a return value of
 * `-1`. This function cannot run if `probabilities.length == 0`, if any
 * parameter is not a number or less than 0, or if the sum of the parameters is
 * 0 or below.
 * 
 * @param  {...any} probabilities Any number of numbers that are the probability
 * of the integer at that index being returned
 * @returns A random integer chosen according to the weights passed to the
 * function.
 */
const getWeightedRandomInt = (...probabilities) => {
    //Check for errors.
    if(probabilities.length === 0) {
        console.error(`Error in getWeightedRandomInt: Probability list cannot be empty`);
        return -1;
    }

    for(let i = 0; i < probabilities.length; i ++) {
        if(typeof probabilities[i] != "number") {
            console.error(`Error in getWeightedRandomInt: Probability ${i} is not a number`);
            return -1;
        }

        if(probabilities[i] < 0) {
            console.error(`Error in getWeightedRandomInt: Probability ${i} cannot be ${probabilities[i]}`);
            return -1;
        }
    }

    let probabilitiesSum = probabilities.reduce((sum, cur) => sum += cur);
    if(probabilitiesSum <= 0) {
        console.error(`Error in getWeightedRandomInt: Sum of probabilities cannot be ${probabilitiesSum}`);
        return -1;
    }

    let mappedProbabilities = probabilities.map((cur) => cur / probabilitiesSum);
    const randomChoice = Math.random();
    let currentProbability = 0;

    for(let i = 0; i < mappedProbabilities.length; i ++) {
        currentProbability += mappedProbabilities[i];

        if(randomChoice <= currentProbability) {
            return i;
        }
    }

    //We should never get here.
    return -1;
}

const checkWeights = (...probabilities) => {
    let returnedWeights = [];

    for(let i = 0; i < 100000; i ++) {
        const currentPosition = getWeightedRandomInt(...probabilities);

        if(returnedWeights[currentPosition]) {
            returnedWeights[currentPosition] ++;
        } else {
            returnedWeights[currentPosition] = 1;
        }
    }

    return returnedWeights;
}

/**
 * Returns a random element from the array.
 *
 * @param arr  An array to take an element from.
 * @returns A random element from this array.
 */
const randomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
