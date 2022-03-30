import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import GitHubLogo from '../Images/GitHubLogo.png'
import InstaLogo from '../Images/InstaLogo.png'
import LinkedInLogo from '../Images/LinkedInLogo.png'
import spotifyLogo from '../Images/spotifyLogo.png'

export default function Contact (){

    return (
        <main className='wrapper'>
            {/* Adding nav bar to page */}
        <NavBar />
        <div className='content' style={{width:'70vw'}}>
            <h3 id='title'>Contact Me</h3>
            <hr></hr>

            {/* Creating a contact form to email me */}
                <div className='contactContent'>
                    <form  className='formContainer' action="https://formsubmit.co/sadie.southworth@gmail.com" method="POST" target='_blank'>
                        <label htmlFor='firstName'>First Name</label>
                        <input name='firstName' type='text' placeholder='First name..' required/>
                        <br></br>

                        <label htmlFor='lastName'>Last Name</label>
                        <input name='lastName' type='text' placeholder='Last name..' required />
                        <br></br>

                        <label htmlFor='email'>Your Email</label>
                        <input name='email' type='text' placeholder='Your email..' required/>
                        <br></br>

                        <label htmlFor='input'>Your Message</label>
                        <textarea id='textArea' name='input' type='text' placeholder='Type your message..' />
                        <br></br>

                        {/* getting rid of reCAPTCHA after submitting form, and sending user to a thank you for reaching out after form submit */}
                        <input type="hidden" name="_captcha" value="false"/>
                        <input type="hidden" name="_next" value="./thankyou"></input>

                        <button type="submit">Send</button>
                        <br></br>
                    </form>
                    
               {/* Social media links as clickable logos */}
                    <section className='socialSection'>
                        <h5>Check out my social media pages! </h5>
                        <a href='https://open.spotify.com/playlist/6gIucEupyli0hfFkpzJVvu' target="_blank">
                            <img src={spotifyLogo} height='50px'/>
                        </a>
                        <a href="https://www.linkedin.com/in/sadie-southworth-557902231" target="_blank">
                            <img src={LinkedInLogo} height='50px'/>   
                        </a>
                        <a href="https://www.instagram.com/sadiee.ladyy/" target="_blank">
                            <img src={InstaLogo} height='50px'/>    
                        </a>
                        <a href="https://github.com/Sadie802" target="_blank">
                            <img src={GitHubLogo} height='65px'/>
                        </a>
                    </section>
                 </div>
        </div>

        {/* Adding footer to page */}
        <Footer />
        </main> 
    )
}