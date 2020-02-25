/*let menuBtn = document.querySelector('#menu-icon');
let mainMenu = document.querySelector('#menu');
let closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', function() {
  mainMenu.style.height = "100%";
  mainMenu.style.opacity = "0.95";
  closeBtn.style.visibility = "visible";
  closeBtn.style.opacity = "1";
})

closeBtn.addEventListener('click', function() {
  mainMenu.style.height = "0";
  mainMenu.style.opacity = "0";
  closeBtn.style.opacity = "0";
  closeBtn.style.visibility = "hidden";
})*/

anime({
  targets: '.craggz-alt',
  opacity: [
    /*{ value: 0, duration: 1000 },*/
    //{ value: 0.5, duration: 500 },
    { value: 1, duration: 1000 },
    { value: 0.7, duration: 100 }
  ],
  delay: function(el, i, l){return i * 1100},
  loop: true,
  autoplay: true,
  ease: 'easeInOutSine'
});

anime({
  targets: '.logos',
  opacity: [
    /*{ value: 0, duration: 1000 },*/
    //{ value: 0.5, duration: 500 },
    { value: 1, duration: 3000 },
    { value: 0.7, duration: 500 }
  ],
  delay: function(el, i, l){return i * 3000},
  loop: true,
  autoplay: true,
  ease: 'easeInOutSine'
});

anime({
  targets: '.various',
  opacity: [
    { value: 1, duration: 3000 },
    { value: 0, duration: 500 }
  ],
  delay: function(el, i, l){return i * 3000},
  loop: true,
  autoplay: true,
  ease: 'easeInOutSine'
});


//play video on Safari browser

document.getElementById('.walkthrough').play();