import Navbar from './navbar/Navbar'
import Movies from './body/Movies'
import { useEffect, useState } from 'react'
import { getAllMovies } from './network/routes/MovieRoutes'

function App() {
  const [movies, setMovies] = useState([])
  const [masterMovies, setMasterMovies] = useState([])
  useEffect(() => {
    getAllMovies(movies => {
      setMovies(movies)
      setMasterMovies(movies)
    }, _ => { })
  }, [])

  const onKeywordChange = (keyword) => {
    console.log(keyword)
    if (keyword.length == 0) {
      setMovies(masterMovies)
      return
    }
    setMovies(masterMovies.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase())))
  }

  return (
    <div className="md:grid md:grid-cols-12">
      <div className="md:col-span-12">
        <Navbar />
      </div>
      <div className="md:col-span-12 md:w-full mt-28">
        <Movies movies={movies} onKeywordChange={onKeywordChange} />
      </div>
    </div>
  )
}

export default App
