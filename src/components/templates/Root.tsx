import { Outlet } from "react-router-dom";
import Button from "../atoms/Buttons/Button";
const Root = () => {
  return (
    <>
      <header>Header</header>
      <Button variant="fulldark">Test Button</Button>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Root;
