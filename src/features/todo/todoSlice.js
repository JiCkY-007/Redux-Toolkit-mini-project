import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello-world",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        todo.id !== action.payload;
      });
    },

    updateTodo: (state, action) => {
      const { id, newText } = action.payload; // Assuming action.payload contains an object with the todo id and the new text value
      const todoIndex = state.todos.findIndex((todo) => todo.id === id); // Find the index of the todo item to update
      if (todoIndex !== -1) {
        // Check if the todo item was found
        state.todos[todoIndex].text = newText; // Update the text of the found todo item
      }
    },
  },
});

// 2 baar export karna hota hai

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
