"use server";

import fetchStudent from "@/action/studentAction";
import CardRow from "./cardRow";
import { JSX } from "react";

const DataStd = async (): Promise<JSX.Element> => {
  const students = await fetchStudent();

  if (!students) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        can't connect database
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-row flex-wrap gap-3 justify-start overflow-y-auto">
      <h1 className="sticky flex flex-col top-2 text-2xl w-fit self-start h-1/20 bg-primary text-primary-foreground p-5 rounded-tr-full rounded-br-full justify-center items-center shadow-sm transition-all duration-200">
        นักเรียนทั้งหมด :
      </h1>
      <div className="w-full h-fit flex flex-col gap-4 items-center py-3">
        {students.length === 0 ? (
          <div className="text-2xl">ไม่มีนักเรียน</div>
        ) : (
          students.map((item: any) => (
            <CardRow
              key={item.id ?? item.name} // ถ้า id ไม่มี ใช้ชื่อแทน
              nickname={item.nickName}
              name={item.name}
              school={item.school}
              parent_phone={item.parent_phone}
              parent={item.parent_name}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DataStd;
