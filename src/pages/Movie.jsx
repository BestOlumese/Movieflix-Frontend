import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import { Breadcrumb } from '../components/movie/Breadcrumb'
import MovieArea from '../components/movie/MovieArea'
import Newsletter from '../components/movie/Newsletter'

const Movie = () => {
  const [pagemenu, setPageMenu] = useState('in-cinemas');
  return (
    <div>
     <HeaderTwo pagemenu={pagemenu}/>
    <main>
        <Breadcrumb/>
        <MovieArea/>
    </main>
     <Footer/>
    </div>
  )
}

export default Movie