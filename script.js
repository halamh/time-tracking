// Dots Active State

let dots = document.getElementsByClassName("dots");

function changeDots() {
    event.target.style.opacity = "1";
}
function changeDotsBack() {
    event.target.style.opacity = "";
}

function assign(ele) {
    ele.onmouseover = changeDots;
    ele.onmouseout = changeDotsBack;
}

for (let i=0; i<dots.length; i++) {
    assign(dots[i])
}

// Content Box Active State

let box = document.getElementsByClassName("content");

function changeBox() {
    event.target.style.backgroundColor = "hsl(235, 45%, 61%)";
}
function changeBoxBack() {
    event.target.style.backgroundColor = "";
}

function assign(ele) {
    ele.onmouseover = changeBox;
    ele.onmouseout = changeBoxBack;
}

for (let i=0; i<dots.length; i++) {
    assign(box[i]);
}
