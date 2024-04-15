import { categories } from "../data/categories"

const FilterCategory = () => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-10">
      <form>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <label htmlFor="category" className="text-3xl text-center font-bold text-gray-600">Filtrar Gastos</label>
          <select id="category" className="bg-slate-100 p-3 flex-1 rounded-lg">
            <option value="">-- Todas las Categorías --</option>
            {categories.map(category => (
              <option value={category.id} key={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  )
}

export default FilterCategory