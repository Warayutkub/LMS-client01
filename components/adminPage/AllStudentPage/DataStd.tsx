import fetchStudent from "@/action/studentAction";
import CardSubject from "@/components/HomePage/CardSubject";

const DataStd = async () => {
    const courses = await fetchStudent();

    return (
        <div className="w-full h-full flex flex-row flex-wrap gap-3 justify-center overflow-x-hidden overflow-y-scroll">
            <h1 className="sticky top-0 left-0 text-2xl w-full h-1/20">นักเรียนทั้งหมด : </h1>
            {
                (courses != null) ?
                    (courses.length == 0) ?
                        <div className="text-2xl">ไม่มีนักเรียน</div>
                        :
                        courses.map((item: any, index: number) => (
                            <CardSubject key={index} img={item.name} name={item.nickName} student={item.name} />
                        ))
                    : <div className="w-full h-full flex items-center justify-center">can't connect database</div>
            }
        </div>
    )
}
export default DataStd