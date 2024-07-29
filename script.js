// Variables and querySelectors
const heading = document.querySelector('#specialities>h1').textContent;
const service = document.querySelectorAll('.service');

// Function definition
function navAnim() {
    gsap.from(".nav-links li", {
        opacity: 0,
        y: 0,
        scale: 1.1,
        rotate: -360,
        duration: 1.1,
        delay: 0.2,
        ease: Power4.easeInOut,
    })
    gsap.from(".logo", {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: Power4.easeInOut,
    })
}

function heroAnimation () {
    gsap.from("#text-content", {
        opacity: 0,
        y: -150,
        duration: 1.5,
        ease: Power4.easeInOut,
    })
    gsap.from("#image img", {
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        scale: 1.5,
        ease: Power4.easeInOut,
        rotate: 180,
    })
}

function headingAnimation() {
    let clutter = ""
    let splittedHeading = heading.split("")
    splittedHeading.forEach(function (elem) {
        clutter += `<span>${elem}</span>`
    })
    document.querySelector('#specialities>h1').innerHTML = clutter

    gsap.to("#specialities h1 span", {
        color: "red",
        duration: 1.5,
        stagger: 0.2,
        ease: Cubic.easeInOut,
        scrollTrigger : {
            trigger: "#specialities h1",
            scroller: "body",
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
            backgroundColor: "red",
        },
    })

}

function aboutAnimation () {
    gsap.from(".about-content img", {
        x: "100%",
        duration: 1.5,
        opacity: 0,
        ease: Cubic.easeInOut,
        scrollTrigger : {
            trigger: ".about-content",
            scroller: "body",
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
        }
    })
    gsap.from(".about-content div", {
        x: "-100%",
        duration: 1.5,
        opacity: 0,
        ease: Cubic.easeInOut,
        scrollTrigger : {
            trigger: ".about-content",
            scroller: "body",
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
        }
    })
}

function servicesAnimation () {
    service.forEach(function (elem) {
        gsap.from(elem, {
            opacity: 0,
            duration: 1.5,
            ease: Power2.easeInOut,
            scrollTrigger : {
                trigger: elem,
                scroller: "body",
                start: "top 80%",
                end: "top bottom",
                scrub: 2
            }
        })
    })
}

// Event Listener

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});

// Function Calling 
navAnim()

headingAnimation()

heroAnimation()

aboutAnimation()

servicesAnimation()
