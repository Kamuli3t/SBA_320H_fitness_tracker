import React, { useState } from "react";

const WorkoutForm = ({ selectedDate, onSave, onClose }) => {
  const [workoutName, setWorkoutName] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workoutName || !duration) return;

    onSave({
      title: workoutName,
      duration: duration,
      date: selectedDate,
    });

    setWorkoutName("");
    setDuration("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Add Workout
        </h2>
        <p className="text-sm text-gray-500 mb-2">Date: {selectedDate}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Workout Name"
            className="w-full p-2 mb-3 border rounded"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Duration (min)"
            className="w-full p-2 mb-3 border rounded"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkoutForm;
