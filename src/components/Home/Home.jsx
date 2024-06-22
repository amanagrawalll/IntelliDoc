import React from 'react'
import Slider from './slider'
import Howitworks from './howitworks'
import Features from './features'
import Popup from '../PopupWindow/PopupWindow'
import {motion} from 'framer-motion'
const url = 'http://localhost:3000/medibuddy';

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  out: {
    opacity: 0,
    transition: { duration: 0.5 },
    x: -1000
  },
}

function Home() {
  return (
   <motion.div
   variants={pageVariants}
    initial="hidden"
    animate="visible"
    exit="out"
    className="">
    <Slider />
    <div>
      <Popup className='Popup' url={url}/>
    </div>
    <Features />
  
   </motion.div>
  )
}


export default Home
