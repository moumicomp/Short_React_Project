import React from 'react'
import taal from '../images1/taal-volcano.jpg'
import taal1 from '../images1/Taal-Volcano2.jpg'
import megh1 from '../images1/meghalaya1.jpg'
import megh2 from '../images1/meghalaya2.jpg'
import './destination.css'
import DestData from './DestData'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot within a time frame</p>
        <DestData
            className="first-des"
            heading="Taal Volcano,Batangas"
            text="Taal Volcano is the second most active volcano found in the province of Batangas.  A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation.  It offers a very a spectacular view seen from Tagaytay Ridge.  Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines."
            img1={taal}
            img2={taal1}
        />
        <DestData
            className="first-des-reverse"
            heading="Meghalaya,India"
            text="Meghalaya, meaning the “abode of clouds” is a paradise for nature lovers. A hill station that is home to a beautiful, mesmerizing sky in a true sense has captivated the minds of tourists all across the globe. It is perfectly nestled in the northeast of India in the Himalayas. The erstwhile state of Assam spread over an area of 22, 429 square kilometers, and lies between 20.1° N and 26.5° N latitude and 85.49 °E and 92.52 °E longitudes. It is bordered to Assam to the north and east and meets Bangladesh to its south and east side. The state filled with huge hills, valleys, numerous lakes, captivating waterfalls, pitch dark caves, and sacred forests; there is no dearth of tourist places in Meghalaya. You can expect panoramic views, foggy hills, terraced slopes, cascading waterfalls, and serpentine rivers mesmerizing your soul. "
            img1={megh1}
            img2={megh2}
        />
    </div>
  )
}

export default Destination
