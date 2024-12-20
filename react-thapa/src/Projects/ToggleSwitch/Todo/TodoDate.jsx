import { useEffect, useState } from "react";

export const TodoDate = () => {

  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <h2 className="date-time"> {dateTime} </h2>;
}; 
