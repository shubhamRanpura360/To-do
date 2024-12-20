import { useContext } from "react";
import { createContext } from "react";

// 1 step
export const BioContext = createContext();

// 2step
export const BioProvider = ({children}) => {
  const myName = "pokemon";
  const myAge = 21;
  console.log(children);
  
  return <BioContext.Provider value={{myName , myAge}}>
    {children}
  </BioContext.Provider>;

}; 

 // Custom Hooks   

export const useBioContext = () => {
    const context = useContext(BioContext)
    return context;
 };
