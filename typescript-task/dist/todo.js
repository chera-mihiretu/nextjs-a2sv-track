"use strict";
const addButton = document.querySelector('#addBtn');
const input = document.querySelector('#todoInput');
const inputDesc = document.querySelector('#todoDesc');
let todos = [];
let nextId = 0;
addButton.addEventListener('click', () => {
    const title = input.value;
    const desc = inputDesc.value;
    if (title === '' || desc === '') {
        alert('Please enter a valid text');
        return;
    }
    const todo = {
        id: nextId++,
        title,
        desc,
        done: false
    };
    if (addTodo(todo)) {
        addingToDisplay(todo);
        input.value = '';
        inputDesc.value = '';
    }
});
function addingToDisplay(todo) {
    // adding to the display 
    const todoList = document.querySelector('#todoList');
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="task-title">${todo.title}</div>
        <div class="task-desc">${todo.desc}</div>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
    `;
    const editButton = li.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
        const newTitle = prompt('Enter new title') || "";
        const newDesc = prompt('Enter new description') || "";
        if (newTitle === '' || newDesc === '') {
            alert('Please enter a valid text');
            return;
        }
        todo.title = newTitle;
        todo.desc = newDesc;
        const title_li = li.querySelector('.task-title');
        title_li.innerText = newTitle;
        const desc_li = li.querySelector('.task-desc');
        desc_li.innerText = newDesc;
    });
    const deleteButton = li.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(li);
        removeTodoById(todo.id);
        reDiplay();
    });
    todoList.appendChild(li);
}
function addTodo(todo) {
    todos.push(todo);
    return true;
}
function reDiplay() {
    const todoList = document.querySelector('#todoList');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        addingToDisplay(todo);
    });
}
function removeTodoById(id) {
    todos = todos.filter(todo => todo.id !== id);
}
//# sourceMappingURL=todo.js.map