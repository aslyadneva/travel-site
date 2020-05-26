import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

import 'lazysizes'
import '../styles/styles.css'

new StickyHeader()
new MobileMenu()
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75); 
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60); 
let modal 


// ONLY DOWNLOADING THE MODAL BUNDLE IF USER CLICKS 'GET IN TOUCH' --- CODE SPLITTING 
document.querySelectorAll('.open-moodal').forEach(btn => btn.addEventListener('click', event => {
  event.preventDefault()

  if (typeof modal === 'undefined') {
    import(/* webpackChunkName: "modal" */'./modules/Modal') // this returns a promise 
    .then(file => {
      modal = new file.default()
      setTimeout(() => modal.openModal(), 20)
    }) 
    .catch(() => console.log('There was a problem'))
  } else {
    modal.openModal()
  }
  
}))




if (module.hot) {
  module.hot.accept()
}

