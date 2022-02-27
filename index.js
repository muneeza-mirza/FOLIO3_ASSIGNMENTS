// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
const pendingTasksNumb = document.querySelector(".pendingTasks");
const baseUrl = "https://api.fake.rest/74739cd9-7ea1-4c7f-9fc5-ac0b89d8f1bb";
let todoItems = [];
document.addEventListener("DOMContentLoaded", async () => {
  let response = await fetch(`${baseUrl}/getTodos`, {
    method: "GET",
  });
  response = await response.json();
  if (response.success) {
    todoItems = response.data;
    showTasks(todoItems);
  }
  
});
inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value; //getting user entered value
  if (userEnteredValue.trim() != 0) {
    //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  } else {
    addBtn.classList.remove("active"); //unactive the add button
  }
};

let addTodoItem= async(item) =>{
  const data= { title: item,  id: Math.random().toString()};
  todoItems.push({ title: item, id: Math.random().toString() });
  inputBox.value = "";
  
  showTasks(todoItems);
  const resp= await fetch(`${baseUrl}/addTodo`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  
}

addBtn.onclick = async() => {
  addTodoItem(inputBox.value); 
};

function showTasks(data = []) {
  let newList = "";
  data.forEach((item, index) => {
    newList += `<li class="bordered">${item.title}<span class="icon" id=${item.id}>D</span>
    <span class="btn" id=${item.title}>edit</span></li>`;
    
  });
  todoList.innerHTML = newList;
  pendingTasksNumb.textContent = data.length;
  data.length > 0
    ? deleteAllBtn.classList.add("active")
    : deleteAllBtn.classList.remove("active");
}

let updateItem= async(title) =>{
  const up=  title.innerHTML
  fetch(`${baseUrl}/updateTodo`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  });
  
  showTasks(todoItems);

}

todoList.onclick = (e) =>{
  if(e.target.classList.contains("btn")){
    updateItem(e.target.title);
  }
}

let deleteItem= async(index) => {
  todoItems.splice(index,1);
  fetch(`${baseUrl}/deleteTodo`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todoItems),
        
  });
  console.log(JSON.stringify(todoItems));
    showTasks(todoItems);
}

todoList.onclick = (e) => {
  if (e.target.classList.contains("icon")) {
    deleteItem(e.target.id);
  }
};

deleteAllBtn.onclick = async () => {
    const resp= await fetch(`${baseUrl}/deleteAllTodos`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },      
    });
    todoItems=[];
      showTasks();
};
