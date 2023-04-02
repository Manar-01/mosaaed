function filter(city) {
    var cards = document.getElementsByClassName("col-card");
    for (let index = 0; index < cards.length; index++) {
        var c = cards[index].className;
        if (!c.includes(city)) {
            cards[index].hidden = true;
        }
        else{
            cards[index].hidden = false; 
        }   
    }
    document.getElementById("more").hidden=true; 
}
function more(){
    var cards = document.getElementsByClassName("col-card");
    for (let index = 0; index < cards.length; index++) {
        cards[index].hidden = false;   
    }
    document.getElementById("more").hidden=true; 
}