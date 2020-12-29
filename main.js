let playSpace = document.getElementById("playSpace");
let startButton = document.getElementById("start");

let started = false;
let accurateClick = false;
let timeToClick = 3; // no time limit to win though
let sanity = true;
let sanityPoints = 3; // ["SA", "NI", "TY"]
let clownsNeeded = 10;
let clownImage = document.createElement("img");
clownImage.classList.add = "clownImage";
playSpace.append(clownImage);
// create setInterval for how long and to make clowns (like while timeleft)

function startGame() {
    started = true;
    // while (clownsNeeded > 0) {
    // 	if (clownsNeeded === 10) {
    sadClownEmergence();
    // 	} else {
    // 		setInterval(sadClownEmergence(), 3000);
    // 	}
    // }
}

function sadClownEmergence() {
    // if (clownsNeeded === 10) {

    // }
    // while (clownsNeeded > 0) {
    setInterval(() => {
        let x = Math.floor(Math.random() * 500);
        let y = Math.floor(Math.random() * 500);
        // in here have check for if accurate click or not
        clownImage.src = "images/sadClown.png";
        clownImage.style.position = "absolute";
        clownImage.style.left = x + "px";
        clownImage.style.top = y + "px";
        clownImage.addEventListener("click", accuracyCheck);
        clickStatus();
        // } else {
        // 	setInterval(sadClownEmergence(), 3000);
        // }
        // }
    }, 2000);
}
// sadClownEmergence();

function accuracyCheck(event) {
    let whatWasClicked = event.currentTarget;
    // console.log(whatWasClicked === false)
    // if (whatWasClicked) {
    accurateClick = true;
	// }
	return true
}

function clickStatus() {
    // subtract from clownsNeeded
    console.log(clownsNeeded);
    // let click =
    // clownsNeeded--;
    if (clownsNeeded === 0) {
        youWin();
    } else if (accurateClick) {
    // } else if (timeToClick === 0 && accurateClick) {
		console.log("eeeee")
        clickSuccess();
    } else if (!accurateClick) {
    // } else if (timeToClick === 0 && !accurateClick) {
        clickFail();
        // } else if (timeToClick === 0 && !accurateClick && !sanity) {
        //     finalFailure();
	}
	clownImage.src = "images/sadClown.png";
    // clownsNeeded--;
    accurateClick = false;
    // sadClownEmergence()
}

function youWin() {
    // win condition
    console.log("ee");
}

function clickSuccess() {
    //get happyclown
    // set small interval before showin sCE
    console.log("success");
    setInterval(() => {
        clownImage.src = "images/happyClown.png";
    }, 1000);
	clownsNeeded--;
	// accurateClick = false;
    // sadClownEmergence();
}

function clickFail() {
    // youmissed
    // set small interval before showin sCE
    console.log("no");

    setInterval(() => {
        clownImage.src = "images/youMissed.png";
    }, 1000);
    clownsNeeded--;
    sanityCheck();
    // sadClownEmergence();
}

function finalFailure() {
    // lostSantiy
    // end game
}

function sanityCheck() {
    if (sanityPoints === 0) {
        finalFailure();
    } else {
        sanityPoints--;
    }
}

function resetRound() {
    location.reload();
}
