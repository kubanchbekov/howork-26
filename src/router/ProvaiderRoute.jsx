import React from "react";
import { Navigate } from "react-router-dom";

const ProvaiderRoute = ({ isAuth, fallbackPath, component: Component }) => {
  console.log(isAuth);
  if (isAuth) {
    return Component;
  }
  return <Navigate to={fallbackPath} />;
};

export default ProvaiderRoute;
