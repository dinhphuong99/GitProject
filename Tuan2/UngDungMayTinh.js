function cong() {
    var number= parseInt(document.getElementById ("number").value);
    var number1= parseInt(document.getElementById ("number1").value);
    var count;
    count = number  + number1;    
    document.getElementById("demo").innerHTML = "Result Addition:" + count; 
}

function tru() {
    var number= parseInt(document.getElementById ("number").value);
    var number1= parseInt(document.getElementById ("number1").value);
    var count;
    count = number  - number1;    
    document.getElementById("demo").innerHTML = "Result Subtraction:" + count; 
}

function nhan() {
    var number= parseInt(document.getElementById ("number").value);
    var number1= parseInt(document.getElementById ("number1").value);
    var count;
    count = number  * number1;    
    document.getElementById("demo").innerHTML = "Result Mutilplication:" + count; 
}

function chia() {
    var number= parseInt(document.getElementById ("number").value);
    var number1= parseInt(document.getElementById ("number1").value);
    var count;
    count = number  / number1;    
    document.getElementById("demo").innerHTML = "Result Division:" + count; 
}