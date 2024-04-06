import { formatCurrency } from "../helpers"

type AmountDisplayProps = {
  label: string
  amount: number
}

const AmountDisplay = ({ label, amount }: AmountDisplayProps) => {

  return (
    <p className="font-bold text-blue-600 text-2xl">{label}: {""} 
      <span className="font-normal text-black">{formatCurrency(amount)}</span>
    </p>
  )
}

export default AmountDisplay