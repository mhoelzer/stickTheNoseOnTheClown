let playSpace = document.getElementById("playSpace");
let startButton = document.getElementById("start");
let sanitySpan = document.getElementById("sanitySpan");

let interval;
let started = false;
let accurateClick = false;
let timeToClick = 3; // no time limit to win though
let sanity = true;
let sanityPoints = 3; // ["SA", "NI", "TY"]
let clownsNeeded = 5;
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

function startGame() {
    // playSpace.addEventListener("click", accuracyCheck);
    // started = true;
    // if (started = false){
    sadClownEmergence();
    // 	started = true
    // }
}

function showSadClown() {
    // (max-min+1)+min)
    let clownImageWidth = window
        .getComputedStyle(clownImage)
        .getPropertyValue("width")
        .slice(0, -2);
    // console.log(typeof clownImageWidth)
    let horzPlaySpace = playSpaceWidth - clownImageWidth;
    let vertPlaySpace = playSpaceHeight - clownImageWidth;
    console.log(horzPlaySpace);
    let x = Math.floor(Math.random() * (horzPlaySpace - 0 + 1) + 0);
    let y = Math.floor(Math.random() * (vertPlaySpace - 0 + 1) + 0);
    // let x = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    // const y = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    clownImage.src = "images/sadClown.png";
    clownImage.style.position = "relative";
    clownImage.style.left = x + "px";
    clownImage.style.top = y + "px";
    playSpace.addEventListener("click", accuracyCheck);
}

function sadClownEmergence() {
    // if (started = true){
    interval = setInterval(() => {
        // if (started = true){
        showSadClown();
        // playSpace.addEventListener("click", accuracyCheck);
        // }
    }, 2000);
    // }
}

function accuracyCheck(event) {
    let whatWasClicked = event.target;
    console.log(whatWasClicked.classList[0] === "clownImage");
    if (whatWasClicked.classList[0] === "clownImage") {
        accurateClick = true;
    } else if (!whatWasClicked.classList[0] === "clownImage") {
        accurateClick = false;
    }
    // console.log(whatWasClicked === false)
    // if (whatWasClicked) {
    // }
    clickStatus();
    // return accurateClick;
}

function clickStatus() {
    console.log(clownsNeeded);
    // clownsNeeded--;
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
    noMoreClicking();
    // return
}

function youWin() {
    console.log("you win");
    playSpace.append("you win");
    stopTheGame();
}

function clickSuccess() {
    console.log("success");
    clownsNeeded--;
    clownImage.src = "images/happyClown.png";
    // playSpace.removeEventListener("click", accuracyCheck);
}

function clickFail() {
    console.log("no");
    sanityPoints--;
    sanitySpan.innerHTML = sanityPoints;
    clownImage.src = "images/youMissed.png";
    // playSpace.removeEventListener("click", accuracyCheck);
    sanityCheck();
}

function finalFailure() {
    console.log("you lost");
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
    } else {
        console.log("sanity check");
    }
}

function resetRound() {
    location.reload();
}


// boundaries for images: https://stackoverflow.com/a/42753366
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle