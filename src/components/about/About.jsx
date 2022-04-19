import React from 'react'
import './about.css'
import ME from '../../assets/diloo2.jpg'
import {FaAward} from 'react-icons/fa'
import {BiCodeAlt} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'> 
      <h5> Get To Know </h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'> 
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>Recent Makers Bootcamp graduate</small>
              </article>
              <article className='about__card'> 
                <BiCodeAlt className='about__icon'/>
                <h5>Languages</h5>
                <small>Ruby, Javascript and Python</small>
              </article>
              <article className='about__card'> 
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>

            <p>
            Since graduating Makers Academy’s Software Engineering accelerator program, 
I have published a number of unique projects in an agile environment consisting 
of daily pair-programming and completing weekly code-review. 

Prior to Makers, I gained 4 years of experience in English Online Consultant and 
gained great interpersonal skills, fostering teamwork, establishing positive 
relations with clients, and implementing new procedures to enhance 
operational efficiency. I’ve always looked for and developed applications to 
improve team efficiency and solving problems.

I’m ready to make an immediate impact as a Full Stack Engineer and I’m      
confident I have the skills to develop impressive, scalable and reliable software 
products with a positive impact in the world. 

            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About