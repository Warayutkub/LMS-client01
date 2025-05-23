"use server"
import fetchCourses from "@/action/courseAction"
import NotFound from "@/app/not-found";
import Info_course from "@/components/Course/Info_course";

const page = async ({ params }: { params: Promise<{ page: string }> }) => {
    const { page } = await params
    const courses = await fetchCourses();

    const match = courses.find((course: any) => (String(course.id)) === page);
    
    if(match){
        return <Info_course course={match}/>
    }else{
        return <NotFound/>
    }
}
export default page