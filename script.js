function createGrid(num) {
  const container = document.querySelector(".container");
  const boxSize = 100 / num + "%";

  for (let i = 0; i < num * num; i++) {
    const gridBox = document.createElement("div");
    gridBox.className = "gridBox";
    gridBox.style.width = boxSize;
    gridBox.style.height = boxSize;

    gridBox.addEventListener("mouseover", function assignColor(e) {
      e.target.style.background = randomColor();
    });

    container.appendChild(gridBox);
  }
}

function createButton() {
  const inputContainer = document.querySelector(".inputBox");
  const button = document.createElement("button");
  button.className = "adjustButton";
  button.textContent = "ADJUST GRID SIZE";

  button.addEventListener("click", function () {
    container = document.querySelector(".container");

    size = prompt("Adjust the size of the grid to?");

    if (size <= 100 && size > 0) {
      container.textContent = "";
      createGrid(size);
    } else {
      alert("Only Input Integer from 1 - 100");
    }
  });

  inputContainer.appendChild(button);
}

function randomColor() {
  let x, y, z;

  x = Math.floor(Math.random() * 256);
  y = Math.floor(Math.random() * 256);
  z = Math.floor(Math.random() * 256);

  return "rgb(" + x + "," + y + "," + z + ")";
}

function newGridSize() {}

createButton();
createGrid(16);
