import React from 'react'
import '../styles/Section.css'

function Section({title, subtitle, description, imageSource}) {
  return (
    <div className='section-container'>
      <img className='img' src={imageSource} alt="" />

        <div className='text-container'>
            <p className='title'>{title}</p>

            <p className='subtitle'>{subtitle}</p>

            <p className='description'>{description}</p>

            <button>More</button>
        </div>
    </div>
  )
}

export default Section