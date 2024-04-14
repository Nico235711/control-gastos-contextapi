import { useMemo } from "react"
import { categories } from "../data/categories"
import { formatDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"

type ExpenseDetailProps = {
  expense: Expense
}

const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {

  // filtro si ambos id son iguales
  const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])
  console.log(categoryInfo);


  return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-b-gray-200 last-of-type:border-none rounded-lg flex items-center gap-5">
      <img
        src={`/icono_${categoryInfo.icon}.svg`}
        alt="icono del gasto"
        className="w-20"
      />

      <div className="space-y-2 flex-1">
        <p className="text-slate-600 text-2xl capitalize">{categoryInfo.name}</p>
        <p className="text-slate-600 text-2xl capitalize">{expense.expenseName}</p>
        <p className="text-slate-600 text-sm capitalize">{formatDate(expense.date!.toString())}</p>
      </div>

      <AmountDisplay amount={expense.amount} />
    </div>
  )
}

export default ExpenseDetail