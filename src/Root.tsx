import { Outlet } from "react-router-dom";
import MainHeader from "./components/templates/header/MainHeader";

const Root = () => {
  return (
    <>
      <div className="lg:min-h-screen lg:grid lg:grid-cols-2 lg:m-5">
        <MainHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Root;
