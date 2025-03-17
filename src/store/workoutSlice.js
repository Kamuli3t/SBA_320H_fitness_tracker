import { createSlice, nanoid } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workout",
  initialState: {
    workoutList: [
      { id: "987", title: "Morning Run", date: "2025-03-20" },
      { id: "986", title: "Leg Day", date: "2025-03-21" },
    ],
  },
  reducers: {
    addWorkout: {
      reducer: (state, action) => {
        const workout = {
          id: nanoid(),
          title: action.payload.title,
          date: action.payload.date,
        };
        state.workoutList.push(workout);
      },
      prepare: (title, date) => {
        return { payload: { title, date } };
      },
    },
    editWorkout: (state, action) => {
      const { id, title, date } = action.payload;
      const existingWorkout = state.workoutList.find(
        (workout) => workout.id === id
      );
      if (existingWorkout) {
        existingWorkout.title = title;
        existingWorkout.date = date;
      }
    },
    deleteWorkout: (state, action) => {
      const id = action.payload;
      state.workoutList = state.workoutList.filter(
        (workout) => workout.id !== id
      );
    },
  },
});

export const workoutActions = workoutSlice.actions;
export default workoutSlice;
