class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  _checkInputValidity(inputElement) {{
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
  };

  const hasInvalidInput = (_inputList) => {
    return _inputList.some((_inputElement) => {
      return !_inputElement.validity.valid;
    });
  };
  }

  _setEventListeners(){
  const inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector),
    );
    const buttonElement = formEl.querySelector(
      _settings.submitButtonSelector,
    );

    _toggleButtonState(settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        toggleButtonState(inputList, buttonElement, settings);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
       console.log("Form submitted!", evt);
      evt.preventDefault();
    });
    this._setEventListeners(this._formEl, settings);
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
