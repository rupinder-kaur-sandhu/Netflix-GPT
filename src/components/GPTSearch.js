import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GPTSearchBar></GPTSearchBar>
        <GPTMovieSuggestions></GPTMovieSuggestions>
      </div>
    </div>
  );
};

export default GPTSearch;
