import { useState } from "react";
import "./ShortCir.css";

const ShortCircuitExample = () => {
    const [isLoggedIn , setisLoggedIn] = useState()
    const [user , setUser] = useState("")
    return(
        <section className="containershort-container">
            <h1>Welcome To Shortcircuit Evaluation!</h1>

           { isLoggedIn &&  <p>You are Logged In!</p>}

           <p className="user-status">
           {user ? ` ${user}` : "Plz Logged In!"}
           </p>
       
            <div className="grid-three-cols"> 
                <button onClick={ () =>  setisLoggedIn(!isLoggedIn)}>Toggle Login state</button>
                <button onClick={ () => setUser("Hello, everyOne")}>Set User</button>
                <button onClick={ () =>setUser("") }>Clear User</button>
            </div> 
        </section>
    );
}; 

export  default ShortCircuitExample