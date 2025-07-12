
let homeResult = document.getElementById("home_result")
let guestResult = document.getElementById("guest_result")
let countHome = 0
let countGuest = 0

function homeadd1(){
    countHome += 1
    homeResult.textContent = countHome
}
function homeadd2() {
    countHome +=2
    homeResult.textContent = countHome
}

function homeadd3() {
    countHome +=3
    homeResult.textContent = countHome
}

function guestadd1(){
    countGuest += 1
    guestResult.textContent = countGuest
}
function guestadd2() {
    countGuest +=2
    guestResult.textContent = countGuest
}

function guestadd3() {
    countGuest +=3
    guestResult.textContent = countGuest
}


// Is there any ways can improve the code? I repeatly use lots of same contents here