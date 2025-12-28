import { Outlet } from "react-router-dom";
import MainHeader from "./components/templates/header/MainHeader";

const Root = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-[0.3fr_0.7fr] lg:gap_16 lg:items-center">
        <MainHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Root;
