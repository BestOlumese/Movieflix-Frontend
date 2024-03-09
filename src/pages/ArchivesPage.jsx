import React, { useState } from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import Breadcrumb from '../components/archives/Breadcrumb'
import Archive from '../components/archives/Archive'

const ArchivesPage = () => {
  const [pagemenu, setPageMenu] = useState('archives');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pagemenu])
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