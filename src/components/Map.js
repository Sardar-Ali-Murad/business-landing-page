import React from 'react'
import MapImg from "./images/map.png"
import People1 from "./images/people-01.png"
import People2 from "./images/people-02.png"
import People3 from "./images/people-03.png"
import TypingText from "./TypingText"

const Map = () => {
  return (
    <div>
      <div className='text-center' style={{fontSize:"10px"}}><TypingText text="People On The World" size="10px"/></div>
      <h2 className='text-center div-center-60' style={{color:"white"}}>Track friends around you and invite them to play together in the same world</h2>

      <div className='map-container'>
         <img className='main' src={MapImg}/>
         <img src={People1} className="p1"/>
         <img src={People2} className="p2"/>
         <img src={People3} className="p3"/>
      </div>

    </div>
  )
}

export default Map
