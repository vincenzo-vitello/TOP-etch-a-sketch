const gridContainer = document.getElementById("container");
const newGridBtn = document.getElementById("new-grid-btn");
const resetBtn = document.getElementById("reset-btn");

const colorsArr = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFF5",
  "#F5FF33",
  "#FF8C33",
  "#33FF8C",
  "#8C33FF",
  "#FFC300",
  "#DAF7A6",
  "#FF5733",
  "#C70039",
  "#900C3F",
  "#581845",
  "#3498DB",
  "#2ECC71",
  "#F1C40F",
  "#E74C3C",
  "#9B59B6",
  "#34495E",
  "#16A085",
  "#27AE60",
  "#2980B9",
  "#8E44AD",
  "#2C3E50",
  "#F39C12",
  "#D35400",
  "#C0392B",
];
const getRandomColor = () => {
  let color = "";
  color = colorsArr[Math.floor(Math.random() * colorsArr.length) + 1];
  return color;
};
getRandomColor();
const generateGrid = (size = 16) => {
  gridContainer.innerHTML = "";
  gridContainer.style.cssText = `display: grid; grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr); gap: 5px;`;
  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.style.cssText = "background-color: cadetblue;";
    box.addEventListener("mouseenter", (e) => {
      changeBoxColor(e);
    });
    gridContainer.appendChild(box);
  }
};
window.addEventListener("load", () => {
  generateGrid();
});

const changeBoxColor = (e) => {
  e.target.style.backgroundColor = getRandomColor();
};
newGridBtn.onclick = () => {
  const userInput = parseInt(
    prompt("How many cols and rows do you want?", "16")
  );
  if (userInput > 0 && userInput < 80) generateGrid(userInput);
};
resetBtn.onclick = () => {
  generateGrid();
};
