
let number = 0;
const allSelectedButtton = document.getElementsByClassName('selected-button');

for(select of allSelectedButtton){
    select.addEventListener('click', function(element){
    number++;

    const playerName = element.target.parentNode.childNodes[3].innerText;
    // console.log(playerName);

    const selected = element.target.setAttribute('disabled', '');

    if(number > 5){
       const selected = element.target.removeAttribute('disabled');
       return alert('You Cannot Add another players')
    }
        
    const selectedPlayers = document.getElementById('total-added-player')
    const privioustotalSelectedString = selectedPlayers.innerText;
    const priviousTotalSelected = parseInt(privioustotalSelectedString);
    selectedPlayers.innerText = number;

    const playersItemBody = document.getElementById('player-items-body');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${number}</th>
       <td>${playerName}</td>
    `
    playersItemBody.appendChild(tr);
}
)}
