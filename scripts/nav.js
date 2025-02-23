function toggleMenu(icon) {
    icon.classList.toggle('active');
      const navBar = document.querySelector('.navBar');
    navBar.classList.toggle('show');
    navBar.style.transition = 'opacity 1s';
    navBar.style.opacity = 0.1;


  navBar.style.transition = 'opacity 2s';
  
  // Set the opacity to 0
  navBar.style.opacity = 0;
  
  // Set the opacity to 1 after a delay
  setTimeout(() => {
    navBar.style.opacity = 1;
  }, 0);


  };


  