import React from "react";
import "./Task.css";
import { CheckBox } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

function Task({ task }) {
  const { name, done, id } = task;

  const handleCheck = () => {};

  const label = {
    checked: { done },
    color: "primary",
    onChange: { handleCheck },
    inputProps: { "aria-label": "Checkbox demo" },
  };
  return (
    <div className="todoItem">
      <p className={done && "todoItem--done"}>
        <Checkbox {...label} defaultChecked />
        {name}
      </p>
    </div>
  );
}

export default Task;
