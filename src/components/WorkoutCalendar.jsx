import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const WorkoutCalendar = () => {
  const [workouts, setWorkouts] = useState([
    { title: "Morning Run", date: "2025-03-20" },
    { title: "Leg Day", date: "2025-03-21" },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
        Workout Calendar
      </h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={workouts} // Show workouts inside calendar days
        dateClick={(info) => {
          const newWorkout = prompt(`Add a workout on ${info.dateStr}`);
          if (newWorkout) {
            setWorkouts([
              ...workouts,
              { title: newWorkout, date: info.dateStr },
            ]);
          }
        }}
        height="auto"
        eventColor="#1E90FF"
      />
    </div>
  );
};

export default WorkoutCalendar;
