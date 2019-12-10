


function tellFortune(){
  var jName = document.getElementById('name').value;
  var jAge = document.getElementById('age').value;
  var jJob = document.getElementById('job').value;
  var jYears = document.getElementById('years').value;
  var laterYears = jAge + jYears;  // doesnt add the jAge + jYears, instead shows the result as strings

  var status = ["married", "single" ];
  var statNumb = Math.floor(Math.random()*2);

  var futureJob = ["traveller", "programmer", "singer", "actor", "CEO of a company"];
  var futureJobNumb =Math.floor(Math.random()*5);


  var countries =["England", "Cancun", "Italy", "Spain"];
  var countriesNumb = Math.floor(Math.random()* 3);



  document.write("Hello " + jName + " !" + " In " + jYears + " years, you will be of age " + laterYears + ". You will be " + status[statNumb] + " and live in " + countries[countriesNumb] + " . Your future job will be: " + futureJob[futureJobNumb] + " .");
}
