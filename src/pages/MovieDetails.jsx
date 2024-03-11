import React from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import MovieDetail from '../components/moviedetails/MovieDetail'
import Newsletter from '../components/movie/Newsletter'

const MovieDetails = () => {
  return (
    <div>
        <HeaderTwo/>
        <main>
            <MovieDetail/>
            <Newsletter />
        </main>
        <Footer/>
    </div>
  )
}

export default MovieDetails