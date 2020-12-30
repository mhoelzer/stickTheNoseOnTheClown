/* TODOS:
- no clicking leads to 1 lost sanity point. do something with settimeout?
- make more mobile-friendly
- sound effects
*/

let doubleDutyButton = document.getElementById("doubleDutyButton");
let howManyNoses = document.getElementById("howManyNoses");
let instructions = document.getElementById("instructions");
let nosesDiv = document.getElementById("nosesDiv");
let nosesSpan = document.getElementById("nosesSpan");
let playSpace = document.getElementById("playSpace");
let sanityDiv = document.getElementById("sanityDiv");
let sanitySpan = document.getElementById("sanitySpan");
let title = document.getElementById("title");

let interval;
let secondInterval;

let accurateClick = false;
let started = false;

let sanityPoints = 3;
sanitySpan.innerHTML += `${sanityPoints}`;

let clownsNeeded = 5;
howManyNoses.innerHTML += `${clownsNeeded} noses`;
nosesSpan.innerHTML = clownsNeeded;

let past = 0;
let present = 0;

let clownImage = document.createElement("img");
clownImage.classList.add("clownImage");
let playSpaceText = document.createElement("h1");
playSpaceText.classList.add("playSpaceText");
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
        instructions.style.display = "none";
        title.style.display = "none";
        nosesDiv.style.display = "block";
        playSpace.style.display = "block";
        sanityDiv.style.display = "block";
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
        // secondInterval = setTimeout(() => {
        // 	clickStatus();
        // }, 1900);
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
        clownsNeeded--;
        present++;
    } else if (!whatWasClicked.classList[0] === "clownImage") {
        accurateClick = false;
    }
    clickStatus();
}

function clickStatus() {
    console.log({ present, past });
    if (clownsNeeded === 0) {
        youWin();
    } else if (accurateClick) {
        clickSuccess();
    } else if (!accurateClick || past === present) {
        console.log({ present, past });
        present++;
        clickFail();
    }
    accurateClick = false;
    past = present;
    noMoreClicking();
}

function youWin() {
	nosesSpan.innerHTML = clownsNeeded;
    clownImage.src = "images/happyClown.png";
    clownImage.style.width = "300px";
    playSpaceText.append("You Win!!!");
    playSpace.append(playSpaceText);
    stopTheGame();
}

function clickSuccess() {
    nosesSpan.innerHTML = clownsNeeded;
    clownImage.src = "images/happyClown.png";
}

function clickFail() {
    sanityPoints--;
    sanitySpan.innerHTML = sanityPoints;
    clownImage.src = "images/youMissed.png";
    sanityCheck();
}

function finalFailure() {
    clownImage.src = "images/lostSanity.png";
    clownImage.style.width = "300px";
    playSpaceText.append("You Lost >:)");
    playSpace.append(playSpaceText);
    stopTheGame();
}

function noMoreClicking() {
    playSpace.removeEventListener("click", accuracyCheck);
}

function stopTheGame() {
    noMoreClicking();
    clearInterval(interval);
    clearTimeout(secondInterval);
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
