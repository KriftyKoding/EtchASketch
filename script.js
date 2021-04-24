
let divNum = 0;
let gridSize = 256;

// creates grid
makeGrid();
function makeGrid() {
  divNum = 0;
  while (divNum < gridSize) { 
    divNum += 1; 
    const container = document.querySelector('#container');
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.setAttribute("id", "grid" + divNum);
    container.appendChild(grid);
  }
}


// creates grid color changes
hooverActivate();
function hooverActivate(){
  let grid = document.querySelectorAll(".grid");
  grid.forEach(hoover => {
    hoover.addEventListener("mouseover", function(e) {
      const gridNum = e.target.id;
      console.log(gridNum);
      document.getElementById(gridNum).style.backgroundColor = 'green' ;      
    });
  })
}

//turns all color to black
function Reset(){
  for (let i = 1; i < (gridSize + 1); i++) { 
  const gridNum = document.querySelector(`#grid${i}`);
  gridNum.style.backgroundColor = "#CC6633";
  }
}

//calc gridsize and update
function updateSlider(slideAmount) {
  removegrid(gridSize);
  gridSize = (slideAmount ** 2 + 1);
  makeGrid();
}

//remove grid
function removegrid(size) {
  for (let i = 1; i < (size + 1); i++) { 
    const removeDiv = document.getElementById(`grid${i}`);
    removeDiv.remove();
    }
    hooverActivate();
}