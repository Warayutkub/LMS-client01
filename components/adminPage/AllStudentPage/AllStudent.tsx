"use server"
import DataStd from "./DataStd"

const AllStudent = () => {
  return (
    <div className="w-full h-full p-2 felx flex-col">
      <div className="relative w-full h-full flex flex-row flex-wrap gap-2 justify-center pt-2 ">
        <DataStd/>
      </div>
    </div>
  )
}
export default AllStudent