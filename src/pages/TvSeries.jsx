import React from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import Breadcrumb from '../components/tv/Breadcrumb'
import TvSerise from '../components/moviedetails/TvSeries'

const TvSeries = () => {
  return (
    <div>
        <HeaderTwo/>
        <main>
            <Breadcrumb/>
            <TvSerise/>
        </main>
        <Footer/>
    </div>
  )
}

export default TvSeries