import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import About from './components/About';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Home from './components/Home';
import Expertises from './components/Expertises';
import Spinner from './components/Spinner';



function App() {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
    {
      loading 
      ? <Spinner />
      :
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="expertises" element={<Expertises />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    }
    </>
  );
}

export default App;
