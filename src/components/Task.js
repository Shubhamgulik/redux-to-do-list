import React from "react";
import "./Task.css";
import { CheckBox } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { toggleTask } from "../features/todoSlice";

function Task({ task }) {
  const { name, done, id } = task;
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(toggleTask(id));
  };

  const label = {};
  return (
    <div className="todoItem">
      <p className={done && "todoItem--done"}>
        <Checkbox
          checked={done}
          color="primary"
          onClick={handleCheck}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        {name}
      </p>
    </div>
  );
}

export default Task;
