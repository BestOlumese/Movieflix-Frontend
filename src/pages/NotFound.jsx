import React from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import Breadcrumb from '../components/Breadcrumb'
import SearchMovie from '../components/search/SearchMovie'

const NotFound = () => {
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