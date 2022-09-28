//select the grid and the body
const grid = document.querySelector(".grid");
const body = document.querySelector("body")
body.addEventListener("mouseup",de_activateColor);

let mousedown = 0;

//create initial 16x16 grid.
for (let i= 0 ; i<(16*16); i++){

    const box = document.createElement("div");
    box.setAttribute("style","height:31.25px; width:31.25px; border:1px solid black");
    //console.log(box);
    box.classList.add("box");
    grid.appendChild(box);

    box.addEventListener("mousedown",activateColor);
    box.addEventListener("mouseover",changeColor)
    box.addEventListener("mouseup",de_activateColor);
    box.addEventListener("click", (event) => {event.target.style.background="black"})

}

// activateColor, mousedown to 1
function activateColor(){
    mousedown=1;
    this.style.background="black";
    console.log(mousedown);
}

// deactivate color, change mousedown to 0
function de_activateColor(){
    mousedown=0;
    console.log(mousedown);
}

//add changecolor class box
function changeColor(event){
    if (mousedown){
        this.style.background="black";
    }
    return;
}

function getBoxDimension(numBoxes){
    return ((500*500)/(numBoxes))**(1/2);
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
        box.style.border = "1px solid black";
        box.style.height = `${boxDim}px`;
        box.style.width = `${boxDim}px`;
        box.classList.add("box");

        grid.appendChild(box);

        box.addEventListener("mousedown",activateColor);
        box.addEventListener("mouseover",changeColor)
        box.addEventListener("mouseup",de_activateColor);
        box.addEventListener("click", (event) => {event.target.style.background="black"});
    
    }

}

const selectGridButtons = document.querySelectorAll(".gridSize button");

console.log(selectGridButtons);

for(const button of selectGridButtons){
    button.addEventListener("click",createGrid);
}


function clear(){

    const boxes = document.querySelectorAll(".box");
    for(const box of boxes){
        box.style.background="white";
    }
}

const clearButton = document.querySelector("button.clear");
clearButton.addEventListener("click",clear);

