
// @ts-ignore
import './Header.css';
import { useState } from 'react';

const Header = () => {
 
  const [showModal, setshowModal] = useState(false);
  return (
    <header className='flex'>
      
      <button className='menu'>
        show modal
      </button>
      
      <div /> 

      <nav>
        <ul className='flex'>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projets</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button>
        light/dark
      </button>
      {showModal && (
        <div className= 'fixed'>
        
          <ul className='modal border'>
            <li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projets</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        
      </div>
      )}
      
    </header>
  );
}

export default Header;