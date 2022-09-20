import React from 'react'
import CardItem from './CardItem'

import "./ServicesCards.css"

function ServicesCards() {

 
  return (
    <div className='cards-services'>
        <h4> TRVL offers many different services to attend all of your needs! </h4>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/airplane.jpeg'
                        text="We book your airplane tickets at the best rates."
                        label="Savings"
                        path='/sign-up'
                    />
                    <CardItem 
                        src='images/Kilimanjaro.webp'
                        text="We offer trips to the most unique locations in the world."
                        label="Adventure"
                        path='/sign-up'
                    />
                     <CardItem 
                        src='images/mountain-biker.jpg'
                        text="We offer adventure plans for each location, guaranteeing a thrilling experience."
                        label="Memories for life"
                        path='/sign-up'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/hotel.jpg'
                        text="We will book a hotel to suit your adventure and needs."
                        label="Perfect stay"
                        path='/sign-up'
                    />
                     <CardItem 
                        src='images/traveltourism-1.jpg'
                        text="We take on all of the paperwork - we just need your signature."
                        label="No hassle"
                        path='/sign-up'
                    />
                    <CardItem 
                        src='images/tour-guide.jpg'
                        text="TRVL has connections with many tour-agencies around the world."
                        label="Cultural experience"
                        path='/sign-up'
                    />
                </ul>        
            </div> 

        </div>
    </div>
  )
}

export default ServicesCards