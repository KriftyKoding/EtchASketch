
let divNum = 0

while (divNum < 256) { 
  divNum += 1; 
  const container = document.querySelector('#container');
  const grid = document.createElement('div');
  grid.classList.add('grid');
  grid.setAttribute("id", "grid" + divNum)
  // grid.classList.add('grid' + divNum);
  // console.log('grid' + divNum)
  // grid.textContent = divNum;
  container.appendChild(grid);
}

const grid = document.querySelectorAll(".grid");

grid.forEach(hoover => {
  hoover.addEventListener("mouseover", function(e) {
    const gridNum = e.target.id;
    document.getElementById(gridNum).style.backgroundColor = 'green' ; 
      
});
})

