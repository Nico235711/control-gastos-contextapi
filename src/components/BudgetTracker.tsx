import AmountDisplay from "./AmountDisplay"

const BudgetTracker = () => {

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
          amount={500}
        />
        <AmountDisplay
          label="Disponible"
          amount={500}
        />
        <AmountDisplay
          label="Gastado"
          amount={500}
        />
      </div>
    </div>
  )
}

export default BudgetTracker