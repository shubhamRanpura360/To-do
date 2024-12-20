import { useReducer } from "react";
import { useState } from "react"

export const ReducerComp = () => {

    const initialState = {
        count:0,
    }

    const reducer = (state , action) =>{
        console.log(state ,action);
        
        //   console.log(state ,action);
        //   if (action.type === "INCREMENT") {
        //       return state +1 ;
        //   }
        //   if (action.type === "DECREMENT") {
        //     return state -1 ;
        // }
        // if (action.type === "RESET") {
        //     return (state = 0) ;
        // }

      switch (action.type) {
        case "INCREMENT":  
        return {count: state.count + 1};

        case "DECREMENT":  
        return {count: state.count - 1};
      
        case "RESET":  
        return { count :0};

        default:
          return state;
      }

          
    }

    // const[count , setCount]=useState(0);
    const[state ,dispatch]= useReducer( reducer, initialState);
    console.log(useReducer(reducer,0));
     

    return(
        <>
         <div className= {`p-4 h-lvh flex flex-col justify-center items-center`}>
            <h1>{state.count}</h1>
            <button onClick={ () => dispatch({type:"INCREMENT"})}>Increment</button>
            <button onClick={ () => dispatch({type:"DECREMENT"})}>Decrement</button>
            <button onClick={ () => dispatch({type: "RESET"})}>Reset</button>
         </div>
        </>
    )
}