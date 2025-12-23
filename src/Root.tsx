import { Outlet } from "react-router-dom";
import MainHeader from "./components/templates/header/MainHeader";

const Root = () => {
  return (
    <>
      <div className="lg:flex ">
        <MainHeader />
      <main>
        <Outlet />
      </main>
      </div>
    </>
  );
};

export default Root;
