import $ from 'jquery';
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
		this.siteHeaderTitle = $(".site-header__title-wrapper");
		this.headerTitleTriggerElement = $(".aboutMe__title");
		this.createHeaderTitleWaypoint();
	}

	createHeaderTitleWaypoint () {
		var that = this;
		new Waypoint({
			element: this.headerTitleTriggerElement[0],
			handler: function(direction) {
				if (direction == "down"){
					that.siteHeaderTitle.addClass("site-header__title-wrapper--fitted");
				} else {
					that.siteHeaderTitle.removeClass("site-header__title-wrapper--fitted");
				}
			}
		});
	}
}

export default StickyHeader;