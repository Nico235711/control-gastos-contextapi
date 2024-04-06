import { ChangeEvent, FormEvent, useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"

const BudgetForm = () => {

  const [budget, setBudget] = useState(0)
  const { dispatch } = useBudget()

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    setBudget(+e.target.value)
  }

  // validando
  const isValid = useMemo(() => isNaN(budget) || budget <= 0, [budget])

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: "add-budget", payload: { budget } })
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-4xl text-blue-800 font-bold text-center">Definir Presupuesto</label>
        <input
          type="number"
          name="budget"
          id="budget" 
          className="border-2 p-2 rounded-lg text-center text-lg"
          value={budget}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        value="Definir Presupuesto"
        className="bg-blue-800 w-full py-2 uppercase text-white text-xl font-bold hover:bg-blue-900 cursor-pointer transition-all disabled:opacity-10" 
        disabled={isValid}
      />
    </form>
  )
}

export default BudgetForm