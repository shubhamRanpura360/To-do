import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../Components/UI/Card";
import { getMovie } from "../Services/GetService";
export const Movie = () => {
  const [data, setData] = useState([]);

  const getMovieData = async () => {
    try {
      const res = await getMovie();
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log("Error message:" , error.message);
      console.log("Error status:" , error.response.status);
      console.log("Error Data" , error.response.data);
       
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ul className="container grid grid-four--cols">
      {data.map((curElem) => {
        return <Card key={curElem.imdbID} movieData={curElem} />;
      })}
    </ul>
  );
};
