import React from 'react';

import Navbar from './Navbar';
import BackToTop from './BackToTop';

import image1 from '../img/guilherme-stecanella-UrS5HkBr1Rc-unsplash.jpg';
import CCarousel from "@coreui/coreui";
export default function Home() {
  return (
    // <div></div>
    <div>
      <Navbar />
      <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
      <div className='home1'>
        <div className='image1Content'>
          <img src={image1} alt="Amazed Woman" className='homeImage1'/>
        </div>
        <div className='homeParagh'>
          <p>Mollit magna eu pariatur exercitation tempor Lorem in. Non consequat aliquip mollit nostrud minim sunt eu nulla nulla laborum aliquip. Et cillum consectetur labore nostrud est anim qui enim amet sit nulla minim ad elit.</p>
        </div>
      </div>
      <div className='hom2'>
        <h1></h1>
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