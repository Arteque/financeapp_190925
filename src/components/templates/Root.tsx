import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
const Root = () => {
  return (
    <>
        <Header />
        <main><Outlet /></main>
        <footer>Footer</footer>
    </>
  )
}

export default Root