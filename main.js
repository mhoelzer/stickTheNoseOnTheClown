let playSpace = document.getElementById("playSpace");
let startButton = document.getElementById("start");
let interval
let started = false;
let accurateClick = false;
let timeToClick = 3; // no time limit to win though
let sanity = true;
let sanityPoints = 3; // ["SA", "NI", "TY"]
let clownsNeeded = 10;
let clownImage = document.createElement("img");
clownImage.classList.add = "clownImage";
playSpace.append(clownImage);

document.body.append("You have" + sanityPoints)

function startGame() {
	started = true;
		sadClownEmergence();
}

function sadClownEmergence() {
	// if (started = true){
    interval = setInterval(() => {
        let x = Math.floor(Math.random() * 500);
        let y = Math.floor(Math.random() * 500);
        clownImage.src = "images/sadClown.png";
        clownImage.style.position = "absolute";
        clownImage.style.left = x + "px";
        clownImage.style.top = y + "px";
        clownImage.addEventListener("click", accuracyCheck);
        clickStatus();
	}, 2000);
// }
}

function accuracyCheck(event) {
    let whatWasClicked = event.currentTarget;
    // console.log(whatWasClicked === false)
    // if (whatWasClicked) {
    accurateClick = true;
    // }
    return true;
}

function clickStatus() {
    console.log(clownsNeeded);
    if (clownsNeeded === 0) {
        youWin();
    } else if (accurateClick) {
        console.log("eeeee");
        clickSuccess();
    } else if (!accurateClick) {
        clickFail();
    }
    setInterval(() => {
        clownImage.src = "images/sadClown.png";
        // clownsNeeded--;
        accurateClick = false;
    }, 2000);
}

function youWin() {
    console.log("you win");
}

function clickSuccess() {
    console.log("success");
    clownImage.src = "images/happyClown.png";
    clownsNeeded--;
    // accurateClick = false;
}

function clickFail() {
    console.log("no");
    // setInterval(() => {
    clownImage.src = "images/youMissed.png";
    // }, 2000);
    clownsNeeded--;
    sanityCheck();
}

function finalFailure() {
	console.log("you lost");
	started = false
	clearInterval(interval)
}

function sanityCheck() {
	if (sanityPoints === 0) {
		finalFailure();
    } else {
		console.log("sanity check")
        sanityPoints--;
    }
}

function resetRound() {
    location.reload();
}
