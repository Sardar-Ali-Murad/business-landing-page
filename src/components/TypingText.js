import React from 'react'
import { textVariant } from "../utils/motion"
import { motion } from 'framer-motion';

const TypingText = ({text,size}) => {
    console.log(text.split(""))
  return (
    <p style={{fontSize:size}}>
      {
        text.split("").map((word,index)=><motion.span variants={ textVariant(index*.3) } initial="hidden" whileInView="show" >{word}</motion.span>)
      }
    </p>
  )
}

export default TypingText
