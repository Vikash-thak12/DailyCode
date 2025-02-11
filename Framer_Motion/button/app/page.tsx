'use client'
import ButtonComponent from '@/components/ButtonComponent'
// import Content from '@/components/Content'
import React from 'react'
// import { motion, useScroll } from "motion/react"

const HomePage = () => {
  // const { scrollYProgress } = useScroll();
  return (
    <>
      <ButtonComponent />
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
    </>
  )
}

export default HomePage


