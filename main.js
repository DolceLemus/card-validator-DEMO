
const basicCardValidator = require('basic-card-validator');
console.log(basicCardValidator.card(1234567890123456));


const btnSend = document.getElementById("btnSend")

btnSend.addEventListener("click",function(){
    let basicCardValidator = require('basic-card-validator');
    let valInput = document.getElementById("creditNumber").value;

    console.log(basicCardValidator.card(1234567890123456));



    // if (basicCardValidator.card(valInput)=== true){
    //     document.getElementById("resul").innerHTML = "Numero de tarjeta: " + creditNumber + " es Valido ";
    // }
});


  


// const cardFunction = basicCardValidator.card;
// const nameFunction = basicCardValidator.name;
// const cvvFunction = basicCardValidator.cvv;
// const dateFunction = basicCardValidator.date;

// console.log(cardFunction(4152313380623160));//true
// console.log(nameFunction("Dulce Lemus"));//true
// console.log(cvvFunction(123)); //true
// console.log(dateFunction(12,18));//true



