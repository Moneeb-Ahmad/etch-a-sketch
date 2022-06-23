const container = document.querySelector('.container');
const sizeSelector = document.querySelector('.gridChooser');
let width = container.offsetWidth
let n = 16;

createGrid(n);

function createGrid(size) {
  removeAllChildrenFromContainer();
  n = size;
  for (let i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.setAttribute(
      'style',
      `display: flex;`
    );
    for (let j = 0; j < n; j++) {
      const div = document.createElement('div');
      applyDivStyleGeneral(div, n);
      div.classList.add('gridItem');
      div.addEventListener('mouseover', mouseHover);
      div.addEventListener('mouseout', mouseOff);
      row.appendChild(div);
      applyRowStyle(row);
    }
    container.appendChild(row);
  }
}

function removeAllChildrenFromContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function applyDivStyleGeneral(div) {
  let height = Math.floor(width / n)
  div.setAttribute(
    'style',
    `display: flex;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    background-color: pink;
    box-sizing: border-box;
    width: ${width}px;
    height: ${height}px;`
  );
}

function applyDivStyleHover(div) {
  let height = Math.floor(width / n)
  div.setAttribute(
    'style',
    `display: flex;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    box-sizing: border-box;
    background-color: blue;
    width: ${width}px;
    height: ${height}px;`
  );
}

function applyRowStyle(row) {
  let height = new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format((100 / n) / 100);

  row.setAttribute(
    'style',
    `display:flex;
    min-width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    min-height: ${height};
    max-height: ${height};`
  );
}

function mouseHover(e) {
  applyDivStyleHover(e.target);
}

function mouseOff(e) {
  applyDivStyleGeneral(e.target);
}

function changeSize(e) {
  let size = Number(prompt("Enter a grid size"));
  if (Number.isInteger(size)) {
    if (size > 0) {
      if (size > 100) {
        createGrid(100);
      }
      createGrid(size);
    }
  }
}


sizeSelector.addEventListener('click', changeSize);
