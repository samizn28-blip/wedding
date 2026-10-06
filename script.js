// فتح المظروف وتشغيل الصوت
document.getElementById('waxSeal').addEventListener('click', function() {
  document.getElementById('envelopeSection').style.display = 'none';
  document.getElementById('invitationContent').classList.remove('hidden');
  
  var music = document.getElementById('bg-music');
  if(music) music.play();
});

// برمجة تأثير الكشط على الـ Canvas
document.querySelectorAll('.scratch-card').forEach(card => {
  const canvas = card.querySelector('.scratch-canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = card.offsetWidth;
  canvas.height = card.offsetHeight;

  // رسم طبقة الكشط الزرقاء/الفضية
  ctx.fillStyle = '#b3cdd1';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let isDrawing = false;

  function scratch(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();
  }

  canvas.addEventListener('mousedown', () => isDrawing = true);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mousemove', scratch);

  canvas.addEventListener('touchstart', () => isDrawing = true);
  canvas.addEventListener('touchend', () => isDrawing = false);
  canvas.addEventListener('touchmove', scratch);
});