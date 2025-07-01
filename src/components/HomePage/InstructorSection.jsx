import React from 'react'
import Instructor from "../../assets/Images/Instructor.png"
import CTAButton from "../HomePage/Button"
import HighlightText from './HighlightText'
import { FaArrowRightLong } from "react-icons/fa6";
function InstructorSection() {
    return (
        <div>
            {/* image section */}
            <div className='flex flex-row mt-11 gap-6 items-center'>
                <div className='w-[50%]'>
                    <img src={Instructor} alt="instructor" />
                </div>
                <div className='flex flex-col justify-center w-[50%] gap-3'>
                    <div className='flex flex-col w-fit text-3xl  justify-center font-semibold'>
                        <h2>Become an</h2>
                        <HighlightText text={"Instructor"} />
                    </div>
                    <p className='text-richblack-300 text-sm w-[60%]'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love</p>
                   <div className="w-fit">
                     <CTAButton active={true} linkTo={"/signup"}>
                        <div className='flex flex-row justify-center items-center gap-3'>
                            Start Learning Today
                            <FaArrowRightLong />
                        </div>

                    </CTAButton>
                   </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default InstructorSection