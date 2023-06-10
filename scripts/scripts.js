const navLinkEls = document. querySelectorA11('.nav-link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl=>{
    if (navLinkEl.href.includes (windowPathname)) {
    navLinkEl.classList.add('active');
    }
});  