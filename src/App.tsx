import BudgetForm from "./components/BudgetForm"

function App() {

  return (
    <>
      <header className="bg-blue-800 p-8 max-h-72">
        <h1 className="text-center text-white text-4xl font-bold">Control de Gastos</h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white mt-10 p-10 shadow-lg rounded-lg">
        <BudgetForm />
      </div>
    </>
  )
}

export default App
