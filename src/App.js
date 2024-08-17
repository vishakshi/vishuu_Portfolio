
import './App.css';
import About from './Components/About';
import Banner from './Components/Banner';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Whole from './Components/Whole';
import Resume from './Components/Resume';

function App() {
  return (
    <Router>
    <div>
      {/* This section displays all components */}
     <Header/>
    
      {/* This section will render a specific component based on the route */}
      <Routes>
      <Route path="/" element={<Whole />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        

        
      </Routes>
    </div>
  </Router>
  );
}

export default App;
