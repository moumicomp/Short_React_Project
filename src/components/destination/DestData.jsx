import './destination.css'
import taal from '../images1/taal-volcano.jpg'
import taal1 from '../images1/Taal-Volcano2.jpg'
import taal2 from '../images1/taal-volcano.jpg'
import taal3 from '../images1/taal-volcano.jpg'
import React, { Component } from 'react'

class DestData extends Component {
  render() {
    return (
      
        <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>

            </div>
            

            <div className="image">
                <img alt='img' src={this.props.img1} />
                <img alt='img' src={this.props.img2}/>
            </div>
        </div>
      
    )
  }
}

export default  DestData