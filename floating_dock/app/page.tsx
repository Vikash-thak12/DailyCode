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
  <div className='fixed bottom-20 mx-auto flex items-center gap-5'>
    {
      navitems.map((item,idx) => (
        <div key={idx}>
          {item.title}
        </div>
      ))
    }
  </div>
);
