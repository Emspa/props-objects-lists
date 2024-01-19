import { MyMovies } from "../models/MyMovies";
import { Movie } from "./Movie";

/** @format */
interface IMoviesProps {
    myMovies: MyMovies[];
}


export const Movies = (props: IMoviesProps) => {
  return (
    <div>
      {props.myMovies.map((movie) => {
        return (
            <ul>
                <li>
                <Movie movies={movie} />

                </li>
            </ul>
        )

        
  
      })}
    </div>
  );
};
