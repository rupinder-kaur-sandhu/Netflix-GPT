import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondarContainer from "./SecondaryContainer";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header></Header>
      {showGPTSearch ? (
        <GPTSearch></GPTSearch>
      ) : (
        <>
          <MainContainer></MainContainer>{" "}
          <SecondarContainer></SecondarContainer>
        </>
      )}
    </div>
  );
};

export default Browse;
