import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import Modal from './modules/Modal';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import ModalMWCert from './modules/Modal-MWCert';

var mobileMenu = new MobileMenu();
new Modal($(".modal"), $(".open-modal"), $(".modal__close"));
new ModalMWCert($(".certificates-modal"), $(".modern-workflow-link"), $(".certificates-modal__close"));
new RevealOnScroll($(".future__content-container"), "70%");
var stickyHeader = new StickyHeader();