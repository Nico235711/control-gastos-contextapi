import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { BudgetActions, BudgetState, budgetReducer, initialState } from "../reducers/budget-reducer";

type BudgetContextProps = {
  state: BudgetState
  dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
  children: ReactNode
}

// null! -> tambien se puede poner {} as BudgetContextProps
export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children } : BudgetProviderProps) => {

  const [state, dispatch] = useReducer(budgetReducer, initialState)

  return (
    <BudgetContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </BudgetContext.Provider>
  )
}