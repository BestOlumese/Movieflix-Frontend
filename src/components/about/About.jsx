import React from 'react'
import { CiStreamOn, CiVideoOn } from "react-icons/ci";
import { MdDisplaySettings, MdMiscellaneousServices } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { FcStatistics } from "react-icons/fc";
import ReadMoreReact from 'read-more-react';

const About = () => {
  const about = {
    one: "Ope Ajayi has over 21 years business management, entertainment, advisory and entrepreneurship experience. He has a proven track record of leading successful teams, managing start-ups, expansions, and turnarounds, raising capital and debt, growing revenue and market share, and forecasting industry trends.\n\nHe spent 10 years in the financial services sector and a subsequent 11 years in the Cinemas & film Distribution. He was an Executive Director at Genesis Cinemas where he was directly responsible for overseeing the cinema business and numerous projects including the building & fit out of 11 cinemas across the country and in Cameroon.\n\nA Co-Executive producer on the blockbuster films such as Brotherhood and Ada Omo Daddy, he is also the Executive Producer and Producer of The Party.\n\nOpe is the Founder, CEO of Cinemax Distribution Limited, A company set up to distribute and provide integrated services across the various film sub-sectors from fundraising, advisory, infrastructure, local and International content sales.\n\nHe is also an alumnus of the University of Lagos and the Lagos Business School.",

    two: "Onyeka is the  GM  of  Business  Operations  Cinemax Distribution Limited. With a professional background in sales,  marketing, customer service, operations project management  across diverse industries. She is a goal-oriented individual with 11+  years of varied experiences to the business with a proven track  record.\n\nRoles she has held during her career  include Head of Operations, Operations Manager, Customer Service Manager and  Business Development manager.\n\nShe is currently the GM of Business Operations & Licensing for Cinemax  Distribution Limited",

    three: "Jadesola is a dynamic and skilled legal professional with over 7 years of experience and a proven track record of success in a variety of practice areas. She is proficient in contract drafting, negotiation, and review, ensuring that all interests are protected and agreements are legally sound.\n\nHer core areas of practice include corporate law and commercial law, civil litigation, compliance and regulatory advisory, IT, fintech, and entertainment law.\n\nShe also has experience in human resource management, with her most recent role being a Legal/HR Executive. She has drafted and negotiated various international commercial contracts and advised on the corporate formation and governance of a new startup fintech company. Jadesola has a Master's degree (in view) from the University of Lagos.",

    four: "Ifeyinwa is a Result-oriented Accountant with over 4 years combined experience in financial accounting, financial management, audit and internal control. She is skilled in developing and maintaining accounting books, analyzing and preparing financial reports for management decision making.\n\nShe has worked in organizations like West Gate Technologies and is in her final stage to become an Associate Member of the Institute of Chartered Accountants of Nigeria.\n\nShe is currently an Account executive for Cinemax Distribution Limited.",

    five: "Eric is an ambitious, hardworking, solution-focused Logistics Officer with over 5 years of experience in Logistics. He is a team player, strong communicator with a customer- centric approach while ensuring seamless Logistics coordination and timely service delivery at a reduced cost. improving efficiency, result oriented.",

    six: "As a Creative Designer at Cinemax Distribution Limited, Akerele Tunbosun takes on the exciting role of designing creatives for the company which could be used digitally or in prints. His role also comes with graphic video creations and editing.\n\n Tunbosun, a graduate from the Federal University of Agriculture Abeokuta (FUNAAB), has over 10 years of experience in creating appealing designs through drawings and sketches, computer graphics designs, and video creations.\n\nHe has over the years successfully worked with and for various establishments both in Nigeria and outside the country. Added to his expertise is his branding and content management skills.",

    seven: "Angel as an Admin Executive, is a key member of the company's administrative team. She provides support to senior management and ensures the smooth operation of daily office activities. With excellent organizational and communication skills,she plays a crucial role in maintaining an efficient and productive work environment. She is also responsible for managing various administrative tasks, such as organizing meetings, handling correspondence, and maintaining office supplies.",

    eight: "Juliet is a creative and analytical digital marketing executive with years of comprehensive experience in developing and executing successful digital marketing strategies. She has a track record in enhancing brand visibility and driving online engagement through innovative campaigns across various digital platforms.\n\nSkilled in SEO, PPC, social media marketing, content creation, and email marketing, with a strong ability to analyze data and optimize performance for maximum ROI. Excellent communication and project management skills, with a passion for staying ahead of industry trends and leveraging new technologies to achieve business objectives.\n\nShe is a graduate of the University of Lagos and holds certifications in Digital Marketing from META, Google Digital Garage, and various other reputable organizations.\n\nCurrently, she's also pursuing a Master's degree in Digital Marketing and Business Transformation at Rome Business School."
  }
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
     <div className="row">
        <div className="col-xl-12">
        <h1 className='service-title'>Our Services</h1>
        </div>
         <div className="col-xl-4 col-lg-4">
            <div className="box">
                <CiVideoOn style={{fontSize: '70px', marginBottom: '20px'}}/>
                <h3>Theatrical Distribution</h3>
                <p>We work with film makers to release films to the big screen across West Africa & Central Africa. This cover marketing, Liason with Cinemas, Reporting, Collections.</p>
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
      <h1 className="team">Our Awesome & Experienced Team</h1>
       <div className="row">
         <div className="col-xl-4 col-lg-5">
           <div className="img-container">
            <img className='owner' src='/img/about/owner.png' />
           </div>
         </div>
         <div className="col-xl-8 col-lg-7">
           <h1 className='owner-title'>Ope Ajayi<br/> Founder & CEO</h1>
           <p className="owner-desc" style={{ whiteSpace: "pre-wrap" }}>
           {about.one}

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
           <p className="owner-desc" style={{ whiteSpace: "pre-wrap" }}>
           <ReadMoreReact min={200} ideal={300} max={500} text={about.two} />

           </p>
         </div>
       </div>
       <div className="row spacer">
         <div className="col-xl-4 col-lg-5">
           <div className="img-container">
            <img className='owner' src='/img/about/owner-3.png' />
            <p className='owner-desc'></p>
           </div>
         </div>
         <div className="col-xl-8 col-lg-7">
           <h1 className='owner-title'>Jadesola Koya<br/> Legal/HR Executive</h1>
           <p className="owner-desc" style={{ whiteSpace: "pre-wrap" }}>
           <ReadMoreReact min={200} ideal={300} max={500} text={about.three} />

           </p>
         </div>
       </div>
       <div className="row spacer">
         <div className="col-xl-4 col-lg-5">
           <div className="img-container">
            <img className='owner' src='/img/about/owner-5.png' />
            <p className='owner-desc'></p>
           </div>
         </div>
         <div className="col-xl-8 col-lg-7">
           <h1 className='owner-title'>Eric Okwara<br/> Logistics Officer</h1>
           <p className="owner-desc" style={{ whiteSpace: "pre-wrap" }}>
           <ReadMoreReact min={200} ideal={300} max={500} text={about.five} />

           </p>
         </div>
       </div>
       <div className="row spacer">
         <div className="col-xl-4 col-lg-5">
           <div className="img-container">
            <img className='owner' src='/img/about/owner-6.png' />
            <p className='owner-desc'></p>
           </div>
         </div>
         <div className="col-xl-8 col-lg-7">
           <h1 className='owner-title'>Tunbosun Akerele<br/> Creative Designer</h1>
           <p className="owner-desc" style={{ whiteSpace: "pre-wrap" }}>
           <ReadMoreReact min={200} ideal={300} max={500} text={about.six} />

           </p>
         </div>
       </div>
       <div className="row spacer">
         <div className="col-xl-4 col-lg-5">
           <div className="img-container">
            <img className='owner' src='/img/about/owner-7.png' />
            <p className='owner-desc'></p>
           </div>
         </div>
         <div className="col-xl-8 col-lg-7">
           <h1 className='owner-title'>Angel Omoamila<br/> Administrative Executive</h1>
           <p className="owner-desc" style={{ whiteSpace: "pre-wrap" }}>
           <ReadMoreReact min={200} ideal={300} max={500} text={about.seven} />

           </p>
         </div>
       </div>
       <div className="row spacer">
         <div className="col-xl-4 col-lg-5">
           <div className="img-container">
            <img className='owner' src='/img/about/owner-8.png' />
            <p className='owner-desc'></p>
           </div>
         </div>
         <div className="col-xl-8 col-lg-7">
           <h1 className='owner-title'>Juliet Peter<br/> Digital Marketing Executive</h1>
           <p className="owner-desc" style={{ whiteSpace: "pre-wrap" }}>
           <ReadMoreReact min={200} ideal={300} max={500} text={about.eight} />

           </p>
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
