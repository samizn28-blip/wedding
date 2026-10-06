// 1. فتح المظروف والانتقال للمشهد الرئيسي
document.getElementById('waxSeal').addEventListener('click', function() {
  const envelope = document.getElementById('envelope');
  const waxSeal = document.getElementById('waxSeal');
  const envelopeScene = document.getElementById('envelopeScene');
  const invitationContent = document.getElementById('invitationContent');
  const musicBtn = document.getElementById('music-toggle');
  const music = document.getElementById('bg-music');

  waxSeal.style.opacity = '0';
  
  setTimeout(() => {
    envelope.classList.add('open');
  }, 300);

  setTimeout(() => {
    envelopeScene.style.display = 'none';
    invitationContent.classList.remove('hidden');
    musicBtn.classList.remove('hidden');

    // تشغيل الموسيقى تلقائياً
    if (music && music.src) {
      music.play().catch(e => console.log("Audio autoplay restricted"));
    }
  }, 1400);
});

// 2. التحكم في إيقاف/تشغيل الموسيقى
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');
const musicIcon = document.getElementById('music-icon');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicIcon.textContent = '⏸';
  } else {
    music.pause();
    musicIcon.textContent = '▶';
  }
});

// 3. العداد التنازلي Countdown
const targetDate = new Date("May 20, 2027 16:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
  }
}, 1000);
