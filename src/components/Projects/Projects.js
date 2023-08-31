
import React from 'react';
import {useState} from 'react'; 
import './index.scss';
import {images} from "../../Helpers/projectData";
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Carousel() {
    const [currImg, setCurrImg]=useState(0);

  return (    

    <div className="project-container" id="project">            
    <h1 className="project-heading"> PROJECTS</h1>   
      
      <div className='project-details'> 

      <h1>{images[currImg].title}</h1>
            <p>{images[currImg].subtitle}</p>             
            <a href={images[currImg].link}target="_blank" rel='no referer'>
         <button className='live-btn'>Live</button>
        </a>
        <a href={images[currImg].link2}target="_blank">
        <button className='code-btn'>Code</button>

        </a>          
            

        <div className="project-carol" 
        style={{backgroundImage:`url(${images[currImg].img})`}}>
           {/*  <img src={images[2].img} alt='crypto website'/>      the array is imported */}
           
           <div className="Left" 
           onClick={()=>{
            currImg>0 && setCurrImg(currImg-1);//if else statement in js
           }}>

            <faArrowLeft style={{fontSize:30}}/>

           </div>
           <div className="Center">

           </div>
           <div className="right"
           onClick={()=>{
            currImg<images.length-1 && setCurrImg(currImg+1) //if else statement in js
           }}>
           <faArrowRight  style={{fontSize:30}}/>
            
           </div>
           
            </div>
            </div>


    </div>
    
    
   

  );
}

export default Carousel