let currentMode = "black";

const container = document.querySelector("#container");
const button = document.querySelector(".grid-size-btn");
const blkButton = document.querySelector(".blk-btn");
const rainbowButton = document.querySelector(".rainbow-btn");
const grayButton = document.querySelector(".gray-btn");
const clearButton = document.querySelector(".clear-btn");
const sizeSlider = document.querySelector("#sizeSlider");
const sizeDisplay = document.querySelector("#sizeValue");

function createGrid (size) {
    container.textContent = "";
    for (let i = 0; i < size * size; i++) {
        const divBoxes = document.createElement("div");
        divBoxes.classList.add("square");
        divBoxes.dataset.darkness = 0;
        divBoxes.style.width = (80/size) + "vmin" ;
        divBoxes.style.height = (80/size) + "vmin";
        divBoxes.addEventListener("mouseover", function (e) {
            if (currentMode === "black") {
                e.target.style.backgroundColor = "black";
            } else if (currentMode === "rainbow") {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else if (currentMode === "grayscale") {
                let currentCount = Number(e.target.dataset.darkness);
                if (currentCount < 10) {
                    currentCount++;
                    e.target.dataset.darkness = currentCount;
                    e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentCount * 0.1})`;
                }
            }
    } );
        container.appendChild(divBoxes);
    }
}

function clearGrid () {
    const squares = document.querySelectorAll(".square");
    squares.forEach(function (s) {
        s.style.backgroundColor = "transparent";
        s.dataset.darkness = 0;
    });
}

sizeSlider.addEventListener("input", function () {
    let size = sizeSlider.value;
    sizeDisplay.textContent = `${size} x ${size}`;
    createGrid(size);
});
blkButton.addEventListener("click", function () {
    currentMode = "black";
} );
rainbowButton.addEventListener("click", function () {
    currentMode = "rainbow";
} );
grayButton.addEventListener("click", function() {
    currentMode = "grayscale";
})
clearButton.addEventListener("click", clearGrid);

createGrid(16);




