// Canvas-Zeichnung und Auto-Icons
export function drawLevel(x, y) {
  const canvas = document.getElementById('levelCanvas');
  let size = Math.max(60, Math.min(canvas.parentElement.offsetWidth, 300)); // Mindestgröße 60
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const radius = Math.max(10, size/2-10); // Radius nie negativ
  ctx.beginPath();
  ctx.arc(size/2, size/2, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.font = `${Math.round(size/18)}px Arial`;
  ctx.fillStyle = '#333';
  ctx.fillText('-30°', 10, size/2);
  ctx.fillText('+30°', size-50, size/2);
  ctx.fillText('0°', size/2-10, size-10);
  ctx.beginPath();
  ctx.arc(size/2, size/2, Math.max(2, size/20), 0, 2 * Math.PI); // Mindest-Radius 2
  ctx.fillStyle = '#bbb';
  ctx.fill();
  ctx.strokeStyle = '#888';
  ctx.lineWidth = 2;
  ctx.stroke();
  x = Math.max(-30, Math.min(30, x));
  y = Math.max(-30, Math.min(30, y));
  const bubbleX = size/2 + (x * (radius-20) / 30);
  const bubbleY = size/2 + (y * (radius-20) / 30);
  ctx.beginPath();
  ctx.arc(bubbleX, bubbleY, Math.max(2, size/12), 0, 2 * Math.PI); // Mindest-Radius 2
  ctx.fillStyle = '#4fc3f7';
  ctx.fill();
  ctx.strokeStyle = '#1976d2';
  ctx.lineWidth = 2;
  ctx.stroke();
}

let carLRImg = null;
export function drawCarLR(angle) {
  const canvas = document.getElementById('carLR');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.translate(50,40);
  ctx.rotate(-angle * Math.PI / 180);
  if (!carLRImg) {
    carLRImg = new Image();
    carLRImg.src = 'frontansicht.png';
    carLRImg.onload = function() {
      // Erst beim nächsten Intervall zeichnen
    };
    ctx.restore();
    return;
  }
  if (carLRImg.complete) {
    ctx.drawImage(carLRImg, -50, -40, 100, 80);
  }
  ctx.restore();
}

let carVHImg = null;
export function drawCarVH(angle) {
  const canvas = document.getElementById('carVHimg');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.translate(50,40);
  ctx.rotate(-angle * Math.PI / 180);
  if (!carVHImg) {
    carVHImg = new Image();
    carVHImg.src = 'seitenansicht.png';
    carVHImg.onload = function() {
      // Erst beim nächsten Intervall zeichnen
    };
    ctx.restore();
    return;
  }
  if (carVHImg.complete) {
    ctx.drawImage(carVHImg, -50, -40, 100, 80);
  }
  ctx.restore();
}
