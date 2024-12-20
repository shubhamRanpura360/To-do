import { useState } from "react";
import "./index.css";


export const RegistrationFormReact = () => {
  const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password:"",
      phoneNumber:"",
  });


  const handleInputChange = (e) =>{
    const {name , value} = e.target;  
   setUser ( (prev) => ( {...prev,[name]:value }))       
  };

  const handleFormSubmit = (event) =>{
    event.preventDefault(); 
    console.log(user);
    
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container1">
          <h1>Sign Up</h1>
          <p>Please fill in this Form to create an account.</p>

          <label htmlFor="FirstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter FirstName"
            required
            value={user.firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="LastName">Username</label>

          <input
            type="text"
            name="lastName"
            placeholder="Enter LastName"
            required
            value={user.lastName}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password" 
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInputChange}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>

          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            required
            value={user.email}
            onChange={handleInputChange}
          />

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>

          <input
            type="phone"
            name="phoneNumber"
            placeholder="9823456781"
            required
            value={user.phoneNumber}
            onChange={handleInputChange}
          />
    
          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              sigh Up
            </button>
          </div>
        </div>
      </form>
      <section
        className="summary"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <p>
          Hello,my name is
          <span>
            {user.firstName} {user.lastName}
          </span>
           Myy email address is <span>{user.email}</span> and my phone number is
          <span>{user.phoneNumber}</span>
        </p>
      </section>
    </>
  );
};
