//DRY Version, Don't Repeat Yourself
const todos = [];

const get = (elements) => elements.map((element) => document.getElementById(element));

const [pendingList, completedList, addForm, newTodo]  = get(["pendingList","completedList","addForm","newTodo"]);

const newList = [
    {element: pendingList, status: "pending"}, {element: completedList, status: "done"}
];

const cssClasses = {
    pending:"bg-white w-full text-center text-yellow-500 rounded py-4 border-2 border-yellow-600 hover:bg-yellow-500 hover:text-white transition transform ease-in-out duration-300 hover:scale-105 hover:rotate-1",
    done:"bg-white w-full text-center text-blue-500 rounded py-4 border-2 border-blue-400 hover:bg-blue-500 hover:text-white transition transform ease-in-out duration-300 hover:scale-105 hover:-rotate-1"
};

const updateTodos = () => {
    newList.forEach((list) => {

        const filteredTodos = todos.filter((todo) => todo.status === list.status);

        list.element.innerHTML = ""
        filteredTodos.forEach((todo) => {
            const item = document.createElement("li");
            item.className = cssClasses[list.status];
            item.innerText = todo.text;
            item.id = todo.id;
            list.element.appendChild(item);
    } )

    });
};


addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    todos.push({
        id: Math.floor(Math.random() * 100000).toString(),
        text: newTodo.value,
        status: "pending",
    });
    newTodo.value = "";
    updateTodos();
});

pendingList.addEventListener("click", (event) => {
    todos.find((todo) => todo.id === event.target.id).status = "done";
    updateTodos();
});

completedList.addEventListener("click", (event) => {
    todos.find((todo) => todo.id === event.target.id).status = "pending";
    updateTodos();
});