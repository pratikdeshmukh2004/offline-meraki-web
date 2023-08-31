import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./movie";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // axios
    //   .get(`https://api.themoviedb.org/3/discover/tv`, {
    //     params: {
    //       sort_by: "popularity.desc",
    //       api_key: "87dfa1c669eea853da609d4968d294be",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     setLoading(false);
    //     setMovies(response?.data?.results);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.log(error);
    //   });

    axios
      .get(`https://navgurukul.github.io/tarabai-shinde/data/meraki_partners.json`, 
      )
      .then((response) => {
        console.log(response, 'course...');
        setCourses(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap -mb-4">
      {/* {!loading && movies?.length ? (
        movies.map((movie, index) => (
          <Movie key={movie?.id ?? index} movie={movie} />
        ))
      ) : (
        <h2>Loading...</h2>
      )} */}
      <h4>Partners</h4>
      <ul>
      {Object.keys(courses)?.map((course)=>
        <li key={courses[course].id}>{courses[course].Name}</li>
      )}
      </ul>
    </div>
  );
};

export default Movies;
