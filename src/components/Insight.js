import React from 'react'
import Planet1 from "./images/planet-07.png"
import Planet2 from "./images/planet-08.png"
import Planet3 from "./images/planet-09.png"
import arraow from "./images/arrow.svg"
import {fadeIn, navVariants, slideIn} from "../utils/motion"
import { motion } from 'framer-motion';
import TypingText from "./TypingText"


 let arr=[
  {
    img:Planet1,head:"The launch of the Metaverse makes Elon musk ketar-ketir",para:"Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique."
  },
  {
    img:Planet2,head:"7 tips to easily master the madness of the Metaverse",para:"Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum"
  },
  {
    img:Planet3,head:"With one platform you can explore the whole world virtually",para:"Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem."
  },
 ]

const Insight = () => {
  return (
    <div className='insight-main div-center-80'>
      <div className='text-center'><TypingText text="Insight" size="10px"/></div>
      <h2 className='text-center' style={{marginBottom:"70px",color:"white"}}>Insight about metaverse</h2>

      <div>
        {
          arr.map((all,index)=>{
            return <motion.div  initial="hidden" whileInView="show"  variants={slideIn('right', 'tween', index*0.5, 1)}   className='grid-even-3 single-insight'>
                 <img className='main-insight' src={all?.img}/>
                 <div>
                  <h3 style={{color:"white"}}>{all?.head}</h3>
                  <p>{all?.para}</p>
                 </div>
                 <div className='arrow-image'>
                    <img src={arraow} />
                 </div>

            </motion.div>
          })
        }
      </div>

    </div>
  )
}

export default Insight
