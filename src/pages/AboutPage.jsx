import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import About from '../components/about/About'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'

const AboutPage = () => {
  return (
    <>
        <HeaderTwo/>
        <main>
            <Breadcrumb title="About Us" pagetitle='About'/>
            <About/>
        </main>
        <Footer/>
    </>
  )
}

export default AboutPage