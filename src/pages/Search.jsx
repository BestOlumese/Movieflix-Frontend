import React from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import { Breadcrumb } from '../components/search/Breadcrumb'
import SearchMovie from '../components/search/SearchMovie'

const Search = () => {
  return (
    <div>
     <HeaderTwo/>
    <main>
        <Breadcrumb/>
        <SearchMovie/>
    </main>
     <Footer/>
    </div>
  )
}

export default Search