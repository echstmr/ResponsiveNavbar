const navBar = document.getElementById("navBar");
const menuIcon = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('#navLinks ul li');

window.addEventListener('scroll', () => {

    if(window.scrollY > 100){
        navBar.classList.add('active');
    }else{
        navBar.classList.remove('active');
    }
})


menuIcon.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
})


document.addEventListener('click', (e) => {
    if (!navBar.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        navItems.forEach((el) => el.classList.remove('active'));
        item.classList.add('active'); 
    });
});