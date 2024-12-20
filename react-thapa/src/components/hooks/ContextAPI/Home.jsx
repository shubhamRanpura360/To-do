import {  useBioContext } from "."

export const Home = () =>{
   const {myName, myAge} = useBioContext()
    return(
        <h1>Hello Context API . My Name is {myName}.i am {myAge} yrs Old.</h1>
    )
}