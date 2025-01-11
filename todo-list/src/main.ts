document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form") as HTMLElement | null;
  const input = document.getElementById(
    "todo-input"
  ) as HTMLInputElement | null;

  if (!form || !input) {
    console.error("No Data Found!");
    return;
  }

  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    console.log(input.value);
  });
});
