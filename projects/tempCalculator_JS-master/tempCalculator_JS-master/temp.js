// JavaScript Document


function calculateTemp(){


	function calculateCtoF(){

		var jCtoF = document.getElementById("temp").value;

		var ctoF = (jCtoF * (9/5))+ 32;

		document.write(ctoF);

		return ctoF;
	}


	function calculateFtoC(){

		var jFtoC = document.getElementById("tempF").value;

		var ftoC = (jFtoC - 32) * (5/9);

		document.write(ftoC);

		return ftoC;
	}

}
