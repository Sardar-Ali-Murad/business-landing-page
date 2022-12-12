import React from 'react'
import Icon1 from "./images/headset.svg"
import  facebook from "./images/facebook.svg"
import  Insta from "./images/instagram.svg"
import  linkedin from "./images/linkedin.svg"
import  twitter from "./images/twitter.svg"
import {footerVariants }  from "../utils/motion"
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div  initial="hidden" whileInView="show"  variants={footerVariants}  className='footer-main'>

       <div className='footer-front'>
         <h1 style={{color:"white"}}>Enter The MetaVerse</h1>
         <a className='dark' style={{color:"white"}}>
          <img src={Icon1} style={{marginRight:"10px",color:"white"}}/>
          <span style={{color:"white"}}> Enter The MataVerse</span> 
          </a>
       </div>

       <div className='line div-center-80'></div>

       <div className='footer-last'>
         <h4 style={{color:"white"}}>METAVERUS</h4>
         <p style={{fontSize:"14px"}}>Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>

         <div className='Icons'>
          <img src={facebook}/>
          <img src={linkedin}/>
          <img src={twitter}/>
          <img src={Insta}/>
         </div>
       </div>

    </motion.div>
  )
}

export default Footer
