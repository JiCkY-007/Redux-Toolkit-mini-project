import { configureStore } from "@reduxjs/toolkit";

// jo reducer banaey hai unki knowledge dedo
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
