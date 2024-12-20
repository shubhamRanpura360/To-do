import { useId } from "react";
import { forwardRef } from "react";
import { useRef } from "react"

export const ForwordRefs = () => {

    const username = useRef(null)
    const password = useRef(null)
 
 const  handleformSubmit = (e) =>{
   e.preventDefault();
   console.log(username.current.value , password.current.value);    
 }; 
    return(
        <form onSubmit={handleformSubmit}>
         <BeforeReact19Input label="username" ref={username} />
         <BeforeReact19Input label="password" ref={password}/>
         <button>Submit</button>
        </form>
    )
};

// I need to create BeforeReact19Input 

const BeforeReact19Input = forwardRef( ( props , ref) =>{
    const id = useId();
   return (
    <div>
        <label htmlFor= {id}>{props.label} </label>
        <input type="text" ref={ref} />
    </div>
   )
}); 

// afterReact19 

// const BeforeReact19Input = ( props) =>{
//     const id = useId();
//    return (
//     <div>
//         <label htmlFor= {id}>{props.label} </label>
//         <input type="text" ref={props.ref} />
//     </div>
//    )
// }; 