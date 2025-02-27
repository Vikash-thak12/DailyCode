import { cn } from '@/lib/utils'
import { Icon24Hours, Icon360View, Icon3dCubeSphere, IconMessage, IconX } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const HoverComponent = () => {
    return (
        <div className={cn("w-80 min-h-[26rem] h-[30rem] rounded-xl bg-gray-50 p-4 flex flex-col", "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]")}>
            <h2 className='font-bold text-[15px]'>Accertinity UI</h2>
            <p className='text-neutral-600 text-[12px] mt-2'>Welcome to this webpage where you can create the amazing cards</p>
            <div className="flex items-center justify-center">
                <button className='flex gap-1 items-center px-2 py-1 myshadow rounded-xl mt-2'>
                    <Image src={"/images/logo.png"} alt='logo' height={30} width={30} />
                    <span className='text-neutral-500'>Accertinity</span>
                    <IconX className='h-5 w-5 text-neutral-400' />
                </button>
            </div>


            <div className='bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative'>
                {/* here motion will start */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.98,
                        filter: "blur(10px)"
                    }}
                    whileHover={{
                        opacity: 1,
                        scale: 1.05,
                        filter: "blur(0px)"
                    }}

                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                    className='absolute inset-0 h-full w-full bg-gray-300 rounded-lg divide-y divide-neutral-200 overflow-hidden'>

                    {/* first one */}
                    <div className='flex gap-2 p-4'>
                        <div className='myshadow px-2 py-1 rounded-lg'>
                            <IconMessage className='h-8 w-8 text-neutral-600' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[12px] font-bold text-neutral-600'>
                                Accertinity UI Components
                            </p>
                            <p className='text-neutral-400 text-[10px] mt-1'>
                                A collection of UI Components
                            </p>
                        </div>


                    </div>
                    {/* second one */}
                    <div className='flex gap-2 p-4'>
                        <div className='myshadow px-2 py-1 rounded-lg'>
                            <Icon24Hours className='h-8 w-8 text-neutral-600' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[12px] font-bold text-neutral-600'>
                                24 Hours
                            </p>
                            <p className='text-neutral-400 text-[10px] mt-1'>
                                Will be Available 24 Hours
                            </p>
                        </div>
                    </div>


                    {/* third one */}
                    <div className='flex gap-2 p-4'>
                        <div className='myshadow px-2 py-1 rounded-lg'>
                            <Icon360View className='h-8 w-8 text-neutral-600' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[12px] font-bold text-neutral-600'>
                                Rotate up to 360
                            </p>
                            <p className='text-neutral-400 text-[10px] mt-1'>
                                Nothing just having 360 rotattion
                            </p>
                        </div>
                    </div>


                    {/* fourth one */}
                    <div className='flex gap-2 p-4'>
                        <div className='myshadow px-2 py-1 rounded-lg'>
                            <Icon3dCubeSphere className='h-8 w-8 text-neutral-600' />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[12px] font-bold text-neutral-600'>
                                Icon with Cube
                            </p>
                            <p className='text-neutral-400 text-[10px] mt-1'>
                                Here the icon with cube again
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HoverComponent
