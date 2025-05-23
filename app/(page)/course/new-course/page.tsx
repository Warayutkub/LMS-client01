"use server"

import FormNewCourse from "@/components/Course/NewCoursePage/FormNewCourse"

const MainNewCourse = () => {
    return (
        <div className="w-full h-full flex flex-col ">
            <h1 className="group self-center h-fit p-3 flex justify-center mr-10 text-2xl font-semibold cursor-default relative">
                <span className="underline-slide">เพิ่มคอร์สใหม่</span>
            </h1>
            <FormNewCourse />
        </div>
    )
}
export default MainNewCourse