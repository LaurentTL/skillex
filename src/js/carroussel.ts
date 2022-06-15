export default class Carousel {

    slider: HTMLElement
    btnLeft: HTMLElement
    btnRight: HTMLElement
    items: HTMLElement[]

    constructor(slider, btnLeft, btnRight) {
        this.slider = slider
        this.items = slider.children
        this.btnLeft = btnLeft
        this.btnRight = btnRight
        console.log(slider.children)
    }

    next(): void {

    }

    prev(): void {

    }
}