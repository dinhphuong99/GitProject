var num;
var num1;
var cong = false;
var tru = false;
var nhan = false;
var chia = false;

function insert(num) {
    document.getElementById('displayScreen').value = document.getElementById('displayScreen').value + num;
}

function add() {
    num = parseInt(document.getElementById('displayScreen').value);
    cong = true;
    alert(num);
    document.getElementById("displayScreen").value = '';
}

function minus() {
    num = parseInt(document.getElementById('displayScreen').value);
    tru = true;
    document.getElementById("displayScreen").value = '';
}

function multiply() {
    num = parseInt(document.getElementById('displayScreen').value);
    nhan = true;
    document.getElementById("displayScreen").value = '';
}

function divide() {
    num = parseInt(document.getElementById('displayScreen').value);
    chia = true;
    document.getElementById("displayScreen").value = '';
}

function equal() {
    num1 = parseInt(document.getElementById('displayScreen').value);
    var result;
    switch (true) {
        case cong:
            result = num + num1;
            cong = false;
            break;

        case tru:
            result = num - num1;
            tru = false;
            break;

        case nhan:
            result = num * num1;
            nhan = false;
            break;

        case chia:
            if (num1 == 0)
                alert("Không the chia cho 0");
            else
                result = num / num1;
            chia = false;
            break;

        default:
            break;
    }

    document.getElementById('displayScreen').value = result;
}

function acValue() {
    document.getElementById("displayScreen").value = '';
}
