"use client"
import fetchTeacher from "@/action/teacherAction"
import { TeacherComboxcompo } from "./TeacherComboxcompo"
import { useEffect, useState } from "react";
import axios from "axios";


export type TeacherType = {
  id: string;
  name: string;
}

const TeacherCombobox = ({handleTeacherFromChild} : {handleTeacherFromChild : (id : string) => void}) => {
  const [data, setData] = useState<TeacherType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/teacher/combobox");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <TeacherComboxcompo teacher={data} handleTeacherFromChild={handleTeacherFromChild} />
    </div>
  )
}
export default TeacherCombobox