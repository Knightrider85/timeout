window.addEventListener("DOMContentLoaded", main);

let timeOutRef;

function main() {
    //start på programmet
    timeOutRef = setTimeout(changeBackgroundColor, 2000);
    setupEventListener();
}


function changeBackgroundColor() {
    document.body.style.background = "lightblue"
}



function setupEventListener() {
    const button = document.getElementById("cancel")
    button.addEventListener("click", cancelBackgroundChange);
}

function cancelBackgroundChange() {
    clearTimeout(timeOutRef);
}