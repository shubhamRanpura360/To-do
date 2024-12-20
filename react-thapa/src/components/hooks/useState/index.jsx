import { useState } from "react"
import "./Hooks.css"

export const Counter = () =>{
    const[count , setCount] = useState(0)

    const handleIncrememt = () =>{
        setCount(count+1)
        console.log(count);
        
    }
    return(
        <>
        <div className="container-state-container" style={ {textAlign: "center"}}>  
         <h1> useState Hooks!</h1>
         <br/>
        <p>{count}</p>
        <button className="state-btn" onClick={handleIncrememt}>Increment</button>
        </div>  
        </>
    )
}