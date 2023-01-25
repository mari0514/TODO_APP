window.addEventListener("load", () => {
    let inputData = document.getElementById("todo-input");
    let addButton = document.getElementById("todo-add");
    let todoList = document.getElementById("todo-list");
    let searchInput = document.getElementById("todo-search");

    addButton.addEventListener("click", () => {
        let newTodo = document.createElement("li");
        newTodo.innerHTML = inputData.value;

        todoList.append(newTodo);

        inputData.value = "";
    })

    searchInput.addEventListener("keyup", (event) => {
        let searchData = searchInput.value;
        let todos = Array.from(todoList.children);

        todos.forEach((todo) => {
            // console.log(todo);
            if (todo.innerText.includes(searchData)) {
                todo.style.display = "block";
            } else {
                todo.style.display = "none";
            }
        })

    })
})