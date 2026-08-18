// splits a heading's text into letters so each one can animate in with a delay
  function splitLetters(el, startDelay) {
    const text = el.textContent;
    el.textContent = '';
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'letter';
      span.textContent = char;
      span.style.animationDelay = (startDelay + i * 0.04) + 's';
      el.appendChild(span);
    });
  }
  splitLetters(document.getElementById('lineModern'), 0.2);
  splitLetters(document.getElementById('lineHomes'), 1.2);

  // counts each stat up from 0 to its target number
  function animateCount(el, target, duration) {
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      el.textContent = (target === 25 ? '+' : '') + Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  setTimeout(() => {
    animateCount(document.getElementById('stat1'), 25, 1200);
    animateCount(document.getElementById('stat2'), 16, 1200);
    animateCount(document.getElementById('stat3'), 12, 1200);
  }, 1900);