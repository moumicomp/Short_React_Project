import './navbar.css';
import {Link} from 'react-router-dom'
import { MenuItems } from '../Menuitems';

import React, { Component } from 'react'

class Navbar extends Component {

    state={clicked:false}

    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }

  render() {
    return (
      <div>
        <nav className='navItems'>
            <h1 className='nav-logo'>Lets Trip</h1>
            <div className="menu-icons" onClick={this.handleClick}>
            {/* <i class="fa-solid fa-bars"></i>
            <i class="fa-solid fa-xmark"></i> */}


                <i className={this.state.clicked ? "fa-solid fa-xmark":"fa-solid fa-bars"}></i>
            </div>
            {/* <ul className='nav-menu'> */}
            <ul className={this.state.clicked? "nav-menu active":"nav-menu"}>
                {MenuItems.map((item,index)=> {
                    return(
                        // <li key={index}>
                        //     <a className= {item.cName} href='/'>
                        //         <i className={item.icon}></i>
                        //         {item.title}
                        //     </a>
                        // </li>
                        <li key={index}>
                            <Link className= {item.cName} to={item.url}>
                                <i className={item.icon}></i>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}

                <button>Sign Up</button>
                
            </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
