import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Where I've made an impact</h5>
      <h2>Professional Experience</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Epicodus</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Built 50+ full stack projects</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Variety of languages, tools and technologies</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>RESTful APIs and relational databases</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>800+ hours of full stack web development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Remote collaboration</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Received certificate in Web and Mobile Development</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>HealthSaaS</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>API design and cloud computing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Frontend development in React and TypeScript</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Worked on new products and updated existing software systems</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Authorization and Authentication through Identity and .NET Core</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Contributed to team sprint planning and project meetings</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Client Work</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Custom web development from design to deployment</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Designed and delivered applications tailored to clients needs</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Built dynamic frontend applications for use on all devices</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Met timelines with efficient work and good time management</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
