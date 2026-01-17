// Select the menu button and navigation menu
const menuButton = document.querySelector('#menuButton');
const navMenu = document.querySelector('#navMenu');

// Add event listener to the button
menuButton.addEventListener('click', () => {
    // Toggle the 'open' class on the nav menu
    navMenu.classList.toggle('open');

    // Toggle the 'close' class on the button itself
    menuButton.classList.toggle('close');

    // Change button text depending on state
    if (navMenu.classList.contains('open')) {
        menuButton.textContent = '✖'; // close icon
    } else {
        menuButton.textContent = '≡'; // hamburger icon
    }
});