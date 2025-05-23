import NormalBill from "@/components/NormalBtn"
import { BookOpenText } from 'lucide-react';

const Inception = () => {
  return (
    <NormalBill href="/inception" name="ลงทะเบียนเรียน" ic={<BookOpenText/>}/>
  )
}
export default Inception