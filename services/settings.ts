import axios from "axios";

const API_URL = "http:/localhost:5000";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default $api;
