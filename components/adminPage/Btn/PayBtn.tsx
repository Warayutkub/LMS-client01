import NormalBill from "@/components/NormalBtn"
import { DollarSign } from 'lucide-react';

const PayBtn = () => {
  return (
    <NormalBill href="/pay" name="จ่ายเงิน" ic={<DollarSign />}/>
  )
}
export default PayBtn