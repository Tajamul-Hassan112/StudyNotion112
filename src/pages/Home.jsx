import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import HighlightText from '../components/HomePage/HighlightText';
import CTAButton from "../components/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/HomePage/CodeBlocks';
import TimeLineSection from '../components/HomePage/TimeLineSection';
import LearningLanguageSection from '../components/HomePage/LearningLanguageSection';
import InstructorSection from '../components/HomePage/InstructorSection';
import Footer from '../components/common/Footer';
import ExploreMore from '../components/HomePage/ExploreMore';
function Home() {
  return (
    <div>
      {/* section 1 */}
      <section className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent'>
        <div>
          <Link path="/signup">
            <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-300 transition-all duration-300 hover:scale-95 shadow-md '>
              <div className='flex flex-row justify-center items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 shadow-md'>
                <p>  Became an Instructor</p>
                <FaArrowRightLong />
              </div>

            </div>
          </Link>
          <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your Future With
            <HighlightText text={" Coding Skills"} />
          </div>
          <div>

          </div>


          <div className='mt-4 w-[90%] text-center font-bold text-lg text-blue-50 '>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
          </div>
          <div className='flex mt-8 flex-row gap-7 items-center justify-center shadow-md'>
            <CTAButton active={true} linkTo={"/signup"}>
              Learn More
            </CTAButton>
            <CTAButton active={false} linkTo={"/login"}>
              Book a Demo
            </CTAButton>
          </div>
        </div>
        <div className='shadow-blue-200 mt-5 mx-3 my-14'>
          <video muted loop autoPlay>
            <source src={Banner} type='video/mp4' />
          </video>
        </div>
      </section>

      <div className='flex justify-center items-center'>
        <CodeBlocks
          position={"lg:flex-row "}
          heading={
            <div className='text-white'>
              Unlock your
              <HighlightText text={" coding potential "} />
              with our online courses"
            </div>
          }


          subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
          catbtn1={
            {
              btnText: "try it yourself",
              linkTo: "/signup",
              active: true,
            }
          }
          catbtn2={
            {
              btnText: "learn more",
              linkTo: "/login",
              active: false,
            }
          }
          codeContent={
            `<<!DOCTYPE html>
<html>
<head><title>Example</title>
</head>
<body>
<h1><ahref="/">Header</a>
</h1>
<nav><ahref="one/`
          }



        />
      </div>
      <div className='flex justify-center items-center'>
        <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className='text-white'>
              Unlock your
              <HighlightText text={" coding potential "} />
              with our online courses"
            </div>
          }


          subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
          catbtn1={
            {
              btnText: "try it yourself",
              linkTo: "/signup",
              active: true,
            }
          }
          catbtn2={
            {
              btnText: "learn more",
              linkTo: "/login",
              active: false,
            }
          }
          codeContent={
            `<<!DOCTYPE html>
<html>
<head><title>Example</title>
</head>
<body>
<h1><ahref="/">Header</a>
</h1>
<nav><ahref="one/`
          }



        />
        
      </div>
      <div>
        <ExploreMore />
      </div>
      {/* section 2 */}
      <div className='bg-pure-greys-5  text-richblack-700'>
        <div className='homepage_bg h-[233px]' >
          <div className='w-11/12 max-w-maxContent flex  flex-col items-center gap-5 mx-auto justify-between'>
            <div className='h-[px]'></div>

            <div className='flex flex-row gap-7 mt-24  text-white '>
              <CTAButton active={true} linkTo={"/signup"}>
                <div className='flex items-center gap-4'>
                  Explore Full Catalog
                  <FaArrowRightLong />

                </div>
              </CTAButton>
              <CTAButton active={false} linkTo={"/signup"}>
                <div>
                  Learn more
                </div>
              </CTAButton>


            </div>

          </div>

        </div>


        <div
          className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
          <div className='flex flex-row justify-between items-center gap-5 mt-[100px] mb-10 '>
            <div className='text-4xl font-semibold w-[47%] '>
              Get the Skills you need for a
              <HighlightText text={" Job that is in demand "} />

            </div>
            <div className='flex flex-col  font-semibold  items-start gap-4 w-[47%]'>
              <div className='text-[17px]'>
                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
              </div>
              <div>
                <CTAButton active={true} linkTo={"/signup"}
                >
                  Learn more
                </CTAButton>
              </div>

            </div>

          </div>
          <TimeLineSection />
          <LearningLanguageSection />


        </div>


      </div>
      {/* section 3 */}
      <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-6 bg-richblack-900 text-white'>
        <InstructorSection />
        <h2 className='text-center text-4xl font-semibold mt-10'>Review from other learners</h2>

        {/* Review slider code */}
      </div>

      {/* footer */}
      <Footer />

    </div>
  )
}

export default Home