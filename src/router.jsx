import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import WorkoutCalendar from "./components/WorkoutCalendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "/workouts", element: <WorkoutsList /> },
      { path: "/calender", element: <WorkoutCalendar /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
