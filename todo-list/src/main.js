"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const listElement = document.getElementById("todo-list");
    const searchElement = document.getElementById("search-todo");
    let todos = [];
    if (!form || !input) {
        console.error("No Data Found!");
        return;
    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newTodo = {
            id: todos.length + 1,
            title: input.value,
        };
        // const newTodo = input.value;
        // push unique todo according to its id
        if (todos.length > 0 && todos.some((item) => item.title === newTodo.title)) {
            alert("Todo already exists");
            return;
        }
        else {
            todos.push(newTodo);
            updateTodoList();
            input.value = "";
        }
    });
    function updateTodoList() {
        listElement.innerHTML = "";
        todos.forEach((item) => {
            const listItem = document.createElement("li");
            const action = document.createElement("div");
            const deleteBtn = document.createElement("button");
            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            deleteBtn.textContent = "Delete";
            // edit todo
            editBtn.addEventListener(("click"), () => {
                const index = todos.findIndex((todo) => todo.id === item.id);
                const updatedTodo = prompt("Update Todo", item.title.toString());
                if (updatedTodo) {
                    todos[index].title = updatedTodo;
                    updateTodoList();
                }
            });
            // delete todo
            deleteBtn.addEventListener("click", () => {
                const index = todos.findIndex((todo) => todo.id === item.id);
                todos.splice(index, 1);
                updateTodoList();
            });
            listItem.textContent = item.title.toString();
            action.appendChild(editBtn);
            action.appendChild(deleteBtn);
            listItem.appendChild(action);
            listElement.appendChild(listItem);
        });
    }
    //   search todo
    searchElement.addEventListener("keyup", (e) => {
        const target = e.target;
        if (target) {
            const searchValue = target.value;
            const filteredTodos = todos.filter((todo) => todo.title.toString().includes(searchValue));
            console.log(filteredTodos);
        }
    });
});
