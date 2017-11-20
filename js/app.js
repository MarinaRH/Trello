var myLists = [
    {
      title: 'List 1',
      tasks: [
        'tasks A',
        'tasks B'
      ]
    }
]

var addListBtn = document.getElementById('add-list-button');
var listItems = document.getElementById('list-items');
var input = document.getElementsByName('list-title')[0];

//funcion para craar nuevas listas
var createItemHTML = function(listItem){
  var item = document.createElement('div');
  item.classList.add('item');
  item.classList.add('red');
  // title
  var titleElement = document.createElement('p');
  titleElement.classList.add('title');
  titleElement.innerHTML = listItem.title;

  // crear lista de tareas
  var tasksElement = document.createElement('div');
    for(var i = 0; i < listItem.tasks.length; i++){
      var task = document.createElement('p');
      task.innerHTML = listItem.tasks[i];
      tasksElement.appendChild(task);
    }
  // agregar tareas
    var taskInput = document.createElement('input');
    var addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('id','add-task-button');
    addTaskButton.innerHTML = 'Add Task';
    taskInput.setAttribute('placeholder','ingresa tarea...');

    item.appendChild(titleElement);
    item.appendChild(tasksElement);
    item.appendChild(taskInput);
    item.appendChild(addTaskButton);

    addTaskButton.addEventListener('click', function(e){
      listItem.tasks.push(taskInput.value); //agregando al  objecto
      var newTask = document.createElement('p');
      newTask.innerHTML = taskInput.value;
      tasksElement.appendChild(newTask); // agregando al html

      taskInput.value = '';
      taskInput.focus();
    });

  return item;
}

var createNewList = function(title) {
  return {
    title: title,
    tasks: []
  }
}

var addList = function(newList) {
    myLists.push(newList); // agregar al objeto
    listItems.appendChild(createItemHTML(newList)) // agregar a el HTML
}

var addNewList = function(e){
    e.preventDefault();
    var title = input.value;
    if(title === '')
    return;
    var newList = createNewList(title)
    addList(newList);
    input.value = '';
    input.focus();
}

//agregar las nuevas listas
var initialize = function(){
  for(var i = 0; i < myLists.length; i++){
     listItems.appendChild(createItemHTML(myLists[i]))
  }
}

addListBtn.addEventListener('click', addNewList);
initialize();