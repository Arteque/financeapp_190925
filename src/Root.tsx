import { Outlet } from "react-router-dom";
import MainHeader from "./components/templates/header/MainHeader";
import Footer from "./components/templates/footer/Footer";

const Root = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
