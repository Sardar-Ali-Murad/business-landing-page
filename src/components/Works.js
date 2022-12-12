import React from 'react'
import Planet from "./images/get-started.png"
import {fadeIn, navVariants, slideIn, planetVariants} from "../utils/motion"
import { motion } from 'framer-motion';
import TypingText from "./TypingText"

const Works = () => {
    let arr=["Find a world that suits you and you want to enter","Enter the world by reading basmalah to be safe","No need to beat around the bush,just stay on the gas and have fun"]

  return (
    <div className='started-main div-center-70 grid-even-2'>

      <motion.div  initial="hidden" whileInView="show"   variants={planetVariants("left")}  className='Image'>
         <img src={Planet}/>
      </motion.div>
         
      <motion.div  initial="hidden" whileInView="show"  variants={planetVariants("right")} className='content-started'>
       {/* <p style={{fontSize:"10px"}}>How It Works</p> */}
       <TypingText text="How It Works" size="10px"/>
       <h2>Get started with just a few clicks</h2>
        <div className='started-paras'>
          {
            arr.map((all)=>{
            return <p>{all}</p>
            })
          }
        </div>
      </motion.div>   
    </div>
  )
}

export default Works
