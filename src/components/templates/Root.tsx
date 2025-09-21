import { Outlet } from "react-router-dom";
import Button from "../atoms/Buttons/Button";
const Root = () => {
  return (
    <>
      <header>Header</header>
      <Button variant="fullorangered">Test Button</Button>
      <Button variant="fulldark">Test Button</Button>
      <Button variant="fullbeige">Test Button</Button>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Root;
