const upBtn = document.getElementById('up');
const downBtn = document.getElementById('down');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const centerBtn = document.getElementById('center');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//initial ball params
const centerObj = {
  x: canvas.width / 2, //position on horizontal axis
  y: canvas.height / 2, //position on vertical axis
  size: 60,
  movementUnit: 8,
  dy: 0, //automatic movement position on vertical axis
  dx: 0, //automatic movement position on horizontal axis
};

const drawCenterObj = () => {
  ctx.beginPath();
  ctx.arc(centerObj.x, centerObj.y, centerObj.size, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
};

const moveCenterObj = () => {
  centerObj.x += centerObj.dx; //centerOnj.x = centerObj.x + centerObj.dx
  centerObj.y += centerObj.dy;

  //wall detection

  //ball bounce
  if (
    centerObj.x + centerObj.size > canvas.width ||
    centerObj.x - centerObj.size < 0
  ) {
    centerObj.dx *= -1; //bouce back, if = 0, ball stops at canvas sides
  }

  if (
    centerObj.y + centerObj.size > canvas.height ||
    centerObj.y - centerObj.size < 0
  ) {
    centerObj.dy *= -1;
  }

  //ball stop
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

// keyboard buttons

// const keyDown = (event) => {
//   if (event.keyCode == '39') {
//     centerObj.dx = centerObj.movementUnit;
//     //bouncing off
//     if (
//       centerObj.x + centerObj.size > canvas.width ||
//       centerObj.x - centerObj.size < 0
//     ) {
//       centerObj.dx *= -1;
//     }
//     //right
//   } else if (event.keyCode == '37') {
//     centerObj.dx = -centerObj.movementUnit;
//     if (
//       centerObj.x + centerObj.size > canvas.width ||
//       centerObj.x - centerObj.size < 0
//     ) {
//       centerObj.dx *= -1;
//     }
//     //left
//   } else if (event.keyCode == '38') {
//     centerObj.dy = -centerObj.movementUnit;
//     if (
//       centerObj.y + centerObj.size > canvas.height ||
//       centerObj.y - centerObj.size < 0
//     ) {
//       centerObj.dy *= -1;
//     }
//     //up
//   } else if (event.keyCode == '40') {
//     centerObj.dy = centerObj.movementUnit;
//     if (
//       centerObj.y + centerObj.size > canvas.height ||
//       centerObj.y - centerObj.size < 0
//     ) {
//       centerObj.dy *= -1;
//     }
//     //dowm
//   }
// };

// const keyUp = (event) => {
//   if (event.keyCode == '39' || event.keyCode == '37') {
//     centerObj.dx = 0;
//   } else if (event.keyCode == '40' || event.keyCode == '38') {
//     centerObj.dy = 0;
//   }
// };

// document.addEventListener('keydown', keyDown);
// document.addEventListener('keyup', keyUp);

//continuous movement means removing mouseUp and mouseLeave event listeners

rightBtn.addEventListener('mousedown', () => {
  centerObj.dx = centerObj.movementUnit;
});

// rightBtn.addEventListener('mouseup', () => {
//   centerObj.dx = 0;
// });

// rightBtn.addEventListener('mouseleave', () => {
//   centerObj.dx = 0;
// });

leftBtn.addEventListener('mousedown', () => {
  centerObj.dx = -centerObj.movementUnit;
});

// leftBtn.addEventListener('mouseup', () => {
//   centerObj.dx = 0;
// });

// leftBtn.addEventListener('mouseleave', () => {
//   centerObj.dx = 0;
// });

upBtn.addEventListener('mousedown', () => {
  centerObj.dy = -centerObj.movementUnit;
});

// upBtn.addEventListener('mouseup', () => {
//   centerObj.dy = 0;
// });

// upBtn.addEventListener('mouseleave', () => {
//   centerObj.dy = 0;
// });

downBtn.addEventListener('mousedown', () => {
  centerObj.dy = centerObj.movementUnit;
});

// downBtn.addEventListener('mouseup', () => {
//   centerObj.dy = 0;
// });

// downBtn.addEventListener('mouseleave', () => {
//   centerObj.dy = 0;
// });

//move ball back to center
centerBtn.addEventListener('click', () => {
  {
    centerObj.dy = 0;
    centerObj.dx = 0;
    centerObj.x = canvas.width / 2;
    centerObj.y = canvas.height / 2;
  }
});
