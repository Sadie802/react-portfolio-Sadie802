import React from 'react'
import SadieMain from '../Images/SadieMain.JPG'
import NavBar from './NavBar';
import Footer from './Footer'
import '../App.css'

export default function Home (){


    return (
        <main id='homeMain' className='wrapper'>

            {/* Adding nav bar to page */}
            <NavBar />
            <div className='content'>
                <div>

                    {/* Title of page */}
                    <h1 id='title'>Sadie Southworth</h1>
                    <p id='city'>Burlington, Vermont</p>
                    <hr></hr>

                    {/* Short description of myself */}
                    <div id='description'>
                        <p>Current student in a Web Development Bootcamp.</p>
                        <p>I have a passion and desire to build and design web applications for companies who support their local community, and are looking to make a positive impact on the world around them. </p>    
                    </div>
                </div>

                {/* Image of me */}
                <img id='SadieMain' alt='black and white photo of Sadie in a field' src={SadieMain} height='500px'/>
                <br></br>
            </div>

            {/* Adding footer to page */}
            <Footer />
        </main>




    )
}