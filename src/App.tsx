import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      {/* Global Container */}
      <div className="max-w-6xl mx-auto overflow-x-hidden">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
