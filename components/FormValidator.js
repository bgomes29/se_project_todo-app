class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  _checkInputValidity(inputElement) {
    if (!_inputElement.validity.valid) {
      showInputError(
        _formEl,
        _inputElement,
        _inputElement.validationMessage,
        _settings,
      );
    } else {
      hideInputError(_formEl, _inputElement, settings);
    }
  }

  _hasInvalidInput = (inputList) => {
    return inputList.some((_inputElement) => {
      return !_inputElement.validity.valid;
    });
  };

  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = true;
    } else {
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = false;
    }
  }

  _setEventListeners(formEl){
    const inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector),
    );
    const buttonElement = formEl.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputList);
      
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        toggleButtonState(inputList, buttonElement, settings);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
       evt.preventDefault();
    });
    this._setEventListeners(this._formEl);
  }

   resetValidation() {
    this._formEl.reset();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }
}

export default FormValidator;
