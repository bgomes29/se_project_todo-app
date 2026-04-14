import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupElement = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupElement.querySelector(".popup__form");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (values) => {
    const date = new Date(values.date);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();
    const todoData = {
      ...values,
      date: date,
      id: id,
    };

    renderTodo(todoData);

    newTodoValidator.resetValidation();

    addTodoPopup.close();
  },
});
addTodoPopup.setEventListeners();

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => generateTodo(item),
  containerSelector: ".todos__list",
});

const renderTodo = (item) => {
  const todo = generateTodo(item);
  section.addItem(todo);
  todoCounter.updateTotal(true);
};

section.renderItems();

function handleCheck(completed) {
  if (completed) {
    todoCounter.updateCompleted(completed);
  } else {
    todoCounter.updateCompleted(false);
  }
}

function handleDelete(id, completed) {
  todoCounter.updateTotal(false);
    if (completed) {
      todoCounter.updateCompleted(false);
  }
}

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
