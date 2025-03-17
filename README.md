# Workout Tracker Application

This project is a workout tracking application built with React, Redux Toolkit, Tailwind CSS, and Material UI. It allows users to manage their workouts, view them on a calendar, and integrate with an external exercise API.

## Features

- **Workout Management:**
  - Add new workouts with titles, dates, and associated exercises.
  - Edit existing workout details.
  - Delete workouts.
- **Exercise Integration:**
  - Fetch exercises from an external API based on body part selection.
  - Display exercises in a dropdown for easy selection.
- **Calendar View:**
  - Display scheduled workouts on a calendar.
  - View workout details by clicking on calendar events.
- **User Interface:**
  - Modern and responsive design using Tailwind CSS and Material UI.
  - Clear navigation and intuitive user experience.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Redux Toolkit:** A set of tools to simplify Redux development.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Material UI:** A React UI framework providing ready-to-use components.
- **FullCalendar:** A JavaScript library for creating interactive calendars.
- **Axios:** A promise-based HTTP client for making API requests.

## Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the application:**

    ```bash
    npm start
    ```

4.  **Open the application in your browser:**

    Visit `http://localhost:3000` to view the application.

## Project Structure

workout-tracker/
├── public/
│ └── index.html
├── src/
│ ├── api/
│ │ └── exersiceAPI.js # Exercise API configuration
│ ├── components/
│ │ ├── Layout.jsx # Layout component with navigation
│ │ ├── NavButton.jsx # Navigation button component
│ │ ├── NotFound.jsx # Not found page component
│ │ ├── WorkoutCalendar.jsx # Workout calendar component
│ │ ├── WorkoutForm.jsx # Workout form component
│ │ └── WorkoutsList.jsx # Workout list component
│ ├── store/
│ │ ├── index.js # Redux store configuration
│ │ ├── exerciseSlice.js # Redux slice for exercise data
│ │ └── workoutSlice.js # Redux slice for workout data
│ ├── App.css # Global CSS styles
│ ├── App.jsx # Main application component
│ ├── index.css # Index CSS styles
│ ├── main.jsx # Entry point of the application
│ ├── router.jsx # React Router configuration
│ └── ...
├── package.json
├── README.md

by Kaml R. Mehamednur
