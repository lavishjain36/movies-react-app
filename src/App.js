import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieCard from "./components/MovieCard";
import data from "./data/data.json";
import { useState } from "react";

const App = () => {
  const [searchValue, setsearchValue] = useState("");

  const inputHandler = (event) => {
    setsearchValue(() => event.target.value);
  };

  const returnCards = () => {
    return data.filter(
      (card) =>
        card.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        searchValue === ""
    );
  };

  return (
    <div>
      <Navbar inputHandler={inputHandler} />
      <MovieCard data={data} returnCards={returnCards} />
      <Footer />
    </div>
  );
};

export default App;
