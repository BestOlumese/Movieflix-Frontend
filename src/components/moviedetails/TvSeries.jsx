import React,{ useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Pagination } from 'antd';

const TvSerise = () => {
  const apiLink = process.env.REACT_APP_API_LINK;
  function handleChange (value){
    setNext(`${apiLink}/api/v1/movie/streaming-now/?category=${id}&page=${value}`);
    console.log(next);
  };

  const [id, setID] = useState([]);
  const [catid, setCatID] = useState([]);
  const [items, setItems] = useState([]);
  const [ditems, setdItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState([]);
  const [dcount, setDCount] = useState([]);
  const [next, setNext] = useState(`${apiLink}/api/v1/movie/streaming-now/?category=${id}&page=${page}`);
  useEffect(() => {
    fetch(next)
    .then(response => response.json())
    .then(data => { setdItems(data.results); setItems(data.results); setCount(data.count); setDCount(data.count); })
    .catch(err => console.log(err))
  }, [next])
  useEffect(() => {
    console.log(id);
    console.log(catid);
  }, [items]) 
  useEffect(() => {
    fetch(`${apiLink}/api/v1/category/`)
    .then(response => response.json())
    .then(data => {setCategory(data)})
    .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    fetch(`${apiLink}/api/v1/movie/streaming-now/?category=${id}`)
    .then(response => response.json())
    .then(data => {setItems(data.results); setCount(data.count);})
    .catch(err => console.log(err))
  }, [id])
 
  return (
    <section className="ucm-area ucm-bg" style={{backgroundImage:'url("../../img/bg/ucm_bg.jpg")'}}>
    <div className="ucm-bg-shape" style={{backgroundImage:'url("../../img/bg/ucm_bg_shape.png")'}} />
    <div className="container">
      <div className="row align-items-end mb-55">
        <div className="col-lg-6">
          <div className="section-title text-center text-lg-left">
            <h2 className="title">Now Streaming</h2>
            {
              (items.length == 0) && (<p className='no-movie'>No Movies Available</p>)
            }
          </div>
        </div>
      
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="tr-movie-menu2-active text-center">
            <button className={(catid.length == 0) ? 'active' : ''} data-filter="*" onClick={()=> {setItems(ditems); setCatID([]); setID([]); setCount(dcount)}}>All Movies</button>
            {
              category.map((elem) => {
                const { id: did, name } = elem;
                return (
                  <button className={(did == catid && id.length != 0) ? 'active' : ''}  data-filter=".cat-two" onClick={()=> {setID(did); setCatID(did)}}>{name}</button>
                );
              })
            }
          </div>
        </div>
      </div>


      <div className="row tr-movie-active">
        {
               items.map((elem)=>{
                const {slug,image,title,year_released,rating,duration} = elem;

          return(

            
             <motion.div layout className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two" key={slug}>
            <div className="movie-item mb-60">
              <motion.div layout className="movie-poster">
                <Link to={"/movie-details/"+slug}><img src={image} alt="" /></Link>
              </motion.div>
              <div className="movie-content">
                <div className="top">
                  <h5 className="title"><Link to={"/movie-details/"+slug}>{title}</Link></h5>
                  <span className="date">{year_released}</span>
                </div>
                <div className="bottom">
                  <ul>
                    <li><span className="quality">{rating}</span></li>
                    <li>
                      <span className="duration"><i className="far fa-clock" />{duration}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
       
         
         
        
        
         
      
       
           
          )
        })

      }
      </div>
      <div className="row">
        <div className="col-12">
          <div className="pagination-wrap mt-30">
            <nav>
              <ul>
                <Pagination
                  defaultCurrent={1}
                  defaultPageSize={8} //default size of page
                  onChange={handleChange}
                  total={count} //total number of card data available
                />
              </ul>
            </nav>
          </div>
        </div>
      </div>
     
    </div>
  </section>
  )
}

export default TvSerise