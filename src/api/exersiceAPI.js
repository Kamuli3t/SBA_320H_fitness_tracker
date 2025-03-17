import axios from "axios";

const exerciseAPI = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com/exercises/bodyPart",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_EX_API,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
  params: { limit: "10" },
});

export default exerciseAPI;
