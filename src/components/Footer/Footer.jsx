import React from 'react'
import gitHub from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import './index.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="contact">
            <div className="fone">
            <h2>Meu Contato:</h2>
            <span>31 97310-2866</span>
            </div>
            <div className="Email">
            <h2>Email:</h2>
            <span>ramonmteus30@gmail.com</span>
            </div>
        </div>

        <div className="social-media">
        <a href="https://github.com/darckrow?tab=repositories" target='_blank'><img src={gitHub}/></a>
        <a href="https://www.linkedin.com/in/ramon-matheus-3344041b1/" target='_blank'><img src={linkedin}/></a>
        </div>
    </div>
  )
}

export default Footer