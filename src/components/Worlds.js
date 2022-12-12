import React from 'react'
import Planer1 from "./images/planet-01.png"
import Planer2 from "./images/planet-02.png"
import Planer3 from "./images/planet-03.png"
import Planer4 from "./images/planet-04.png"
import Planer5 from "./images/planet-05.png"
import { motion } from 'framer-motion';
import {fadeIn, navVariants, slideIn} from "../utils/motion"
import TypingText from "./TypingText"


let arr=[{name:"The Hogwarts",pic:Planer1},{name:"The Hogwarts",pic:Planer2},{name:"The Hogwarts",pic:Planer3},{name:"The Hogwarts",pic:Planer4},{name:"The Hogwarts",pic:Planer5},]


const Worlds = () => {
    let [active,setActive]=React.useState(0)
  return (
    <div className='world-main' >
      <div className='text-center'><TypingText text="The World"/></div>

      <h1 className='text-center' style={{color:"white"}}>Choose the world you want to explore</h1>
      <div className='div-center-80  image-gallery'>
         {
            arr.map((all,index)=>{
                return <motion.div  initial="hidden" whileInView="show"  variants={fadeIn('right', 'tween', index*.3, 1)} onClick={()=>setActive(index)} className={`single-image-gallery ${active===index?"active-one":"simple-one"}`}>
                    <img src={all?.pic}/>
                    <h3>{all?.name}</h3>
                </motion.div>
            })
         }
      </div>
    </div>
  )
}

export default Worlds
