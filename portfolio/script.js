// show a non-blocking toast instead of alert
function showToast(message, time = 2600) {
  let t = document.createElement('div');
  t.className = 'toast';
  t.innerText = message;
  document.body.appendChild(t);
  // allow CSS transitions
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 350);
  }, time);
}

document.addEventListener('DOMContentLoaded', () => {
  showToast("Welcome to Maniksha's Portfolio!");
});