const container = document.querySelector('.container');
const sizeSelector = document.querySelector('.gridChooser');
const resetGrid = document.querySelector('.reset');
let width = container.offsetWidth
let oldColor = "#000000";
const colorHashSet = {
  'rgb(255, 191, 204)': "#e6acb8",
  'rgb(230, 172, 184)': "#cc99a3",
  'rgb(204, 153, 163)': "#b3868f",
  'rgb(179, 134, 143)': "#99737a",
  'rgb(153, 115, 122)': "#806066",
  'rgb(128, 96, 102)': "#664d52",
  'rgb(102, 77, 82)': "#4d393d",
  'rgb(77, 57, 61)': "#332628",
  'rgb(51, 38, 40)': "#191314",
  'rgb(25, 19, 20)': "#000000",
  'rgb(0, 0, 0)': "#000000"
};
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
    background-color: #ffbfcc;
    box-sizing: border-box;
    width: ${width}px;
    height: ${height}px;`
  );
}

function applyDivStyleHover(div) {
  let height = Math.floor(width / n)
  oldColor = window.getComputedStyle(div, null).
  getPropertyValue('background-color');
  let randomColor = Math.floor(Math.random() * 16777215).
  toString(16);
  div.setAttribute(
    'style',
    `display: flex;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    box-sizing: border-box;
    background-color: #${randomColor};
    width: ${width}px;
    height: ${height}px;`
  );
}

function applyDivStyleHoverOff(div) {
  let height = Math.floor(width / n)
  let newColor = colorHashSet[oldColor];
  div.setAttribute(
    'style',
    `display: flex;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    background-color: ${newColor};
    box-sizing: border-box;
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
  applyDivStyleHoverOff(e.target);
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

function reset() {
  createGrid(n);
}

sizeSelector.addEventListener('click', changeSize);
resetGrid.addEventListener('click', reset);
