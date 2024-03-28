import React from 'react'
import './index.css';
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"

function NavBar() {
  return (
    <>
    <ul>
        <li><a>Projetos</a></li>
        <li><a>Tecnologias</a></li>
        <li><a>Sobre mim</a></li>
    </ul>
    <div className='fixed-top'>
    <a href='https://github.com/darckrow?tab=repositories' target="_blank"> <img src={github}/></a>
    <a href="https://www.linkedin.com/in/ramon-matheus-3344041b1/" target="_blank"><img src={linkedin}/></a>
    </div>
    </>
  )
}

export default NavBar