import './index.scss';
import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-m.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser, faSuitcase,faClose, faBars, faBookReader, faFile,} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faTwitter, faFacebook,faDiscord,faLinkedin,} from '@fortawesome/free-brands-svg-icons'
import Resume from '../../assets/images/Lucky_resume.pdf'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="project-link"
          to="/Projects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>


        <a
  className="resume-link"
  href={Resume} // Use the imported resume PDF file path
  download="Lucky-Resume.pdf" // Specify the desired filename with the correct file extension (.pdf)
  onClick={() => setShowNav(false)}
>
  <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
</a>

        
        <NavLink
          activeclassname="active"
          className="publication-link"
          to="https://linktr.ee/mighty_scribe" target='_blank'
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faBookReader} color="#4d4d4e" />
        </NavLink>

        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/mwlite/in/owolusi-lucky-36b540175"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Owolusi/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="white"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/owolusi "
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Mighty_scribe" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar



