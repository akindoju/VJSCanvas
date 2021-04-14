const upBtn = document.getElementById('up');
const downBtn = document.getElementById('down');
const leftBtn = document.getElementById('left');
const DownBtn = document.getElementById('right');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const centerObj = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 60,
  movementUnit: 8,
  dy: 0,
  dx: 0,
};

const drawCenterObj = () => {
  ctx.beginPath();
  ctx.arc(centerObj.x, centerObj.y, centerObj.size, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
};

const moveCenterObj = () => {
  centerObj.x += centerObj.dx;
  centerObj.y += centerObj.dy;

  //wall detection
  if (centerObj.x + centerObj.size > canvas.width) {
    centerObj.x = canvas.width - centerObj.size;
  }

  if (centerObj.x - centerObj.size < 0) {
    centerObj.x = centerObj.size;
  }

  if (centerObj.y + centerObj.size > canvas.height) {
    centerObj.y = canvas.height - centerObj.size;
  }

  if (centerObj.y - centerObj.size < 0) {
    centerObj.y = centerObj.size;
  }
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCenterObj();
};

const update = () => {
  moveCenterObj();

  draw();

  requestAnimationFrame(update);
};

update();

const keyDown = (event) => {
  if (event.keyCode == '39') {
    centerObj.dx = centerObj.movementUnit;
    //right
  } else if (event.keyCode == '37') {
    centerObj.dx = -centerObj.movementUnit;
    //left
  } else if (event.keyCode == '38') {
    centerObj.dy = -centerObj.movementUnit;
    //up
  } else if (event.keyCode == '40') {
    centerObj.dy = centerObj.movementUnit;
    //dowm
  }
};

const keyUp = (event) => {
  if (event.keyCode == '39' || event.keyCode == '37') {
    centerObj.dx = 0;
  } else if (event.keyCode == '40' || event.keyCode == '38') {
    centerObj.dy = 0;
  }
};

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

rightBtn.addEventListener('click', () => {
  centerObj.dx = centerObj.movementUnit;
  console.log(centerObj.dx);
});
