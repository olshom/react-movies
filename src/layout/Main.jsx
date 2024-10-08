import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('componentdidmount', loading, movies);
        axios
            .get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((response) => {
                setMovies(response.data.Search);
                setLoading(false);
                console.log('movies', response.data.Search);
            });
    }, []);

    const searchMovies = (str, type = 'all') => {
        setLoading(true);
        axios
            .get(
                `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
                    type !== 'all' ? `&type=${type}` : ''
                }`
            )
            .then((response) => {
                setMovies(response.data.Search);
                setLoading(false);
            });
    };
    return (
        <main className='container content'>
            <Search searchMovies={searchMovies} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    );
};

export default Main;
