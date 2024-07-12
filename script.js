function createGrid() {
  const container = document.querySelector(".container");
  container.className = "container";
  let div;

  // creating 16x16 grid
  for (let i = 0; i < 256; i++) {
    div = document.createElement("div");
    div.className = "divBox";

    loop = div.getElementsByClassName(".divBox");

    div.addEventListener("mouseover", function assignColor() {
      div.style.background = get_random_color2();
      console.log("working");
    });

    container.appendChild(div);
  }

  // have color when hovered
}
//get random color
function get_random_color2() {
  var r = function () {
    return Math.floor(Math.random() * 256);
  };

  return "rgb(" + r() + "," + r() + "," + r() + ")";
}
