import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import Breadcrumb from '../components/tv/Breadcrumb'
import TvSerise from '../components/moviedetails/TvSeries'

const TvSeries = () => {
  const [pagemenu, setPageMenu] = useState('now-streaming');
  return (
    <div>
        <HeaderTwo pagemenu={pagemenu}/>
        <main>
            <Breadcrumb/>
            <TvSerise/>
        </main>
        <Footer/>
    </div>
  )
}

export default TvSeries