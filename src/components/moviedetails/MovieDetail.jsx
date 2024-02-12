import React,{ useEffect, useState } from 'react'
import $ from "jquery";
import "magnific-popup"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


const MovieDetail = () => {
  const apiLink = process.env.REACT_APP_API_LINK;
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(()=>{
    fetch(`${apiLink}/api/v1/movie/${id}`)
    .then(response => response.json())
    .then(data => {setMovie(data)})
    .catch(err => setError(err))

		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
	},[])
  if(error) {
    history.push({
      pathname: '/404',
      state: {},
    });
  }
  return (
    <section className="movie-details-area" style={{backgroundImage:'url("../img/bg/movie_details_bg.jpg")'}}>
    <div className="container">
      <div className="row align-items-center position-relative">
        <div className="col-xl-3 col-lg-4">
          <div className="movie-details-img">
            <img src={apiLink+movie.image} alt="" />
            <a href={movie.youtube_url} className="popup-video"><img src="/img/images/play_icon.png" alt="" /></a>
          </div>
        </div>
        <div className="col-xl-6 col-lg-8">
          <div className="movie-details-content">
            <h5>Explore</h5>
            <h2>{movie.title}</h2>
            <div className="banner-meta">
              <ul>
                <li className="quality">
                  <span>{movie.rating}</span>
                  <span>{movie.movie_quality}</span>
                </li>
                <li className="category">
                  {movie.genre}
                </li>
                <li className="release-time">
                  <span><i className="far fa-calendar-alt" /> {movie.year_released}</span>
                  <span><i className="far fa-clock" /> {movie.duration}</span>
                </li>
              </ul>
            </div>
            <p>{movie.short_synopsis}</p>
            <div className="movie-details-prime">
              <ul>
                <li className="streaming">
                  <h6><a href={movie.netflix_url}>Nexflix Link</a></h6>
                </li>&nbsp;&nbsp;&nbsp;
                <li className="streaming">
                  <h6><a href={movie.prime_url}>Prime Video Link</a></h6>
                </li>
                <li className="watch"><a href={movie.youtube_url} className="btn popup-video"><i className="fas fa-play" /> Watch Trailer</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12">
      <div className="movie-history-wrap">
        <h3 className="title">Full <span>Synopsis</span></h3>
        <p>{movie.full_synopsis}</p>
      </div>
    </div>
  </section>
  )
}

export default MovieDetail