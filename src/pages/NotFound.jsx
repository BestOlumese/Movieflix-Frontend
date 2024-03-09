import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import Breadcrumb from '../components/Breadcrumb'
import SearchMovie from '../components/search/SearchMovie'

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
     <HeaderTwo/>
    <main>
        <Breadcrumb title='404 Page' pagetitle='Page Not Found'/>
        
    </main>
     <Footer/>
    </div>
  )
}

export default NotFound