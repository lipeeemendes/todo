import { View, addName } from "./view.js";

const todos = JSON.parse(localStorage.getItem("todos")) || [];

addName(todos);
View(todos);
