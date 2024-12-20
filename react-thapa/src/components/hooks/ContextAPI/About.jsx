import { useContext } from "react"
import { BioContext, useBioContext } from "."

export const About = () =>{
   const {myName, myAge} = useBioContext()
    return(
        <h1>Hello Context API(about). My Name is {myName}.i am {myAge} yrs Old.</h1>
    )
}