/** @format */
import "./App.css";
import { Movie } from "./components/Movie";
import { Movies } from "./components/Movies";
import { MyMovies } from "./models/MyMovies";

function App() {
  const movies: MyMovies[] = [
    new MyMovies("Hungergames", 160, "action/ adventure"),
    new MyMovies("Taken", 120, "action/ drama"),
    new MyMovies("White chicks", 140, "comedy"),
  ];


return (
  <div className="App">
    <Movies myMovies={movies}/>


  </div>
);

}

export default App;
