import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    username: "",
    password: "",
    diet: null,
    liked: [],
    id: null,
  },
  reducers: {
    login: (state, action) => {
      return { ...action.payload, isLoggedIn: true };
    },
    logout: (state, action) => {
      return {
        isLoggedIn: false,
        username: "",
        password: "",
        diet: null,
        liked: [],
        id: null,
      };
    },
  },
});
