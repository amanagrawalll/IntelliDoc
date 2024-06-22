import React,{useState, useEffect} from 'react'
import CardList from './CardList.js'
import SearchBox from './SearchBox.jsx'
import {tests} from './Tests.js';
import {motion} from 'framer-motion';
function Diagnosis() {

  const [searchfield, setSearchfield] = useState('')

  const onSearchChange=(e)=>{
    setSearchfield(e.target.value)
  }

 
const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  out: {
    opacity: 0,
    x:-1000,
    transition: { duration: 0.5 },
  },
}


  const filterRobots = tests.filter(robot=>{return robot.name.toLowerCase().includes(searchfield.toLowerCase())})
  return (
    <motion.div
    variants={pageVariants}
   initial="hidden"
   animate="visible"
   exit="out"
     className='mt-20'>
     
     <h1 className='text-center text-3xl lg:text-5xl font-bold'>Diagnosis</h1>
       <SearchBox searchChange={onSearchChange}/>
     
      <br/>
     <CardList tests={filterRobots}/> 
    </motion.div>
  )  
}

export default Diagnosis
