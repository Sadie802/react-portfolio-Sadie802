import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar'
import Footer from './Footer'
import './App.css'
import slideOne from './Images/slideOne.png'
import slideTwo from './Images/slideTwo.jpeg'
import slideThree from './Images/slideThree.png'
import slideFour from './Images/slideFour.jpeg'
import slideFive from './Images/slideFive.jpeg'
import slideSix from './Images/slideSix.png'
import slideSeven from './Images/slideSeven.JPG'

export default function About (){

    return (
        <main className='wrapper'>

            {/* Adding nav bar to page */}
            <NavBar />

            {/* Creating Carousel/slideshow of images */}
            <div style={{ display: 'block', margin: 'auto', width: 700, padding: 30}}>
            <Carousel id='carousel' >
                <Carousel.Item>
                    <img src={slideSeven} alt='Photo of sadie with my dog wearing a life jacket looking out at the Waterbury reservoir and mountains' width='100%' height='auto'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slideTwo} alt='photo of a field with green grass and foliage in background' width='100%' height='auto'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slideThree} alt='photo of sadie with three dogs in the woods' width='100%' height='auto'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slideFour} alt='photo of the Mount Mansfield range at sunset' width='100%' height='auto'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slideFive} alt='photo of sadies three cats on a bed' width='100%' height='auto'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slideSix} alt='photo of sadies three dogs running on a snowy road in Smugglers Notch' width='100%' height='auto'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slideOne} alt='photo of sadie with her dog in the snowy woods' width='100%' height='auto'/>
                </Carousel.Item>
            </Carousel>
            </div>

            {/* About me section  */}
            <div className='content'>
                <h3 id='title'>About</h3>
                <hr></hr>
                <div className='aboutSections'>
                    <section> 
                        <h3 className='sectionTitle'>Where I grew up</h3>
                        <p>I was born and raised in the Brave Little State of Vermont. I spent my childhood living in Stowe and Morrisville. I greatly appreciate the sense of community across the whole state. It doesn't matter if there was a disaster or heartbreaking news in a town that you've never heard of; the whole state will show up and support. A sense of together-ness is something I carry with me no matter what I am doing in my life. I believe it is one of the the most important values one can have.</p>
                        <br></br>
                        <p>Vermont is one of those places that is beautiful year round. No matter where you are you can always see a mountain range or a field of cows. I am currently residing in Burlington, VT. Burlington gives me the ability to be in a more city-like setting without being too far from the nature I enjoy. Whether it's a five minute walk to watch the sunset over the lake, a 20 minute drive to a river to enjoy the peace and quiet of the woods, or a 15 minute walk to Church Street, Burlington gives me the flexbility to enjoy it all. </p>
                    </section>
                    <section> 
                        <h3 className='sectionTitle'>Why I got into programming</h3>
                        <p>To be frank, I've never been great at school. I wasn't top of my class and I never attended university. Though, what set me apart from my peers was my determination to problem solving and (in my humble opinion) an impeccable skill and love for mathematics. The more complex the problem, the more addrenaline and drive I got. During the Covid-19 shutdown, March 2020, I was furloughed from my employer of (at that time) 2 years. As one would, I got bored of sitting at home not doing much. So I decided to pick up my computer, make an account at Codecademy, and teach myself the basics of Python and HTML. From there, I just fell in love. I was feeling that "math feeling" all over again. Now here I am, two years later, I left my employer and took a risk to participate in a full time Software/Web Development Bootcamp. It has been nothing short of 'the-right-decision'. </p>
                    </section>
                    <section> 
                        <h3 className='sectionTitle'>Interests</h3>
                        <p>Growing up in Vermont, I had (and fortunately still have) unlimited access to the outdoors. It's hard not to fall in love with nature when you're surrounded by it every day. My favorite activites include hikeing or walking in the woods with my three dogs, swimming in natural bodies of water, and camping. It's super important to me to spend time outside. It helps me release negative and/or stressful thoughts and helps keep me grounded.</p>
                       <br></br>
                        <p>I am also the proud mother of three adorable cat boys! They are constant entertainment and bring a sense of life into my home and heart. If I'm not outside, you can find me lounging on the couch with my cats or playing fetch with my kitten.  </p>
                    </section>
                </div>
            </div>

            {/* Adding footer to page */}
            <Footer />
        </main> 
    )
}