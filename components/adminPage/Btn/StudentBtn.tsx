"use server"

import BtnSlideBtn from "@/components/BtnSlide"

const links = [
    {
        title: "นักเรียนใหม่",
        href: `${process.env.NEXT_PUBLIC_AdminPath}/new-student`
    },
    {
        title: "นักเรียนทั้งหมด",
        href: `${process.env.NEXT_PUBLIC_AdminPath}/all-student`
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