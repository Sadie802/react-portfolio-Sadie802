import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import jeopardy from './Images/jeopardy.png'
import GuessTheNumber from './Images/GuessTheNumber.png'
import ZorkTwo from './Images/ZorkTwo.png'
import GitHubLogo from './Images/GitHubLogo.png'

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
                        <a href='https://github.com/Sadie802/zorkington-Sadie802' target='_blank' style={{textDecoration:'none'}}>
                            <h4 className='projectTitle'>Zorkington</h4>
                        </a>
                        <a href='https://github.com/Sadie802/zorkington-Sadie802' target='_blank'> 
                            <img src={ZorkTwo} alt='photo of zorkington projects code' height='auto' width='100%'/>
                        </a>
                        <p className='description'>This project is a spin-off of the text adventure game Zork. Zorkington takes place in my home state and town, Burlington, Vermont. It is a game written in JavaScript that allows the player to make moves (change rooms, pick up items, read items, etc). Based on the player's input, my Zorkington game would adjust it's course of action accordingly.</p>
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