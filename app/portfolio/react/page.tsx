import React from 'react'
import Link from 'next/link'
import { reactProjects } from '@/app/component/reactProjects'

export default function ReactProjects() {
  return (
    <>
    <div>
      <div className="flex flex-col justify-between">
        <div>
          <ul className="hidden md:flex gap-7">
            <Link href={"/portfolio/nextjs"}>
              <li>Next js Projects</li>
            </Link>
            <Link href={"/portfolio/javascript-link"}>
              <li>Javascript Projects</li>
            </Link>
            <Link href={"/portfolio/full-stack"}>
              <li>Full stack projects</li>
            </Link>
            <Link href={"/portfolio/others-projects"}>Others</Link>
          </ul>
        </div>
      </div>
    </div>


{/* THIS IS THE DISPLAY OF THE PROJECTS DONE IN THE REACT PROJECTS */}

    <div className='flex justify-evenly flex-wrap mt-10 '>
      {reactProjects.map((reactProject)=>(
        <div key={reactProject.id} className="card bg-base-100 w-96 shadow-sm border mb-4">
          <figure>
            <img
              src={reactProject.img}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{reactProject.title}</h2>
            <p>{reactProject.desc}</p>
            <div className="card-actions justify-end">
             <Link href='https://www.google.com' target='blank' rel='nooppener noreferrer'> <button className="btn btn-primary w-[90px] rounded">To Web</button></Link>
             <Link href='https://www.youtube.com' target='blank' rel='nooppener noreferrer'> <button className="btn btn-primary w-[90px] rounded">To Git</button></Link>
            </div>
          </div>
      </div>
      ))}

    </div>
    </>
  )
}
