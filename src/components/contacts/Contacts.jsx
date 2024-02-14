import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// service_e1j9rk7
// lWMef-ygvCvw9wNCn
//  template_zlo1vft
const Contacts = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email:  '',
    message: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }
  const handleSubmit   = (e) =>  {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      'service_e1j9rk7',
      'template_zlo1vft',
      {
        from_name: form.name,
        to_name: 'Cinemaxdr',
        form_email: form.email,
        to_email: 'hello@cinemaxdr.com',
        message: form.message,
      },
      'lWMef-ygvCvw9wNCn'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert('Something went wrong')
    })
  }
  return (
     
     <section className="contact-area contact-bg" style={{backgroundImage:'url("img/bg/contact_bg.jpg")'}}>
     <div className="container">
       <div className="row">
         <div className="col-xl-8 col-lg-7">
           <div className="contact-form-wrap">
             <div className="widget-title mb-50">
               <h5 className="title">Contact Form</h5>
             </div>
             <div className="contact-form">
               <form onSubmit={handleSubmit}>
                 <div className="row">
                   <div className='col-md-6'>
                     <input type="text" name='name' placeholder="You Name *" onChange={handleChange} />
                   </div>
                   <div className="col-md-6">
                     <input type="email" name='email' placeholder="You  Email *" onChange={handleChange} />
                   </div>
                 </div>
                 <textarea name="message" placeholder="Type Your Message..." onChange={handleChange} defaultValue={""} />
                 <button className="btn">Send Message</button>
               </form>
             </div>
           </div>
         </div>
         <div className="col-xl-4 col-lg-5">
           <div className="widget-title mb-50">
             <h5 className="title">Information</h5>
           </div>
           <div className="contact-info-wrap">
             <p><span>Find solutions :</span> to common problems, or get help from a support agent industry's standard .</p>
             <div className="contact-info-list">
               <ul>
                 <li>
                   <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                   <p><span>Address :</span> 9 Ayo Babatunde Cresecent Oniru lagos</p>
                 </li>
                 <li>
                   <div className="icon"><i className="fas fa-phone-alt" /></div>
                   <p><span>Phone :</span> +234 815 155 5000</p>
                 </li>
                 <li>
                   <div className="icon"><i className="fas fa-envelope" /></div>
                   <p><span>Email :</span> hello@cinemaxdr.com</p>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>
     
   </section>
 
  )
}

export default Contacts