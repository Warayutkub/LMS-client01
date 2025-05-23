import Image from "next/image"
import Link from "next/link"
import { StepBack } from 'lucide-react'
import FromINFOCOURSE from "./FromINFOCOURSE"

type courseType = {
  id: string,
  name: string,
  price: number,
  frequency: number,
  amountStudent: number,
  day_learn: any[],
  image: string,
  enrollments: any[],
  teachers: any[],
  transactions: any[],
  createDate: string,
  recentUpdate: string
}

const Info_course = ({ course }: { course: courseType }) => {
  return (
    <div className="w-full h-[92%] relative flex flex-col justify-start items-center overflow-hidden overflow-y-auto">
      
      {/* ปุ่มกลับ */}
      <div className="group absolute top-4 left-0 z-50">
        <Link
          href={`${process.env.NEXT_PUBLIC_COURSE_PATH}/all-course`}
          className="flex items-center text-xl bg-black text-primary-foreground px-5 py-3 rounded-tr-full rounded-br-full shadow-sm hover:pl-6 transition-all duration-200"
        >
          <StepBack className="hidden group-hover:inline transition-all duration-200" />
          กลับ
        </Link>
      </div>

      {/* ภาพ course */}
      <section className="w-full flex justify-center items-center py-8 ">
        <div className="relative w-1/2 aspect-video rounded-md overflow-hidden shadow-lg transition-all duration-200">
          <Image
            alt={course.name}
            src={course.image}
            fill
            className="object-fill"
            priority
          />
        </div>
      </section>

      {/* รายละเอียดคอร์ส */}
      <section className="w-full h-full px-8 py-6 flex justify-center">
        <FromINFOCOURSE course={course}/>
      </section>

    </div>
  )
}

export default Info_course
