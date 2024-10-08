const Movie = ({ movie }) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = movie;

    return (
        <div id={id} className='card movie'>
            <div className='card-image waves-effect waves-block waves-light'>
                {poster === 'N/A' ? (
                    <img
                        className='https://placehold.co/300x400/000000/FFFFFF/png'
                        src={poster}
                    />
                ) : (
                    <img className='activator' src={poster} />
                )}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {title}
                </span>
                <p>
                    {year} <span className='right'>{type}</span>
                </p>
            </div>
        </div>
    );
};

export default Movie;
