import CardSubject from "./CardSubjectHome"
import courseFetch from "@/action/courseAction"

const TodayCourse = async () => {
    const courses = await courseFetch();
    return (
        <div className="w-full h-full flex flex-row flex-wrap gap-2 justify-center overflow-x-hidden overflow-y-scroll">
            {
                (courses != null) ?
                    (courses.length == 0) ?
                        <div className="text-2xl">ไม่มีคอร์ส</div>
                        :
                        courses.map((item: any, index: number) => (
                            <CardSubject key={index} img={item.image} name={item.name} student={item.amountStudent} />
                        ))
                    : <div className="w-full h-full flex items-center justify-center">can't connect database</div>
            }
        </div>
    )
}
export default TodayCourse