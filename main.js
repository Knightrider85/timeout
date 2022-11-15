window.addEventListener("DOMContentLoaded", main);

let timeOutRef;

function main() {
    //start på programmet
    timeoutRef = setTimeout(changeBackgroundColor, 1000);
    setupEventListener();
}


function changeBackgroundColor() {
    document.body.style.background = getRandomColor();
}



function setupEventListener() {
    const cancelTimeoutbutton = document.getElementById("cancel")
    button.addEventListener("click", cancelBackgroundChange);

    const startIntervalButton = document.getElementById("start-interval");
    startIntervalButton.addEventListener("click", startBackgroundChangInterval)
}

function cancelBackgroundChange() {
    clearTimeout(timeoutRef);
}

function startBackgroundChangeInterval() {
    setInterval(changeBackgroundColor, 1000);
}

function getRandomColor() {
    const value = Math.random();
    if (value < 0.4) {
        return "red";
    }
    else if (value < 0.6) {
        return "green";
    }
    else if (value < 0.8) {
        return "grey";
    }
    else{
        return "pink";
    }

}