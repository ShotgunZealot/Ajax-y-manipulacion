document.addEventListener('DOMContentLoaded', function () {
    const addTaskForm = document.getElementById('addTaskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    fetch('tasks.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(task => {
                addTaskToList(task);
            });
        })
        .catch(error => console.error('Error al cargar tareas:', error));

    addTaskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newTask = {
            id: Date.now(),
            task: taskInput.value,
            completed: false
        };
        addTaskToList(newTask);
        taskInput.value = '';
    });

    function addTaskToList(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task.task;
        if (task.completed) {
            listItem.classList.add('completed');
        }
        listItem.addEventListener('click', function () {
            task.completed = !task.completed;
            listItem.classList.toggle('completed');
        });
        taskList.appendChild(listItem);
    }
});
