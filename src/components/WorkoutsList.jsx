import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { workoutActions } from "../store/workoutSlice";
import WorkoutForm from "./WorkoutForm";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { Button } from "@mui/material";

const WorkoutList = () => {
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workout.workoutList);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [workoutToEdit, setWorkoutToEdit] = useState(null);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setWorkoutToEdit(null);
  };

  const handleDeleteWorkout = (id) => {
    dispatch(workoutActions.deleteWorkout(id));
  };

  const handleEditWorkout = (workout) => {
    setWorkoutToEdit(workout);
    setIsFormOpen(true);
  };

  return (
    <div>
      <h2>Workout List</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenForm}
        sx={{ mb: 2 }}
      >
        Add Workout
      </Button>
      <List>
        {workouts.map((workout) => (
          <ListItem key={workout.id} sx={{ width: "400px" }}>
            <ListItemText primary={workout.title} secondary={workout.date} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEditWorkout(workout)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteWorkout(workout.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <WorkoutForm
        open={isFormOpen}
        onClose={handleCloseForm}
        workoutToEdit={workoutToEdit}
      />
    </div>
  );
};

export default WorkoutList;
