import React from 'react'
import { useState } from 'react';
import { HomePageExplore } from "../../data/homepage-explore"
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';
const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
]
function ExploreMore() {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);

    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)


    const setMyCards = (value) => {
  setCurrentTab(value);
  const result = HomePageExplore.filter((course) => course.tag === value);
  if (result.length > 0) {
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  }
}

    return (
        <div>
            <div className='text-4xl  text-white font-semibold text-center'>
                Unlock the
                <HighlightText text={" Power of code"} />
            </div>
            <p className='text-sm text-center text-richblack-200 py-2'>
                Learn to build anything you can imagine
            </p>
            {/* tabs */}
            <div className='flex flex-row mx-auto items-center bg-richblack-800 rounded-full mb-5 border-2 border-richblack-300 w-[50%]'>
                {
                    tabsName.map((item, index) => {
                        return (
                            <div key={index} className={`text-[16px] flex flex-row gap-3 items-center ${currentTab === item ? "bg-richblack-900 font-medium text-richblack-5" : "text-richblack-200"} rounded-full transition-all duration-300 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-4 py-2`}
                                onClick={() => setMyCards(item)}
                            >
                                {
                                    item
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className='lg:h-[150px]'></div>
            {/* cards */}

            <div className='flex flex-wrap gap-6 justify-center w-full px-4 relative top-14'>

                {
                    courses.map((course, index) => {
                        return (
                            <CourseCard
                                cardData={course}
                                currentCard={currentCard}
                                setCurrentCard={setCurrentCard}
                                key={index}


                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ExploreMore