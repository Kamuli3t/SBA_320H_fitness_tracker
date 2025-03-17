import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import exerciseAPI from "../api/exersiceAPI";

const bodyParts = {
  0: "back",
  1: "cardio",
  2: "chest",
  3: "lower arms",
  4: "lower legs",
  5: "neck",
  6: "shoulders",
  7: "upper arms",
  8: "upper legs",
  9: "waist",
};

export const fetchExercisesByBodyPart = createAsyncThunk(
  "exercise/fetchExercisesByBodyPart",
  async (bodyPartIndex) => {
    const bodyPart = bodyParts[bodyPartIndex];
    const response = await exerciseAPI(`/${bodyPart}`);
    return response.data;
  }
);

export const exerciseSlice = createSlice({
  name: "exercise",
  initialState: {
    exercises: [],
    loading: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExercisesByBodyPart.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchExercisesByBodyPart.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.exercises = action.payload;
      })
      .addCase(fetchExercisesByBodyPart.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export const exerciseActions = exerciseSlice.actions;
export default exerciseSlice;
