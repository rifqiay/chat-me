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

export const editPhoto = createAsyncThunk(
  "user/editPhoto",
  async ({ formData, setLoading, toast, setShow }) => {
    try {
      const result = await api.put(`users/edit-photo`, formData, {
        headers: {
          "Content-Type": "multipart/formdata",
        },
      });
      setShow(false);
      toast.success(result.data.message);
      setLoading(false);
      return result.data.message;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  }
);

export const editName = createAsyncThunk(
  "user/editName",
  async ({ values, setLoading, toast, setShow }) => {
    try {
      const result = await api.put(`users/edit-name`, values);
      setShow(false);
      toast.success(result.data.message);
      setLoading(false);
      return result.data.message;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  }
);

export const editPhone = createAsyncThunk(
  "user/editPhone",
  async ({ values, setLoading, toast, setShow }) => {
    try {
      const result = await api.put(`users/edit-phone`, values);
      setShow(false);
      toast.success(result.data.message);
      setLoading(false);
      return result.data.message;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  }
);

export const editUsername = createAsyncThunk(
  "user/editUsername",
  async ({ values, setLoading, toast, setShow }) => {
    try {
      const result = await api.put(`users/edit-username`, values);
      setShow(false);
      toast.success(result.data.message);
      setLoading(false);
      return result.data.message;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  }
);

export const editBio = createAsyncThunk(
  "user/editBio",
  async ({ values, setLoading, toast, setShow }) => {
    try {
      const result = await api.put(`users/edit-bio`, values);
      setShow(false);
      toast.success(result.data.message);
      setLoading(false);
      return result.data.message;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    myProfile: [],
    msgPhoto: "",
    msgName: "",
    msgPhone: "",
    msgUsername: "",
    msgBio: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.myProfile = action.payload;
    });
    builder.addCase(editPhoto.fulfilled, (state, action) => {
      state.msgPhoto = action.payload;
    });
    builder.addCase(editName.fulfilled, (state, action) => {
      state.msgName = action.payload;
    });
    builder.addCase(editPhone.fulfilled, (state, action) => {
      state.msgPhone = action.payload;
    });
    builder.addCase(editUsername.fulfilled, (state, action) => {
      state.msgPhone = action.payload;
    });
    builder.addCase(editBio.fulfilled, (state, action) => {
      state.msgBio = action.payload;
    });
  },
});

export default userSlice.reducer;
