import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/index";

export const getProfile = createAsyncThunk("user/getProfile", async (id) => {
  try {
    const result = await api.get(`users/${id}`);
    return result.data.data[0];
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    myProfile: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.myProfile = action.payload;
    });
  },
});

export default userSlice.reducer;
