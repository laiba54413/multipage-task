import React from 'react';
import Footer from './Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Quiz from './pages/Quiz';
import Quotes from './pages/Quotes';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <nav style={{ textAlign:'center', padding: 15, backgroundColor:'black' }}>
          <Link to="/" style={{ margin: 10 }}>Home</Link>
          <Link to="/services" style={{ margin: 10 }}>Services</Link>
          <Link to="/quiz" style={{ margin: 10 }}>Quiz</Link>
          <Link to="/quotes" style={{ margin: 10 }}>Quotes</Link>
          <Link to="/contact" style={{ margin: 10 }}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<><Services /><Footer /></>} />
          <Route path="/quiz" element={<><Quiz /><Footer /></>} />
          <Route path="/quotes" element={<><Quotes /><Footer /></>} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



