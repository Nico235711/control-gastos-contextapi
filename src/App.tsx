import { useEffect, useMemo } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"
import ExpenseList from "./components/ExpenseList"
import FilterCategory from "./components/FilterCategory"

function App() {

  const { state } = useBudget()
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

  useEffect(() => {
    localStorage.setItem("budget", state.budget.toString())
    localStorage.setItem("expenses", JSON.stringify(state.expenses))
  }, [state]);
  
  return (
    <>
      <header className="bg-blue-800 p-8 max-h-72">
        <h1 className="text-center text-white text-4xl font-bold">Control de Gastos</h1>
      </header>

      <div className="max-w-3xl mx-5 lg:mx-auto bg-white mt-10 p-10 shadow-lg rounded-lg">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {/* mostrar el modal si el presupuesto es valido */}
      {isValidBudget && (
        <main className="max-w-3xl mx-5 lg:mx-auto py-10">
          <FilterCategory />
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  )
}

export default App
