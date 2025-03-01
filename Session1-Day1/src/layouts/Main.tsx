import { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
