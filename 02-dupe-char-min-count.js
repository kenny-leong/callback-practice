/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function characterCount(string) {
    let strList = string.split('');
    const freqCounter = strList.reduce(function(acc, value) {
        if (acc[value]) {
          acc[value]++;
        } else {
          acc[value] = 1;
        }
        return acc;
      }, {});
      return freqCounter;
}

function duplicateCharMinCount(string, minCount) {
	let obj = characterCount(string);
	let keys = [];

	for (let key in obj) {
		if (obj[key] >= minCount) {
			keys.push(key)
		}
	}
	return keys;
}



duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
