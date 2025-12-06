document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('nav .nav-links-wrapper').classList.toggle('expanded');
});

document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');
  if(card) card.classList.add('loaded');
});

