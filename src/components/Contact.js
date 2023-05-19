import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';


export default function Contact() {
  
  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <div id='contact'>
      <Navbar />
      <div className='contact-section'>
        <div className='contact-header'>
          <h1>Entrez en Contact avec Notre Équipe:</h1>
          <p>Esse ullamco officia culpa officia aliqua sunt laboris ut quis deserunt nulla nostrud ipsum. Laboris veniam pariatur ea cupidatat culpa sint reprehenderit consectetur et excepteur ullamco. Non nisi Lorem incididunt adipisicing fugiat laboris duis excepteur. Dolore et qui sit est. Ullamco dolor duis in sit consectetur ex. Occaecat ipsum adipisicing non duis amet esse fugiat mollit elit. Magna tempor est enim reprehenderit non excepteur ex sit Lorem est consectetur consequat.</p>
        </div>
        <h1>À votre écoute 24/7 :</h1>
        <div id='contact-quote' className='form'>
          <div className='contact-form'>
            <form onSubmit={handleClick}>
              <input type='text' value='' placeholder='Nom/Prénom' onChange={handleClick}/><br />
              <input type='email' value='' placeholder='Email' onChange={handleClick}/><br />
              <input type='textarea' value='' placeholder='Votre message' onChange={handleClick}/><br />
              <input type='submit' value='ENVOYEZ VOTRE MESSAGE' />
            </form>
          </div>
          <div className='contact-address'>

          </div>
        </div>    
      </div>
      {/* </> */}
      <h1>Contact</h1>
      <h1>Contact</h1>
      <BackToTop />
      <Footer />
    </div>
  )
}
