import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Resume from '../Images/Resume.pdf'
import ResumePic from '../Images/ResumePic.png'
import maskingTape from '../Images/maskingTape.png'

export default function WorkHistory (){

    return (
        <main className='wrapper' id='workMain'>

            {/* Adding nav bar to page */}
            <NavBar />
            <div className='content'>
                <h3 id='title'>Work History</h3>
                <hr></hr>

                {/* Work history section */}
                <section className='workSection'> 
                    <div className='workContainer'>
                        <div className='hmm'>
                        <h4 className='sub'>Technical Skills</h4>
                        <ul className='listItems'>
                            <li>JavaScrip</li>
                            <li>React</li>
                            <li>HTML & CSS</li>
                            <li>Git</li>
                            <li>MongoDB/Mongoose</li>
                            <li>Express</li>
                            <li>Node.js</li>
                            <li>REST APIs</li>
                        </ul>
                        <h4 className='sub'>Competencies</h4>
                        <ul className='listItems'>
                            <li>Time management & prioritization</li>
                            <li>Adaptability</li>
                            <li>Self-motivator</li>
                            <li>Effective communication</li>
                            <li>Collaboration & teamwork</li>
                        <a href={Resume} download="SadieSouthworthResume"> Read More.. </a>
                        </ul>
                        </div>
                    </div>

                    {/* Download resume */}
                    <div className='downloadDiv'>
                        <h5>Download Resume: </h5>

                        {/* Photo of resume, if clicked it is downloaded with file name of SadieSouthworthResume */}
                        <a href={Resume} download="SadieSouthworthResume" >
                            <img src={ResumePic} alt='photo of resume' height='auto' width='100%' id='download'/>
                        </a>
                    </div>
                </section>
            </div>
            
            {/* Adding footer to page */}
            <Footer />
        </main> 
    )
}
