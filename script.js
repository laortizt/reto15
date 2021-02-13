const body = document.body
const slides = document.querySelectorAll('.slide') //se agrego .slide
const leftBtn = document.getElementById('left') //se agrego left
const rightBtn = document.getElementById('right') //se agrego right

let activeSlide = 0 //se agrega 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) { //se agrega 1
    activeSlide = 0 //se agrega 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) { //0
    activeSlide = slides.length - 1 //1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage //sea grega activeSlide
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))//aqui

  slides[activeSlide].classList.add('active')
}