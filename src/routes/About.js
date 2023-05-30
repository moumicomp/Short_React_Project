import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hstyle from '../components/h-style/Hstyle';
import AboutImg from '../images/night.jpg'
import Footer from '../components/footer/Footer';
import AboutUs from '../components/about-us/AboutUs';

function About() {
  return (
    <div>
      <Navbar/>
      <Hstyle 
            cName="hero-mid"
            heroImg={AboutImg}
            title='About Journey'
            
           
            btncls="hide"
        />

        <AboutUs/>

        <Footer/>
    </div>
  )
}
export default About;