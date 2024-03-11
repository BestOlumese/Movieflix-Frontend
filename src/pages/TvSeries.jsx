import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import Breadcrumb from '../components/tv/Breadcrumb'
import TvSerise from '../components/moviedetails/TvSeries'
import Newsletter from '../components/movie/Newsletter'

const TvSeries = () => {
  const [pagemenu, setPageMenu] = useState('now-streaming');
  return (
    <div>
        <HeaderTwo pagemenu={pagemenu}/>
        <main>
            <Breadcrumb/>
            <TvSerise/>
            <Newsletter />
        </main>
        <Footer/>
    </div>
  )
}

export default TvSeries