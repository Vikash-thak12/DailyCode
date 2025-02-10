import React from 'react'

const Button = () => {
    return (
        <div className='h-screen w-full bg-neutral-950 flex items-center justify-center'>
            <button className='text-neutral-400 text-3xl px-8 py-4 bg-gray-800 rounded-lg relative group'>
                <span> Vikash Thakur</span>
                <span className='absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto'></span>
                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto blur-sm'></span>
            </button>
        </div>
    )
}

export default Button
