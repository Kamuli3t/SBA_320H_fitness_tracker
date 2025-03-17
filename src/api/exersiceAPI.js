import axios from "axios";

const exerciseAPI = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com/exercises/bodyPart",
  headers: {
    "x-rapidapi-key": "03c3ab99c7msha9a4df794bf36efp101838jsn788aed25c157",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
  params: { limit: "10" },
});

export default exerciseAPI;
