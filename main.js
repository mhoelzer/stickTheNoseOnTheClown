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
	// started = true;
	// if (started = false){
		sadClownEmergence()
	// 	started = true
	// }
}

function showSadClown() {
	let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 500);
	clownImage.src = "images/sadClown.png";
	clownImage.style.position = "absolute";
	clownImage.style.left = x + "px";
	clownImage.style.top = y + "px";
	document.body.addEventListener("click", accuracyCheck);
}

function sadClownEmergence() {
	// if (started = true){
    interval = setInterval(() => {
        if (started = true){
			showSadClown()
			
		}
	}, 2000);
// }
}

function accuracyCheck(event) {
	let whatWasClicked = event.currentTarget;
	if (whatWasClicked.classList === "clownImage"){
		accurateClick = true;
	}
    // console.log(whatWasClicked === false)
    // if (whatWasClicked) {
	// }
	clickStatus();
    return accurateClick;
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
	// showSadClown()
	accurateClick = false;
	return 
    // setInterval(() => {
        clownImage.src = "images/sadClown.png";
        // clownsNeeded--;
    // }, 2000);
}

function youWin() {
	console.log("you win");
	clearInterval(interval)
}

function clickSuccess() {
    console.log("success");
    clownImage.src = "images/happyClown.png";
	clownsNeeded--;
	// setInterval(() => {
    //     clownImage.src = "images/sadClown.png";
    //     accurateClick = false;
    // }, 2000);
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
