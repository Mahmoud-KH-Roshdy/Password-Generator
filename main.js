
//----------------------- Elements ------------------------
let passLength = document.getElementById("pass-length")
let lengthInp = document.querySelector(".range")

let lowerCaseInput = document.getElementById("lowercase")
let upperCaseInput = document.getElementById("uppercase")
let numberInput = document.getElementById("numbers")
let symbolsInput = document.getElementById("symbols")

let btnGenerate  = document.getElementById("generate")
let passwordHtml  = document.getElementById("Password")

let difficult = document.getElementById("difficulty")
let blocks =  document.getElementById("blocks")

let copy = document.getElementById("copy")
// ------------------------ Functions -----------------------

let getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);

let getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);

let getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

lengthInp.addEventListener("input", function () {
    passLength.innerHTML = this.value
})
// ------------------------ GENERATE -----------------------
function generate(length) {
    let password = ""
    while ( password.length < length){
        if( lowerCaseInput.checked &&  password.length < length ){
            password += getRandomLower()
        }
        if( upperCaseInput.checked &&  password.length < length ){
            password += getRandomUpper()
        }
        if( numberInput.checked &&  password.length < length ){
            password += getRandomNumber()
        }
        if(  symbolsInput.checked &&  password.length < length ){
            password += getRandomSymbol()
        }
        
    }
    return password
}
btnGenerate.addEventListener("click" , function() {
    passwordHtml.innerHTML = generate(lengthInp.value)
    difficult.innerHTML = checkStrength()
    blocks.classList = checkStrength()
})
// ------------------------ Strength -----------------------
function checkStrength() {
    let length = lengthInp.value
    let newarr = [ lowerCaseInput , upperCaseInput , numberInput , symbolsInput];
    let strength = 0 
    newarr.filter(function (ele) { 
        return ele.checked ? strength++ : "" ;
    })
    if(length < 8 ) return "easy" ;
    else if ( length >= 8 && strength == 1 ) return "easy";
    else if ( length >= 8 && strength > 1 && strength < 4  ) return "medium";
    else if ( length >= 8 && strength == 4  ) return "hard";
    

}

// ------------------------ Copypass -----------------------
copy.addEventListener( "click" , function () {
    const text = passwordHtml.innerHTML ;
    navigator.clipboard.writeText(text);
})
