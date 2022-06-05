import { useEffect, useState } from 'react';
import movieDB from "../api/movieDB";
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface";

interface MoviesState {
    nowPlaying: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
    popular: Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        topRated: [],
        upcoming: [],
        popular: []
    });

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');
        const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');

        const response = await Promise.all([ 
            nowPlayingPromise, 
            topRatedPromise, 
            upcomingPromise, 
            popularPromise 
        ]);

        setMoviesState({
            nowPlaying: response[0].data.results,
            topRated: response[1].data.results,
            upcoming: response[2].data.results,
            popular: response[3].data.results
        })
        setIsLoading(false);
    }

    useEffect(() => {
        // Now playing
        getMovies();
    }, []);


    return {
        ...moviesState,
        isLoading
    }
}
