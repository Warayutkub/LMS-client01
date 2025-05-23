import fetchCourses from "@/action/courseAction"
import CardSubject from "@/components/Home/CardSubjectHome";
import Link from "next/link";

const DataCourse = async () => {
    const courses = await fetchCourses();

    return (
        <div className="w-full h-full flex flex-col justify-start overflow-y-auto">
            <h1 className="sticky left-0 top-2 flex flex-col z-50 text-2xl w-fit self-start h-1/20 bg-primary text-primary-foreground p-5 rounded-tr-full rounded-br-full justify-center items-center shadow-sm  cursor-default transition-all duration-200">
                คอร์สทั้งหมด :
            </h1>
            <div className="w-full h-fit flex flex-row flex-wrap gap-5 justify-center items-start py-3">
                {
                    (courses != null) ?
                        (courses.length == 0) ?
                            <div className="text-2xl">ไม่มีคอร์ส</div>
                            :
                            courses.map((item: any, index: number) => (
                                <Link key={index} href={`${process.env.NEXT_PUBLIC_COURSE_PATH}/${item.id}`} className="w-1/5 h-fit ">
                                    <CardSubject img={item.image} name={item.name} student={item.amountStudent} />
                                </Link>
                            ))
                        : <div className="w-full h-full flex items-center justify-center">can't connect database</div>
                }
            </div>
        </div>
    )
}
export default DataCourse