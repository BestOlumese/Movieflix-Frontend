import React from 'react'
import { CiStreamOn, CiVideoOn } from "react-icons/ci";
import { MdDisplaySettings, MdMiscellaneousServices } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { FcStatistics } from "react-icons/fc";

const About = () => {
  return (
    <section className="contact-area contact-bg" style={{backgroundImage:'url("img/bg/contact_bg.jpg")'}}>
     <div className="container">
      <div className="row story">
        <h1 className="story-title">Our Story</h1>
        <p className='story-desc'>
        Cinemax Distribution Limited is a film distribution company aimed at providing integrated services to film makers and industry stakeholders as a whole.
        <br /> <br />

        We are the leading Co-Creator & Distributor of the Best African content, Positioning African Stories on the Global Stage, by partnering with the most inspiring creators, creating value for investors, partners & all stakeholders.

        </p>
      </div>
      <h1 className="team">Our Awesome & Experienced Team</h1>
       <div className="row">
         <div className="col-xl-4 col-lg-5">
           <div className="img-container">
            <img className='owner' src='/img/about/owner.png' />
           </div>
         </div>
         <div className="col-xl-8 col-lg-7">
           <h1 className='owner-title'>Ope Ajayi<br/> Founder & CEO</h1>
           <p className="owner-desc">
           Ope Ajayi has over 21 years business management, entertainment, advisory and entrepreneurship experience. He has a proven track record of leading successful teams, managing start-ups, expansions, and turnarounds, raising capital and debt, growing revenue and market share, and forecasting industry trends. He spent 10 years in the financial services sector and a subsequent 11 years in the Cinemas & film Distribution. 
           <br/> <br/>

          He was an Executive Director at Genesis Cinemas where he was directly responsible for overseeing the cinema business and numerous projects including the building & fit out of 11 cinemas across the country and in Cameroon 
          <br/> <br/>

          A Co-Executive producer on the blockbuster films such as Brotherhood and Ada Omo Daddy, he is also the Executive Producer and Producer of The Party.
          <br/> <br/>
                    
          Ope is the Founder, CEO of Cinemax Distribution Limited, A company set up to distribute and provide integrated services across the various film sub-sectors from fundraising, advisory, infrastructure, local and International content sales. 
          <br/> <br/>

          He is also an alumnus of the University of Lagos and the Lagos Business School

           </p>
         </div>
       </div>
       <div className="row spacer">
         <div className="col-xl-4 col-lg-5">
           <div className="img-container">
            <img className='owner' src='/img/about/owner-2.png' />
           </div>
         </div>
         <div className="col-xl-8 col-lg-7">
           <h1 className='owner-title'>Onyeka Nnama<br/> GM, Business Operations & Licensing</h1>
           <p className="owner-desc">
           Onyeka is the  GM  of  Business  Operations  Cinemax Distribution Limited. With a professional background in sales,  marketing, customer service, operations project management  across diverse industries. She is a goal-oriented individual with 11+  years of varied experiences to the business with a proven track  record.
          <br/> <br/>

          Roles she has held during her career  include Head of Operations, Operations Manager, Customer Service Manager and  Business Development manager
          <br/> <br/>

          She is currently the GM of Business Operations & Licensing for Cinemax  Distribution Limited


           </p>
         </div>
       </div>
       <div className="row">
        <div className="col-xl-12">
        <h1 className='service-title'>Our Services</h1>
        </div>
         <div className="col-xl-4 col-lg-4">
            <div className="box">
                <CiVideoOn style={{fontSize: '70px', marginBottom: '20px'}}/>
                <h3>Theatrical Distribution</h3>
                <p>We work with filmakers to release films to the big screen across West Africa & Central Africa. This cover marketing, Liason with Cinemas, Reporting, Collections.</p>
            </div>
         </div>
         <div className="col-xl-4 col-lg-4">
            <div className="box">
                <CiStreamOn style={{fontSize: '70px', marginBottom: '20px'}}/>
                <h3>Streaming</h3>
                <p>We have a strong relationship with the global streaming providers and we constantly licence content on behalf of our clients. Our distribution network also covers inflight entertainment, amongst others.</p>
            </div>
         </div>
         <div className="col-xl-4 col-lg-4">
            <div className="box">
                <FcStatistics style={{fontSize: '70px', marginBottom: '20px'}}/>
                <h3>Film-Financing & Co-Productions</h3>
                <p>We have expertise in co-creating and selecting profitable, commercially viable films, working with some of the best talents in the industry and potentially generating superior returns for investors.</p>
            </div>
         </div>
         <div className="col-xl-4 col-lg-4">
            <div className="box">
                <BsMegaphone style={{fontSize: '70px', marginBottom: '20px'}}/>
                <h3>Film Marketing Services</h3>
                <p>Great films require excellent marketing. We create the most riveting ways of promoting films and positioning for commercial success.</p>
            </div>
         </div>
         <div className="col-xl-4 col-lg-4">
            <div className="box">
                <MdDisplaySettings style={{fontSize: '70px', marginBottom: '20px'}}/>
                <h3>Cinema Setup & Advisory Services</h3>
                <p>We are experts in building out cinema infrastructure services & set up. We source for the best & most efficiient cinema equipment from across the world. We represent the leading suppliers across the world covering Europe, UAE, China & USA.</p>
            </div>
         </div>
         <div className="col-xl-4 col-lg-4">
            <div className="box">
                <MdMiscellaneousServices  style={{fontSize: '70px', marginBottom: '20px'}}/>
                <h3>Cinema Management Services</h3>
                <p>We offer management services to independent cinemas on behalf of cinema owners.</p>
            </div>
         </div>
       </div>
     </div>
     
           {/* <p className='owner-desc'>
           Cinemax Distribution Limited is a film distribution company aimed at providing integrated services to film makers and industry stakeholders as a whole.
           <br/><br/>

            We are the leading Co-Creator & Distributor of the Best African content, Positioning African Stories on the Global Stage, by partnering with the most inspiring creators, creating value for investors, partners & all stakeholders.
            <br /><br/>
            Founder & CEO
            Ope Ajayi has over 21 years business management, entertainment, advisory and entrepreneurship experience. He has a proven track record of leading successful teams, managing start-ups, expansions, and turnarounds, raising capital and debt, growing revenue and market share, and forecasting industry trends. He spent 10 years in the financial services sector and a subsequent 11 years in the Cinemas & film Distribution.
            <br/><br/>
            He was an Executive Director at Genesis Cinemas where he was directly responsible for overseeing the cinema business and numerous projects including the building & fit out of 11 cinemas across the country and in Cameorun
            <br/><br/>
            A Co-Executive producer on the blockbuster films such as Brotherhood and Ada Omo Daddy, he is also the Executive Producer and Producer of The Party.
            <br/><br/>
            Ope is the Founder, CEO of Cinemax Distribution Limited, A company set up to distribute and provide integrated services across the various film sub-sectors from fundraising, advisory, infrastructure, local and International content sales.
            <br/><br/>
            He is also an alumnus of the University of Lagos and the Lagos Business School
           </p> */}
   </section>
  )
}

export default About