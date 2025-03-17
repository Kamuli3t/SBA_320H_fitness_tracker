import { configureStore } from "@reduxjs/toolkit";
import workoutSlice from "./workoutSlice";
import exerciseSlice from "./exerciseSlice";

const store = configureStore({
  reducer: {
    workout: workoutSlice.reducer,
    exercise: exerciseSlice.reducer,
  },
});

export default store;
