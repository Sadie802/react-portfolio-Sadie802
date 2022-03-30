import React from 'react'
import '../App.css'
import emailSent from '../Images/emailSent.gif'

export default function ThankYou(){
    return(
        <main id='thankYouPage'>
            <div className='content'>

            {/* Thank you message */}
            <h1 id='title'>Email sent!</h1>
            <h3>Thank you for reaching out</h3>

            {/* Gif of email being sent */}
            <img src={emailSent} alt='Gif of note being put in envolope, getting sealed, and being sent'/>
            </div>
        </main>
    )
}