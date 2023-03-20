import React from "react";

import "./App.css";
import Input from "./components/Input";
import Task from "./components/Task";
function App() {
  const todoList = [
    {
      name: "asd",
      done: false,
      id: 1234,
    },
    {
      name: "qwe",
      done: false,
      id: 12344,
    },
  ];

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
