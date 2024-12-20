 export const Practices = () =>{
    const students = [6 , 7 , 9];
   console.log( Boolean (students.length));
   console.log((students.length));
   
  return (
    <>
    
    <p> {! students.length && "No Students Found"} </p>
     {/* <p> {students.length ===0 && "No Students Found"} </p> */}
    {/* <p> Number Of Students:{students.length} </p> */}

    <p> {Boolean (!students.length) && " No students Found"} </p>
    <p> Number Of Students : {students.length} </p>

    </>
  )
} 