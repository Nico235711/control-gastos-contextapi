import { ChangeEvent, useState } from "react"

const BudgetForm = () => {

  const [budget, setBudget] = useState(0)

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    setBudget(+e.target.value)
  }

  return (
    <form className="space-y-5">
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
        className="bg-blue-800 w-full py-2 uppercase text-white text-xl font-bold hover:bg-blue-900 cursor-pointer transition-all" 
      />
    </form>
  )
}

export default BudgetForm