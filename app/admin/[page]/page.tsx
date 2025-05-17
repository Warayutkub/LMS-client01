"use server"

import NotFound from "@/app/not-found";
import AllCourse from "@/components/adminPage/Course/AllCoursePage/AllCourse";
import AllStudent from "@/components/adminPage/AllStudentPage/AllStudent";
import MainNewCourse from "@/components/adminPage/Course/NewCoursePage/MainNewCourse";

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
    const { page } = await params

    return (
        <div className=" w-full h-11/12">
            {(() => {
                switch (page) {
                    case "inception":
                        return <>hello {page}</>;
                    case "pay":
                        return <>hello {page}</>;
                    case "transaction":
                        return <>hello {page}</>;
                    case "new-student":
                        return <>hello {page}</>;
                    case "all-student":
                        return <AllStudent/>;
                    case "new-course":
                        return <MainNewCourse/>;
                    case "all-course":
                        return <AllCourse/>;
                    case "new-teacher":
                        return <>hello {page}</>;
                    case "all-teacher":
                        return <>hello {page}</>;
                    case "Math":
                        return <div>Hello math</div>
                    default:
                        return <NotFound/>;
                }
            })()}
        </div>
    );
}