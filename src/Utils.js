export function filterMovies(movies, keyword) {
    return movies.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()) ||
        movie.genres.filter(genre => genre.toLowerCase().includes(keyword.toLowerCase())).length > 0)
}