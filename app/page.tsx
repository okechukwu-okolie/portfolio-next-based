'use client'

import { DiCss3, DiHtml5, DiJavascript, DiMongodb, DiNodejs} from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress,  SiRedux, SiTypescript, SiZod } from "react-icons/si";
import { useSpring, animated } from '@react-spring/web'





export default function Home() {

 const springs = useSpring({
    from: {  y: -10, x: 0 },
    to: [
      { y: 10, },
      { y: -10, },
    ],
    loop: true,
  })


  return (

    <div >
      <div className={`flex justify-evenly items-center h-[60vh]`}>
        <div>image</div>
        <div>information</div>
      </div>
      <div className="">TOOLS THAT I USE </div>
      <div className="flex gap-10 justify-between flex-wrap">
        
        
          <animated.div style ={{...springs}}><RiNextjsFill size={50} className="text-yellow-400" /></animated.div>
        <animated.div style ={{...springs}}>
          <SiExpress size={50} className="text-red-700" /></animated.div>
        <animated.div style ={{...springs}}>
          <GrReactjs size={50} className="text-yellow-400" /></animated.div>
        <animated.div style ={{...springs}}>
          <SiZod size={50} className="text-slate-400" /></animated.div>
        <animated.div style ={{...springs}}>
          <SiRedux size={50} className="text-red-400" /></animated.div>
        <animated.div style ={{...springs}}>
          <RiTailwindCssFill size={50} className="text-blue-400" /></animated.div>
        <animated.div style ={{...springs}}>
          <DiMongodb size={50} className="text-green-400" /></animated.div>
        <animated.div style ={{...springs}}>
          <DiHtml5 size={50} className="text-green-400" /></animated.div>
        <animated.div style ={{...springs}}>
          <DiCss3 size={50} className="text-green-400" /></animated.div>
        <animated.div style ={{...springs}}>
          <DiNodejs size={50} className="text-green-400 border-2 border-white rounded-[10px] p-1" /></animated.div>
        <animated.div style ={{...springs}}>
          <SiTypescript size={50} className="text-green-400" /></animated.div>
         <animated.div style ={{...springs}}>
          <DiJavascript size={50} className="javascript text-yellow-400" />  </animated.div>
       
     
      </div>

    </div>
  );
}
