import { MyMovies } from "../models/MyMovies"

interface IMovieProps {
    movies: MyMovies;
}
export const Movie = (props: IMovieProps) => {
    return(
        <div>
            <h4>{props.movies.name}</h4>
            <p>{props.movies.genre}</p>
            <p>{props.movies.length} min</p>
        </div>
    )
}