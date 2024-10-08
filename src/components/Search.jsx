import { useState, useEffect } from 'react';

const Search = ({ searchMovies }) => {
    const [searchInput, setSearchInput] = useState('');
    const [type, setType] = useState('all');

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            searchMovies(searchInput, type);
        }
    };

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(searchInput, event.target.dataset.type);
    };

    return (
        <div className='row'>
            <input
                placeholder='search'
                type='search'
                className='validate'
                value={searchInput}
                onChange={handleSearchInput}
                onKeyDown={handleSearch}
            />
            <button
                className='btn search-btn'
                onClick={() => searchMovies(searchInput, type)}
            >
                Search
            </button>
            <div>
                <label>
                    <input
                        className='with-gap'
                        name='group3'
                        type='radio'
                        data-type='all'
                        onChange={handleFilter}
                        checked={type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        name='group3'
                        type='radio'
                        data-type='movie'
                        onChange={handleFilter}
                        checked={type === 'movie'}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        name='group3'
                        type='radio'
                        data-type='series'
                        onChange={handleFilter}
                        checked={type === 'series'}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    );
};

export default Search;
