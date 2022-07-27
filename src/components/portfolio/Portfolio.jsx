import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/WWB.jpg'
import IMG2 from '../../assets/RPDX.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Worldwide Bulliez',
    github: 'https://github.com/RileyShimp/worldwidebulliez',
    demo: 'https://www.worldwidebulliez.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Reality PDX',
    github: 'https://github.com/RileyShimp/RealityNightClubPDX',
    demo: 'https://www.realitypdx.com/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Bakery Database App',
    github: 'https://github.com/RileyShimp/PierresTreats.Solution',
    demo: 'https://github.com/RileyShimp',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
                <a className='btn' target='_blank' href={github}>
                  Github
                </a>
                <a className='btn btn-primary' target='_blank' href={demo}>
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
