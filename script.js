let aside = document.querySelector('aside');
let navLink = document.querySelectorAll('aside .main-menu a');
let toggleAside = document.querySelector('.toggle-aside');

toggleAside.addEventListener('click', () => {
  aside.classList.toggle('close');
  toggleAside.classList.toggle('close');

  navLink.forEach((link) => {
    link.classList.remove('active');
  });
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    aside.classList.remove('close');
    toggleAside.classList.remove('close');
    link.classList.toggle('active');
  });
});
