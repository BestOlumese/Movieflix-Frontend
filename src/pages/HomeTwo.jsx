import React from 'react'
import SliderArea from '../components/hometwo/SliderArea'
import HeaderTwo from '../components/HeaderTwo';
import TvSerise from '../components/homeone/TvSerise';
import UpcomingMovie from '../components/homeone/UpcomingMovie';
import ComingSoon from '../components/homeone/ComingSoon';
import Footer from '../components/Footer';
import GalleryArea from '../components/hometwo/GalleryArea';

const HomeTwo = () => {
  return (
        <>
                <HeaderTwo/>
            <main>
                <SliderArea/>
                <UpcomingMovie/>
                <GalleryArea/>
                <TvSerise/>
                <ComingSoon/>
            </main>
                <Footer/>
        </>
  )
}

export default HomeTwo
