import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/index";

export const login = createAsyncThunk(
  "auth/login",
  async ({ values, navigate, toast, setLoading, handleReset }) => {
    try {
      const result = await api.post("/auth/login", values);
      console.log(result);
      localStorage.setItem("token", result.data.data.token);
      toast.success(result.data.message);
      setTimeout(() => {
        navigate("/");
        setLoading(false);
      }, 2500);
      handleReset();
      return result.data.message;
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      console.log(error);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ values, navigate, toast, setLoading, handleReset }) => {
    try {
      const result = await api.post("/auth/register", values);
      toast.success(result.data.message);
      setTimeout(() => {
        navigate("/login");
        setLoading(false);
      }, 2500);
      handleReset();
      return result.data.message;
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginMessage: "",
    registerMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.loginMessage = action.payload;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.registerMessage = action.payload;
    });
  },
});

export default authSlice.reducer;
