import HilightText from "./Hilighttext";
import CTAButton from "./CTAButton";
const LearningLanguageSection =()=>{
    return(
        <div className="mt-[130px] mb-28">
            <div className="flex flex-col gap-5 items-center" >
                <div className="text-4xl font-semibold text-center">
                    Your swiss knife for 
                    <HilightText text={" learning any language"}/>
                </div>
                <div className="text-center text-slate-600 mx-auto text-base mt-3 font-medium w-[60%]">
                    using spin making learning multiple languages easy . with 20+ languges realistic voiceover , progress tracking , custom schedule and more .
                </div>
                <div className="flex items-center justify-center mt-5">
                    <img className="mr-[-110px]" src="https://my-study-notion.vercel.app/static/media/Know_your_progress.cf3ea1c51544985430d3.png" alt="" />
                    <img src="https://my-study-notion.vercel.app/static/media/Compare_with_others.a849beb7dbec594a4f53.png" alt="" />
                    <img className="ml-[-130px]" src="https://my-study-notion.vercel.app/static/media/Plan_your_lessons.0848277c6ae4d27c3f30.png" alt="" />
                </div>
                <div className="w-fit">
                    <CTAButton active={true} linkto={"/signup"}>
                    <div>Learn More</div></CTAButton>
                </div>

            </div>
        </div>
    )
}
export default LearningLanguageSection;