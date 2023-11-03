import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "foods",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {
    toggleFoodLikeChange: (state, action) => {
      const currentFood = state.data.find(
        (food) => food.id === action.payload.foodId
      );
      if (currentFood) {
        if (!currentFood.userLiked.includes(action.payload.userId)) {
          currentFood.userLiked.push(action.payload.userId);
        } else {
          currentFood.userLiked = currentFood.userLiked.filter(
            (userId) => userId !== action.payload.userId
          );
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(toggleFoodLike.fulfilled, (state, action) => {
        const currentFood = state.data.find(
          (food) => food.id === action.payload.id
        );
        currentFood.userLiked = action.payload.userLiked;
      });
  },
});

export const fetchFoods = createAsyncThunk("foods/fetchFoods", async () => {
  const res = await fetch("http://localhost:3000/foods");
  const data = await res.json();
  return data;
});

export const toggleFoodLike = createAsyncThunk(
  "foods/toggleFoodLike",
  async (updateFood) => {
    const res = await fetch("http://localhost:3000/foods/" + updateFood.id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(updateFood),
    });
    const data = await res.json();
    return data;
  }
);
