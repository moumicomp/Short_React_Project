import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hstyle from '../components/h-style/Hstyle';
import HomeImg from '../images/imgown1(jpeg).jpeg'
import Destination from '../components/destination/Destination';
import Trips from '../components/trip/Trips';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <div>
        <Navbar/>
        <Hstyle 
            cName="hero"
            heroImg={HomeImg}
            title='Build Your Journey'
            text="Choose Your Destination"
            btntxt="Travel Plan"
            url='/'
            btncls="show"
        />

        <Destination/>

        <Trips/>
        <Footer/>
        
    </div>
  )
}
export default Home;