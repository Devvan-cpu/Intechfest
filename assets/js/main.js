/*===== START MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')
/*===== END MENU SHOW ===== */
/*===== START ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    /*Active Link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    /*Remove Menu Mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
/*===== END ACTIVE AND REMOVE MENU  */
/* ===== START SCROLL UP ===== */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)
/* ===== END SCROLL UP ===== */