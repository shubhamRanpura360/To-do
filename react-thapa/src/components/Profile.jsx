const Profile = () => {
  return (
    <div>
      <h1>Profile Card challenge</h1>
      <ProfileCard
        name="Alice"
        age={30}
        gretting={
          <div>
            <strong> Hi Alice , Have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading , playing</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="bonny"
        age={25}
        gretting={
          <div>
            <strong> Hi bonny , Keep up the Greate Work!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming , cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
};
export default Profile;

const ProfileCard = (props) => {
  const { name, age, gretting, children } = props;
  return (
    <>
      <h2>Name:{name} </h2>
      <p> Age:{age} </p>
      <p>{gretting} </p>
      <div>{children} </div>
    </>
  );
};
