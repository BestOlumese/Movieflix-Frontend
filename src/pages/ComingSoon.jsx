import React from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
import Breadcrumb from '../components/comingsoon/Breadcrumb'
import ComingSoonArea from '../components/comingsoon/ComingSoonArea'

const ComingSoon = () => {
    return (
        <div>
            <HeaderTwo/>
            <main>
                <Breadcrumb/>
                <ComingSoonArea/>
            </main>
            <Footer/>
        </div>
    )
}

export default ComingSoon