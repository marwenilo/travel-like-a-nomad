import React from 'react';
// import './Home.css';
import NavBar from './components/NavBar'
import ImageSlider from './components/ImageSlider'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

const Home = () => (

<div>
     <NavBar /> 
     <ImageSlider />
      <p className="title2">What makes us different </p>

      <div className="bodySlider"> 
      <div>
      <i class="fas fa-globe-asia"></i>
      <p className="title3"> Discover the world </p>
          </div> 
      <div> <p className="title3"> Share a wealth of experience </p></div> 
      <div><p className="title3"> Nothing is easier than travelling </p></div> 

          </div> 


    </div>
  
);
export default Home;