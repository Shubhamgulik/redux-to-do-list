import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Input.css";
import { saveTodo } from "../features/todoSlice";
function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addToDo = () => {
    console.log("Add to do :", input);
    dispatch(
      saveTodo({
        name: input,
        done: false,
        id: Date.now(),
      })
    );
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addToDo}>Add</button>
    </div>
  );
}

export default Input;
