import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export const useBudget = () => {
  const context = useContext(BudgetContext)
  if (!context) {
    // tira un error si no hay un context
    throw new Error("useContext must be used within a BudgetProvider");
  }
  return context
}