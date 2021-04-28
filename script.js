
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
    container.appendChild(grid);
  }
  hoverActivate();
}
//hover function
function hoverActivate(){
  let grid = document.querySelectorAll(".grid");
  grid.forEach(hoover => {
    hoover.addEventListener("mouseover", function(e) {
      const gridNum = e.target.id;
      randnomColorCalc ? randomColorCalculator(gridNum) : constColor(gridNum);   
    });
  })
}

//reset button - reset background to OG color
function Reset(){
  for (let i = 1; i < (gridSize + 1); i++) { 
  const gridNum = document.querySelector(`#grid${i}`);
  gridNum.style.backgroundColor = "#CC6633";
  }
}


// onclick random color reaction
function randnomColor(){
  randnomColorCalc = true;
  hoverActivate();      
}
//assign grid random color for hoverActivat()
function randomColorCalculator(gridNum){
  let ranColor = "#" + (Math.floor(Math.random()*16777215).toString(16));
  document.getElementById(gridNum).style.backgroundColor = ranColor; 
} 
//onChange constant Color
function colorChange(newColor){
  color = newColor;
  randnomColorCalc = false;
  hoverActivate();
}
//assign grid constant color for hoverActivat()
function constColor(gridNum){
  document.getElementById(gridNum).style.backgroundColor = color;
}

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
//set number of columns and rows in grid
function setGridSize(slideAmount){
    makeGrid(((30 - (.2 * slideAmount))/slideAmount)); // calc info = (gridSize - (borderSize * 2 * numberColumns))/ numberColumns
}