let startTime;

function move() {
  const left = Math.random() * 300;
  const top = Math.random() * 300;
  const wh = (Math.random() * 100) + 100;

  const box = document.getElementById("box");
  box.style.left = left + "px";
  box.style.top = top + "px";
  box.style.width = wh + "px";
  box.style.height = wh + "px";
  box.style.display = "block";
  box.style.backgroundColor = getRandomColor();

  startTime = new Date().getTime();
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("start-btn").addEventListener("click", function () {
  move();
});

document.getElementById("box").onclick = function () {
  document.getElementById("box").style.display = "none";
  const endTime = new Date().getTime();
  const timeTaken = (endTime - startTime) / 1000;

  document.getElementById("reaction-time").textContent =
    "Your reaction time: " + timeTaken.toFixed(3) + " seconds";

  move(); // Start next round automatically
};
