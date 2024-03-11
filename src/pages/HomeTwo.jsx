import React, { useEffect, useState } from 'react'
import SliderArea from '../components/hometwo/SliderArea'
import HeaderTwo from '../components/HeaderTwo';
import TvSerise from '../components/homeone/TvSerise';
import UpcomingMovie from '../components/homeone/UpcomingMovie';
import ComingSoon from '../components/homeone/ComingSoon';
import Footer from '../components/Footer';
import GalleryArea from '../components/hometwo/GalleryArea';
import Newsletter from '../components/movie/Newsletter';

const HomeTwo = () => {
  const [pagemenu, setPageMenu] = useState('home');
  return (
        <>
                <HeaderTwo pagemenu={pagemenu}/>
            <main>
                <SliderArea/>
                <UpcomingMovie/>
                <TvSerise/>
                <ComingSoon/>
                <Newsletter />
            </main>
                <Footer/>
        </>
  )
}

export default HomeTwo
