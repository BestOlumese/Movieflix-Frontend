import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import About from '../components/about/About'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'

const AboutPage = () => {
  const [pagemenu, setPageMenu] = useState('about-us');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pagemenu])
  return (
    <>
        <HeaderTwo pagemenu={pagemenu}/>
        <main>
            <Breadcrumb title="About Us" pagetitle='About Us'/>
            <About/>
        </main>
        <Footer/>
    </>
  )
}

export default AboutPage