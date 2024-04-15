import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

const ExpenseList = () => {

  const { state } = useBudget()

  const filteredExpenses = state.filteredCategory ? state.expenses.filter(expense => expense.category === state.filteredCategory) : state.expenses

  const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses])
  
  return (
    <div className="my-10">
      {!isEmpty ? (
        <>
          <p className="text-3xl text-center font-bold text-gray-600 mb-10">Listado de Gastos</p>
          {filteredExpenses.map(expense => (
            <ExpenseDetail 
              key={expense.id}
              expense={expense}
            />
          ))}
        </>
      ) : (
        <p className="text-3xl text-center font-bold text-gray-600">No hay gastos aún...</p>
      )}
    </div>
  )
}

export default ExpenseList