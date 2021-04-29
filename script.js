
let divNum = 0;
let gridSize = 256;
let color = "#771100"
let randnomColorCalcVar = false;
let opacityState = false;
let opacityIncreaseVar = false;
setGridSize(16);


//************************************************************************************************************************************************************************
//**********************************************************Create Gride**************************************************************************************************
//************************************************************************************************************************************************************************
//set number of columns and rows in grid
function setGridSize(slideAmount){
    makeGrid(((30 - (.2 * slideAmount))/slideAmount)); // calc info = (gridSize - (borderSize * 2 * numberColumns))/ numberColumns
}
// creates grid
function makeGrid(columnWidth) {
  divNum = 0;
  while (divNum < gridSize) { 
    divNum += 1; 
    const container = document.querySelector('#container');
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.setAttribute("id", "grid" + divNum);
    grid.setAttribute('style', `width: ${columnWidth}rem; opacity: 1;`);
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
      randnomColorCalcVar ? randomColorCalculator(gridNum) : constColor(gridNum);   
      opacityState ? changeOpacity(gridNum) : null;
    });
  })
}
//************************************************************************************************************************************************************************
//**********************************************************Reset Grid to Original State**********************************************************************************
//************************************************************************************************************************************************************************
//~OnClick~ reset
function Reset(){
  let slideAmount = document.getElementById("slide").value;
  updateSlider(slideAmount);
  opacityTaggle("false");
  randnomColorCalcVar = false;
}

//************************************************************************************************************************************************************************
//**********************************************************Grid Color****************************************************************************************************
//************************************************************************************************************************************************************************
//~OnClick ~ random color reaction
function randnomColor(){
  randnomColorCalcVar = true;
  opacityTaggle("false");
  hoverActivate();      
}
//assign grid random color for hoverActivat()
function randomColorCalculator(gridNum){
  let ranColor = "#" + (Math.floor(Math.random()*16777215).toString(16));
  document.getElementById(gridNum).style.backgroundColor = ranColor; 
} 
//~OnChange~ constant Color
function colorChange(newColor){
  color = newColor;
  randnomColorCalcVar = false;
  opacityTaggle("false");
  hoverActivate();
}
//assign grid constant color for hoverActivat()
function constColor(gridNum){
  document.getElementById(gridNum).style.backgroundColor = color;
}


//************************************************************************************************************************************************************************
//**********************************************************Opacity*******************************************************************************************************
//************************************************************************************************************************************************************************
//~OnClick~ turn opacity on/off
function opacityTaggle(selector){
  selector ? opacityState = eval(selector) : 
    opacityState ? opacityState = false : opacityState = true;
    opacityState ? document.getElementById("opacityTaggle").value="Opacity ON" : document.getElementById("opacityTaggle").value="Opacity OFF" 

};
//~OnClick~ reset all Opacity
function opacityRest(){
  for (let i = 1; i < (gridSize + 1); i++) { 
    const gridNum = document.querySelector(`#grid${i}`);
    gridNum.style.opacity = 1;
    }
}
//calc if opacity increases or decreases
function changeOpacity(gridNum){
  let currentOpacity = Number(document.getElementById(gridNum).style.opacity);
  if (currentOpacity >= 1) {opacityIncreaseVar = false};
  if (currentOpacity <= 0) {opacityIncreaseVar = true};
  opacityIncreaseVar ? opacityIncrease(gridNum, currentOpacity) : opacityDecrease(gridNum, currentOpacity);
  
}
//keep Opacity the same
function opacityIncrease(gridNum, currentOpacity){
  let newOpacity = (currentOpacity + .20)
  document.getElementById(gridNum).style.opacity = newOpacity; 
}
function opacityDecrease(gridNum, currentOpacity){
  let newOpacity = (currentOpacity - .20);
  document.getElementById(gridNum).style.opacity = newOpacity;
}

//************************************************************************************************************************************************************************
//**********************************************************Grid Slider***************************************************************************************************
//************************************************************************************************************************************************************************

//~OnColick~ reset gridsize
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