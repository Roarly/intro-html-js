const todos = [];

const pendingClasses =
    "bg-white w-full text-center text-yellow-500 rounded py-4 border-2 border-yellow-600 hover:bg-yellow-500 hover:text-white transition transform ease-in-out duration-300 hover:scale-105 hover:rotate-1";
const completedClasses =
    "bg-white w-full text-center text-blue-500 rounded py-4 border-2 border-blue-400 hover:bg-blue-500 hover:text-white transition transform ease-in-out duration-300 hover:scale-105 hover:-rotate-1";

const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

const showTodos = () => {
    const pendingTodos = todos.filter((todo) => todo.status === "pending");

    pendingList.innerHTML = "";
    pendingTodos.forEach((todo) => {
        const pendingItem = document.createElement("li");
        pendingItem.className = pendingClasses;
        pendingItem.innerText = todo.text;
        pendingItem.id = todo.id;
        pendingList.appendChild(pendingItem);
    });

    const completedTodos = todos.filter((todo) => todo.status === "done");

    completedList.innerHTML = "";
    completedTodos.forEach((todo) => {
        const completedItem = document.createElement("li");
        completedItem.className = completedClasses;
        completedItem.innerText = todo.text;
        completedItem.id = todo.id;
        completedList.appendChild(completedItem);
    });
};

const addForm = document.getElementById("addForm");
const newTodo = document.getElementById("newTodo");

addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    todos.push({
        id: Math.floor(Math.random() * 100000).toString(),
        text: newTodo.value,
        status: "pending",
    });
    newTodo.value = "";
    showTodos();
});

pendingList.addEventListener("click", (event) => {
    todos.find((todo) => todo.id === event.target.id).status = "done";
    showTodos();
});

completedList.addEventListener("click", (event) => {
    todos.find((todo) => todo.id === event.target.id).status = "pending";
    showTodos();
});