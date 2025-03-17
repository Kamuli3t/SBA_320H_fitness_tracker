import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { workoutActions } from "../store/workoutSlice";
import { fetchExercisesByBodyPart } from "../store/exerciseSlice";

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

function WorkoutForm({ open, onClose, workoutToEdit }) {
  const dispatch = useDispatch();
  const { exercises, loading, error } = useSelector((state) => state.exercise);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [exercise, setExercise] = useState("");

  useEffect(() => {
    if (workoutToEdit) {
      setTitle(workoutToEdit.title);
      setDate(workoutToEdit.date);
    } else {
      setTitle("");
      setDate("");
    }
  }, [workoutToEdit]);

  const handleBodyPartChange = (event) => {
    const selectedBodyPart = event.target.value;
    setBodyPart(selectedBodyPart);
    dispatch(fetchExercisesByBodyPart(selectedBodyPart));
  };

  const handleExerciseChange = (event) => {
    setExercise(event.target.value);
  };

  const handleSubmit = () => {
    if (workoutToEdit) {
      dispatch(
        workoutActions.editWorkout({
          id: workoutToEdit.id,
          title,
          date,
        })
      );
    } else {
      dispatch(workoutActions.addWorkout(title, date));
    }
    onClose(); // Close the dialog
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {workoutToEdit ? "Edit Workout" : "Add Workout"}
      </DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="normal">
          <InputLabel id="body-part-select-label">Body Part</InputLabel>
          <Select
            labelId="body-part-select-label"
            id="body-part-select"
            value={bodyPart}
            label="Body Part"
            onChange={handleBodyPartChange}
          >
            {Object.entries(bodyParts).map(([key, part]) => (
              <MenuItem key={key} value={key}>
                {part}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="exercise-select-label">Exercise</InputLabel>
          <Select
            labelId="exercise-select-label"
            id="exercise-select"
            value={exercise}
            label="Exercise"
            onChange={handleExerciseChange}
          >
            {loading === "loading" && <MenuItem>Loading...</MenuItem>}
            {loading === "failed" && <MenuItem>Error: {error}</MenuItem>}
            {exercises &&
              exercises.map((exercise) => (
                <MenuItem key={exercise.id} value={exercise.name}>
                  {exercise.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <TextField
          label="Workout Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {workoutToEdit ? "Save Changes" : "Add Workout"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default WorkoutForm;
