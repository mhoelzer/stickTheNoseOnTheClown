let playSpace = document.getElementById("playSpace");
let sanitySpan = document.getElementById("sanitySpan");
let doubleDutyButton = document.getElementById("doubleDutyButton");
let instructions = document.getElementById("instructions")
let howManyNoses = document.getElementById("howManyNoses")

let interval;
let started = false;
let accurateClick = false;
let sanityPoints = 3; // ["SA", "NI", "TY"]
let clownsNeeded = 7;
howManyNoses.innerHTML += `${clownsNeeded} noses`

let clownImage = document.createElement("img");
clownImage.classList.add("clownImage");
playSpace.append(clownImage);

let playSpaceWidth = window
    .getComputedStyle(playSpace)
    .getPropertyValue("width")
    .slice(0, -2);
let playSpaceHeight = window
    .getComputedStyle(playSpace)
    .getPropertyValue("height")
    .slice(0, -2);

function playOrReset() {
    if (!started) {
		doubleDutyButton.innerHTML = "Start over :(";
		instructions.style.display = "none"
		playSpace.style.display = "block"
        startGame();
    } else {
        resetGame();
    }
}

function startGame() {
    started = true;
    sadClownEmergence();
}

function sadClownEmergence() {
    interval = setInterval(() => {
        createSadClown();
    }, 2000);
}

function createSadClown() {
    let clownImageWidth = window
        .getComputedStyle(clownImage)
        .getPropertyValue("width")
        .slice(0, -2);
    let widthAvailable = playSpaceWidth - clownImageWidth;
    let heightAvailable = playSpaceHeight - clownImageWidth;
    let x = Math.floor(Math.random() * widthAvailable);
    let y = Math.floor(Math.random() * heightAvailable);
    clownImage.src = "images/sadClown.png";
    clownImage.style.left = x + "px";
    clownImage.style.top = y + "px";
    playSpace.addEventListener("click", accuracyCheck);
}

function accuracyCheck(event) {
    let whatWasClicked = event.target;
    if (whatWasClicked.classList[0] === "clownImage") {
        accurateClick = true;
    } else if (!whatWasClicked.classList[0] === "clownImage") { // or if no click at all???
        accurateClick = false;
    }
    clickStatus();
}

function clickStatus() {
    if (clownsNeeded === 0) {
        youWin();
    } else if (accurateClick) {
        clickSuccess();
    } else if (!accurateClick) {
        clickFail();
    }
    accurateClick = false;
    noMoreClicking();
}

function youWin() {
    playSpace.append("you win");
    stopTheGame();
}

function clickSuccess() {
    clownsNeeded--;
    clownImage.src = "images/happyClown.png";
}

function clickFail() {
    sanityPoints--;
    sanitySpan.innerHTML = sanityPoints;
    clownImage.src = "images/youMissed.png";
    sanityCheck();
}

function finalFailure() {
    alert("you lost");
    clownImage.src = "images/lostSanity.png";
    stopTheGame();
}

function noMoreClicking() {
    playSpace.removeEventListener("click", accuracyCheck);
}

function stopTheGame() {
    noMoreClicking();
    clearInterval(interval);
}

function sanityCheck() {
    if (sanityPoints === 0) {
        finalFailure();
    } 
}

function resetGame() {
    location.reload();
}

// boundaries for images: https://stackoverflow.com/a/42753366
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
