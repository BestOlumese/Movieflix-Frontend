import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import Breadcrumb from '../components/comingsoon/Breadcrumb'
import ComingSoonArea from '../components/comingsoon/ComingSoonArea'

const ComingSoon = () => {
    const [pagemenu, setPageMenu] = useState('coming-soon');
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [pagemenu])
    return (
        <div>
            <HeaderTwo pagemenu={pagemenu}/>
            <main>
                <Breadcrumb/>
                <ComingSoonArea/>
            </main>
            <Footer/>
        </div>
    )
}

export default ComingSoon