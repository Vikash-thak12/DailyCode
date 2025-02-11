import { motion } from "motion/react";
import React from "react";

const ButtonComponent = () => {
    return (
        <div
            className="h-screen w-full bg-neutral-900 flex items-center justify-center"
            style={{
                backgroundImage: `radial-gradient(circle, rgba(6, 182, 212, 0.2) 1px, transparent 0)`,
                backgroundSize: "8px 8px",
                backgroundRepeat: "repeat",
            }}
        >
            <motion.div
            // animate={{ rotate: 360, transition: { duration: 2}}}
             className="w-40 h-40 bg-blue-500 rounded-lg mx-10" />
            <motion.button
                animate={{ rotate: 360, transition: { duration: 2} }}
                className="text-neutral-400 text-3xl px-8 py-4 bg-gray-800 rounded-lg relative group"
            >
                <span>Vikash Thakur</span>
                <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto blur-sm"></span>
            </motion.button>
        </div>
    );
};

export default ButtonComponent;