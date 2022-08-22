
function getPlayerExpensess(){
    const playerRateFiled = document.getElementById('playere-rate-filed');
    const playerRateString = playerRateFiled.value;
    const playerRate = parseInt(playerRateString);

    // playerRateFiled.value = '';

    if(isNaN(playerRate)){
        return alert('Please Enter Your Player Number')
    }
   
    const expenssePlayer = document.getElementById('expenses-player');
    const expenssePlayerString = expenssePlayer.innerText;
    const priviousExpensseTotal = parseInt(expenssePlayerString);

    const newExpensseTotal = playerRate * 5; 
    expenssePlayer.innerText = newExpensseTotal;

    return priviousExpensseTotal;
}


function getInputValue (value){
    const managerFiled = document.getElementById(value);
    const managerValueString = managerFiled.value;
    const managerValue = parseInt(managerValueString);

    // managerFiled.value = '';

    if(isNaN(managerValue)){
        return alert('Please Enter Your Cost')
    }
    else{
        return managerValue;
    }
   
}

// calculate Section 
document.getElementById('calculate-btn').addEventListener('click', function(){
   getPlayerExpensess();
})

// calculate All section 
document.getElementById('calculate-total-btn').addEventListener('click', function(){
   
    const calculateExpensseTotal = getPlayerExpensess();
    const newExpensseTotal = parseInt(calculateExpensseTotal);

    const managerFiled =  getInputValue('manager-filed');
    const couchFiled = getInputValue('couch-filed');
   
    const totalAmount = document.getElementById('total-amount');

    const totalAmountCost = newExpensseTotal + managerFiled + couchFiled; 
    totalAmount.innerText = totalAmountCost;

})