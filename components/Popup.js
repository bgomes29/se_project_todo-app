class Popup {
  constructor({ popupSelector }) {
    this.popupElement = document.querySelector(popupSelector);
    this.popupCloseBtn = this.popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
        this.close();
    }
  }

  open() {
    this.popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this.popupElement.classList.remove("popup_visible");
  }

  setEventListeners() {
    this.popupCloseBtn.addEventListener("click", () => {
      this.close();
    });

    this.popupElement.addEventListener("mousedown", (evt) => {
        if (evt.target === this.popupElement)        
        this.close();
    })
  }
}
export default Popup;
