// make the hamburger menu BETTER with JS
     // on click slide in the menu
          // change the burger icon to a close icon
          // <i class="fas fa-times"></i>
     // on click outside the menu, close the menu

const burgerMenu = document.querySelector('.fa-bars');

const navMenu = document.querySelector('.nav-links')
     
console.log(navMenu)

burgerMenu.addEventListener('click', function() {
     // console.log('did it work');
     toggleMenuIcon(event.target);
});

function toggleMenuIcon(menuIcon) {
     menuIcon.classList.toggle('fa-bars');
     menuIcon.classList.toggle('fa-times');
};