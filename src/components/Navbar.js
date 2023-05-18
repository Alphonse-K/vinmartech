import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';





export default function Navbar() {
    useEffect(() => {
        handleClick1();
    }, [])

    const handleClick1 = () => {
        var clickable1 = document.getElementById('navpage');
        var clickable2 = document.getElementById('fabars');
        if( clickable1.style.display === 'block' ) {
            clickable1.style.display='none';
            clickable2.style.display='flex';
        } else {
            clickable1.style.display='block';
            clickable1.style.position='fixed';
            clickable1.style.width='100%';
            clickable2.style.display='none';
        }
    }
    
  return (
    // <div></div>
    <div>
        <div className="logoFont" id='fabars' >
            <Link to="/" className='logoLink' id='home'><h1 className="logo">Vinmartech-Sarlu</h1></Link>
            <div className="font" onClick={handleClick1}><FontAwesomeIcon icon={faBars}/></div>
        </div>  
        <div className='navbar' id='navpage'>
            <div className="logoFont">
                <Link to="/" className='logoLink'><h1 className="logo">Vinmartech-Sarlu</h1></Link>
                <div className="font" onClick={handleClick1}><FontAwesomeIcon icon={faXmark} /></div>
            </div>
            <div className="nav-elem">
                <nav>
                    <ul>
                    <Slide cascade>
                        <li>
                        <Link to="/" className='link'>Accueil</Link>
                        </li>
                        <li>
                        <Link to="/about" className='link'>À propos</Link>
                        </li>
                        <li>
                        <Link to="/expertises" className='link'>Expertises</Link>
                        </li>
                        <li>
                        <Link to="/contact" className='link'>Contact</Link>
                        </li>
                    </Slide>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
