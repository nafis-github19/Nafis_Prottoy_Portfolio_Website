// JavaScript Document


	var quotesArray = [
		'“When you don\'t create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.” ― Why The Lucky Stiff',
		'“Programs must be written for people to read, and only incidentally for machines to execute.” ― Harold Abelson',
		'“Talk is cheap. Show me the code.” ― Linus Torvalds',
		'“I\'m not a great programmer, I\'m just a good programmer with great habits.”― Kent Beck',
		'“A language that doesn\'t affect the way you think about programming is not worth knowing.” ― Alan J. Perlis',
		'“You might not think that programmers are artists, but programming is an extremely creative profession. It\'s logic-based creativity.” ― John Romero',
		'“The most important property of a program is whether it accomplishes the intention of its user.” ― C.A.R. Hoare'
	];
	
//	document.getElementById('prog-quotes').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '” — ' + quotesArray[randomNumber].split(' — ')[1];


	
	//console.log( 	quotesArray[randomNumber].split(' — ')[0] );


function updateQuote(){
	
	var randomNumber = Math.floor(Math.random()*quotesArray.length);
	document.getElementById('prog-quotes').textContent = quotesArray[randomNumber];
	
}

updateQuote();
setInterval(updateQuote, 3000);