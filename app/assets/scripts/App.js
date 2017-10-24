import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import Modal from './modules/Modal';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
var modal = new Modal();
new RevealOnScroll($(".future__content-container"), "70%");
var stickyHeader = new StickyHeader();