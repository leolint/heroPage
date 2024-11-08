function changeSlides() {
    const images = document.querySelectorAll('.slider img');
    const buttonPrev = document.querySelector('.button-prev');
    const buttonNext = document.querySelector('.button-next');
    const wrapper = document.querySelector('.slider');
    const totalSlides = images.length;
    const slideWidth = images[1].offsetWidth;
    let counter = 0;
    console.log(slideWidth);

    buttonNext.addEventListener('click', function () {
        if (counter < totalSlides - 1) {
            counter++;
            wrapper.style.transform = `translateX(-${counter * slideWidth}px)`;
        } else {
            wrapper.style.transform = `translateX(0px)`;
            counter = 0;
        }
    });

    buttonPrev.addEventListener('click', function () {
        if (counter > 0) {
            counter--;
            wrapper.style.transform = `translateX(-${counter * slideWidth}px)`;
        } else {
            counter = totalSlides - 1;
            wrapper.style.transform = `translateX(-${counter * slideWidth}px)`;
        }
    });

    
}

changeSlides();


function openMenu() {
    const openButton = document.querySelector('.header_wrapper-button')
    const closeButton = document.querySelector('.asideMenu_wrapper-button')
    const wrapper = document.getElementById('aside')
    const asideMenuLinks = document.querySelectorAll('.asideMenu_wrapper-nav li')
    console.log(asideMenuLinks);
   

    if (wrapper) {
        openButton.addEventListener('click', function () {
            wrapper.classList.add('open')
        })
    }

    closeButton.addEventListener('click', function () {
        wrapper.classList.remove('open')
    })

    asideMenuLinks.forEach(link => {
        link.addEventListener('click' , function() {
            wrapper.classList.remove('open')
        })
    })

}

openMenu()


