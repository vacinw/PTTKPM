import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    name: "",
    ingredients: [],
    diet: "",
  },
  reducers: {
    searchNameChange: (state, action) => {
      state.name = action.payload;
    },
    searchDietChange: (state, action) => {
      state.diet = action.payload;
    },
    searchIngredientsChange: (state, action) => {
      state.ingredients = action.payload;
    },
  },
});
