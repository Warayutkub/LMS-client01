"use server"

import TodayCourse from "./TodayCourse"

const MainPage = () => {
  

  return (
    <div className="w-full h-full p-2 felx flex-col">
      <div className="relative w-full h-full flex flex-row flex-wrap gap-2 justify-center pt-2 ">
        
        
        <TodayCourse/>
      </div>
    </div>
  )
}
export default MainPage