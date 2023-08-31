import './Home.scss';

import LogoTitle from '../../assets/images/logo-s.png';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';


const Home=()=>{
    const [letterClass, setLetterClass]=useState('text-animate')
    const nameArray=['i','g','h','t','y']
    const jobArray=['W','e','b',' ','D','e','v','e','l','o','p','e','r',' '
]

useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    return () => {
      clearTimeout(timeoutId); // This clears the timeout if the component unmounts before it fires.
    };
  }, []);


    
    return(
       
        <div className="container home-page">
             <div className="text-zone">

                        <h1>
                            <span className={letterClass} >H</span>
                            <span className={`{$letterClass}_12`}>i,</span>

                            <br/>
                            <span className={`{$letterClass}_13`}>I</span>
                            <span className={`{$letterClass}_1`}>'m,</span>

 
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} 
                        />

                        <br/>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22} 
                        />
                        </h1>
                        <h2>Frontend Developer/ Web Designer/ Writer</h2>
                        <Link  to='/contact' className='flat-button'>
                            CONTACT ME
                            </Link>
                        </div>
                        <Logo />


        </div>
    )
    }
export default  Home