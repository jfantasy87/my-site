										//ECMAScript 6

import $ from 'jquery';  
						
class MobileMenu {
	constructor() {  	//Constructor identifying classes
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu");
		this.events();
	}

	events() {      	//Classes triggered by click event
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {	//Toggle new classes when on click event
		this.menuContent.toggleClass("site-header__menu--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;