"use server"
import Image from "next/image"
import { Separator } from "../ui/separator"
import sk_logo from "@/image/sk_logo.svg"
import StudentBtn from "../Btns/StudentBtn"
import Link from "next/link"
import CourseBtn from "../Btns/CourseBtn"
import Transaction from "../Btns/TransactionBtn"
import InceptionBtn from "../Btns/InceptionBtn"
import HomeBtn from "../Btns/HomeBtn"
import PayBtn from "../Btns/PayBtn"
import TeacherBtn from "../Btns/TeacherBtn"

const SideBar = () => {
  return (
    <div className="bg-background border h-screen">

      <Link href={"/"} className="w-full h-1/12 gap-2 flex items-center justify-center cursor-default ">
        <Image src={sk_logo} alt="Logo" className="w-15 h-auto " />
        <h1 className="font-extrabold text-4xl ">LMS</h1>
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