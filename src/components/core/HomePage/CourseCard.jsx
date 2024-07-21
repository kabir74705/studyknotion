import { FaPerson } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
const CourseCard = ({cardData,currentCard,setCurrentCard})=>{
    return(
        <div className={`${cardData.heading===currentCard?"bg-white text-black shadow-2xl shadow-r shadow-red-300":"bg-richblack-800"} p-8 h-[250px]`} onClick={()=>{setCurrentCard(cardData.heading)}}>
            <div className="font-bold">{cardData.heading}</div>
            <p className={` ${cardData.heading===currentCard?"text-richblack-900":"text-slate-500" } text-xs  mt-6`}>{cardData.description}</p>
            <div className="flex gap-11 mt-14  border-top">
                <div className={`${cardData.heading===currentCard?" text-blue-900":"text-slate-500"} flex gap-2 font-semibold`}>
                <FaPerson></FaPerson> Beginner
                </div>
                <div className={`${cardData.heading===currentCard?" text-blue-900":"text-slate-500"} flex gap-2 font-semibold`}>
                <FaLaptop></FaLaptop> Lessons
                </div>
            </div>
        </div>
    )
}
export default CourseCard;