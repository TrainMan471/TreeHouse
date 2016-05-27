
var taskInput = document.getElementById("new-task");//new-task
var addButton = document.getElementByTagName("button")[0];//first-button, have to use the html tag
var incompleteHolder = document.getElementById("incomplete-tasks");//incomplete tasks
var completedTaskHolder = document.getElementById("completed-tasks");


//New Task List Item
var createNewTaskElement = function(taskString) {
  //create List Item
  var listItem = document.createElement("li")

  //input checkbox
  var checkbox = document.createElement("input");

  //label
  var label = document.createElement("label");

  //input text
  var editInput = document.createElement("input");

  //button.edit
  var editButton = document.createElement("button");

  //button.delete

  var deleteButton = document.createElement("button");

//Each Element needs modifying
checkbox.type = "checkbox";
editInput.type = "text";

editButton.innerText = "Edit";
editButton.className = "edit";
deleteButton.innerText = "Delete";
deleteButton.className = "delete";

label.innerText = taskString;






//Each Element needs appending

listItem.appendChild(checkbox);
listItem.appendChild(label);
listItem.appendChild(editInput);
listItem.appendChild(editButton);
listItem.appendChild(deleteButton);


  return listItem;





}


var addTask = function() {
  console.log("Add task..");
  //create a new list item with the text from new-task
  var listItem = createNewTaskElement("Some New Task");
  //Append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
}
//Edit an existing task
var editTask = function() {
  console.log("Edit task..");
  //Append the task list item to the incompleteTasksHolder
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild("listItem");
  bindTaskEvents(listItem, taskCompleted);
}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task..");
  //Remove the parent list item from the ul
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
//remove the parent list item from the ul
  ul.removeChild("listItem");
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Completed task..");
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Incompleted task..");
}



var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind List Items");
  //select it's children
  var checkbox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
    //bind editTask to edit button
    editButton.onclick = editTask;
    //bind deleteTask to delete button
    deleteButton.onclick = addTask;
    //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}

//Set the click handler to the addTask function
addButton.onclick = addTask;

//cycle over incompleteTasksHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++ ){
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over ComplrtedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++ ){
  bindTaskEvents(completedTasksHolder.children[i], taskIncompleted);
}

//Adding another class in Javascript
//An example using the classList property:
anchor.classList.add("selected");

addButton.addEventListenter
//
