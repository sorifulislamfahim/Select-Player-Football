
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


// calculate Button 
document.getElementById('calculate-btn').addEventListener('click', function(){
    const playerNumberFiled = document.getElementById('playere-rate-filed');
    const playerNumberFileedString = playerNumberFiled.value;
    const playerNumber = parseInt(playerNumberFileedString);

    // playerNumberFiled.value = '';

    if(isNaN(playerNumber)){
        return alert('Please Enter Your Provide Number')
    }

    const totalAddPlayer = document.getElementById('total-added-player');
    const totalAddPlayerString = totalAddPlayer.innerText
    const totalAddPlayerNumber = parseInt(totalAddPlayerString);
    
    if(totalAddPlayerNumber == 0){
        return alert('Please Select Your Player')
    }

    const currentPlayerAmount = totalAddPlayerNumber * playerNumber;

    // const playerExpensess = document.getElementById('expenses-player');
    // playerExpensess.innerText = currentPlayerAmount;
    setElemntID('expenses-player', currentPlayerAmount);
    
})

document.getElementById('calculate-total-btn').addEventListener('click', function(){

    const expensesNumberTotal = document.getElementById('expenses-player');
    const priviousExpensessAmountString = expensesNumberTotal.innerText;
    const currentExpenses = parseInt(priviousExpensessAmountString);
    if(currentExpenses === 0){
        return alert('Please calculate Your Player number')
    }
    

    const managerFiled = getInputValueNumber('manager-filed')
    if(isNaN(managerFiled)){
        return alert('Please Enter Your Manager Cost Amount')
    }

    const couchFiled = getInputValueNumber('couch-filed')
    if(isNaN(couchFiled)){
        return alert('Please Enter Your Couch Amount')
    }
    

    const totalAmount = currentExpenses + managerFiled + couchFiled;
    // console.log(totalAmount);

    
    // const totalCost = document.getElementById('total-amount');
    // totalCost.innerText = totalAmount;

    setElemntID('total-amount', totalAmount);

})