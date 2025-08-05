'use client'
import Link from 'next/link'
import React,{useState} from 'react'
import { FaHamburger } from 'react-icons/fa'

export default function PortfolioLayout({children,}:Readonly<{children:React.ReactNode}>) {

  const [hamburger, setHamburger]= useState(false)

  const toggle =()=>{
    setHamburger(!hamburger)
  }
  return (
    <div>
      <div className='flex justify-between'>
       <div>
         <ul className='hidden md:flex gap-7'>
            <Link href={'/portfolio/react'}><li>React Projects</li></Link>
            <Link href={'/portfolio/nextjs'}><li>Next js Projects</li></Link>
            <Link href={'/portfolio/javascript-link'}><li>Javascript Projects</li></Link>
            <Link href={'/portfolio/full-stack'}><li>Full stack projects</li></Link>
            <Link href={'/portfolio/others-projects'}>Others</Link>
        </ul>
       </div>
       <div className='md:hidden z-20'>
        <FaHamburger />
         <ul >
          <Link href={'/portfolio/react'}><li>React Projects</li></Link>
          <Link href={'/portfolio/nextjs'}><li>Next js Projects</li></Link>
          <Link href={'/portfolio/javascript-link'}><li>Javascript Projects</li></Link>
          <Link href={'/portfolio/full-stack'}><li>Full stack projects</li></Link>
          <Link href={'/portfolio/others-projects'}>Others</Link>
        </ul>
       </div>
        
      </div>
      {children}
    </div>
  )
}
