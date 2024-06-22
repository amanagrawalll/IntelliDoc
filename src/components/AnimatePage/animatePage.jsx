import React from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import {useNavigate} from "react-router-dom" 
const backdrop={
    visible:{opacity:1},
    hidden:{opacity:0}
}

const childrenVariants = {
  hidden: { y: -1000, opacity: 0 },
  visible: { y: "3vh", opacity: 1, transition: { delay: 0.5 } },
};

function AnimatePage({showAnimate,setShowAnimate}) {
    const navigateTo = useNavigate();
    const navigateto=()=>{
        navigateTo('/diagnosis');
    }
  return (
    <AnimatePresence mode='wait'>
      {showAnimate && (
        <motion.div
          className='bg-[rgba(0,0,0,0.3)] opacity-50 w-full h-full fixed top-0 left-0 z-40 flex justify-center items-center'

          variants={backdrop}
          initial='hidden'
          animate='visible'
         >
         <motion.div  variants={childrenVariants}
         initial='hidden'
         animate='visible'
          className='flex-col justify-center items-center  bg-white rounded-md p-3 w-1/3 h-1/5 m-autoz-50'>
           <div className='font-bold mb-2'>Try to do another test?</div>
           <button className='btn bg-blue-600 text-white md: font-semibold px-3 py-1 duration-500 md:static rounded-full text-center' onClick={navigateto}><>Start Again</></button>
</motion.div>
        </motion.div>)}
    </AnimatePresence>
  )
}

export default AnimatePage
