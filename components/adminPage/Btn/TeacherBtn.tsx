import BtnSlideBtn from "@/components/BtnSlide"

const links = [
    {
        title: "ครูใหม่",
        href: `${process.env.NEXT_PUBLIC_AdminPath}/new-teacher`
    },
    {
        title: "ครูทั้งหมด",
        href: `${process.env.NEXT_PUBLIC_AdminPath}/all-teacher`
    },
]

const TeacherBtn = () => {
  return (
    <BtnSlideBtn title="ครู" SubBtn={links}/>
  )
}
export default TeacherBtn