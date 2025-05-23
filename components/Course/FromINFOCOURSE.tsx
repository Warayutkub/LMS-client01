import { Label } from "../ui/label"

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


const FromINFOCOURSE = ({ course }: { course: courseType }) => {
    return (
        <div className="w-1/2 h-full  py-5 flex flex-col justify-start gap-2">
            <span className="text-2xl w-100">ชื่อ : {course.name}</span>
            <span className="text-2xl w-100">ราคา : {course.price} บาท</span>
            <span className="text-2xl w-100">จำนวนครั้ง : {course.frequency} ครั้ง</span>
            <span className="text-2xl w-100">จำนวนนักเรียนปัจจุบัน : {course.amountStudent} คน</span>
            <span>
                วันเรียน : {course.day_learn.map((item: any, index: number) => `${index+1} : ${item["day_name"]} `)}
            </span>

        </div>
    )
}
export default FromINFOCOURSE