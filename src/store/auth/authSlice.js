import { createSlice } from "@reduxjs/toolkit";
import { signInAsyns, signUp } from "./authThunk";
const initialState = {
  isAuth: false,
  token: "",
  email: "",
  firstName: "",
  lastName: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isAuth = true;
      state.token = payload.token;
      state.lastName = payload.lastName;
      state.firstName = payload.firstName;
      state.email = payload.email;
      state.phoneNumber = payload.phoneNumber;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsyns.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.token = payload.token;
        state.lastName = payload.data.lastName;
        state.firstName = payload.data.firstName;
        state.email = payload.data.email;
        state.phoneNumber = payload.phoneNumber;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.token = payload.token;
        state.lastName = payload.data.lastName;
        state.firstName = payload.data.firstName;
        state.email = payload.data.email;
        state.phoneNumber = payload.phoneNumber;
      });
  },
});

export const { login } = authSlice.actions;
