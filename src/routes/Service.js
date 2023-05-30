import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hstyle from '../components/h-style/Hstyle';
import AboutImg from '../images/ladakh2.jpg'
import Footer from '../components/footer/Footer';
import Trips from '../components/trip/Trips';

function Service() {
  return (
    <div>
      <Navbar/>
      <Hstyle 
            cName="hero-mid"
            heroImg={AboutImg}
            title='Services'
            
           
            btncls="hide"
        />

        <Trips/>

        <Footer/>
    </div>
  )
}
export default Service;