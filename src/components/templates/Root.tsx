import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";


const Root = () => {
  return (
      <>
        <Header loged />
        <main>
          <Outlet />
        </main>
        <footer>Footer</footer>
      </>
  );
};

export default Root;
