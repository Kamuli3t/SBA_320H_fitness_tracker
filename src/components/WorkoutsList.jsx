import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { workoutActions } from "../store/workoutSlice";
import WorkoutForm from "./WorkoutForm";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
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
          <div className="bg-white/5 rounded-sm mt-2">
            <ListItem key={workout.id} sx={{ width: "400px" }}>
              <ListItemText primary={workout.title} secondary={workout.date} />

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
            </ListItem>
          </div>
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
