let playSpace = document.getElementById("playSpace");

let started = false;
let accurateClick = false;
let timeLeftToClick = 3; // no time limit to win though
let sanity = true;
let clownsNeeded = 10;
let clownImage = document.createElement("img");
clownImage.classList.add = "clownImage"
// create setInterval for how long and to make clowns (like while timeleft)

// while (clownsNeeded) {}
function sadClownEmergence() {
	let x = Math.floor(Math.random() * 500);
	let y = Math.floor(Math.random() * 500);
	// in here have check for if accurate click or not
	playSpace.append(clownImage)
	clownImage.src = "images/sadClown.png";
	clownImage.style.position = "absolute";
    clownImage.style.left = x + "px";
	clownImage.style.top = y + "px";
}

sadClownEmergence()
function clickSuccess() {
    //get happyclown
    // subtract from clownsNeeded
	// clownsNeeded--;
	// set small interval before showin sCE
    if (clownsNeeded === 0) {
        youWin();
    } else if (timeLeftToClick === 0) {
        clickFail();
    } else if (timeLeftToClick === 0 && !sanity) {
        finalFailure();
    }
}

function youWin() {
    // win condition
}

function clickFail() {
	// youmissed
	// set small interval before showin sCE
	sadClownEmergence();
}

function finalFailure() {
    // lostSantiy
    // end game
}

function resetRound() {
    location.reload();
}

// let playSpace = document.getElementById("playSpace")
// let dDButton = document.getElementById("doubleDutyButton")

// let started = false

// if (started) {
// 	dDButton.textContent = "Hi"
// 	function doubleDutyButton() {
// 		location.reload();
// 	}
// }
