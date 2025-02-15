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


  const navBar = document.getElementById('navBar');

  // Function to toggle the nav bar's visibility and opacity
  function toggleNavBar() {
    if (navBar.style.opacity === '0') {
      // Open the nav bar
      navBar.style.opacity = '1';
      navBar.style.display = 'block';
    } else {
      // Close the nav bar
      navBar.style.opacity = '0';
      setTimeout(() => {
        navBar.style.display = 'none';
      }, 500);
    }
  }
  
  // Add an event listener to the toggle button
  document.getElementById('toggleButton').addEventListener('click', toggleNavBar);
  
