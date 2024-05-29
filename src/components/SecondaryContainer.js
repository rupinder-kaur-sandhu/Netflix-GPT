import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondarContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Trending"}
          movies={movies.trendingMovies}
        ></MovieList>
        <MovieList title={"Popular"} movies={movies.popularMovies}></MovieList>
        <MovieList
          title={"Upcoming Movies"}
          movies={movies.upcomingMovies}
        ></MovieList>
        <MovieList
          title={"Horror"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondarContainer;
