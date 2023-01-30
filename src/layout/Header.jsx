import React from 'react';
import gitHub from '../img/gitHub.svg';

function Header(){
  return (
    <nav className='teal darken-3'>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Movies</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://github.com/Kh82Olga/movies-project" target="_blank" className='githubContainer' ><img src={gitHub} alt="Link" /></a></li>        
      </ul>
    </div>
  </nav>
  )
}

export {Header}