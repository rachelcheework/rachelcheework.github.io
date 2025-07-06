import React, {useState} from 'react';
import '../index.css';

function Contact() {


  return (
    <div className="main">
      {/* Contact */}
      <section id="contact">
        
        {/* Contact Container */}
        <div className="flex flex-col px-6 md:mx-72 my-20 divide-y divide-gray-500">

          {/* Title/Desc Container*/}
          <div className="flex flex-col space-y-8 py-4">
            <h1 className="text-white font-bold text-xl">Connect</h1>
            <p>wna chat?</p>
          </div>

          {/* Links Container*/}
          <div className="flex flex-col space-y-8 py-4">
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

export default Contact;
