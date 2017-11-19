var myLists = [
    {
      title: 'titulo lista 1',
      tasks: [
        'tasks: A',
        'tasks: B',
        'tasks: C',
        'tasks: D'
      ]
    }
  ]
  var addListBtn = document.getElementById('add-list-button');
  var listItems = document.getElementById('list-items');
  var input = document.getElementsByName('list-title')[0];
  var createItemHTML = function(listItem){

    var item = document.createElement('div');
    item.classList.add('item');

    // title
    var titleElement = document.createElement('p');
    titleElement.classList.add('title');
    titleElement.innerHTML = listItem.title
    // end title

    // tasks list
    var tasksElement = document.createElement('div');
    tasksElement.classList.add('tasks');
    for(var i = 0; i < listItem.tasks.length; i++){
      var task = document.createElement('p');
      task.innerHTML = listItem.tasks[i];
      tasksElement.appendChild(task);
    }
    // end tasks list

    // agregar tasks
    var taskInput = document.createElement('input');
    var addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('id', 'add-task-button');
    addTaskButton.innerHTML = 'Add Task';
    // end agregar tasks

    item.appendChild(titleElement);
    item.appendChild(tasksElement);
    item.appendChild(taskInput);
    item.appendChild(addTaskButton);

    addTaskButton.addEventListener('click', function(e){
      listItem.tasks.push(taskInput.value); // objecto
      var newTask = document.createElement('p');
      newTask.innerHTML = taskInput.value;
      tasksElement.appendChild(newTask); // agregando al html
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
    myLists.push(newList); // objeto
    listItems.appendChild(createItemHTML(newList)) // agregar a el HTML
  }

  var addNewList = function(e){
    e.preventDefault();
    var title = input.value;
    if(title === '') return;
    var newList = createNewList(title)
    addList(newList)
  }

  var initialize = function(){
    for(var i = 0; i < myLists.length; i++){
      listItems.appendChild(createItemHTML(myLists[i]))
    }
  }

  addListBtn.addEventListener('click', addNewList)

  initialize();