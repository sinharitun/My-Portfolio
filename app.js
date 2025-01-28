var typeData = new Typed(".role", {
    strings: [
    "Software Developer",

    "Android Developer",

    "Frontend Developer",

    "Coder",

    ],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    

});

let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');
        let slider = document.querySelector('.slider');

        next.addEventListener('click' , function(){
            let slides = document.querySelectorAll('.slides');
            slider.appendChild(slides[0]);
        })

        prev.addEventListener('click' , function(){
            let slides = document.querySelectorAll('.slides');
            slider.prepend(slides[slides.length -1]);
        });