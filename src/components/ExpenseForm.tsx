import { categories } from "../data/categories"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { DraftExpense, Value } from "../types";
import Error from "./Error";
import { useBudget } from "../hooks/useBudget";

const ExpenseForm = () => {

  const [expense, setExpense] = useState<DraftExpense>({
    expenseName: "",
    amount: 0,
    category: "",
    date: new Date()
  })

  // creo el state para mostrar un mensaje de error
  const [error, setError] = useState("")
  // state para congelar el monto previo
  const [previosAmount, setPreviosAmount] = useState(0)
  const { dispatch, state, remainingBudget } = useBudget()

  useEffect(() => {
    if (state.editingID) {
      const editingExpense = state.expenses.find(currentExpense => currentExpense.id === state.editingID)      

      setExpense(editingExpense!)
      setPreviosAmount(editingExpense!.amount)
    }
  }, [state.editingID]);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    /* verifico si el campo en el que estoy escribiendo no amount si lo es caste su
    valor a numero */
    const isAmountField = ["amount"].includes(name) // true o false

    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value
    })
  }

  const handleChangeData = (value: Value) => {
    setExpense({
      ...expense,
      date: value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // validación
    if (Object.values(expense).includes("")) {
      setError("Todos los campos son obligatorios")
      return
    }

    // validación para no pasarme del limite
    // 400 - 200 = 200
    // 50 - 200 = -150
    if ((expense.amount - previosAmount) > remainingBudget) {
      setError("El gasto se sale del presupuesto")
      return
    }

    setError("")
    // agregar o editar gasto
    if (state.editingID) {
      dispatch({ type: "update-expense", payload: { expense: { id: state.editingID, ...expense } } })
  
    } else {
      dispatch({ type: "add-expense", payload: { expense } })
    }

    // reinicio el formulario limpiando el state
    setExpense({
      expenseName: "",
      amount: 0,
      category: "",
      date: new Date()
    })
    setPreviosAmount(0)
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend className="uppercase text-center text-2xl font-bold border-b-4 py-3 border-blue-500">{state.editingID ? "Editar Gasto" : "Nuevo Gasto"}</legend>

      {error && <Error>{error}</Error>}

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">Nombre del Gasto:</label>
        <input
          type="text"
          name="expenseName"
          id="expenseName"
          placeholder="Añade el nombre del gasto"
          className="bg-slate-100 p-3" 
          value={expense.expenseName}
          onChange={handleChange}
        />

        <label htmlFor="amount" className="text-xl">Cantidad:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Añada la cantidad del gasto. Ej: $300"
          className="bg-slate-100 p-3" 
          value={expense.amount}
          onChange={handleChange}
        />

        <label htmlFor="category" className="text-xl">Categorías:</label>
        <select
          name="category"
          id="category"
          className="bg-slate-100 p-3"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="">-- Seleccione la categoría de su gasto --</option>
          {categories.map(category => (
            <option value={category.id} key={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">Fecha del Gasto:</label>
        <DatePicker
          className="bg-slate-100 py-2" 
          value={expense.date}
          onChange={handleChangeData}
        />
      </div>

      <input type="submit" value={state.editingID ? "Guardar Cambios" : "Añadir gasto"} className="bg-blue-700 w-full py-2 text-white text-2xl font-bold cursor-pointer hover:bg-blue-800 transition-all rounded-lg"/>
    </form>
  )
}

export default ExpenseForm