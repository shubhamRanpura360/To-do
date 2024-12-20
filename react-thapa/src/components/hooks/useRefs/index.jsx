import { useRef } from "react";
import "./index.css" 
 export const UseRef = () =>{
    
    // const username = document.getElementById("username")
    // const password =  document.getElementById("password")

    const username = useRef(null)
    const password = useRef(null) 

    // console.log(username);
    

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(username.current.value , password.current.value);        
    };

    return(
        <form className="container-1" onSubmit={handleFormSubmit}>
            <input type="text" id="username" ref={username} />
            <br/>
            <input type="text" id="password" ref={password}/>
            <br/>
            <button>Submit</button>
        </form>
    )
}