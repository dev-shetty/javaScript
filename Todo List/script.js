const inputTodo = document.getElementById("todo-item");
const addItemBtn = document.getElementById("add-item");
const parentItem = document.getElementById("todo-list-content");

const removeItemBtn = document.createElement("button");
removeItemBtn.setAttribute("id", "remove-item");
const i = document.createElement("i");
i.classList.add("fa-solid", "fa-trash-can");
removeItemBtn.append(i);

console.log(removeItemBtn);

addItemBtn.addEventListener("click", (event) => {
  console.log(inputTodo.value);
  const todoText = inputTodo.value;

  const todoContainer = document.createElement("div");
  const todo = document.createElement("p");
  todoContainer.classList.add("individual-todo");
  todo.classList.add("todo-content");

  todo.textContent = todoText;
  todoContainer.append(todo);
  todoContainer.append(removeItemBtn);
  parentItem.append(todoContainer);
});

removeItemBtn.addEventListener("click", (event) => {
  //   console.log(event.target.parentNode.parentNode);
  //   const todoItem = event.target.parentNode.parentNode;
  //   todoItem.remove();

  // Instead of removing will strike out
  //   console.log(event.target.parentNode.parentNode.childNodes[0]);
  const todoContent = event.target.parentNode.parentNode.childNodes[0];
  todoContent.style.textDecoration = "line-through";
});
