/*------- TOGGLE ICON NAVBAR --------*/


let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*------- SCROLL SECTION ACTIVE LINK --------*/

let sections = document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href^=' + id + ']').classList.add('active');
            });
        };
    });

    /*------- STICKY NAVBAR --------*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*------- REMOVE TOGGLE ICON AND NAVBAR --------*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*----------------- SCROLL REVEAL ------------------*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
}
);

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .project-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.about-img', { origin: 'left' });
 ScrollReveal().reveal('.about-content', { origin:'right' });

/*----------------- TYPED JS ------------------*/


var typing = new Typed(".typedText", 
    {
    strings: ["Software Engineer","Front End Developer","Web Designer"],
    
    loop: true,
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 100
}
);


