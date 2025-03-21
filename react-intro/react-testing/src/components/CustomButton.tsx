
interface Props {
  onClick : () => void
}

const CustomButton = ({onClick} : Props) => {
  return (
    <button onClick={onClick}>Click me</button>
  )
}


export default CustomButton
