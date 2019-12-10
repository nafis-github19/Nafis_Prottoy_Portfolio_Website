// JavaScript Document

// var jsName = document.getElementById("name-input").value;

// console.log(jsName);

// document.getElementById("welcome-name").textContent = jsName;



// //document.getElementById("welcome-name").textContent = "Nafis Prottoy";


// // random color

// var myColor = ["#593f62", "#adf6b1", "#ffeaee", "#0075f2", "#bc8034", "#90323d", "adc698"];


// var random = Math.floor(Math.random() * myColor.length);




(function nameFunction(){
	var parameters = location.search.substring(1).split("&");

	var temp = parameters[0].split("=");

	var l = unescape(temp[1]);

	document.getElementById("welcome-name").innerHTML = "Hello " + l + " !"; 
})();