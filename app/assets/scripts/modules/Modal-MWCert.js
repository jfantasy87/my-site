														//ECMA script 6
import $ from 'jquery';

class ModalMWCert {
	constructor(modalToOpen, modalButton, modalCloseButton) {
		this.openModalButton = modalButton;
		this.modal = modalToOpen;
		this.closeModalButton = modalCloseButton;
		this.events();
	}

	events() {
		//clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));
		//clicking the X close modal button
		this.closeModalButton.click(this.closeModal.bind(this));
		//key press
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(escape) {
		if(escape.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("certificates-modal--is-visible");
		return false;

	}

	closeModal() {
		this.modal.removeClass("certificates-modal--is-visible");
	}
}

export default ModalMWCert;