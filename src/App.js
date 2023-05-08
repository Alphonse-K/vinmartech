import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import About from './components/About';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Home from './components/Home';
import Expertises from './components/Expertises';


function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'auto';
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="expertises" element={<Expertises />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
