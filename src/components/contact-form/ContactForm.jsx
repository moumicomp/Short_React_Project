import './contactf.css'

import React from 'react'

function ContactForm() {
  return (
    <div className='form-container'>
        <h1>Send a Message!</h1>
        <form>
            <input placeholder='Name'/>
            <input placeholder='Email'/>
            <input placeholder='Subject'/>
            <textarea placeholder='Messagr' rows="4"></textarea>
            <button>Send</button>
        </form>
      
    </div>
  )
}
export default ContactForm