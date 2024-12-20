 import seriesData from "../api/seriesData.json"
 import { SeriesCard } from "./SeriesCard";

 const NetflexSeries = () =>{
   
    return(
      <ul className="grid grid-three--cols">
        {seriesData.map ( (curElem) => {
        return(
          <SeriesCard  key={curElem.id} curElem = {curElem}/> 
        )
       
        })}

    </ul>
    
    );
  };
  
  export default NetflexSeries;  



  
// const  NetflexSeries = () =>{
//   return(
//     <ul>
//       {seriesData.map ( (curElem) =>{
      //  <SeriesCard key = {curElem.id curElem={curElem}}/>;

      
//         return(
//           <li key={curElem.id}>
//           <div>
//           <img src= {curElem.img_url} alt="" width = "35%" hight ="40%"/>
//           </div>
//          <h2> Name: {curElem.name}</h2>
//         <h3> Rating :{curElem.rating} </h3> 

//         <p>  Summary : {curElem.description} </p>
//         <p>  Genre : {curElem.genre} </p>
//         <p>  Cast : {curElem.cast} </p>
//         <a href= {curElem.watch_url} target="_blank">
//         <button >Watch Now</button> 
//         </a>       
//           </li>
//         )
//       })}
//     </ul>
//   )
// }



