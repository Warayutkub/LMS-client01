"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ImageUploadWithPreview from "./ImageUpLoad"
import { useState } from "react";
import TeacherCombobox from "./TeacherCombobox"
import { toast } from "sonner"
import DayCheckBox from "./DaycheckBox"
import TimePick from "./TimePick"

const FormNewCourse = () => {
    const [cover, setCover] = useState<File>()
    const [teacher, setTeacher] = useState<string>()
    const [daySelect, setDaySelect] = useState<string[]>()

    const handleFileFromChild = (file: File) => {
        setCover(file);
    };

    const handleTeacherFromChild: any = (id: string) => {
        setTeacher(id);
    };

    const setDay = (selected: string[]) => {
        setDaySelect(selected)
    };

    const takeToast = (data: string) => {
        toast(data)
    }

    return (
        <div className="w-full h-full  flex p-2">
            <form action="" className="flex flex-row w-full h-full gap-4">
                <div className="w-1/2 h-full ">
                    <ImageUploadWithPreview onFileSelect={handleFileFromChild} />
                </div>
                <div className="w-1/2 h-full flex flex-col justify-start mt-2 px-4">
                    <section className="w-full h-10/12 flex flex-col gap-4">

                        {/* First row */}
                        <div className="w-full h-fit flex flex-col">
                            <h1 className='font-semibold text-2xl'>รายละเอียดคอร์ส</h1>
                            <div className="w-full h-fit flex flex-row gap-6 mt-4">
                                <div className="flex flex-col gap-2 w-1/2">
                                    <Label form="course_name">ชื่อคอร์ส : </Label>
                                    <Input name="course_name" placeholder="course name" required />
                                </div>
                                <div className="flex flex-col gap-2 w-1/2">
                                    <Label form="course_price">ราคาคคอร์ส : </Label>
                                    <Input name="course_price" placeholder="course price" required />
                                </div>
                            </div>
                        </div>

                        {/* Second row */}
                        <div className="w-full h-fit py-2 flex flex-row gap-6">
                            <div className="flex flex-col gap-2 w-1/2">
                                <Label form="course_frequency">จำนวนครั้ง : </Label>
                                <Input name="course_frequency" placeholder="จำนวนครั้ง" required />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2 ">
                                <Label form="course_teacher">ครูผู้สอน : </Label>
                                <TeacherCombobox handleTeacherFromChild={handleTeacherFromChild} />
                            </div>
                        </div>

                        {/* third row */}
                        <div className="w-full h-fit py-2 flex flex-row gap-6">
                            <DayCheckBox onChange={setDay} />
                        </div>

                        {/* Fourth row */}
                        <div className="w-full h-fit py-2 flex flex-row gap-6">
                            <TimePick />
                        </div>

                        <div onClick={() => { takeToast(`${cover} , ${teacher} ,${daySelect}`) }} className="cursor-default">test</div>
                    </section>
                    <Button type="submit" className="text-foreground">บันทึกคอร์ส</Button>
                </div>
            </form>
        </div>
    )
}
export default FormNewCourse