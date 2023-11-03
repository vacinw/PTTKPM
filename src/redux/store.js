import { configureStore } from "@reduxjs/toolkit";
import userSlice from "~/components/pages/forms/userSlice";
import filtersSlice from "~/components/Header/filtersSlice";
import foodsSlice from "~/components/Main/foodsSlice";
import usersSlice from "~/components/pages/forms/usersSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    foods: foodsSlice.reducer,
    users: usersSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
