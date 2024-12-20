import { useState } from "react";
import "./index.css";

export const LoginForm = () => {
  const[user, setUser] = useState({  
      username:"",
      password:"",
  });

 const handleInputChange = (e) =>{
    const {name , value} = e.target;
    setUser( (prev) => ( {...prev,[name]:value}))
 }

   const handleFormSubmit = (event) =>{
    event.preventDefault();
    console.log(user);    
  }

  return (
    <div className="container1">
      <div className="Card">
        <h1> Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInputChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
