

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form") as HTMLElement | null;
  const input = document.getElementById(
    "todo-input"
  ) as HTMLInputElement | null;
  const listElement = document.getElementById("todo-list") as HTMLUListElement;

  interface Todo {
    id: Number;
    title: String | Number;
  }

  let todos:string[] = [];

  if (!form || !input) {
    console.error("No Data Found!");
    return;
  }


  form.addEventListener("submit", (e: Event) => {
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
    todos.forEach((item)=>{
      const listItem = document.createElement("li");
      listItem.textContent = item;
      listElement.appendChild(listItem)
    })
  }
});













