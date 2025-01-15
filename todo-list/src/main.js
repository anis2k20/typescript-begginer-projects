"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const listElement = document.getElementById("todo-list");
    let todos = [];
    if (!form || !input) {
        console.error("No Data Found!");
        return;
    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // const newTodo: Todo = {
        //   id: todos.length + 1,
        //   title: input.value,
        // };
        const newTodo = input.value;
        todos.push(newTodo);
        updateTodoList();
    });
    function updateTodoList() {
        todos.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            listElement.appendChild(listItem);
        });
    }
});
