let guestScoreEl = document.getElementById("guest-score-el");
let homeScoreEl = document.getElementById("home-score-el");
let homeScore = 0;
let guestScore = 0;


function add1PointHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function add2PointHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function add3PointHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function add1PointGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function add2PointGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function add3PointGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}

window.increment = increment
window.save = save
window.reset = reset