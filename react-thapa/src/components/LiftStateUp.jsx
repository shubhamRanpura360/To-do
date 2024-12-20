import { useState } from "react";

export const LiftingState = () => {
    const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue ={inputValue} setInputValue = {setInputValue} />
      <DisplayComponent inputValue = {inputValue} />
    </>
  );
};

const InputComponent = ( {inputValue , setInputValue}) => {
  
  return (
    <>
      <input
        type="text"
        placeholder="Enter your Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </>
  );
};

const DisplayComponent = ( {inputValue}) =>{
    return(
        <>
        <p> The Current input Value is: {inputValue} </p>
        </>
    )
}