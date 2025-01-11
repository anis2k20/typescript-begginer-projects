"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    if (!form || !input) {
        console.error("No Data Found!");
        return;
    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(input.value);
    });
});
