var firstcon = document.querySelector(".firstconnection");

function fchide(){
    firstcon.remove();
}

var secondcon = document.querySelector(".secondconnection");

function schide(){
    secondcon.remove();
}

var namechange = document.querySelector(".jane");

function changeName(){
    namechange.innerText = "John Lee";
}

var conreqnum = document.querySelector("#numb2");

function decconreq(){
    conreqnum.innerText--;
}

var youconnumb = document.querySelector(".numb500");

function incurcon(){
    youconnumb.innerText++;
}

function fbothfunc(){
    fchide();
    decconreq();
}

function sbothfunc(){
    schide();
    decconreq();
}

function fallfunc(){
    fchide();
    decconreq();
    incurcon();
}

function sallfunc(){
    schide();
    decconreq();
    incurcon();
}