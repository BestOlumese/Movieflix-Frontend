import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import Breadcrumb from '../components/archives/Breadcrumb'
import Archive from '../components/archives/Archive'

const ArchivesPage = () => {
  const [pagemenu, setPageMenu] = useState('archives');
  return (
    <div>
        <HeaderTwo pagemenu={pagemenu}/>
        <main>
            <Breadcrumb/>
            <Archive/>
        </main>
        <Footer/>
    </div>
  )
}

export default ArchivesPage