import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class RevealOnScroll {
  constructor (elements, thresholdPercent) {
    this.itemsToReveal = elements //selects node list
    this.thresholdPercent = thresholdPercent
    this.browserHeight = window.innerHeight //how tall the browser window is 
    this.hideInitially() // maps through node list and adds a class 
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this) // sets up throttling function
    this.events() //creates event listener
  }

  hideInitially () {
    this.itemsToReveal.forEach(el => {
      el.classList.add('reveal-item')
      el.isRevealed = false
    })
    this.itemsToReveal[this.itemsToReveal.length -1].isLastItem = true 
  }

  events () {
    window.addEventListener("scroll", this.scrollThrottle)
    window.addEventListener("resize", debounce(() => {
      console.log('Resize just ran')
      this.browserHeight = window.innerHeight
    }, 333))
  }

  calcCaller () {
    this.itemsToReveal.forEach(el => {
      if (!el.isRevealed) {
        this.calculateIfScrolledTo(el)
      } 
    })
  }

  calculateIfScrolledTo (el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      console.log('ELement was calculated')
      let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100
      if (scrollPercent < this.thresholdPercent) {
        el.classList.add('reveal-item--is-visible')
        el.isRevealed = true
        if (el.isLastItem) {
          window.removeEventListener('scroll', this.scrollThrottle)
          // window.removeEventListener('resize', )
        }
      }
    }   

  }

}

export default RevealOnScroll; 