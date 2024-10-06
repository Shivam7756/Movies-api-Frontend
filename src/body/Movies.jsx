import { useEffect } from 'react'
import MovieCard from './MovieCard'
import SearchBox from './SearchBox'

export default function Movies({ movies, onKeywordChange }) {
    return (
        <div className="md:grid md:grid-cols-12 md:gap-4 md:mx-8 md:my-8">
            <div className="md:col-span-12 md:flex md:justify-end">
                <SearchBox onKeywordChange={onKeywordChange} />
            </div>
            {
                movies.map(movie => {
                    return (
                        <div className="md:col-span-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                })
            }
        </div>
    )
}