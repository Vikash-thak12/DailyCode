import { motion } from "motion/react";
import React from "react";

const ButtonComponent = () => {
    return (
        <div
            className="[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-900 flex items-center justify-center"
            style={{
                backgroundImage: `radial-gradient(circle, rgba(6, 182, 212, 0.2) 1px, transparent 0)`,
                backgroundSize: "8px 8px",
                backgroundRepeat: "repeat",
            }}
        >
            <motion.button
                whileHover={{
                    rotateX: 25, 
                    rotateY: 10,
                    boxShadow: "0px 20px 50px rgba(8,112,184,0.7)"
                }}
                style={{
                     translateZ: 100,
                }}
                transition={{
                    duration: 0.2, 
                    ease: "easeInOut"
                }}  
                className="text-neutral-400 text-3xl px-8 py-4 bg-gray-800 rounded-lg relative group"
            >
                <span className="group-hover:text-cyan-500 duration-300">Vikash Thakur</span>
                <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto blur-sm"></span>
            </motion.button>
        </div>
    );
};

export default ButtonComponent;