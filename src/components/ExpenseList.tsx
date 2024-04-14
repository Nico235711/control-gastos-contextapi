import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

const ExpenseList = () => {

  const { state } = useBudget()

  return (
    <div className="my-10">
      {state.expenses.length ? (
        <>
          <p className="text-3xl text-center font-bold text-gray-600 mb-10">Listado de Gastos</p>
          {state.expenses.map(expense => (
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