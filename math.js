export function Add(a, b) {
  return a + b;
}

export default function mul(a, b) {
  return a * b;
}

export const View = (data) => {
  const divElement = document.querySelector("#myDiv");

  divElement.innerHTML = "";

  data.forEach((todo) => {
    const liElement = document.createElement("li");
    const spanElement = document.createElement("span");

    spanElement.innerHTML = "delete";
    spanElement.addEventListener("click", (e) => {
      deleteName(data, todo);
    });

    divElement.appendChild(spanElement);

    divElement.appendChild(liElement);
    liElement.innerHTML = `<p>${todo}</p>`;
  });

  console.log(divElement);
};

const deleteName = (todos, todo) => {
  console.log(toddo);
  todos.filter((item) => item !== todo);
};

export const addName = (todos) => {
  const inputElement = document.querySelector("input");
  const buttonElement = document.querySelector("button");

  buttonElement.addEventListener("click", () => {
    todos.push(inputElement.value);
    View(todos);
  });
};
