
let divNum = 0

while (divNum < 256) { 
  divNum += 1; 
  const container = document.querySelector('#container');
  const grid = document.createElement('div');
  grid.classList.add('grid');
  grid.textContent = 'num ' + divNum;
  container.appendChild(grid);
  
  
}
