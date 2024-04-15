import { useMemo } from "react"
import { categories } from "../data/categories"
import { formatDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { useBudget } from "../hooks/useBudget"

type ExpenseDetailProps = {
  expense: Expense
}

const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {

  const { dispatch } = useBudget()

  // filtro si ambos id son iguales
  const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => dispatch({ type: "get-expense-by-id", payload: { id: expense.id } })}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );
  
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => dispatch({ type: "delete-expense", payload: { id: expense.id } })}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="bg-white shadow-lg p-10 rounded-lg w-full border-b border-gray-200
        flex items-center gap-5">
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
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default ExpenseDetail