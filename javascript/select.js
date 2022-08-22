
const arrayPlayer = [];
function selected(element){
    const playerName = element.parentNode.children[1].innerText;
    // console.log(playerName);

    arrayPlayer.push(playerName);
   
    document.getElementById('total-added-player').innerText = arrayPlayer.length;
}