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
const symbol = "!@#$%^&*()_+-={}[]|:;<>,.?/~`";

let password = "";
let passwordLength =10;
let checkCount=0;


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
    const randomNum = getRandomInteger(0, symbol.length);
    return symbol.charAt(randomNum);
}
//check box logic
function handleCheckBoxes(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
        checkCount++;
    else return;      
    })
    //special condition
    if(passwordLength<checkCount){{
        passwordLength=checkCount;
        handleSlider();
    }
}
}

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener("change",handleCheckBoxes)
})
//Logic for calculating strength of password
function calcStrength(){
    let hasUpper = uppercase.checked;
    let hasLower = lowercase.checked;
    let hasNum = numbers.checked;
    let hasSym = symbols.checked;
    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 6){
        setIndicator("#ff0");
    }else{
        setIndicator("#f00");
    }
}
async function copyContent(){
   try {
     await navigator.clipboard.writeText(passwordDisplay.value);
     copyMessage.innerText = "Copied!";
     copyMessage.style.backgroundColor="lightGreen";
    
   } catch (e) {
    copyMessage.innerText = "Failed";
    copyMessage.style.backgroundColor
   }
    copyMessage.addClassList.add("active")
     setTimeout(()=>{
        copyMessage.classList.remove("active")
     },2000)
 

}

//Main function to generate password

    inputSlider.addEventListener("input",(e)=>{
        passwordLength=e.target.value;
        
        handleSlider();
        //console.log(passwordLength);
    })
    copyBtn.addEventListener("click",()=>{
        if(passwordDisplay.value) 
            copyContent();
        else{
            // setTimeout(()=>{
            //     copyMessage.innerText = "Nothing to copy";
            //     copyMessage.style.backgroundColor = "lightcoral";

            // },2000)
            
        }

        
    })
//Main Function to generate password

    generateBtn.addEventListener("click", () => {
    if (checkCount === 0) {
        return;
        




        //Further implementation of showing error message to select at least one checkbox
        // const errorMessage = document.createElement("h1");
        // errorMessage.innerText = "Please select at least one checkbox";
        // errorMessage.style.color = "lightcoral";

        // document.body.appendChild(errorMessage); // temporary test

        // setTimeout(() => {
        //     errorMessage.remove();
        // }, 2000);
    }
});

    