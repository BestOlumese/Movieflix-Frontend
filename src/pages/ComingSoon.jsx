import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import Breadcrumb from '../components/comingsoon/Breadcrumb'
import ComingSoonArea from '../components/comingsoon/ComingSoonArea'
import Newsletter from '../components/movie/Newsletter'

const ComingSoon = () => {
    const [pagemenu, setPageMenu] = useState('coming-soon');
    return (
        <div>
            <HeaderTwo pagemenu={pagemenu}/>
            <main>
                <Breadcrumb/>
                <ComingSoonArea/>
                <Newsletter />
            </main>
            <Footer/>
        </div>
    )
}

export default ComingSoon