"use server"

import BtnSlideBtn from "@/components/BtnSlide"

const links = [
    {
        title: "เพิ่มคอร์สใหม่",
        href: `${process.env.NEXT_PUBLIC_COURSE_PATH}/new-course`
    },
    {
        title: "คอร์สทั้งหมด",
        href: `${process.env.NEXT_PUBLIC_COURSE_PATH}/all-course`
    },
];

const CourseBtn = () => {
    return (
        <div>
            <BtnSlideBtn title="คอร์ส" SubBtn={links} />
        </div>
    )
}
export default CourseBtn