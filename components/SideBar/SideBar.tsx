"use server"
import Image from "next/image"
import { Separator } from "../ui/separator"
import sk_logo from "@/image/sk_logo.svg"
import StudentBtn from "../adminPage/Btn/StudentBtn"
import Link from "next/link"
import CourseBtn from "../adminPage/Btn/CourseBtn"
import Transaction from "../adminPage/Btn/TransactionBtn"
import InceptionBtn from "../adminPage/Btn/InceptionBtn"
import HomeBtn from "../adminPage/Btn/HomeBtn"
import PayBtn from "../adminPage/Btn/PayBtn"
import TeacherBtn from "../adminPage/Btn/TeacherBtn"

const SideBar = () => {
  return (
    <div className="bg-background border h-screen">

      <Link href={"/"} className="w-full h-1/12 flex items-center justify-center cursor-default ">
        <Image src={sk_logo} alt="Logo" className="w-20 h-auto " />
        <h1 className="font-bold text-4xl font-itim ">SK Tutor</h1>
      </Link >

      <Separator className="shadow-sm shadow-secondary" />

      <div className="mt-10 w-full h-10/12">
        <div className="flex flex-col w-full ">
          <HomeBtn/>
          <InceptionBtn />
          <PayBtn/>
          <Transaction />
        </div>

        <Separator />

        <div className="flex flex-col justify-center">
          <StudentBtn />
          <CourseBtn />
          <TeacherBtn/>
        </div>
      </div>
    </div>
  )
}
export default SideBar