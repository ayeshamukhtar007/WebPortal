import axios from "axios";

const BASE_URL = "http://localhost:5005/api";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:primary"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${TOKEN}` },
});
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});


