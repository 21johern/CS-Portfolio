var operationType = document.getElementById("operationType");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var solve = document.getElementById("solve");
var showAnswer = document.getElementById("showAnswer");
solve.addEventListener("click", function() {
    var number1 = +num1.value;
    var number2 = +num2.value;
    var opType = operationType.value;
    
    if (opType === "+"){
       showAnswer.innerHTML = number1 + number2; 
    }
    else if (opType === "-"){
       showAnswer.innerHTML = number1 - number2; 
    }
    else if (opType === "/"){
        showAnswer.innerHTML = number1 / number2;
    }
    else {
        showAnswer.innerHTML = number1 * number2;
    }
});

