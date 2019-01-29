alert('To raise to a power, enter a number in the first field, and a power in the second field');
function plus(){
    var num1, num2, result;
    
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('result').innerHTML = result;
}

function minus(){
    var num1, num2, result;
    
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);

    result = num1 - num2;
    
    document.getElementById('result').innerHTML = result;
}

function division(){
    var num1, num2, result;
    
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);

    result = num1 / num2;
    
    document.getElementById('result').innerHTML = result;
}

function multiplication(){
    var num1, num2, result;
    
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);

    result = num1 * num2;
    
    document.getElementById('result').innerHTML = result;
}

function degree(){
    var num1, num2, result;
    
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);

    result = Math.pow(num1,num2);
    
    document.getElementById('result').innerHTML = result;
}


