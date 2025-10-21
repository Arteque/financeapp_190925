import { Link } from "react-router-dom"

interface AnchorPorps extends React.HTMLProps<HTMLAnchorElement>{
    href:string;
}

const Anchor = ({href,...props}:AnchorPorps) => {
  return (
    <Link to={href} {...props}/>
  )
}

export default Anchor