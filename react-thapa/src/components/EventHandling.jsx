export const EventHandling = () => {
  // function handelButtonClick(){
  //     alert("hy i am onClick event")
  // }

  const handelButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);

    alert("hy i am on click event!!!");
  };
  const handleWelcomeUser = (user) => {
    console.log(`hy ${user} ,WelCome`);
  };

  return (
    <>
      <button onClick={handelButtonClick}>Click Me!</button>
      <br />
      <button onClick={(event) => handelButtonClick(event)}>Click Me 2!</button>
      <br />
      {/* <button onClick={handleWelcomeUser}>Click Me!</button> */}
      <button onClick={() => handleWelcomeUser("tech")}>Click Me!</button>
    </>
  );
};
