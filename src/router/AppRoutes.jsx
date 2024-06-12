import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import MainPage from "../components/MainPage";
import ProvaiderRoute from "./ProvaiderRoute";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/authSlice";

const AppRoutes = () => {
  const { isAuth, ...data } = useSelector((state) => state.auth);
  console.log(isAuth);
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      index: true,
      element: (
        <ProvaiderRoute
          component={<MainPage />}
          isAuth={isAuth}
          fallbackPath="/signin"
        />
      ),
    },
    {
      path: "/signin",
      element: (
        <ProvaiderRoute
          component={<SignIn />}
          isAuth={!isAuth}
          fallbackPath="/"
        />
      ),
    },
    {
      path: "/signup",
      element: (
        <ProvaiderRoute
          component={<SignUp />}
          isAuth={!isAuth}
          fallbackPath="/"
        />
      ),
    },
  ]);

  useEffect(() => {
    const getData = localStorage.getItem("AUTH");
    const parsedData = JSON.parse(getData);

    if (parsedData) {
      dispatch(login(parsedData));
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
