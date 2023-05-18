import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { Bounce } from 'react-awesome-reveal';
import { HashLink } from 'react-router-hash-link';


export default function Expertises() {
  return (
    // <></>
    <div>
        <Navbar/>
        <div className='expertise-header'>
          <img src={require('../img/desktop.jpg')} alt='' />
          <section className='expertise-text'>
            <Bounce>
              <h1>Simplifier votre quotidien par le billet de produits digitaux innovants, tel est notre objectif.</h1>
            </Bounce>
            <HashLink to='#button'>
              <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>  
            </HashLink>
          </section>
        </div>
        <div className='expertise-intro'>
          <h1>Nous Offrons</h1>
          <h1>Une Meilleure Qualité</h1>
          <h1>De Service en Développements Informatique !</h1>
          <p>« La marque d’une entreprise est comme la réputation de quelqu’un : vous la développez en effectuant un travail remarquable sur des tâches difficiles. »</p>
          <h6>— Jeff Bezos, fondateur et dirigeant d’Amazon</h6>
          <HashLink to="/contact#contact-quote"><button>Obtenez un Devis</button></HashLink>
        </div>
        <div className='expertise-title' id='button'><h1>Voici ce que nous proposons:</h1></div>
        <section className='expertise-details'>
          <div id='specific' className='container-img-text'>
            <img src={require('../img/christopher.jpg')} alt='' />
            <div className='expertise-single-text'>
              <h3>Développements Spécifiques</h3>
              <p>Ipsum enim culpa ad proident commodo eiusmod sint magna nulla ut irure do. Anim mollit occaecat deserunt pariatur. Sint do dolore ipsum elit laborum incididunt veniam aliqua. Exercitation aute eu id elit labore aute ut qui ullamco culpa magna culpa. Mollit anim labore consectetur aute aliqua culpa aliquip sit.</p>
              <HashLink to="/contact#contact-quote"><button>Vous avez un projet?</button></HashLink>
            </div>
          </div>

        </section>
        <div>Expertises</div>
        <div id='app' style={{color: 'orange'}}>Application</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div id="vitrine" style={{color: 'red'}}>vitrine</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div id='ecommerce' style={{color: 'grey'}}>Ecommerce</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div id='repair' style={{color: '#2015ed'}}>Repair</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div id='network' style={{color: '#1e969e'}}>network</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div id='surveillance' style={{color: '#cc0eb3'}}>Surveillance</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <div>Expertises</div>
        <BackToTop />
        <Footer/>
    </div>
  )
}
