import { formatDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"

type ExpenseDetailProps = {
  expense: Expense
}

const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {

  return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-b-gray-200 last-of-type:border-none rounded-lg flex justify-between items-center">
      <div>
        <div>
        
        </div>
        
        <div className="space-y-2">
          <p className="text-slate-600 text-2xl capitalize">{expense.expenseName}</p>
          <p className="text-slate-600 text-sm capitalize">{formatDate(expense.date!.toString())}</p>
        </div>
      </div>

      <AmountDisplay amount={expense.amount} />
    </div>
  )
}

export default ExpenseDetail