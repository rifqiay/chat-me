import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// const URL =
//   process.env.NODE_ENV === "production" ? undefined : "http://localhost:4000";
const URL = process.env.REACT_APP_REACT_API_BACKEND_SOCKET;

export const socket = io(URL);
