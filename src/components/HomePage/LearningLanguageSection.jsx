import React from 'react'
import HighlightText from './HighlightText'
import know from "../../assets/Images/Know_your_progress.png"
import  compare from "../../assets/Images/Compare_with_others.png"
import  lesson from "../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button"
function LearningLanguageSection() {
  return (
    <div className='mt-[150px] mb-32'>

      <div className='flex flex-col justify-center gap-5 items-center'>
        {/* heading */}
        <div className='text-4xl font-semibold text-center'>
          Your Swiss Knife for <HighlightText text={"learning any language"}/>
        </div>
        {/* paragraph */}
        <div className='text-center text-richblack-600 mx-auto text-base w-[65%]'>
          Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>
        {/* images */}
        <div className='flex flex-row items-center justify-center  mt-5'>


<img src={know} alt="know-progess"  className='object-contain -mr-32'/>
<img src={compare} alt="compare_others" />
<img src={lesson} alt="lessons" className='-ml-32'/>
        </div>
        {/* button */}
        <div className='w-fit'>
          <CTAButton active={true} linkTo={"/signup"} >
          <div >
Learn more
          </div>
            
          </CTAButton>
        </div>

      </div>
    </div>
  )
}

export default LearningLanguageSection