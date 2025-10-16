
interface ContainerProps{
    children: React.ReactNode
}

const Container = ({children}:ContainerProps) => {
  return (
    <div className="bg-grey-100">{children}</div>
  )
}

export default Container