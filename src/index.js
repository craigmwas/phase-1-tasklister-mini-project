document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

 
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    const listItem = document.createElement("li");

   
    listItem.textContent = taskDescription;

    
    taskList.appendChild(listItem);

    // Clear the input field after adding the task
    taskInput.value = "";

    
    taskInput.focus();
  });
});
