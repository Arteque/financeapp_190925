import NavLink from "../../organisms/NavLink"
import { FaHome } from "react-icons/fa"
const PAGES = [
     {
        id:1,
        title: "Start",
        iconType: FaHome,
        url: "/"
     }
]

const MainNav = () => {
  return (
    <>
    {PAGES && (
        PAGES.map((item, index)=>(
            <NavLink key={index} children={item.title} icon={item.iconType} to={item.url} />
        ))
    )}
    </>
     )
}

export default MainNav