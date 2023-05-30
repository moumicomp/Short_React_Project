import React from 'react'
import './hstyle.css'

function Hstyle(props) {
  return (
    <div>
      <div className={props.cName}>
        <img src={props.heroImg} alt="HeroImg" />

        {/* <div className="hero-text">
            <h1>Build A Story With Your Journey </h1>
            <p>Choose Your Destination</p>
            <a href='/'>Travel Plan</a>
        </div> */}
        <div className="hero-text">
            <h1>{props.title} </h1>
            <h4>{props.text}</h4>
            <a href={props.url} className={props.btncls}>
                {props.btntxt}
            </a>
        </div>
      </div>
    </div>
  )
}

export default Hstyle
