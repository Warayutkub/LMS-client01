import NormalBill from "@/components/NormalBtn"
import { DollarSign } from 'lucide-react';

const PayBtn = () => {
  return (
    <NormalBill href="/pay-ment" name="การเงิน" ic={<DollarSign />}/>
  )
}
export default PayBtn