import React from "react";
import { Link } from "react-router-dom";
import './App.css'
import GitHubLogo from './Images/GitHubLogo.png'
import InstaLogo from './Images/InstaLogo.png'
import LinkedInLogo from './Images/LinkedInLogo.png'
import spotifyLogo from './Images/spotifyLogo.png'

export default function Footer () {
    return (
        <main className="wrapper" id='footerMain'>

            {/* Contact information section of footer */}
            <div style={{textAlign:'center'}} className='contactFooter'>
                <h6 style={{textDecoration:'underline'}}>Contact</h6>
                <p>sadie.southworth@gmail.com</p>
                <p>802-798-2206</p>
            </div>

            {/* Social media links as logos */}
            <div id='socialLinks'>
                <a href='https://open.spotify.com/playlist/6gIucEupyli0hfFkpzJVvu' target="_blank">
                    <img src={spotifyLogo} height='25px'/>
                </a>
                <a href="https://www.linkedin.com/in/sadie-southworth-557902231" target="_blank">
                    <img src={LinkedInLogo} height='25px'/>   
                </a>
                <a href="https://www.instagram.com/sadiee.ladyy/" target="_blank">
                    <img src={InstaLogo} height='25px'/>    
                </a>
                <a href="https://github.com/Sadie802" target="_blank">
                    <img src={GitHubLogo} height='33px'/>
                </a>
            </div>

            {/* copy write information */}
            <div id='copyWrite'>
                <p>© 2022 Sadie Southworth</p>   
            </div>

            {/* Links to other pages on site */}
            <div className='pageLinks'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/workhistory'>Work History</Link>
                <Link to='/contact'>Contact</Link>      
            </div>
        </main>
    )
}