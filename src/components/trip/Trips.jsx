import TripData from "./TripData";
import "./tripstyle.css"
import trip1 from '../images1/ladakh1.jpg'
import trip2 from '../images1/switzerland.jpg'
import trip3 from '../images1/maldives.jpg'


import React from 'react'

function Trips() {
  return (
    <div className="trips">
        <h1>Recent Trips</h1>
        <p>you can Discover unique destinations using Google Map</p>
        <div className="tripcard">
          <TripData
            image={trip1}
            heading="Trip in Ladakh"
            text="The landscape of Ladhak, a high altitude desert, is defined by craggy, barren cliffs and plateaus. Ladhak is a favourite among adventure sports enthusiasts, offering unique adventures in trekking, mountaineering and white water rafting."

          />
          <TripData
            image={trip2}
            heading="Trip in Switzerland"
            text="Switzerland is a small mountainous country located in central Europe. This landlocked country is about the size of New Jersey and is between France and Italy. It is also bordered by Austria, Germany, and Liechtenstein."
            
          />
          <TripData
            image={trip3}
            heading="Trip in Maldives"
            text="The tropical paradise of Maldives country lies in the Indian Ocean to the southern side of Sri Lanka. Floating on serene ocean waters, this island nation makes for the perfect getaway for leisure seekers away from the chaos and anxiety of city life."
            
          />
        </div>

    </div>
  )
}

export default Trips;