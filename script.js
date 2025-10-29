// Select elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task when button is clicked
addBtn.addEventListener("click", function() {
  let taskText = input.value.trim(); // get input value
  if(taskText === "") return; // ignore empty input

  // Create new list item
  let li = document.createElement("li");
  li.textContent = taskText;

  // Add delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "10px";

  // Remove task when delete button is clicked
  delBtn.addEventListener("click", function() {
    li.remove();
  });

  // Attach delete button to li
  li.appendChild(delBtn);

  // Add li to ul
  taskList.appendChild(li);

  // Clear input
  input.value = "";
});
