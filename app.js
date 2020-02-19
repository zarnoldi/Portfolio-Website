// Define UI variables

const form = document.getElementById('task-form');
const tasklist = document.querySelector('.collection');
const clearnbtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');

// Call event listener function

loadEventListeners();

// Event listener function

function loadEventListeners() {

// DOM Load event
document.addEventListener('DOMContentLoaded', getTasks);

// Add task event

form.addEventListener('submit', addTask);

// Remove task

tasklist.addEventListener('click', removeTask);

// Clear tasks

clearnbtn.addEventListener('click', clearTasks);

// Filter taks

filter.addEventListener('keyup', filterTasks);

}

// Get Tasks from Local Storage
function getTasks(e){
    let tasks;
  if(localStorage.getItem('tasks') === null ){
      tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }


    tasks.forEach(function(task){

     const li = document.createElement('li');

     // Add class to new element 
     li.className = 'collection-item';
    
     // Create text node (= Task name) and add to the li element
     li.appendChild(document.createTextNode(task));

     // Create a link element
     const link = document.createElement('a');

     // Add class to a link element
     link.className = 'delete-item secondary-content';

     // Add icon html
     link.innerHTML = '<i class="material-icons">clear</i>';

     // Append link tag to li
     li.appendChild(link);

     // Append li to ul
     tasklist.appendChild(li);

    })

}

// Add task
function addTask(e) {
    
    if(taskInput.value === ''){

        alert('Add a task before clicking submit');
    };

    // Create task as a li html element  
    const li = document.createElement('li');

    // Add class to new element 
    li.className = 'collection-item';
    
    // Create text node (= Task name) and add to the li element
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a link element
    const link = document.createElement('a');

    // Add class to a link element
    link.className = 'delete-item secondary-content';

    // Add icon html
    link.innerHTML = '<i class="material-icons">clear</i>';

    // Append link tag to li
    li.appendChild(link);

    // Append li to ul
    tasklist.appendChild(li);

    // Store in local storage
    storeTaskInLocakStorage(taskInput.value);

    // Clear input
    taskInput.value = '';


    e.preventDefault();
}

//Store task

function storeTaskInLocakStorage(task){
 let tasks;
  if(localStorage.getItem('tasks') === null ){
      tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));


}
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {

        if(confirm('Are you sure?')) {

            e.target.parentElement.parentElement.remove();

            //Remove from Local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskItem){
    let tasks;
  if(localStorage.getItem('tasks') === null ){
      tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            task.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

function clearTasks(e) {
        if(confirm('Are you sure?')) {

        while(tasklist.firstChild) {
            tasklist.removeChild(tasklist.firstChild);
        }
    }
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
    localStorage.clear();

}


function filterTasks(e) {
    const searchText = e.target.value.toLowerCase();
    const tasks = document.querySelectorAll('.collection-item')

    task.forEach(
        function(tasks){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(searchText) != -1){
            tasks.style.display = 'block';}
            else{
                tasks.style.display = 'none';
            }
        });
}