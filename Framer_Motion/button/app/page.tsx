'use client'
// import ButtonComponent from '@/components/ButtonComponent'
// import Content from '@/components/Content'
import React from 'react'
import { motion } from 'motion/react'
import Animation from '@/components/Animation'
import Parallex from '@/components/Parallex'
// import { motion, useScroll } from "motion/react"

const HomePage = () => {
  
  return (
    <div className='h-screen w-full flex items-center justify-center bg-black text-white'>
      <Parallex />
    {/* <motion.div
      // initial={{ transform: "translateX(-100px)" }}
      // animate={{ transform: "translateX(0px)" }}
      // transition={{ type: "spring", duration: 1 }}
    // whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
    // animate={{ rotate: [0, 60, 0], transition: { duration: 5}}}
    // style={{ x: -200 }}
    className='w-40 h-40 rounded-lg bg-blue-500'
     /> */}

     {/* <Animation /> */}
      {/* <ButtonComponent /> */}
      {/* <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "rgb(102,155,210)"
        }}
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2, transition: { duration: 2 } }}
        // animate={{ 
        //   scale: 2,
        //   transition: { duration: 1 }
        //  }}
        // transition={{ duration: 2}}
        className='w-20 h-20 bg-blue-600 rounded-lg mt-20 mx-auto'
      />

      <Content /> */}
    </div>
  )
}

export default HomePage


