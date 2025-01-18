

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

  let todos:Todo[] = [];

  if (!form || !input) {
    console.error("No Data Found!");
    return;
  }


  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: todos.length + 1,
      title: input.value,
    };
    // const newTodo = input.value;

    // push unique todo according to its id

    if(todos.length > 0 && todos.some((item) => item.title === newTodo.title)) {
      alert("Todo already exists");
      return;
    }else{
    todos.push(newTodo);
    updateTodoList();
    input.value = "";
    }
  });

  function updateTodoList() {
    listElement.innerHTML = "";
    todos.forEach((item)=>{
      const listItem = document.createElement("li");
      const action = document.createElement("div");
      const deleteBtn = document.createElement("button");
      const editBtn = document.createElement("button");

        editBtn.textContent = "Edit";
        deleteBtn.textContent = "Delete";

        // edit todo
        editBtn.addEventListener(("click"), ()=>{
          const index = todos.findIndex((todo) => todo.id === item.id);
          const updatedTodo = prompt("Update Todo", item.title.toString());
          if(updatedTodo){
            todos[index].title = updatedTodo;
            updateTodoList();
          }
        })

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
      listElement.appendChild(listItem)
    })
  }
});













