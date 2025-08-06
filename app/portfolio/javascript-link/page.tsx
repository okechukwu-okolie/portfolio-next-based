import Link from "next/link";
import React from "react";
import { javascriptProjects } from "@/app/component/javascriptProjects";

export default function JavascriptProjects() {
  return (
    <div>
      <div className="">
        <div className="flex flex-col justify-between">
          <div>
            <ul className="hidden md:flex gap-7">
              <Link href={"/portfolio/react"}>
                <li>React Projects</li>
              </Link>
              <Link href={"/portfolio/nextjs"}>
                <li>Next js Projects</li>
              </Link>
              <Link href={"/portfolio/full-stack"}>
                <li>Full stack projects</li>
              </Link>
              <Link href={"/portfolio/others-projects"}>Others</Link>
            </ul>
          </div>


           <div className='flex justify-evenly flex-wrap mt-10 '>
                    {javascriptProjects.map((javascriptProject)=>(
                    <div key={javascriptProject.id} className="card bg-base-100 w-80 h-[400px] shadow-sm border mb-5">
                    <figure className=''>
                      <img src={javascriptProject.img} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{javascriptProject.title}</h2>
                      <p>{javascriptProject.desc}</p>
                      <div className="card-actions justify-end">
                       <Link href='https://www.google.com' target='blank' rel='nooppener noreferrer'> <button className="btn btn-primary w-[90px] rounded">To Web</button></Link>
                       <Link href='https://www.youtube.com' target='blank' rel='nooppener noreferrer'> <button className="btn btn-primary w-[90px] rounded">To Git</button></Link>
                      </div>
                    </div>
                </div>
                   ))}
            </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
