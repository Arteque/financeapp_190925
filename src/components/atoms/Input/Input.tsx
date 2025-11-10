interface InputProps extends React.ReactElement<HTMLInputElement>{
    type:string;
}

const Input = ({type,...props}:InputProps) => {
  return (
    <input type={type} {...props} />
  )
}

export default Input