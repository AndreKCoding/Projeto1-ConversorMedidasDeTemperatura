var number = document.getElementById("number").value;

function CK()
{
    var resultNumber = Number(document.getElementById("number").value) + Number(273.15);
    console.log(resultNumber);
    document.getElementById("result").innerHTML = resultNumber + " K";
}

function CF()
{
    var resultNumber = Number(document.getElementById("number").value) / Number(5) * Number(9) + Number(32);
    console.log(resultNumber);
    document.getElementById("result").innerHTML = resultNumber + " °F";
}

function KC()
{
    var resultNumber = Number(document.getElementById("number").value) - Number(273.15);
    console.log(resultNumber);
    document.getElementById("result").innerHTML = resultNumber + " °C";
}

function FC()
{
    var resultNumberP1 = Number(document.getElementById("number").value) - Number(32);
    var resultNumber = Number(resultNumberP1) / Number(9) * Number(5);
    console.log(resultNumberP1);
    console.log(resultNumber);
    document.getElementById("result").innerHTML = resultNumber + " °C";
}

function KF()
{
    var resultNumberP1 = Number(document.getElementById("number").value) - Number(273.15);
    var resultNumber = Number(resultNumberP1) * Number(1.8);
    console.log(resultNumberP1);
    console.log(resultNumber);
    document.getElementById("result").innerHTML = resultNumber + " °F";
}

function FK()
{
    var resultNumberP1 = Number(document.getElementById("number").value) - Number(32);
    var resultNumberP2 = Number(resultNumberP1) / Number(9) * Number(5);
    var resultNumber = Number(resultNumberP2) + Number(273.15);
    console.log(resultNumberP1);
    console.log(resultNumberP2);
    console.log(resultNumber);
    document.getElementById("result").innerHTML = resultNumber + " K";
}