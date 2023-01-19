import React from 'react'
import Section from './Section'
import videogames from "../assets/images/videogames.jpg"
import phones from "../assets/images/phones.jpg"
import fitness from "../assets/images/fitness.jpg"

const sections = [
    {
        id: 1,
        title: "VIDEOGAMES",
        subtitle: "Consoles, acccesories, games and more",
        description: "lorem",
        image: videogames
    },
    {
        id: 2,
        title: "PHONES",
        subtitle: "Samsung, Iphone, accesorries and more",
        description: "lorem",
        image: phones
    },
    {
        id: 3,
        title: "FITNESS",
        subtitle: "Clothes, accesories and more",
        description: "lorem",         
        image: fitness
    }
]

function Sections() {
  return (
    <div className='sections-container'>
      {
        sections.map((section) => (
            <Section title={section.title} subtitle={section.subtitle} description={section.description} imageSource={section.image} key={section.id}/>
        ))
      }
    </div>
    
  )
}

export default Sections
