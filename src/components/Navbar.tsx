// src/components/Navbar.tsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navToggle = () => setIsOpen(!isOpen);

  const location = useLocation();

  const isActive = (path: string) =>
    {
        return location.pathname === path ? 'bg-gray-700' : '';
    }

  return (
    <nav className="relative">
      {/* Desktop Nav */}
      <div className="hidden absolute top-5 md:flex md:flex-col p-3 space-y-2 rounded-lg border border-gray-500 text-white bg-black">
        <Link to="/" className={`nav-button ${isActive('/')}`}>about me</Link>
        <Link to="/projects" className={`nav-button ${isActive('/projects')}`}>projects</Link>
        {/* <Link to="/posts" className={`nav-button ${isActive('/posts')}`}>posts</Link> */}
        {/* <Link to="/resume" className={`nav-button ${isActive('/resume')}`}>resume</Link> */}
        <Link to="/connect" className={`nav-button ${isActive('/connect')}`}>connect</Link>
      </div>

      {/* Hamburger */}
      <div className="absolute -top-10 right-10 md:hidden">
        <button
          className={`z-40 block hamburger md:hidden focus:outline-none ${isOpen ? 'open' : ''}`}
          onClick={navToggle}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute z-50 top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-md text-white bg-black ${isOpen ? 'flex' : 'hidden'}`}
      >
        <Link to="/" className={`nav-button ${isActive('/')}`} onClick={navToggle}>about me</Link>
        <Link to="/projects" className={`nav-button ${isActive('/projects')}`} onClick={navToggle}>projects</Link>
        {/* <Link to="/posts" className={`nav-button ${isActive('/posts')}`} onClick={navToggle}>posts</Link> */}
        {/* <Link to="/resume" className={`nav-button ${isActive('/resume')}`} onClick={navToggle}>resume</Link> */}
        <Link to="/connect" className={`nav-button ${isActive('/connect')}`} onClick={navToggle}>connect</Link>
      </div>
    </nav>
  );
};

export default Navbar;
