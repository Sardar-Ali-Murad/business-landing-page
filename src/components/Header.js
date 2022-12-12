import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {HiBars3CenterLeft} from "react-icons/hi2"
import Img1 from "./images/cover.png"
import Stamp from "./images/stamp.png"
import "./index.css"
import {fadeIn, navVariants, slideIn} from "../utils/motion"
import { motion } from 'framer-motion';

// viewport={{once:"false",amount:.25}}
const Header = () => {
  return (
    <div className='header-main'>

      <motion.div  initial="hidden" whileInView="show" variants={navVariants}  className='header-front'  style={{color:"white"}}>
        <AiOutlineSearch/>
        <p style={{color:"white"}}>MetaVerse</p>
        <HiBars3CenterLeft/>
      </motion.div>

      <div className='front-section-2'>
         <motion.h1  initial="hidden" whileInView="show" viewport={{once:"false",amount:.25}}  variants={fadeIn('left', 'tween', 0.2, 1)} className=' text-center'>MetaVerse Madness</motion.h1>
         <motion.div  initial="hidden" whileInView="show" viewport={{once:"false",amount:.25}}  variants={fadeIn('right', 'tween', 0.4, 1)} >
          <img className='div-center-80 img1' src={Img1}/>
         </motion.div>
      </div>

   
  

    </div>
  )
}

export default Header
