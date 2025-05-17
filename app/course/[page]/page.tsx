"use server"

import fetchCourses from "@/action/courseAction";
import NotFound from "@/app/not-found";
import AllCourse from "@/components/adminPage/Course/AllCoursePage/AllCourse";
import MainNewCourse from "@/components/adminPage/Course/NewCoursePage/MainNewCourse";

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
    const { page } = await params
    const courses = await fetchCourses();

    return (
        <div className=" w-full h-11/12">
            {(() => {
                const mathCourse = courses.find((course : any) => course.name === page);
                if (mathCourse){
                    return `hello ${page}`
                }else{
                    switch (page) {
                    case "new-course":
                        return <MainNewCourse/>;
                    case "all-course":
                        return <AllCourse/>;
                    default:
                        return <NotFound/>;
                }
                }
            })()}
        </div>
    );
}