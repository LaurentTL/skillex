import Carousel from "./js/carroussel";

let carouselElement = document.querySelector('.slider')
let btnRight = document.querySelector('right')
let btnLeft = document.querySelector('left')

let carousel = new Carousel(carouselElement, btnLeft, btnRight)