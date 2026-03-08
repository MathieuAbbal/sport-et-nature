// --- Menu Burger ---
document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector('.nav-links').classList.remove('open');
    });
});

// --- Scroll to top + bouton appeler ---
var scrollBtn = document.getElementById('scroll-top');
var callBtn = document.querySelector('.btn-call');

window.addEventListener('scroll', function () {
    var nearBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200);

    if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }

    if (callBtn) {
        if (nearBottom) {
            callBtn.classList.add('visible');
        } else {
            callBtn.classList.remove('visible');
        }
    }
});

scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Fade in on scroll ---
var fadeElements = document.querySelectorAll('.fade-in');

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

fadeElements.forEach(function (el) {
    observer.observe(el);
});
