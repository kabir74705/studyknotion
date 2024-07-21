import HilightText from "./Hilighttext";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";
const InstructorSection = ()=> {
return(
    <div className="mt-16">
        <div className="flex gap-20 items-center">
            <div className="w-[50%]">
                <img src="https://my-study-notion.vercel.app/static/media/Instructor.8b4c4f204053f0dfe844.png" alt="" />
            </div>
            <div className="w-[50%] flex flex-col gap-10">
                <div className="text-4xl font-semibold">
                    Become An <HilightText text={"Instructor"}></HilightText> 
                </div>
                <p className="text-richblack-300 font-medium text-[16px] w-[80%] ">
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                </p>
               <div className="w-fit">
               <CTAButton active={true} linkto={"/signup"}>
                    <div className="flex gap-2 items-center">
                        Start Learning Today <FaArrowRight></FaArrowRight> 
                    </div>
                </CTAButton>
               </div>

            </div>

        </div>
    </div>
)
    
}
export default InstructorSection;