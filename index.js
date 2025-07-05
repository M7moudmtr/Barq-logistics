// Toggle mobile nav menu
function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}
// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.className = 'scroll-to-top';
document.body.appendChild(scrollBtn);

window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Track form submission
document.addEventListener('DOMContentLoaded', () => {
  const trackForm = document.querySelector('.tracking-form');
  if (trackForm) {
    trackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = trackForm.querySelector('input').value;
      if (input.trim() !== '') {
        alert(`Tracking shipment: ${input}`);
        trackForm.reset();
      } else {
        alert('Please enter a tracking number.');
      }
    });
  }
});
