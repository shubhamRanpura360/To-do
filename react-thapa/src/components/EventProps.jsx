export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`hi , ${user}`);
  };
  const handleHover = () => {
    alert(`hey thanks for hovering me`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("tech")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onClick, onMouseEnter } = props;
  const handleGreeting = () => {
    console.log(`hey , user welcome`);
    onClick();
  };

  return (
    <>
      <button onClick={onClick}>click Me!</button>
      <button onMouseEnter={onMouseEnter}>hover Me!</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};
