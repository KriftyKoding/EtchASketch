
let divNum = 0

// creates grid
while (divNum < 256) { 
  divNum += 1; 
  const container = document.querySelector('#container');
  const grid = document.createElement('div');
  grid.classList.add('grid');
  grid.setAttribute("id", "grid" + divNum)
  container.appendChild(grid);
}

const grid = document.querySelectorAll(".grid");
// creates grid color changes
grid.forEach(hoover => {
  hoover.addEventListener("mouseover", function(e) {
    const gridNum = e.target.id;
    document.getElementById(gridNum).style.backgroundColor = 'green' ;      
});
})

function Reset(){
  for (let i = 1; i < 257; i++) { 
  const gridNum = document.querySelector(`#grid${i}`);
  gridNum.style.backgroundColor = "black";
    
    console.log(i);
    console.log(`grid${i}`)
    console.log(gridNum)
  }
  
  
}