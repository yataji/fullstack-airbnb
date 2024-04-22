import { Route, Navigate, Outlet } from "react-router-dom";
import isAuth from "./Utils/isAuth";

const PrivateRoute = () => {
  return isAuth() ? (
    <Outlet />
  ) : (
    <>
      <Navigate to="/" />
    </>
  );
};

export default PrivateRoute;

export const UserRoute = () => {
  return isAuth() ? (
    <>
      {" "}
      <Navigate to="/home" />{" "}
    </>
  ) : (
    <Outlet />
  );
};
