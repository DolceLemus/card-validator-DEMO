
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



