
interface Props {
  value : number
}

const Profile = ({value} : Props) => {

  return (
    <div>

      <h1>This is guest {value}</h1>
    </div>
  );
};

export default Profile;
