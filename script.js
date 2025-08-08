// Create container
const toDoContainer = document.createElement("div");
toDoContainer.style.width = "400px";
toDoContainer.style.margin = "60px auto";
toDoContainer.style.padding = "20px";
toDoContainer.style.border = "2px solid #28a745";
toDoContainer.style.borderRadius = "20px";
document.body.appendChild(toDoContainer);

// Title
const title = document.createElement("h2");
title.innerText = "To-Do List";
title.style.color = "#d0519c";
title.style.textAlign = "center";
toDoContainer.appendChild(title);

// Input
const input = document.createElement("input");
input.placeholder = "Add a task";
input.style.width = "75%";
input.style.padding = "10px";
input.style.border = "1px solid #d3d3d3";
input.style.borderRadius = "10px";
toDoContainer.appendChild(input);

// Add button
const addBtn = document.createElement("button");
addBtn.innerText = "Add";
addBtn.style.padding = "10px 20px";
addBtn.style.marginLeft = "10px";
addBtn.style.border = "none";
addBtn.style.backgroundColor = "#00b800";
addBtn.style.color = "white";
addBtn.style.borderRadius = "10px";
addBtn.style.cursor = "pointer";
toDoContainer.appendChild(addBtn);

// Todo list
const list = document.createElement("ul");
list.style.listStyle = "none";
list.style.padding = "0";
toDoContainer.appendChild(list);

// Add task
addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = input.value;
  list.appendChild(li);

  
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "center";
  li.style.padding = "8px";
  li.style.borderBottom = "1px solid #d3d3d3";

  
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.style.backgroundColor = "#ff0000";
  deleteBtn.style.color = "white";
  deleteBtn.style.border = "none";
  deleteBtn.style.padding = "10px 15px";
  deleteBtn.style.borderRadius = "10px";
  deleteBtn.style.cursor = "pointer";

  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  input.value = "";
});

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
