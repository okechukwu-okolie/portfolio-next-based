import Link from 'next/link'
import React from 'react'

export default function PortfolioLayout({children,}:Readonly<{children:React.ReactNode}>) {
  return (
    <div>
      <div>
        <ul className='flex gap-7'>
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
