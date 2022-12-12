import { DisabledByDefault } from '@mui/icons-material'
import React from 'react'
import Planet from "./images/planet-06.png"
import Navigation from "./images/stamp.png"

const Review = () => {
  return (
    <div className='review-main grid-even-2 div-center-80'>

      <div className='card-review'>
        <img src={Navigation}/>
         <h5>Samantha </h5>
         <p style={{fontSize:"14px"}}>Founder Metaverus</p>
         <p>“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
      </div>

      <div className='image'>
        <img src={Planet}/>
      </div>
    </div>
  )
}

export default Review
