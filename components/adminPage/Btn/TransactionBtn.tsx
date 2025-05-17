import NormalBill from "@/components/NormalBtn"
import { ReceiptText } from 'lucide-react';

const Transaction = () => {
  return (
    <div>
      <NormalBill href="/transaction" name="ใบเสร็จ" ic={< ReceiptText/>}/>
    </div>
  )
}
export default Transaction