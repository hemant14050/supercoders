const submitTodoNode = document.getElementById('submitTodo');
const userInputNode = document.getElementById('userInput');
const prioritySelectorNode = document.getElementById('prioritySelector');
const todoListNode = document.getElementById('todoList');

submitTodoNode.addEventListener('click', () => {
    // get text from input
    // send text to server using fetch or XMLHttpRequest
    // if request is successful, add text to list
    // else display error message
    const todoText = userInputNode.value;
    const priority = prioritySelectorNode.value;
    if(!todoText || !priority) {
        alert('Please enter a todo and select a priority');
        return;
    }
    const todo = {
        todoText,
        priority
    };

    fetch('/todoData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then(response => {
        if(response.status == 200) {
            showTodoInUI(todo);
        }
    })
});

function showTodoInUI(todo) {
    const todoNode = document.createElement('hemant');
    todoNode.innerText = todo.todoText;
    todoListNode.appendChild(todoNode);
}