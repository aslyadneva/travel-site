import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

import '../styles/styles.css'

let stickyHeader = new StickyHeader()
const mobileMenu = new MobileMenu()

new RevealOnScroll(document.querySelectorAll('.feature-item'), 75); 
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60); 








if (module.hot) {
  module.hot.accept()
}

