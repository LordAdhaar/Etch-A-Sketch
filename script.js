//select the grid and the body
const grid = document.querySelector(".grid");
const body = document.querySelector("body")
let isEraser=0;
let chosenColor = "black";
let mousedown = 0;
let isRainbow = 0;

let randomColor;
// Math.floor(Math.random()*16777215).toString(16)

const rainbowButton = document.querySelector("button.rainbow");
rainbowButton.addEventListener("click",setIsRainbow);
rainbowButton.addEventListener("click",toggleRainbow);

function setIsRainbow(){

    if(isRainbow){
        isRainbow=0;
    }
    else{
        isRainbow=1;
    }
    console.log(isRainbow);

}

function toggleRainbow(){

    if(isRainbow){
        this.style.background="white";
        this.style.color = "#2c8aff";
    }
    else{
        this.style.background="#2c8aff";
        this.style.color="white";
    }
}



// take input from palette and assign value to the chosenColor
let colorInput = document.querySelector("#color");
colorInput.addEventListener("input",()=>{chosenColor = `${colorInput.value}`;
console.log(chosenColor, typeof chosenColor)});

//mousedown === 0 when mouse lifted up in the body 
body.addEventListener("mouseup",de_activateColor);


//create initial 16x16 grid.
for (let i= 0 ; i<(16*16); i++){

    const box = document.createElement("div");
    box.classList.add("box");

    if(grid.clientHeight===500){
        box.setAttribute("style","height:31.25px; width:31.25px");
    }
    else{
        box.setAttribute("style","height:20px; width:20px");
    }
    //console.log(box);
    grid.appendChild(box);

    box.addEventListener("mousedown",activateColor);
    box.addEventListener("mouseover",changeColor)
    box.addEventListener("mouseup",de_activateColor);

}

// activateColor, mousedown to 1
function activateColor(){
    mousedown=1;
    console.log(isEraser);
    if (isEraser){
        this.style.background="white";
    }
    else if(isRainbow){
        chosenColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        this.style.background = chosenColor;
    }
    else{
        this.style.background=chosenColor;
    }
}

// deactivate color, change mousedown to 0
function de_activateColor(){
    mousedown=0;
}

//add changecolor class box
function changeColor(event){
    if (mousedown){
        if(isEraser){
            this.style.background="white";
        }
        else if(isRainbow){
            chosenColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            this.style.background = chosenColor;
        }
        else{
            this.style.background=chosenColor;
        }
    }
    return;
}

function getBoxDimension(numBoxes){
    return ((grid.clientHeight*grid.clientHeight)/(numBoxes))**(1/2);
}


// create newGrid when button is clicked
function createGrid(){

    const boxes = document.querySelectorAll(".box");

    //delete the old grid
    for(const box of boxes){
        grid.removeChild(box);
    }

    let numBoxes=0;
    console.log(this.textContent);

    // set number of boxes
    if(this.textContent === "16X16"){
        numBoxes = 256;
    }
    else if(this.textContent==="32X32"){
        numBoxes = 1024;
    }
    else if(this.textContent==="64X64"){
        numBoxes = 4096;
    }
    else{
        numBoxes = 10000;
    }

    // set box dimensions
    let boxDim = getBoxDimension(numBoxes);

    for (let i= 0 ; i<(numBoxes); i++){


        const box = document.createElement("div");
        box.style.height = `${boxDim}px`;
        box.style.width = `${boxDim}px`;
        box.classList.add("box");

        grid.appendChild(box);

        box.addEventListener("mousedown",activateColor);
        box.addEventListener("mouseover",changeColor)
        box.addEventListener("mouseup",de_activateColor);
    }

}

const selectGridButtons = document.querySelectorAll(".gridSize button");

console.log(selectGridButtons);

for(const button of selectGridButtons){
    button.addEventListener("click",createGrid);
}

// add clear button
const clearButton = document.querySelector("button.clear");
clearButton.addEventListener("click",clear);

// change bgcolor to white
function clear(){

    const boxes = document.querySelectorAll(".box");
    for(const box of boxes){
        box.style.background="white";
    }
}


//add eraser
const eraserButton = document.querySelector("button.eraser");
eraserButton.addEventListener("click",setIsEraser);
eraserButton.addEventListener("click",toggleEraser);

// toggle eraser
function setIsEraser(){

    if(isEraser){
        isEraser=0;
    }
    else{
        isEraser=1;
    }
    console.log(isEraser);

}

// change bgcolor and font color of eraser button
function toggleEraser(){

    if(isEraser){
        this.style.background="white";
        this.style.color = "#2c8aff";
    }
    else{
        this.style.background="#2c8aff";
        this.style.color="white";
    }
}
