function addition() {
    let firstNum = document.getElementById("first-number").value;
    let secondNum = document.getElementById("second-number").value;
    let output = document.getElementById("output");
    if (isNaN(firstNum) || isNaN(secondNum) || firstNum === "" || secondNum === "") {
        output.innerHTML = "Invalid Input(s)";
    } else {
        let result = Number(firstNum) + Number(secondNum);
        if (result < 0) {
            output.style.color = "red";
        } else {
            output.style.color = "black";
        }
        output.innerHTML = String(result);
    }
}

function subtraction() {
    let firstNum = document.getElementById("first-number").value;
    let secondNum = document.getElementById("second-number").value;
    let output = document.getElementById("output");
    if (isNaN(firstNum) || isNaN(secondNum) || firstNum === "" || secondNum === "") {
        output.innerHTML = "Invalid Input(s)";
    } else {
        let result = Number(firstNum) - Number(secondNum);
        if (result < 0) {
            output.style.color = "red";
        } else {
            output.style.color = "black";
        }
        output.innerHTML = String(result);
    }
}

function multiplication() {
    let firstNum = document.getElementById("first-number").value;
    let secondNum = document.getElementById("second-number").value;
    let output = document.getElementById("output");
    if (isNaN(firstNum) || isNaN(secondNum) || firstNum === "" || secondNum === "") {
        output.innerHTML = "Invalid Input(s)";
    } else {
        let result = Number(firstNum) * Number(secondNum);
        if (result < 0) {
            output.style.color = "red";
        } else {
            output.style.color = "black";
        }
        output.innerHTML = String(result);
    }
}

function division() {
    let firstNum = document.getElementById("first-number").value;
    let secondNum = document.getElementById("second-number").value;
    let output = document.getElementById("output");
    if (isNaN(firstNum) || isNaN(secondNum) || firstNum === "" || secondNum === "") {
        output.innerHTML = "Invalid Input(s)";
    } else {
        let result = Number(firstNum) / Number(secondNum);
        if (result < 0) {
            output.style.color = "red";
        } else {
            output.style.color = "black";
        }
        output.innerHTML = String(result);
    }
}

function power() {
    let firstNum = document.getElementById("first-number").value;
    let secondNum = document.getElementById("second-number").value;
    let output = document.getElementById("output");
    if (isNaN(firstNum) || isNaN(secondNum) || firstNum === "" || secondNum === "") {
        output.innerHTML = "Invalid Input(s)";
    } else {
        let result = 1;
        for (let i= 0; i < secondNum; i++) {
            result = result * firstNum;
        }
        if (result < 0) {
            output.style.color = "red";
        } else {
            output.style.color = "black";
        }
        output.innerHTML = String(result);
    }
}

function clearNums() {
    let firstNum = document.getElementById("first-number");
    let secondNum = document.getElementById("second-number");
    let output = document.getElementById("output");
    firstNum.value = null;
    secondNum.value = null;
    output.innerHTML = "";
}