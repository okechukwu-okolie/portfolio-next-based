'use client'
import Link from 'next/link'
import React,{useState} from 'react'

export default function PortfolioLayout({children,}:Readonly<{children:React.ReactNode}>) {

  const [hamburger, setHamburger]= useState(false)
  return (
    <div>
      <div>
        <ul className={``}>
          <Link href={'/portfolio/react'}><li>React Projects</li></Link>
          <Link href={'/portfolio/nextjs'}><li>Next js Projects</li></Link>
          <Link href={'/portfolio/javascript-link'}><li>Javascript Projects</li></Link>
          <Link href={'/portfolio/full-stack'}><li>Full stack projects</li></Link>
          <Link href={'/portfolio/others-projects'}>Others</Link>
           
        </ul>
      </div>
      {children}
    </div>
  )
}
