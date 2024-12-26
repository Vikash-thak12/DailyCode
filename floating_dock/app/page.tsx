import React from 'react'
import { IconBrandGithub, IconBrandTwitter, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react"

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


const FloatingDock = () => (
  <div className='fixed bottom-20 mx-auto inset-x-0 flex items-center justify-center gap-5 bg-neutral-100 w-fit px-4 py-2 rounded-lg'>
    {
      navitems.map((item,idx) => (
        <IconContainer key={idx} item={item} />
      ))
    }
  </div>
);

interface Link {
  title: string, 
  icon: React.ReactNode, 
  href: string
}


export const IconContainer = ({ item }: {item: Link}) => {
  return (
    <div>
      {item.icon}
    </div>
  )
}