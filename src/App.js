import React from "react";

import "./App.css";
import Input from "./components/Input";
import Task from "./components/Task";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((task) => (
            <Task task={task} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
