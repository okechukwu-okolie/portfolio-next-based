// 'use client'
import Link from "next/link";
import React from "react";

export default function PortfolioNav() {
  return (
    <div className="">
      <div className="flex flex-col justify-between">
       
      <div>

        </div>

        <div className="flex flex-wrap justify-evenly gap-7">

            <Link href={"/portfolio/react"}>
                <div className="card bg-base-100 w-96 shadow-sm">
                  <figure className="px-10 pt-10">
                    <img
                      src="/reactClick.svg"
                      alt="Shoes"
                      className="rounded-xl" />
                  </figure>
                </div>
            </Link>

            <Link href={"/portfolio/nextjs"}>
                <div className="card bg-base-100 w-96 shadow-sm">
                  <figure className="px-10 pt-10">
                    <img
                      src="/nextClick.svg"
                      alt="Shoes"
                      className="rounded-xl" />
                  </figure>
                </div>
            </Link>

            <Link href={"/portfolio/javascript-link"}>
                <div className="card bg-base-100 w-96 shadow-sm">
                  <figure className="px-10 pt-10">
                    <img
                      src="/javascriptClick.svg"
                      alt="Shoes"
                      className="rounded-xl" />
                  </figure>
                </div>
            </Link>

            <Link href={"/portfolio/full-stack"}>
                <div className="card bg-base-100 w-96 shadow-sm">
                  <figure className="px-10 pt-10">
                    <img
                      src="/fullstackClick.svg"
                      alt="Shoes"
                      className="rounded-xl" />
                  </figure>
                </div>
            </Link>

            <Link href={"/portfolio/others-projects"}>
                <div className="card bg-base-100 w-96 shadow-sm">
                  <figure className="px-10 pt-10">
                    <img
                      src="/otherClick.webp"
                      alt="Shoes"
                      className="rounded-xl" />
                  </figure>
                </div>
            </Link>

            <Link href={"/portfolio/react"}>
                <div className="card bg-base-100 w-96 shadow-sm">
                  <figure className="px-10 pt-10">
                    <img
                      src="/reactClick.svg"
                      alt="Shoes"
                      className="rounded-xl" />
                  </figure>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
