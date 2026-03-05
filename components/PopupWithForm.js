import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({popupSelector, handleformSubmit}) {
        super({popupSelector: popupSelector});
        this._popupForm = this._popupElement.queryselector(".popup__form");
        this._handleFormSubmit = handleformSubmit;
    }

    _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
  }
}

export default PopupWithForm;