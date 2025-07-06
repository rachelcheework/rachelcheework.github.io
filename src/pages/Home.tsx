import React, {useState} from 'react';
import '../index.css';

function Home() {


  return (
    <div className="main">
      {/* Overview */}
      <section id="overview">
        
        {/* Overview Container */}
        <div className="flex flex-col px-6 md:mx-72 my-20 divide-y divide-gray-500">

          {/* Title/Desc Container*/}
          <div className="flex flex-col space-y-8 py-4">
            <h1 className="text-white font-bold text-xl">Rachel Chee</h1>
            <h2 className='text-gray-300'>senior analyst<a href='https://www.sc.com/sg/' target="_blank" rel="noopener noreferrer" className='italic para-link'> @ standard chartered bank</a></h2>
          </div>

          {/* Experience Container*/}
          <div className="flex flex-col space-y-8 py-4">
            <div className="space-y-4">
              <h3 className="section-header">currently</h3>
              <ul className='list-disc text-gray-500 pl-8'>
                <li><p>practicing<span className='text-gray-500'> frontend development</span></p> </li>
                <li><p>learning<span className='text-gray-500'> design</span></p></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="section-header">previously</h3>
              <p>process integration engineer<a href='https://sg.micron.com/' target="_blank" rel="noopener noreferrer" className='italic para-link'> @ micron</a></p>
            </div>
          </div>

          {/* Projects Container*/}
          <div className="flex flex-col space-y-4 py-4">
              <h3 className="section-header">projects</h3>
              <ul className='section-list'>
                <li><a href='https://rachelcheework.github.io/fitness-website/' target="_blank" rel="noopener noreferrer" className='para-link'>fitness website mockup</a></li>
                <li><a href='https://rachelcheework.github.io/pomodoro-timer/' target="_blank" rel="noopener noreferrer" className='para-link'>pomodoro timer</a></li>
              </ul>
          </div>

          {/* Contacts Container*/}
          <div className="flex flex-col space-y-4 py-4">
              <h3 className="section-header">say hi</h3>
              <ul className='section-list'>
                <li><a href='mailto:rachelcheework@gmail.com?subject=Hello&body=Hi there!' className='para-link'>email</a></li>
                <li><a href='https://www.linkedin.com/in/rachelcheework/' target="_blank" rel="noopener noreferrer" className='para-link'>linkedin</a></li>
                <li><a href='https://github.com/rachelcheework' target="_blank" rel="noopener noreferrer" className='para-link'>github</a></li>
              </ul>
          </div>
        </div>        
      </section>
    </div>
  );
}

export default Home;
