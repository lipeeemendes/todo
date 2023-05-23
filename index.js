import { View, addName } from "./view";

const todos = JSON.parse(localStorage.getItem("todos")) || [];

addName(todos);
View(todos);
