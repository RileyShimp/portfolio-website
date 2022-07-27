import React, { useRef, useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs from 'emailjs-com'
// import { Modal } from 'react-bootstrap'

const Contact = () => {
  // const [show, setShow] = useState(false)

  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_99u7b8t', 'template_inhgak4', form.current, 'qNFBcTeC0mXDMBAU_').then(
      (result) => {
        // handleShow()
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>rileyshimp@icloud.com</h5>
            <a href='mailto:rileyshimp@icloud.com' target='_blank'>
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' value='Send' className='btn btn-primary'>
            Send Message
          </button>
        </form>
        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Email Sent!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thank you for your interest! We will get back to you as soon as possible!
          </Modal.Body>
        </Modal> */}
      </div>
    </section>
  )
}

export default Contact
