import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Contacts from '../components/contacts/Contacts'
import Map from '../components/contacts/Map'
import Footer from '../components/Footer'
import HeaderTwo from '../components/HeaderTwo'
const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pagemenu])
  const [pagemenu, setPageMenu] = useState('contact');
  return (
   <>
   <HeaderTwo pagemenu={pagemenu} />
   <main>
       <Breadcrumb title="Contact Us" pagetitle='Contact'/>
       <Contacts/>
   </main>
   <Footer/>
   </>
  )
}

export default ContactPage