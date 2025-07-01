
import React from 'react';

function CourseCard({ cardData, currentCard, setCurrentCard }) {
  const isActive = currentCard === cardData.heading;

  return (
    <div className='flex justify-center items-center'>
      <div
        className={`w-[280px] min-h-[260px] rounded-md shadow-md transition-all duration-300 p-6 cursor-pointer
        ${isActive ? "bg-white border-b-[6px] border-yellow-50" : "bg-richblack-800"}`}
        onClick={() => setCurrentCard(cardData.heading)}
      >
        {/* Heading */}
        <h1 className={`text-lg font-semibold ${isActive ? "text-richblack-800" : "text-white"}`}>
          {cardData.heading}
        </h1>

        {/* Description */}
        <p className={`text-sm mt-3 ${isActive ? "text-richblack-500" : "text-richblack-400"}`}>
          {cardData.description}
        </p>

        {/* Divider */}
        <div className='border-b border-dashed my-6 border-richblack-300'></div>

        {/* Level + Lessons */}
        <div className={`flex justify-between text-sm ${isActive ? "text-richblack-500" : "text-richblack-400"}`}>
          <p>{cardData.level}</p>
          <p>{cardData.lessionNumber} Lessons</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
