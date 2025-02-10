/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useRef } from 'react'
import { IconBrandGithub, IconBrandTwitter, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react"
import { useMotionValue, useTransform } from 'motion/react'
import { motion, MotionValue } from 'motion/react'
// import { MotionValue } from 'motion'
import Link from 'next/link'

export const navitems = [
  {
    title: "Home",
    icon: <IconHome className='w-full h-full text-neutral-500' />,
    href: "/"
  },
  {
    title: "Products",
    icon: <IconTerminal2 className='w-full h-full text-neutral-500' />,
    href: "/products"
  },
  {
    title: "Components",
    icon: <IconNewSection className='w-full h-full text-neutral-500' />,
    href: "/components"
  },
  {
    title: "Aceternity UI",
    icon: <IconHome className='w-full h-full text-neutral-500' />,
    href: "/aceternity"
  },
  {
    title: "Github",
    icon: <IconBrandGithub className='w-full h-full text-neutral-500' />,
    href: "/github"
  },
  {
    title: "Twitter",
    icon: <IconBrandTwitter className='w-full h-full text-neutral-500' />,
    href: "/twitter"
  },
]

const Homepage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <FloatingDock />
    </div>
  )
}

export default Homepage


const FloatingDock = () => {

  const mouseX = useMotionValue(Infinity)
  return (
    <motion.div
      onMouseEnter={(e) => mouseX.set(e.pageX)}
      onMouseLeave={(e) => mouseX.set(Infinity)}
      className='fixed bottom-20 mx-auto inset-x-0 flex items-center justify-center gap-5 bg-neutral-100 w-fit px-4 py-2 rounded-lg h-16'>
      {
        navitems.map((item, idx) => (
          <IconContainer mouseX={mouseX} key={idx} item={item} />
        ))
      }
    </motion.div>
  )
}

interface Link {
  title: string,
  icon: React.ReactNode,
  href: string
}


export const IconContainer = ({ item, mouseX }: { item: Link, mouseX: MotionValue<number> }) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    if (!ref.current) return Infinity; // Guard against null ref
    const bounds = ref.current.getBoundingClientRect();
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  return (
    <Link href={item.href}>
      <motion.div
        ref={ref}
        style={{
          width: widthTransform,
          height: heightTransform,
        }}
        className="bg-neutral-300 rounded-full"
      >
        {item.icon}
      </motion.div>
    </Link>
  );
};
