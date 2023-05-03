import React, {useState} from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbar';
import BackToTop from './BackToTop';

import image1 from '../img/guilherme-stecanella-UrS5HkBr1Rc-unsplash.jpg';

export default function Home() {

  const [index, setIndex] = useState(0);

  const data = [
    {
     image: require('../img/pexels-ono-kosuki-5647594.jpg'), 
     caption:"Application mobile Android et/ou IOS sur Mesure.",
     description:"Maintenez le contact auprès de vos clients via des Applications mobiles diverses."
    },
    {
      image:require('../img/pexels-marta-branco-1194713.jpg'), 
      caption:"Site Internet sur Mesure",
      description:"Optez pour un site internet dynamique et responsif."
     },
     {
      image:require('../img/pexels-pixabay-159304.jpg'), 
      caption:"Réseau Informatique",
      description:"Nous concevons et déployons un réseau informatique adapté à vos besoins.",
     },
     {
      image:require('../img/pexels-pixabay-38544.jpg'), 
      caption:"La conception de programmes informatiques variés",
      description:"Nous serons à vos côtés pour la conception, le développement, le déploiement et la maintenance de programmes informatiques variés.",
      
     },
  ]

  const handleSelect = (selectIndex, e) => {
      setIndex(selectIndex);
  }

  return (
    // <div></div>
    <div>
      <Navbar />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide, i) => {
          return (
            <Carousel.Item key={i}>        
              <img
                className="d-block w-100 h-100"
                src={slide.image}
                alt="images"
              />
              <Carousel.Caption key={i} className='d-flex flex-column justify-content-center h-100'>
                <h2>{slide.caption}</h2>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}   
      </Carousel>
      <div className='home1 d-flex align-items-center justify-content-center'>
        <div className='image1Content col-sx-12'>
          <img src={image1} alt="Amazed Woman" className='homeImage1'/>
        </div>
        <div className='homeParagh col-sx-12'>
          <p>Mollit magna eu pariatur exercitation tempor Lorem in. Non consequat aliquip mollit nostrud minim sunt eu nulla nulla laborum aliquip. Et cillum consectetur labore nostrud est anim qui enim amet sit nulla minim ad elit.</p>
        </div>
      </div>
      <BackToTop />
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Nulla nulla sint nostrud tempor ad nostrud incididunt incididunt nisi velit ut. Consequat excepteur ex officia fugiat anim dolore consectetur officia officia. Nostrud excepteur qui laboris laboris proident sunt dolor voluptate officia ad. Consectetur mollit nulla do laboris ex amet nostrud exercitation elit tempor tempor. Duis veniam sint aliqua qui in fugiat eu elit pariatur ad ea aliqua. In enim sunt minim sint voluptate qui magna. Dolore occaecat ad dolore laborum enim magna voluptate.

Qui ex in eiusmod qui incididunt velit quis aliqua ex qui laboris. Dolor incididunt dolor voluptate excepteur elit cupidatat qui dolore laborum nulla. Amet laborum do quis ex tempor voluptate ullamco cillum aute cupidatat anim. Est cupidatat cupidatat quis aute. Excepteur commodo minim elit incididunt occaecat qui ullamco nisi enim consequat occaecat.

Esse est irure eiusmod aliqua aute eu. Ea aute consectetur est reprehenderit ex ex elit mollit tempor non mollit dolor ea esse. Ipsum dolor deserunt pariatur dolore exercitation esse ea. Proident fugiat tempor irure do nisi nulla excepteur laboris. Exercitation et non sunt amet consequat. Eu aute officia sunt ea occaecat aliqua in fugiat pariatur aliqua est anim.

Excepteur occaecat commodo sint amet. Consequat in ex do consequat duis dolore. Dolor irure reprehenderit pariatur eu nostrud esse mollit. Excepteur aute excepteur deserunt magna incididunt Lorem aliqua aute incididunt mollit. Ullamco deserunt fugiat officia magna eu magna sit ea dolor labore veniam. Laborum mollit in ullamco dolor cupidatat pariatur. Reprehenderit eu in eiusmod elit irure in nostrud.

Dolor ullamco duis duis laborum adipisicing cillum consectetur anim reprehenderit eiusmod. Veniam do incididunt enim eu nisi culpa sint sint deserunt. Culpa ex velit sit elit.

Anim ad dolor cupidatat commodo officia aliqua amet dolore deserunt amet incididunt pariatur eiusmod proident. Eu adipisicing aute in irure dolore aliqua velit qui. Ad proident cillum enim culpa. Dolore esse exercitation enim voluptate. Anim proident ullamco proident aliqua id quis quis voluptate mollit minim.</h1>
      
    </div>
  )
}