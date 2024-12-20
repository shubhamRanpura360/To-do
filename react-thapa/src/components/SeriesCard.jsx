import styled from "styled-components";

export const SeriesCard = (props) => {
  console.log(props);

  const { name, img_url, rating, description, cast, genre, watch_url } =
    props.curElem;

  const ratingClass = rating >= 8.5 ? "super-hit" : "average";

  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;

  return (
    <li className="card">
      <div>
        <img src={img_url} alt="" width="35%" hight="40%" />
      </div>
      <div className="card-content">
        <h2> Name: {name}</h2>
        <Rating>
          Rating
          <span className={`rating ${ratingClass}`}>{rating}</span>
        </Rating>
        <div className="parent-div">
          <p className="text-3xl font-bold underline">
            {" "}
            Summary : {description}{" "}
          </p>
          <p> Genre : {genre.join(",")} </p>
          <p> Cast : {cast.join(",")} </p>
        </div>
        <a href={watch_url} target="_blank">
          <div className="perent">
            <button className="card-button">Watch Now</button>
          </div>
        </a>
      </div>
    </li>
  );
};

// export const SeriesCard = (props) =>{
//   console.log(props);

//     return(

//         <li key={props.key}>
//         <div>
//           <img src= {props.curElem.img_url} alt="" width = "35%" hight ="40%"/>
//         </div>
//         <div>
//       <h2> Name: {props.curElem.name}</h2>
//       <h3> Rating :{props.curElem.rating} </h3>

//       <p>  Summary : {props.curElem.description} </p>
//       <p>  Genre : {props.curElem.genre} </p>
//       <p>  Cast : {props.curElem.cast} </p>
//        <a href= {props.curElem.watch_url} target="_blank">
//        <button>Watch Now</button>
//        </a>
//        </div>
//        </li>

//         );
// }
