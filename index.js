let currentWord = [];
let letterPosition = 0;
let currentLetter = [];
let possibleMistakes = 5;
let indexOfBodyPart = 0;
let wrongLetterArray = [];
let lettersFound = 0;

function addWord() {
	lettersFound = 0;
	let inputWord = document.getElementById("wordToBeGuessed").value;
	currentWord.push(inputWord);
	let currentWordString = currentWord.toString();
	currentWord = currentWordString.split("");
	document. getElementById("wordToBeGuessed").value = "";
	return false;
}

function addLines() {
	for (let i = 0; i < currentWord.length; ++i) {
		let wordLines = document.createElement("div");
	    wordLines.className = "col";
	    wordLines.textContent = "___";
	    wordLines.id = i;
	    document.getElementById("underline").appendChild(wordLines);
	}
	return false;
}

function findLetter() {
	currentLetter = document.getElementById("guessedLetter").value;
	let notFound = 0;
	for (let i = 0; i < currentWord.length; ++i) {
		if (currentWord[i] == currentLetter) {
			notFound = 1;
			letterPosition = i;
			++lettersFound;
			replaceLetterInWord(letterPosition, currentLetter);
		}
	}
	if (notFound == 0) {
		if (!wrongLetterArray.includes(currentLetter)) {
			wrongLetterArray.push(currentLetter);
			showMistake(currentLetter);
		}
	}
	document. getElementById("guessedLetter").value = "";
	return false;

}

function replaceLetterInWord(letterPosition, currentLetter) {
	document.getElementById(letterPosition).innerHTML = "";
	document.getElementById(letterPosition).append(currentLetter);
	if (lettersFound == currentWord.length) {
		document.getElementById("winnerPopup").style.display = 'block';
	}
	return false;
}

function showMistake(currentLetter) {
	let element = document.getElementsByClassName("bodyPart");
	if (indexOfBodyPart < possibleMistakes) {
		document.getElementById("wrongLetters").append(currentLetter + " ");
		element[indexOfBodyPart].style.display = 'block';
		++indexOfBodyPart;
	} else {
		element[indexOfBodyPart].style.display = 'block';
		document.getElementById("looserPopup").style.display = 'block';
	}
	return false;
}

function restartGame() {
	window.location.reload();
	return false;
}
