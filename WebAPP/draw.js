// Canvas-Zeichnung und Auto-Icons
export function drawLevel(x, y) {
  const canvas = document.getElementById('levelCanvas');
  let size = Math.min(canvas.parentElement.offsetWidth, 300);
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(size/2, size/2, size/2-10, 0, 2 * Math.PI);
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.font = `${Math.round(size/18)}px Arial`;
  ctx.fillStyle = '#333';
  ctx.fillText('-30°', 10, size/2);
  ctx.fillText('+30°', size-50, size/2);
  ctx.fillText('0°', size/2-10, size-10);
  ctx.beginPath();
  ctx.arc(size/2, size/2, size/20, 0, 2 * Math.PI);
  ctx.fillStyle = '#bbb';
  ctx.fill();
  ctx.strokeStyle = '#888';
  ctx.lineWidth = 2;
  ctx.stroke();
  x = Math.max(-30, Math.min(30, x));
  y = Math.max(-30, Math.min(30, y));
  const bubbleX = size/2 + (x * (size/2-30) / 30);
  const bubbleY = size/2 + (y * (size/2-30) / 30);
  ctx.beginPath();
  ctx.arc(bubbleX, bubbleY, size/12, 0, 2 * Math.PI);
  ctx.fillStyle = '#4fc3f7';
  ctx.fill();
  ctx.strokeStyle = '#1976d2';
  ctx.lineWidth = 2;
  ctx.stroke();
}

export function drawCarLR(angle) {
  const canvas = document.getElementById('carLR');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  ctx.translate(30,30);
  ctx.rotate(-angle * Math.PI / 180);
  ctx.fillStyle = '#1976d2';
  ctx.fillRect(-18,-13,8,6);
  ctx.fillRect(10,-13,8,6);
  ctx.fillRect(-18,7,8,6);
  ctx.fillRect(10,7,8,6);
  ctx.restore();
}

export function drawCarVH(angle) {
  const canvas = document.getElementById('carVHimg');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  ctx.translate(30,30);
  ctx.rotate(-angle * Math.PI / 180);
  const img = new Image();
  img.src = 'seitenansicht.png';
  img.onload = function() {
    ctx.drawImage(img, -25, -20, 50, 40);
    ctx.restore();
  };
}
