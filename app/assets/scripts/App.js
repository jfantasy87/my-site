import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import Modal from './modules/Modal';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new Modal($(".modal"), $(".open-modal"), $(".modal__close"));
new Modal($(".certificates-modal"), $(".modern-workflow-link"), $(".modal__close--certificate"));
new RevealOnScroll($(".future__content-container"), "70%");
var stickyHeader = new StickyHeader();