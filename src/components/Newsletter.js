import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPaperPlane } from '@fortawesome/free-solid-svg-icons';


export default function Newsletter() {

    const handleClick = () => {
      
    }
  
  return (
      <div className='newsletter-container'>
          <div className='newsletter col-xs-12 col-sm-12 col-md-8 col-lg-8'>
            <h1><b>Vinmartech</b>,</h1>
            <h1>Préparez vous à réussir votre digital! </h1>
            <h6>Recevez votre newsletter directement dans votre boîte mail</h6>
            <label for="news" className='d-inline-block'>votre adresse email:</label>
            <div className='d-flex'>
              <input className='col-xs-12 col-sm-8 col-md-6 col-lg-6' id='news' type='email' placeholder='Votre adresse email' onChange={handleClick}/>
              <button><FontAwesomeIcon icon={faPaperPlane} style={{color: "#d90429",}} /></button>
            </div>
            <div className='d-flex' >
                <input type="checkbox" name="cheese" id="cheese" style={{marginRight: 10}}></input>
                <label for="cheese">Votre adresse e-mail est uniquement utilisée pour vous envoyer notre newsletter et des informations sur les activités de Vinmartech. Vous pouvez toujours utiliser le lien de désinscription inclus dans la newsletter.</label>
            </div>
          </div>
        </div>
  
  )
}
