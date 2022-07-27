import React from 'react'
import './about.css'
import Me from '../../assets/Me5.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={Me} alt='Me' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1 year developing Experience</small>
            </article>

            <article className='about_card' id='client_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>Clients of all industries</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>Over 50 projects in multiple languages</small>
            </article>
          </div>

          <p>
          I'm a professional problem solver with a passion for programming. I studied at Epicodus where I became proactive at working with multiple languages including JavaScript and C#. Through failure after failure, I've developed a tenacious focus to solve any problem that's placed in front of me. One look at my portfolio will reveal a student obsessed with learning and passionate about software development. 
          </p>
          <p>I’ve built 50+ projects with a variety of languages, tools and technologies, most times learning as I go, and always viewing challenges as opportunities. I recently finished my internship at HealthSaaS where I put my technical skills to the test as I worked on problems in every area of the codebase. From API design and relational databases to all things C# and Javascript, I greeted every challenge with a smile.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
