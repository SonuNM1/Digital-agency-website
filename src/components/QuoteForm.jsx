import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Navbar from './Navbar'

const QuoteForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target 

    setFormData((prevState) => ({
      ...prevState,
      [name] : value 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault() 

    emailjs
      .send(
        'service_ba643r3',
        'template_if38oii',
        {
          name: formData.name, 
          email: formData.email, 
          message: formData.message
        },
        'user_id'
      )
      .then((response) => {
        console.log('Email sent successfully: ', response)
        alert('Email sent successfully')
      },
      (error) => {
        console.log('Error sending email: ', error)
        alert('Failed to send email. Please try again.')
      }
    )

    setFormData({
      name: '',
      email: '',
      message: ''
    })

  }

  return (
    <>
      <Navbar/>
      <div className='quote-form-container'>
        <h2>Get a Free Quote</h2>
        <form onSubmit={handleSubmit}>

          <div>
            <label>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type='submit'>Submit</button>

        </form>
    </div>
    </>
  )
}

export default QuoteForm
