import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import WorkoutCalendar from "./components/WorkoutCalendar";
import WorkoutsList from "./components/WorkoutsList";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <WorkoutsList /> },
      { path: "/calender", element: <WorkoutCalendar /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
