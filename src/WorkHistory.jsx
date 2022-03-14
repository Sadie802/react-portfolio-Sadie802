import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Resume from './Images/Resume.pdf'
import ResumePic from './Images/ResumePic.png'

export default function WorkHistory (){

    return (
        <main className='wrapper'>

            {/* Adding nav bar to page */}
            <NavBar />
            <div className='content'>
                <h3 id='title'>Work History</h3>
                <hr></hr>

                {/* Work history section */}
                <section className='workSection'> 
                    <div>

                        {/* ORAH */}
                        <h4>Onion River Animal Hospital</h4>
                        <p>August 2018 - September 2020, April 2021-January 2022</p>
                        <p>My time at Onion River Animal Hospital taught me how to work and thrive in a fast paced work environment and enhanced my interpersonal and situational adaptability skills. </p>

                        {/* PEAK */}
                        <h3>Peak Veterinary Referrral Center</h3>
                        <p>October 2020 - April 2021</p>
                        <p>This position has strengthened my problem solving abilities, time management skills, and has honed my proficiency in effective communication. This work required me to work in team and individual settings, and to interact with many individuals throughout the company and to adapt to each persons needs.</p>
                    
                        {/* Doc Ponds */}
                        <h3>Doc Ponds</h3>
                        <p>August 2015 - April 2018</p>
                        <p>As a busy restaurant in the heart of Stowe, VT, Doc Ponds was my first introduction to a high volume work environment. This position taught me to think quickly on my feet, to be always one step ahead of myself, and enhanced my multitasking abilities. </p>
                    </div>

                    {/* Download resume */}
                    <div className='downloadDiv'>
                        <h5>Download Resume</h5>

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
