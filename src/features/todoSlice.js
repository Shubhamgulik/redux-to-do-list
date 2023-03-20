import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    toggleTask: (state, action) => {
      state.todoList.map((task) => {
        if (task.id === action.payload) {
          task.done = !task.done;
        }
      });
    },
  },
});

export const { saveTodo, toggleTask } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
