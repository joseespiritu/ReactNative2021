import { useEffect, useState } from 'react';
import movieDB from "../api/movieDB";
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface";

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
    const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([]);

    const getMovies = async () => {
        const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const respTopRated = await movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const respUpcoming = await movieDB.get<MovieDBMoviesResponse>('/upcoming');
        const respPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
        setPeliculasEnCine(respNowPlaying.data.results);
        setPeliculasPopulares(respPopular.data.results);
        setIsLoading(false);
    }

    useEffect(() => {
        // Now playing
        getMovies();
    }, []);


    return {
        peliculasEnCine,
        peliculasPopulares,
        isLoading
    }
}
