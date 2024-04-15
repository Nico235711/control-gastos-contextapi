import { Dispatch, ReactNode, createContext, useMemo, useReducer } from "react";
import { BudgetActions, BudgetState, budgetReducer, initialState } from "../reducers/budget-reducer";

type BudgetContextProps = {
  state: BudgetState
  dispatch: Dispatch<BudgetActions>
  totalExpenses: number
  remainingBudget: number
}

type BudgetProviderProps = {
  children: ReactNode
}

// null! -> tambien se puede poner {} as BudgetContextProps
export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children } : BudgetProviderProps) => {

  const [state, dispatch] = useReducer(budgetReducer, initialState)

  const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => total + expense.amount, 0), [state.expenses])

  const remainingBudget = state.budget - totalExpenses

  return (
    <BudgetContext.Provider value={{
      state,
      dispatch,
      totalExpenses,
      remainingBudget
    }}>
      {children}
    </BudgetContext.Provider>
  )
}