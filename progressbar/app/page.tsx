'use client'

import { Progressbar } from "@/components/Progressbar";
import { useRef } from "react"

const Homepage = () => {
  const mainRef = useRef<HTMLElement | null>(null);
  return (
    <main ref={mainRef}>
      <Progressbar target={mainRef} />
      <div className="w-full h-screen bg-blue-200" />
      <div className="w-full h-screen bg-red-200" />
      <div className="w-full h-screen bg-yellow-200" />
      <div className="w-full h-screen bg-green-200" />
    </main>
  )
}

export default Homepage
