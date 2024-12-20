export const ParentComponent = () => {
  return (
    <section
      className={`p-4  h-lvh font-display tracking-wider flex flex-col 
        justify-center items-center bg-gray-900 text-white`}
    >
        <h1>Component A</h1>
        <ChildComponent data ="React Js"/>
    </section>
  );
};

const ChildComponent = (props) =>{
   return(
    <>
    <h1> Hello , I am Component B</h1>
    <GrandChildComponent data = {props.data}/>
    </>
   )
} 
const GrandChildComponent = (props) =>{
    return(
        <>
     <h1> Hello , I am Component C</h1>
     <GrandGrandChildComponent data = {props.data}/>
     </> 
    )
 } 

 const GrandGrandChildComponent = (props) =>{
    return(
     <h1>Hello , I Love {props.data}</h1>
    )
 } 