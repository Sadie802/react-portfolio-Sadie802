import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import jeopardy from '../Images/jeopardy.png'
import GuessTheNumber from '../Images/GuessTheNumber.png'
import ReactChat from '../Images/ReactChat.png'
import GitHubLogo from '../Images/GitHubLogo.png'

export default function Projects (){

    return (
        <main className='wrapper'>
            <NavBar />
            <div className='content'>
                <h3 id='title'>Projects</h3>
                <hr></hr>
                <div className='projects'>
                    
                    {/* Title, photo, and description of Jeopardy Board project*/}
                    <section>
                        <a href='https://github.com/Sadie802/jeopardy-board-Sadie802' target='_blank' style={{textDecoration:'none'}}>
                            <h4 className='projectTitle'>Jeopardy Board</h4>
                        </a>
                        <a href='https://github.com/Sadie802/jeopardy-board-Sadie802' target='_blank'>
                            <img src={jeopardy} alt='photo of jeopardy board web page' height='auto' width='100%'/>
                        </a>
                        <p className='description'>For this project, I was given the task to first create a jeopardy game with a landing page, first and second rounds, and a final round using HTML and CSS. The following week, I added JavaScript to this project to make the game fully functional and playable.</p>
                    </section>

                    {/* Title, photo, and description of Guess The Number project */}
                    <section>
                        <a href='https://github.com/Sadie802/guess-the-number-Sadie802' target='_blank' style={{textDecoration:'none'}}>
                            <h4 className='projectTitle'>Guess The Number</h4>
                        </a>
                        <a href='https://github.com/Sadie802/guess-the-number-Sadie802' target='_blank'>
                            <img src={GuessTheNumber} alt='photo of guess the number project in terminal' height='auto' width='100%'/>
                        </a>
                        <p className='description'>Guess The Number was my first ever project in my WebDev Bootcamp. I was asked to use JavaScript to create an algorithm to get the computer to guess a number between 1-100 (or any max number the user types in) in no more than seven guesses. </p>
                    </section>

                    {/* Title, photo, and description of Zorkington project */}
                    <section>
                        <a href='https://github.com/burlingtoncodeacademy-students/react-chat-sadie-dave' target='_blank' style={{textDecoration:'none'}}>
                            <h4 className='projectTitle'>React Chat</h4>
                        </a>
                        <a href='https://github.com/burlingtoncodeacademy-students/react-chat-sadie-dave' target='_blank'> 
                            <img src={ReactChat} alt='photo of react chat webpage' height='auto' width='100%'/>
                        </a>
                        <p className='description'>This project is an online chatroom created with a React front end (using dynamically rendered components), an Express server, and utilizes MongoDB/Mongoose. It allows a user to select any chat room and beginning messaging, with messages appearing in "live time" (directly after being sent).</p>
                    </section>
                </div>

                {/* Link to view my GitHub profile */}
                <a href='https://github.com/Sadie802' target='_blank' style={{textDecoration:'none'}}>
                    <p id='gitHubLink'>VIEW MY GITHUB ACCOUNT </p>
                    <img src={GitHubLogo} alt='GitHub Logo' height='100px'/>
                </a>
            </div>
            <Footer />
        </main> 
    )
}