document.getElementById('waxSeal').addEventListener('click', function() {
  const envelope = document.getElementById('envelope');
  const waxSeal = document.getElementById('waxSeal');
  const envelopeScene = document.getElementById('envelopeScene');
  const invitationContent = document.getElementById('invitationContent');
  
  // 1. إخفاء الختم الشمعي
  waxSeal.style.opacity = '0';
  
  // 2. فتح غطاء المظروف وبروز البطاقة
  setTimeout(() => {
    envelope.classList.add('open');
  }, 300);

  // 3. الانتقال للمشهد الثاني (تفاصيل الدعوة والفيديو)
  setTimeout(() => {
    envelopeScene.style.display = 'none';
    invitationContent.classList.remove('hidden');
    
    // تشغيل الصوت والفيديو تلقائياً
    var music = document.getElementById('bg-music');
    if (music && music.src) {
      music.play().catch(e => console.log("Audio block"));
    }
  }, 1600);
});

// برمجة تأثير الكشط للكروت
document.querySelectorAll('.scratch-card').forEach(card => {
  const canvas = card.querySelector('.scratch-canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = card.offsetWidth;
  canvas.height = card.offsetHeight;

  ctx.fillStyle = '#b3cdd1';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let isDrawing = false;

  function scratch(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 16, 0, Math.PI * 2);
    ctx.fill();
  }

  canvas.addEventListener('mousedown', () => isDrawing = true);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mousemove', scratch);

  canvas.addEventListener('touchstart', () => isDrawing = true);
  canvas.addEventListener('touchend', () => isDrawing = false);
  canvas.addEventListener('touchmove', scratch);
});
