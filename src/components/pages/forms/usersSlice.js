import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export default createSlice({
  name: "users",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {
    fetchUsers: (state, action) => {
      state.data = action.payload;
    },
    addUserChange: (state, action) => {
      state.data.push(action.payload);
    },
    updatePasswordChange: (state, action) => {
      const currentUser = state.data.find(
        (user) => user.id === action.payload.id
      );
      currentUser.password = action.payload.newPassword;
    },
    toggleUserLikeChange: (state, action) => {
      const currentUser = state.data.find(
        (user) => user.id === action.payload.userId
      );
      if (currentUser) {
        if (!currentUser.liked.includes(action.payload.foodId)) {
          currentUser.liked.push(action.payload.foodId);
        } else {
          currentUser.liked = currentUser.liked.filter(
            (foodId) => foodId !== action.payload.foodId
          );
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        const currentUser = state.data.find(
          (user) => user.id === action.payload.id
        );
        currentUser.password = action.payload.password;
      })
      .addCase(toggleUserLike.fulfilled, (state, action) => {
        const currentUser = state.data.find(
          (user) => user.id === action.payload.id
        );

        currentUser.liked = action.payload.liked;
      });
  },
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("http://localhost:3000/users");
  const data = await res.json();
  return data;
});

export const addUser = createAsyncThunk("users/addUser", async (newUser) => {
  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newUser),
  });
  const data = await res.json();
  return data;
});

export const updatePassword = createAsyncThunk(
  "users/updatePassword",
  async (updateUser) => {
    const res = await fetch("http://localhost:3000/users/" + updateUser.id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(updateUser),
    });
    const data = await res.json();
    return data;
  }
);

export const toggleUserLike = createAsyncThunk(
  "users/toggleUserLike",
  async (updateUser) => {
    const res = await fetch("http://localhost:3000/users/" + updateUser.id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(updateUser),
    });
    const data = await res.json();
    return data;
  }
);
