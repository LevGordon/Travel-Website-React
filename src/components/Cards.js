import React from 'react'
import CardItem from './CardItem'

import "./Cards.css"

function Cards() {

 
  return (
    <div className='cards'>
        <h1> Check Out These Epic Destinations! </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-9.jpg'
                        text="Explore the hidden waterfall deep inside the Amazon jungle."
                        label="Adventure"
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-3.jpg'
                        text="Reel in the biggest catch of your life, right off the coast of Eastern Australia."
                        label="Fishing"
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-2.jpg'
                        text="Enjoy the peaceful sun of the beaches in Oceania."
                        label="Leisure"
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-8.jpg'
                        text="A trip through the dryest desert on earth will leave you humbled."
                        label="Adventure"
                        path='/services'
                    />
                     <CardItem 
                        src='images/img-4.jpg'
                        text="Exquisite locations all around the world."
                        label="Tourism"
                        path='/services'
                    />
                </ul>        
            </div> 

        </div>
    </div>
  )
}

export default Cards