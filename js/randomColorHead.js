//// JavaScript Document
function colorChange(){
var myColor = ["#e67e22","#9b59b6","#f39c12","#c0392b","#8e44ad"];

var randomColor = Math.floor(Math.random()* myColor.length);

var el_resume = document.getElementById("resume-head");
var el_portfolio = document.getElementById("portfolio-head");
var el_cert = document.getElementById("cert-head");
var el_contact = document.getElementById("contact");

el_resume.style.color = myColor[randomColor];
el_portfolio.style.color = myColor[randomColor];
el_cert.style.color = myColor[randomColor];
el_contact.style.color = myColor[randomColor];
}


setInterval(colorChange, 2000);

	
