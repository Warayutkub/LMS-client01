"use server"

import FormNewCourse from "./FormNewCourse"

const MainNewCourse = () => {
    return (
        <div className="w-full h-full flex flex-col ">
            <h1 className="w-full h-fit p-3 flex justify-center bg-primary/60 mr-10 text-2xl font-semibold cursor-default">เพิ่มคอร์สใหม่</h1>
            <FormNewCourse/>
        </div>
    )
}
export default MainNewCourse