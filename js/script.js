window.onload = function () {
  window.addEventListener('scroll', () => {
    let nav = document.querySelector('nav, .logo');
    nav.classList.toggle('sticky', window.scrollY > 100);
  });

  let phone = document.querySelector('.phone');
  const menuBtn = document.querySelector('.menu-btn');
  const close = document.querySelector('.close-btn');
  let menuOpen = false;
  close.addEventListener('click', () => {
    phone.style.width = '0';
    menuBtn.classList.remove('open');
    menuOpen = false;
  });
  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      phone.style.width = '300px';
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      phone.style.width = '0';
      menuOpen = false;
    }
  });
};
