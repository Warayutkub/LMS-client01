"use server"
import DataCourse from "./DataCourse"

const AllCourse = () => {
  return (
    <div className=" w-full h-full">
      <div className="relative w-full h-full flex flex-row flex-wrap gap-2 justify-center pt-2 overflow-hidden ">
        
        <DataCourse/>
      </div>
    </div>
  )
}
export default AllCourse