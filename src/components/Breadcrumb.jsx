import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function Breadcrumb(props) {
  return (
    <section className="breadcrumb-area breadcrumb-bg" style={{backgroundImage:'url("/img/bg/breadcrumb_bg.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="breadcrumb-content">
            <h2 className="title">{props.title}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{props.pagetitle}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Breadcrumb