let playSpace = document.getElementById("playSpace");
let startButton = document.getElementById("start")

let started = false;
let accurateClick = false;
let timeLeftToClick = 3; // no time limit to win though
let sanity = true;
let clownsNeeded = 10;
let clownImage = document.createElement("img");
clownImage.classList.add = "clownImage";
playSpace.append(clownImage);
// create setInterval for how long and to make clowns (like while timeleft)

function startGame() {
	while (clownsNeeded > 0) {
		if (clownsNeeded === 10) {
			sadClownEmergence();
		} else {
			setInterval(sadClownEmergence(), 3000);
		}
	}
}

function sadClownEmergence() {
	// if (clownsNeeded === 10) {

	// }
    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 500);
    // in here have check for if accurate click or not
    clownImage.src = "images/sadClown.png";
    clownImage.style.position = "absolute";
    clownImage.style.left = x + "px";
    clownImage.style.top = y + "px";
    clickSuccess();
}
// sadClownEmergence();

function clickSuccess() {
    //get happyclown
    // subtract from clownsNeeded
    clownsNeeded--;
    console.log(clownsNeeded);
    // set small interval before showin sCE
    if (clownsNeeded === 0) {
        youWin();
    } else if (timeLeftToClick === 0) {
        clickFail();
    } else if (timeLeftToClick === 0 && !sanity) {
        finalFailure();
    }
    // sadClownEmergence()
}

function youWin() {
    // win condition
    console.log("ee");
}

function clickFail() {
    // youmissed
    // set small interval before showin sCE
    // sadClownEmergence();
}

function finalFailure() {
    // lostSantiy
    // end game
}

function resetRound() {
    location.reload();
}
