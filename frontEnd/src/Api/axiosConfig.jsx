import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "Application/json",
  },
});

export async function register(user) {
  return await Api.post("/api/auth/register", user);
}

export function login(user) {
  return Api.post("/api/auth/login", user);
}
