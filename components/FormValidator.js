class FormValidator {
constructor(settings, formEl) {
this._inputSelector = settings._inputSelector;
this._submitButtonSelector = settings._submitButtonSelector;
this._errorClass = settings._errorClass;
this._inputErrorClass = settings._inputErrorClass;
this._inactiveButtonClass = settings._inactiveButtonClass;
this._formEl = formEl;
}

_checkInputValidity(inputElement){ 
    const inputValidity => {
    if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings,
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
}

_setEventListeners(){
const inputList = Array.from(
    this._formEl.querySelectorAll(this._inputSelector),
  );
  const buttonElement = formEl.querySelector(
    settings.submitButtonSelector,
  );

  toggleButtonState(inputList, buttonElement, settings);

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
  this._setEventListeners(this._formEl, settings);
}
}

export default FormValidator
