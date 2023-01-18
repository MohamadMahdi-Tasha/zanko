// Codes By Mahdi Tasha
// Variables
const mobileNavToggler = document.getElementById('mobile-nav-toggler');
const mobileNavBg = document.getElementById('mobile-nav-bg');
const mobileNavHolder = document.getElementById('mobile-nav-holder');

// A Function That Toggles 'opened' Attribute On mobile nav holder
const toggleOpenedOnMobileNavHolder = () => {mobileNavHolder.toggleAttribute('opened')};

// Adding Event Listener On Mobile Nav Toggler And Its Background To Call 'toggleOpenedOnMobileNavHolder' Function
mobileNavToggler.addEventListener('click', toggleOpenedOnMobileNavHolder)
mobileNavBg.addEventListener('click', toggleOpenedOnMobileNavHolder)
