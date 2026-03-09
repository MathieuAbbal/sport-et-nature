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

// --- Lightbox (agrandissement photo) ---
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var currentGallery = [];
var currentIndex = 0;

document.querySelectorAll('.photo-gallery img').forEach(function (img) {
    img.addEventListener('click', function () {
        var gallery = this.closest('.photo-gallery');
        currentGallery = Array.from(gallery.querySelectorAll('img'));
        currentIndex = currentGallery.indexOf(this);
        lightboxImg.src = this.src;
        lightbox.classList.add('active');
    });
});

document.getElementById('lightbox-prev').addEventListener('click', function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    lightboxImg.src = currentGallery[currentIndex].src;
});

document.getElementById('lightbox-next').addEventListener('click', function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % currentGallery.length;
    lightboxImg.src = currentGallery[currentIndex].src;
});

document.querySelector('.lightbox-content').addEventListener('click', function (e) {
    e.stopPropagation();
});

document.getElementById('lightbox-close').addEventListener('click', function () {
    lightbox.classList.remove('active');
});

// Fermeture uniquement via le bouton close (×)

// --- Bouton galerie marquage (ouvre lightbox directement) ---
document.getElementById('btn-marquage').addEventListener('click', function (e) {
    e.preventDefault();
    var hiddenGallery = document.getElementById('gallery-marquage');
    currentGallery = Array.from(hiddenGallery.querySelectorAll('img'));
    currentIndex = 0;
    lightboxImg.src = currentGallery[0].src;
    lightbox.classList.add('active');
});
