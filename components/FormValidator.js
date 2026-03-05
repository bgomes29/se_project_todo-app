class FormValidator {
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }

  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formElement = formElement;
  }

  _toggleButtonState() {
    const isFormValid =this._formElement.checkValidity();

    if (!isFormValid) {
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = true;
    } else {
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = false;
    }
  }

  _checkInputValidity(inputElement) {
    if (!_inputElement.validity.valid) {
      this._showInputError(
        _inputElement,
        _inputElement.validationMessage,
      );
    } else {
      hideInputError(_formEl, _inputElement);
    }
  }

  _setEventListeners(){
    const inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector),
    );
    const buttonElement = formEl.querySelector(this._submitButtonSelector);

    this._toggleButtonState();
      
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
       evt.preventDefault();
       this.resetValidation();
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

   _hideInputError(inputElement) {
    const errorElement = this._formEl.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = ""; 
  }
}

export default FormValidator;
