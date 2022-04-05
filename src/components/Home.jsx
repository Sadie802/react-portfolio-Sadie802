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
                        <p>Dedicated Web/Software Developer with full-stack knowledge committed to problem solving and creating solutions in the least amount of time while maintaining thoroughness and thoughtfulness.  Driven individual looking to bring my skills, knowledge, and enthusiasm for software development to a strong organization that values employee growth, continual learning, and professional advancement.</p>    
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