function filter(city) {
    var cards = document.getElementsByClassName("col-card");
    for (let index = 0; index < cards.length; index++) {
        var c = cards[index].className;
        if (!c.includes(city)) {
            cards[index].hidden = true;
        }
        else {
            cards[index].hidden = false;
        }
    }
    document.getElementById("more").hidden = true;
}
function more() {
    var cards = document.getElementsByClassName("col-card");
    for (let index = 0; index < cards.length; index++) {
        cards[index].hidden = false;
    }
    document.getElementById("more").hidden = true;
}

function flip(element, n) {
    var btn = document.getElementsByClassName("btn-2");
    for (let index = 0; index < btn.length; index++) {
        if (btn[index] === element) {
            element.classList.add("active-1");
        }
        else {
            btn[index].classList.remove("active-1");
        }
    }
    var container = document.getElementsByClassName("container-1");
    for (let index = 0; index < container.length; index++) {
        if (index == n) {
            container[index].hidden = false;
        }
        else {
            container[index].hidden = true;
        }
    }
}

function forms_1(){
    var form_element = document.getElementsByClassName("form-control");
    var lock = false;
    for (let index = 0; index < form_element.length; index++) {
        if(form_element[index].value == ''){
            form_element[index].classList.add('alert_input');
            lock = true;
        }   
    }
    if (!lock){
        document.getElementById('id01').style.display = 'none';
        document.getElementById('id02').style.display = 'block';
    }
    
}