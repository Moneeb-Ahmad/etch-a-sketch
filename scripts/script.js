const container = document.querySelector('.container');
console.log(createGrid(8));

function createGrid(size) {
  let n = size;
  for (let i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.setAttribute(
      'style',
      `display: flex;`
    );
    for (let j = 0; j < n; j++) {
      const div = document.createElement('div');
      applyDivStyleGeneral(div);
      div.classList.add('gridItem');
      div.addEventListener('mouseover', mouseHover);
      div.addEventListener('mouseout', mouseOff);
      row.appendChild(div);
    }
    container.appendChild(row);
  }
}

function applyDivStyleGeneral(div) {
  div.setAttribute(
    'style',
    `border-style: solid;
    border-color: black;
    background-color: pink;
    width: 50px;
    height: 50px;`
  );
}

function applyDivStyleHover(div) {
  div.setAttribute(
    'style',
    `border-style: solid;
    border-color: black;
    background-color: blue;
    width: 50px;
    height: 50px;`
  );
}

function mouseHover(e) {
  applyDivStyleHover(e.target);
}

function mouseOff(e) {
  applyDivStyleGeneral(e.target);
}
