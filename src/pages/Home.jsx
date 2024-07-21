import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HilightText from "../components/core/HomePage/Hilighttext";
import CTAButton from "../components/core/HomePage/CTAButton";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";
const Home= ()=> {
    return (
        <div>
        <div className="relative mx-auto flex max-w-maxContent flex-col w-11/12 items-center justify-between text-white">
             <Link to={"/signup"}>
                 <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
                     <div className="group-hover:bg-richblack-900 flex items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200">
                         <p className="">Become An Instructor</p>
                         <FaArrowRight />
                     </div>
                 </div>
             </Link>
             <div className="text-center font-semibold text-4xl mt-7">
                Empower Your Growth With 
                <HilightText text={"Coding Skills"}/>
             </div>
             <div className="mt-4  w-[90%] text-center text-lg font-bold text-richblack-300">
             With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
             </div>
             <div className="flex gap-7 mt-8">
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                    Book A Demo
                </CTAButton>
             </div>
             <div className="shadow-blue-200 mx-3 my-12 w-[1000px]">
                <video muted loop autoPlay > <source src="https://videos.pexels.com/video-files/3126361/3126361-uhd_2560_1440_25fps.mp4"/> </video>
             </div>
             <div>
                <CodeBlocks position={"lg:flex"} heading={<div className="text-4xl font-semibold">Unlock your
                    <HilightText text={"coding potential "}/>
                    with our online courses
                </div>} subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={{
                    btnText:"try it yourself",
                    linkto:"/signup",
                    active:true
                }}
                ctabtn2={{
                    btnText:"learn more",
                    linkto:"/login",
                    active:false
                }}
                codeblock={
                   "DOCTYPE html\n<html>rvyy\n<head>kagtc\n<title>ebu6ueubn6\nmygcf k lcfgn kgbft jilu7ynt\n<title>6nuebu\n<head>kgbuyaec\n<html>\njfyubcg4\nuctrbkqc"  
                }
                codecolor={"gold"}
                
                />
             </div>
             <div>
                <CodeBlocks position={"lg:flex-row-reverse"} heading={<div className="text-4xl font-semibold">Start coding 
                    <HilightText text={"in seconds "}/>

                </div>} subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                }
                ctabtn1={{
                    btnText:"try it yourself",
                    linkto:"/signup",
                    active:true
                }}
                ctabtn2={{
                    btnText:"learn more",
                    linkto:"/login",
                    active:false
                }}
                codeblock={
                    "DOCTYPE html\n<html>rvyy\n<head>kagtc\n<title>ebu6ueubn6\nmygcf k lcfgn kgbft jilu7ynt\n<title>6nuebu\n<head>kgbuyaec\n<html>\nu4tfg\nku4tqj5"    
                }
                codecolor={"pink"}
                
                />

             </div>
             <ExploreMore />
        </div>
        <div className="bg-slate-100 text-richblack-700">
            <div className="h-[300px] bg-pink-50">
                <div className="w-[11/12] max-w-maxContent flex items-center gap-5 mx-auto flex-col justify-center">
                <div className="h-[140px]"></div>
                    <div className="flex gap-7 text-white">
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className="flex items-center gap-2">
                                Explore Full catalog 
                                <FaArrowRight></FaArrowRight>
                            </div>
                        </CTAButton>
                        <CTAButton active={false} linkto={"/signup"}>
                            <div>Learn More</div>
                        </CTAButton>
                    </div>
                </div>

            </div>
            <div className="w-11/12 mx-auto max-w-maxContent flex flex-col justify-between gap-7 items-center ">
                <div className="flex gap-5 mt-[90px] mb-10 ml-[170px]">
                    <div className="text-4xl font-semibold w-[45%]">
                        Get the skills you need for a <HilightText text={" job that is in demand"}></HilightText>
                    </div>
                    <div className="flex flex-col gap-10 w-[40%] items-start">
                        <p className="text-[16px] font-semibold">
                        The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </p>
                        <CTAButton active={true} linkto={"/signup"}>
                            Learn More
                        </CTAButton>
                    </div>

                </div>
                <div className="w-[70%] flex flex-col items-center">
                    
                <TimelineSection/>
                <LearningLanguageSection/> 
                </div>
                
            </div>

           
        </div>
        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection/>
        <h2 className="text-center font-semibold text-4xl mt-10">Review From Other Learners</h2>
        <ReviewSlider></ReviewSlider>
                
        </div>
      </div>
    );
}
export default Home;
