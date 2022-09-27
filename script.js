//select the grid and the body
const grid = document.querySelector("div");
const body = document.querySelector("body")

let mousedown = 0;

//for loop to create the grid
for (let i= 0 ; i<(16*16); i++){

    const box = document.createElement("div");
    box.setAttribute("style","height:25px; width:25px; border:1px solid black");
    //console.log(box);
    box.classList.add("box");
    grid.appendChild(box);

}

body.addEventListener("mouseup",de_activateColor);

// function to activateColor and change mousedown to 1
function activateColor(){
    mousedown=1;
    this.classList.add("changeColor");
    console.log(mousedown);
}

// function to deactivate color and change mousedown to 0
function de_activateColor(){
    mousedown=0;
    console.log(mousedown);
}

//funciton to add changecolor class to the box
function changeColor(event){
    if (mousedown){
        this.classList.add("changeColor");
    }
    return;
}

// node list of all the boxes
const boxes = document.querySelectorAll(".box");

// apply mousedown to all boxes
for (const box of boxes){
    box.addEventListener("mousedown",activateColor);
}

//apply mouse up to deactivate the changecolor
for(const box of boxes){
    box.addEventListener("mouseup",de_activateColor);
}

// to change color when box clicked
for(const box of boxes){
    box.addEventListener("click", (event) => {event.target.classList.add("changeColor")})
}

// event listener which changes bgcolor if mousedown === 1 ;
for(const box of boxes){
    box.addEventListener("mouseover",changeColor)
}

