import React from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import MovieDetail from '../components/moviedetails/MovieDetail'

const MovieDetails = () => {
  return (
    <div>
        <HeaderTwo/>
        <main>
            <MovieDetail/>
        </main>
        <Footer/>
    </div>
  )
}

export default MovieDetails