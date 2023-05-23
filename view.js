
export const View = (todos) => {
  const ulElement = document.querySelector("#myUl");

  ulElement.innerHTML = "";

  todos.forEach((todo) => {
    const liElement = document.createElement("li");
    const spanElement = document.createElement("span");

    liElement.innerHTML = todo;
    spanElement.innerHTML = "&#128465;&#65039;";
    spanElement.style.cursor = "pointer"
    spanElement.addEventListener("click", () => {
      deleteName(todos, todo);
    });

    liElement.appendChild(spanElement);
    ulElement.appendChild(liElement);

  });

};

const deleteName = (todos, todo) => {
  todos.splice(todos.indexOf(todo), 1)
  saveData(todos)
  View(todos) 
  
};

export const addName = (todos) => {
  const inputElement = document.querySelector("input");
  const buttonElement = document.querySelector("button");

  buttonElement.addEventListener("click", () => {
    todos.push(inputElement.value);
    inputElement.value=""
    inputElement.focus()
    saveData(todos)
    View(todos);
  });
};

const saveData = (todos)=>{
  localStorage.setItem("todos",JSON.stringify(todos))
}