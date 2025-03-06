interface Todo {
    id: number;
    title: string;
    desc: string;
    done: boolean;
}





const addButton = document.querySelector('#addBtn')  as HTMLButtonElement;
const input = document.querySelector('#todoInput') as HTMLInputElement;
const inputDesc = document.querySelector('#todoDesc') as HTMLInputElement;


let todos: Todo[] = [];
let nextId: number = 0;


addButton.addEventListener('click', () => {
    const title: string = input.value;
    const desc:string = inputDesc.value;
    if (title === '' || desc === '') {
        alert('Please enter a valid text');
        return;
    }


    const todo: Todo = {
        id: nextId ++,
        title,
        desc,
        done: false
    }

    if (addTodo (todo)) {
        
        addingToDisplay(todo);
        input.value = '';
        inputDesc.value = '';

    }

})

function addingToDisplay(todo : Todo) : void{
    // adding to the display 
    const todoList = document.querySelector('#todoList') as HTMLUListElement;
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="task-title">${todo.title}</div>
        <div class="task-desc">${todo.desc}</div>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
    `;

    const editButton = li.querySelector('.edit-button') as HTMLButtonElement;
    editButton.addEventListener('click', () => {
        const newTitle : string = prompt('Enter new title') || "";
        const newDesc : string = prompt('Enter new description') || "";
        if (newTitle === '' || newDesc === '') {
            alert('Please enter a valid text');
            return;
        }
        todo.title = newTitle;
        todo.desc = newDesc;
        
        const title_li = li.querySelector('.task-title') as HTMLDivElement;
        title_li.innerText = newTitle;
        const desc_li = li.querySelector('.task-desc') as HTMLDivElement;
        desc_li.innerText = newDesc;




       

    });

    const deleteButton = li.querySelector('.delete-button') as HTMLButtonElement;
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(li);
        removeTodoById(todo.id);
        reDiplay();
    });
    todoList.appendChild(li);
}

function addTodo(todo : Todo) : boolean {
    todos.push(todo);

    return true;
}


function reDiplay():void{
    const todoList = document.querySelector('#todoList') as HTMLUListElement;
    todoList.innerHTML = '';

    todos.forEach(todo => {
        addingToDisplay(todo);
    });

    
    
}



function removeTodoById(id: number) : void {
    todos = todos.filter(todo => todo.id !== id);

    
}