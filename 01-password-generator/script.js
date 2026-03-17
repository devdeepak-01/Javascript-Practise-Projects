const inputSlider = document.querySelector("#slider");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMessage = document.querySelector("[data-copyMessage]");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const indicator = document.querySelector("[dataIndicator]");
const generateBtn = document.querySelector(".generateBtn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

let password = "";
let passwordLength =10;
let checkCount = 1;

handleSlider();

function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
} 

//Strength Indicator
function setIndicator(){
    indicator.style.backgroundColor=color;
}

function getRandomInteger(min,max){
return Math.floor(Math.random()*(max-min))+min;
}
function getRandomNumber(){
    return getRandomInteger(0,9)
}
function generateLowerCase(){
   return String.fromCharCode( getRandomInteger(97,123))
}
 
function generateUpperCase(){
   return String.fromCharCode( getRandomInteger(65,91))
}
function generateSymbol(){
    return 
}