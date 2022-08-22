function getInputValueNumber(value){
    const inputFiled = document.getElementById(value);
    const inputFiledString = inputFiled.value;
    const curentInputTotal = parseInt(inputFiledString);
    return curentInputTotal;
}


function setElemntID(elementId, value){
    const totalCost = document.getElementById(elementId);
    totalCost.innerText = value;
}