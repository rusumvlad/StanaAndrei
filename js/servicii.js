/*Efect pentru aparitia cardurilor din sectiunea servicilor noastre */
var cardBody1 = document.getElementById("text1-apare");
var cardBody2 = document.getElementById("text2-apare");
var cardBody3 = document.getElementById("text3-apare");
var cardBody4 = document.getElementById("text4-apare");

cardBody1.style.opacity = "0";
cardBody2.style.opacity = "0";
cardBody3.style.opacity = "0";
cardBody4.style.opacity = "0";
function card1zoomEnter(){
    cardBody1.style.opacity = "1";
}
function card1zoomLeave(){
    cardBody1.style.opacity = "0";
}

function card2zoomEnter(){
    cardBody2.style.opacity = "1";
}
function card2zoomLeave(){
    cardBody2.style.opacity = "0";
}
function card3zoomEnter(){
    cardBody3.style.opacity = "1";
}
function card3zoomLeave(){
    cardBody3.style.opacity = "0";
}
function card4zoomEnter(){
    cardBody4.style.opacity = "1";
}
function card4zoomLeave(){
    cardBody4.style.opacity = "0";
}
