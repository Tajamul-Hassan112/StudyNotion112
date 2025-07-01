import React from 'react'
import logo1 from "../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../assets/TimeLineLogo/Logo4.svg"
import timeLineImage from "../../assets/Images/TimelineImage.png"


const timeLine = [
    {
        Logo: logo1,
        Heading: "LeaderShip",
        Description: "Fully committed to the success company"
    },
    {
        Logo: logo2,
        Heading: "LeaderShip",
        Description: "Fully committed to the success company"
    },
    {
        Logo: logo3,
        Heading: "LeaderShip",
        Description: "Fully committed to the success company"
    },
    {
        Logo: logo4,
        Heading: "LeaderShip",
        Description: "Fully committed to the success company"
    },

]
function TimeLineSection() {
    return (
        <div>
            <div className='flex flex-row gap-15 items-center'>
                <div className='flex flex-col w-[46%] gap-4'>
                    <div>
                        {
                            timeLine.map((element, index) => {
                                return (
                                    <div className='flex flex-row gap-4' key={index}>
                                        <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                            <img src={element.Logo} alt="" />
                                        </div>
                                        <div>
                                            <h2 className='font-semibold text-[18px]'>{element.Heading}</h2>
                                            <p className='text-base '>{element.Description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                {/* right side */}
                <div className='relative shadow-blue-200'>
                    <img src={timeLineImage} alt="" className='rounded-md shadow-white h-fit' />
                    <div className='absolute left-[50%] translate-x-[-50%] translate-y-[-50%] bg-caribbeangreen-700 text-white flex flex-row uppercase  py-5'>
                        <div className='flex flex-row gap-5 items-center  border-r border-caribbeangreen-200 px-7'>
                            <p className='text-3xl font-bold'>10</p>
                            <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>

                        </div>
                        <div className='flex flex-row items-center gap-5 px-7 '>
                            <p className='text-3xl font-bold'>250</p>
                            <p className='text-caribbeangreen-300 text-sm'>Type Of Courses</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TimeLineSection