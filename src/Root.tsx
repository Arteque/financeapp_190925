import { Outlet } from "react-router-dom";
import MainHeader from "./components/templates/header/MainHeader";

const Root = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default Root;
