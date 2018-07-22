(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const basicCardValidator = require('basic-card-validator');
const cardValidator = basicCardValidator.card;
let valInput = document.getElementById("creditNumber").value;
console.log(valInput);
console.log(cardValidator);

let btnSend = document.getElementById("btnSend")

btnSend.addEventListener("click",function(){
        cardFunction();
});


  


// const cardFunction = basicCardValidator.card;
// const nameFunction = basicCardValidator.name;
// const cvvFunction = basicCardValidator.cvv;
// const dateFunction = basicCardValidator.date;

// console.log(cardFunction(4152313380623160));//true
// console.log(nameFunction("Dulce Lemus"));//true
// console.log(cvvFunction(123)); //true
// console.log(dateFunction(12,18));//true




},{"basic-card-validator":2}],2:[function(require,module,exports){
const card = require("./lib/card");
const name = require("./lib/name");
const cvv = require("./lib/cvv");
const date = require("./lib/date");

module.exports = {card,name,cvv,date};

},{"./lib/card":3,"./lib/cvv":4,"./lib/date":5,"./lib/name":6}],3:[function(require,module,exports){
'use strict';
// validar que la tarjeta solo sean numeros y 16 numeros
(function () {

  // Validar los numeros de tarjeta por Lunm
  const isValidCard = (creditNumber) => {
    let creditNumberReverse = (String(creditNumber).split("")).reverse();
    let pairNumbers = [];
    let testCreditNumber = /^([0-9]){16}$/.test(creditNumber);
  
    for (let i = 0; i < creditNumberReverse.length; i++) {
      if (i % 2 !== 0) {
        let multiplication = creditNumberReverse[i] * 2;
        if (multiplication >= 10) {
          let sum = 0;
          while (multiplication) {
            sum += multiplication % 10;
            multiplication = Math.floor(multiplication / 10)
          }
          pairNumbers.push(sum)
        } else {
          pairNumbers.push(multiplication);
        }
      } else
        pairNumbers.push(parseInt(creditNumberReverse[i]));
    }
    
    let numberValidate = 0;
    for (let j = 0; j < pairNumbers.length; j++) {
      numberValidate += pairNumbers[j];
    }
    
    if (numberValidate % 10 === 0 && testCreditNumber === true) {
      return true;
    } else {
      return false
    }
  }

  if (typeof window == "undefined") {
    console.log("consola");
    module.exports = isValidCard;
  } else {
    console.log("navegador");
    window.isValidCard = isValidCard;
  }
})();


},{}],4:[function(require,module,exports){
'use strict';
// validar cvv solo sean numeros y 3 digitos
(function () {

const validateNumCvv = (cvv) => {
    return  /^([0-9]){3}$/.test(cvv);
  }

  if (typeof window == "undefined") {
    console.log("consola");
    module.exports = validateNumCvv;
  } else {
    console.log("navegador");
    window.validateNumCvv = validateNumCvv;
  }
  
})();

},{}],5:[function(require,module,exports){
'use strict';
(function () {

    // DATE
    const dateFunct = (month, year) => {
        let today = new Date();
        let year4Dig = today.getFullYear();
        let year2Dig = year4Dig.toString().substr(-2);

        let num2DigMonthTest = /^[0-9]{2}$/.test(month);
        let num2DigYearTest = /^[0-9]{2}$/.test(year);

        // months
        if (num2DigMonthTest === true && month < 13) {
            return true;
        } else {
            return false;
        }
        // years
        if (num2DigYearTest === true && year >= year2Dig) {
            return true;
        } else {
            return false;
        }
    }

    if (typeof window == "undefined") {
        console.log("consola");
        module.exports = dateFunct;
    } else {
        console.log("navegador");
        window.dateFunct = dateFunct;
    }

})();


},{}],6:[function(require,module,exports){
'use strict';

(function () {

  // Validar nombre que solo contenga letras
  const validateName = (name) => {
    return /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/.test(name);
  }

  if (typeof window == "undefined") {
    console.log("consola");
    module.exports = validateName;
  } else {
    console.log("navegador");
    window.validateName = validateName;
  }

})();

},{}]},{},[1]);
