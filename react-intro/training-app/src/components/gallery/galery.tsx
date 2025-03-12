import Profile from './Profile'

const Galery = () => {
  return (
    <div>
      {Array.from({ length: 10 }, (_, i) => (
        <Profile key={i} value={i}/>
      ))}
    </div>
  )
}

export default Galery
