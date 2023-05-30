import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hstyle from '../components/h-style/Hstyle';
import AboutImg from '../images/2.jpg'
import Footer from '../components/footer/Footer';
import ContactForm from '../components/contact-form/ContactForm';

function Contact() {
  return (
    <div>
      <Navbar/>
      <Hstyle 
            cName="hero-mid"
            heroImg={AboutImg}
            // title='Contact to Start Journey'
            
           
            btncls="hide"
        />
        <ContactForm/>

        <Footer/>
    </div>
  )
}
export default Contact;