const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUL = document.getElementById("todos")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addToDo();
})

function addToDo(todo) {
    let todoText = input.value;

    if(todo) {
        todoText = todo.text;
    }

    if (todoText) {
        // Create a todo element
        const todoEl = document.createElement("li");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        // Toggle the completed class
        todoEl.addEventListener('click', () => todoEl.classList.toggle('completed'));

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            todoEl.remove();
        })

        // Adding the value & Adding it to the DOM
        todoEl.innerText = todoText;
        todosUL.appendChild(todoEl);
        input.value = "";
    }


}