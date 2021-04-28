
let divNum = 0;
let gridSize = 256;
let color = "green"
let randnomColorCalc = false;


setGridSize(16);

// creates grid
function makeGrid(columnWidth) {
  divNum = 0;
  while (divNum < gridSize) { 
    divNum += 1; 
    const container = document.querySelector('#container');
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.setAttribute("id", "grid" + divNum);
    grid.setAttribute('style', `width: ${columnWidth}rem`)
    //set width
    // grid.style.width(`${columnWidth}rem`)
    container.appendChild(grid);
  }
  randnomColorCalc ? console.log("true") : console.log("false");
  randnomColorCalc ? randnomColor() : hoverActivateColor();
}

//set number of columns and rows in grid
function setGridSize(slideAmount){
  makeGrid(((30 - (.2 * slideAmount))/slideAmount)); // calc info = (gridSize - (borderSize * 2 * numberColumns))/ numberColumns
}
  

// (hover affect)creates square color chnge
hoverActivateColor();
function hoverActivateColor(){
  let grid = document.querySelectorAll(".grid");
  grid.forEach(hoover => {
    hoover.addEventListener("mouseover", function(e) {
      const gridNum = e.target.id;
      document.getElementById(gridNum).style.backgroundColor = `${color}` ;      
    });
  })
}

//slider button --reset gridsize
function updateSlider(slideAmount) {
  removegrid(gridSize);
  gridSize = (slideAmount ** 2);
  setGridSize(slideAmount);
}
//remove grid to make new
function removegrid(size) {
  for (let i = 1; i < (size + 1); i++) { 
    const removeDiv = document.getElementById(`grid${i}`);
    removeDiv.remove();
    }
}



//reset button - reset background to OG color
function Reset(){
  for (let i = 1; i < (gridSize + 1); i++) { 
  const gridNum = document.querySelector(`#grid${i}`);
  gridNum.style.backgroundColor = "#CC6633";
  }
}


//change grid hoover to random color

// onclick hoover random color
function randnomColor(){
  randnomColorCalc = true;
  let grid = document.querySelectorAll(".grid");
  grid.forEach(hoover => {
    hoover.addEventListener("mouseover", function(e) {
      const gridNum = e.target.id;
      let color = "#" + (Math.floor(Math.random()*16777215).toString(16));
      document.getElementById(gridNum).style.backgroundColor = `${color}` ;      
    });
  })
}


//select a color for hoover
document.getElementById("hoverColor").addEventListener("input", function (event) {
  color = event.target.value;
  randnomColorCalc = false;
  hoverActivateColor();
});

//change opacity as hoover
function changeOpacity(){
  let grid = document.querySelectorAll(".grid");
  grid.forEach(hoover => {
    hoover.addEventListener("mouseover", function(e) {
      const gridNum = e.target.id;
      let currentOpacity = Number(document.getElementById(gridNum).style.opacity);
      let newOpacity = currentOpacity + .25
      document.getElementById(gridNum).style.opacity = newOpacity;
    });
  })
}

// i do alot of event lisenter hoover code repeadtedly but need to do different thing for different 