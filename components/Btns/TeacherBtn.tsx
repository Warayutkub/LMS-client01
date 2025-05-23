import BtnSlideBtn from "@/components/BtnSlide"

const links = [
    {
        title: "ครูใหม่",
        href: `${process.env.NEXT_PUBLIC_TEACHER_PATH}/new-teacher`
    },
    {
        title: "ครูทั้งหมด",
        href: `${process.env.NEXT_PUBLIC_TEACHER_PATH}/all-teacher`
    },
]

const TeacherBtn = () => {
  return (
    <BtnSlideBtn title="ครู" SubBtn={links}/>
  )
}
export default TeacherBtn