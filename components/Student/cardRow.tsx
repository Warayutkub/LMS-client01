import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

type cardRowType = {
  nickname: string,
  name: string,
  school: string,
  parent: string
  parent_phone: string
}

const CardRow = (props: cardRowType) => {
  return (
    <div className="w-11/12 h-fit py-4 justify-around rounded-md shadow-md flex flex-row items-center gap-5 bg-accent/50 border-b-2 border-secondary-foreground/20 px-5">
      <span className="min-w-2/14">ชื่อ :  {props.name}</span>
      <span className="min-w-2/14">ชื่อเล่น :  {props.nickname}</span>
      <span className="min-w-2/14">โรงเรียน :  {props.school}</span>
      <span className="min-w-2/14">ผู้ปกครอง :  {props.parent}</span>
      <span className="min-w-2/14">เบอร์โทรผู้ปกครอง :  {props.parent_phone}</span>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="font-semibold hover:scale-102 transition-transform duration-200 cursor-pointer"> เพิ่มเติ่ม</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex justify-center text-2xl py-4">{props.nickname}</DialogTitle>
            <DialogDescription>
              รายละเอียดบางส่วนของน้อง {props.nickname}
            </DialogDescription>
          </DialogHeader>
          <form action="">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-5 items-center gap-4">
                <Label htmlFor="name" className="text-right col-span-2">
                  ชื่อจริง
                </Label>
                <span className="w-full col-span-3 py-1 pl-3 border shadow-sm rounded-md ">{props.name}</span>
              </div>
              <div className="grid grid-cols-5 items-center gap-4">
                <Label htmlFor="username" className="text-right col-span-2">
                  โรงเรียน
                </Label>
                <span className="w-full col-span-3 py-1 pl-3 border shadow-sm rounded-md ">{props.school}</span>
              </div>
              <div className="grid grid-cols-5 items-center gap-4">
                <Label htmlFor="username" className="text-right col-span-2">
                  ผู้ปกครอง
                </Label>
                <span className="w-full col-span-3 py-1 pl-3 border shadow-sm rounded-md ">{props.parent}</span>
              </div>
              <div className="grid grid-cols-5 items-center gap-4">
                <Label htmlFor="username" className="text-right text-nowrap col-span-2">
                  เบอร์โทรผู้ปกครอง
                </Label>
                <span className="w-full col-span-3 py-1 pl-3 border shadow-sm rounded-md ">{props.parent_phone}</span>
              </div>
            </div>
          </form>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  )
}
export default CardRow