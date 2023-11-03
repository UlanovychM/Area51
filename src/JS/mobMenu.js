const mobMenu = () => {
  const mobileMenu = document.querySelector('.mobile__menu');

  console.log(mobileMenu);

  const burgerButton = document.querySelector('.burger__button');

  console.log(burgerButton);

  const closeButton = document.querySelector('.mobile__button__close');
  console.log(closeButton);

  function openMenu() {
    mobileMenu.classList.toggle('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  burgerButton.addEventListener('click', openMenu);

  closeButton.addEventListener('click', closeMenu);
};

export default mobMenu;
