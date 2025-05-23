"use server"

import BtnSlideBtn from "@/components/BtnSlide"

const links = [
    {
        title: "นักเรียนใหม่",
        href: `${process.env.NEXT_PUBLIC_STUDENT_PATH}/new-student`
    },
    {
        title: "นักเรียนทั้งหมด",
        href: `${process.env.NEXT_PUBLIC_STUDENT_PATH}/all-student`
    },
];
const StudentBtn = () => {
  return (
    <div>
        <BtnSlideBtn title="นักเรียน" SubBtn={links}/>
    </div>
  )
}
export default StudentBtn