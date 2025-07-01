// import React from 'react'
// import CTAButton from "../HomePage/Button";
// import HighlightText from './HighlightText';
// import { FaArrowRightLong } from "react-icons/fa6";
// import { TypeAnimation } from 'react-type-animation';
// function CodeBlocks({
//     position, heading, subHeading, catbtn1, catbtn2, codeContent, backgroundGradient, codeColor
// }) {
//     return (
//         <div className={`flex flex-row ${position} my-20 justify-between gap-20`}>
//             {/* section1 */}
//             <div className='w-[50%] flex flex-col gap-8'>
//                 {
//                     heading
//                 }
//                 <div className='text-richblack-300 font-bold '>
//                     {subHeading}
//                 </div>
//                 <div className='flex gap-7 mt-7'>
//                     <CTAButton active={catbtn1.active} linkTo={catbtn1.linkTo}>
//                         <div className='flex gap-2 items-center'>
//                             {catbtn1.btnText}
//                             <FaArrowRightLong />
//                         </div>

//                     </CTAButton>
//                     <CTAButton active={catbtn2.active} linkTo={catbtn2.linkTo}>
//                         {catbtn2.text}

//                     </CTAButton>

//                 </div>

//             </div>
//             {/* section2 */}
//             <div className='h-fit flex flex-row '>
//                 {/* add gradient */}
//                 <div className='text-center flex flex-col  w-[10%] text-richblack-400 font-inter font-bold'>
//                     <p>1</p>
//                     <p>2</p>
//                     <p>3</p>
//                     <p>4</p>
//                     <p>5</p>
//                     <p>6</p>
//                     <p>7</p>
//                     <p>8</p>
//                     <p>9</p>
//                     <p>10</p>
//                     <p>11</p>

//                 </div>
//                 <div className={`w-[90%] flex flex-col font-bold  font-mono ${codeColor} pr-2`}>
// <TypeAnimation
// sequence={[codeContent,50000, " "]}
// repeat={Infinity}
// omitDeletionAnimation={true}
// style={
//     {
//         whiteSpace:"pre-line",
//         display:"block"
//     }
// }

// />
//                 </div>
//             </div>
//         </div>
//     )
// }

import React from 'react';
import CTAButton from "./Button";
import HighlightText from './HighlightText';
import { FaArrowRightLong } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';

function CodeBlocks({
  position,
  heading,
  subHeading,
  catbtn1,
  catbtn2,
  codeContent,
}) {
  return (
    <div className={`w-11/12 max-w-[1200px] mx-auto flex ${position} gap-10 justify-between items-start my-20`}>
      
      {/* LEFT SIDE - Text and Buttons */}
      <div className='w-[48%] flex flex-col gap-6'>
        {heading}

        <p className='text-richblack-300 font-bold'>
          {subHeading}
        </p>

        <div className='flex gap-6 mt-6'>
          <CTAButton active={catbtn1.active} linkTo={catbtn1.linkTo}>
            <div className='flex gap-2 items-center'>
              {catbtn1.btnText}
              <FaArrowRightLong />
            </div>
          </CTAButton>

          <CTAButton active={catbtn2.active} linkTo={catbtn2.linkTo}>
            {catbtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* RIGHT SIDE - Code Block with Glowing Gradient */}
      <div className="relative w-[48%]">
        {/* Glowing Background Gradient */}
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-[#8A2BE2] via-[#FF8C00] to-[#FFFF00] blur-2xl opacity-20 z-0" />

        {/* Code Block */}
        <div className="relative bg-richblack-800 rounded-md overflow-hidden border border-richblack-600 shadow-md flex z-10">
          
          {/* Line Numbers */}
          <div className="bg-richblack-700 px-4 py-2 text-center text-sm text-richblack-400 font-mono select-none">
            {Array.from({ length: 11 }, (_, i) => (
              <p key={i}>{i + 1}</p>
            ))}
          </div>

          {/* Animated Code */}
          <div className="px-4 py-2 font-mono text-sm leading-relaxed whitespace-pre text-yellow-400 w-full">
            <TypeAnimation
              sequence={[codeContent, 2000]}
              speed={50}
              repeat={Infinity}
              omitDeletionAnimation={true}
              style={{ display: "block", whiteSpace: "pre-line" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeBlocks;
