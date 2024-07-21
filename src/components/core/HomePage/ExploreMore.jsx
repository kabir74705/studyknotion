import { useState } from "react"
import HilightText from "./Hilighttext"
import CourseCard from "./CourseCard"


const ExploreMore = () => {
    const HomePageExplore = [
        {
            tag:"Free",
            courses:[
                {
                    heading:"Learn HTMl1",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
                {
                    heading:"Learn HTMl2",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
                {
                    heading:"Learn HTMl3",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
            ]
        },
        {
            tag:"New to coding",
            courses:[
                {
                    heading:"Learn HTMl4",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
                {
                    heading:"Learn HTMl5",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
                {
                    heading:"Learn HTMl6",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
            ]
        },
        {
            tag:"Most popular",
            courses:[
                {
                    heading:"Learn HTMl7",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
                {
                    heading:"Learn HTMl8",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
                {
                    heading:"Learn HTMl9",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
            ]
        },
        {
            tag:"Skill paths",
            courses:[
                {
                    heading:"Learn HTMl10",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
                {
                    heading:"Learn HTMl11",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
                {
                    heading:"Learn HTMl12",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
            ]
        },
        {
            tag:"Career paths",
            courses:[
                {
                    heading:"Learn HTMl13",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
                {
                    heading:"Learn HTMl14",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
                {
                    heading:"Learn HTMl15",
                    description:"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.",
                    level:"Begginer",
                    lessonNumber:6,
                },
            ]
        }
    ]
    
    const tabsName = [ "Free", "New to coding", "Most popular","Skill paths","Career paths"]
        const [currentTab,setCurrentTab] = useState(tabsName[0])
        const [courses,setCourses] = useState(HomePageExplore[0].courses)
       
        const [currentCard,setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)
        const setMyCards = (value)=>{
            setCurrentTab(value);
            let result = HomePageExplore.filter((course)=>course.tag===value)
            setCourses(result[0].courses)
            setCurrentCard(result[0].courses[0].heading)
        }
    return  (
        <div className=" flex flex-col relative">
            <div className="text-4xl font-semibold text-center">
                Unlock The <HilightText text={"Power Of Code"}></HilightText>
            </div>
            <p className="text-richblack-300 text-center text-lg ">Learn To Build Anything You Can Imagine</p>
            <div className="flex bg-richblack-800 rounded-full mb-6 mt-6 border border-yellow-500">
                {tabsName.map((element,index)=>{
                    return <div key={index} className={`text-[16px] ${currentTab===element ? "bg-richblack-900 text-white font-semibold": " text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-white px-7 py-4`} onClick={()=>{setMyCards(element)}}>{element}</div>

                })}

            </div>
            <div className="h-[150px]"></div>
            <div className=" flex gap-10 justify-between items-center w-full absolute top-[210px] right-[100px]">
                {
                    courses.map((element,index)=>{
                       return <CourseCard key={index} cardData={element}
                        currentCard={currentCard} setCurrentCard={setCurrentCard}/>

                    })
                }
               
            </div>

            
        </div>
    
    )
}
export default ExploreMore;