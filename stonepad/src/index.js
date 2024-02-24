let container = document.createElement("div");
container.className = "container";
let box = document.getElementsByClassName("box");

for (let i = 0; i < 256; i++) {
  container.innerHTML += `<div onmouseover="mouseOver(this)" class="box"></div>`;
}
function mouseOver(x) {
  x.style.backgroundColor = "black";
}
document.body.appendChild(container);
