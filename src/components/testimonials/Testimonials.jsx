import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/user.jpg'

import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Reality PDX',
    review:
      'Riley was amazing to work with. We gave a general idea of what we wanted, and he blew us away with what he came up with. extremely satisfied with the end result',
  },
  {
    avatar: AVTR1,
    name: 'Worldwide Bulliez llc',
    review:
      "We weren't sure what we wanted, we just knew we needed a modern website to attract more clients. Riley made the process fun. He showed us plenty of examples and let us choose what functionalities we wanted. He quickly delivered a minimal modern site with everything we wanted and more.",
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials_container'
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }} >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
