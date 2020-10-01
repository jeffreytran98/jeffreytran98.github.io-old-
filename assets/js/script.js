//https://codepen.io/vdhug/pen/bGbXEKg
const words = ["Developer.", "Data Analyst.", "Musician.", "Gamer."];

let i = 0;
let timer;

//Welcome Message turns dark and explodes into white pieces become my "stars"

function typingEffect() {
    //split up the word to get each letter. word is a list of individual letters here
    let word = words[i].split("");
    // Setting a boolean (True) to a function?
	var loopTyping = function() {
		if (word.length > 0) {
            //Typing the letter
            document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		// How fast each individual letter gets typed (150 = .150 seconds per letter)
		timer = setTimeout(loopTyping, 150);
	};
	// When word is completely deleted, wait .6 seconds
	setTimeout(loopTyping, 600);
};

function deletingEffect() {
    //split up the word to get each letter. word is a list of individual letters here
    let word = words[i].split("");
    console.log(word)
    //while True
	var loopDeleting = function() {
		if (word.length > 0) {
            //delete a letter
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		// how fast each individual letter gets deleted (100 = .1 seconds per letter)
		timer = setTimeout(loopDeleting, 100);
	};
	// When finished typing, delay .75 seconds
	setTimeout(loopDeleting, 750);
};

//Delay the entire loop function call by 2000 seconds
setTimeout(typingEffect, 2000);