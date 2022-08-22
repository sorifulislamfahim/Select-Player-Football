const arrayPlayer = [];

function displayPlayerName(displayName){

    const tableBody = document.getElementById('player-items');
    tableBody.innerHTML = '';
    for(let i = 0; i< displayName.length; i++){
        const name = arrayPlayer[i];

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${name}</td>
        `
        tableBody.appendChild(tr);
    }
}

function selected(element){
    const playerName = element.parentNode.children[1].innerText;
    arrayPlayer.push(playerName);
   
    document.getElementById('total-added-player').innerText = arrayPlayer.length;
    
    displayPlayerName(arrayPlayer);
}