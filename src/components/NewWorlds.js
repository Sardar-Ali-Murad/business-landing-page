import React from 'react'
import Icon1 from "./images/headset.svg"
import Icon2 from "./images/vrpano.svg"
import Planet from "./images/whats-new.png"
import {fadeIn, navVariants, slideIn, planetVariants} from "../utils/motion"
import { motion } from 'framer-motion';
import TypingText from './TypingText';


const NewWorlds = () => {
  let arr=[
    {
      icon:Icon1,head:"A new world",para:"we have the latest update with new world for you to try never mind",
    },
    {
      icon:Icon2,head:"More realistic",para:"In the latest update, your eyes are narrow, making the world more realistic than ever",
    }
  ]
  return (
    <div className='div-center-70 grid-even-2 new-main'>

      <motion.div  initial="hidden" whileInView="show"   variants={planetVariants("right")}  className='content-new'>

      {/* <p>What,s New</p> */}
      <TypingText text="What,s New" size="10px"/>
      <h2 style={{color:"white"}}>What's new about Metaversus?</h2>

      <div style={{color:"white"}} className=" new-small">
        {
          arr.map((all)=>{
            return <div>
              <div className='image'>
                <img src={all?.icon}/>
              </div>
              <h4>{all?.head}</h4>
              <p style={{fontSize:"14px"}}>{all?.para}</p>
            </div>
          })
        }
      </div>


      </motion.div>

      <motion.div  initial="hidden" whileInView="show"   variants={planetVariants("left")}  className='image'>
         <img src={Planet}/>
      </motion.div>


    </div>
  )
}

export default NewWorlds
