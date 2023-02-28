import logo from "./logo.svg";
import "./App.css";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  const filterChange = (filter) => {
    setSearch(filter.search);
    setRating(filter.rating)
  };

  return (
    <div className="App">
      <Filter submit={filterChange} />
      <MovieList filter={{search,rating}} />
    </div>
  );
}

export default App;
