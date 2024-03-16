import React, { useState } from 'react'

const Newsletter = () => {
  const [newsletter, setNewsLetter] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiLink = process.env.REACT_APP_API_LINK;

    const res = await fetch(`${apiLink}/api/v1/newsletter/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: newsletter })
    })

    const data = await res.json()

    if(data) {
      alert('You have successfully signed up for the newsletter')
      setNewsLetter("");
    }
  }
  return (
    <section className="newsletter-area newsletter-bg" style={{backgroundImage:'url("../img/bg/newsletter_bg.jpg")'}}>
    <div className="container">
      <div className="newsletter-inner-wrap">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="newsletter-content">
              <h4>Get our movies update.</h4>
              <p>Enter your email to signup for newsletter.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input type="email" required placeholder="Enter your email" onChange={(e) => setNewsLetter(e.target.value)} />
              <button className="btn">sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Newsletter