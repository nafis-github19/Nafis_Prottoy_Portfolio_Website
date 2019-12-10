

function calculateAge(){
  var jsBirthYear = document.getElementById('birthYear').value;
  var jsFutureYear = document.getElementById('futureYear').value;
  var jsAgeInFuture = jsFutureYear -  jsBirthYear;

  alert("In " + jsFutureYear + ", You will be " + jsAgeInFuture + " years old." );
}

// calculateAge();

function calculateLifetimeSupply(){
  var jsCurrentAge = document.getElementById("currentAge").value;
  var jsMaxAge = document.getElementById("maxAge").value;
  var jsEstimatedAmountPerDay = document.getElementById("snack_estimate").value;
  var jsPricePerSnack = document.getElementById("price").value;
  var jsSnackName = document.getElementById("name").value;

  var totalRestOfLife = (jsMaxAge - jsCurrentAge) * jsEstimatedAmountPerDay;
  var totalCost = totalRestOfLife * jsPricePerSnack;

  alert("At " + jsMaxAge + ", You will have consumed " + totalRestOfLife + " pieces of " + jsSnackName + " which will amount to the cost of $" + totalCost + ". " );
}

 // calculateLifetimeSupply();
