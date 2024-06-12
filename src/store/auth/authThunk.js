import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "/api/auth/signUpForVendor",
        userData
      );
      localStorage.setItem("AUTH", JSON.stringify(data));
      console.log(response);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signInAsyns = createAsyncThunk(
  "auth/signIn",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/api/auth/signIn", {
        userData,
      });
      console.log(response);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
