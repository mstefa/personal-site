import React from 'react'
import mstefa from '../../resources/CV.JPG'
import { StyledAbout } from './StyledAbout'

export default function About() {
  return (
    <StyledAbout>
      <h2 id='about'> <i class="far fa-paper-plane"></i> About Me</h2>
      <div >
        <div className='textContainer'>
          <p>
            Before joining the world of tech, I studied and worked as an aeronautical engineer. I first fell in love with coding 
            in high school where we developed some simple’s apps on Visual Basic 🤔. 
            In college, I always went around developing software for mechanics and aerodynamics calculus, as I did on 
            my <a href='https://ieeexplore.ieee.org/document/7585325' target="blank">thesis</a>.
          </p>
          <p>
            After working in some of first line companies as a Team Leader Engineer designing and maintaining mechanical assets, 
            I decided to come back to codding and I joined the <a href='https://www.soyhenry.com/' target="blank">Henry bootcamp</a>.
            Now I enjoy building a variety of digital experiences 😄.
          </p>
          <p>
            As a full-stack developer, I care about producing software that is both, durable and useful. 
            Here are a few technologies I've been working with:
          </p>

            <ul>
            <li>JavaScript</li>
            <li>TypeScipt</li>
            <li>Node.js</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>GraphQl</li>
          </ul>


        </div>
        <div className='imgContainer'>
          <img src={mstefa} alt='profile'></img>
          <a href={`/mstefa/images/01mstefanutti-resume.pdf`} target="blank" > <button>Resume</button> </a>

        </div>
      </div>

    </StyledAbout>
  )
}
