import { Outlet } from "react-router-dom";
import ButtonIcon from "../molecules/ButtonIcon";
import LinkIcon from "../molecules/LinkIcon";
import Button from "../atoms/Buttons/Button";
const Root = () => {
  return (
    <>
      <header>Header</header>
      <LinkIcon children="This is a link" />
      <ButtonIcon children="This is a Button" />
      <Button variant="fulldark">test</Button>
      <Button variant="fullbeige">test</Button>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Root;
