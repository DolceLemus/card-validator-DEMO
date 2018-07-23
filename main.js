
const btnSend = document.getElementById("btnSend");

btnSend.addEventListener("click",function(){
    let isValidCard = require('card');
    let valInput = document.getElementById("creditNumber").value;

    if (isValidCard(valInput)=== true){
        document.getElementById("resul").innerHTML = "Numero de tarjeta: " + creditNumber + " es Valido ";
    } else {
        alert("Error");
    }
});


  


// const cardFunction = basicCardValidator.card;
// const nameFunction = basicCardValidator.name;
// const cvvFunction = basicCardValidator.cvv;
// const dateFunction = basicCardValidator.date;

// console.log(cardFunction(4152313380623160));//true
// console.log(nameFunction("Dulce Lemus"));//true
// console.log(cvvFunction(123)); //true
// console.log(dateFunction(12,18));//true



