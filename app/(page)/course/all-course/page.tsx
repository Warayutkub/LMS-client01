"use server"

import DataCourse from "@/components/Course/DataCourse"

const AllCourse = () => {
  return (
    <div className="relative w-full h-11/12 flex flex-row flex-wrap gap-2 justify-center overflow-hidden ">
      <DataCourse />
    </div>
  )
}
export default AllCourse