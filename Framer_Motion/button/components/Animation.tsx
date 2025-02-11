import React from 'react'
import { motion } from 'motion/react'

const Animation = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <motion.div
            >
                {/* <motion.ul
                    initial={{ '--rotate': '0deg' }}
                    animate={{ '--rotate': '360deg' }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <li style={{ transform: 'rotate(var(--rotate))' }}>First one</li>
                    <li style={{ transform: 'rotate(var(--rotate))' }}>Second One</li>
                    <li style={{ transform: 'rotate(var(--rotate))' }}>Third One</li>
                </motion.ul> */}
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    className='w-40 h-40 bg-blue-500 rounded-full'
                />
                <span className='text-4xl'>This is Framer Motion</span>
            </motion.div>
        </div>
    )
}

export default Animation
