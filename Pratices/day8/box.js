const music = document.getElementById('bgMusic');

// Try to autoplay immediately
music.play().catch(() => {
  // If blocked by browser, start on the very first user interaction
  const startMusic = () => {
    music.play();
    document.removeEventListener('click', startMusic);
    document.removeEventListener('touchstart', startMusic);
    document.removeEventListener('keydown', startMusic);
  };
  document.addEventListener('click', startMusic);
  document.addEventListener('touchstart', startMusic);
  document.addEventListener('keydown', startMusic);
});