import React, {useState} from 'react'
import '../App.css'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import WorkHistory from './WorkHistory'
import Contact from './Contact'
import Footer from './Footer'

export default function Landing () {

     //Creating array of description words
     let descriptionArray = [
        "Web Developer",
        "Nature Lover",
        "Continuous Learner",
        "Creative",
        "Problem Solver"
      ];
    //Creating array of colors
      let colorArray = [
          '#ff0000', /* Red */
          '#ffa500', /* Orange */
          '#ffea00', /* Yellow */
          '#32cd32', /* Green */
          '#0080ff' /* Blue */
      ]
    
      //Setting state for description that starts at the first desctription word
      const [description, setDescription] = useState(descriptionArray[0]);
      const [color, setColor] = useState(colorArray[0])
    
      //Setting state for count
      const [count, setCount] = useState(0);
    
      //Function that iterates through each index of descriptionArray based on count
      function descriptionSet() {
        if (count === descriptionArray.length - 1) {
          setCount(0);//if count at end of array, start back at index 0
        } else {
          setCount(count + 1);//if count not at end of array, add one to count
        }
    
        setDescription(descriptionArray[count]);//setting description to descriptionArray at index of count
        setColor(colorArray[count])//setting color to colorArray at index of count
    
        clearInterval(clear);
      }
      
      //Setting interval to call descriptionStet function every 5 seconds
      let clear = setInterval(descriptionSet, 1000);


    return (
      <>
        <main className='landing'>
            <section>
                <div className='landingContainer'>
                    <h1 id='landingTitle'>Sadie Southworth</h1>
                    <h2 id='landingSub' style={{color:color}}>{description}</h2>
                </div>
                <a href='#home'><span className='chevron'></span></a>
            </section>
        </main>

        <div id='home'>
          <Home />
        </div>
        </>
    )
}