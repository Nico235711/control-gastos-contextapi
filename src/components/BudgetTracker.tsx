import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetTracker = () => {

  const { state, remainingBudget, totalExpenses, dispatch } = useBudget()
  const percentage = +((totalExpenses * 100 / state.budget).toFixed(2))  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}% Gastado`}
        styles={buildStyles({
          textSize: 10
        })}
      />
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        <button
          type="button"
          className="bg-pink-600 p-2 text-white font-bold text-lg shadow rounded-lg w-full uppercase"
          onClick={() => dispatch({ type: "reset-app" })}
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