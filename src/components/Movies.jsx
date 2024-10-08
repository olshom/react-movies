import Movie from './Movie';

const Movies = ({ movies }) => {
    //console.log('i want to see movies', movies, movies.lenght);
    return (
        <div className='movies'>
            {movies ? (
                movies.map((movie) => (
                    <Movie key={movie.imdbID} movie={movie} />
                ))
            ) : (
                <p>Nothing found</p>
            )}
        </div>
    );
};

export default Movies;
