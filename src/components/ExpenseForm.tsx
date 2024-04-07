import { categories } from "../data/categories"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ExpenseForm = () => {

  return (
    <form className="space-y-5">
      <legend className="uppercase text-center text-2xl font-bold border-b-4 py-3 border-blue-500">Nuevo Gasto</legend>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">Nombre del Gasto:</label>
        <input type="text" name="expenseName" id="expenseName" placeholder="Añade el nombre del gasto" className="bg-slate-100 p-3" />

        <label htmlFor="amount" className="text-xl">Cantidad:</label>
        <input type="number" name="amount" id="amount" placeholder="Añada la cantidad del gasto. Ej: $300" className="bg-slate-100 p-3" />

        <label htmlFor="category" className="text-xl">Categorías:</label>
        <select name="category" id="category" className="bg-slate-100 p-3">
          <option value="">-- Seleccione la categoría de su gasto --</option>
          {categories.map(category => (
            <option value={category.id} key={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">Fecha del Gasto:</label>
        <DatePicker className="bg-slate-100 py-2" />
      </div>

      <input type="submit" value="Añadir Gasto" className="bg-blue-700 w-full py-2 text-white text-2xl font-bold cursor-pointer hover:bg-blue-800 transition-all rounded-lg"/>
    </form>
  )
}

export default ExpenseForm