import './footerstl.css'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div>
                <h1>Lets Trip</h1>
                <p>Make your own Story</p>
            </div>
            <div>
                <a href="/">
                <i class="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                <i class="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                <i class="fa-brands fa-behance-square"></i>
                </a>
                <a href="/">
                <i class="fa-brands fa-twitter-square"></i>
                </a>
            </div>
        </div>
        <div className="bottom">
            {/* 1st column */}
            <div>
              <h4>Project</h4>
              <a href='/'>ChangeLog</a>
              <a href='/'>Status</a>
              
              <a href='/'>All Versions</a>
            </div>

            <div>
              <h4>Community</h4>
              <a href='/'>Github</a>
              <a href='/'>Issues</a>
              <a href='/'>Projects</a>
              <a href='/'>Twitter</a>
            </div>

            <div>
              <h4>Help</h4>
              <a href='/'>Support</a>
              <a href='/'>Troubleshooting</a>
              
              <a href='/'>Contact Us</a>
            </div>

            <div>
              <h4>Others</h4>
              <a href='/'>Terms of Service</a>
              <a href='/'>Privacy Policy</a>
              <a href='/'>License</a>
            </div>

            
        </div>
      
    </div>
  )
}

export default Footer
