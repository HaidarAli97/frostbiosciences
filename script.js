document.addEventListener('DOMContentLoaded', function () {
    let revealEls = document.querySelectorAll('.reveal');
    let revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) {
        revealObserver.observe(el);
    });

    let hamburger = document.querySelector('.hamburger');
    let menuCon = document.querySelector('.menu-con');
    if (hamburger && menuCon) {
        hamburger.addEventListener('click', function () {
            menuCon.classList.toggle('open');
            hamburger.classList.toggle('active');
        });

        menuCon.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menuCon.classList.remove('open');
                hamburger.classList.remove('active');
            });
        });
    }
});