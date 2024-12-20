import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  const checkIsOn = isOn ? "on" : "off"
  const toggleBGcolor = { backgroundColor: isOn ? "#4caf50" : "" }

  return (
    <>
    <h1> Toggle Switch <IoIosSwitch style={{color:"green"}}/> </h1>
      <div
        className="toggle-switch"
        style={toggleBGcolor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};
