import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const WorkoutCalendar = () => {
  const workouts = useSelector((state) => state.workout.workoutList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={workouts}
        height="auto"
        eventColor="#1E90FF"
        eventClick={handleEventClick} // Add eventClick handler
      />
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Workout Details</DialogTitle>
        <DialogContent>
          {selectedEvent && (
            <div>
              <p>
                <strong>Title:</strong> {selectedEvent.title}
              </p>
              <p>
                <strong>Date:</strong> {selectedEvent.startStr}
              </p>
              {/* You can add more details here if needed */}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WorkoutCalendar;
