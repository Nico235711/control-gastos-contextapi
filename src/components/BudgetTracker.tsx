import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"

const BudgetTracker = () => {

  const { state, remainingBudget, totalExpenses } = useBudget()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="grafico de gastos" />
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        <button
          type="button"
          className="bg-pink-600 p-2 text-white font-bold text-lg shadow rounded-lg w-full uppercase"
        >
          Reiniciar App
        </button>

        <AmountDisplay 
          label="Presupuesto"
          amount={state.budget}
        />
        <AmountDisplay
          label="Disponible"
          amount={remainingBudget}
        />
        <AmountDisplay
          label="Gastado"
          amount={totalExpenses}
        />
      </div>
    </div>
  )
}

export default BudgetTracker