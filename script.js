
let divNum = 0;
let gridSize = 256;

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
  hooverActivate();
}

//set number of columns and rows in grid
function setGridSize(slideAmount){
  makeGrid(((30 - (.2 * slideAmount))/slideAmount)); // calc info = (gridSize - (borderSize * 2 * numberColumns))/ numberColumns
}
  

// (hover affect)creates square color chnge
hooverActivate();
function hooverActivate(){
  let grid = document.querySelectorAll(".grid");
  grid.forEach(hoover => {
    hoover.addEventListener("mouseover", function(e) {
      const gridNum = e.target.id;
      document.getElementById(gridNum).style.backgroundColor = 'green' ;      
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



//reset button
function Reset(){
  for (let i = 1; i < (gridSize + 1); i++) { 
  const gridNum = document.querySelector(`#grid${i}`);
  gridNum.style.backgroundColor = "#CC6633";
  }
}


