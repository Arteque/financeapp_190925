import { Outlet } from "react-router-dom"
const Root = () => {
  return (
    <>
        <header>header</header>
        <main><Outlet /></main>
        <footer>Footer</footer>
    </>
  )
}

export default Root