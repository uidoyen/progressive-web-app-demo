(function() {
  const header = document.querySelector('header');
  const menu = document.querySelector('.header__hamburger');
  const nav = document.querySelector('.nav');
  const nav__overlay = document.querySelector('.nav__overlay');
  const addToHome = document.querySelector('.addToHome');
  const addBtn = document.querySelector('.btn__addToHome');
  const closeBtn = document.querySelector('.addToHome__close');

  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', function(e) {
    console.log('beforeinstallprompt');
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
  });

  addBtn.addEventListener('click', e => {
    // hide our user interface that shows our A2HS button
    addToHome.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });

  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    addToHome.style.display = 'none';
  });

  const stickyHeader = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      header.className = 'header sticky';
    } else {
      header.className = 'header';
    }
  };

  const toggleMenu = () => {
    if (menu.className === 'header__hamburger') {
      menu.className = 'header__hamburger header__hamburger--show';
      nav.className = 'nav nav--show';
      nav__overlay.className = 'nav__overlay nav__overlay--show';
    } else {
      menu.className = 'header__hamburger';
      nav.className = 'nav';
      nav__overlay.className = 'nav__overlay';
    }
  };

  menu.addEventListener('click', toggleMenu);
  window.addEventListener('scroll', stickyHeader);
})();
