import { useEffect, useState } from 'react';
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        const peliculas = resp.data.results;
        setPeliculasEnCine(peliculas);
        setIsLoading(false);
    }

    useEffect(() => {
        // Now playing
        getMovies();
    }, []);


    return {
        peliculasEnCine,
        isLoading
    }
}
