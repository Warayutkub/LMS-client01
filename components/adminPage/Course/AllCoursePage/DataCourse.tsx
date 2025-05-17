import fetchCourses from "@/action/courseAction"
import CardSubject from "@/components/HomePage/CardSubject";
import Link from "next/link";

const DataStd = async () => {
    const courses = await fetchCourses();

    return (
        <div className="p-1 w-full h-full flex flex-row flex-wrap gap-3 justify-center overflow-x-hidden overflow-y-scroll">
            <h1 className="sticky top-0 left-0 text-2xl w-full h-1/20 z-50">คอร์สทั้งหมด : </h1>
            {
                (courses != null) ?
                    (courses.length == 0) ?
                        <div className="text-2xl">ไม่มีคอร์ส</div>
                        :
                        courses.map((item: any, index: number) => (
                            <Link key={index}  href={`${process.env.NEXT_PUBLIC_COURSE_PATH}/${item.name}`} className="w-1/5 h-fit ">
                                <CardSubject img={item.image} name={item.name} student={item.amountStudent} />
                            </Link>
                        ))
                    : <div className="w-full h-full flex items-center justify-center">can't connect database</div>
            }
        </div>
    )
}
export default DataStd