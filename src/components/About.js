import React from 'react'
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn} from "../utils/motion"

const About = () => {
  return (
    <motion.div  initial="hidden" whileInView="show" viewport={{once:"false",amount:.25}}  variants={fadeIn('up', 'tween', .3, 1)}  className='main' style={{marginTop:"80px",marginBottom:"70px",overflowX:"hidden",color:"white"}}>
      <h2 className='text-center'>About MetaVerse</h2>
      <p className='text-center div-center-50' style={{color:"white"}}>Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the madness of the metaverse of today, using only VR devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down</p>
    </motion.div>
  )
}

export default About
