import { Button } from "../ui/button"

type cardRowType = {
    nickname : string,
    name : string,
    school : string,
    parent : string
    parent_phone : string
}

const CardRow = (props : cardRowType) => {
  return (
    <div className="w-11/12 h-fit py-4 justify-around rounded-md shadow-md flex flex-row items-center gap-5 bg-accent/50 border-b-2 border-secondary-foreground/20 px-5">
        <span className="min-w-2/14">ชื่อ :  {props.name}</span>
        <span className="min-w-2/14">ชื่อเล่น :  {props.nickname}</span>
        <span className="min-w-2/14">โรงเรียน :  {props.school}</span>
        <span className="min-w-2/14">ผู้ปกครอง :  {props.parent}</span>
        <span className="min-w-2/14">เบอร์โทรผู้ปกครอง :  {props.parent_phone}</span>
        <Button variant="default" className="font-semibold hover:scale-102 transition-transform duration-200 cursor-pointer"> เพิ่มเติ่ม</Button>
    </div>
  )
}
export default CardRow