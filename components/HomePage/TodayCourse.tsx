
import CardSubject from "./CardSubject"
import courseFetch from "@/action/courseAction"

const TodayCourse = async () => {
    const courses = await courseFetch();
    return (
        <div className="w-full h-full flex flex-row flex-wrap gap-2 justify-center overflow-x-hidden overflow-y-scroll">
            <h1 className="sticky top-0 left-0 text-2xl w-full h-1/20">คอร์สที่มีวันนี้ : </h1>
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