import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:5051/api",
  headers: {
    "Content-type": "application/json",
  },
});
