import { useState } from "react";
import "./index.css";

export const ContactForm = () => {
  //   const [username, setuserName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  const [contacts, setContacts] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({ ...prev, [name]: value }));
  };

  const handleformSubmit = (e) => {
    e.preventDefault();
    // const contactData = {
    //     username,
    //     email,
        // message,
    // };
    console.log(contacts);
  };

  return (
    <div className="container1">
      <div className="card">
        <h1>Contact Form</h1>
        <form onSubmit={handleformSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text" 
            name="username"
            required
            autoComplete="off"
            value={contacts.username}
            onChange={handleInputChange} 
            // onChange={(e) => setuserName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            value={contacts.email}
            onChange={handleInputChange}
            // onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Message</label>
          <textarea
            type="password"
            name="message"
            required
            autoComplete="off"
            rows="6"
            value={contacts.message}
            onChange={handleInputChange}
            // onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}; 
