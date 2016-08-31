var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
console.log("Original planets array: ", planets);
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

function print(message){
  var el = document.getElementById('planets');
  el.innerHTML = message;
}

planets.forEach(print);
html = `<div>${planets.join(", ")}</div>`;
print(html);
console.log("Print to div array: ", html);

//A shorter way to do it:
// var el = document.getElementById("planets");

// planets.forEach(function(planet){
//   el.innerHTML += `<div>${planet}</div>`;
// });

// function something(planet) {

// }
// planets.forEach(something);

// Use the map method to create a new array where the first letter of each planet is capitalized
function cap(word){
	for (var i = 0; i < word.length; i++) {
		var firstLetter = word[0];
		var firstLetterUpper = firstLetter.toUpperCase();
		var minusFirst = word.slice(1, word.length);
		return firstLetterUpper + minusFirst;
	}
}
var titleCase = planets.map(cap);
console.log("Array in title case: ", titleCase);

//A shorter way to do it:
// var planetsCapitalized = planets.map(function(planets){
// 	return planets.charAt(0).toUpperCase() + planets.slice(1);
// });
// console.log(planetsCapitalized);

// Use the filter method to create a new array that contains planets with the letter 'e'

function filterIt(word){
	for (var i = 0; i < word.length; i++) {
		if(word[i] === 'e') {
			return word;
		}
	}	
}
var filtPlanets = planets.filter(filterIt);
console.log("filtered by 'e': ", filtPlanets);


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

function sentMaker(word){
	var newWords = words.join(" ");
	return newWords;
}

var sentence = words.reduce(sentMaker);
console.log("reduce to a sentence: ", sentence+".");