import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Homeone from './pages/Homeone';
import HomeTwo from './pages/HomeTwo';
import Movie from './pages/Movie';
import MovieDetails from './pages/MovieDetails';
import TvSeries from './pages/TvSeries';
import { useEffect } from "react"
import $ from "jquery";
import Pricing from './pages/Pricing';
import ContactPage from './pages/ContactPage';
import Search from './pages/Search';
import { createBrowserHistory } from 'history';
import ComingSoon from './pages/ComingSoon';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import ArchivesPage from './pages/ArchivesPage';


export const history = createBrowserHistory({ forceRefresh: true });

function App() {

  
  useEffect(()=>{
    function preloader() {
      $('#preloader').delay(0).fadeOut();
    };
    $(window).on('load', function () {
      preloader();
      
     
    });
  })
  return (
    <div className="App">
     <Router history={history}>
       
        <Switch>

          <Route exact={true} path="/">
            <HomeTwo/>
          </Route>
          
          <Route exact={true} path="/in-cinemas">
            <Movie/>
          </Route>
          <Route exact={true} path="/movie-details/:id">
            <MovieDetails/>

          </Route>
          <Route exact={true} path="/now-streaming">
            <TvSeries/>

          </Route>
          <Route exact={true} path="/coming-soon">
            <ComingSoon/>

          </Route>
          <Route exact={true} path="/archives">
            <ArchivesPage />

          </Route>

          <Route exact={true} path="/about-us">
            <AboutPage/>

          </Route>
         
          <Route exact={true} path="/contact">
            <ContactPage/>

          </Route>

          <Route exact={true} path="/search/:search">
            <Search/>

          </Route>

          <Route exact={true} path="*">
            <NotFound/>

          </Route>


        </Switch>
        
     </Router>
     
      
        
    </div>
  );
}

export default App;
